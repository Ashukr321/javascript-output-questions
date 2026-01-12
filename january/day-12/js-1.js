// classes of the person
const person = {
  name: 'Gemini', // state variable or instance variable
  
  // function expression
  // here this point to the calling object so the value of the name will be "Gemini"

  getName: function() {
    return this.name;
  },
  // arrow function 
  // in this  arrow function this refers to the global object 

  getArrowName: () => {
    return this.name; // undefiend
  }
};

console.log(person.getName()); // Gemini
console.log(person.getArrowName()); // undefiend
