function Controller(){
  var service = new Service()
  var charactersElem = document.getElementById("characters")

  function drawCharacters(characters){
    var template = ''
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      console.log(character.name)
      template += `
      <h3>${character.name}</h3>
      <p>${character.height}</p>
      `
    }
    charactersElem.innerHTML = template
  }

  service.getCharacters(drawCharacters)
}