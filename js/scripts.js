var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function(){
  var repository =[ /* Pokedex Object Array*/
  {
      name:'Squirtle',
      height:0.5,
      type:['water']
  },
  {
      name:'Butterfree',
      height:1.1,
      type:['bug','flying']
  },
  {
      name:'Pikachu',
      height:1.04,
      type:['electric']
  },
  {
      name:'Ninetales',
      height:1.1,
      type:['fire']
  },
  {   name:'Venusaur',
      height:2,
      type:['grass','poison']
  }
];
//Function to add new Pokemon data
function add(pokemon)
{
  //Must be an 'object' type
  if (typeof pokemon !== 'object')
    {
    return 'Not a valid input'
    }
    else
    {
    repository.push(pokemon);
    }
}

function getAll()
  {
    return repository;
  }

function addListItem(pokemon)
  {
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    $pokemonList.appendChild(listItem);
    button.innerText = pokemon.name;
    button.classList.add('new-style')
    listItem.appendChild(button);
  }
return
  {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
