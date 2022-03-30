import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import Stats from './../models/stats';

export default class StatsController {
  static get = async (req: Request, res: Response) => {
    const { id } = req.query;
    const userStats = await Stats.findOne({ id });

    res
      .status(StatusCodes.OK)
      .json({
        stats: userStats
      });
  }

  static update = async (req: Request, res: Response) => {
    const { params: { id }, data: updateData } = req.body;


    if (!id) {
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Id was not provided' });
    }

    if (!updateData) {
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Data was not provided' });
    }


    const userStats = await Stats.findOne({ id });

    if (!userStats) {
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'User stats was not found by this ID' });
    }

    const updatedStats = await Stats.findOneAndUpdate({ id }, {
      $set: {
        totalGames: userStats.get('totalGames') + 1,
        ...updateData
      }
    });


    res
      .status(StatusCodes.OK)
      .json(updatedStats)
  }
};