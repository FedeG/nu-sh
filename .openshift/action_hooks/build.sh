#!/bin/bash

export HOME=$OPENSHIFT_REPO_DIR
cd ${OPENSHIFT_REPO_DIR}

echo "installing dependencies..."
npm install -g bower
bower install
npm install