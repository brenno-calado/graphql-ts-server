import { PORT, ENV } from '@config/env'
import { logger } from '@shared/helpers'
import { app } from './app'

const server = app.listen(PORT, () => {
  logger.info(`App[${ENV}] running on port ${PORT}...`)
})

process.on('uncaughtException', error => {
  logger.error('UNCAUGHT EXCEPTION! Shutting down...')
  logger.error(error)
  process.exit(1)
})

process.on('unhandledRejection', (error: Error) => {
  logger.error('UNHANDLED REJECTION! Shutting down...')
  logger.error(error)
  server.close(() => process.exit(1))
})

process.on('SIGHUP', () => {
  logger.warn('SIGHUP! Shutting down...')
  server.close(() => process.exit(128 + 1))
})

process.on('SIGINT', () => {
  logger.warn('SIGINT! Shutting down...')
  server.close(() => process.exit(128 + 2))
})

process.on('SIGTERM', () => {
  logger.warn('SIGTERM! Shutting down...')
  server.close(() => process.exit(128 + 15))
})

export default server
