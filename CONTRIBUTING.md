# Contributing

Cool, that you are interested in contributing. We like pull request and suggestions from everyone.

Things that increase the chance that a pull request will be accepted:

-   Write clean code.
-   Write tests for your new code and regression tests after fixing a bug.
-   Write a good commit message and include the issue number at the end `#123`.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Development

Follow the steps to make a PR.
- Fork the repository
- Clone
- Make your changes
- Push your commits
- Make a pull request on the `staging` branch.

### Install
```
npm ci
```
### Start development server
```
npm run dev
```
### Code style
```
npm run lint
npm run pretty
```

## Naming conventions

### Branching

Branch names consist of a type and the describing branch name itself, which is always **lowercase** separated by **dashes**.
It follows this structure `<type>/<issue-id>/<name>`.
For more detailed information check out the source [Branch Types by CKSource](https://docs.ckeditor.com/ckeditor5/latest/framework/guides/contributing/git-commit-message-convention.html)

| Types       | Changelog | Description                                        |
| ----------- | --------- | -------------------------------------------------- |
| `feature`   | yes       | New feature I add or expand                        |
| `fix`       | yes       | Bug fix                                            |
| `docs`      | yes       | Updated documentation                              |
| `revert`    | yes       | Revert of some commit                              |
| `codestyle` | no        | Our beloved code style improvements / refactorings |
| `tech`      | no        | Other kinds of technical changes                   |

Examples:

-   `feature/123/add-settings-option-xyz`
-   `fix/124/solve-unexpected-settings-errors`

### Commit Messages

Just write a commit message neat and clean in brief.

#### For example

-   ... Add new function to do X #123
-   ... Add test for X #123
-   ... Refactor subsystem X for readability #123
-   ... Update getting started documentation #123
-   ... Remove deprecated methods #123

### Pull Requests

-   Name the PR like its branch name (e.x. `Tech/123/my branch name`). The name is usually created by GitHub automatically
-   Add the correct labels
