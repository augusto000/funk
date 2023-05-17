const iconoMenu = document.querySelector('#icono-menu'),
 menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e)=>{

 //alternamos estilos para el menu y el body
 menu.classList.toggle('active');
 document.body.classList.toggle('opacity');

 //alternamos estilos para el menu y body
 const rutaActual = e.target.getAttribute('src');
 if(rutaActual == 'img/openmenu.svg'){
 e.target.setAttribute('src','img/open-menu2.svg');
 }else{
 e.target.setAttribute('src','img/open-menu.svg');
 }
});