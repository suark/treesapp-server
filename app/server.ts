// External
import express from 'express'
import axios from 'axios'
// Internal
import { TreeRoute } from './routes'
// import { TreeFetchJob } from './jobs'

const app: express.Application = express()
const port: number = 3000

app.use('/trees', TreeRoute)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})

axios.get('https://opendata.arcgis.com/datasets/82841132047d47659508f60c52f6346a_0.geojson')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => {
        console.log('ender')
    })