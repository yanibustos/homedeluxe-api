const bcrypt = require("bcryptjs");

const _ = require("lodash");

const User = require("../models/User");

async function userSeeders() {
  await User.sync({ force: true });
  console.log("Se restablecieron las tablas de usuarios");

  const hashedPassword = await bcrypt.hash("password123", 10);

  const newUsers = [
    {
      firstname: "user",
      lastname: "user",
      email: "userprueba@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Mario",
      lastname: "Pascual",
      email: "paquitoborches@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Alvaro",
      lastname: "Olmos",
      email: "pajarito24@outlook.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
  ];
  await User.bulkCreate(newUsers);
  console.log("¡Las tablas de usuario fueron creadas!");
}

module.exports = userSeeders;
