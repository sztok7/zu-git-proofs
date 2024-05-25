

const ranks = [
    { name: "Newcomer", min: 0, max: 0.01 },
    { name: "Contributor", min: 0.01, max: 0.05 },
    { name: "Active Contributor", min: 0.05, max: 0.1 },
    { name: "Core Contributor", min: 0.1, max: 0.3 },
    { name: "Maintainer", min: 0.3, max: 0.45 },
    { name: "Lead Maintainer", min: 0.45, max: 0.6 },
    { name: "Community Advocate", min: 0.6, max: 0.8 },
    { name: "Project Steward", min: 0.8, max: 1 },
    { name: "Ecosystem Champion", min: 1, max: 1.2 },
    { name: "Legend", min: 1.2, max: Infinity },
];

// Function to determine rank based on contribution ratio
export function getRank(contributionRatio: number) {
    for (const rank of ranks) {
        if (contributionRatio >= rank.min && contributionRatio < rank.max) {
            return rank.name;
        }
    }
    return "Newcomer"; // default rank if none match
}
