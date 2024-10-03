import { Request, Response } from 'express';
import prisma from '../prisma';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, profile_image, bio } = req.body;
  const user = await prisma.user.create({
    data: { name, email, password, profile_image, bio },
  });
  res.json(user);
};
