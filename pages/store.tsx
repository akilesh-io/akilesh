import Link from "next/link";
import React from "react";


export default function Store() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/" className="hover:underline">
        <h1 className="text-4xl font-bold">Store is under construction</h1>
      </Link>
    </div>
  );  
}