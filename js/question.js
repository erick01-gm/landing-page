(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')]; 
    console.log(titleQuestions); 

    /*
    // Función tradicional
titleQuestions.forEach(function(question) {
    // Código aquí
});

// Función flecha esta fue usada en el codigo, es una forma de acortarla funcion 
titleQuestions.forEach(question => {
    // Código aquí
});
    */
    titleQuestions.forEach(question =>{ //forma flecha
        question.addEventListener('click', function() { //forma tradiciional
            let height= 0; 
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement; 

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate'); //Es un método de classList que añade o elimina una clase específica en un elemento.Si la clase no está presente, la añade. Si la clase ya está presente, la elimina

            /*
            clientHeight.
            es una propiedad de los elementos HTML que devuelve la altura del área visible de un elemento, incluyendo:
            El contenido visible.
            El relleno interno (padding).
            */
            if(answer.clientHeight === 0 ){//lo que hace es saber comparar el alto del elemento si es igual a cero (que si es el caso ya que el parrafo esta oculto)
                height = answer.scrollHeight; //scrollHeight. Alto minimo para que se muestre un elemento. 
            }

            answer.style.height = `${height}px`; 
            
        });
    }); 
})(); 
/*
EJEMPLO USANDO classList.toggle
HTML: <div class="box"></div>
CSS
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: background-color 0.3s ease;
}

.box--active {
    background-color: green;
}
JS
const box = document.querySelector('.box');

// Cambia el color al hacer clic
box.addEventListener('click', () => {
    box.classList.toggle('box--active'); // Añade o quita la clase
});
Lo que hace es aniadir la propeidad .box--active a .box si no la tiene eso cuando hace cuando hacemos click, al volver hacer click como ya la tiene la elimina. 
*/