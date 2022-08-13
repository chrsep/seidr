import withAuth from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }

export default withAuth({
  pages: {
    signIn: "/auth/log-in",
    error: "/auth/error"
  }
})