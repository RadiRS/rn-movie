# React Native Movie Apps

![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/RadiRS/rn-movie/actions/workflows/ci.yml/badge.svg)](https://github.com/RadiRS/rn-movie/actions/workflows/ci.yml)
[![Android Build](https://github.com/RadiRS/rn-movie/actions/workflows/android-build.yml/badge.svg)](https://github.com/RadiRS/rn-movie/actions/workflows/android-build.yml)
[![iOS Build](https://github.com/RadiRS/rn-movie/actions/workflows/ios-build.yml/badge.svg)](https://github.com/RadiRS/rn-movie/actions/workflows/ios-build.yml)

This project was created for Populix Front-End entry test.

![app-preview](preview.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Yarn (Package Manager)](https://yarnpkg.com)
- [Android Studio for Android Development](https://developer.android.com/studio)
- [XCode for iOS Development](https://developer.apple.com/xcode/)

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository via http or ssh

```
git clone https://github.com/RadiRS/rn-movie.git your_app_name
```

```
git clone git@github.com:RadiRS/rn-movie.git your_app_name
```

Enter into project directory and install all dependencies

```
cd your_app_name && yarn
```

Run the project via command line

```
yarn android   //android
yarn ios       //ios
```

<p>&nbsp;</p>

## Running the tests

### Break down into end to end tests

Unit Tests and Component Test with Jest. End-to-End Test with Detox.

For testing just run script command

```
yarn test
```

```
yarn e2e-ios
```

<p>&nbsp;</p>

## Deployment

### Android

Setup your signed apk by follow [this](https://facebook.github.io/react-native/docs/signed-apk-android) tutorial and run this command

```
yarn build-android
```

### iOS

Setup your iOS app by follow [this](https://reactnative.dev/docs/publishing-to-app-store) tutorial

<p>&nbsp;</p>

## Built With

- [React Native](https://facebook.github.io/react-native/) - The mobile framework used
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps
- [Redux Toolkit](https://redux-toolkit.js.org) - Toolset for efficient Redux development

<p>&nbsp;</p>

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

<p>&nbsp;</p>

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RadiRS/rn-movie/tags).

<p>&nbsp;</p>

## Authors

- **Radi Rusadi** - _Initial work_ - [RadiRS](https://github.com/RadiRS)

See also the list of [contributors](https://github.com/RadiRS/rn-movie/contributors) who participated in this project.

<p>&nbsp;</p>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
