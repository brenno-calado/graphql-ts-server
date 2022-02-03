export interface Location {
  lat: number
  long: number
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5

export enum Status {
  inactive = 'inactive',
  active = 'active'
}

export interface Property {
  id: string
  status: Status
  image: string
  address: string
  price: number
  area: number
  parkingSpaces: number
  numOfBedrooms: number
  numOfBathrooms: number
  rating: Rating
  location: Location
}
