

function saludar(){
    console.log("Hola mundo!")
};


function sumar(){
    let sumar = 2 + 2;
    console.log(" Sumar 2 + 2 = " + sumar );
}

function setUser( nombre, apellido, correo ){
    
        console.log("Nombre es: " + nombre);
        console.log("Apellido : " + apellido);
        console.log("Correo : " + correo);
   
}



function sumar2( n1, n2 = 1 ){
    let sumar = n1 + n2;
    console.log(sumar);
}

// Function con valor de retorno

function sumar3(n1,n2){
    // Sumar n1, n2
    let sumar = n1 + n2 ;

    return sumar;// Devulve el resultado de la suma

}

function mult(n1 ,n2, n3){

  let m = n1*n2*n3;

  return m;  

}


function sumar4( n1 = 1, n2 = 1, n3 = 2 ){
    let s = n1 + n2 + n3
    return s ;
}


function checkField(field){
    if ( field == ""){
      
       return false;

    }else{
       
       return true;

    }
}

function cualMasGrande( n1, n2 ){ 

    if( n1 > n2 ){

        return "Este es el más : " + n1;

    }else if( n2 > n1 ){

        return "Este es el más : " + n2;

    }else{

        return "Son iguales";
        
    }

}