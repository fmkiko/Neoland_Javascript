

console.log("hola")
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


