#!/bin/bash
xterm -title "Root" -e "cd root-config && yarn start" &
xterm -title "Nav" -e "cd nav && yarn start --port 9001" &
xterm -title "List" -e "cd task-list && yarn start --port 9002" &
xterm -title "Create" -e "cd create-task && yarn start --port 9003" &
xdg-open http://localhost:9000