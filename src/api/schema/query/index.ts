import { PropertiesLogic } from "@domain/properties"
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql"
import { Property } from "../type/Property"

const properties = new PropertiesLogic()

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    properties: {
      args: {
        id: { type: GraphQLID },
      },
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Property))),
      resolve: (_, { id }) => properties.show(id)
    }
  }
})

export { query }
