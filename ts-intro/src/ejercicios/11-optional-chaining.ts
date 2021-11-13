interface Passenger {
  name: string
  children?: string[]
}

const passenger1: Passenger = {
  name: 'Ari'
}

const passenger2: Passenger = {
  name: 'Melissa',
  children: [ 'Lucifer', 'Atenea' ]
}

function printChildren( passenger:Passenger ): void {

  const childrenNumber = passenger.children?.length || 0

  console.log(childrenNumber)
}

printChildren( passenger1 )