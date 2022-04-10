# Contributing

Cool, that you are interested in contributing. We like pull request and suggestions from everyone.

Things that increase the chance that a pull request will be accepted:

- Write clean code, strictly follow **eslint** and **prettier** config.
- Write tests for your new code and regression tests after fixing a bug.
- Discuss in the issue if you need to use a new package/dependency.
- Write a good commit message and include the issue number at the end `#123`.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Development

Follow the steps to make a PR.

- Propose in which you want to work by creating an issue (if the issue is not available)
- Fork the repository
- Clone
- Install the dependicies if necessary (please don't use a package manager other than **yarn**)
- Make your changes
- Push your commits
- Make a PR on the `dev` branch.
- Mention the issue you have worked on.

#### Install

```
yarn install
```

#### Start development server

```
yarn dev
```

#### Code style

##### Eslint

```
yarn lint
yarn lint:fix
```

##### Prettier

```
yarn format
yarn format:fix
```

A successful build is advised before a push.

## Naming conventions

### Branching

Branch names consist of a type and the describing branch name itself, which is always **lowercase** separated by **dashes**.
It follows this structure `<type>/<issue-id>/<name>`.

| Types    | Changelog | Description                                        |
| -------- | --------- | -------------------------------------------------- |
| `feat`   | yes       | New feature I add or expand                        |
| `fix`    | yes       | Bug fix                                            |
| `docs`   | yes       | Updated documentation                              |
| `revert` | yes       | Revert of some commit                              |
| `style`  | no        | Our beloved code style improvements / refactorings |
| `tech`   | no        | Other kinds of technical changes                   |

Examples:

- `feat/123/add-settings-option-xyz`
- `fix/124/solve-unexpected-settings-errors`

### Commit Messages

Just write a commit message neat and clean in brief.

#### For example

- ... Add new function to do X #123
- ... Add test for X #123
- ... Refactor subsystem X for readability #123
- ... Update getting started documentation #123
- ... Remove deprecated methods #123

### Pull Requests

- Name the PR like its branch name (e.x. `tech/123/branch-name`). The name is usually created by GitHub automatically
- Add the correct labels
