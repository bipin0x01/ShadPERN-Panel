import "reflect-metadata";
import { DataSource } from "typeorm";
// entity imports
import Entities from "../entity";
import { configDotenv } from "dotenv";

configDotenv(
  process.env.NODE_ENV === "development"
    ? { path: ".env.development" }
    : {
        path: ".env",
      }
);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [...Object.values(Entities)],
  ssl: process.env.NODE_ENV === "development" ? false : true,
});

const connectDatabase = async () => {
  try {
    const response = await AppDataSource.initialize();

    return response;
  } catch (error: any) {
    console.error(`Error in database connection: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
