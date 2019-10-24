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
repository.forEach(function(pokedexList) {
  if (pokedexList.height > 1.1) {
    document.write(pokedexList.name + ' (Height: '+pokedexList.height+') - Wow that\'s big <br>' )
  } else {
    document.write(pokedexList.name + ' (Height: '+pokedexList.height+') <br> ' )
  }
});
