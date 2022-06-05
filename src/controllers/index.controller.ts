import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    res.json("Ok! - Version 1")
  };
}

export default IndexController;
