//                                   Metodos de cadena.  


//Utilizando una cadena de texto que deseamos modificar la primer letra y poner en la mayuscula
//Se ultiliza el metodo de cadena para modificar texto de la cadena que elegimos.

// Tipos de metodos. 

// -concat() -- Junta dos o mas cadenas y retorna una nueva.

//-startWith() -- Si una cadena comienza con caracteres de otra cadena, devuelve treu, sino devuelve false.
//-endtWith() -- Si una cadena termina con caracteres de otra cadena, devuelve true, sino devuelve false.
//-includes() -- Si una cadena puede encontrarse dentro otra cadena, devuelve true, sino devuelve false.
//-indexOf() -- Devuelve al indice del primer caracter de la cadena, si no existe, devuelve -1.
//-lastIndexOf() -- Devuelve el ultimo indice del perimer caracter de la cadena, si no existe, devuelve -1.



//-padStart() -- [Propuesta de Estantar] / Rellenar la cadena al principio con los caracteres deseados.
//-panEnd() -- [Propuesta de ECMA] / Rellenar la cadena al final con los caracteres deseados.
//-repeat() -- Devuelve la misma cadena pero repetida la cantidad que le indiquemos.




//-split() -- Divide la cadena como le pidamos.
//-substring() -- Nos retorna un pedazo de la cadena que seleccionamos.
//-toLowerCase() -- Convierte un cadena en minuscula.
//-toUpperCase() -- Convierte un cadena en mayuscula.
///toString() -- Metodo que devuelve una cadena que representa al objeto especifico
//-trim() --  Elimina los espacios en blanco al principio y final de una cadena.
//-trimEnd() -- Elimina los espacios en blanco del final de la cadena.
//-trimStart() -- Elimina los espacios en blanco del comiezo de la cadena.
//-valueOf() -- Retorno un valor primitivo de un objeto string.







/////////////////// CONCAT // Concatena cadenas.

// let cadena = "cadena de prueba"; 
// let cadena1 = " // cadena dos"
// resultado = cadena.concat(cadena1); 

// document.write(resultado); 

/////////////////// STARSWITH // empieza de la misma manera TRUE, si no es FALSE.

// let cadena = "cadena de prueba"; 
// let cadena1 = "cadena"
// resultado = cadena.startsWith(cadena1); 

// document.write(resultado); 

////////////// ENDWITH // termina de la misma manera TRUE, si no es FALSE.

// let cadena = "cadena de prueba"; 
// let cadena1 = "cadenb" 
// resultado = cadena.startsWith(cadena1); 

// document.write(resultado); 

////////////////// INCLUDES // Busca mismos caracteres en otras cadenas.  // si la palabras no existe en esa cadena devuelve false.

// let cadena = "cadena de prueba"; 
// resultado = cadena.startsWith("cadena"); 

// document.write(resultado); 

///////////////// INDEXOF //  Mismo que la anterior pero devuelve datos donde se encuentra el caracter. 

// let cadena = "cadena de prueba"; 
// resultado = cadena.indexOf("perro"); // como encuentra el carecter devuelve -1.
// resultado = cadena.indexOf(""); // El documento escribe la letra en la posicion que le decimos.

// // document.write(resultado);  
// document.write(cadena[10]); // Devuelve la letra en la posicion 10.

////////////////  LASTINDEXOF //  Lo mismo que anterior, en vez de devolver el primero devuelve el ultimo.

// let cadena = "cadena de prueba prueba prueba"; 
// resultado = cadena.lastIndexOf("prueba");  

// // document.write(resultado); //  devuelve el ultimo caracter. Sino lo encuentra devuelve menos -1.
// document.write(cadena[26] + cadena[27] + cadena[28]) // devuelve las letras que estan en las posiciones que sumo.





/////////////// Las proximas cadenas no forman del estandar oficial.




////////////// PADSTART // rellena la cadena. al principio.

// let cadena = "abc"; // tenemos 3 caracteres + los que le decimos que rellene.
// let cadena1 = "";
// // resultado = cadena.padStart(6,"A");  // rellena la cadena con 6 caracteres con la letra A.
// resultado = cadena.padStart(9,"pedro"); // rellena la cadena con 6 caracteres con la letra 8.

////////// primero va el numero que le pedimos. segundo el caracter que queremos.

// document.write(resultado); //

////////////// PADEND // rellena la cadena. rellena al final.

// let cadena = "abc"; // tenemos 3 caracteres + los que le decimos que rellene.
// let cadena1 = "";
// // resultado = cadena.padStart(6,"A");  // rellena la cadena con 6 caracteres con la letra A.
// resultado = cadena.padEnd(9," p7"); // rellena la cadena con 6 caracteres con la letra 8.

////////// primero va el numero que le pedimos. segundo el caracter que queremos.

// document.write(resultado); //

////////////// REPEAT // Repite la cadena. 

// let cadena = " abc"; 
// let cadena1 = "";
// // resultado = cadena.repeat(6); // la repite 6 veces 
// // resultado = cadena.repeat(0); // No repeti, no muestra nada. 
//  resultado = cadena.repeat(-1); // tira error de rango, en consola.

// document.write(resultado); 







/////////// metodos con mayor funcionalidad. 

//////////  SPLIT // DIVIDE LA CADENA EN FORMA DE ARRAY.

// let cadena = "HOLA COMO ESTAS"; 
// // // resultado = cadena.split(" "); // espacio forma como divisor. 
// // resultado = cadena.split("O"); // el O fomar como divisor.
// resultado = cadena.split("COMO");  // el COMO forma como divisor.

// // document.write(resultado[1]); // indice del array.
// document.write(resultado); // muestra el resultado completo no el indice.


//////////  SUBSTRING // crea un nuevo string.  

// let cadena = "ABCDEFGHIK"; 
// // resultado = cadena.substring(0,5); // toma dede el indice 0 hasta el 5. sin incluirlo.
// // resultado = cadena.substring(2,5);
// // resultado = cadena.substring(4,5);

// document.write(resultado);

/////////  TOLOWERCASE // convierte la cadena a miniscula.

// let cadena = "PERRO"; 
// resultado = cadena.toLowerCase(); 

// document.write(resultado); 

////////// TOUPPERCASE // convierte la cadena a mayuscula.

// let cadena = "cadena de prueba"; 
// resultado = cadena.toUpperCase(); 

// document.write(resultado); 

////////// TOSTRING // convierte a string.

// let cadena = 50; // number. 
// document.write(cadena / 5); // resultado.

// let cadena = 50; 
// resultado = cadena.toString(); 

// document.write(50 + resultado); 


/////////// TRIM // elemina los espacios en blanco.
 
// let cadena = "cadenadeprueba"; 
// resultado = cadena.trim(); 
// document.write(resultado + "<br>") 
// document.write(resultado.length); // cuanta los caracteres reales.


// let cadena1 = "            CADENA         DE          PRUEBA            "
// resultado = cadena1.trim();  // saca los espacios en blanco. 
// document.write(resultado + "<br>") 
// document.write(resultado.length); // cuanta los caracteres reales.

////////////// TRIMEND  // los espacios del final.

// let cadena = "hola       " // no cuenta los espacios en blanco del final.
// resultado = cadena.trimEnd(); 
// document.write(resultado.length); 

////////////// TRIMSTART

// let cadena = "        holas" // no cuenta los espacios en blanco del final.
// resultado = cadena.trimStart(); 
// document.write(resultado.length); 

/////////////// VALUEOF // Cuanta cuantos caracteres usamos. 

// let cadena = "hola                  " // la totalidad de caracteres con los espacios en blanco.
// resultado = cadena.valueOf(); 
// document.write(resultado.length); 

/////////////////////////////////////////////////// FIN de metodos de cadena. 













/////////// METODOS DE ARRAYS


//transformadores------
// -pop() -- Elimina el ultimo elemento del array y lo devuelve. 
// -shift() -- Elimina el primer elemento del array y lo devuelve.
// -push() -- Agrega un elemento al array al final de la lista.
// -reverse() -- Invierte el orden. 
// -unshift() -- Agrega uno o mas elementos al inicio del array y los devuelve.
// -sort() -- Ordena los elementos del (array) localmente y lo devuelve ordenado.
// -splice() -- cambia el contenido del array eliminando elementos y/o agregando nuevos.




//accesores-----------
// -join() -- Une todos los elementos de una matriz (u objeto similar) en una cadena y lo devuelve.
// -slice() -- Devuelve una parte del array dentro de un nuevo array empezando del inicio hasta el fin (fin no incluido) 
// -metodos ya vistos en cadena toString(), indexOf(), lastIndexOf(), inculdes()




//de repeticion-------
// -filter() -- crea un nuevo array con todos los elementos que cumplan la condicion
// -forEach() --  ejecuta la funcion indiciada una vez por cada elemento del array








/////// Transformadores-------

///// POP() / Elimina el ultimo elemento.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// let resultado = nombres.pop(); // elimino matias. 
// document.write(resultado);


///// SHIFT() / Elimina el primer elemento.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// let resultado = nombres.shift(); // elimino facundo. 
// document.write(resultado);

///// PUSH() / Elimina el primer elemento.

// let nombres = ["Facundo ","Nicol ","Cristian ","Matias "]

// document.write(nombres + "<br>")
// document.write(nombres.length + "<br>")

// let resultado = nombres.push("Francesca"); // Agrega un nuevo elemento. y muestra la cantidad. 

// document.write(nombres+ "<br>");
// document.write(nombres.length);

///// REVERSE() / Cambia el orden

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// let resultado = nombres.reverse(); // Invierte el orden.
// document.write(resultado);

///// UNSHIFT() / .

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// document.write(nombres + "<br>")
// document.write(nombres.length + "<br>")
// let resultado = nombres.unshift("Francesca"); //  . 
// document.write(nombres+ "<br>");
// document.write(nombres.length + "<br>");

///// SORT() / Ordena alfabeticamente.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// let resultado = nombres.sort(); // Ordena alfabaticamente del primer caracter.
// document.write(resultado);

/// SPLICE() / Modifica, agrega y elmina.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]
// //            [ 0 "Facundo", 1"Nicol", 2 "Cristian", 3 "Matias"
// document.write(nombres+ "<br>");
// // nombres.splice(0,1,"Rosana", "Mauricio"); // arranca en la posicion uno y elimina los siguiente dos.
// // nombres.splice(2,1,"Rosana", "Mauricio")
// nombres.splice(2,0,"Rosana", "Mauricio") // no elimina ninguno y solo agrega.
// // los agrega en los lugares que los quita.
// document.write(nombres);






//// accesores

///// JOIN() / Crea un nuevo array sin modifcar.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// document.write(nombres + "<br>");

// // let resultado = nombres.join(" | "); // Funciona como separador. 
//   // convierte a una cadena de texto. string"
// let resultado = nombres.join("<b><br>Nombres: </b>") 

// document.write("<b><br>Nombres: </b>" + resultado); // Sigue siendo solo una cadena de texto. 

///// SLICE() / Devuelve una parte del array.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// // let resultado = nombres.slice(0,1); // devuelve elemento sin incluir el final. 
// // let resultado = nombres.slice(0,0); // devuelve elemento sin incluir el final. 
// let resultado = nombres.slice(0,3); // devuelve elemento sin incluir el final. 


// document.write(resultado);


///// -metodos ya vistos en cadena toString(), indexOf(), lastIndexOf(), inculdes()
// Funciona para arrays

// let nombres = ["Facundo","Nicol","Cristian","Matias"]
// // resultado = nombres.indexOf("Cristian"); 
// // resultado = nombres.includes("Cristian"); 
// // resultado = nombres.lastIndexOf("Cristian"); 
// // resultado = nombres.toString("Cristian"); 

// document.write(resultado); 



///// de repeticion


///// FILTER //  funcion filter para poder dar vueltas con cuantos elementos tenga el array
// diferencia que podemos poner condiciones
// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// //funcion 
// // nombres.filter(nombre => document.write(nombre + "<br>"))
// // funcion flecha.
// nombres.filter(
//     (nombre)=>{
//     document.write(nombre + "<br>")
// })

///// FOREACH //  Similar al filter- sin condiciones.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// // funcion flecha.
// nombres.forEach(
//     (nombre)=>{
//     document.write(nombre + "<br>")
// }) // lo mismo que filter.

///// diferencia de filter con foreach // se puede agregar condiciones.

// let nombres = ["Facundo","Nicol","Cristian","Matias"]

// // funcion flecha.
// resultado = nombres.filter(nombre => nombre.length > 5); 
// // tiene la condicion de contar las letras, y mostras solo la que superas 6 letras.
// // muestra Facundo, Cristian, Matias.
// resultado = nombres.filter(nombre => nombre.length > 6); 
// // muestra solo Facundo, Cristian.

// document.write(resultado)






////// Objetos Math / Basico 

/// Metodos/// 
// - sqrt() - Devuelve la raiz cuadrada positiva de un numero.
// - cbrt() - Devuelve la raiz cubica de un numero.
// - max() - Devuelve el mayor de cero o mas numeros.
// - min() - Devuelve el mas pequeño de cero o mas numeros.
// - randow() - Devuelve un numero pseudo-aleatorio entre 0 y 1.
// - round() - Devuelve el valor de numero redondea al numero entrero mas cercano.
// - floor() - Devuelve la representacion flotante de precision simple mas cercana de un numero.
// - fround() - Devuelve el mayor entero menor que o igual a un numero.
// - trunc() - Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.


////// Propiedades
// PI --- numero PI
// SQRT 1_2 -- Raiz cuadrada de un 1/2.
// SQRT 2 -- Raiz cuadrada de un 2.


// E -- Constante de Eules, la base de logaritmos naturales.
// LN2 -- Logaritmo natural en base 2.
// LN10 -- Logaritmo natural en base 10.
// LOG2E -- Logaritmo E con base 2.
// LOG10E -- Logaritmo E con base 10.



// - sqrt() / raiz cuadrada

// numero = Math.sqrt(9);

// document.write(numero)

// - cbrt() / raiza cubiaca

// numero = Math.cbrt(9);

// document.write(numero)

// - MAX / devuelve el numero mas grande

// numero = Math.max(9,76,89,89,9,778,700,788);

// document.write(numero)

// // - MIN / devuelve el numero mas chico

// numero = Math.min(9,76,89,89,9,778,700,788);

// document.write(numero)

// - RANDOW / devuelve el numero aleatorio entre 0 y 1.

// numero = Math.random(9,76,89,89,9,778,700,788);

// document.write(numero)

// - ROUND / Redondea numeros enteros ente 1 y 100 incluidos

// let numero = Math.random()*100;
// numero = Math.round(numero);

// document.write(numero)

// - FLOOR / Si no es un numero entero, lo redondea hacia abajo y lo devuelve.
// si incluir el 100 pero si el cero.
// let numero = Math.random()*100;
// numero = Math.floor(numero);

// document.write(numero)

// asi se logra buscar un numero en el 0 y 100 sin incluirlos.

// for (var i = 0; i < 100.000; i++){
//     let numero = Math.random()*100;
//   numero = Math.floor(numero);
//   document.write(numero + "<br>")
// }

// // - TRUNC / elimina los decimales.

// let numero = Math.trunc(9.9);

// document.write(numero)



///////// propiedades


//// - pi / elimina los decimales.

// let numero = Math.PI;

// document.write(numero)

//// - SQRT1_2 /  raiz cuadrada de un medio.

// let numero = Math.SQRT1_2;

// document.write(numero)

//// - SQRT2 /  raiz cuadrada de dos.

// let numero = Math.SQRT2;

// document.write(numero)



////// Constantes y logaritmos. 



//// - E /  constate de euler.

// let numero = Math.E;

// document.write(numero)

//// - LN2  /  Logaritmo natural de 2.

// let numero = Math.LN2 ;

// document.write(numero)

//// - LN10 /  Logaritmo natural de 10.

// let numero = Math.LN10 ;

// document.write(numero)

//// - LOG2E /  Logaritmo con base 2 .

// let numero = Math.LOG2E ;

// document.write(numero)

//// - LOG10E /  Logaritmo con base 10 .

// let numero = Math.LOG10E;

// document.write(numero)


//************** FIN DE CAPITULO */











