function Person(name, age){
    this.name = name;
    this.age = age;

    this.great = function(){
        console.log(`Hi, My name is ${this.name}`)
    }

    this.introduce = function(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }
}

const P1 = new Person("Alice", 21);

P1.great();
P1.introduce();

