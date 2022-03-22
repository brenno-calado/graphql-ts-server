import { logger } from '@shared/helpers'
import { ApolloServer } from 'apollo-server-express'
import { schema } from '@schema/graphql'
import { app } from '@api/app'

export async function connectApollo(): Promise<void> {
  try {
    logger.info(`Connecting Apollo to the server...`)

    const apollo = new ApolloServer({ schema })

    await apollo.start()

    apollo.applyMiddleware({ app, path: "/graphql"})

    logger.info(`Apollo connected!`)
  } catch (error) {
    logger.error(`Could not connect Apollo: ${error}`)
  }
}
