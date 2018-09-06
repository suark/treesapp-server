import express from 'express'

import { treeRoute } from './routes'
import { setupFolders, getTreeData, logger } from './utils'

const app: express.Application = express()
const port: number = 3000

const server = app.listen(port, () => {
    logger.log(`Listening at http://localhost:${port}/`)
})

if (setupFolders(__dirname)) {
    getTreeData(__dirname)
} else {
    logger.warn('Required folder structure could not be created. Closing server.')
    server.close()
}

app.use('/trees', treeRoute)
