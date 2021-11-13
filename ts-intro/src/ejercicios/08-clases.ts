class Human {
  
  constructor(
    public name: string,
    public address: string
  ) {}

}

class Hero extends Human {

  constructor( 
    public alterEgo: string,
    public age?: number,
    public realName?: string
  ) {
    super( realName, 'N.Y' )
  }

}

const ironman = new Hero('Ironman', 45, 'Tony')

console.log(ironman)