// Problema A

const materias = { // [asistencia],[promedio],[trabajos por clase]
    fisica: [90,6,4,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programcion: [79,7,4,"programcion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

console.groupCollapsed("Materias");
const aprobo = ()=> {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajo = materias[materia][2];
        console.log(materias[materia][3]);
        if (asistencias >= 90) {
            console.log("%c    Asistencias en orden.",'color:green');
        }else {
            console.log("%c    Falta de asistencias.",'color:red');
        }
        if (promedio >= 7) {
            console.log("%c    Promedio en orden.",'color:green');
        }   else{
            console.log("%c    Promedio desaprobado.",'color:red');
        }
        if (trabajo >= 3) {
            console.log("%c    Trabajos practicos en orden.",'color:green');
        }   else{
            console.log("%c    Faltan trabajos practicos.",'color:red');
        }
    }
}


aprobo()
console.groupEnd();
