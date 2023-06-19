"use client";
import React, { useContext } from "react";
import { NameContext } from "../name-provider";

export default async function Context() {
  const nameContext = useContext(NameContext);

  // console.log((React as any).version)
  console.log(nameContext.name, "nameContext.name");

  const changeName = () => {
    nameContext.updateName && nameContext.updateName("Mike");
  };

  return (
    <main>
      <h1>Breaks here</h1>
      <p>Name: {nameContext.name}</p>
      <button onClick={() => changeName()}>Change name to Mike</button>
    </main>
  );
}
