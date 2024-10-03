import { Request, Response } from 'express';
import prisma from '../prisma';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { user_id, content, image_url } = req.body;
  const post = await prisma.post.create({
    data: { user_id, content, image_url },
  });
  res.json(post);
};
