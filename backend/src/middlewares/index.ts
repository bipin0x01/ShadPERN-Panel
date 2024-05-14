import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

const initialMiddlewares = (app: Express) => {
  if (process.env.NODE_ENV == "production") {
    app.use(morgan("combined"));
  } else {
    app.use(morgan("dev"));
  }

  app.set("trust proxy", 1);
  app.use(cookieParser());
  app.use(express.static("uploads"));

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(limiter);

  //TODO: white list domains in production
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
};

export default initialMiddlewares;
