import { Request, Response, NextFunction } from 'express';

interface User {
  id: string;
  role: string;
}

interface RequestWithUser extends Request {
  user?: User;
}

const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userReq = req as RequestWithUser;
    if (!userReq.user || !roles.includes(userReq.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

export const isAdmin = checkRole(['admin']);
export const isUser = checkRole(['user', 'admin']); 