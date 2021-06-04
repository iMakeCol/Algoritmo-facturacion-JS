window.addEventListener('load', init, false);
document.getElementById('verFacturas').addEventListener('click', calculoIva);
document.getElementById('verFacturas').addEventListener('click', mostrarFacturas);
document.getElementById('btnEliminarFac').addEventListener('click', borrarFacturas);
document.getElementById('EditarFac').addEventListener('click', editarFacturas);
let guardadoFac = localStorage.getItem('datosFact');
guardadoFac = JSON.parse(guardadoFac);
console.log(guardadoFac)

function init() {
    let form = document.getElementById("facturasList");
    form.style.visibility = 'hidden';
    let boton = document.getElementById("verFacturas");
    boton.addEventListener('click', function(e) {
        if (form.style.visibility === 'hidden') {
            form.style.visibility = 'visible';
        } else {
            form.style.visibility = 'hidden';   
        }
    }, false);
}

let precioSinIva = [];
let subtotalCompra = [];
let valorIva = [];
let totalCompra = [];
let totalFactura = 0;

function calculoIva() {
    for (i = 0; i < guardadoFac.length; i++) {
        precioSinIva[i] = guardadoFac[i].valorProducto / ((guardadoFac[i].porcentajeIva / 100) + 1);
        subtotalCompra[i] = precioSinIva[i] * guardadoFac[i].cantidad;
        totalCompra[i] = guardadoFac[i].valorProducto * guardadoFac[i].cantidad;
        valorIva[i] = totalCompra[i] - precioSinIva[i];
        totalFactura += parseInt(totalCompra[i]);
    }
}

let pos = document.getElementById('idFactEliminar').value;

function borrarFacturas() {
    let pos = document.getElementById('idFactEliminar').value;
    pos -= 1;
    guardadoFac.splice(pos, 1);
    localStorage.setItem('datosFact', JSON.stringify(guardadoFac));
    location.reload();
}

function editarFacturas() {
    let codFactU = document.getElementById('codFact').value;
    codFactU -= 1;
    let art = document.getElementById('articuloFact').value;
    let cant = document.getElementById('productoCanFac').value;
    let precioSin = document.getElementById('precioIvaFact').value;
    let porce = document.getElementById('porcentajeIvaFac').value;
    guardadoFac[codFactU].articulo = art;
    guardadoFac[codFactU].cantidad = cant;
    guardadoFac[codFactU].valorProducto = precioSin;
    guardadoFac[codFactU].porcentajeIva = porce;
    localStorage.setItem('datosFact', JSON.stringify(guardadoFac));
    alert("Los datos se han editado correctamente");
    location.reload();
}

function mostrarFacturas() {
    var listaFacturas = document.getElementById('tabla');
    let tablaContent = ``
    let tablaRes = ``
    for (i = 0; i < guardadoFac.length; i++) {
        tablaContent += `
    <tr>
      <td>${guardadoFac[i].id}</td>
      <td>${guardadoFac[i].articulo}</td>
      <td>${guardadoFac[i].cantidad}</td>
      <td>${guardadoFac[i].valorProducto}</td>
      <td>${guardadoFac[i].porcentajeIva}</td>
      <td>${precioSinIva[i].toFixed(2)}</td>
      <td>${subtotalCompra[i].toFixed(2)}</td>
      <td>${valorIva[i].toFixed(2)}</td>
      <td>${totalCompra[i].toFixed(2)}</td>
      <td><div class='text-center'><div class='btn-group'><button id="btnEditar" type="button" class="btn btn-primary btnEditar" data-toggle="modal"><i class="fas fa-edit"></i>&nbsp;Editar</button></div></div></td>
    </tr>
`
    }
    tablaRes += `
    <td colspan="7"></td> 
    <td>Total a Pagar</td> 
    <td>${ totalFactura.toFixed(2)}</td>
    <td><div class='text-center'><div class='btn-group'><button id="btnReporte" type="button" class="btn btn-danger btnReporte" data-toggle="modal" onClick="exrportToPdf()"><i class="fas fa-file-pdf"></i>&nbsp;Generar Reporte</button></div></div></td>
    `
    listaFacturas.innerHTML += tablaContent
    listaFacturas.innerHTML += tablaRes
}

function exrportToPdf() {
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        '#codFact': function(element, renderer) {
            return true
        }
    };
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, "Facturas");
    doc.autoTable({
        html: '#table',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 50,
            },
            1: {
                cellWidth: 50,
            },
            2: {
                cellWidth: 55,
            },
            3: {
                cellWidth: 50,
            },
            4: {
                cellWidth: 60,
            },
            5: {
                cellWidth: 50,
            },
            6: {
                cellWidth: 55,
            }
        },
        styles: {
            minCellHeight: 40
        }
    })
    doc.save('Factura.pdf');
}