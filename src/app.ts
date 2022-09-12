interface Greetable {
  name: string;

  greeting(phrase: string): void;
}

let user1: Greetable;

user1 = {
  name: "Hassan",
  greeting(phrase: string) {
    console.log("====================================");
    console.log(phrase + " I'm " + this.name);
    console.log("====================================");
  },
};

user1.greeting('Hello there, ')
