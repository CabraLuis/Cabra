# Modelo de Caja en CSS :page_facing_up:
En CSS, el termino **Modelo de Caja** es usado cuando se habla de un diseño.

El modelo de caja de CSS es escencialmente una caja que engloba a todos y cada uno de los elementos **HTML**. 

Consiste de: 
- Margin (Márgenes). 
- Border (Bordes). 
- Padding (Relleno). 
- Content (Contenido).

![Ejemplo](/Parcial1/images/BoxModelExample.png)

## Contenido
El contenido de la caja, donde aparecen el texto y las imágenes.

## Padding
Reserva un área alrededor del contenido. El padding es transparente.

## Borde
Un borde que va alrededor del padding y del contenido.

## Márgen
Reserva un área fuera del borde. El márgen es transparente.

### Ejemplo del modelo de caja en CSS

    div{        
        width: 300px;
        border: 15px solid green;
        padding: 50px;
        margin: 20px;    
    }

#### Fuentes de Información :book:
1. https://www.w3schools.com/css/css_boxmodel.asp
2. https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
3. https://codigofacilito.com/articulos/que-es-el-box-model