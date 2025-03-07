"use client";

import { useState } from "react";
import { search } from "./functions/search";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueEmpty, setSearchValueEmpty] = useState(false);

  const validateSearchValue = async () => {
    if (searchValue.length <= 0) {
      setSearchValueEmpty(true);
    } else {
      setSearchValueEmpty(false);
      await search(searchValue);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="self-center">
          <h1>Dictionary App</h1>
        </div>

        <div className="flex justify-center">
          <div className="flex col-auto">
            <input
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              type="text"
              placeholder="Search here for a word..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValueEmpty && <p className="">Input cannot be empty.</p>}
          </div>
          <input
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            type="button"
            value="Search"
            onClick={() => validateSearchValue()}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
