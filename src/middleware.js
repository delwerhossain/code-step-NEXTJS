import { NextResponse } from "next/server";

export const middleware = (req) => {
  if (req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // else {
  //   return NextResponse.next(); // Allow the request to continue
  // }
};
    

export const config = {
  matcher: ["/about/:path/:name*"], 
};