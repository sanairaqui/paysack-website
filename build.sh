#!/usr/local/bin/zsh
rm -rf .cache
rm -rf docs
npm run build
mv dist docs
