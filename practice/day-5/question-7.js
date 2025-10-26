
// problem stat. 
// we want to add 5 list inside the ul tag using javascript 

const ul = document.getElementById("un_order_list");
console.log(ul);

// add 5 element 
// create a li is crated  dynamically 

// loop 
for (let i = 0; i < 5; i++) {
  // create li element using createElement 
  const li = document.createElement("li");
  // add some content 
  li.innerText = `list ${i}`;
  li.style.color = "orange";
  // append or inner into the ul 
  ul.appendChild(li);
}