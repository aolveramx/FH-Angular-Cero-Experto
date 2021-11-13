interface Player {
  volume: number,
  second: number,
  song: string,
  details: Details
}

interface Details {
  author: string,
  year: number
}

const player: Player = {
  volume: 90,
  second: 36,
  song: 'New Lands',
  details: {
    author: 'Justice',
    year: 2015
  }
}

const { volume, second, song, details } = player
const { author, year } = details

// console.log('El volumen actual es de :' + volume)
// console.log('El segundo actual es: ' + second)
// console.log('La canción actual es: ' + song )
// console.log('El autor es: ' + author)

const DragonBallZ: string[] = [ 'Goku', 'Vegeta', 'Trunks' ]

const [ , , p3 ] = DragonBallZ

console.log('Character 1:', DragonBallZ[0])
console.log('Character 2:', DragonBallZ[1])
console.log('Character 3:', p3)