import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { UserService } from "@/services";
import { z } from "zod";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session({ session, token }) {
      session.user = {
        ...session.user,
        first_name: token.first_name,
        last_name: token.last_name,
      };
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          try {
            const response = await UserService.login({
              email,
              password,
            });

            if (response?.user) {
              return response.user;
            }

            return null;
          } catch (error: any) {
            if (error.response.data?.message) {
              throw new Error(error.response.data.message);
            }

            throw new Error("An error occurred while logging in");
          }
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: process.env.NEXTAUTH_COOKIE_NAME!,
      options: {
        httpOnly: false,
        sameSite: "lax",
        path: "/",
        secure: true,
        domain: process.env.NEXTAUTH_COOKIE_DOMAIN,
      },
    },
  },
});
export { handler as GET, handler as POST };
