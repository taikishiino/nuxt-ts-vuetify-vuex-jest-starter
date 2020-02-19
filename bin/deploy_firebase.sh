#/bin/bash

echo "===> START Deploy Firebase"
./node_modules/.bin/firebase deploy --token=${FIREBASE_TOKEN}