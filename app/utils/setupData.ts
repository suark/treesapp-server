import fs from 'fs'
import path from 'path'

import { logger } from './logger' 
import { dataFile } from './constants'
import { treeCache } from '../data'
import { getTreeData } from './getTreeData'

export const setupData = (rootDir: string) => {
    const filePath = path.normalize(rootDir + dataFile)
    let data
    try {
        logger.log('Getting Tree Data from file')
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        logger.log('Done Getting Tree Data from file')
    } catch (error) {
        logger.warn('Tree Data file is not currently stored.')
    }
    if (data != null) {
        logger.log('Loading Tree Cache from stored Tree Data file.')
        treeCache.data = data
    } else {
        getTreeData(rootDir)
    }
}
