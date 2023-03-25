import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../prisma/client";

export const authOptions = {
  // Configure adapter
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    // Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Github
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // Twitter
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    // Discord
    // DiscordProvider({
    //   clientId: process.env.DISCORD_ID,
    //   clientSecret: process.env.DISCORD_SECRET,
    // }),
  ],
};
export default NextAuth(authOptions);
