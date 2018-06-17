React-Shared-Boilerplate
===

React and React-Native using a shared folder.

---
## React Setup
- Add config in webpack.

```
const babelSettings = {
    extends: path.join(__dirname, '/.babelrc')
};

resolveLoader: {
        modules: ['node_modules']
    }

resolve: {    
    modules: [
            path.join(__dirname, 'node_modules')
        ]
    }

loaders: [`babel-loader?${JSON.stringify(babelSettings)}`]    
```

---
## React-Native Setup
- Add rn-cli.config.js in the root of React-Native project.

```
const path = require('path');

const config = {
    extraNodeModules: {
        moment: path.resolve(__dirname, 'node_modules/moment') // If the share folder use some modules, you need to include it
    },
    getProjectRoots() {
        return [
            path.resolve(__dirname),
            path.resolve(__dirname, '../share') // The folder you want to include
        ];
    }
};

module.exports = config;
```

- Add script in package.json

```
"clear": "watchman watch-del-all && rm -rf ios/build/ && rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/haste-* && rm -rf $TMPDIR/metro-* && rm -rf node_modules && npm install && react-native link && npm start -- --reset-cache"
```

- Add package.json in the root of share project

```
{
    "name": "share",
    "private": true
}
```

---
## Using Share Modules

#### React
- Just using it like a normal module

```
import lib from 'relative/path/to/share/src/utils'
```

#### React-Native
- Because I add a package.json in root of share project, so we can use absolute path to use it

```
import lib from 'share/src/utils'
```

- Every time, you modify module in rn-cli.config.js, MUST execute the script

```
npm run clear
react-native run-ios
```