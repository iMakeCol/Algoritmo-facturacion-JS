document.getElementById('enviarDatosRegistro').addEventListener('click', Registar);
document.getElementById('loginPage').addEventListener('click', loginPage);
let pass = document.getElementById('NewContraseña');

pass.oninput = function() {
    let password = document.getElementById('NewContraseña');
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$%*&\-\_])[A-Za-z\d$@$%*&\-\_]{8,16}$/;
    if (regex.test(password.value)) {
        validar.innerHTML = "Contraseña Valida";
        document.getElementById('validar').style.color = '#12c01b';
    } else {
        validar.innerHTML = "Contraseña invalida";
        document.getElementById('validar').style.color = '#EF3B3A';
    }
}

function Persona(id, usuarioFac, passwordFac) {
    this.id = id;
    this.usuarioFac = usuarioFac;
    this.passwordFac = passwordFac;
}

let vectorPersonas = [
    { id: 1, usuarioFac: "CATA2345", passwordFac: "975436*Cata" },
    { id: 2, usuarioFac: "Camilo123", passwordFac: "56789*Cam" },
    { id: 3, usuarioFac: "LuisC111", passwordFac: "LuisC1*" },
    { id: 4, usuarioFac: "hectorF25", passwordFac: "hector(F25)" },
    { id: 5, usuarioFac: "Cristian23", passwordFac: "Cristian23*" },
    { id: 6, usuarioFac: "EdwSp", passwordFac: "EdwSp(01)" },
];
localStorage.setItem('datos', JSON.stringify(vectorPersonas));

function obtenerUsuaro() {
    let obtenerU = document.getElementById("NewUsuario").value;
    return obtenerU;
}

function obtenerPassword() {
    let obtenerP = document.getElementById("NewContraseña").value;
    return obtenerP;
}

function mostrarListado() {
    let lista = '';
    for (let i = 0; i < vectorPersonas.length; i++) {
        lista += 'id: ' + vectorPersonas[i].id +
            ' User: ' + vectorPersonas[i].usuarioFac +
            ' Password: ' + vectorPersonas[i].passwordFac + '\n';
    }
    document.getElementById('listado').innerText = lista;
}

function Registar() {
    const usuario = document.getElementById('NewUsuario').value;
    const password = document.getElementById('NewContraseña').value;
    if (usuario.length == 0 && password.length < 6) {
        alertaU.innerHTML = "No has escrito nada en el Usurario y la Contraseña";
        document.getElementById('alertaU').style.color = '#EF3B3A';
    } else if (usuario.length == 0) {
        alertaUser.innerHTML = "No has escrito nada en el Usurario";
        document.getElementById('alertaUser').style.color = '#EF3B3A';
    } else {
        let per = new Persona(vectorPersonas.length + 1, obtenerUsuaro(), obtenerPassword(), 0);
        vectorPersonas.push(per);
        localStorage.setItem('datos', JSON.stringify(vectorPersonas));
        mostrarListado();
        alert('Usuario registrado correctamente');
        window.location = "../index.html";
    }
}

function loginPage() {
    const opcion = confirm("Usted sera redireccionado a la pagina de Login");

    if (opcion == true) {
        alert('Espere ');
        window.location = "../index.html";
    }
}

function mostrarPassword() {
    var cambio = document.getElementById("NewContraseña");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}
$(document).ready(function() {
    $('#ShowPassword').click(function() {
        $('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});