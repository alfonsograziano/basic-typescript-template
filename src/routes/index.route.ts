import { Router } from 'express';
import { Routes, RESTRoute } from '@interfaces/routes.interface';
import IndexController from "@controllers/index.controller";

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  private controller = new IndexController()

  private routes: RESTRoute[] = [
    {
      url: "/",
      method: "get",
      restrictTo: [],
      middlewares: [],
      controller: this.controller.index
    }
  ]

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.routes.map(route => this.router[route.method](route.url, ...route.middlewares, route.controller));
  }


}

export default IndexRoute;
