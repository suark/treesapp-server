import { scheduleJob, RecurrenceRule } from 'node-schedule'

const treeFetchingRule = new RecurrenceRule()
treeFetchingRule.dayOfWeek = [0, 4]
treeFetchingRule.hour = 23
treeFetchingRule.minute = 59
treeFetchingRule.second = 59

const startTreeFetchingJob = () => {
    return scheduleJob(treeFetchingRule, () => {
    })
}

export default startTreeFetchingJob
