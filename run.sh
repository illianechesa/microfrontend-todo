#!/bin/bash
cd root-config && yarn start 
cd ..
cd nav && yarn start --port 9001
cd ..
cd task-list && yarn start --port 9002
cd .. 
cd create-task && yarn start --port 9003
cd ..
xdg-open http://localhost:9000