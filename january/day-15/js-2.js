function introduce(skill1, skill2) {
    // here this refer to the dev obeject
  console.log(`${this.name} knows ${skill1} and ${skill2}`);
}

// object literals store in heap memory  reference data type
const dev = { name: 'Alex' };


const boundIntro = introduce.bind(dev, 'JavaScript'); // in bind methods we can pass the array of the parameters
// bind methods also return a function 
// reference dev (object)
boundIntro('React');

// output  Alex knows Javascript and React