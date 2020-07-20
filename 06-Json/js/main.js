

const div = document.querySelector(".user");

// JSON
/*
const miJson = {
    nombre : "Fran",
    apellidos: "Martinez",
    email: "francisco@neoleand.es"
};

console.log(miJson.email, miJson.nombre, miJson.apellidos);

// JSON

const user = {
    nombre: "Pepito",
    apellidos: "Martin",
    email: "erer@wewe.com"
};

// Mostra por pantalla
console.log(user.nombre, user.apellidos, user.email)

const users = {
    user1: {
        nombre: "Fran",
        apellido: "Martinez",
        email: "fdfd@dsd.com",
        direccion:{
            calle: "Pepetio n 12",
            pais: "España",
            ciudad: "Barcelona"
        }
    },
    user1: {
        nombre: "Maria",
        apellido: "Marti",
        email: "maria@dsd.com",
        direccion:{
            calle: "Cordon n 12",
            pais: "España",
            ciudad: "Madrid"
        }
    },

};




// Llamar a la function
mostraEnHTML(users);



// function para mostrar en HTML
function mostraEnHTML(j){
    let arrayJson = [];
    arrayJson = j;
    let ul = document.createElement("ul"); // creamos el ul
    // For in para iterar con la arrayJson
    let i;
    for( i in arrayJson){
        let li = document.createElement("li");// creamos el li
        li.innerHTML = `<p><strong>Nombre: </strong>${arrayJson[i].nombre}</p>
                        <p><strong>Apellido: </strong>${arrayJson[i].apellido}</p>
                        <p><strong>Email: </strong>${arrayJson[i].email}</p>
                        <p><strong>Calle: </strong>${arrayJson[i].direccion.calle}</p>
                        <p><strong>Pais: </strong>${arrayJson[i].direccion.pais}</p>
                        <p><strong>Ciudad: </strong>${arrayJson[i].direccion.ciudad}</p>
        
        `
        li.style.listStyle = "none";
        ul.appendChild(li);// Anadir la plantilla al li

        // añadir el ul al  div
        div.appendChild(ul);

    }

};


// Guardar JSON en el localStorage
const user = {
    nombre: "Fran",
    apellido: "Martinez",
    email: "francisco@neoland.es",
    
};

let userString = JSON.stringify(user); // Pasar el json a json string
localStorage.setItem("user", userString );// Grabar en el localStorage

let loginUser = localStorage.getItem("user");// Recuperar datos del localStorage

let userJson = JSON.parse(loginUser);// Pasar de string a object
console.log(loginUser)

console.log( userJson );
// mostrar en html
div.innerHTML = ` 
                <h1>User: ${userJson.nombre}</h1> 
                `;

 
 
  
  const user = {
      name: "Francisco",
      apellidos: "Martinez",

  };
  // forma clasica
  let nombre = user.name;
  let apellido = user.apellidos;

  console.log(nombre, apellido)

  // forma actual
  let { name, apellidos } = user;

  console.log(name, apellidos);


 const user = {
     nombre: "Pepe",
     apellido: "Gutierrez",
     direccion: {
         calle: "Paseo Gracia 12",
         ciudad: "Barcelona",
         viajes:{
             v1: "Madrid",
             v2: "Barcelona"

         }
     }
 };
 // forma clasica
let nombre1 = user.nombre,
    apellido1 = user.apellido,
    calle1 = user.direccion.calle,
    v11 = user.direccion.viajes.v1,
    v21 = user.direccion.viajes.v2;
console.log(nombre1,apellido1,calle1,v11,v21);

// forma actual
 let { nombre, apellido, direccion:{calle,ciudad,viajes:{v1,v2} } } = user;
 console.log(nombre,apellido,calle,ciudad,v1,v2);


 let nombre = "Francisco",
     apellido = "Martinez",
     avatar= "img/imange.jpj";



const user = { nombre,apellido,avatar };

console.log(user);
 */

 let nombre = "Fran",
     apellido = "Martinez",
     email = "email@email.com",
     calle = "Doctor Ferran 23",
     ciudad = "Barcelona",
     nombreConyuge = "Marta",
     apellidosConyuge= "Gutierrez";


const user = {nombre, apellido, email, direccion:{ calle, ciudad }, conyuge:{ nombreConyuge, apellidosConyuge }};
console.log(user);


    
    


