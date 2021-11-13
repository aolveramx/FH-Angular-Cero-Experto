function add( a: number, b: number ): number {
  return a + b
}

const arrowAdd = ( a: number, b: number ): number => {
  return a + b
}

// args: mandatory, optional, default value
function product( number: number, otherNumber?: number, base: number = 2 ) {
  return number * base
}

console.log( add( 5, 10 ) )

console.log( product( 5 ) )

interface CharacterTwo {
  name: string,
  hp: number,
  showHp: () => void,
}

function heal( character: CharacterTwo , healLevel: number ): void {
  
  character.hp += healLevel

  console.log( character )
}

const newCharacter: CharacterTwo = {
  name: 'Delita',
  hp: 50,
  showHp() {
    console.log('Heal Points', this.hp)
  }
}

heal( newCharacter, 20 )