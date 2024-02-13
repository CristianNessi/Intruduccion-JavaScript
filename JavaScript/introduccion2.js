// Parte dos

//                 Arrays. 

// variable "se guarda un dato"
// arrays = Es un recipiente que contiene un conjuntos de datos(variables). //objetivos. 
// arrays es un contenedor de objetos. 


arrays = ["Cristian","27","dublin"];

let frutos = ["banana"," manzana "," pera"]; // se conforma de 0 1 2

// document.write(frutos) // Forma de llamar al arrays 

// document.write(frutos[1]) // Forma de llamar al elemento dentro del arrays 

// el array arranca a contar desde Indice cero. 

//                   arrays asociativos. 

// trabaja con intercambio de informarcion. 
// Se llama por nombre del indice.

let pc = {
    nombre: " CrisPC",
    procesador: " Ryzen-5",
    ram: " 16GB",
    espacio: " 1TB"

} // arrays asociativos

let pc5 = ["CrisPC","Ryzen-5","16GB","1TB"] // arrays normal. 

// document.write(pc["nombre"]) // nombre del indice.

let nombre = pc ["nombre"];
let procesador = pc ["procesador"];
let ram = pc ["ram"];
let espacio = pc ["espacio"];

frase = `El nombre de mi Pc es:${nombre}<br>
         el nombre de mi procesador es:${procesador}<br>
         la memoria ram es:${ram}<br>
         el espacio del disco es de:${espacio}`; 

// document.write(frase) imprimir en pantalla.  

/////////////////////////////////////////////

///          Bubleos y iteraciones.


// While, bucle infinito. ejecuta el programa hasta que encuentre un falso. Mientras (while) se ejecuta mientras se verdadero.
   // primero se pregunta y despues cumple la condicion. 
   //

// Do.  Lo mismo que el while pero cambia que se ejecuta y despues de pregunta. 
    //  Ejecuta una vez y despues pregunta. 


/////////   iteraciones. 

//////////// break. Finaliza el bucle
////////// continue. saltea una iteracion. no la muestra, pero continua el bucle




////////////// FOR. bucle finito(determinado) le tenemos que decir las vuelta que dara
        // ejecuta tantas veces como le digamos.
        // las variables creadas dentro del bloque solo existen en el bloque

        // declaramos e inicializamos
        // condicion
        // iteramos



////////// continue
//  let numero = 0

 ////ejemplo WHILE

// while (numero <= 5){
//     numero ++;
//     // document.write(numero + "<br>") Imprimir en pantalla. 
// 
//} 5 bucles


 /////// ejemplo DO
// let numerodos = 0 

// do {
//     numero++;
//     document.write(numero + "<br>") 

// } // un bucle por defecto.

// while (numero <= 7) // 7 bucles finales.

////// ejemplo BREAK

// while(numero < 99) {
//     numero++;
//     document.write(numero);
//     if (numero == 20){break}
// } // 20 bucles


////////////// ejemplo FOR

// primero se crea variable declaracion e inicializacion 
// condicion
// aumento o decremento.

// for (let i=0; i<6; i++ ) {
//     document.write(i + "<br>")

// } // 6 veces de bucle

// fomas de usar variables externas. 

// let i = 6

// for (i; i >= 0; i--) {
//     document.write(i + "<br>")
// }
//  document.write(i)


////////// ejemplo continue. 

// for (let i =0; i< 20; i++){

//     if (i==12) {
//         continue;
//     }
//     document.write(i + "<br>")
// }


//----------------------------------------------

///////// FOR IN / OF -- Recorren un array

/// IN = devuelve el numero del indice del array // busca objetos. 
/// OF = devuelve el contenido del indice. // busca el nombre del objeto

// let animales = ["gato","perro","delfin","tigre"];

// for (animal in animales){
//     document.write(animal + "<br>");
// } // muestras los indices

// // for (animal in animales){
// //     document.write(animales[animal] + "<br>");
// // } // ahora muestas el contenido pero no el indice

// document.write("<br>")

// for (animal of animales) {
//     document.write(animal + "<br>")
// } // muestra el contenido



//////// sentencia label. // determina el nombre del un bucle.



// arrayuno =["maria","pedro","roberta"]
// arraydos =["pedro","marcelo",arrayuno]

//recorrer una array dentro de otro array

// for(let array in arraydos){
//     if (array == 2){
//         for (let array of arrayuno){
//             document.write(array + "<br>");
//         }
//     } else {
//         document.write(arraydos[array] + "<br>");
//     }
// }

//// ejemplo dos- con breack

// arrayuno =["maria","pedro","roberta"]
// arraydos =["pedro","marcelo",arrayuno,"josefina"]


// for(let array in arraydos){
//     if (array == 2){

//         for (let array of arrayuno){
//             document.write(array + "<br>");
//             break; // este breack solo termina este bloque. 
//                   // por esa razon muestra tambien el ultimo indice.
//         }

//     } else {
//         document.write(arraydos[array] + "<br>");
//     }
// }

///// ejmplos tres- con label

// forRancio: // sentencia label. 
// for(let array in arraydos){
//     if (array == 2){

//         for (let array of arrayuno){
//             document.write(array + "<br>");
//             break forRancio; 
//             // al darle nombre, podemos frenar el bucle y no muestra a josefina.
//         }

//     } else {
//         document.write(arraydos[array] + "<br>");
//     }
// }








//////////////////// FUNCIONES

// definicion y usos. - A una porcion de codigo se le asigna un nombre ejemplo (SUMA)
    // y en vez de volver a escribir el codigo. escribimos el nombre de funcion y lo llamamos.
    // OPTIMIZA // 
// se pueden crear a parte de variables pero no es optimo.
//scope: es la posibilidad de crear variables dentro de las funciones.
   //pero la variable solo se puede usar dentro la funcion. (Variable REGIONAl)
// las variables se pueden crear desde cualquier parte de la programacion. 


    /// Para no repetir tantas veces el codigo del saludo. 
//ejemplo

// respuesta = prompt("Hola como fue tu dia ?");
//     if (respuesta == "bien"){
//     alert("me alergro");
//     }else {
//         alert("una pena")
//     }

// respuesta = prompt("Hola como fue tu dia ?");
// if (respuesta == "bien"){
// alert("me alergro");
// }else {
//     alert("una pena")
// }

// respuesta = prompt("Hola como fue tu dia ?");
// if (respuesta == "bien"){
// alert("me alergro");
// }else {
//     alert("una pena")
// }

// se crea la funcion
function saludar1(){
    
    respuesta = prompt("Hola como fue tu dia ?");
    if (respuesta == "bien"){
    alert("me alergro");
    }else {
        alert("una pena")
    }
}

// se la llama la function. Las veces que sean necesarias 
// saludar1()
// saludar1()
// sin necesidad de tanto codigo. 

//return -- Que es ? transforma y retornar un dato.
// similar al break en los bucles. 

function saludar(){
    alert("hola");
    return "La funcion se ejecuto correctamente"
}
let saludo = saludar(); // la funcion se convierto en un dato.
document.write(saludo)

/// fuciones- parametros.. se declaran y crean dentro de una funcion.
//           (posibilidad de variar)

// se definieron variables y se creo la funcion. 
let num1 = 55;
let num2 = 50;
function suma(){
    let res = num1 + num2;
    document.write(res);
}
suma()

// Se le puso parametro- se creo primero la funcion 
// y defino las variables cuando la llamo.
function suma1(num3,num4){
    let res = num3 + num4;
    document.write(res);
    document.write("<br>")
}
suma1 (66,77) // se llama a la funcion definiendo las variables.

// Se creo una funcion con retorno de reusltado. 
// definimos las variables. y retorna la respuesta. 
function suma3(num5,num6){
    let res = num5 + num6;
    return res
}
let resultado = suma3(8,9)
document.write(resultado)

// funcion saludar con parametro nombre.
function hello(name){
    let frase1 = `hola ${name} como estas?`;
    document.write(frase1)
}
hello("Evelin")



/////// funciones flecha


// Primera forma funcion hello.
// function bye(name){
//     let frase1 = `buenas noches ${name} adios`;
//     document.write(frase1)
// }
// hello("Evelin")   //// forma comun

/// seugnda forma
// const bye = function(name){
//     let frase1 = `buenas noches ${name} adios`;
//         document.write(frase1)
// }
// bye("pedro")  //// forma normal

const bye = (name)=>{  // la palabra function se reemplazo por =>
    let frase1 = `buenas noches ${name} adios`;
        document.write(frase1)
}
bye("pedro")  /// forma flecha 

// si no hay parametro se pondria asi/  ()=>{
// si hay un parametro se pondria asi/  sin parentesis. name=>{ 

// mas simplificada seria. 

// const bye = name => document.write(frase); // Sin llaves.
// bye("pedro") --- 


//************** FIN DE CAPITULO */

