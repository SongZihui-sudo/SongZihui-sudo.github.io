"use strict";
const path = require('path'); // node自带包
module.exports = {
    entry: './ts/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') //获取输出路径
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }]
    },
    resolve: {
        extensions: ['.ts'] // 解析对文件格式
    },
};
