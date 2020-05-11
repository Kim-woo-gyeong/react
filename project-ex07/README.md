# Component 구현 & 속성

## React 기본개념
> 1. 프로젝트 생성 및 메니페스트(package.json) 초기화    
> > 1-1. 프로젝틑 디렉토리 생성   
> > 1-2. src, public 디렉토리 생성   
> 2. 메니페스트(package.json) 초기화   
> > npm init -y   
> 3. webpack 설치   
> > npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react   
> > npx webpack -v   
> 4. webpack 설정(webpack.config.js)   
``` 
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path:path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 8080,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
} 
```
> 5. babel 설정
``` 
{
    "presets": [
        [
            "@babel/env",{
                "targets": {
                    "ie": "11",
                    "edge": "80",
                    "firefox": "73",
                    "chrome": "82",
                    "opera": "69",
                    "safari": "13"
                }
            }
        ],"@babel/preset-react"
    ]
}
```
> 6. npm scripts(package.json, scripts 섹션 수정)   
```
"scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  }
  ```
## 속성(Props) 상태(State)
> 7. 화면 디자인
> 8. 컴포넌트 작성 + 조합 
> 9. 속성