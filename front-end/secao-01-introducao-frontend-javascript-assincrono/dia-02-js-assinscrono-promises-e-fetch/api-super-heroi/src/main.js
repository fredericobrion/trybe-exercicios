import Swal from 'sweetalert2';

const imagem = document.getElementById('imagem');
const nome = document.getElementById('nome');
const botaoSortear = document.getElementById('sortear-botao');

const ACCESS_TOKEN = '9208404439233785';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const sortearNumero = () => Math.floor(Math.random() * 1000);

botaoSortear.addEventListener('click', () => {
  const sortedId = sortearNumero();
  fetch(`${BASE_URL}/${sortedId}`)
    .then((response) => response.json())
    .then((data) => {
      imagem.src = data.image.url;
      nome.innerText = data.name;
    })
    .catch((error) => {
      Swal.fire({
        title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    });
});
