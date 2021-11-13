function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
  ){
    return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}


@classDecorator
class MySuperClass {

  public myProperty: string = 'ABC123'

  print() {
    console.log('Hola Mundo')
  }

}

console.log(MySuperClass)

const myClass = new MySuperClass()

console.log( myClass.myProperty )