import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/User.model";
import dotenv from "dotenv";

dotenv.config();

interface DecodedToken {
  email: string;
  id: string;
}

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1]; 
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

      (req as any).user = await User.findOne({ email: decoded.email }).select("-password"); 

      if (!(req as any).user) {
        return res.status(404).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};


interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction): Promise<any> => {
  const authHeader = req.header('Authorization');
  const token = authHeader ? authHeader.replace('Bearer ', '') : '';
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: 'JWT_SECRET is not defined' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as DecodedToken;
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};


