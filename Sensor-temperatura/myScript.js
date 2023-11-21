geotab.addin.myCustomPage1 = () => {
    console.log("Carregou o script");

    const button = document.querySelector("input");
    const paragraph = document.querySelector("p");

    button.addEventListener("click", mostrarFecha);

    function mostrarFecha() {
        console.log("Botao pressionado")
        document.getElementById('demo').innerHTML = Date();
    }
    return {
        initialize(api, state, callback) {
            callback();
            console.log("initialize")
        },
        focus(api, state) {
            // User interface is available
            console.log("focus")
        },
        blur(api, state) {
            // Save any Add-In state
            console.log("blur")
        }
    };
};