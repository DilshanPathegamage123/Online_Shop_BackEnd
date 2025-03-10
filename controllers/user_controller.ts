import { Request, Response } from "express";
import { findAllUsersSer } from "../Services/user_service";
import { findUserById } from "../data_access/user_repository";

//Get all users
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await findAllUsersSer();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Get single user
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const singleUser = await findUserById(req.params.id);
    res.status(200).json(singleUser);
  } catch (error: any) {
    res.status(500).json({ message: error.messsage });
  }
};
