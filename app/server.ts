import express from 'express'

import { treeRoute } from './routes'
import { setupFolders, setupData, logger } from './utils'

const app: express.Application = express()
const port: number = 3000

const server = app.listen(port, () => {
    logger.log(`Listening at http://localhost:${port}/`)
})
app.use('/trees', treeRoute)

try {
    // Make sure the data folder exists
    setupFolders(__dirname)
    // Check data folder for stored data.
    setupData(__dirname)
    // If data exists, use it to initialize the cache.
    // If it doesn't, get the data then initialize the cache.
    // Set up routine jobs
} catch (error) {
    logger.warn(error.stack)
    server.close()
}
// if (setupFolders(__dirname)) {
//     getTreeData(__dirname)
// } else {
// }

