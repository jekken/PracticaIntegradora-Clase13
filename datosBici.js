const fs = require("fs");

function devolverArray(){

    const entrada = fs.readFileSync("./bicicletas.json", "utf8");
    const respuesta = JSON.parse(entrada);
    return respuesta

}

const urlsMarca = {
    'Hot Toys': './datos/figuras1.json',
    'Bandai': './datos/figuras2.json',
    'Star Wars': './datos/figuras3.json'
}

const importar = marca => {
    const url = urlsMarca[marca];
    if(url === undefined){
        return 'No se encontró la marca registrada'
    }else{
    const datos = fs.readFileSync(`${url}`, `utf-8`);
    const info = JSON.parse(datos);
    return info
    }
}

module.exports = [{devolverArray, importar}];