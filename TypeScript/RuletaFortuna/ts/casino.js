"use strict";
console.log("hola");
// Clase jugador
var Jugador = /** @class */ (function () {
    // construtor
    function Jugador(nombre, numero, dinero) {
        // Propiedades
        this.nombre = "";
        this.numero = 0;
        this.dinero = 0;
        this.dineroApuesta = 50;
        this.nombre = nombre;
        this.numero = numero;
        this.dinero = dinero;
    }
    //métodos
    // geting
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getNumero = function () {
        return this.numero;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.getDineroApuesta = function () {
        if (this.dinero > 50) {
            this.dinero = this.dinero - 50;
            return 50;
        }
        else {
            return 0;
        }
    };
    // seting
    Jugador.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Jugador.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Jugador.prototype.setDinero = function (dinero) {
        this.dinero = dinero;
    };
    return Jugador;
}());
;
// 
var numeroApostadoJugador1 = 7;
var numeroApostadoJugador2 = 3;
// check número
if (numeroApostadoJugador1 == numeroApostadoJugador2) {
    alert(" Jugador 2 slecciona otro númbero!!!");
}
else {
    var jugador1 = new Jugador("Pepito", numeroApostadoJugador1, 50);
    var jugador2 = new Jugador("Juanito", numeroApostadoJugador2, 50);
    // Llamar salaJuego
    salaJuego(jugador1, jugador2);
}
function salaJuego(jugador1, jugador2) {
    var ruleta;
    // check dinero 
    if (jugador1.getDinero() == 50 && jugador2.getDinero() == 50) {
        ruleta = Math.floor(Math.random() * 10);
        console.log("Ruleta: " + ruleta);
        console.log("Jugador 1 número: " + jugador1.getNumero());
        console.log("Jugador 2 número: " + jugador2.getNumero());
        if (jugador1.getNumero() == ruleta) {
            console.log("Felicidades jugador 1 !!! ");
        }
        else if (jugador2.getNumero() == ruleta) {
            console.log("Felicidades jugador 2 !!! ");
        }
        else {
            var rangeJugador1 = ruleta - jugador1.getNumero();
            var rangeJugador2 = ruleta - jugador2.getNumero();
            if (rangeJugador1 < 0) {
                rangeJugador1 = -1 * (rangeJugador1);
            }
            ;
            if (rangeJugador2 < 0) {
                rangeJugador2 = -1 * (rangeJugador2);
            }
            console.log("Rango Jugador 1: " + rangeJugador1);
            console.log("Rango Jugador 2: " + rangeJugador2);
            if (rangeJugador1 > rangeJugador2) {
                console.log("Jugador 2 gama 50€");
            }
            else if (rangeJugador2 > rangeJugador2) {
                console.log("Jugador 1 gama 50€");
            }
            else {
                console.log("Jugador 1 gama 25€");
                console.log("Jugador 2 gama 25€");
            }
        }
    }
} // end function
