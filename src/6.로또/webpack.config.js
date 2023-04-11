const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports ={

    mode:'development',
    devtool:'eval', // 개발때는 eval, 배포에서는 hidden-source-map
    resolve:{
        extensions: ['.js','.jsx'] // entry.app에서 확장자 생략 가능
    },

    entry:{
        app: ['./client']
    },

    module:{
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env', { //자동으로 옛날 브라우저 지원하는애
                        targets:{
                            browsers: ['> 5% in KR'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:['react-refresh/babel']
            }
        }],
    },

    plugins:[
        new ReactRefreshWebpackPlugin()
    ],

    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/', // '/dist, express.static(__dirname, 'dist')
    },

    devServer:{
        devMiddleware:{publicPath: '/dist'},
        static:{directory: path.resolve(__dirname)}, // 실제로 존재하는 파일의 경로, 최상위 폴더에 index.html이 있으니 뒤에 아무것도 안적어도됩!
        hot: true
    }


}