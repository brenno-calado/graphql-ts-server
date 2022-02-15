import {
  GraphQLEnumType as Enum,
  GraphQLFloat as Float,
  GraphQLID as ID,
  GraphQLInputObjectType as Input,
  GraphQLInt as Int,
  GraphQLNonNull as NN,
  GraphQLObjectType as Obj,
  GraphQLString as String
} from "graphql";

export const StatusEnum = new Enum({
  name: "StatusEnum",
  values: {
    INACTIVE: { value: "inactive" },
    ACTIVE: { value: "active" }
  }
})

export const RatingEnum = new Enum({
    name: "RatingEnum",
    values: {
      ZERO: { value: 0 },
      ONE: { value: 1 },
      TWO: { value: 2 },
      THREE: { value: 3 },
      FOUR: { value: 4 },
      FIVE: { value: 5 },
    }
})

export const Location = new Obj({
  name: "Location",
  fields: {
    lat: { type: new NN(Float) },
    long: { type: new NN(Float) }
  }
})

export const CreateLocation = new Input({
  name: "CreateLocation",
  fields: {
    lat: { type: new NN(Float) },
    long: { type: new NN(Float) }
  }
})

export const Property = new Obj({
  name: "Property",
  fields: {
    id: { type: new NN(ID) },
    title: { type: new NN(String) },
    status: { type: new NN(StatusEnum) },
    image: { type: new NN(String) },
    address: { type: new NN(String) },
    price: { type: new NN(Float) },
    area: { type: new NN(Float) },
    parkingSpaces: { type: Int },
    numOfBedrooms: { type: new NN(Int) },
    numOfBathrooms: { type: new NN(Int) },
    rating: { type: RatingEnum },
    location: { type: new NN(Location) }
  }
})

export const CreateProperty = new Input({
  name: 'CreateProperty',
  fields: {
    title: { type: new NN(String) },
    status: { type: StatusEnum },
    image: { type: new NN(String) },
    address: { type: new NN(String) },
    price: { type: new NN(Float) },
    area: { type: new NN(Float) },
    parkingSpaces: { type: Int },
    numOfBedrooms: { type: new NN(Int) },
    numOfBathrooms: { type: new NN(Int) },
    location: { type: new NN(CreateLocation) }
  }
})
