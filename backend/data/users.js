import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jane Levinson",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

export default users
