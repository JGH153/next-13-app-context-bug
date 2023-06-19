"use client";

import { createContext, useState } from "react";

interface NameContext {
  name: string;
  updateName?: (name: string) => void;
}

export const NameContext = createContext<NameContext>({
  name: "Greger",
});

export default function NameProvider({ children }: any) {
  const [name, setName] = useState("Greger");

  const updateName = (name: string) => {
    console.log("Updating name to", name)
    setName(name);
  };

  return (
    <NameContext.Provider value={{ name, updateName }}>
      {children}
    </NameContext.Provider>
  );
}
