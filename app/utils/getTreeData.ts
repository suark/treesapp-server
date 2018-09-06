import axios from 'axios'
import fs from 'fs'
import path from 'path'

import { dataDirectory, dataSourceURL } from './constants'
import { convertTreeData } from './convertTreeData'
import { logger } from './logger' 
import { treeCache } from '../data'
/*
    Fetches tree data. If successful, it stores it in a file and a cache object.
    Takes a directory name to know where to save the data.
*/
export const getTreeData = async (rootDir: string) => {
    const filename = path.normalize(rootDir + dataDirectory + '/trees.json')
    try {
        logger.log('Fetching Tree Data')
        const response = await axios.get(dataSourceURL)
        logger.log('Done Fetching Tree Data')
        if (response.status === 200) {
            try {
                logger.log('Converting Tree Data')
                const treeMarkerMap = convertTreeData(response.data)
                logger.log('Done Converting Tree Data')
                const treeLog = {
                    lastUpdated: Date.now(),
                    treeMarkerMap,
                }
                logger.log('Writing Tree Data')
                fs.writeFileSync(filename, JSON.stringify(treeLog))
                logger.log('Done Writing Tree Data')
                treeCache.data = treeMarkerMap
            } catch (error) {
                logger.warn(`Did not write tree data. error: ${error}`)
            }
        }
    } catch (error) {
        logger.warn(`Did not fetch tree data. error: ${error}`)
    }
}