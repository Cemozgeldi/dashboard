import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="text-lg uppercase font-bold text-white">DashApp</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
