export interface Location {
  lat: number
  long: number
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5

export interface Property {
  id: string
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
