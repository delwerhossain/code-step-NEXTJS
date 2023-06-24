'use client'

import { useRouter } from "next/navigation";
import Event from "./Event/Event";
import Link from "next/link";

export default function Home() {
  const route = useRouter()
  

  return (
    <main className="grid justify-center mt-6">
      <h1 className="text-6xl uppercase font-bold mb-8">hello world</h1>
      <Event></Event>
      <div className="border rounded  w-96 h-96 mt-10 p-4">
        <h2 className="text-3xl underline mb-8">routes two way uses</h2>
        <Link className="btn btn-warning " href="/about">
          {" "}
          Link test{" "}
        </Link>

        <button className="btn ml-4" onClick={() => route.push("/about")}>
          {" "}
          Button test{" "}
        </button>
      </div>
    </main>
  );
}
