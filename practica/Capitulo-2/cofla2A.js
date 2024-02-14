// PROBLEMA A // Conteo de fiesta


function respuestaA() {
    alert("Problemas A")
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
    if (edad > 18){
        if(time >= 2 && time <7 && !free) { 
            alert("Podes pasar gratis por sos la primer persona de las 2AM. ");
            free = true
        } else{
            alert(`Son las ${time}:00Hs Podes pasar pero tenes que abonar la entrada.`)
    } 
} else {
        alert("Sos menor de edad, no podes pasar.")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(5);
validarCliente(6);

}