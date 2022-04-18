import mongoose from 'mongoose'
import config from 'config'
import log from './logger'

const connect = () => {
  const DBURI = config.get<string>('dbUri')

  return mongoose
    .connect(DBURI)
    .then(() => log.info('DB connected'))
    .catch((error) => {
      log.info('Could not connect to DB', error)
      process.exit(1)
    })
}

export default connect
