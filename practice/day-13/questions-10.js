
// class based object here  we create the 
class User {
  // constructor
  constructor(name) { this.name = name; }
  canViewPayroll() { return false; }
}

// class this inherit
class HRManager extends User {
  // method override
  canViewPayroll() { return true; }
}

const u = new User("Ashu");
const hr = new HRManager("Amrit");
console.log(u.canViewPayroll(),
  hr.canViewPayroll())

// each object has it's own have prototype 
