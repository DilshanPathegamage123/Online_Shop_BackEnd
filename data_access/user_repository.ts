import User, { IUser } from "../models/user";

  //Get all users
  export async function findAllUsers(): Promise<IUser[]> {
    return await User.find();
  }

  //Get single user by id
  export async function findUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

