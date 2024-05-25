// @ts-expect-error
import jsonData from './artifacts/badge-members.json' assert {type: 'json'};


export async function getGithubBadhes(githubEmails: string[]): Promise<string|undefined> {
    const badges = new Set()
    Object.entries(jsonData).forEach(([badge, badgeMembers]) => {
        githubEmails.forEach((email) => {
            if((badgeMembers as string[]).includes(email.toLowerCase())) {
                badges.add(badge)
            }
        })
    })
    if(badges.size == 0) {
        return undefined
    }
    return Array.from(badges.values()).join(",")
}