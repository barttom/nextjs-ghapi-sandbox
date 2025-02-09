# Sample NextJS & GitHub API App

NextJS project for displaying GitHub's repositories <br>
Features:
* list of items
* searching by name
* sorting by name & GH stars
* pagination

Other:
* code style checks on GithubActions
* testing environment with Vitest
* powered by ChackraUI



## Running the app

1. Install dependencies
```bash
yarn install
```
2. Add github api key to your .env file.
```bash
cp .env.example .env
```
Add Your token to `GH_TOKEN=` variable. You can generate it on [Settings](https://github.com/settings/personal-access-tokens) page.

3. run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Knwown issues & limitations
* GitHub api have a limitations of displaying only first 1000 results.
* This app displays repository name, owne, created date and number of stars. However, API allows sort only by stars and name

## TODO
* add integration tests for home page, handle mocks with MSW
* add table view option
* add caching results mechanism
