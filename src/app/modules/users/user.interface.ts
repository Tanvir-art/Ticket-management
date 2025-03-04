export type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: "admin" | "user";
};
