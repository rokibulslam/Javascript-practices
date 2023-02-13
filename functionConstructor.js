// Make Object with Functional Constructor 
const Computer = function (name, model) {
    this.name = name;
    this.model = model;

    this.aboutComputer = function () {
        console.log(`this computer name is ${this.name} and model ${this.model}`)
    }
}
const dell = new Computer("dell", "d100");
// console.log(dell);
dell.aboutComputer()
/*
4 Rules of functional constructor 
1. create an empty Object {}
2. funciton is called this={}
3. {} linked to the prototype
4. {} will return  automatically
*/

