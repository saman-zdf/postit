import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "../../../prisma/client";

const adapter = PrismaAdapter(client);

export const authOptions = {
  // Configure adapter
  adapter: PrismaAdapter(client),
  secret: process.env.AUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    // Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
};
export default NextAuth(authOptions);
