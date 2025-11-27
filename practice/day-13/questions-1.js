console.log("Day - 13 javascript output based questions !");


console.log(a);// undefined
var a = 10; //var is the hoisted in nature , the value of var is undefined

try {
  console.log(b);
  let b = 20;
} catch (e) {
  console.log('error:', e.name); //  this reference error   
}
