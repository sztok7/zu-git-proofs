import { $, write } from 'bun';
import { readdir } from 'node:fs/promises';

import { REPOSITORIES } from './repositories/config.ts';
import { getRank } from './contributions-config.ts';

const contributions: Record<string, number> = {};

for (const [repository, repositoryWeight] of Object.entries(REPOSITORIES)) {
    const repositoryName = repository.split('/').pop();

    try {
        // this line will throw an error if the repository does not exist
        await readdir(`./repositories/${repositoryName}`);
    } catch (e) {
        // repository does not exist

        await $`git clone ${repository} ./repositories/${repositoryName}`;
    } finally {
        const repositoryContributions = await $`cd ./repositories/${repositoryName} && git pull && git shortlog -sne --all`.text();
        const totalCommitCount = await $`cd ./repositories/${repositoryName} && git rev-list --all --count`.text();

        const lines = repositoryContributions.split('\n');

        for (const line of lines) {
            if (!line) {
                continue;
            }

            // Regex to match the number of commits and email
            const pattern = /^\s*(\d+)\s+.*<(.+)>$/;
            const match = pattern.exec(line);

            if (!match) {
                continue;
            }

            const numberOfCommits = parseInt(match[1]);
            const email = match[2];

            if (!contributions[email]) {
                contributions[email] = (numberOfCommits / totalCommitCount) * repositoryWeight;
            } else {
                contributions[email] += (numberOfCommits / totalCommitCount) * repositoryWeight;
            }
        }
    }
}

const ranks = Object.entries(contributions).reduce((acc, [email, contributionRatio]) => {
    const rank = getRank(contributionRatio);
    if (acc[rank]) {
        acc[rank].push(email);
    } else {
        acc[rank] = [email];
    }

    return acc;
}, {} as Record<string, string[]>)

await write('contributions.json', JSON.stringify(ranks, null, 2));
