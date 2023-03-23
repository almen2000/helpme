import "reflect-metadata";
import { DataSource } from "typeorm";

// if (!process.env.POSTGRES_USER) {
//   throw new Error("no postgres user is provided");
// }
// if (!process.env.POSTGRES_PASSWORD) {
//   throw new Error("no postgres password is provided");
// }
// if (!process.env.POSTGRES_DB) {
//   throw new Error("no postgres db is provided");
// }
// if (!process.env.POSTGRES_PORT) {
//   throw new Error("no postgres port is provided");
// }

const pgUsername = process.env.POSTGRES_USER;
const pgPassword = process.env.POSTGRES_PASSWORD;
const pgDB = process.env.POSTGRES_DB;
const pgPort = Number(process.env.POSTGRES_PORT);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: pgPort,
  username: pgUsername,
  password: pgPassword,
  database: pgDB,
  // url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "alexandr",
//   password: "0000",
//   database: "bot",
//   synchronize: true,
//   logging: true,
//   entities: ["src/models/*.ts"],
//   migrations: ["src/migrations/*.js"],
//   subscribers: [],
// });
