import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createUser, findUserByEmail, findUserByUserName, verifyPassword } from "../data_access/auth_repository";
import { IUser } from "../models/user";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
  // Register a new user
  export async function registerUser(userData: {
    first_name: string;
    last_name: string;
    email: string;
    user_name: string;
    password: string;
    role: string;
  }): Promise<{
    user: IUser;
    token: string;
  }> {
    // Check if username already exists
    const existingUsername = await findUserByUserName(
      userData.user_name
    );
    if (existingUsername) {
      throw new Error("Username already exists");
    }

    // Check if email already exists
    const existingEmail = await findUserByEmail(userData.email);
    if (existingEmail) {
      throw new Error("Email already registered");
    }

    // Create new user
    const newUser = await createUser(userData);

    // Generate token
    const token = generateToken(newUser);

    return {
      user: newUser,
      token,
    };
  }

  // Login user
  export async function loginUser(credentials: {
    user_name: string;
    password: string;
  }): Promise<{
    user: IUser;
    token: string;
  }> {
    // Find user by username
    const user = await findUserByUserName(credentials.user_name);
    if (!user) {
      throw new Error("Invalid username or password");
    }

    // Verify password
    const isPasswordValid = await verifyPassword(
      user,
      credentials.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid username or password");
    }

    // Generate token
    const token = generateToken(user);

    return {
      user,
      token,
    };
  }

  // Helper method to generate JWT token
  export function  generateToken(user: IUser): string {
    return jwt.sign(
      {
        id: user._id,
        username: user.user_name,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "30m" }
    );
  }

