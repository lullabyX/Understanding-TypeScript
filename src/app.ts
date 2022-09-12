// typecasting way 1, but conflicts with react
// const userInput = <HTMLInputElement> document.getElementById('user-input')!;

// typecasting way 2
const userInput = document.getElementById('user-input') as HTMLInputElement

userInput.value = 'hello there'

