(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')]; //es un array donde viene todos los elementos de con la clase '.testimony__body' y los tres puntos lo que hacen es sacar  los elemntos de su caja
    const buttonNext = document.querySelector('#next'); 
    const buttonBefore = document.querySelector('#before'); 
    let value; 

    buttonNext.addEventListener('click', ()=>{//
        ChangePosition(1); //Cuando se hace clic, ejecuta la función ChangePosition(1). Esto llama a la función ChangePosition y le pasa el valor 1 como argumento.
    }); 
    buttonBefore.addEventListener('click', ()=>{
        ChangePosition(-1); //Cuando se hace clic, ejecuta la función ChangePosition(-1). Esto llama a la función ChangePosition y le pasa el valor -1 como argumento
    })

    const ChangePosition = (add)=>{
        //Recibe un argumento llamado add.
        //Dentro de la función, simplemente imprime el valor de add en la consola con console.log(add)

        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; 
        value = Number(currentTestimony); 
        value+=add; 
        //console.log(value); esto imprimira 2 en caso que sea derecha y 0 en caso que sea izquierda 
        
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show'); 
        if(value === sliders.length+1 || value === 0){ //Basicamente lo que hace si el id=0 entonces va a tomar el valor del limite de caja (arreglo)
            value = value === 0? sliders.length : 1; //y si el id< que el limite de caja, por ejemplo 4, entoces se regresa y toma el valor de 1 
        }
        sliders[value-1].classList.add('testimony__body--show'); 
    }
})(); 
/*
sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show'); 
¿Qué hace?
Accede al elemento actual en el array sliders:

currentTestimony es el atributo data-id del testimonio que actualmente tiene la clase testimony__body--show.
Number(currentTestimony) convierte ese valor (que está en formato texto) a un número.
-1 ajusta el índice porque:
Los arrays en JavaScript empiezan desde 0.
Tus data-id parecen empezar desde 1.
Por ejemplo, si currentTestimony es "1", entonces Number(currentTestimony) - 1 será 0, accediendo al primer elemento del array sliders.
Elimina la clase testimony__body--show del testimonio actual:

classList.remove('testimony__body--show') elimina la clase testimony__body--show del elemento en el índice correspondiente.
Esto asegura que el testimonio actual deje de estar visible o destacado, dependiendo de cómo esté estilizada esa clase en tu CSS.
*/