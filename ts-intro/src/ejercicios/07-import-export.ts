import { Product, calcTaxOverSells } from './06-des-funcion';

const cartShop: Product[] = [
  {
    desc: 'Phone 1',
    price: 100,
  },
  {
    desc: 'Phone 2',
    price: 150,
  }
]

const [ total, taxes ] = calcTaxOverSells( cartShop )

console.log('Total', total)
console.log('Taxes', taxes)