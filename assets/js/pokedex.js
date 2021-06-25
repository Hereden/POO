class Pokedex{
    getinfo(name){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
            .then(data => data.json())
            .then(data =>{
                const lista = ["Dragon Ball", "Code Geass", "Sailor Moon"];
                const Dragon = lista[0];
                const Dragon1 = lista[1];
                const Dragon2 = lista[2];
                const Dragon3 = lista[3];
                const Dragon4 = lista[4];
                const [dragon,code] = lista;
                console.log(dragon,code);
                const [DATA = null] = data;
                const MESSAGE = DATA || `El pokemon ${name} no existe.`;

                console.log(MESSAGE);
            })
    }
}

const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander");