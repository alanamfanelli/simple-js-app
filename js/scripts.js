(function (){pokemonRepository = (function ()
    {
var repository = [ /* Pokedex Object Array*/
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
]
function add(pokemon) {
      repository.push(pokemon);
    }

    function getAll() {
      return repository;
    }

    return {
      add: add,
      getAll: getAll
    }
    })();
    var pokemon = { name: "Charmeleon",
    height: 1.1,
    types: [ "Fire" ]};
var getAll= pokemonRepository.getAll();

    pokemonRepository.add(pokemon)

    getAll.forEach(function(property){
      if (property.height >= 2.0) {
                document.write("<p>" +property.name+" "+property.height+ " Wow! That's Big!" +"</p>");
            }
          else {
            document.write("<p>" +property.name+" "+property.height+ "</p>");
                }
                 });

    pokemonRepository();
    })();
