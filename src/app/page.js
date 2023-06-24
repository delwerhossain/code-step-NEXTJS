'use client'

import Event from "./Event/Event";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl uppercase font-bold">hello world</h1>
      <Event></Event>
     
    </main>
  );
}
