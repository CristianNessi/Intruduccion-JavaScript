// // PROBLEMA B

function   respuestaB() {
   
    alert("Problema B")

class Celular{
    constructor(tipo,color,peso,tamaño,rdc,ram){
        this.tipo = tipo;
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false 
    }
    
    mobileInfo() {
        return `
        Tipo: ${this.tipo}
        Color: ${this.color}
        Peso: ${this.peso}
        Tamaño: ${this.tamaño}
        Memoria RAM: ${this.memoriaRam}
        Resolución de video: ${this.resolucionDeCamara}
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor (tipo,color,peso,tamaño,rdc,ram,rdce){
        super(tipo,color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce
    }
    grabarVideoLento(){
        alert("Estas grabando en camra lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
    }
}
alert("CELULARES") 

let celularA = new Celular("Celular A","blanco","150g","5'","full HD","2GB");
let celularB = new Celular("Celular B","negro","170g","5.5'","4k","6GB");
let celularC = new Celular("Celular C","gris","140g","5.8'","4k fullHD hd","4GB");

alert(celularA.mobileInfo());
alert(celularB.mobileInfo());
alert(celularC.mobileInfo());

alert("CELULARES DE ALTA GAMA") 

let celularD = new CelularAltaGama("Celular D","blanco","120g","5.2'","4k","4GB","full HD")
let celularE = new CelularAltaGama("Celular E","Rojo","130g","6'","4k","6GB", "full HD")


alert(celularD.infoAltaGama())
alert(celularE.infoAltaGama())

}