document.getElementById('btnAgregar').addEventListener('click', registrarF);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);

function CrearF(id, articulo, cantidad, valorProducto, porcentajeIva) {
    this.id = id;
    this.articulo = articulo;
    this.cantidad = cantidad;
    this.valorProducto = valorProducto;
    this.porcentajeIva = porcentajeIva;
}
let vectorF = [];

function obtenerArticulo() {
    let articulo = document.getElementById('articulo').value;
    return articulo;
}

function obtenerCantidad() {
    let cantidad = document.getElementById('productoCan').value;
    return cantidad;
}

function obtenerValor() {
    let valorProducto = document.getElementById('precioIva').value;
    return valorProducto;
}

function obtenerPorcentaje() {
    let porcentajeIva = document.getElementById('porcentajeIva').value;
    return porcentajeIva;
}

function registrarF() {
    let Fact = new CrearF(vectorF.length + 1, obtenerArticulo(), obtenerCantidad(), obtenerValor(), obtenerPorcentaje(), 0);
    vectorF.push(Fact);
    localStorage.setItem('datosFact', JSON.stringify(vectorF));
    document.getElementById('articulo').value = "";
    document.getElementById('productoCan').value = "";
    document.getElementById('precioIva').value = "";
    document.getElementById('porcentajeIva').value = "";
}

function Cerrar() {
    alert('Cerrando su sesion...');
    window.location = "../index.html";
}