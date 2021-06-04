let vectorPrecio = []
let precioSinIva = []
let totalCompra = 0
let subtotalCompra = 0

const cargarVectores = () => {

    vectorPrecio[0] = parseInt(document.getElementById("precioP1").value)
    vectorPrecio[1] = parseInt(document.getElementById("precioP2").value)
    vectorPrecio[2] = parseInt(document.getElementById("precioP3").value)

    for (i = 0; i < 3; i++) {
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
    document.write("El subtotal de la compra sin IVA es: " + subtotalCompra.toFixed(2))
    document.write("<br>")
    document.write("El subtotal de la compra sin IVA es: " + totalCompra)
}

const main = () => {
    cargarVectores()
    calculoIva()
    mostarDatos()
}