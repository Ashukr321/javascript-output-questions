"use strict";
function fn() {
  console.log(this);
}
fn(); // fd we call , in this case the 
// the value of the this  is undefind
