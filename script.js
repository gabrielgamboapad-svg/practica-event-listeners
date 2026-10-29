// Bloque 1: evento 'click' con funcion nombrada
const button = document.getElementById("myButton");

function doSomething() {
  alert("Hello World");
}

button.addEventListener("click", doSomething);

// Bloque 2: 'mouseover' y 'mouseout'
const box = document.getElementById("boxElement");

box.addEventListener("mouseover", function () {
  console.log("El cursor está sobre el elemento");
});

box.addEventListener("mouseout", function () {
  console.log("El cursor ha salido del elemento");
});

// Bloque 3: 'keydown' global, funcion flecha y objeto de evento
window.addEventListener("keydown", (e) => {
  console.log("Objeto de evento completo:", e);
  console.log("Código de tecla pulsada:", e.code);

  if (e.code === "KeyF") {
    console.log("¡Se ha presionado la tecla F!");
  }
});

// Bloque 4: evento 'input' y e.target.value
const inputField = document.getElementById("usernameInput");
const heading = document.getElementById("greetingHeading");

inputField.addEventListener("input", (e) => {
  heading.innerText = e.target.value;
});

// Bloque 5: ejecucion unica con { once: true }
const singleButton = document.getElementById("singleButton");

singleButton.addEventListener("click", () => {
  console.log("Este mensaje y acción solo ocurrirán una sola vez.");
}, { once: true });
