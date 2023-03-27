"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function createPost() {
  const [title, setTitle] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // Create a post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log("Data after create", data);

        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className='bg-white my-8 p-8 rounded-md'>
      <div className='flex flex-col my-4'>
        <textarea
          name='title'
          onChange={(e) => {
            console.log("Value", e.target.value);

            setTitle(e.target.value);
          }}
          value={title}
          placeholder="What's on your mind?"
          className='p-4 text-lg rounded-md my-2 bg-gray-200'
        />
      </div>
      <div className={`flex item-center justify-between gap-2`}>
        <p
          className={`font-bold text-sm ${
            title && title?.length > 300 ? "text-red-500" : "text-gray-700"
          }`}
        >{`${title?.length ? title?.length : 0}/300`}</p>

        <button
          disabled={isDisabled}
          className='text-sm bg-teal-600 text-white py-2 px-6 rounded-md disabled:opacity-25'
          type='submit'
        >
          Create a post
        </button>
      </div>
    </form>
  );
}
