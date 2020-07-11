'use strict'

// Array DB
let cursos = ["Javascript", "Angular", "NodeJS"];
let sobreCurso = ["Texto sobre javascript", "Texto sobre Angular", "Texto sobre NodeJS"];
let imagenes = ["img/javascript.jpg","img/angular.jpg","img/nodejs.jpg"];

let articulos = document.querySelector(".container");

for(let i = 0; i<cursos.length; i++){

// Crear los elementos de la card
// DIV card
let card = document.createElement("div");
card.className= "card";

// Caja imagen
let caja = document.createElement("div");
let img = document.createElement("img");
// ponemos el atributo src a la img y rellenamos su valor
img.setAttribute("src", imagenes[i]);
caja.append(img)

caja.className = "caja";

// Titulo del producto
let title = document.createElement("h2");
let textTitl = document.createTextNode(cursos[i]);
let ralla = document.createElement("hr");
title.prepend(textTitl);
title.append(ralla);

// información del producto
let parrafo = document.createElement("p");
let textParra = document.createTextNode(sobreCurso[i]);
parrafo.appendChild(textParra)

// Boton comprar
let btn = document.createElement("span");
let btnTexto = document.createTextNode("Comprar");
btn.appendChild(btnTexto);
btn.className= "btn";
// Añadimos un id al botón para poder indetificar el botón pulsado
btn.setAttribute("id", cursos[i] ); // Esto nos permite saber que botón es pulsado

// Montar la card

card.appendChild(caja);
card.appendChild(title);
card.appendChild(parrafo);
card.appendChild(btn);

// Añadir la card al html
articulos.append(card)

}

// Detectando botón pulsado
let botones = document.querySelectorAll(".btn"); // Creamos un array con todos los botones
//  creamos un addEventListener por cada boton
botones.forEach(boton => {
    boton.addEventListener("click", comprar)
})

// function comprar
function comprar(event){
    alert("Has comprado " + this.getAttribute("id"));
    
}
