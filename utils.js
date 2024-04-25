export const obtenerPersonajes = async () => {
    const response = await fetch("https://dattebayo-api.onrender.com/characters");
    const data = await response.json();
    return data.characters;
  };

  export class Ninja {
    nombre;
    imagen;
    #id;
    #nodo; //Se pueden agregar los eventListeners.
    #nodoImagen;

    constructor(id,nombre,imagen){
        this.#id=id;
        this.nombre=nombre;
        this.imagen=imagen;
    }

    render (){
        const contenedorNinja = document.createElement("div");
        contenedorNinja.id=this.#id;
        this.#nodo=contenedorNinja; //Se le asigna para que ese contenedor se le puedan hacer los eventListeners.
        contenedorNinja.classList.add("ninja");

        const nombreNinja= document.createElement("p");
        nombreNinja.textContent=this.nombre;
        nombreNinja.classList.add("ninja__nombre");

        const imagenNinja= document.createElement("img");
        imagenNinja.src=this.imagen;
        imagenNinja.alt=this.nombre;
        imagenNinja.classList.add("ninja__foto");
        this.#nodoImagen = imagenNinja;

        

        contenedorNinja.appendChild(nombreNinja);
        contenedorNinja.appendChild(imagenNinja);

        return contenedorNinja;
    }

    agregar(){
        this.#nodoImagen.addEventListener("click", ()=>{
            alert(`hiciste click :)`);
        })
    }

    }


  