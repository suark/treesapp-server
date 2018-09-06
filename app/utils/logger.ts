export const logger = {
    log: (message: string) => {
        console.log(`${Date.now()}: ${message}`)
    },
    warn: (message: string) => {
        console.warn(`${Date.now()}: ${message}`)
    }
}

