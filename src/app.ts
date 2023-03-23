import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";

import { AppDataSource } from "./data-source";
import appRoutes from "./routes/appRoutes";
import { User } from "./models/User";

if (!process.env.PORT) {
  throw new Error("PORT from env is not provided");
}

const port = process.env.PORT;

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());

    app.use(appRoutes);

    app.listen(port);

    const user = new User("Alexandrapol");
    await user.save();
    console.log(user);
    console.log("User was saved on DB");
  })
  .catch((error) => {
    console.log(error);
  });
