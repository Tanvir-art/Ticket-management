import jwt from "jsonwebtoken";
import { User } from "./user.interface";
import { userModel } from "./user.model";
import bcrypt from "bcryptjs";
import config from "../../config";

const signupUser = async (user: User) => {
  const { name, email, password, phone } = user;

  const existingUser = await userModel.findOne({ email });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const isFirstUser = (await userModel.countDocuments()) === 0;

    const Newrole = isFirstUser ? "admin" : "user";

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      role: Newrole,
    });
    const user = await userModel.create(newUser);
    return user;
  } else {
    throw new Error("User already exists");
  }
};

const loginUser = async (Login: User) => {
  const { email, password } = Login;

  const existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const user = existingUser;
  const accessToken = jwt.sign(
    {
      name: existingUser.name,
      email: existingUser.email,
      password: existingUser.password,
      role: existingUser.role,
    },
    config.jwt_secret as string,
    { expiresIn: "2d" }
  );

  return { user, accessToken };
};

export const userService = {
  signupUser,
  loginUser,
};
