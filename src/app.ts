interface ErrorContainer {
  // id: string; you can have some predefined key:type pair as well but types must match
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'There should be a valid email',
  username: 'Must start with letter',
  password: 'Atleast 69 characters long'
}

