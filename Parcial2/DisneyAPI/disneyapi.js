window.onload = function(){
    document.getElementById("IDPeticion").addEventListener("click",function(){
        var ID = Math.floor(Math.random()*7527)
        fetch("https://api.disneyapi.dev/characters/156")
        .then(respuesta => respuesta.json())
        .then(datojson => document.getElementById("nombre").innerText=datojson.name)
    })
}