import { findAllUsers, findUserById } from "../data_access/user_repository";
import { IUser } from "../models/user";

  //Get all users
  export async function findAllUsersSer(): Promise<IUser[]> {
    try {
      return await findAllUsers();
    } catch (error: any) {
      throw new Error(`Error fetching users: ${error}`);
    }
  }

  //Get single user by id
 export async function findUserByIdSer(id: string): Promise<IUser | null> {
    try {
      const user = await findUserById(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      return user;
    } catch (error: any) {
      throw new Error(`Error fetching user by id: ${error}`);
    }
  }



