import { User } from "@/entity";
import { IUser } from "@/interfaces";

const superAdmin: Partial<IUser> = {
  first_name: process.env.SUPERADMIN_FIRST_NAME || "Super",
  last_name: process.env.SUPERADMIN_LAST_NAME || "Admin",
  email: process.env.SUPERADMIN_EMAIL || "admin@tokenpilot.com",
  password: process.env.SUPERADMIN_PASSWORD || "password",
  provider: "credentials",
};

export const createSuperAdmin = async () => {
  await User.create({
    first_name: superAdmin.first_name,
    last_name: superAdmin.last_name,
    email: superAdmin.email,
    password: superAdmin.password,
    provider: superAdmin.provider,
  }).save();
};
