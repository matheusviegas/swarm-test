#!/bin/bash

mkdir app
cp ../server.js ./app/
cp ../package.json ./app/

docker build -t api_teste:v1 .

rm -rf ./app