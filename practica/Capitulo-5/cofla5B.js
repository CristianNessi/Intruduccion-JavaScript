// Problema B

// 30 minutos por dia para las cosas de casa.

// 100 minutos trabajos practicos.

// 100 minutos estudiar.

// 10  minutos de descanso. 

// 240 minutos laborales por dia 

let tp = "100 minutos hacer trabajos practicos"; 
let trabajo = "240 minutos de trabjo";
let estudio = "100 minutos de estudio";
let homework = "30 minutos tareas de la casa";
let descanso = "10  minutos de desncaso";

console.log("TAREAS");

for (var i =0; i < 14; i++) {
    if (i==0){
        console.group("Semana 1")
    }
console.groupCollapsed("Dia", + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i==6){
    console.groupEnd();
    console.groupCollapsed("Semana 2")
}
}

console.groupEnd();
console.groupEnd();