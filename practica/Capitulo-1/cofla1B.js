// Problema B. 



function respuestaB() {
    alert("Problema B")
 dineroCofla = 3 ;

 dineroCofla = parseInt(dineroCofla) // Covierte el numero entero a decimal

if (dineroCofla >= 0.6 && dineroCofla < 1 ){
        alert(" Cofla, comprate el helado de agua.");
        alert (`Y te sobra $${(dineroCofla - 0.6).toFixed(2)}`);
    }
    else if (dineroCofla >= 1 && dineroCofla < 1.6){
        alert(" Cofla, comprate el helado de crema.");
        alert(`Y te sobra $${(dineroCofla - 1).toFixed(2)}`);
    }
    else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
        alert(" Cofla, comprate el bombon helado marca heladix.");  
        alert(`Y te sobra $${(dineroCofla - 1.6).toFixed(2)}`);
    } 
    else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
        alert(" Cofla, comprate el bombon helado marca heladovich.");
        alert(`Y te sobra $${(dineroCofla - 1.7).toFixed(2)}`);
    }
    else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
        alert(" Cofla, comprate el bombon helado marca helardo.");
        alert(`Y te sobra $${(dineroCofla - 1.8).toFixed(2)}`);
    }
    else if (dineroCofla >= 2.9 ){
        alert(" Cofla, comprate el Potecito de helado con confites o el pote de 1/4KG.");
        alert(`Y te sobran $${(dineroCofla - 2.9).toFixed(2)}`);
    }
    else {
        alert("No te alcanza para nada.")
    }
}
