#!/bin/bash
cd json-server && json-server --watch db.json &
cd root-config && yarn start &
cd nav && yarn start --port 9001 & 
cd task-list && yarn start --port 9002 & 
cd create-task && yarn start --port 9003 & 
cd task-detail && yarn start --port 9004 &
cd stats && ng serve --port 9005 & 
open "http://localhost:9000"
