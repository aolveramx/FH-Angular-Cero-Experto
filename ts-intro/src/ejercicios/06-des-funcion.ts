export interface Product {
  desc: string,
  price: number,
}

const phone: Product = {
  desc: 'Nokia A1',
  price: 150,
}

const tablet: Product = {
  desc: 'ipad Air',
  price: 499,
}

export function calcTaxOverSells(product: Product[]): [number, number] {
  let total = 0

  product.forEach( ({ price }) => {
    total += price
  })

  return [total, total * 0.16]
}

const articles = [ phone, tablet ]

const [ total, taxes ] = calcTaxOverSells( articles )

// console.log('Total: ', total)
// console.log('Taxes: ', taxes)