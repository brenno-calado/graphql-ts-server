export interface Location {
  lat: number
  long: number
}

export enum Rating {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE
}

export enum Status {
  inactive = 'inactive',
  active = 'active'
}

export interface Property {
  id: string
  title: string
  status: Status
  image: string
  address: string
  price: number
  area: number
  parkingSpaces?: number
  numOfBedrooms: number
  numOfBathrooms: number
  rating?: Rating
  location: Location
}
