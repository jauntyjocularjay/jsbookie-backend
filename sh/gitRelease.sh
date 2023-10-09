#!/bin/bash

git commit . -m "Release Merge"
git push

git checkout Dev
git merge ReplitBranch -m "Release Merge"
git push

git checkout main
git merge Dev -m "Release Merge"
git push

git checkout Release
git merge main -m "Release Merge"
git push

git checkout ReplitBranch