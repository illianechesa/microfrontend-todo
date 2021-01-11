#!/bin/bash
gnome-terminal --title "json-server" --execute bash -c "json-server --watch db.json" 
gnome-terminal --title "Root Config" --execute bash -c "cd root-config && yarn start" 
gnome-terminal --title "Navigation" --execute bash -c "cd nav && yarn start --port 9001" 
gnome-terminal --title "Task List" --execute bash -c "cd task-list && yarn start --port 9002" 
gnome-terminal --title "Create Task" --execute bash -c "cd create-task && yarn start --port 9003" 
xdg-open http://localhost:9000