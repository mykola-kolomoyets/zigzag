import { Request, Response, NextFunction } from 'express';

import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message
    });
}

export default errorHandlerMiddleware;