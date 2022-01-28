 
export  function  fetchHousesChars(house){
      return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`).then(res=> res.json());
};

export  function fetchAllChars(){
      return fetch(`http://hp-api.herokuapp.com/api/characters/`).then(res=> res.json());
};

// gryffindor, slytherin, hufflepuff, Ravenclaw