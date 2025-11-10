
const obj = {
  value: 100,
  // this is the  function declaration 
  show() {
    // setTimeOut
    setTimeout(function () {
      console.log(this.value); // 
    }, 0);
  }
 
};


obj.show();

// this inside the callback , point to the global object 
// in global object we try to get the value of the this , so this will give the 
// undefiend
