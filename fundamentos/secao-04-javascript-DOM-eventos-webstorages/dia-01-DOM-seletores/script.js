const cabecalho = document.querySelector('#header-container');
cabecalho.style.backgroundColor = 'green';

const subTituloUrgente = document.querySelectorAll('.emergency-tasks h3');
subTituloUrgente[0].style.backgroundColor = 'purple';
subTituloUrgente[1].style.backgroundColor = 'purple';

const emergencia = document.querySelector('.emergency-tasks');
emergencia.style.backgroundColor = 'pink';

const subTituloNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
subTituloNaoUrgente[0].style.backgroundColor = 'black';
subTituloNaoUrgente[1].style.backgroundColor = 'black';

const naoEmergencia = document.querySelector('.no-emergency-tasks');
naoEmergencia.style.backgroundColor = 'yellow';

const rodape = document.querySelector('#footer-container');
rodape.style.backgroundColor = 'darkGreen';