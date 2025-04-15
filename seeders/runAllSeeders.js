require("dotenv").config();

async function runAllSeeders() {
  await require("./userSeeder")();
  await require("./adminSeeder")();
  await require("./categorySeeder")();
  await require("./productSeeder")();
  await require("./orderSeeder")();

  console.log("Se corrieron los seeders");
}

runAllSeeders();

// para correr los seeders crear primero una base de datos en tableplus, actualizar .env
// y correr en la terminal "node seeders/runAllSeeders.js"
