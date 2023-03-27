"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type LoggedProps = {
  image: string;
};
export default function LogOut({ image }: LoggedProps) {
  console.log(image);

  return (
    <li className='flex gap-8 items-center'>
      <button
        className='bg-gray-700 text-white text-sm px-6 py-w rounded-md'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      {image ? (
        <Link href={"/dashboard"}>
          <Image
            className='rounded-full'
            alt='user-image'
            width={32}
            height={32}
            src={image}
          />
        </Link>
      ) : null}
    </li>
  );
}
