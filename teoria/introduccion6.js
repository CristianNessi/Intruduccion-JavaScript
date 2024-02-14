//                      CAPITULO 6

//DOM /

// - Deficion --  Document Object Model. 
// - Concepto Extendido --- Todo lo que se entiende como HTML, CCS, JAVA SCRIPT.

// - Nodo -- Un modo en el DOM es cualquier equita del cuerpo, como un parrafo, el mismo body o incluso las etiqueta de una lista. 

//tipos de nodos.

// * Document: El nodo document es el nodo raiz, a partir del derivan el resto de los nodos.
// * Element: Nodos definidos por etiquetas html. 
// * Text: El texto dentro de un nodo element se considerea un nuevo nodo hijo de un tipo text (texto).
// * Attribute: Los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como informacion asociada al nodo de tipo element)
// * Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generen nodos. 

//-----------------------------------------------------------

// ARBOL DOM. 
//                                  />> title(nodo)
//                          >> HEAD (nodo)    
//                        /         \>> meta(nodo)-->> UTF-8 (nodo)
//                       /
// DOM(nodo raiz)>> html (nodo)
//                       \
//                        \                  / >> (ejemplo) script (nodo)
//                          >> BODY(nodo)>> (ejemplo)form (nodo)
//                                           \ >> input (nodo)

//-----------------------------------------------------------

// Metodos de seleccion de elementos o grupos. (el metodo se explica a un objeto.)

// -getElementById() -- Seleccion un elemento por ID.
// -getElementsByTagName() -- Seleccion todos los elementos que coincidan con el nombre de la etiqueta especifica.
// -querySelector() -- Devuelve el primer elemento que coincida con el grupo especifico de selectores.
// -querySelectorAll() -- Devuelve todos los elementos que coicidan con el grupo especifico de selectores.





//Ejemplos...


// como obetenes un valor en HTML. 
let parrafo = document.getElementById("parrafo")+ "<br>"; // muestra null. Porque en elemento ID
document.write(parrafo); 
// debemos seleecionar por si etiqueta. p = p / b = b / a = a
let uno = document.getElementsByTagName("p")+ "<br>";
document.write(uno); 
// debemos seleccionar por su identificador. / class = (".") id = ("#") 
let dos = document.querySelector(".dos")+ "<br>";
document.write(dos); 
// debemos seleccionar por lista de nodos. / class = (".") id = ("#") 
let tres = document.querySelectorAll(".tres")+ "<br>";
document.write(tres[6]); 





// Metdos para definir obetener y eliminar valores de atributos. 

// - setAttribute() -- Modifica el valor de un atributo. 
// - getAttribute() -- Obtiene el valor de un atributo.
// - removeAttribute() -- Remueve el valor de un atributo.





const rangoEtario = document.querySelector(".rangoEtario")
// document.write(rangoEtario)
// modificamsos. Primero seleccion el (tipo/ type)- segundo le damos (valor/text - color - number - password) 
rangoEtario.setAttribute("type","text")

// puede crear tambien
rangoEtario.setAttribute("type","Holamundo") // se comprueba el la consola que va a tener ese nombre el atributo.

// en consola 2. y se seleccion. 

// Para obetener el valor. 
const rangoPuntos = document.querySelector(".rangoPuntos");

valorDeAtributo = rangoPuntos.getAttribute("type");


document.write  ("<br>"+valorDeAtributo);

// Remover el valor 

const NUMERO = document.querySelector(".NUMERO");

valorDeAtributo = NUMERO.removeAttribute("type","");





//Atributo globales -- contienen todo los elementos en comun. todos los HTML.

//- class - Lista de clases del elemento separadas por espacios.
//- contentEditable - Indica si el elemento puede ser modificado por el usuario (bool).
//- dis - Indica la direccionalidad del texto.
//- hidden - Indica si el elemento aun no es, o ya no es, relevante.
//- id - Define un identificador unico. 
//- style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento. 
//- tabindex - Indica si el elemento puede obtener un focus de input. 
//- title - Contiene un texto con informacion relacionada al elemento que pertenece. 

// contentEditable
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true"); // se puede editar lo que hay adentro. SE edita el texto. 

// dir ()
const dir = document.querySelector(".dir");
dir.setAttribute("dir","rtl"); // izquierda LEFT to RIGTH
//  dir.setAttribute("dir","rtl"); // derecha RIGHT to LEFT

//hidden
dir.setAttribute("hidden",""); // no muestra el atributo.
// Si lo ponemos en html para que no aparezca la podemos hacer aparecer desde java/.

// tabindex/ permite ahcer un focus. 
const tab = document.querySelector(".tab");
tab.setAttribute("tabindex","false"); // solo funciona poniendo numeros. en tru o false

// title() 
const cuatro = document.querySelector(".cuatro");
cuatro.setAttribute("title","NADA");





//// atributos de inputs.

// -className
// -value
// -type
// -accept
// -form
// -minlength
// -placeholder
// -required

const minima = document.querySelector(".minima");

// document.write("<br>" +input.className) 
// document.write("<br>" +input.value) 
// document.write("<br>" +input.type) 
// document.write("<br>" +input.accept) 
// document.write("<br>" +input.form) 
// document.write("<br>" +input.minlength) 
// document.write("<br>" +input.placeholder) 
// document.write("<br>" +input.required) 

//  input.className ="Federico"// cambia el nombre.
// input.value = "777" // cambia el valor.
// input.type = 'number' /// cambia el tipo.
// input.accept = "image/png" // solo aceptas imagenes PNG.
// input.form = expliacdo en HTML.
// minima.minLength = 6//  // minima cantidad de caracteres.
// input.placeholder // escribi un mensaje dentro del input.
// input.required=" " /solo con una espacio sirve/ lo vuelve requerimiento.
// input.required="reqerid"





//// atributos de styles. 

// -usos y ejemplos. 
// -propiedades camel case. // se elimina el guion por el camelCase

const titulo5 = document.querySelector(".titulo5");

titulo5.style.backgroundColor = "red"
titulo5.style.color = "white"



//// Clases, classlist y sus metodos

//- Definicion y usos.
// - add() -- Añade una clase. 
// - remove() -- Remueve una clase.
// - item() -- Devuelve la clase del indice especifico.
// - contains() -- Verifica si ese elemento posee o no, la clase especifica.
// - replace() -- reemplaza una clase por otra.
// - toggle() -- si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

const titulo6 = document.querySelector(".titulo6");

titulo6.classList.add("Grande") // >> ver en CCS
titulo6.classList.remove("dos") // ver en consola.
let valor = titulo6.classList.item(1) // devuelve un valor de la clase.
document.write(valor)
let value = titulo6.classList.contains("fggg") // verifica que tenga en el nombre de clase
document.write(value)

titulo6.classList.toggle("Federico") // agrego la clase, porque no la tenia. si la tuviera si la borra. 

titulo6.classList.replace("titulo6","titulo7") // cambio el nombre de clase. 






////. Obtencios y modificacion de elementos.

// - textContent -- Devuelve el texto de cualquier nodo.
// - innerText --  Devuelve el texto visible de un nodo element.
// - outerText -- Devuelve el texto de las etiquetas HTML, incluidas las etiquetas
//  innerText --  no se usa mas. //// outertext no se usa mas. 
// - innerHTML -- Devuelve el contenido HTML de un elemento.
// - ourterHTML -- Devuelve el cogido HTML completo del elemento. 


const INNER = document.querySelector(".INNER");

//let resultado = INNER.textContent;  
// Textcontent -- innerText // al estar visible el elemento no realiza cambios.
INNER.setAttribute("hidden","")
let resultado = INNER.textContent;  
// en cambio si lo ocultas con hidden, el unico que lo muestra es textContent

// document.write("<br>"+resultado) // no, nos muestra el elemento invisble. con textContent.
alert(resultado)
// PERO CON OUUTER Y INNER HTML CON -- ALERT  LO PODEMOS VER.

let resultadoB = INNER.innerHTML // Nos muestra el elemento invisible.
alert(resultadoB)

/// pero ourter. 
let resultadoC = INNER.outerHTML // Nos muestar el codigo completo. 
alert(resultadoC)




//// Creacion de elementos. 

// - createElement() / todo lo que sea debe ser el mayuscula. 
// - createTextNode() / Crea un nodo.
// - appenChild() / como meter un nodo dentro de otro. y que sea el hijo. 
// - createDocumentFragment() // crea varios elementos.

const contenedor = document.querySelector(".contenedor")

// NODO UNO
//const itemP = document.createElement("LI") // se crea elemento. 

// FORMA UNO -- NODO DOS
//const textDelItem = document.createTextNode("Este es un item de la lista") // nuevo item
//itemP.appendChild(textDelItem); // Ingresa el hijo dentro del otro elemento.

//no esta un objeto no un elemento. //
//itemP.innerHTML = "segundo item de la lista." // Modifica un elemento que ya esta. O lo crea de cero.

//contenedor.appendChild(itemP)
//console.log(itemP)

// agregar varios elementos juntos a la lista. 

const fragmento = document.createDocumentFragment();

for (i = 0; i < 5; i++){
    const itemP = document.createElement("LI");
    itemP.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(itemP)
}

contenedor.appendChild(fragmento);

console.log(contenedor)




//// obtencion y aplicacion de childs (hijos)

// -firstChild / los espacios en blanco cuenta como nodos.
// -lastChild / misma manera que el anterior.
// -firstElementChild / cuenta solamente los elementos.
// -lastElementChild / misma manera que el anterior.
// -childNodes / devuelve todos los nodos HIJOS. espacios en blanco incluidos.
// -children / hijos solo htmls. sin espacios en blanco.


const caja = document.querySelector(".caja")

// const primerhijo = caja.firstChild; // Deja espacios en blanco y los cuenta como nodos.

const primerhijo = caja.firsElementChild; // no cuenta el siguiente elemento. No los espacios en blanco/\.
console.log(primerhijo) 

const hijosnodos= caja.childNodes // no lo tomas como array, muestra los espacios en blanco.
// se puede recorrer con un foreach

// hijosnodos.forEach(hijo => console.log(hijo)); / se puede recorrer
//console.log(hijosnodos)

const hijos = caja.children; // no se puede recorrer. con foreach
for (hijo of hijos){
console.log(hijo) }






// metodos de child (Hijos)

// - replaceChild() // reemplaza el titulo. 
// - removeChild() // se puede eliminar un hijo de un elemento padre.
// - hasChildNodes() // verifica que tenga hijos

const caja2 = document.querySelector(".caja2");

const texto = document.createElement("P")
//.innerHTML = "Texto";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo"

const h2_antiguo = document.querySelector(".h2")

//caja2.replaceChild(h2_nuevo,h2_antiguo) // reemplaza el titulo.

// caja2.removeChild(h2_antiguo) // se elimino el hijo .. 

let respuesta = caja.hasChildNodes() 
if (respuesta) {
    document.write("El elemento tiene hijos.")
} else {
    document.write("El elemento no tiene hijos.")
}






// Propiedades de paretns (Padres) Seleccion de padres. 



// - paretsElement() / Seleccion el padre elemento de un elemento. 
// - parentNode()  / Elige el padre NODO. En casos especificos donde el padre no es HTML

console.log(caja2.parentElement) // el padre seria el body. 

// Propiedades de Sibling (Hermanos) son los elementos que estan en el mis rango. // 



// - nextSibling() // cuenta los espacios en blanco como nodos.
// - previousSibling() // cuenta los espacios en blanco como nodos.
// - nextElementSibling() >> muestras los elementos HTML. NO CUENTE LOS ESPACIOS EN BLANCO.
// - previousElementSibling() >> muestras los elementos HTML. NO CUENTE LOS ESPACIOS EN BLANCO.

// devuelve quienes son los hermanos.
console.log(h2_antiguo.nextSibling) // su hermano es: text
console.log(h2_antiguo.previousSibling) // su hermano es: text
console.log(h2_antiguo.nextElementSibling) // su hermano es: H4
console.log(h2_antiguo.previousElementSibling) // su hermano es null. porque no tiene ninguna etiqueta HTML anterior.



// Nodos - Extras  // Seleccion el elemento ascente mas cercano que coincida con nuestro selector

// - Closest()


const div = document.querySelector(".div-3");

console.log(div.closest(".div"))




//************** FIN DE CAPITULO */



