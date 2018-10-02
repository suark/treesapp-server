const getTime = () => {
    const t = new Date()
    return t.toLocaleString()
}

export const logger = {
    log: (message: string) => {
        console.log(`${getTime()}| ${message}`)
    },
    warn: (message: string) => {
        console.warn(`${getTime()}| ${message}`)
    }
}
