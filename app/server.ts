// External
import express from 'express'
// Internal
import {
    treeRoute,
} from './routes'
import {
    setupFolders,
    getTreeData,
} from './utils'
// import { treeFetchJob } from './jobs'

const app: express.Application = express()
const port: number = 3000

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})

if (setupFolders(__dirname)) {
    getTreeData(__dirname)
} else {
    console.log('Required folder structure could not be created. Closing server.')
    server.close()
}

app.use('/trees', treeRoute)
