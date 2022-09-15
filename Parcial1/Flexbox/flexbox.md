# Propiedades Flexbox
Antes del modulo de diseño flexbox, había cuatro modos de diseño: 
- **Block**: Para secciones en una página web
- **Inline**: Para texto
- **Table**: Para una tabla de datos bidimensionales 
- **Positioned**: Para una posición explicíta de un elemento

El modulo de diseño flexbox, facilita el diseño flexible responsivo sin usar **float** o **positioning**.

## Propiedades Flexbox Container (Contenedor Padre)
| Propiedad | Descripcion |
| --------- | ----------- |
| align-content | Modifica el comportamiento de la propiedad flex-wrap. Es similar a align-items, pero en lugar de alinear flex items, alinea flex lines |
| align-items | Alinea verticalmente los flex items cuando los items no ocupan todo el espacio disponible en el eje x |
| display | Especifica el tipo de caja usada para un elemento HTML |
| flex-direction | Especifica la direccion de los flexible items dentro de un flex container |
| flex-flow | Un atajo para la propieda flex-direction y flex-wrap |
| flex-wrap | Especifica si los flex items se deben envolver o no, si no hay suficiente en la flex line |
| justify-content | Alinea horizontalmente los flex items cuando los items no ocupan todo el espacio disponible en el eje y |


## Propiedades Flexbox Items (Contenedores Hijos)
| Propiedad | Descripcion |
| --------- | ----------- |
| align-self | Especifica el alineamiento para un flex item |
| flex | Un atajo para flex-grow, flex-shrink y flex-basis |
| flex-basis | Especifica la longitud inicial del flex item|
| flex-grow | Especifica cuanto va a crecer un flex item relativo al resto de flex items dentro del mismo container |
| flex-shrink | Especifica cuanto va a decrecer un flex item relativo al resto de flex items dentro del mismo container |
| order | Especifica el orden de los flex items dentro del mismo container |