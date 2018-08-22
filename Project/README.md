## 시작하기 전에

- [Node.js](https://nodejs.org/)를 사용하여 빌드하므로 이미 설치되어 있지 않다면 Node.js를 먼저 설치합니다.
- Node.js는 최신 LTS 버전을 사용합니다.
- NPM을 사용해도 되지만 [Yarn](https://yarnpkg.com/en/docs/install) 사용을 권장합니다.
- 코드 스타일 통일을 위해 [EditorConfig](http://editorconfig.org/#download), [Prettier](https://prettier.io/) 사용합니다.
따라서, 이를 제공하는 에디터 사용을 권장합니다.

## 시작하기

저장소 클론 후

1. `yarn install` 혹은 `npm install`
2. 빌드 + 서버: `yarn start` 혹은 `npm start`
3. 배포용 빌드: `yarn run build` 혹은 `npm run build`


## 프로젝트 디렉토리 구조

- demo/: 빌드된 파일
- src/: 모든 소스 코드를 담고 있습니다.
  - js/*.js: demo/js/*.js 파일 생성 시 엔트리 파일
  - css/*.less: demo/css/*.css 파일 생성 시 엔트리 파일
  - img/**/*.{jpg,png}: demo/img/*.{jpg,png} 이미지 파일
