
// Problema C


let materias = {
        fisica: ["Nazer ","pedro ","roberto ","maria ","romina ","celeste ","matias ","nicol ","cofla ","cristian "," evelin "],
        quimica: ["Aldaz","pedro","jose",,"maria","romina","celeste","matias","abril"],
        logistica: ["Nessi","pedro","jose","roberto","maria","matias",,"cristian","evelin","facundo","abril"],
        estadistica: ["Fernandez","pedro","jose","roberto","maria","romina","matias","nicol",,"evelin","facundo","abril"],
        programacion: ["Versashell","pedro","jose","roberto","maria","romina","celeste","matias","nicol","cofla","cristian",,"facundo","abril"],
       
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br>`)
    } else {
        personas.push(alumno);
        if(materia == "fisica") {
                materias = {
                    fisica: personas,
                    quimica: materias['quimica'],
                    logistica: materias['logistica'],
                    estadistica: materias['estadistica'],
                    programacion: materias['programacion'],         
            } 
        }
        else if(materia == "quimica") {
                materias = {
                    fisica: materia['fisica'],
                    quimica: personas,
                    logistica: materia['logistica'],
                    estadistica: materia['estadistica'],
                    programacion: materia['programacion'],         
            } 
        } 
        else if(materia == "logistica") {
                materias = {
                    fisica: materia['fisica'],
                    quimica: materia['quimica'],
                    logistica: personas,
                    estadistica: materia['estadistica'],
                    programacion: materia['programacion'],         
            } 
        }
        else if(materia == "estadistica") {
                materias = {
                    fisica: materia['fisica'],
                    quimica: materia['quimica'],
                    logistica: materia['logistica'],
                    estadistica: personas,
                    programacion: materia['programacion'],         
            } 
        }
        else if(materia == "programacion") {
                materias = {
                    fisica: materia['fisica'],
                    quimica: materia['quimica'],
                    logistica: materia['logistica'],
                    estadistica: materia['estadistica'],
                    programacion: personas,         
            } 
        }
        
        document.write(`Felicidades <b>${alumno}</b> "Te haces inscripto a <b>${materia}</b> correctamente" <br>`)
    }
}

document.write(materias['fisica'] + "<br>")

document.write('<b>Hay </b>' + materias["fisica"].length + "<b> personas en el curso.</b><br><br>")

inscribir("juancito ","fisica")
inscribir("maria ","fisica")
inscribir("ramiro ","fisica")
inscribir("oscar ","fisica")
inscribir("federico ","fisica")
inscribir("nacho ","fisica")
inscribir("alex ","fisica")
inscribir("vito ","fisica")
inscribir("Amanda ","fisica")
inscribir("Polaco ","fisica")
inscribir("Ivone ","fisica")
inscribir("Jessica ","fisica")
inscribir("Delfina ","fisica")



document.write("<br>" + materias['fisica']+ "<br><br>")

document.write('<b>Hay </b>' + materias["fisica"].length + "<b> personas curso, el curso esta lleno.</b><br>")

