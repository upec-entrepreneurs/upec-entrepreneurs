#!/bin/bash

if [ $TRAVIS_PULL_REQUEST == "false" ]
then

    if [ $TRAVIS_BRANCH == "master" ]
    then
        git config --global user.email "evan.suau@etu.u-pec.fr"
        git config --global user.name "esuau"
        git remote set-url origin https://${GH_TOKEN}@github.com/upec-entrepreneurs/upec-entrepreneurs

        git stash --all

        npm version patch -m "Release version %s"

        git push origin master --tags
        
        VERSION=$(grep 'version' package.json | cut -d '"' -f4)
    else 
        VERSION=latest
    fi

    docker tag upec-entrepreneurs $DOCKER_USERNAME/upec-entrepreneurs:$VERSION
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker push $DOCKER_USERNAME/upec-entrepreneurs:$VERSION

fi
