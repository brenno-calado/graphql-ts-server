import { logger } from "@shared/helpers";
import { Property } from "@shared/interfaces";
import { PropertiesRepository } from "./properties.repository";

export class PropertiesLogic {
  repository = new PropertiesRepository()

  async create(data: Property) {
    try {
      return this.repository.create(data)
    } catch (error) {
      logger.error("ERROR AT CREATE PROPERTY => ", error)
      return error
    }
  }

  async show(id: string) {
    try {
      const query = {
        ...(id && { _id: id })
      }

      return this.repository.show(query)
    } catch (error) {
      logger.error("ERROR AT SHOW PROPERTIES => ", error)
      return error
    }
  }

  async delete(id: string) {
    try {
      const property = await this.repository.show({ _id: id })

      if (!property.length) return ({ id, message: `Couldn't find property` })

      await this.repository.delete({ _id: id })
      return ({ id, message: `property deleted`})
    } catch (error) {
      logger.error("ERROR AT DELETE PROPERTY => ", error)
      return error
    }
  }
}
