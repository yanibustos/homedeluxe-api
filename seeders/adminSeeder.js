const bcrypt = require("bcryptjs");
const _ = require("lodash");
const Admin = require("../models/Admin");

async function adminSeeder() {
  await Admin.sync({ force: true });
  console.log("Se restablecieron las tablas de admin");

  const hashedPassword = await bcrypt.hash("password123", 10);

  const newAdmins = [
    {
      firstname: "admin",
      lastname: "admin",
      email: "admin@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
      role: 300,
    },
    {
      firstname: "Darlen",
      lastname: "Hornia",
      email: "dhornia@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Cristofer",
      lastname: "Fernández",
      email: "cfernandez@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Yanina",
      lastname: "Bustos",
      email: "ybustos@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Federico",
      lastname: "Vargas",
      email: "fvargas@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Ayhesa",
      lastname: "Hinds",
      email: "ahinds@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "edit",
      lastname: "edit",
      email: "edit@homedeluxe.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
  ];

  await Admin.bulkCreate(newAdmins);
  console.log("¡Las tablas de administradores fueron creadas!");
}

module.exports = adminSeeder;
