const bcrypt = require("bcryptjs");

const _ = require("lodash");

const User = require("../models/User");

async function userSeeder() {
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
    {
      firstname: "Hugo",
      lastname: "Campana",
      email: "elcampanero23@hotmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "José",
      lastname: "Cordero",
      email: "josecorderouy@adinet.com.uy",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Gabriela",
      lastname: "Martínez",
      email: "martinolagaby@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Laura",
      lastname: "Cabrera",
      email: "cabritosxsiempre@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Luis",
      lastname: "Paz",
      email: "drluispazmilka@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Carlos",
      lastname: "Pereyra",
      email: "carpinchorojo@hotmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Myriam",
      lastname: "Herrera",
      email: "cancioneslargas12@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Clara",
      lastname: "Silvera",
      email: "claritacandycandy@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Maria",
      lastname: "Moreira",
      email: "moritaarzua@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Claudia",
      lastname: "Alonso",
      email: "arquitecturaantigua@lbtours.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Federico",
      lastname: "Cedres",
      email: "fico.cedres14@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Beatriz",
      lastname: "Ferreira",
      email: "betinaferreira@hotmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Daniela",
      lastname: "Acosta",
      email: "alondravoladora@yahoo.es",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Alvaro",
      lastname: "Vazquez",
      email: "asasotiaga@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
    {
      firstname: "Vilma",
      lastname: "Lema",
      email: "levima87@gmail.com",
      password: hashedPassword,
      avatar: "/img/avatar.png",
    },
  ];

  await User.bulkCreate(newUsers);
  console.log("¡Las tablas de usuario fueron creadas!");
}

module.exports = userSeeder;
