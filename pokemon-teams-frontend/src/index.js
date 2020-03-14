const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
  fetchTrainers();
  // fetchPokemons();
});

function fetchTrainers () {
  fetch('http://localhost:3000/trainers')
    .then(resp => resp.json())
    .then(tobj => {
      console.log(tobj);
      renderTrainerCards(tobj);
    });
};

// function fetchPokemons (trainer, stored) {
//   fetch('http://localhost:3000/pokemons')
//     .then(resp => resp.json())
//     .then(obj => console.log(obj));
// };
let pokemonList = [];
// forEach trainer to build card
// forEach pokemon per trainer to put into card that was built
function renderTrainerCards(trainers) {
  const main = document.getElementById('container');
  const ul = document.createElement('ul');

  trainers.forEach(trainer => {
    main.innerHTML += `
    <div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
    <button data-trainer-id=${trainer.id}>Add Pokemon</button>
    
    </div>`
  });

};