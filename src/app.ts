interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greeting: (phrase: string) => void
}

class User implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting(phrase: string) {
    console.log('====================================');
    console.log(phrase + ', I\'m ' + this.name);
    console.log('====================================');
  }
}

let user1: Greetable; // this tells, you don't care whether user1 is of class User but ensures
                      // user1 is Greetable. This works becasue class User implements Greetable

const user2 = new User('Rabbi', 25);

user1 = new User('Hassan', 30);

user1.greeting('Hello there')

user2.greeting('Hi')
