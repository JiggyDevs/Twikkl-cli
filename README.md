<div align="center">
    <img src="https://github.com/JiggyDevs/twikkl-app/blob/master/assets/imgs/logos/logo.png?raw=true" height="250" width="250" alt="TwikkL Icon" />
</div>

- [Intro](#intro)
- [Demo](#demo)
- [Getting started](#getting-started)
  - [Tech stack](#tech-stack)
  - [Deploy locally](#deploy-locally)
  - [Styling](#styling)
- [Contributing](#contributing)

## Intro

Welcome to the **TwikkL** app! This app provides live-streaming, video recording, sharing services, and supports the mobile development community in learning.

If you have any experience and would like to support us or share your point of view, or if you are a beginner with questions, feel free to join the [Discussions](https://github.com/JiggyDevs/twikkl-app/discussions).

## Demo

Check out the following animated image for a demo of the latest version of the app:

<details>
  <summary>Expand 👈</summary>
  <img alt="demo-here" src="docs/demo/demo-1.gif" />
</details>

## Getting started

Before you start, make sure you have at least ~15 minutes to set up your development environment.

### Tech stack

The most important technologies used in this app are:

1. React v18
2. React Native v0.71
3. React Native CLI (Command Line Interface)
4. React Native Paper v5 (UI library)

If you are not familiar with some of these technologies, don't worry. However, we recommend you to learn the basics. You can start by following the [React Native basics guide](https://reactnative.dev/docs/getting-started).

To begin, ensure that the following tools are installed on your local machine:

1. Node.js (We recommend [LTS version](https://nodejs.org/en/) higher than v16)
2. A JavaScript IDE such as VS Code, WebStorm, etc.
3. Git (Refer to [GitHub's guide on how to set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git))

### Deploy locally

Once you're ready with the mentioned tools, follow these steps to import the source code:

```
git clone https://github.com/JiggyDevs/twikkl-app.git
```
2. Next, navigate to the project directory and install the dependencies using npm:
```
cd twikkl-app
npm install
```
3. ### Run the app

#### Android

To run the app on an Android emulator or connected device, use the following command:

```
npx react-native run-android
```


#### iOS

To run the app on an iOS simulator or connected device, use the following command:

```
npx react-native run-ios
```


### Styling

The styling integration must follow the design prototype, which is currently exposed as a few examples under the [/docs](/docs/design-imgs) folder.

If you are interested in viewing all the design examples, you can access our [Figma link](https://www.figma.com/file/TtG5t7l8EQIA4BwfFMRAAI/TwikkL?node-id=418%3A36&t=rxx6eB7V3se1yrOr-1) by creating a free account.

Also, note the theme setup in the [theme.ts](/src/configs/theme.ts) file, which follows the [React Native Paper theming guide](https://callstack.github.io/react-native-paper/docs/guides/theming/).

Finally, for icons, we recommend following the [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) library.

## Contributing

Please see the [contributing](CONTRIBUTING.md) guide for detailed instructions on how to get started with us. We accept any sort of help that can make this project better, even a word like "Good luck!" 😍.


