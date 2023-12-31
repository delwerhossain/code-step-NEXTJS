"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Login | Del-Next App",
  description: "Generated by DEL",
};
const Login = () => {
  const route = useRouter();

  const navigate = (path) => {
    route.push(`/login/${path}`);
  };
  return (
    <div>
      <Head>
        <title>Login | Practice NEXT.JS</title>
      </Head>
      <h1 className="text-6xl">this is Login page</h1>
      <button className="btn mt-6" onClick={() => navigate("loginteacher")}>
        login teacher
      </button>
    </div>
  );
};

export default Login;
