var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var pais = document.getElementById("pais");
var correo = document.getElementById("email");

function validarDatos() {
  nombre.addEventListener("input", corroborarNombre);
  apellido.addEventListener("input", corroborarApellido);
  pais.addEventListener("input", corroborarPais);
  correo.addEventListener("input", corroborarMail);

  corroborarNombre();
  corroborarApellido();
  corroborarPais();
  corroborarMail();
}

function corroborarNombre() {
  if (nombre.value == "") {
    nombre.setCustomValidity("Por favor completa tu nombre");
  } else {
    nombre.setCustomValidity("");
  }
}

function corroborarApellido() {
  if (apellido.value == "") {
    apellido.setCustomValidity("Por favor completa tu apellido");
  } else {
    apellido.setCustomValidity("");
  }
}

function corroborarPais() {
  if (pais.value == "") {
    pais.setCustomValidity("Por favor ingresá tu país");
  } else {
    pais.setCustomValidity("");
  }
}

function corroborarMail() {
  if (correo.value == "") {
    correo.setCustomValidity("Por favor ingresá tu mail");
  } else {
    correo.setCustomValidity("");
  }
}

window.addEventListener("load", validarDatos, false);
