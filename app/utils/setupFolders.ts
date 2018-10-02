import fs from 'fs'
import path from 'path'

import { dataDirectory } from './constants'

export const setupFolders = (rootDir: string) => {
    const directory = path.normalize(rootDir + dataDirectory)
    try {
        fs.statSync(directory)
    } catch (e) {
        try {
            fs.mkdirSync(directory)
        } catch (e) {
            throw e
        }
    } 
}
