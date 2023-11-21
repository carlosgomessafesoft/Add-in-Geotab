"use strict";
geotab.addin.myCustomPage1 = () => {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("submit").addEventListener("click", function (event) {
            event.preventDefault();
            console.log("botão pressionado")
            // api.multiCall (
            //     [
            //         ["Get", {"typeName": "Group", "search":{"name":"SensorTemperatura"}}],
            //         ["Get", {"typeName": "Group",  "resultsLimit": 10}]
            //     ],
            //     function (result) {
            //         if (result) {
            //             document.getElementById("vehicleCount").innerHTML = result[0];
            //             document.getElementById("userCount").innerHTML = result[1];
            //         }
            //     }, function (error) {
            //         alert(error);
            // });
        });
    });

    return {
        initialize(api, state, callback) {
            callback();
        },
        focus(api, state) {
            // User interface is available
        },
        blur(api, state) {
            // Save any Add-In state
        }
    };
};