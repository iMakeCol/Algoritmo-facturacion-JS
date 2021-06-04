let vectorPrecio = []
let precioSinIva = []
let totalCompra = 0
let subtotalCompra = 0

const cargarVectores = () => {
    for (i = 0; i < 3; i++) {
        vectorPrecio[i] = parseInt(prompt("Ingrese el precio con IVA del producto #" + (i + 1)))
        if (vectorPrecio[i] < 0) vectorPrecio[i] *= -1;
    }
}

const calculoIva = () => {
    for (i = 0; i < 3; i++) {
        precioSinIva[i] = vectorPrecio[i] / 1.19
        totalCompra += vectorPrecio[i]
    }
    subtotalCompra = precioSinIva[0] + precioSinIva[1] + precioSinIva[2]
}

const mostarDatos = () => {
    for (i = 0; i < 3; i++) {
        alert("El precio del producto #" + (i + 1) + " es: " + vectorPrecio[i])
        alert("El precio sin IVA del producto #" + (i + 1) + " es: " + precioSinIva[i].toFixed(2))
    }
    alert("El subtotal de la compra sin IVA es: " + subtotalCompra.toFixed(2))
    alert("El total de la compra es: " + totalCompra)
}

const main = () => {
    do {
        cargarVectores()
        calculoIva()
        mostarDatos()
        calcularN = prompt("Desea volver a calcular:  S/N");
    } while (calcularN != 'N' && calcularN != 'n')
}
main()























/*
function calcularIva(precioConIva, cantidad, porcentajeIva) {
    var calculo = (precioConIva / porcentajeIva)
    var subtotalSinIva = calculo * cantidad
    var total = precioConIva * cantidad
    alert("El precio es de: " + total + " el subtotal sin iva es: " + subtotalSinIva);
}

const precioConIva = prompt("Ingrese el precio con IVA")
const cantidad = prompt("Ingrese la cantidad de productos")
var porcentajeIva = prompt("Ingrese el porcentaje del IVA")
porcentajeIva = (porcentajeIva / 100) + 1

calcularIva(precioConIva, cantidad, porcentajeIva)
*/