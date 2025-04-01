require("dotenv").config();


async function runAllSeeders() {
    console.log("Se corrieron los seeders");

    await require("./roleSeeder")();
    await require("./userSeeder")();
    await require("./productSeeder")();

  


};

runAllSeeders();


// para correr los seeders crear primero una base de datos en tableplus, actualizar .env 
// y correr en la terminal "node seeders/runAllSeeders.js"