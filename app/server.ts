// External
import express from 'express'
// import axios from 'axios'
// import fs from 'fs'
// Internal
import { treeRoute } from './routes'
import { setupFolders } from './utils'
// import { TreeFetchJob } from './jobs'

const app: express.Application = express()
const port: number = 3000

app.use('/trees', treeRoute)

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})

if (setupFolders(__dirname)) {

} else {
    console.log('Required folder structure could not be created. Closing server.')
    server.close()
}

// axios.get('https://opendata.arcgis.com/datasets/82841132047d47659508f60c52f6346a_0.geojson')
//     .then((response) => {
//         // console.log(response)
//         fs.writeFile('test.txt', JSON.stringify(response), (err) => {
//             if (err) {
//                 return console.log(err)
//             }
//         })
//     })
//     .catch(() => {
//     })
//     .then(() => {
//         console.log('ender')
//     })


