// Parte 3 de javascript./ PPO, programacion orientada a objetos.

//paradigmaa de la programacion, que se uso para identificar tipos y partes de del objeto.
// creamos soluciones/. resolver problemas de la mejor manera.

// clases...  Conjuntos crea los tipos de obejtos.
  // (ejemplo) Clase auto. (todas las partes del auto)

// objetos. es elo que crea la clase. (auto)
// atributo.  Las caracteristicas. (parte del auto: ventana, puertar, motor)
// metodo. Lo que puede hacer el objeto (auto)(acelerar doblar frenar)
// constructor. Propiedad obligatoria. construye las propiedades de las clases
// instanciaci\

class Animal {
    constructor(especie, edad, color){ //propiedades del objeto.
        this.especie = especie; // objeto especie, igual a especie.
        this.edad = edad;
        this.color = color;
        this.info= `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }  
    verInfo(){ // metodo
    document.write(this.info + "<br>") // Metodo para mer la informacion    
    }
    // ladrar(){  // Poliformismo.
    //     if (this.especia == "perro") {
    //     document.write(`Waw <br>`);
    // } else {
    //     document.write("No puede ladrar, ya que es un " + this.especie + "<br>")
    // }
    // }

 
}
 // constructor-- construye al objeto apartir de los parametros que le pasamos. 
class Perro extends Animal { // herencia, la class perro se le agrega el atributo raza.
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert(`WAW`)
    }
    static Mover() { // no creamos la clase. Pero podemos ver como el perro mueve la cola. 
        alert("El perro mueve la cola.")
    }
}
class GATO extends Animal { // Metodo SET para poder modificar un valor de la clase.
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = null;
    }
    // set setRaza(newNAme){ // Set para modificar. 
    //     this.raza = newNAme;
    // }
    get getRaza(){ // metodo set noks muestras el objeto de la clase. 
        return this.raza
    }
}

// Una clase no puede tener mismo nombre que uj objeto.
// Las clases se definen con const. Definirla con let puede causar problemas.

const perro = new Perro("perro", 5, "marron, caniche"); //instanciar un objeto
const gato = new GATO("gato", 7, "negro, ciberiano"); 
const pajaro = new Animal("pajaro", 6, "verde"); 

// console.log(perro) // se llama por la consola.

// perro.verInfo ();  // llamado para ver el objeto perro
// gato.verInfo(); // llamado para ver el objeto gato
// pajaro.verInfo(); // llamado para ver el objeto pajaro

// Perro.mover(); // metodo estatic. 
// gato.modificarRaza("Michi") // No funciona como propiedad.

gato.setRaza = "michin" ;

// document.write(gato.raza) // muestra SET
document.write(gato.getRaza) // No muestra el objeto.  Como la tenemos comentado, nos muestras null. 



// Caracteristicas. de la POO  -- conceptos.
// - abstraccion --  aislar un objeto para definirlo por partes. (auto, aislo el objeto.)
// - modularidad --  separar por partes mas pequeñas el problema que tratamos.
// - encapsulamiento --  todos los datos privados. 
// - polimorfismo -- como ver que el objeto se comparta antes el mismo metodo


// Tipos clases de POO --- partes reservadas del lenguaje
// - herencia .. pasar caracteristicas de las clases al un objeto mas especifo.
// - metodos estaticos .. No necesita que la clase de defina para poder ser creado.
// - metodos de accesores (Getters, Setters)  
         /// GET -- para obtener el valor. 
         /// SET -- para definirlo. 
 
//************** FIN DE CAPITULO */
