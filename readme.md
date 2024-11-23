[link](https://nabendu82.medium.com/create-a-pern-todo-list-e74e3668731f)

what to do?

1. make sure backend up and can send data to database
2. make sure frontend up and can connect to backend
3. prepare Dockerfile for both frontend and backend
4. use docker compose with database and database gui
5. gitlab pipline, docker build only without test

how to use?

- modify `.env` if needed
- main page http://localhost:3000/
- pgadmin http://localhost:8008/
- server 8001

check database with query

- `SELECT * FROM todo;`

after run docker compose;

1. database postgres container and postgres_data volume and database for todos will be created
2. pgadmin container to view postgres will be created
3. client container will be created
4. server container will be created and server will create table inside todos database in postgres