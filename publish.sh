#!/usr/local/bin/zsh
export GITHUB_PUBLISH=true

./build.sh
git add .
git commit -am "update build"
git push