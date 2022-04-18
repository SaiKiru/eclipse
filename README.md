# Eclipse - Pomodoro App

[![Licence](https://img.shields.io/github/license/SaiKiru/eclipse?style=flat)](./LICENSE)

Eclipse is an adaptive Pomodoro app for people who do not work well with strict time limits. You work and rest at your own pace, with suggested rest times in between.

<!-- Screenshots -->
| Focus Mode | Rest Mode |
| --- | --- |
| ![](https://i.imgur.com/URW7YqT.jpg) | ![](https://i.imgur.com/Sr6HwbV.jpg) |

More features and a better interface coming soon... or maybe later 😜.


## Getting Started
This project uses the Expo SDK. Make sure you have the following installed:
- yarn
- Node.js
- expo-cli
- Expo Go (Android/iOS)


## Development
Once you have those tools installed, you can do the following commands.

### Installing app dependencies:
```shell
$ yarn
```

### Running the app:
```shell
$ expo start
```


## Building the app
You'll need an Expo Developer Account for this. You'll also need an Apple Developer Account for iOS builds. For a more complete guide, refer to [Expo's documentation](https://docs.expo.dev/build/setup/).

### Default builds
This is not recommended and will soon be deprecated.
```shell
$ expo build:android  # for android
$ expo build:ios # for ios
```

### EAS Builds
EAS builds are generally smaller in size.

```shell
$ eas build --profile preview --platform android # for android
$ eas build --profile preview --platform ios # for ios
```

Alternatively, you can also use `--profile development` for dev tools.


## Bugs and Feature Request
Found a bug or problem that you want resolved? Please consider opening an issue [here](https://github.com/SaiKiru/eclipse/issues/new?template=bug_report.md).

Want to request for a feature? You can open a request [here](https://github.com/SaiKiru/eclipse/issues/new?template=feature_request.md)


## Download
You can find the latest release for Android [here](https://github.com/SaiKiru/eclipse/releases).
