"use strict";
geotab.addin.SensorTemperatura = () => {
    function buttonPressed()
    {
        console.log("Botão pressionado")
    }
    
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