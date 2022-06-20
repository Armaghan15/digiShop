import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "adminuser@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    idAdmin: true,
  },

  {
    name: "User 1",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    idAdmin: false,
  },

  {
    name: "User 2",
    email: "user2@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    idAdmin: false,
  },
];

export default users;
