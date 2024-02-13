// Problema B 


const obtenerInformacion = (materia)=>{
    let materias = {
        fisica: ["Nazer","pedro ","roberto ","maria ","romina ","celeste ","matias ","nicol ","cofla ","cristian "," evelin "],
        quimica: ["Aldaz","pedro","jose",,"maria","romina","celeste","matias","abril"],
        logistica: ["Nessi","pedro","jose","roberto","maria","matias",,"cristian","evelin","facundo","abril"],
        estadistica: ["Fernandez","pedro","jose","roberto","maria","romina","matias","nicol",,"evelin","facundo","abril"],
        programacion: ["Versashell","pedro","jose","roberto","maria","romina","celeste","matias","nicol","cofla","cristian",,"facundo","abril"],
        matematica: ["Ganzareck","pedro","jose","roberto",,"celeste","matias","nicol","cofla","cristian","evelin"],
        ingles: ["Bergese","jose","roberto","maria","romina","celeste","matias","nicol","facundo","abril"],
        portugues: ["Sullivan","pedro","jose","roberto","maria","romina","celeste","matias","nicol","cofla","cristian","evelin",,"abril"],
        diseño: ["Beneito","roberto","maria","romina","celeste","cristian","evelin","facundo","abril"],
        estructura: ["Dominguez","pedro","jose",,"matias","nicol","cofla","cristian","evelin","facundo","abril"],
        software: ["Escobar","pedro","jose","roberto","maria","romina","matias","nicol","cofla","cristian",,"abril"],
        desarrollo: ["Robles","pedro","jose","roberto","maria","romina","celeste","cristian","evelin"],
        analisis: ["Montero","pedro","jose","roberto",,"matias","nicol","cofla","cristian","evelin","facundo",],
    }

    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else {
        return materias;
    }
}


const mostrarInformacion = (materia)=>{
        let informacion = obtenerInformacion(materia);

    if (informacion !== false){
        let profesor = informacion[0][0];
        personas = informacion[0];
        personas.shift();
        // document.write(informacion.length+ "<br>")
        document.write(`El profesor de la materia: <b>${informacion[1]}</b>: <b style="color:red">"${profesor}"</b><br>
        Los personas de la materia son: <br> <b style="color:blue">"${personas}"</b><br><br>`)
            
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = []
    let cantidadTotal = 0 ;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
          clasesPresentes.push(" " + info)
        }
    }
    return `El alumno <b style="color:blue"> ${alumno} </b> esta en <b>${cantidadTotal} clases</b> <br> ${clasesPresentes} <br> `
    
    
    // `<b style="color:blue"> ${alumno} </b> esta en <b> ${cantidadTotal} clases</b><br>`
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("logistica");
mostrarInformacion("estadistica");
mostrarInformacion("programacion");
mostrarInformacion("matematica");
mostrarInformacion("ingles");
mostrarInformacion("portugues");
mostrarInformacion("diseño");
mostrarInformacion("estructura");
mostrarInformacion("software");
mostrarInformacion("desarrollo");
mostrarInformacion("analisis");

document.write(cantidadDeClases("cofla" )+ "<br>")
document.write(cantidadDeClases("pedro")+ "<br>")
document.write(cantidadDeClases("matias")+ "<br>")
document.write(cantidadDeClases("facundo")+ "<br>")
document.write(cantidadDeClases("romina")+ "<br>")
