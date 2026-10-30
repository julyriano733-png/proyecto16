// traigo los elementos del html con su id
const dropdown = document.getElementById('dropdown');
const boton = document.getElementById('boton');
const texto = document.getElementById('texto');
const flecha = document.getElementById('flecha');
const items = document.querySelectorAll('#lista li');

// ---------- abrir y cerrar ----------
function abrir() {
  dropdown.classList.add('abierto');
  flecha.textContent = '^';
}

function cerrar() {
  dropdown.classList.remove('abierto');
  flecha.textContent = 'v';
}

// al darle clic al boton: si esta abierto lo cierro, si no lo abro
boton.addEventListener('click', function (e) {
  e.stopPropagation(); 
  if (dropdown.classList.contains('abierto')) {
    cerrar();
  } else {
    abrir();
  }
});

// ---------- elegir un item ----------
// recorro todos los <li> y a cada uno le pongo su evento click
items.forEach(function (item) {
  item.addEventListener('click', function () {

    // 1. quito la clase "seleccionado" a todos
    items.forEach(function (otro) {
      otro.classList.remove('seleccionado');
    });

    // 2. se la pongo solo al  clic
    item.classList.add('seleccionado');

    // 3. cambio el texto del boton por el item elegido
    texto.textContent = item.textContent;

    // 4. cierro el desplegable
    cerrar();
  });
});


document.addEventListener('click', function () {
  cerrar();
});