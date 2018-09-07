import express from 'express'

import { treeRoute } from './routes'
import { setupFolders, setupData, logger } from './utils'
import { startTreeFetchingJob } from './jobs'

const app: express.Application = express()
const port: number = 3000

const server = app.listen(port, () => {
    logger.log(`Listening at http://localhost:${port}/`)
})
app.use('/trees', treeRoute)

try {
    // Make sure the data folder exists
    setupFolders(__dirname)
    // Initialize cache and possibly fetch initial tree data
    setupData(__dirname)
    // Set up routine jobs
    startTreeFetchingJob(__dirname)
} catch (error) {
    logger.warn(error.stack)
    server.close()
}
