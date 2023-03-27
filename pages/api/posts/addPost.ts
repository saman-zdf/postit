import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/prisma/client";

type RequestProps = {
  title: string;
};

enum Method {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}

export default async function handler(
  // add validation for the request body

  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === Method.POST) {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) {
      return res.status(401).json({ error: "Please sign in to make a post." });
    }

    const title: string = req.body.title;
    if (title.length > 300) {
      return res
        .status(400)
        .json({ error: "Please write a post of maximum 300 characters." });
    }

    if (title.length === 0) {
      return res
        .status(400)
        .json({ error: "Please write a post of minimum 1 character." });
    }

    // Get user
    const user = await prisma.user.findFirst({
      where: {
        email: session?.user?.email || undefined,
      },
    });

    // create post in database
    try {
      const postData = {
        title,
        userId: user?.id || "",
      };

      const newPost = await prisma.post.create({
        data: postData,
      });
    } catch (error) {
      res;
    }
  }
}
