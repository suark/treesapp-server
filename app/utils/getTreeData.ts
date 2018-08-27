import axios from 'axios'
import fs from 'fs'
import path from 'path'
import {
    dataDirectory,
    dataSourceURL,
} from './constants'

/*
    Fetches tree data. If successful, it stores it in a file and a cache object.
    Takes a directory name to know where to save the data.
*/
const getTreeData = (rootDir: string) => {
    const filename = path.normalize(rootDir + dataDirectory + '/trees.json')
    axios.get(dataSourceURL)
        .then((response) => {
            try {
                fs.writeFileSync(filename, JSON.stringify(response))
            } catch (error) {
                console.log('did not write file', error)
            }
        })
        .catch(() => {
            console.log('failed to get data')
        })
        .then(() => {
            console.log('pointless ending')
        })
}

export default getTreeData
