"use client";

import { CountryList } from "@/components/landing/country-list";
import React from "react";

export function Main() {
  const [search, setSearch] = React.useState<string>("");

  return (
    <section className="py-36 overflow-x-clip">
      <div className="text-center">
        <div className="w-full flex flex-col text-black dark:text-white p-2 rounded-full font-bold justify-center">
          <h1 className="text-5xl">
            Search all the countries you&apos;d like!
          </h1>
          <p className="text-xl font-normal text-black/50">
            Countries101 provides you all the countries in the world
          </p>
          <div className="w-full h-full flex justify-center items-center mt-6">
            <CountryList search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>
    </section>
  );
}
