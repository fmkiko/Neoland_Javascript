// fetch api

/*
// petición con fetch

fetch('https://randomuser.me/api/?results=1')
    .then( reponse => {
       return reponse.json()
    })
    .then( datos => {
        console.log(datos)
    })
    .catch( error =>{
        console.log(error)
    })
    */
   // Llamadas al DOM
   const btn = document.querySelector("#btn");
   const div = document.querySelector(".resultados");

   // eventos
   btn.addEventListener('click', apiSet);

   // funtions
   // Llamada a la api
   function apiSet(){
     fetch('https://randomuser.me/api/?results=1')
        .then(response => {
            return response.json()
        })
        .then( datos => {
            mostrarHTML(datos);
        })
        .catch(error => {
            console.log(error)
        })
   }
   // mostrar contenido en html
   function mostrarHTML(datos){
        let data = datos.results[0];
      
        let image = data.picture.medium
     
        let nombre = data.name.first;
        let apellido = data.name.last;
       // console.log(nombre, apellido)
       div.innerHTML = `
                        <img src="${image}">
                        <p>Nombre: ${nombre} </p>
                        <p>Apellido: ${apellido}</p>
       
       `

   }
