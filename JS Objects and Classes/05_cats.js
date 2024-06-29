function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let name = tokens.shift();
        let age = tokens.shift();
        let cat = new Cat(name, age);
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);