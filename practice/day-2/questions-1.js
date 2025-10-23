const user = {
  name: "Ashu",
  greet: function () {

    console.log(this.name);
  }
};
user.greet();

// here we call the greet methods via object user
// greet is a arrow function
// in the arrow function
// this is point to its parent or lexical env.
// in this case . this point to the window object
// where this is not defined to that the output is undefined 