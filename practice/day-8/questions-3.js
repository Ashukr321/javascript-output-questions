const obj = {
  value: 100,
  show() {
    // callback -> goes inside the callback queue or task queue
    setTimeout(() => {
      console.log(this.value);
    }, 0);
  }
};
obj.show(); // 100 
// in the arrow function this refers to their lexical scope due to this region the value of the this is 100 

