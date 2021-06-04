$(document).ready(function() {

    var fila;

    $(document).on("click", ".btnEditar", function() {
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        articulo = fila.find('td:eq(1)').text();
        cantidad = fila.find('td:eq(2)').text();
        valorProducto = fila.find('td:eq(3)').text();
        porcentajeIva = fila.find('td:eq(4)').text();

        $("#codFact").val(id);

        $(".modal-header").css("background-color", "#56D85A");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Actualizar Facturas");
        $("#facturaEditar").modal("show");

    });

    $("#btnEliminar").click(function() {
        $("#formEliminar").trigger("reset");
        $(".modal-header").css("background-color", "#56D85A");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Eliminar Facturas");
        $("#facturaEliminar").modal("show");
    });
});