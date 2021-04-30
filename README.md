# Mercado-Libre-code-challenge
Code challenge para Mercado Libre

Para utilizar el servicio, invocar al endpoint que se encuentra publicado en la url https://desolate-scrubland-02959.herokuapp.com/mutant mediante un HTTP POST
El servicio acepta solicitudes del tipo application/JSON. 
Dentro del body del request se debe enviar un objeto con una única propiedad llamada "dna" que debe ser un array de strings

Decisiones tomadas:
Asumo que la diagonal que no se muestra en el ejemplo tambien se considera de un mutante (diagonal hacia abajo e izquierda)
Asumo que el largo de cada uno de los strings del array es fijo para cada request, es decir, dentro del mismo array no puede haber un string de largo 6 y otro de largo 4
Valido que no hayan letras incorrectas en el array
Valido que se envie correctamente un array de strings y no otro tipo en el objeto dna del request

Cuando falla en alguna de las validaciones implementadas se retorna un código 400 para diferenciar los errores del request con la comprobacion de si es un mutante o no
