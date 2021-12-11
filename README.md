# Focus App

Focus is an app created with Expo (React Native) + Redux + Cognito.

## 🚀 How to use

## Install dependencies
```bash
yarn install
```

## Configure Amplify
### Install amplify CLI
```bash
npm i -g @aws-amplify/cli
```

### Configure amplify CLI
You can choose your preferred form of authentication. (I prefer access keys)
```bash
amplify configure
```

### Init project
```bash
amplify init
```

### Add auth
You must check to use the default settings, that you want to use email as an identifier, and that you do not want to use advanced settings

```bash
amplify add auth
```


## Run project
```bash
yarn start
```


## Useful links
[Expo Blog](https://blog.expo.dev/how-to-build-cloud-powered-mobile-apps-with-expo-aws-amplify-2fddc898f9a2)