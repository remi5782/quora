
require('ignore-styles');
require('url-loader');
require('file-loader');
require('babel-polyfill');
require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/syntax-dynamic-import',
        'dynamic-import-node',
        "transform-class-properties"
    ]
})

require('./server')