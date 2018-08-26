import fs from 'fs'
import path from 'path'

const setupDirectory = (directory: string): boolean => {
    try {
        fs.statSync(directory)
        console.log(`Directory already exists, ${directory}`)
        return true
    } catch (e) {
        try {
            fs.mkdirSync(directory)
            console.log(`Directory successfully created, ${directory}`)
            return true
        } catch (e) {
            console.log(`Error setting up ${directory}, with error: ${e}`)
            return false
        }
    } 
}

const setupFolders = (rootDir: string): boolean => {
    const dataDirectory = path.normalize(rootDir + '/data')
    return setupDirectory(dataDirectory)
}

export default setupFolders