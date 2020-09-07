class Dog {
    color: string = "brown";
    name: string = "Betyár";
    age: number = 4;
    skills: string[] = [
        "eat",
        "drink",
        "sleep",
        "bark",
    ];

    hello(): string {
        return `Hello, my name is ${this.name} and I can ${this.skills[3]}!`;
    }
}

const dog1 = new Dog();
dog1.name = 'Csinike\'s dog';
console.log( dog1.hello() );
