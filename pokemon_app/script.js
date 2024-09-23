

 
 async function getdata(){
    try {
            const pokemonName= document.getElementById('pokemonName').value.toLowerCase();
            const id= document.getElementById('id')
            const name= document.getElementById('name')
            const Weight= document.getElementById('Weight')
            const Height= document.getElementById('Height')   
            const pokomonimage= document.getElementById('pokomonimage')   

            const  data= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            if(!data.ok){
                throw new Error("data not fetched")
            }
            console.log(data);
            let response=  await data.json();
            console.log(response);
            pokomonimage.src=response.sprites.front_default;
            name.textContent=response.name;
            id.textContent=response.id;
            Weight.textContent=response.weight;
            Height.textContent=response.height;

    } catch (error) {
        console.error(error);
    }
}

