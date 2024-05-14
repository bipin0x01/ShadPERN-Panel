import express from "express";
import "dotenv/config";
import "module-alias/register";

import connectDatabase from "@/bootstrap/database";
import initialMiddlewares from "@/middlewares";

import baseRouter from "@/routes";
import { User } from "@/entity";
import { createSuperAdmin } from "@/utils/seeder";

//global variables
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const port = process.env.PORT || 8000;

const getApp = async () => {
  const app = express();

  await initialMiddlewares(app);
  const response = await connectDatabase();
  // create super admin if no user exists
  await createSuperAdmin();

  app.use("/api", baseRouter(response));

  return app;
};

async function startApp() {
  const app = await getApp();

  app.listen(port, () => {
    console.log(
      `API SERVER RUNNING ON PORT: ${port} and worker id at ${process.pid} | Connected DB is ${process.env.DB_NAME} | Env: ${process.env.NODE_ENV}`
    );
  });
}

startApp();
