import { Request, Response } from "express";
import User from "../Models/User.model"; 

export const getUserProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = (req as any).user.id; 

    const user = await User.findById(userId).select("-password"); 
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      name: user.name,
      email: user.email,
      phone: user.phone
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
