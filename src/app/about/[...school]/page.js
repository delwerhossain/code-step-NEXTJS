'use client'
import Link from 'next/link';
import React from 'react';

const School = ({ params }) => {
  const path=  params.school
    return (
      <div>
        <Link
          href={"name/schoolPath/module/lecture/classPath"}
          className="btn w-auto mx-auto "
        >
          check more path
        </Link>
        {/* <h1 className="text-5xl text-center">
          about school path - {params.school[0]}
        </h1> */}
        {path.map((name) => (
          <h1 className="text-2xl   border mb-4 text-center " key={name}>
            {name}
          </h1>
        ))}
      </div>
    );
};

export default School;