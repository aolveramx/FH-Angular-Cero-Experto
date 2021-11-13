/*
    ===== Código de TypeScript =====
*/

let skills: string[] = [ 'Bash', 'Counter', 'Healing' ]

interface Character {
  name: string,
  hp: number,
  skills: string[],
  location?: string,
}

const character: Character = {
  name: 'Ari',
  hp: 100,
  skills: [ 'Bash', 'Counter', 'Healing' ],
}

character.location = 'Cuauhtemoc'

console.table( character )