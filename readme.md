# Unleash server (Node)

This is the quick repository for running Unleash server locally using Node.

## Prerequisite

This app requires `PostgresSQL` installed and a database setup to run properly.Any other requirements are optional.

- Install `PostgresSQL` from here - [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- (Optional) Install `pgAdmin` - [https://www.pgadmin.org/download/](https://www.pgadmin.org/download/)
- Once PostgresSQL is installed and running, run this command to setup database:
```sql
psql postgres <<SQL
CREATE USER unleash_user WITH PASSWORD 'password';
CREATE DATABASE unleash;
GRANT ALL PRIVILEGES ON DATABASE unleash to unleash_user;
SQL
```
- These are the step-by-step manual process to do the same:
  - Create a new user called `unleash_user` with password `password`.
  - Create a new database called `unleash`.
  - Give the user, `unleash_user`, all privileges for the database `unleash`.

## Launch the Unleash server

- Install the dependencies - `pnpm i`.
  - `npm` or `Yarn` can be used instead of `pnpm`.
- Start the app - `pnpm start`.
- Open browser and point to this URL for Unleash server - [http://localhost:4242](http://localhost:4242)
- Login using these default credentials:
  - Username - `admin`
  - Password - `unleash4all`

### Note

- Any change in details of database can be done as long as the same is reflected in `server.js` file.