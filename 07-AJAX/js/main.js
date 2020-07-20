// AJAX
/*
// Crear el objeto
const xhr = new XMLHttpRequest();

// conexión con backend
xhr.open('GET', 'https://randomuser.me/api?result=1')//
// Consulta método onreadystatechange
xhr.onreadystatechange = function(){
   // console.log(xhr.readyState);
   // console.log(xhr.status);

   // Comprobamos que la conexión es ok
    if(xhr.readyState === 4 && xhr.status === 200 ){
       // Parseamos el resultado de response
        let datos = JSON.parse(xhr.response).results[0] ;
        console.log(datos)
        // recongemos las propiedades de JSON
        let {name:{title,first,last}, picture:{medium}} = datos;
        //console.log(title, first, last, medium);

        // Mostramos en HTML
        document.querySelector(".user").innerHTML = `
                                                        <p>Nombre: ${first}</p>
                                                        <p>Apellido: ${last}</p>
                                                        <img src="${medium}">
        
        `
        
    }
}


xhr.send()


const datos = {
    name: "Fran",
    surname: "Martinez"
};

const xhr = new XMLHttpRequest();

xhr.open('POST', 'https://reqres.in/api/users')
xhr.setRequestHeader("Content.type","application/x-www-form-urlencoded");
xhr.onload = function(){
   
    if(xhr.status === 201){
        console.log(xhr.response);
    }
}


xhr.send(JSON.stringify(datos))
*/