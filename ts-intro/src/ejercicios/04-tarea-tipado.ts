interface SuperHero {
  name: string,
  age: number,
  address: Address,
  showAddress: () => string
}

interface Address {
  street: string,
  country: string,
  city: string
}

const superHero: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'U.S',
    city: 'N.Y.'
  },
  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country
  }
}

const address = superHero.showAddress()
console.log(address)