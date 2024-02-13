//                                La consola. 

// Objetos y apis/ donde podes ver, corregir y identificar los errores


console.log("hola") // Ejecuta en la console de html. O la terminal de JavaScript. 


// Metodos
// ............ Funciones de registro. 

// -assert() -- Aparece un mensaje de eeor en la consola si la afirmacion es falsa. Si es verdadera no aparecera nada. (No estandar)
// -clear() -- Limpia la consola. 
// -error() -- Muestra un mensaje de error en la consola web.
// -info() -- Emite un mensaje informativo en la consola web. En firefox y Chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola web.
// -log() -- Muestra un mensaje en la consola web (o del interprete JavaScript).
// -table() -- Esta funcion toma un argumento obligario: data. que debe ser un array o un objeto, y un parametro adiccional: columns y nos muestra una tabla en la consola.
// -warn() -- Imprime un mensaje de advertencia en la consola web.
// -dir() -- Despliega una lista intereactiva de las propiedades del objeto JavaScript especifo (NO ESTANDAR).




// ------------ Funciones de conteo. 

// -count()-- Registra el numero de veces que se llama a count()_ Esta funcion toma como argumento opcional una etiqueta.
// -countReset -- Resetea el contador console.count()




// ============ Funciones de agrupacion. 

// -group() -- Crea un nuevo grupo en linea en el registro de la consola web. 
// -grupEnd() -- Remueve un grupo en linea en el registro de la consola web. 
// -groupCollapsed() -- Crea un nuevo grupo en linea pero contraido, el usuario debe espandirlo para verlo.




// ____________ Funciones de temporizacion. 
// - time() -- Inicia un temporizador. 
// - timeEnd -- Registra el valor actual de un temporizador. 
// - timeLog() -- Detiene un temporizador.






// Funciones de registro. 

////////// assert() // verficar si es correcto o no.

console.assert(5 < 4) // no muestra nada. porque es correcto. 
console.assert(5 < 7) // muestar error. 

//////// clrar() // Limpia la consola. 

console.clear() // limpiea 

//////// error // Muestra un error que escribimos. 

console.error("QUEEEE PASO << ") // lo muestra. 

///////// info() // mensaje informativo.

console.info("Muy buen lo tuyo")// mensaje informativo. 

console.info([67,867,869,67,9867,8678,56]) // los muestra como lista.  

console.log("Muy buen lo tuyo") // mensaje de depuracion. 

////////// table() // tiene que ser un array o un objeto.

console.table(["Matias","Facundo","Nicol","Cristian","Francesca"])

// creamos una table desde la consola.

/////// warn() / Tiro una adverencia. 

console.warn("posible error") // advertencia. 

//////// dir() / Muestra como array. los cuenta.

console.dir([67,867,869,67,9867,8678,56])





///////////// funciones de conteo. 

///// count() / cuantas cuantas veces se ejecuta una buena. FOR. BUCLES.

console.count()   ///// se ejecuto 6 veces. 
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()


///// countReset() / resetea la consola y vuelve a contar. 

console.countReset()


console.count()
console.count()
console.count()
console.count()
console.count()





/////////// Funciones de agrupacion. 

//// -group() / crea un nuevo grupo en linea. inicia abierto.

console.group("grupo,uno") // crea como carpetas en la consola. donde pueden aver adentro otros parametros.
        console.count()// Aparece dentro el grupo. 
        console.count()// Aparece dentro el grupo. 
        console.count()// Aparece dentro el grupo. 
        console.group("grupo,dos")
                console.count()// Primer, sub nivel del nivel. 
                console.count()// Primer, sub nivel del nivel. 
                console.count()// Primer, sub nivel del nivel. 
                console.group("grupo,tres")
                        console.count()// Segundo, sub nivel del nivel. 
                        console.count()// Segundo, sub nivel del nivel. 
                        console.count()// Segundo, sub nivel del nivel

///// -groupEnd() / elimina grupos. 

console.groupEnd("grupo,tres") // se elimino al grupo tres. 

console.count() // Este elemente se agrego el grupo DOS

console.groupEnd("grupo,dos") // elimino el dos.

console.count() // Este elemente se agrego el grupo UNO

console.groupEnd("grupo,uno") // elimino el dos.

console.count() // Volvimos a la linea uno. 


///// groupCollasep() / crea un nuevo grupo en linea. inicia cerrado.

// console.groupCollapsed("CERRADO") // proximo elelmento sigue en la misma linea cero.
//>> Para agregar elemneto tenemos que abrir el grupo en la consola y agregar el elemento. 




////////// Funciones de temporizacion. // Sirve generalmente para verificar cuanto tarda nuestra pagina en abrir. 
                                       // Y tambien para vericar cuanto se tardo el usuario en iniciar seccion./ 

/// time() / inicia un temporizador. 

console.time() // cuenta la cantidad de tiempo desde que creamos el temporizador

console.count()

console.count() 

// timeEnd() / Registra y muestra el valor. 

console.timeEnd() 

console.timeEnd() 

// timeLog() / detiene el temporizador. 

console.timeLog() // cerra el temporizador. 



///////// EXTRAAAAAAAAAAAAAAAAAAAA /////// 


// desde la consola podemos cambiar el estilo de un elemento. 

console.log("%cHOLA MUNDO",'color:whie;background-color:black;font-family:cursive;border:5px solid red')


//************** FIN DE CAPITULO */
