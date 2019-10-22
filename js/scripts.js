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
for (items in repository) {
if (repository[items].height > 1.1) {
    document.write(repository[items].name + " (height: " + repository[items].height + "m) - Wow, that's big!<br><br>");
  } else {
    document.write(repository[items].name + ' (height: ' + repository[items].height + 'm)<br><br>');
  }
}
