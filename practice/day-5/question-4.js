//  <div id="app"></div>

// in this case we want to add some element inside the div 

let div = document.getElementById("app");
// console.log(div)

// features 
// i want to add some element inside the div container 
div.innerHTML= "<h1>hello</h1>" // this is not visible why  // 
div.innerHTML += "<h1>world</h1>" //this override h1 
// now this add prev + new because of the + operator 
console.log(div); // 

// innerHtml always replace entire html content 