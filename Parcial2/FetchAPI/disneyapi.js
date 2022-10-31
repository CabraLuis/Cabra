window.onload = function(){
    document.getElementById("IDPeticion").addEventListener("click",function(){
        var ID = Math.floor(Math.random()*7527)
        fetch("https://api.disneyapi.dev/characters/"+ID)
        .then(respuesta => respuesta.json())
        .then(datojson => {
            document.getElementById("nombre").innerText = datojson.name;
            document.getElementById("img").src = datojson.imageUrl;
            var films = datojson.films[0];
            if (films == undefined) {
                films = "No hay peliculas"
            }
            document.getElementById("pelicula").innerText = films
        })
    })
}