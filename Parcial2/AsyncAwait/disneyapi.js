window.onload = function(){
    document.getElementById("IDPeticion").addEventListener("click", async function(){

        var ID = Math.floor(Math.random()*7527)

        let respuesta = await fetch("https://api.disneyapi.dev/characters/"+ID); 
        let datojson = await respuesta.json();
        var films = datojson.films[0];

        document.getElementById("nombre").innerText = datojson.name;
        document.getElementById("img").src = datojson.imageUrl;
        
        if (films == undefined) {
            films = "No hay peliculas"
        }
        document.getElementById("pelicula").innerText = films
    })
}