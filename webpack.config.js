const path = require('path');

module.exports = {
    entry: './index.html',
    output: {
        filename: 'index.html',
        path: path.resolve(__dirname, 'dist'),
    },
};
