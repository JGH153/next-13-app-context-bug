"use client";

import { useContext } from "react";
import { NameContext } from "./name-provider";
import Link from "next/link";

export default function Home() {
  const nameContext = useContext(NameContext);

  const changeName = () => {
    nameContext.updateName && nameContext.updateName("Pondus");
  };
  return (
    <main>
      <h1>Works here</h1>
      <Link href={"/about"}>
        Broken here
      </Link>
      <p>Name: {nameContext.name}</p>
      <button onClick={() => changeName()}>Change name to Pondus</button>
    </main>
  );
}
