// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   console.log(this); // button  node 
// });

// this in event listern refers to the that event emitter object 

// in the arrow function the value of the this capture from their lexical scope


//object literals
const user = {
  name: 'John',
  // Regular Function
  // function declaration
  greet: function() {
    console.log("Regular:", this.name);
  },
  // Arrow Function
  shout: function(){
    // here this refer to the object
    const innerArrow = ()=>{
        // this inherited
        console.log("Nested Arrow:", this.name);
    }
    innerArrow();
  }
  
};

user.greet(); // Regular: John
user.shout(); // Arrow: undefined