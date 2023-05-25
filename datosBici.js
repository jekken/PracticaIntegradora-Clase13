const fs = require("fs");

function devolverArray(){

    const entrada = fs.readFileSync("./bicicletas.json", "utf8");
    const respuesta = JSON.parse(entrada);
    return respuesta

}

module.exports = devolverArray;