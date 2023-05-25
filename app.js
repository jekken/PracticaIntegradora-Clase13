const fs = require("fs")
const bicis = require("./bicicletas.json")

const dhBici = {
    bikes : bicis,
    buscarBici : function (id) {
        const bici = this.bikes.filter((bicicleta) => bicicleta.id === id)
        if (bici.length>0) {
            return bici[0];
        } else {
            return null;
        }
    },
    venderBici : function (id) {
        const bici = this.bikes.filter((bicicleta) => bicicleta.id === id)
        if (bici.length>0) {
            if (bici[0].vendida.toLowerCase() == "si"){
                return "La bicicleta fue previamente vendida";    
            }else{
                bici[0].vendida = "si"
                return bici[0]
            }
        } else {
            return "Bicicleta no encontrada";
        }
        
    },
    biciParaLaVenta : function () {
        const bici = this.bikes.filter((bicicleta) => bicicleta.vendida.toLowerCase() == "no")
        return bici
        
    },
    totalDeVentas : function () {
        const bici = this.bikes.filter((bicicleta) => bicicleta.vendida.toLowerCase() === "si")
        const respuesta = bici.reduce((acum, valorActual) => acum + valorActual.precio, 0)
        return respuesta   
    },
    aumentoBici : function (percentage) {
        const bicisAumento = this.bikes.map((bicicletas) => bicicletas.precio = bicicletas.precio + ((bicicletas.precio * percentage) / 100))
        return bicisAumento   
    },
    biciPorRodado : function (rodado) {
        const bicisRodado = this.bikes.filter((bicicletas) => bicicletas.rodado == rodado)
        return bicisRodado   
    },
    listarTodasLasBici : function () {
        this.bikes.forEach((bicis) => console.log(bicis))
    }
}

//console.log("listado de bicicletas")
//console.log(bicis)
//console.log("-------------------------------------------")
//console.log("buscar Bicicleta")
//console.log(dhBici.buscarBici(1))
//console.log("-------------------------------------------")
//console.log("vender Bicicleta")
//console.log(dhBici.venderBici(1))
//console.log("-------------------------------------------")
//console.log("Bicicletas a la venta")
//console.log(dhBici.biciParaLaVenta())
//console.log("-------------------------------------------")
//console.log("total de ventas de Bicis")
//console.log("El total de ventas es de: " + dhBici.totalDeVentas()+ "$")
//console.log("Aumento de bicis")
//console.log("-------------------------------------------")
//console.log(dhBici.aumentoBici(10))
//console.log("Bici por rodado")
//console.log("-------------------------------------------")
//console.log(dhBici.biciPorRodado(16))
console.log("Todas las bicicletas")
console.log("-------------------------------------------")
console.log(dhBici.listarTodasLasBici())

console.log("commit de Carlos")

