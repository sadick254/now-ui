#!/usr/bin/env node

const {exec} = require('child_process');

console.log("Building Packages: 🔨")
// preact
exec("sed -e 's/preact/react/g' -e 's/react.h/react.createElement/g' dist/index.js > dist/react.js")

// hyperapp
exec("sed 's/preact/hyperapp/g' dist/index.js > dist/hyperapp.js")

// rename
exec('mv dist/index.js dist/preact.js')
exec('mv dist/react.js dist/index.js')
