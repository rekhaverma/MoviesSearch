# Simple Movies Search App

Repo Link: `https://github.com/rekhaverma/MoviesSearch`

## System Requirements
1. Java Development Kit.
2. Android Studio
3. Genymotion OR your physical device connected with system and usb debugging on.

## Steps to run on your app 
1. Clone repo https://github.com/rekhaverma/MoviesSearch.git
2. run cd MoviesSearch on terminal
3. Run npm install
4. npm run android-linux
5. Check with adb devices that a device needs to be connected to run the app.

The folder structure that you will have is :

```
<root-of-project>
└─── android
└─── ios
└─── node_modules
└─── src
│   └─── components
│   |        index.js
│   |   └─── searchInput
│   |   |       index.js
│   |   └─── searchResultList
│   |   |       index.js
│   └─── scenes
│   |        index.js
│   |        main.js
│   |        routes.js
│   └─── styles
│   |        index.js
│   └─── utilities
│   |        index.js
│   |        api.js
│   |        navigationService.js
│   |        storage.js
│   |        validations.js
│   
|    App.js
|    App.json
|    config.js
|    index.js
|    LICENSE
|    package.json
|    readme.md
```

##Notes: 
With genymotion, need to add path of android sdk in genymotion settings e.g /home/rekha/Android/Sdk

