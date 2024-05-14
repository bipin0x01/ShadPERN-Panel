import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  const token = req.nextauth.token;

  if (!token) {
    // Redirect to the login page if no token is present
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Allow access to all paths if authenticated
  return NextResponse.next();
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|auth/|access-denied).*)",
  ],
};
