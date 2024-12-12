(function(){
    const openButton =  document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close'); 


    /*
    Lo que se hace a continuacion es una funcion lo que hace aniadir a la variable menu la clase nav__link--show haciendo click
    */
    openButton.addEventListener('click',function(){
        menu.classList.add('nav__link--show');
    });
    /*
    Despues se hace una funcion que remueve a la variable la clase 
    nav__link--show de la variable menu haciendo click
    */
    closeMenu.addEventListener('click', function(){
        menu.classList.remove('nav__link--show');
    });
})();