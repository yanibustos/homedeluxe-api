require("dotenv").config();


async function runAllSeeders() {


    await require("./adminSeeder")();
    await require("./userSeeder")();
    await require("./productSeeder")();
    

    console.log("Se corrieron los seeders"); 


};

runAllSeeders();


// para correr los seeders crear primero una base de datos en tableplus, actualizar .env 
// y correr en la terminal "node seeders/runAllSeeders.js"