import Link from "next/link";
import React from "react";

export default function Stairs({ children }) {
  return (
    <div className="px-20">
      <div className="flex gap-8 py-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {children}
    </div>
  );
}
