#!/bin/sh
curl http://rebuildshownotesjson.herokuapp.com/episodes >| ./public/episodes.json

cd ./public
git add -A
git commit -m "update shownotes"
git push origin gh-pages


