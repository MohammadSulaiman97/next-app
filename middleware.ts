
export { default } from 'next-auth/middleware';
// when type /users will redierct to login if u guest
// import middleware from 'next-auth/middleware';
// export default middleware;

// this or import ^
// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/dashboard/:path*']
}