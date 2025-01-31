import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function booststrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database is connected successfully')

    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`failed to connect data base ${err}`)
  }
}

booststrap()
