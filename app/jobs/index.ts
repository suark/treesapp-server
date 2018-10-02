import { scheduleJob, RecurrenceRule } from 'node-schedule'

import { getTreeData, logger } from '../utils'

const treeFetchingRule = new RecurrenceRule()
treeFetchingRule.dayOfWeek = [0, 4]
treeFetchingRule.hour = 23
treeFetchingRule.minute = 59
treeFetchingRule.second = 59

export const startTreeFetchingJob = (rootDir: string) => {
    logger.log('Scheduling job to periodically fetch/update tree data.')
    return scheduleJob(treeFetchingRule, () => {
        logger.log('Executing scheduled getTreeData')
        getTreeData(rootDir)
    })
}

export default startTreeFetchingJob
