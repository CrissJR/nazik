import * as express from 'express';
const router = express.Router();


import DeviceRouter from './DeviceRouter'
import BrandRouter from './brandRouter'
import TypeRouter from './TypeRouter'
import UserRouter from './userRouter'


router.use('/user', UserRouter)
router.use('/type', TypeRouter)
router.use('/brand', BrandRouter)
router.use('/device', DeviceRouter)

export default router;