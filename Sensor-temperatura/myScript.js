console.log("Carregou o script");

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", mostrarFecha);

function mostrarFecha() {
    console.log("Botao pressionado")
    document.getElementById('demo').innerHTML = Date();
}
