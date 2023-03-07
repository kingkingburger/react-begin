const path = require('path')

module.exports ={
    name: 'word-relay-dev',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // 중요!
    entry:{
        app: ['./client']
    }, // 입력

    module: {
        rules:[{ //여러개의 규칙들
            test: /\.jsx?/, //js,jsx 파일에 rulse을 적용하겠다!
            loader: 'babel-loader', // babel과 webpack 연결
            options:{
                presets:['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'), // 현재폴더경로(C:\user\webstorm\react-practice\...)/dist
        filename: 'app.js'
    } // 출력
}