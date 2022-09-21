import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {Product} from './product-model'
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

const productsClass = plainToClass(Product, products);

for (let product of productsClass)
{
  console.log(product.getInformation());
  
}