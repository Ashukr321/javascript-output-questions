// use case of the call methods 
// 2 object  of the  person 
// we both  have need to introduced them self 
// i want to create a intruduced function which we can reuse for both 

const person1 = {
    name :"Ashutosh",
    age:20,
    address:{
        city:"patna"
    }
}
const perosn2 = {
    name:"Alice",
    age:21,
    address:{
        city:"siwan",
        pin_code:"841238",
    }
}

// create the  function   declration 
function intro (greeting){
    console.log(`${greeting} -   ${this.name}`);
}

intro.call(person1,"good morning !");// person1 this is the object referece we pass ;
intro.apply(perosn2,["hello sir"])
// here what happend basically the .call methods bind to the introd methods 

// intro.call(perosn2,"good evening !");

// the value of the this dertermied by how the function call 


// call(context,value1, value2 etc....);
