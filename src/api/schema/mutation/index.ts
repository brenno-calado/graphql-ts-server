import { PropertiesLogic } from "@domain/properties"
import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"
import { CreateProperty, Property } from "../type/Property"

const properties = new PropertiesLogic()

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createProperty: {
      type: new GraphQLNonNull(Property),
      args: {
        property: { type: new GraphQLNonNull(CreateProperty)}
      },
      resolve: (_, { property }) => properties.create(property)
    },
    deleteProperty: {
      type: new GraphQLNonNull(new GraphQLObjectType({
        name: 'deleteProperty',
        fields: { message: { type: GraphQLString }, id: { type: GraphQLID} }
      })), 
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (_, { id }) => properties.delete(id)
    }
  }
})

export { mutation }
