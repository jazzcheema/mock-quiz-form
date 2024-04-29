"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/quiz" passHref>
                <p className="hover:text-gray-300">Quiz</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
