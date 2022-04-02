import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { sendMail } from './../constants/send-email';

import User from './../models/user';
import Stats from './../models/stats';
import LangController from './lang';

export default class AuthController {
  static register = async (req: Request, res: Response) => {
    const user = await User.create({...req.body });
    const token = user.createJWT();

    const userStats = await Stats.create({
      id: user._id,
      totalGames: 0,
      moves: 0,
      bestGame: {
        time: 0,
        field: {
          width: 0,
          height: 0
        }
      }
    })
    // .then(() => {
    //   LangController.switchLanguage(user._id, req.body.language);
    // });

    const { password, ...userData } = req.body;

    res
      .status(StatusCodes.CREATED)
      .json({
        user: {
          ...userData,
          id: user._id
        },
        token,
        stats: userStats
      });
  }

  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email }).select('+password');

    if (!user) {
      user = await User.findOne({ name: email }).select('+password');

      if (!user) {
        res
        .json(StatusCodes.NOT_FOUND)
        .json({ message: 'User data not found' })
      }
    }

    const token = user.createJWT();

    const isCorrectPassword = await user.comparePasswords(password);

    if (user && !isCorrectPassword) {
      throw new Error('Invalid password');
    }

    user.password = undefined;

    const stats = await Stats.findOne({ id: user._id });

    if (!stats) {
      res
        .json(StatusCodes.NOT_FOUND)
        .json({ message: 'User data not found' })
    }

    res
      .status(StatusCodes.OK)
      .json({
        user,
        token,
        stats
      });
  }

  static update = async (req: Request, res: Response) => {
    res.send('update user');
  }

  static getUser = async (req: Request, res: Response) => {
    const { id } = req.query;
    const user = await User.findOne({ id }).select('+password');

    const userStats = await Stats.findOne({ id });

    if (!user || !userStats) {
      throw new Error('User data not found');
    }

    res
      .status(StatusCodes.OK)
      .json({ user, stats: userStats });
  }

  static notifyByEmail = async (req: Request, res: Response) => {
    // const { text, field } = req.body;

    // await sendMail(text, field);

    res
      .json(StatusCodes.CREATED)
      .json({ message: 'email was sent' });
  }
};