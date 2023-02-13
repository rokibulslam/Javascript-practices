const Computer = function (name, model) {
    this.name = name;
    this.model= model;
    // this.aboutComputer = function () {
        
    // }
}

Computer.prototype.aboutComputer = function () {
    console.log(`this computer name is ${this.name} and model ${this.model}`);
};

const dell = new Computer("Dell", "Core I7");
console.log(dell);
