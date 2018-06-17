const path = require('path');

const config = {
    extraNodeModules: {
        moment: path.resolve(__dirname, 'node_modules/moment')
    },
    getProjectRoots() {
        return [
            path.resolve(__dirname),
            path.resolve(__dirname, '../share')
        ];
    }
};

module.exports = config;

// Tips:
// 如果要 enabled *.jsx 要加入 getSourceExts: () => [ 'jsx', 'mjs', 'js' ]
// 但 react-native 裡面建議所有副檔名為 .js

// Refernece:
// https://github.com/react-community/create-react-native-app/issues/232
// https://github.com/facebook/react-native/pull/5233
