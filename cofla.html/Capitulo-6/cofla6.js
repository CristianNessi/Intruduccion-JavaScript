// PROBLEMA A

// const contenedor = document.querySelector(".flex-container")

// function crearLlave(nombre,modelo,precio){
//     img = "<img src='llave.png'>";
//     nombre = `<h2>${nombre}</h2>`;
//     modelo = `<h3>${modelo}</h3>`;
//     precio = `<p>Precio: <b>$${precio}<b/></p>`;
//     return [img,nombre,modelo,precio];
// }

// const fragmento = document.createDocumentFragment();

// for (var i = 0; i < 20; i ++) {
//     let modeloRandom = Math.round(Math.random()*10000);
//     let precioRandom = Math.round(Math.random()*10+30);
//     let llave = crearLlave(`llave${i}`,`modelo${modeloRandom}`,precioRandom);
//     let div = document.createElement("DIV");
//     div.classList.add(`item-${i}`,'flex-item');
//     div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
//     fragmento.appendChild(div);
// }

// contenedor.appendChild(fragmento);

document.addEventListener("DOMContentLoaded", function() {
const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio) {
    //let img = '<img class="llave-img" src="cofla.html/Capitulo-6/llave.png">';
    let img = '<img class="llave-img" src="https://github.com/CristianNessi/Intruduccion-JavaScript/blob/3e0a25ac84a126d3b3fb7c954183d86898f2a64f/cofla.html/Capitulo-6/llave.png">';
    // https://github.com/CristianNessi/Intruduccion-JavaScript/blob/main/cofla.html/Capitulo-6/llave.png
   // let img = '<img class="llave-img" src="https://github.com/CristianNessi/Intruduccion-JavaScript/blob/main/cofla.html/Capitulo-6/llave.png">';
   // let img = '<img class="llave-img" src="C:\\Users\\crist\\OneDrive\\Escritorio\\llave.png">';
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`; // Corregir aquí
    return [img, nombre, modelo, precio];
}

const documentFragment = document.createDocumentFragment();

for (var i = 0; i < 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`llave${i}`, `modelo${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

});

