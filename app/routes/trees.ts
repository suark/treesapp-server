import { Router, Request, Response } from 'express'

import { treeCache } from '../data'

const router: Router = Router()

router.get('/', (_req: Request, res: Response) => {
    res.send(treeCache.data)
})

export default router
