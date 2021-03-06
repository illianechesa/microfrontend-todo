#!/bin/bash
gnome-terminal --title "json-server" --execute bash -c "cd json-server && json-server --watch db.json" 
gnome-terminal --title "Root Config" --execute bash -c "cd root-config && yarn start" 
gnome-terminal --title "Navigation" --execute bash -c "cd nav && yarn start --port 9001" 
gnome-terminal --title "Task List" --execute bash -c "cd task-list && yarn start --port 9002" 
gnome-terminal --title "Create Task" --execute bash -c "cd create-task && yarn start --port 9003" 
gnome-terminal --title "Task Detail" --execute bash -c "cd task-detail && yarn start --port 9004" 
gnome-terminal --title "Stats" --execute bash -c "cd stats && ng serve --port 9005" 
xdg-open http://localhost:9000