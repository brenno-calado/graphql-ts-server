import { Property, Status, Rating } from "@shared/interfaces";
import { Document, model, Schema } from "mongoose";

type IProperty = Property & Document

const propertiesSchema = new Schema(
  {
    title: { type: String, required: true },
    status: { type: String, default: Status.active, enum: Status },
    image: { type: String, default: 'a' },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    area: { type: Number, required: true },
    parkingSpaces: { type: Number },
    numOfBedrooms: { type: Number, required: true },
    numOfBathrooms: { type: Number, required: true },
    rating: { type: String, enum: Rating },
    location: {
      lat: { type: Number, required: true },
      long: { type: Number, required: true },
    }
  },
  {
    collection: 'properties',
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    collation: {
      locale: 'pt'
    },
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  })

const propertyModel = model<IProperty>('property', propertiesSchema)

export { propertyModel }