const path = require('path')
const webpack = require('webpack')

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
                ]
            }
        }],
    },

    plugins:[
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],

    output:{
        filename:'app.js',
        path: path.join(__dirname,'dist'),
    }
}