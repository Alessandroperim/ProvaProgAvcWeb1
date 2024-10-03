import { Request, Response } from 'express';
import prisma from '../prisma';

export const getAllComments = async (req: Request, res: Response) => {
  const comments = await prisma.comment.findMany();
  res.json(comments);
};

export const createComment = async (req: Request, res: Response) => {
  const { post_id, user_id, content } = req.body;
  const comment = await prisma.comment.create({
    data: { post_id, user_id, content },
  });
  res.json(comment);
};
