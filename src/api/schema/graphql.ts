import { GraphQLSchema } from "graphql"
import { query } from "@schema/query"
import { mutation } from "@schema/mutation"

export const schema = new GraphQLSchema({ query, mutation })