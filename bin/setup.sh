#/bin/bash

echo "===> START SETUP"
echo "Node version: `node --version`"
echo "NPM version: `npm --version`"

npm install -g yarn${YARN_VERSION}

echo "yarn version: `yarn --version`"

yarn install
