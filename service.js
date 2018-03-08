function Service(){
  var characters;

  this.getCharacters = function (callBack){
    console.log("making request")
    $.get("https://swapi.co/api/people/?page=1")
      .then( res =>{
        characters = res.results
        callBack(characters)
      })
      .catch(err =>{
        console.log(err)
      })
  }

}