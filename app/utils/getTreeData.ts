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
const getTreeData = async (rootDir: string) => {
    const filename = path.normalize(rootDir + dataDirectory + '/trees.json')
    console.log(filename)
    try {
        const response = await axios.get(dataSourceURL)
        if (response.status === 200) {
            try {
                fs.writeFileSync(filename, JSON.stringify(response.data))
            } catch (error) {
                console.warn(`Did not write tree data. error: ${error}`)
            }
        }
    } catch (error) {
        console.warn(`Did not fetch tree data. error: ${error}`)
    }
}

export default getTreeData