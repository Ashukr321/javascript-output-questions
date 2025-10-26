
//  createElement and appendChild  
// createElement()

// createElement() 
// this is use for the dynamically create the new  element , via javascript 
// create select , update , delete dom 


// createElement("p")//pass the string that will crate the tag 
// it can be div , p , button , img etc 

let p = document.createElement('p'); // create we create the paragraph 
console.log(p);
// now i want to add some text 
p.innerText = "mast hai bhai new html tag create krne ka trika ";

const container = document.getElementById("container");
container.appendChild(p);



// appendChild()
// by the help of the appendChild we add or attach  the new element inside the parent element 
