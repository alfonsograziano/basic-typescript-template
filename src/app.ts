import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import { Routes } from "@interfaces/routes.interface";
import logger from "@utils/logger";
import { keys } from "@config/env/keys";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();

    this.env = keys.NODE_ENV;
    this.port = keys.PORT;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);

    });
  }

  public getServer() {
    return this.app;
  }


  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.options("*", cors());

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    this.app.use(helmet());
    this.app.use(hpp());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }

}

export default App;
