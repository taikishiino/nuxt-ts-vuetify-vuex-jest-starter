![GithubAction](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F379449%2F2064ed08-173b-813e-471e-72eafb3e0dd7.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=a946383a222bfe029aad1f895a81e8ed)

# Nuxt(v2.11.0) + TypeScript + Vuetify Template

- Vuex
- Jest
- Firebase
- Docker
- Github Actions

## Setup

### Slack Webhook の設定

- GitHub.Secrets に「SLACK_WEBHOOK」として設定する

### Firabase 認証トークンの設定

1. トークン取得

```bash
$ firebase login:ci
```

2. GitHub.Secrets に「FIREBASE_TOKEN」として設定する

### Firabase 環境変数の設定

@taikishiino まで firebase の環境変数をお聞きください

```bash
$ cp .env.template .env
```

## Develop

```bash
$ yarn install
# serve with hot reload at localhost:3000
$ yarn dev

# ESlint実行
$ yarn lint
$ yarn lint:fix

# テスト
$ yarn test

# generate static project(out /dist)
$ yarn generate
```
