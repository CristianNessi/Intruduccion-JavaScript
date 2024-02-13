// Variables/ 

recipiente ="papel"

recipiente = "Barbijo" // cambio la variable
alert(recipiente) // mostrar en pantalla. 

//--------

// Tipos de datos // PRIMITIVOS

// String ="cadena de texto"   (cadena de texto)
// Number = 99                 (todos los numeros)
// Booleano  = 1 , 0              (true o false) Tabla de verdad

// Casos especiales. 

// dato ...  undefined (todavia no lo define)
// dato ...  NaN  (numero no identificado)
// dato ...  null (dato que defini null)

let apellido; // undefined.

apellido = nessi; // la declare deja de ser undefined

// Tipos de variables 

// var / let / const 

// const> constante // NO PUEDE CAMBIAR
// let > actualmente llama por let. (limita al bloque)
// var = variable que toma todo el bloque

const name= "cristian"; // no puede cambiar 

let nombre= "cristian"; // cambio el tipo de variable de string a numbre
nombre= 77;

// hosting ? creacion y ejecucion. /  de puede ejecutar y crear despues / funciona con funciones. 

// creacion. 

alert(numero);  //ejecucion 
numero=7    // creacion

// esto no funciona solo con variables. Le tenemos que dar un funcion.

let numero
alert(numero);  
numero=7 

// scope ? variable por bloque (let)

// funcion promt
prompt ("Decime tu nombre") // Pedimos un valor. donde lo guarda?

let Nombre = prompt ("Decime tu nombre") // Guarda el valor en la variable. 
alert(Nombre)

alert("Hola + Nombre") // Dinamismo. 

// Operadores. 
// asigacion.
// ( igual , suma , resta , multiplicacion , division)
// (tambien tiene: resto , esponalizacion)
let numero2 = 10
numero += 5 // suma
numero -= 5 // resta
numero /= 5 // division
numero *= 5 // multiplicacion
numero %= 4 // resto=2 // . 10 / 4 = 2. Sobran(resto) 2.
numero **= 5 // esponencial
document.write(numero) // (de a UNO) Muesta en pantalla pero al momento.

// aritmericos. 

numero3=5, numero4=6;

resultado = numero3 + numero4 // suma
resultado = numero3 ++ // Incremento
resultado = numero3 -- // decremento
resultado = numero3 / numero4 // division
resultado = numero3 **2 // esponente
resultado = numero3 & numero4 // resto
resultado = numero3 - numero4 // resta
resultado = -numero3 // pasa a negativo
resultado = +numero3 // pasa a positivo
alert(resultado)

// concatenacion. une string 

Saludo ="Hola pedro";
Pregunta ="como estas ?";

frase = Saludo + Pregunta; // (concatena)

numero5=6, numero7=9

suma = numero6 + numero7 // Realiza suma (no tiene string)
suma = "" + numero6 + numero7  // concatena(porque detecto string) Tipado dinamico. 
// otra manera de hacer dinamismo con (number) y (string)
suma = numero6.concat(numero7) // muestras string no realiza suma.
// concat = metodo de cadena // se ultiliza con string si o si

// backlist `

Name = "Cristian"
frase2 = "soy" + Name + "y estoy caminando" // forma uno.

frase2 = `soy ${Name} 

y estoy caminando` // forma dos.  // el salto de linea se puede hacer solo usando backlist.

//codigo HTML. Solo usando backlist

frase = `<div>
<h1>Titulo</h1>
<h1>Subtitulo</h1>
</div>`

// escape de comillas simples y dobles

frase2 = "soy 'cristian'y estoy caminando"; // se puede
// frase2 = "soy "cristian" y estoy caminando" // No se puede. se cierra y abre la cadena
frase2 = 'soy "cristian" y estoy caminando' // se puede
frase2 = 'soy "cristian" y `estoy` caminando' // se puede doble escape

// operadores intermedio, de comparacion (true o false). 

let operadorA = 67
let operadorB = 87
let textoC = "TextoC"
let textoD = "87"

// operador1 == /Igualdad
// operador2 != /distintos
// operador3 === /estricamente iguales. (tipos de datos, string booleano)  
// operador4 !== / Si no es estricamente igual.
// operador5 > / mayor
// operador6 < / Menor
// operador8 => / Mayor o igual
// operador9 =< /Menos o igual

(operadorA == operadorB) =false
(operadorA != operadorB) = true
(operadorA === textoC) =false
(operadorA == textoD) =true
(operadorA !== textoC) =true
(operadorA > operadorB) =false
(operadorA < operadorB) =true
(operadorA >= operadorB) =false
(operadorA <= operadorB) =true

// operadores logicos / binarios (true o false). table de verdad
// sibomlo = && "and" // Verdadero si ambos verdaderos. Sino es falso
// sibomlo = || "or"  //  Falso si ambos falsos. Sino es verdadero
// sibomlo = ! "not"  // Cambia, si es verdadero a falso.

// TABLA DE VERDAD. 
//AND                //OR             //NOT
//  V && V = V       V || V = V       ! V = F
//  F && V = F       V || F = V       ! F = V
//  V && F = F       F || V = V       V && (!V) = F
//  F && F = F       F || F = F       F && (!F) = V

// TABLA DE VERDAD BINARIA. 
//AND                //OR             //NOT
//  1 && 1 = 1       1 || 1 = 1       ! 1 = 0
//  0 && 1 = 0       1 || 0 = 1       ! 0 = 1
//  1 && 0 = 0       0 || 1 = 1       1 && (!1) = 0
//  0 && 0 = 0       0 || 0 = 0       0 && (!0) = 1


//camelcase 
// (apartir de la segunda palabra va todo con mayuscula)

// ejemplo

let holaComoEstas 

// Practica

document.getElementById // una
document.getAnimations // dos
DocumentTimeline // tres
TransformStreamDefaultController // cuatro

//condicionales (si / siNo / siNo / No)

// if    (UNO SOLO)
// if else (INFINITOS)
// else  (UNO SOLO)

alert("Hola") // bloque/ Se ejecuta.
domento.write("pedro") // segundo bloque. Se ejectuta.

if (true){
    alert("hola")
} // verdadero se ejecuta

if (false){
    alert("hola")
} // no  se ejecuta

if (7 < 9) {
    alert("hola")
} // verdadero se ejecuta

if (7 > 9) {
    alert("hola")
} // no  se ejecuta

if ("pedro"=="pedro") {
    alert("hola")
}// verdadero se ejecuta

let nombreC= "Cristian Nessi"

if (nombreC =="Nessi") {
    alert(`tu nombre es ${nombreC}`)
}

else if (nombreC =="Cristian"){
    alert(`tu nombre es ${nombreC}`)
}
// No se ejecuta ninguna de las anteriores. 

else {
    alert("Tu nombre es otro")
} // Mensaje de que es otro. 

// --------------- 

let nombreD= "Cristian Nessi"

if (nombreD == "Cristian" && apellido == "Nessi") {
    alert(`tu nombre es ${nombreD}`)
} // Se ejecuta



//************** FIN DE CAPITULO */











