var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function(){
  var repository =[];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = document.querySelector('#modal-container');
  var $pokemonList = document.querySelector('ul');

//Function to add new Pokemon data
function add(pokemon){
  //Must be an 'object' type
  if (typeof pokemon !== 'object'){
    return 'Not a valid input';
    }
    else{
    repository.push(pokemon);
    }
}

function getAll(){
    return repository;
  }

function addListItem(pokemon){
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    $pokemonList.appendChild(listItem);
    button.innerText = pokemon.name;
    button.classList.add('show-modal');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
    button.addEventListener('click', function (){
      showDetails(pokemon);
    })
  }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  //Funtion to create modal
  var $modalContainer = document.querySelector('#modal-container');
  function showModal(title, text, image) {

   $modalContainer.classList.add('is-visible');

   // Clear all existing modal content
   $modalContainer.innerHTML = '';

   var modal = document.createElement('div');
   modal.classList.add('modal');

   // Add the new modal content: Name, height, and image
   var closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   closeButtonElement.innerText = 'Close';
   closeButtonElement.addEventListener('click', hideModal);

   var titleElement = document.createElement('h1');
   titleElement.innerText = title;

   var contentElement = document.createElement('p');
   contentElement.innerText = 'Height: ' + text;

   var imageElement = document.createElement('img');
   imageElement.src = image;
   imageElement.classList.add('myImage');

   modal.appendChild(closeButtonElement);
   modal.appendChild(titleElement);
   modal.appendChild(contentElement);
   modal.appendChild(imageElement);
   $modalContainer.appendChild(modal);

   $modalContainer.classList.add('is-visible');
 }

  function hideModal() {
    $modalContainer.classList.remove('is-visible');
    }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item.name, item.height, item.imageUrl);
    });
  }

return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
