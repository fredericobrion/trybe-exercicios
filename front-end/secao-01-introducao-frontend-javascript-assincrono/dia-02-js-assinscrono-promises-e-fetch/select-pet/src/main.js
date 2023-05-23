const dogButton = document.getElementById('dog-btn');
const catButton = document.getElementById('cat-btn');
const surpriseButton = document.getElementById('surprise-btn');

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';

const image = document.getElementById('imagem');

dogButton.addEventListener('click', () => {
    fetch(DOG_URL)
        .then((response) => response.json())
        .then((data) => {
            image.src = data.message;
        })
});

catButton.addEventListener('click', () => {
    fetch(CAT_URL)
      .then((res) => res.json())
      .then((data) => {
        image.src = data[0].url;
      })      
  });

surpriseButton.addEventListener('click', () => {
    Promise.any([
        fetch(DOG_URL),
        fetch(CAT_URL),
    ])
    .then((response) => response.json())
    .then((data) => {
        const petURL = data.message || data[0].url;
        image.src = petURL;
    })
})