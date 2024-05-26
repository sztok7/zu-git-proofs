# zu-git-proofs

Zu-Pass-Proofs project enables anonymous feedback in forums by assigning credibility badges based on GitHub contributions (e.g., Core Ethereum Contributor). Zu-Pass-Proofs ensures that participants can stay anon while being recognized and trusted with proven expertise. This approach fosters high-quality and reliable community discussions and governance while first maintaining user privacy, using [Zupass](https://zupass.org/).

## Development Prerequisites

- :gear: [NodeJS](https://nodejs.org/) (LTS)
- :toolbox: [Yarn](https://yarnpkg.com)
- :scroll: [Discourse](https://github.com/discourse/discourse)

## Packages Overview

 Package           | Description                                                        |
| ---------------- |--------------------------------------------------------------------|
| discourse-plugin | Plugin for Discourse (Ruby, Ember.js)                              |
| git-contributions-script | Indexing Git protocol scripts in TypeScript                |
| zu-git-pass-client | Frontend app for auth between Discourse <> Github and Zupass (React) |
| zu-git-proofs-server | Backend app serving as Github oauth login and Zupass feed server (Fastify) |
