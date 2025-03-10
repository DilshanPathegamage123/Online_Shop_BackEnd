import User, { IUser } from "../models/user";

  //Register User
  /// Find user by user name
  export async function findUserByUserName(user_name: string): Promise<IUser | null> {
    return await User.findOne({ user_name });
  }

  /// find uder by email
  export async function findUserByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }

  // Save new user
 export async function createUser(userData: {
    first_name: string;
    last_name: string;
    email: string;
    user_name: string;
    password: string;
    role: string;
  }): Promise<IUser> {
    const newUser = new User(userData);
    return await newUser.save();
  }

  // Verify password
  export async function verifyPassword(user: IUser, password: string): Promise<boolean> {
    return await user.comparePassword(password);
  }

