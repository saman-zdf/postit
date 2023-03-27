"use client";
import AddPost from "./components/AddPost/AddPost";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className='text-lg'>
      <h1>Hello Next</h1>
      <AddPost />
    </main>
  );
};

export default Home;
