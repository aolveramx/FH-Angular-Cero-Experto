function dataType<T>(arg: T) {
  return arg
}

let imString = dataType('Hola Mundo')
let imNumber = dataType(100)
let imArray = dataType([1,2,3,4,5])
let imExplicit = dataType<number>(100)