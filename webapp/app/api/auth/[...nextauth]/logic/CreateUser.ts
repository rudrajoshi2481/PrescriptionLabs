// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


// export const createNewUser = async (user: any) => {
//   console.log("User could't found");
//   const res = await prisma.user.create({
//     data: {
//       email: user.email,
//       password: user.password,
//       createdAt: Date.now().toString(),
//       firstName: user.firstName,
//       lastName:user.lastName,
//       dob:{
//         date:user.dobDate,
//         month:user.dobMonth,
//         year:user.dobYear
//       }
      
      
//     },
//   });
//   console.log("Created User")

//   return res;
// };
