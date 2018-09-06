import fs from 'fs'
import path from 'path'

import { dataDirectory } from './constants'
import { logger } from './logger'

const setupDirectory = (directory: string): boolean => {
    try {
        fs.statSync(directory)
        return true
    } catch (e) {
        try {
            fs.mkdirSync(directory)
            return true
        } catch (e) {
            logger.warn(`Error setting up ${directory}, with error: ${e}`)
            return false
        }
    } 
}

export const setupFolders = (rootDir: string): boolean => {
    return setupDirectory(path.normalize(rootDir + dataDirectory))
}