# :gift: Modelo de Caja en CSS
En CSS, el termino **Modelo de Caja** es usado cuando se habla de un diseño.

El modelo de caja de CSS es escencialmente una caja que engloba a todos y cada uno de los elementos **HTML**. 

Consiste de: 
- Margin (Márgenes). 
- Border (Bordes). 
- Padding (Relleno). 
- Content (Contenido).

![Ejemplo](/Parcial1/images/BoxModelExample.png)

## :eye: Content
El contenido de la caja, donde aparecen el texto y las imágenes.

El área del content (como su nombre lo dice) contiene el “contenido” central a mostrar, es decir, un texto, una imagen, un video, etc. El contenido siempre es lo que queremos mostrarle al usuario. Esta área en muchas ocasiones tiene un color o imagen de fondo para hacerla más atractiva.

El contenido es el área central de todo el elemento, de tal forma, que el siguiente elemento que lo rodea es el padding. El tamaño de esta área se puede modificar con las propiedades `height , width , max-height , max-width , min-height , min-width`.

## :black_square_button: Padding
Reserva un área alrededor del contenido. El padding es transparente.

El padding es una separación o espacio interior que existe entre el contenido y el borde de la caja, el cual se utiliza para dar una apariencia estética más atractiva y que el contenido no este pegado al borde.

El shorthand padding permite dar un valor diferente a cada lado, sin necesidad de escribirlos por separado. Por ejemplo:

    padding-top:    10px; 
    padding-right:  20px; 
    padding-bottom: 25px; 
    padding-left:   5px;  
    /* Los 4 valores son igual a esto: */
    padding: 10px 20px 25px 5px;

    padding: 10px;           /* Aplica a los cuatro lados */
    padding: 10px 20px;      /* vertical | horizontal */
    padding: 10px 20px 30px; /* top | horizontal | bottom */

Esto puede verse en dirección a las manecillas del reloj .

## :white_square: Border
Un borde que va alrededor del padding y del contenido.

Las tres propiedades básicas para crear bordes son:

- **border-style**: sus valores son solid, dashed y dotted.
- **border-width**: indica al navegador el tamaño del borde, normalmente, se utiliza el valor en píxeles para esta propiedad, por ejemplo, `border-width: 5px`.
- **border-color:** por defecto, el valor utiliza el currentColor del texto. Sin embargo, preferimos definirlo aunque no sea necesario. Por ejemplo, `border-color: red`.

La mayoría de los desarrolladores web no utilizan estas tres propiedades por separado. En su lugar, existe un shorthand: border. Con esta propiedad, podemos escribir sólo `border: solid 5px red`.
## :white_square_button: Margin
Reserva un área fuera del borde. El márgen es transparente.

El margen es la última área del **Box Model** y se puede ver como una separación invisible o transparente que ayuda a separar un elemento de otro. Cuando se define un color o imagen de fondo, este no se propaga a esta sección.

Los márgenes siempre quedan fuera del modelo de caja, por lo que pueden utilizarse para crear espacio entre los elementos.

    margin-top:    10px; 
    margin-right:  20px; 
    margin-bottom: 25px; 
    margin-left:   5px;  
    /* Los 4 valores son igual a esto: */
    margin: 10px 20px 25px 5px;

    margin: 10px;           /* Aplica a los cuatro lados */
    margin: 10px 20px;      /* vertical | horizontal */
    margin: 10px 20px 30px; /* top | horizontal | bottom */

### :hammer: Ejemplo del modelo de caja en CSS

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