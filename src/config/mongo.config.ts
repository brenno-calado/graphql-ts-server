import { connect } from 'mongoose'
import { MONGO_URI, MONGO_DATABASE } from './env'
import { logger } from '@shared/helpers'

export async function connectMongo(): Promise<void> {
  logger.info(`Connecting to Mongo: ${MONGO_URI}`)

  await connect(MONGO_URI, { dbName: MONGO_DATABASE })

  logger.info(`Mongo connected!`)
}
