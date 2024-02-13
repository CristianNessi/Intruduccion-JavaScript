// PROBLEMA C

function respuestaC() {
   
    alert("Problema C")

class App {
    constructor (nombre,descargas,puntuacion,peso){
    this.nombre = nombre;
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false
    this.instalada = false
    }
   
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("La app esta instalada");
        }
    }
    desintalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("La app esta desintalada");
        }
    } 
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("La app esta encendida");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("La app esta cerrada");
        }
    }

    appInfo() {
        return (
            "Nombre: " + this.nombre + "\n" +
            "Descargas: " + this.descargas + "\n" +
            "Puntuación: " + this.puntuacion + "\n" +
            "Peso: " + this.peso + "\n"
        );
    }
}

const app1 = new App("Clash of Clan", "5000", "5 estrellas", "900GB");
const app2 = new App("Clash of Royal", "4500", "4 estrellas", "850GB");
const app3 = new App("Wild Ritf", "4000", "5 estrellas", "700GB");
const app4 = new App("Led Cartel", "5500", "4 estrellas", "1000GB");
const app5 = new App("Chees", "3500", "3 estrellas", "600GB");
const app6 = new App("Pug", "5250", "5 estrellas", "950GB");
const app7 = new App("8 ball poll", "6000", "4 estrellas", "900GB");

alert(app1.appInfo());
alert(app2.appInfo());
alert(app3.appInfo());
alert(app4.appInfo());
alert(app5.appInfo());
alert(app6.appInfo());
alert(app7.appInfo());

}

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desintalar();


