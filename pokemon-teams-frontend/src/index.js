const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

console.log("Welcome to the console log");
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// my wip
// user story 1


function fetchTrainers () {
  fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(jdata => {
    // console.log(jdata);
    renderTrainerCards(jdata);
  });
};

function renderTrainerCards(jdata) {
  const trainerCards = document.getElementById('container');

  //build out the trainer card
  jdata.forEach(trainer => {      
    let pokeUl = document.createElement('ul');
    trainer.pokemons.forEach(pokemon => {     // inner loop to build out pokemon list
      pokeUl.innerHTML += `
      <li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`;
    });
    // outer loop for trainer card
    trainerCards.innerHTML += `
      <div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
        <button data-trainer-id=${trainer.id}>Add Pokemon</button>
        <ul id=${trainer.id}>
          ${pokeUl.innerHTML}
        </ul>
      </div>`;
    // console.log(pokeUl)
  });


};


document.addEventListener("DOMContentLoaded", () => {
  fetchTrainers();
  // fetchPokemons();
});
