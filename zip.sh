#!/bin/bash

if [ -f extension.zip ]; then
    rm extension.zip
fi

cd public && zip -r ../extension.zip . && cd ..

