const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
let results = null;

async function getPokemon(url) {
    const response = await fetch(url);
    //Check to see if the fetch was sucessful
    if (Response.ok) {
        // The API will send us a JSON; but we have to convert the response
        //.json also returns a Promise; so we awaits it as well
        const data = await response.json();
        doStuff(data);
    }
}

function doStuff(data) {
    results = data;
    console.log("first", results);
}
getPokemon(url);
console.log("second", results);