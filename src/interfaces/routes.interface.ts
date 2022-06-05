import { Router, NextFunction, Request, Response } from "express";

export type APIRoute = (req: Request, res: Response, next: NextFunction) => any

export interface Routes {
  path: string;
  router: Router;
}

export interface RESTRoute {
  url: string,
  method: "get" | "post" | "patch" | "delete",
  restrictTo: string[],
  middlewares: ((req: Request, res: Response, next: NextFunction) =>void)[],
  controller: APIRoute
}