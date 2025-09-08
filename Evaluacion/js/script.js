// Función con parámetro
function saludar(nombre) {
  return `Hola, ${nombre}! Bienvenido al proyecto.`;
}

// Uso de condicional
const usuario = "Miguel";  // cámbialo si quieres
if (usuario === "Miguel") {
  console.log(saludar(usuario));
} else {
  console.log("Hola visitante!");
}

// Manipulación del DOM
const titulo = document.getElementById("titulo");
titulo.addEventListener("click", () => {
  titulo.textContent = "¡Has hecho clic en el título!";
  titulo.style.color = "red";
});
