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

Inside folder "backend", a new npm package was initialised using `npm init`.
Then the following packages were installed:

- `typescript` so we can compile typescript code
- `nodemon` so that we can make changes and have our server auto-restart
- `ts-node` so we can run typescript code directly without compiling to plain JS first
- `express`: our server library that we will use create our server

Then, in order to set up typescript environment we generated "tsconfig.json" file with
following command: `npx tsc --init`.

We create "src" folder where our source files will be. Following that we make two adjustments to the
"tsconfig.json" file. We need to tell typescript where our source files will be (src folder), for that we change
"rootDir" option:

```
    /* Modules */
     "module": "commonjs" /* Specify what module code is generated. */,
-    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
+    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
     // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
     // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
     // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
```

Following that, we need one more adjustment to "tsconfig.json" file - we need to tell typescript
where to place compiled (pure js) files, otherwise by default typescript will just place them next to original source files.
We want that to be "dist" folder.
For that we change "outDir" option

```
     // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
     // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
     // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
-    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
+    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
     // "removeComments": true,                           /* Disable emitting comments. */
     // "noEmit": true,                                   /* Disable emitting files from a compilation. */
     // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */

```

Having that done, the root file with hello world server example was created ("src/index.ts"), however it was
also necessary to install typescript types for express (they are not included by default in express, some libraries do include them):

```shell
npm install @types/express
```

And lastly, we just need to add some npm scripts so we can run and/or bundle our project.

For development needs we want two things:

- We want to run project as simple as possible
- We don't want to manually restart server every time we make change
- In order to achieve that we'll create a "dev" script that will call nodemon and point nodemon to index.ts file
  which will. Since it is ".ts" file, nodemon is smart enough to detect that we have "ts-node" and will use that, allowing us
  to skip compiling step and run typescript file directly.
  This is how package.json scripts section looks like after we add that script:

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts"
  }
}
```

and finally we need command to build compiled, production-ready files into dist folder. For that will create "build" script
that will simply invoke typescript cli and rest is done by typescript (remember that we did configure tsconfig.json file to do so).
Here is final look of our scripts section

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "npx tsc"
  }
}
```

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
