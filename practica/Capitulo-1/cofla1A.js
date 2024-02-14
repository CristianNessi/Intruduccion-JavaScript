// Problemas A... Heladeria.


function respuestaA() {
alert("Problemas A")

 dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
 dineroPedro = prompt("Cuanto dinero tiene Pedro?");
 dineroCofla = prompt("Cuanto dinero tiene Cofla?");


    if (dineroRoberto >= 0.6 && dineroRoberto < 1 ){
        alert(" Roberto, comprate el helado de agua.")
    }
    else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
        alert(" Roberto, comprate el helado de crema.")
    }
    else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
        alert(" Roberto, comprate el bombon helado marca heladix.")
    } 
    else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
        alert(" Roberto, comprate el bombon helado marca heladovich.")
    }
    else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
        alert(" Roberto, comprate el bombon helado marca helardo.")
    }
    else if (dineroRoberto >= 2.9 ){
        alert(" Roberto, comprate el Potecito de helado con confites o el pote de 1/4KG.")
    }
    else {
        alert("No te alcanza para nada.")
    }

    if (dineroPedro >= 0.6 && dineroPedro < 1 ){
        alert(" Pedro, comprate el helado de agua.")
    }
    else if (dineroPedro >= 1 && dineroPedro < 1.6){
        alert(" Pedro, comprate el helado de crema.")
    }
    else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
        alert(" Pedro, comprate el bombon helado marca heladix.")
    } 
    else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
        alert(" Pedro, comprate el bombon helado marca heladovich.")
    }
    else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
        alert(" Pedro, comprate el bombon helado marca helardo.")
    }
    else if (dineroPedro >= 2.9 ){
        alert(" Pedro, comprate el Potecito de helado con confites o el pote de 1/4KG.")
    }
    else {
        alert("No te alcanza para nada.")
    }


    if (dineroCofla  >= 0.6 && dineroCofla  < 1 ){
        alert(" Cofla, comprate el helado de agua.")
    }
    else if (dineroCofla  >= 1 && dineroCofla  < 1.6){
        alert(" Cofla, comprate el helado de crema.")
    }
    else if (dineroCofla  >= 1.6 && dineroCofla  < 1.7){
        alert(" Cofla, comprate el bombon helado marca heladix.")
    } 
    else if (dineroCofla  >= 1.7 && dineroCofla  < 1.8){
        alert(" Cofla, comprate el bombon helado marca heladovich.")
    }
    else if (dineroCofla  >= 1.8 && dineroCofla  < 2.9){
        alert(" Cofla, comprate el bombon helado marca helardo.")
    }
    else if (dineroCofla  >= 2.9 ){
        alert(" Cofla, comprate el Potecito de helado con confites o el pote de 1/4KG.")
    }
    else {
        alert("No te alcanza para nada.")
    }

}



// se puede simplificar asi. 

// const definirCompra = (n)=>{
//     let din = prompt(`Dinero de ${n}`);
//     if (din >= 0.6 && din < 1) return (`${n}: Comprate el helado de agua.`);
//     if (din >= 1 && din < 1.6) return (`${n}: Comprate el helado de crema.`);
//     if (din >= 1.6 && din < 1.7) return (`${n}: Comprate el bombon helado marca heladix.`);
//     if (din >= 1.7 && din < 1.8) return (`${n}: Comprate el bombon helado marca heladovich.`);
//     if (din >= 1.8 && din < 2.9) return (`${n}: Comprate el bombon helado marca helardo.`);
//     if (din >= 2.9) return (`${n}: Comprate el helado helado de confites o el pote de 1/4KG.`);
//     else return (`${n}: No te alcanza para ningun helado`);
// }

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Roberto"));
// console.log(definirCompra("Pedro"));








