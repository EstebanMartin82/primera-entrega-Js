const productos = [
  { nombre: 'yerba', precio: 1200 },
  { nombre: 'arroz', precio: 1800 },
  { nombre: 'fideos', precio: 900 },
  { nombre: 'leche', precio: 700 },
  { nombre: 'harina', precio: 1450 },
];

let carrito = [];

alert("Bienvenido a Supermarket")

function ingresoUsuario() {
  const usuarioValido = "pepe";
  const contrasenaValida = "10";
  let intentos = 3;

  while (intentos > 0) {
    const usuario = prompt("Ingrese su nombre de usuario: ");
    const contrasena = prompt("Ingrese su contraseña: ");

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      alert("Bienvenido al carrito de compras.");
      console.log(productos);
      return true;
    } else {
      intentos--;
      alert(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
    }
  }

  alert("Ha agotado todos los intentos. Acceso denegado.");
  return false;
}

if (ingresoUsuario()) {
  let compra = true;

  while (compra) {
    let productoSeleccionado = prompt("Ingrese el nombre del producto que desea agregar al carrito: ");

    let productoEncontrado = productos.find(producto => producto.nombre === productoSeleccionado);

    if (productoEncontrado) {
      let unidades = parseInt(prompt("Ingrese las unidades: "));
      carrito.push({ nombre: productoSeleccionado, precio: productoEncontrado.precio, cantidad: unidades });
      console.log("Producto agregado al carrito:", carrito);
    } else {
      alert("¡Producto no encontrado!");
    }

    compra = confirm("¿Desea seguir comprando?");
  }

  alert("Gracias por su compra. Aquí está su carrito:");
  console.log(carrito);
} else {
  alert("Ha agotado todos los intentos. Acceso denegado.");
}