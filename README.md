# angularStarterKit
This is a very simple starter kit using: Angular 1.5 + typescript + webpack + bootstrap + jQuery + font awesome

### Getting started

The following npm packages will need to be installed globally:

typescript
typings
webpack
webpack-dev-server
phantomjs

Global modules can be installed as follows:

```
> npm install -g karma 
```

It would be preferable to install all global modules on the same command like so:

```
> npm install -g typescript typings webpack webpack-dev-server phantomjs
```

This may take some time! so might want to have a cup of coffee. :)
For the typings installation please ensure that you install version 1.0.* or above as there were breaking changes in the 1.0.0 release.

## There are two methods for getting started with this repo.

#### Using Git

```
> git clone https://github.com/wastefactory/angularStarterKit.git
```

or by just downloading the zip file.

### Local npm installation

```
> cd angularStarterKit
> npm install
```

This will install the local dependencies.
After this has finished you will need to bind the local installation of ts-loader to the global install of typescript:

```
> npm link typescript
```

If you do not link these two packages there may be resolutions errors so please ensure that you do this.

### Typings installation
Typings manages the TypeScript definitions for the included project dependencies e.g. AngularJS and it's core modules.

To install the type definition files run the command:

```
> typings install
```

### Local webpack dev server
To start the local webpack development server:

```
> npm run start
```

This will start a local webserver and build the static assets on port 3000


Have fun :)
