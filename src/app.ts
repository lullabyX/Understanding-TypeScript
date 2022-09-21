import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {Product} from './product-model'
import { validate } from "class-validator";



const arr = [1, 2, 3];

console.log(_.shuffle(arr));


declare var GLOBAL: any;

console.log(GLOBAL);

const products = [
  {
    title: "Biscuit",
    price: 12.99,
  },
  {
    title: "Paper",
    price: "1.99",
  },
];

const p = new Product('', 2.99);

validate(p).then(error => {
  if (error.length > 0)
  {
    console.log(error);
    
  } else
  {
    console.log(p);
    
  }
})