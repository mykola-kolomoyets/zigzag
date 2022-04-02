import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from './../models/user';

export default class LangController {
  static switchLanguage = async (req: Request, res: Response) => {
    const { params: { id }, data: langData } = req.body;

    if (!id) {
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Id was not provided' });
    }

    if (!langData) {
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Data was not provided' });
    }

    const user = await User.findOne({ id }).select('+password');

    if (!user) {
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'User stats was not found by this ID' });
    }

    const updatedUser = await User.findOneAndUpdate({ id }, {
      $set: {
        language: langData.language
      }
    });

    res
      .status(StatusCodes.OK)
      .json(updatedUser);
  }
};