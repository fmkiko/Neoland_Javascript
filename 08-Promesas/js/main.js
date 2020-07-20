// Promesas
/*
for(let i=0 ; i<10 ; i++){
    console.log("4 x "+i+" = "+i*4);
}

// Se declara
const promesa = new Promise(function(resolve, reject){
    console.log("Pendiente");
    if(true){
        resolve("Hola desde una promesa!!!")
    }else{
        reject("Error");
    }  

})

// Se ejcuta la promesa

promesa
    .then(datos => {
        console.log(datos)
    })
    .catch(error =>{
        console.log(error)
    })


    for(let i=0 ; i<10 ; i++){
        console.log("4 x "+i+" = "+i*4);
    }
    for(let i=0 ; i<10 ; i++){
        console.log("4 x "+i+" = "+i*4);
    }
    */

// 1- Promesas


/*
const miPromesa = new Promise(function(resulto, rechazado){
    if(true){
        resulto("Ok todo correcto!!!")
    }else{
        rechazado("Error en la peticón!!!")
    }
})

miPromesa
    .then( resulto => {
        console.log(resulto);
    })
    .catch( rechazado => {
        console.log(rechazado)
    })
   
   // 2- Crear json user
   const user = {
       nombre: "Francisco",
       apellidos: "Martinez",
       email:"francisco@neoland.es"
   };

   // Function getDatos

   function getDatos(datos){
       return new Promise(function(resolve, reject){
           console.log("pendiente")

           setTimeout(function(){
                if(typeof datos != 'string'){
                    reject("Error de datos!!!");
                }else{
                    resolve("Datos OK!!!")
                }
           },3000)
       })
   };

   getDatos(JSON.stringify(user))
        .then(reponse =>{
            console.log(reponse);
            return reponse;
        })
        .then(datos =>{
            localStorage.setItem("usuario", datos)
        })
        .catch(error => {
            console.log(error);
        })

 */