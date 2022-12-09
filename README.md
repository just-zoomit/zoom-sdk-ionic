# Zoom Ionic SDK for Ionic Angular <span align="center"><img src="https://camo.githubusercontent.com/557d4f78734a4f82ae8306f2b6703165694c98bdc374e5a2dbd72619d1e547d2/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f436f6d6d756e6974792d50726f6a6563742e706e67" width="200px" max-height="100px" style="margin:auto;"/></span>

**Note: This is a community project initiated by Zoom. Zoom does not actively enhance the interfaces in the Ionic plugin. If you would like to contribute, please contact us or submit a pull request. Thanks! :)**

<div align="center">
<img src="https://camo.githubusercontent.com/f819328f236e10c1a0bb7a157f34c2e141150285adbd38757ffc3af4ec824158/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f757365722d636f6e74656e742e73746f706c696768742e696f2f383938372f31353431303133303633363838" width="400px" max-height="400px" style="margin:auto;"/>
</div>

## Table of Contents
- [Zoom Ionic SDK for Ionic Angular ](#zoom-ionic-sdk-for-ionic-angular-)
  - [Table of Contents](#table-of-contents)
  - [Obtaining SDK packages from Marketplace](#obtaining-sdk-packages-from-marketplace)
  - [Previous Versions](#previous-versions)
  - [Latest SDK Notifications](#latest-sdk-notifications)
  - [Get Started](#get-started)
  - [Installation](#installation)
  - [Setup (IN-PROGRESS) ](#setup-in-progress)
- [Set the Package ID.](#set-the-package-id)
  - [Full Documentation \&\& Community Support](#full-documentation--community-support)
  - [What is Zoom Ionic SDK?](#what-is-zoom-ionic-sdk)
  - [Disclaimer](#disclaimer)
  - [Need help?](#need-help)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
    - [My ionic environment](#my-ionic-environment)

## Obtaining SDK packages from Marketplace

We are pleased to inform you that the Zoom SDK packages are moving to the Zoom App Marketplace. The packages are now available in the same location as your SDK Key & Secret. This change aims to provide you with a unified and seamless experience so that you can access the required SDK resources in one place.

If you have not used Zoom SDK before, please follow the steps in https://marketplace.zoom.us/docs/guides/build/sdk-app to create an SDK app on the Marketplace.

If you already have an SDK app created, login to the **[Zoom App Marketplace](https://marketplace.zoom.us/)** using your developer account, click the **Manage** button on the top-right corner and locate your SDK app.
<img src="https://camo.githubusercontent.com/e1098d6fb90e936267717461ac4cd4a1b19a04656f71fcfeedac9f73a1a38f9e/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f6d6b742d30312e706e67" style="margin:1vh 1vw;"/>

Click on your SDK app, you can find the desired SDK packages from the **Download** tab
<img src="https://camo.githubusercontent.com/11f73667b94414f4fd840513124b198d5c11a8677d9df4d84ab401c15831e32b/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f6d6b742d30322e706e67" style="margin:1vh 1vw;"/>

## Previous Versions

If you are looking for the previous versions, please visit https://github.com/zoom/zoom-sdk-ios/releases

## Latest SDK Notifications
1. Please note that our Ionic SDK only support Ionic Angular.


## Get Started
1. npm install
2. Ionic Cordova plugin add ../../Zoom/
3. Ionic Cordova platform add android
4. Ionic Cordova platform add iOS
5. Ionic cordova run android
6. Ionic cordova run ios

## Installation

To get started, clone the repo:

`$ git clone https://github.com/zoom/zoom-sdk-ionic`

> To build, copy, and deploy Ionic apps to iOS simulators and devices with a single command you will need the [Ionic CLI](https://ionicframework.com/docs/intro/cli). 

## Setup (IN-PROGRESS) 

1. Once cloned, navigate to the `zoom-sdk-ionic-0.9-with-590` directory:

   `$ cd zoom-sdk-ionic-0.9-with-590/Sample/sample-app-ionic`


2. Then install and configure the dependencies:
   
   `$ npm install`
  
   `$ ionic cordova platform add android`

   `$ ionic cordova platform add iOS`

3.  Install Zoom plugin:
    
    `$ ionic cordova plugin add ../../Libs/Zoom/`

4. Open the `zoom-sdk-ionic-0.9-with-590` directory in your code editor.
   
    `$ ionic cordova run android --device`
    
    To boot up a live-reload server, build, and deploy the app, run the following:

    `$ ionic cordova run ios --device`

   

# Set the Package ID.

5.  For Cordova, open Xcode. Use File » Open and locate the app. Open the app's platforms/ios directory.

   
   `$ cd ~/Zoom-SDKs/zoom-sdk-ionic/zoom-sdk-ionic-0.9-with-590/Sample/sample-app-ionic/platforms`

6.  In Project navigator, select the project root to open the project editor. Under the Identity section, verify that the Package ID that was set matches the Bundle Identifier.



## Full Documentation && Community Support
You can find the full Zoom Ionic SDK documentation and the community support forum here:
<div align="center">
   <a target="_blank" href="https://marketplace.zoom.us/docs/sdk/hybrid-frameworks/ionic" style="text-decoration:none">
   <img src="https://camo.githubusercontent.com/56cdfebcb6fd07b4f263a414bcdc075fa7cd6c6905057811bd0ca3235414b263/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f446f632d627574746f6e2e706e67" width="350px" max-height="350px" style="margin:1vh 1vw;"/>
   </a>
   <a target="_blank" href="https://devforum.zoom.us/c/mobile-sdk" style="text-decoration:none">
   <img src="https://camo.githubusercontent.com/d785750e179aaf681e09e1b8dc8c26e86115255bce201fc8871e82a7eb4c7e5a/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f73646b2e7a6f6f6d2e75732f466f72756d2d627574746f6e2e706e67" width="350px" max-height="350px" style="margin:1vh 1vw;"/>
   </a>
</div>

## What is Zoom Ionic SDK?
Zoom SDK makes it easy to integrate Zoom with your mobile applications, and boosts up your applications with the power of Zoom.

* **Easy to use**: Our SDK is built to be easy to use. Just import the libraries, call a few functions, and we will take care all video conferencing related stuffs for you.
* **Localizable**: Our SDK naturally supports 7 major languages, so you can grow your applications internationally.

## Disclaimer

**Please be aware that all hard-coded variables and constants shown in the documentation and in the demo, such as Zoom Token, Zoom Access, Token, etc., are ONLY FOR DEMO AND TESTING PURPOSES. We STRONGLY DISCOURAGE the way of HARDCODING any Zoom Credentials (username, password, API Keys & secrets, SDK keys & secrets, etc.) or any Personal Identifiable Information (PII) inside your application. WE DON’T MAKE ANY COMMITMENTS ABOUT ANY LOSS CAUSED BY HARD-CODING CREDENTIALS OR SENSITIVE INFORMATION INSIDE YOUR APP WHEN DEVELOPING WITH OUR SDK**.

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.

## License

Please refer to [LICENSE.pdf](LICENSE.pdf) file for details

## Acknowledgments

* :star: If you like our SDK, please give us a "Star". Your support is what keeps us moving forward and delivering happiness to you! Thanks a million! :smiley:
* If you need any support or assistance, we are here to help you: [Zoom Developer Community Forum](https://devforum.zoom.us/);

---
Copyright ©2021 Zoom Video Communications, Inc. All rights reserved.

### My ionic environment

Run `npm list -g` for global packages:

```

├── @angular/cli@12.2.2
├── @angular/common@12.2.2
├── @angular/core@12.2.2
├── @angular/forms@12.2.2
├── @angular/platform-browser@12.2.2
├── @angular/router@12.2.2
├── @ionic/angular@5.6.14
├── @ionic/cli@6.20.2
├── cordova-res@0.15.3
├── cordova@10.0.0
├── corepack@0.12.1
├── ionic-cli@0.0.0
├── ios-deploy@1.11.4
├── ios-sim@9.0.0
├── native-run@1.4.0
├── nodemon@2.0.12
├── npm@8.15.0

```

Run `npm list` for local packages:

```

├── @angular-devkit/build-angular@12.1.4
├── @angular-eslint/builder@12.0.0
├── @angular-eslint/eslint-plugin-template@12.0.0
├── @angular-eslint/eslint-plugin@12.0.0
├── @angular-eslint/template-parser@12.0.0
├── @angular/cli@12.1.4
├── @angular/common@12.1.5
├── @angular/compiler-cli@12.1.5
├── @angular/compiler@12.1.5
├── @angular/core@12.1.5
├── @angular/forms@12.1.5
├── @angular/language-service@12.0.5
├── @angular/platform-browser-dynamic@12.1.5
├── @angular/platform-browser@12.1.5
├── @angular/router@12.1.5
├── @ionic-native/core@5.36.0
├── @ionic-native/splash-screen@5.36.0
├── @ionic-native/status-bar@5.36.0
├── @ionic-native/zoom@5.36.0
├── @ionic/angular-toolkit@4.0.0
├── @ionic/angular@5.9.4
├── cordova-android@9.1.0
├── cordova-ios@6.2.0
├── cordova-plugin-androidx-adapter@1.1.3
├── cordova-plugin-androidx@3.0.0
├── cordova-plugin-device@2.1.0
├── cordova-plugin-ionic-keyboard@2.2.0
├── cordova-plugin-ionic-webview@4.2.1
├── cordova-plugin-splashscreen@5.0.4
├── cordova-plugin-statusbar@2.4.3
├── cordova.plugin.zoom@5.9.0 -> ./../../Libs/Zoom


```
Run `cordova plugin list` To list installed Cordova plugins:
```
cordova-plugin-androidx-adapter 1.1.3 "cordova-plugin-androidx-adapter"
cordova-plugin-androidx 3.0.0 "cordova-plugin-androidx"
cordova-plugin-device 2.0.2 "Device"
cordova-plugin-ionic-keyboard 2.2.0 "cordova-plugin-ionic-keyboard"
cordova-plugin-ionic-webview 4.2.1 "cordova-plugin-ionic-webview"
cordova-plugin-splashscreen 5.0.2 "Splashscreen"
cordova-plugin-statusbar 2.4.2 "StatusBar"
cordova-plugin-whitelist 1.3.3 "Whitelist"
cordova.plugin.zoom 5.9.0 "Zoom"

```
Run `ionic info`  from your project folder for Ionic environment info:
Ionic:
```
   Ionic CLI                     : 6.20.2 (/usr/local/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 5.9.4
   @angular-devkit/build-angular : 12.1.4
   @angular-devkit/schematics    : 12.2.18
   @angular/cli                  : 12.1.4
   @ionic/angular-toolkit        : 4.0.0
```

Cordova:
```
   Cordova CLI       : 10.0.0
   Cordova Platforms : android 9.1.0, ios 6.2.0
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 6 other plugins)

```



System:
```
   Android SDK Tools : 26.1.1 (/Users/DonteSmall/Library/Android/sdk)
   ios-deploy        : 1.11.4
   ios-sim           : 8.0.2
   NodeJS            : v16.17.0 (/usr/local/bin/node)
   npm               : 8.15.0
   OS                : macOS Monterey
   Xcode             : Xcode 14.1 Build version 14B47b

```

Utility:

````
   cordova-res (update available: 0.15.4) : 0.15.3
   native-run (update available: 1.7.1)   : 1.4.0

````