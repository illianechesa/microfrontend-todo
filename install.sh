#!/bin/bash
cd root-config && yarn install && yarn upgrade
cd ..
cd nav && yarn install && yarn upgrade
cd ..
cd task-list && yarn install && yarn upgrade
cd .. 
cd create-task && yarn install && yarn upgrade
cd ..
cd task-detail && yarn install && yarn upgrade
cd ..
cd stats && npm i 
cd ..