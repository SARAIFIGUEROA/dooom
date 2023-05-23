/*Estamos construyendo un card
este es el primer div*/ 

var fila 


for(var i=1; i<=3; i++){

var cuerpo= document.getElementById("cuerpo")
var contenedor1 = document.createElement("div")
contenedor1.id="card1"+i
contenedor1.className="card"
contenedor1.style=("width: 18rem; ")
contenedor1.textContent="Adidas"
cuerpo.appendChild(contenedor1)
/*Vamos a construir la imagen dentro del primer div*/

var card1 = document.getElementById("card1"+i)
/*Indicamos crear etiqueta imagen*/ 
var imagen= document.createElement("img")
/*le damos atributos a img*/ 
imagen.src="/img/imagen"+i+".webp"
imagen.className="card-img-top"
imagen.alt="foto-zapatilla"
card1.appendChild(imagen)

/*vamos a construir el segundo contenedor(div)*/ 
var contenedor2= document.createElement("div")
contenedor2.textContent="zapatillas"
contenedor2.id="div2"+i
contenedor2.className="card-body"
contenedor2.style="width: 18rem; "
card1.appendChild(contenedor2)

/*vamos a crear el h5*/
var div2=document.getElementById("div2"+i)
 var h5=document.createElement("h5")
 h5.textContent="Adidas"
 h5.className="card-tittle"
div2.appendChild(h5)

 /*vamos a crear parrafo*/
 var parrafo=document.createElement("p")
 parrafo.innerHTML="Some quick example text to build on the card title and make up the bulk of the card's content."
 parrafo.className="card-text"
 div2.appendChild(parrafo)

 /*vamos a crear un enlace */
 var enlace = document.createElement("a")
 enlace.id="boton"
 enlace.text="ver más"
 enlace.className="btn btn-primary"
 div2.appendChild(enlace)
}


  
