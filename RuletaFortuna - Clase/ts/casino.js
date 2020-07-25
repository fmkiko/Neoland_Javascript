"use strict";
console.log("hola");
// Clase jugador
var Jugador = /** @class */ (function () {
    // construtor
    function Jugador(nombre, numero, dinero) {
        this.nombre = nombre;
        this.numero = numero;
        this.dinero = dinero;
        this.dineroApuesta = 50;
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
// Classe SalaJugo, una sala de juego tiene jugadore, ruleta y los métodos para el funcionamiento de la sala
var SalaJuego = /** @class */ (function () {
    // Le pasamos a la clase SalaJuego cuando se instace los jugadores
    function SalaJuego(jugador1, jugador2) {
        this.ruleta = 0; // la ruleta se inicializa aquí ya que no tiene que entrar por construtor, se ejecuta internamente...
        this.jugador1 = jugador1; // pasamos el jugador1 que entra por construtor a la propidad de la clase jugador1
        this.jugador2 = jugador2; // pasamos el jugador2 que entra por construtor a la propidad de la clase jugador2
    }
    // Métodos de la clase Salajuego
    // Llamamos al metodo iniciar juego.
    SalaJuego.prototype.iniciarJuego = function () {
        this.ruleta = Math.floor(Math.random() * 10);
        if (this.jugador1.getNumero() == this.ruleta) {
            return "Felicidades jugador 1 !!! ";
        }
        else if (this.jugador2.getNumero() == this.ruleta) {
            return "Felicidades jugador 2 !!! ";
        }
        else {
            var rangoJugador1 = this.ruleta - this.jugador1.getNumero();
            var rangoJugador2 = this.ruleta - this.jugador2.getNumero();
            if (rangoJugador1 < 0) {
                rangoJugador1 = -1 * (rangoJugador1);
            }
            ;
            if (rangoJugador2 < 0) {
                rangoJugador2 = -1 * (rangoJugador2);
            }
            if (rangoJugador1 > rangoJugador2) {
                return "Jugador 2 gama 50€";
            }
            else if (rangoJugador2 > rangoJugador1) {
                return "Jugador 1 gama 50€";
            }
            else {
                return "El rango Jugador 1 es: " + rangoJugador1 + " gama 25€ " + "El rango Jugador 2 es: " + rangoJugador2 + " gama 25€";
            }
        }
    };
    return SalaJuego;
}());
// main(), aquí las clase se instancia en objetos para dar la funcionalidad del juego.
function main() {
    // instanciamos las clase, es decir cremos el objeto jugador1 y jugador2 y salsJuego
    var jugador1 = new Jugador("Juan", 7, 50);
    var jugador2 = new Jugador("Pepeito", 3, 50);
    var salaJuego = new SalaJuego(jugador1, jugador2);
    var resultadoJuego = salaJuego.iniciarJuego();
    console.log("Ruleta: " + salaJuego.ruleta); // Para el el numero de la ruleta
    console.log(resultadoJuego);
}
;
main();
/*
let numeroApostadoJugador1 = 7;
let numeroApostadoJugador2 = 3;
// check número
if( numeroApostadoJugador1 == numeroApostadoJugador2 ){
    alert(" Jugador 2 slecciona otro númbero!!!")
}else{
    let jugador1 = new Jugador("Pepito",numeroApostadoJugador1, 50  );
    let jugador2 = new Jugador("Juanito", numeroApostadoJugador2, 50 );
    // Llamar salaJuego
    salaJuego( jugador1, jugador2 );
}

function salaJuego( jugador1:Jugador, jugador2:Jugador ){
    let ruleta;

    // check dinero
    if( jugador1.getDinero() == 50 && jugador2.getDinero() == 50 ){

        ruleta = Math.floor( Math.random()*10 );
        console.log("Ruleta: "+ruleta);
        console.log("Jugador 1 número: " + jugador1.getNumero() )
        console.log("Jugador 2 número: " + jugador2.getNumero() )
        if( jugador1.getNumero() == ruleta ){
            console.log("Felicidades jugador 1 !!! ");
        }else if( jugador2.getNumero() == ruleta ){
            console.log("Felicidades jugador 2 !!! ");
        }else{
            let rangeJugador1 = ruleta - jugador1.getNumero();
            let rangeJugador2 = ruleta - jugador2.getNumero();

            if( rangeJugador1 < 0 ){
                rangeJugador1 = -1*( rangeJugador1 );
            };
            if( rangeJugador2 < 0 ){
                rangeJugador2 = -1*( rangeJugador2 );
            }
            
            console.log("Rango Jugador 1: " + rangeJugador1);
            console.log("Rango Jugador 2: " + rangeJugador2);
            if( rangeJugador1 > rangeJugador2 ){
                console.log("Jugador 2 gama 50€");
            }else if( rangeJugador2 > rangeJugador2 ){
                console.log("Jugador 1 gama 50€");
            }else{
                console.log("Jugador 1 gama 25€");
                console.log("Jugador 2 gama 25€");
            }
        }

    }

}// end function

*/
