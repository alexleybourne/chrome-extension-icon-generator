# Chrome Extension Icon Generator

![GitHub followers](https://img.shields.io/github/followers/alexleybourne?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/AlexLeybourne?style=social)

Tool Link: [Chrome Extension Icon Generator](alexleybourne.github.io/chrome-extension-icon-creator)

This is a simple tool to generate icons for Chrome extensions. It takes any image above 128x128px and generates all the sizes needed for Chrome extensions.

It will create a `16px`, `32px`, `48px` and a `128px` icon from the image you upload.

It will then give you the code to add to your manifest.json file.

```
"icons": {
  "16": "icon16.png",
  "32": "icon32.png",
  "48": "icon48.png",
  "128": "icon128.png"
},
```

Chrome docs for chrome extension manifest v3 icons: [Here](https://developer.chrome.com/docs/extensions/mv3/manifest/icons/)

Icons from [Hero Icons](https://heroicons.com/)
