import { Prisma } from "@prisma/client";

export const findUserInDatabase = async (email: any) => {
    console.log("Searching a user");
  
    // const res = await Prisma.user.findUnique({ where: { email: email } });
  
    // console.log(res);
    // return res;
  };
  