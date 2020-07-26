


// interface

interface Player{
    getNombre():string;
    getNumero():number;
    getDinero():number;
}

// Clase jugador
class Jugador implements Player{
    // Propiedades
    private nombre:string ;
    private numero:number ;
    private dinero:number ;
    private dineroApuesta:number ;
  
    // construtor
    constructor( nombre:string, numero:number, dinero:number ){
        this.nombre = nombre;
        this.numero = numero;
        this.dinero = dinero;
        this.dineroApuesta = 50;
    }
    //métodos
    // getting // getter
    getNombre():string{
        return this.nombre;
    }
    getNumero():number{
        return this.numero;
    }
    getDinero():number{
        return this.dinero;
    }
    getDineroApuesta():number{
        if( this.dinero > 50 ){
            this.dinero = this.dinero - 50;
            return 50;
        }else{
            return 0;
        }
    }
    // setting // setter
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setNumero(numero:number){
        this.numero = numero;
    }
    setDinero(dinero:number){
        this.dinero = dinero;
    }

};
// 
// Classe SalaJugo, una sala de juego tiene jugadores, ruleta y los métodos para el funcionamiento de la sala
class SalaJuego{
    jugador1: Jugador;
    jugador2: Jugador;
    ruleta:number = 0;// la ruleta se inicializa aquí ya que no tiene que entrar por construtor, se ejecuta internamente...
    // Le pasamos a la clase SalaJuego los jugadores cuando se instancia los jugadores.
    constructor(jugador1: Jugador, jugador2: Jugador){
        this.jugador1 = jugador1;// pasamos el jugador1 que entra por construtor a la propidad de la clase jugador1
        this.jugador2 = jugador2;// pasamos el jugador2 que entra por construtor a la propidad de la clase jugador2
    }
    // Métodos de la clase Salajuego
    // método iniciar juego.
    iniciarJuego(){
        this.ruleta = Math.floor(Math.random()*10);
        if( this.jugador1.getNumero() ==  this.ruleta ){
            return "Felicidades jugador 1 !!! ";
        }else if( this.jugador2.getNumero() == this.ruleta ){
            return "Felicidades jugador 2 !!! ";
        }else{
            let rangoJugador1 = this.ruleta - this.jugador1.getNumero();
            let rangoJugador2 = this.ruleta - this.jugador2.getNumero();

            if( rangoJugador1 < 0 ){
                rangoJugador1 = -1*( rangoJugador1 );
            };
            if( rangoJugador2 < 0 ){
                rangoJugador2 = -1*( rangoJugador2 );
            }
      
            if( rangoJugador1 > rangoJugador2 ){
                return "Jugador 2 gana 50€";
            }else if( rangoJugador2 > rangoJugador1 ){
                return "Jugador 1 gana 50€";
            }else{
                return "El rango Jugador 1 es: " + rangoJugador1 + " gana 25€ " + "El rango Jugador 2 es: " + rangoJugador2 + " gana 25€";
            
            }
        }
    }

}

// main(), aquí las clase se instancia en objetos para dar la funcionalidad del juego.
function main(){
    // instanciamos las clase, es decir cremos el objeto jugador1 y jugador2 y salsJuego
    const jugador1 = new Jugador("Juan", 7, 50);
    const jugador2 = new Jugador("Pepeito", 3, 50);
    const salaJuego = new SalaJuego(jugador1, jugador2);// creamos el objeto salaJuego

    const resultadoJuego= salaJuego.iniciarJuego();// llamamos al método iniciar juego de la salaJuego

    console.log("Ruleta: " + salaJuego.ruleta);// Para el el número de la ruleta

    console.log(resultadoJuego);
    
};

main();// Llamamos al la function main para que corra el juego.



