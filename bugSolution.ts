function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string[] {
  return persons.map(person => greeter(person));
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //This will work because it handles an array of strings

//Alternative solution: Concatenate array elements into a single string
let user2 = ["Jane", "Doe"];
let userString = user2.join(" ");
console.log(greeter(userString));//This will also work