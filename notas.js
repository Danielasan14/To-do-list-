/*
Props: se usa para comunicar los componentes unos con otros
Los componentes se comunican con props y funciones, en un flujo de arriba hacia abajo

estado: es una herramienta de react js. es imutable. 
son datos internos de un componente que pueden cambiar en el tiempo y que, cuando cambian, 
hacen que la interfaz se vuelva a renderizar automáticamente.

useState: permite guardar y cambiar datos dentro de un componente,
hacer que la pantalla se actualice automáticamente cuando esos datos cambian.
estados derivados 

react no espera una funcion ejecutada se envia una funcion dentro de otra funcion para 
que react la ejecute al momento de realizar el evento 


Local Storage es una API del navegador que permite almacenar datos de manera persistente.
Esto significa que la información guardada no se pierde incluso si se cierra la pestaña, 
el navegador o el computador. Cuando volvamos a abrir la aplicación, los datos estarán allí.
- solo se pueden guardar string 

siempre que queremos guardar algo en el localStorage hay que pasarlo a string con el JSON.stringify 
y despues para poder leer algo del localStorage tenemos que devolverlo al formato o tipo de dato originar con el JSON.parce  
local storage siempre llama su contenido interno como items

custom hooks los usamos para mejorar nuestro codigo es una funcion que siempre inicia en use 

Efectos es react: los efectos son herramientas para manejar logicas un poco mas pesadas como consultas a APIS 
o procesos que pueden retrasarse. Estas operaciones deben ejecutarse únicamente cuando es estrictamente necesario,
evitando que se repitan en cada renderización del componente. Los efectos permiten encapsular estas lógicas para que 
se ejecuten sólo una vez, por ejemplo, al primer render. Así mejora la eficiencia y rendimiento de nuestras aplicaciones.

Para utilizar los efectos en React, empleamos el hook useEffect. Vamos a ver cómo podemos integrarlo en nuestra aplicación a través del siguiente ejemplo:

import React, { useEffect } from 'react';

function MiComponente() {
useEffect(() => {
    console.log("Este efecto se ejecuta únicamente una vez.");
}, []);

return <div>Mi componente</div>;
}
Primer argumento: Recibe una función que encapsula la lógica que queremos ejecutar.
Segundo argumento: Es un array de dependencias que determina cuándo se debe ejecutar el efecto.

es como un callback en js 


*/
