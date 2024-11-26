import Link from "next/link";
import React from "react";
import { BiWorld } from "react-icons/bi";

export function Logo() {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-2">
        <BiWorld />
        <h1 className="font-normal">Countries101</h1>
      </Link>
    </>
  );
}
