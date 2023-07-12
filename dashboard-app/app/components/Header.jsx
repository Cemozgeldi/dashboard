import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

import React from "react";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      {/* we create this component with a fragment */}
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        {/* we create a nav with tailwind classes and we use flexbox to align the
        items */}
        <div className="flex items-center">
          {/* we create a div with flexbox to align the items */}
          <Link href="/">
            {" "}
            {/* we create a link to the home page */}
            <div className="text-lg uppercase font-bold text-white">
              DashApp
            </div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link
                href="/sign-in"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign Up
              </Link>
            </>
          )}{" "}
          {/* we create a sign in and sign up links in this div */}
          {userId && (
            <Link
              href="profile"
              className="text-gray-300 hover:text-white mr-4"
            >
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />{" "}
            {/* we create a user button.After the click it's rotate you to the home page.It's gives as a little avatar. */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
