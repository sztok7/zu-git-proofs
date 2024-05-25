import jsonData from './artifacts/badge-members.json'


export async function getGithubBadhes(githubUsername: string): Promise<string|undefined> {
    const badges: string[] = []
    Object.entries(jsonData).forEach(([badge, badgeMembers]) => {
        if((badgeMembers as string[]).includes(githubUsername.toLowerCase())) {
            badges.push(badge)
        }
    })
    if(badges.length == 0) {
        return undefined
    }
    return badges.join(",")
}