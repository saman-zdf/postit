import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import image from "../../public/vercel.svg";
import LogOut from "./LogOut";

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className='flex justify-between item-center py-8'>
      <Link href={"/"}>
        <h1 className='font-bold text-lg'>Send it.</h1>
      </Link>
      <ul className='flex gap-6'>
        {!session?.user ? (
          <Login />
        ) : (
          <>
            <LogOut image={session?.user?.image || image} />
          </>
        )}
      </ul>
    </nav>
  );
}
