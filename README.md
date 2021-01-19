# To-do Application

## Todo application developed with React, using **single-spa** framework.

### Install all dependencies in once

Just need to run:

```
./install.sh
```

### Automatic Execution

You can run all the micro applications by once and the browser will pop-up the application

```
./run.sh
```

### How to execute correctly

Firstly run the json-server. Access json-server folder and run(by default it will run on port 3000):

```
json-server --watch db.json

```

Access root-config folder and run (by default it will run on port 9000):

```
yarn start
```

Access nav folder and run:

```
yarn start --port 9001
```

Access task-list folder and run:

```
yarn start --port 9002
```

Access create-task folder and run:

```
yarn start --port 9003
```

Access task-detail folder and run:

```
yarn start --port 9004
```

Now you can access the entire application opening http://localhost:9000
