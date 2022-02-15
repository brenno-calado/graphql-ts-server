import dotenv from 'dotenv'
import { connectMongo, connectApollo } from '@config/index'
import server from '@api/server'
import { logger } from '@shared/helpers'
dotenv.config()

async function main() {
  await connectMongo()
  await connectApollo()
  server
  logger.info('Done!')
}

main()
