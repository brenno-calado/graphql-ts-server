import dotenv from 'dotenv'
import { connectMongo } from '@config/index'
import server from '@api/server'
import { logger } from '@shared/helpers'
dotenv.config()

async function main() {
  await connectMongo()
  server
  logger.info('Done!')
}

main()
