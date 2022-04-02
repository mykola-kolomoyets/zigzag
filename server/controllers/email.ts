import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { sendMail } from './../constants/send-email';

export default class EmailController {
  static notifyByEmail = async (req: Request, res: Response) => {
    const { text, field } = req.body;

    await sendMail(text, field);

    res
      .status(StatusCodes.CREATED)
      .json({ message: `${text}: ${JSON.stringify(field)}` });
  }
};