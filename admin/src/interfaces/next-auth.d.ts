import NextAuth from "next-auth";
import IRole from "./IRole";

declare module "next-auth" {
  /**
   * Extending session to include custom properties
   **/
  interface Session {
    user: {
      /** The user's role */
      first_name: string;
      last_name: string;
      role?: IRole;
    } & DefaultSession["user"];
  }
}

/**
 * Extend the built-in JWT types with custom properties.
 */
declare module "next-auth/jwt" {
  interface JWT {
    role: IRole;
  }
}
