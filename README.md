# Notezor

A sample note-taking app for web practice.

# How was this project setup?

## Frontend

For the frontend a "ready-of-the-box" bundler and development tool called [Vite](https://vitejs.dev) was used.
Frontend folders were automatically generated with following command:

```shell
npm create vite@latest frontend -- --template react-ts
```

`npm create` is a method that is used to pull blueprints that will set up your project and
in this case - it pulled "vite@latest" with template called "react-ts" (react with typescript) and placed it
inside "frontend" folder where frontend part of the application will be. Only thing for us to do is
go to frontend folder, run `npm install` to download necessary dependencies and run it via `npm run dev`.

## Backend

## Shared (root)

There is no much going on here, just few things were done:

- package was initialised with `npm init`
- Prettier was installed with `npm install prettier`
- Pre-commit hook was set up using husky and lint-staged package

```shell
npm install --save-dev husky lint-staged
npx husky init
node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
```

- Configuration for lint-staged was made to run prettier on commit

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

- Finally custom script was added to package.json if you wish to format manually
