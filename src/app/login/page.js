"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const route = useRouter();

  const navigate = (path) => {
    route.push(`/login/${path}`);
  };
  return (
    <div>
      <h1 className="text-6xl">this is Login page</h1>
      <button className="btn mt-6" onClick={()=>navigate("loginteacher")}>
        login teacher
      </button>
    </div>
  );
};

export default page;
