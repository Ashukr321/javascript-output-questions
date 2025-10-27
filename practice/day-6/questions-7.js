//  user : object
let user = {
  name: "Ashu",
  getName() {
    // console.log(this.name);
    return this.name; // undefien
  }
};

// console.log(user.getName())
let f = user.getName;  // this-> user Object

console.log(f());  