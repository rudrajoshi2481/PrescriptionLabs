import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const optionsAuth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credential",
      credentials: {
        username: { label: "UserName", type: "text", placeholder: "User Name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const dummyUser = {
          id:"5123",
          email:"rudra@gmail.com",
          userName: "rudra",
          password: "51235123",
        };

        if (
          dummyUser.userName === credentials?.username &&
          dummyUser.password === credentials.password
        ) {
          return dummyUser;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
