import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { DataSource } from "typeorm";

import users from "./users";

const baseRouter = (datasource: DataSource) => {
  const router = Router();

  router.use("/users", users);

  router.get("/db-status", (req, res) => {
    return res.status(StatusCodes.OK).json({
      status: "success",
      message: "Database connected successfully",
      current_db: datasource.options.database,
      in_env: process.env.DB_NAME,
    });
  });

  router.use("*", (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
      status: "error",
      message: "Not Found",
    });
  });

  return router;
};

export default baseRouter;
