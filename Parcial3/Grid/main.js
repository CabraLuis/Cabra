new gridjs.Grid({
  columns: ["ID", "Nombre", "Año de Salida","Desarrollador","Distribuidor","Clasificación","Generos","Modos"],
  search: true,
  server:{
    url: "/Cabra/Parcial3/Grid/consultar.php",
    then: data => data.map(item => [item.id, item.nombre, item.salida, item.desarrollador, item.distribuidor, item.clasificacion, item.generos, item.modos])
  }
}).render(document.getElementById("datos"));