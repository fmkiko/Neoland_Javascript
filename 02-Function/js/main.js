
/*
// Declaración de la function
function saludar(){
   console.log("Hola desde una función");
}


// Llamar function
saludar();


// Parametros se pasan por valor
// Declaramos y le asignamos valor a la varibles globles
let variable = 100;
let n2 = 2; 

// función en la que vamos a modificar los valores que vienen por parametro
function sumer( n1, n2 ){
    n1 = 50;// modificar valor del parametro n1
    n2 = 20;// modificar valor del parametro n2
    console.log("****** Dentro de la function **********");
    console.log("valor de n1 : " + n1 );// aquí vemos que se han modificado;
    console.log("valor de n2 : " + n2 );// aquí vemos que se han modificado;
}

// llamamos a la function pasandole los valores
sumer( variable, n2 );

// observar que las varibles no han sido modificadas
console.log("****** Fuera de la function *******");
console.log("Valor de la variable: " + variable);
console.log("Valor de la variable: " + n2);

let n = "Marcos";
let a = "Martin";
let c = "marcos@neoland.es";

setUser( n, a, c );


let n1 = 100;
let n2 = 200;

sumar2( n1 );

let n1 = 2;
let n2 = 3;

let s = sumar3( n1, n2 ); 

console.log( "El resultado de la suma es : " + s );

let numero1 = 2;
let numero2 = 10;
let numero3 = 100;

let m = mult( numero1 ,numero2, numero3 );

console.log( m );

let n1 = 123;
let n2 = 234;
let n3 = 244;

let s = sumar4();

console.log("La suma es : " + s );


let field = "";
let check =  checkField(field);

console.log("Check = " + check);

// Informa
if(check){

    console.log("El pago se ha realizado correctamente.");

}else{

    console.log("Error de pago!!!");

}
*/

let n1 = 30;
let n2 = 25;

let resultado = cualMasGrande( n1, n2 );

alert(resultado);