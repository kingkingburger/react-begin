const path = require('path')

module.exports ={
    name: 'wordreplay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', 'jsx']
    },
    // 중요!
    entry:{
        app: ['./client.jsx']
    }, // 입력
    output: {
        path: path.join(__dirname, 'dist'), // 현재폴더경로(C:\user\webstorm\react-practice\...)/dist
        filename: 'app.js'
    } // 출력
}