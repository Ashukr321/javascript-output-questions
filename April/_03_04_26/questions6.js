for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// 3 times register setTimeout and when condition false : at that point of time :
// the value of the i will be 3
// output  will be : 3 3 3

// in  case of the var : output will be 3 3 3
// in case of the let : output will be 0 1 2  
