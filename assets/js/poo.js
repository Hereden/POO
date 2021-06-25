/* alert("Pokemon");

//camelCase
function pokemonAtacar(){

} */

class Pokemon{
    #name="";
    #type="";
    #evolutions=[];
    type="";

    /* constructor(){

    }

    constructor(name){
        this.name=name;
    }

    constructor(name = "Charmander",type){
        this.name=name;
        this.type=type;
    } */

    constructor(name="Charmander", type="Fuego", evolutions){
        this.#name=name;
        this.#type=type;
        this.#evolutions=evolutions;
    }

    set name(value){
        this.#name=value;
    }
    set type(value){
        this.#type=value;
    }
    set evolutions(value){
        this.#evolutions=value;
    }

    get name(){
        return this.#name;
    }
    get evolutions(){
        return this.#evolutions;
    }
    get type(){
        return this.#type;
    }



    attack(){
        return `${this.name}, esta atacando`;
    }

    evolve(evolution =0){
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puede evolucionar";

        if(EVOLVE){
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name=EVOLVE;
            //this.#evolutions.shift();
        }
        return message;
    }
}

const charmander = new Pokemon("Charmander","Fuego",["Charmaleon","Charizad"]);
const Squirtle = new Pokemon("squirtle","Agua",["Wartotle","Blastoise"])
/* const bulbasaur = new Pokemon();
const dito = new Pokemon("Dito");
const pikachu = new Pokemon("Pikachu","Normal,electrico"); */
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));

//charmander.name="Pikachu";
//console.log(charmander.name);

const animales=["Perros","Gatos","Lobos"];

animales.forEach(animal =>{
    console.log(animal);
});

/* console.log(charmander.evolve());
console.log(charmander.evolve(1)); */