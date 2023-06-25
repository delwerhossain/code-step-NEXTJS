import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl">this is About page</h1>
      <Link className=" btn mt-6" href={"/about/aboutschool"}>
        about school
      </Link>
    </div>
  );
};

export default About;
