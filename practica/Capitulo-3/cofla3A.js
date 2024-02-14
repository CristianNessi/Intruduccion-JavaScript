// PROBLEMA A
function respuestaA() {
    alert("Problema A");

    class Celular {
        constructor(color, peso, tamaño, rdc, ram) {
            this.color = color;
            this.peso = peso;
            this.tamaño = tamaño;
            this.resolucionDeCamara = rdc;
            this.memoriaRam = ram;
            this.encendido = false;
        }

        presionarBotonEncendido() {
            if (this.encendido == false) {
                alert("Celular encendido.");
                this.encendido = true;
            } else {
                alert("Celular apagado.");
                this.encendido = false;
            }
        }

        reiniciar() {
            if (this.encendido == true) {
                alert("Reiniciando celular.");
            } else {
                alert("El celular está apagado.");
            }
        }

        tomarFotos() {
            alert(`Foto tomada en una resolución de ${this.resolucionDeCamara}`);
        }

        grabarVideo() {
            alert(`Grabando video en una resolución de ${this.resolucionDeCamara}`);
        }

        mobileInfo() {
            return `
            Estado: ${this.encendido ? 'Encendido' : 'Apagado'}
            Color: ${this.color}
            Peso: ${this.peso}
            Tamaño: ${this.tamaño}
            Memoria RAM: ${this.memoriaRam}
            Resolución de video: ${this.resolucionDeCamara}
            `;
        }
    }

    const celular = new Celular("Negro", "150g", "5.5 pulgadas", "1080p", "4GB");

    celular.presionarBotonEncendido();
    alert(celular.mobileInfo());
}
