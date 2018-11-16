let abrir = document.querySelector('#btn-abrir');
let contMmodal = document.querySelector('#cont-modal');
let modal = document.querySelector('#modal');
let cerrar = document.querySelector('#cerrar');


abrir.addEventListener('click', () => {
    contMmodal.classList.add('active');
    modal.classList.add('anim');
});


cerrar.addEventListener('click', () => {
    contMmodal.classList.remove('active');
    modal.classList.remove('anim');
});