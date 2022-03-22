import { Property } from "@shared/interfaces";
import { propertyModel } from "./properties.model";

export class PropertiesRepository {
  async create(data: Property) {
    return propertyModel.create(data)
  }

  async show(query: { id: string } | object) {
    return propertyModel.find(query)
  }

  async delete(query: object) {
    return propertyModel.deleteOne(query)
  }

}
