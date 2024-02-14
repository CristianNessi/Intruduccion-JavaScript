// Problema A

function resultadoA(){

alert("Calculadora")

class Calculadora {
    constructor(){

    }
        sumar (num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
        restar (num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
        dividir (num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
        multiplicar (num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    // potenciar(num,exp){
    //     let numero = num;
    //     for (var i = 0; i < exp; i ++) {
    //     numero = numero * num;
    // }
    // return numero;
    // }
    potenciar(num,exp) {
        return parseInt(num) ** parseInt(exp)
    }
    raizCradada(num) {
        return Math.sqrt(num);
    }
    raizCubica(num) {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar ?")
let operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1) {
    let numero1 = prompt ("Primer numero para sumar");
    let numero2 = prompt ("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt ("Primer numero para resta");
    let numero2 = prompt ("Segundo numero para resta");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt ("Primer numero para la dividir");
    let numero2 = prompt ("Segundo numero para la dividir");
    resultado = calculadora.dividir (numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt ("Primer numero para multiplicar");
    let numero2 = prompt ("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5){
    let numero1 = prompt("Numero para potenciar");
    let numero2 = prompt("Elevar a que potencia");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 6){
    let numero1 = prompt("Numero para la raiz cuadrada");
    resultado = calculadora.raizCradada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 7){
    let numero1 = prompt("Numero para la raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else {
    alert("no se encontro la operacion deseada");
}

}