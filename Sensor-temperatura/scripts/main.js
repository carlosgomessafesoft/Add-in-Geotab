"use strict";
geotab.addin.SensorTemperatura = () => {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("submit").addEventListener("click", function (event) {
            event.preventDefault();
            console.log("botão pressionado")
        });
    });
    
    return {
        initialize(api, state, callback) {
            callback();
            console.log("Inicialização da pagina")
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