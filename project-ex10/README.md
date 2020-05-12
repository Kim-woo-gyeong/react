# Component Styling(외부 css module 적용하기)
<pre>
1. mkdir project-ex09
2. npm init -y
    npm install ~ style-loader css-loader
3. project-ex07 src, public, webpack.config.js, babel.config.json 복사
4. npm  script 적용.

"scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  }

5. 어플리케이션 작성 - App.js
6. App.css 작성
7. style-loader, css-loader 설치 -- npm i -D style-loader css-loader

8. css-loader에 css module 설정(webpack.config.js)
9. 개발서버 실행 및 확인.
10. css의 @Import 테스트
</pre>
