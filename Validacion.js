const ValidacionVehicular = {
    codigo: /^[a-zA-Z0-9]{5}$/,
    marca: /^[a-zA-Z0-9]{50}$/,
    modelo: /^[a-zA-Z0-9]{30}$/,
    anio: /^\d{4}$/,
    fechaInicial: /^\d{4}-\d{2}-\d{2}$/,
    fechaFinal: /^\d{4}-\d{2}-\d{2}$/
};

function validarVehiculo(codigo, marca, modelo, anio, fechaInicial, fechaFinal) {
    let valido = true;
    let mensaje = "";
    if (!ValidacionVehicular.codigo.test(codigo)) {
        valido = false;
        mensaje = "El codigo debe ser alfanumerico de 5 caracteres";
    }
    if (!ValidacionVehicular.marca.test(marca)) {
        valido = false;0
        mensaje = "La marca debe ser alfanumerico de 50 caracteres";
    }
    if (!ValidacionVehicular.modelo.test(modelo)) {
        valido = false;
        mensaje = "El modelo debe ser alfanumerico de 30 caracteres";
    }
    if (!ValidacionVehicular.anio.test(anio)) {
        valido = false;
        mensaje = "El año debe ser numerico de 4 dìgitos";
    }
    if (!ValidacionVehicular.fechaInicial.test(fechaInicial)) {
        valido = false;
        mensaje = "La fecha inicial debe ser tipo date";
    }
    if (!ValidacionVehicular.fechaFinal.test(fechaFinal)) {
        valido = false;
        mensaje = "La fecha final debe ser tipo date";
    }
    if (valido) {
        alert("Vehiculo ingresado correctamente");
    } else {
        alert(mensaje);
    }
}