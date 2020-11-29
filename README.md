# Express-ImgGenAPI
An image generator api

## Prerequisites
All node_modules are not installed by default.
You can install them via the following command.
```sh
npm i
```

## How to use
To use this API. Simply run the program, and make the appropriate request to x endpoint with the required data.

All endpoints will return a base64 string. You will need to convert this into a buffer for it to be sent via discord if you wish to use this API like that.

The recommended NPM package to use for this is Axios.
