import NextAuth from "next-auth/next"
import {optionsAuth} from "./options"

const handler = NextAuth(optionsAuth)

export {handler as GET, handler as POST}