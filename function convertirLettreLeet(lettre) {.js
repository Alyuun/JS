function convertirLettreLeet(lettre) {
  if (lettre.toLowerCase() === "a") {
      lettre = 4;
    } else if (lettre === "b") {
      lettre = 8;
    } else if (lettre === "e") {
      lettre = 3;
    } else if (lettre === "l") {
    	lettre = 1;
    } else if (lettre === "o") {
    	lettre = 0;
    } else if (lettre === "s") {
    	lettre = 5
    } return lettre;
  }
  
  function convertirMotLeet(mot) {
  	let motLeet = "";
    for (const lettre of mot) {
    	motLeet += convertirLettreLeet(lettre);
    }
    return motLeet;
  }
  
console.log(convertirLettreLeet("a"));
console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"
  