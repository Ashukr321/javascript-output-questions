let user = {
  name: "Ashu",
  getName() {
    return this.name;
  }
};
let f = user.getName;
console.log(f()); // undefined