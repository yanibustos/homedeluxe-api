const Role = require("../models/Role")



async function roleSeeders() {
    await Role.sync({ force: true });
    console.log("Se restablecieron las tablas de roles");


    const newRole = [
        { name: "admin", value: 300, },
        { name: "edit", value: 200, },
        { name: "client", value: 100, }


    ]


    
    await Role.bulkCreate(newRole);
    console.log("¡Las tablas de roles fueron creadas!");

}


module.exports = roleSeeders;