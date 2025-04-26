import { Request, Response, NextFunction } from 'express';
import { AppError } from '../middleware/errorHandler';
import { generateIdea as generateRandomIdea } from '../utils/ideaGenerator';
import { refineIdeaWithAI } from '../utils/aiRefiner';

export const generateIdea = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category = 'All' } = req.query;
    const idea = generateRandomIdea(category as string);
    res.status(200).json({
      status: 'success',
      data: idea,
    });
  } catch (error) {
    next(new AppError('Failed to generate idea', 500));
  }
};

export const refineIdea = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idea } = req.body;

    if (!idea) {
      return next(new AppError('Please provide an idea to refine', 400));
    }

    const refinedIdea = await refineIdeaWithAI(idea);
    res.status(200).json({
      status: 'success',
      data: refinedIdea,
    });
  } catch (error) {
    next(new AppError('Failed to refine idea', 500));
  }
}; 