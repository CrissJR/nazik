import * as uuid from 'uuid';
import path from 'path';
import { NextFunction, Request, Response } from 'express';
import ApiError from '../error/ApiError';  
import {Device, Deviceinfo} from '../src/models';

class DeviceController {
   
    async create(req: Request, res: Response, next: NextFunction) {
    
    try {
        const {name, price, brandId, typeId, info} = req.body
        const img = Array.isArray(req.files.img) ? req.files.img[0] : req.files.img
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', '..', 'static', fileName)) 
            
        const device = await Device.create({name, price, brandId, typeId, img: fileName})
        
        return res.json(device)

    } catch (e) {
        next(ApiError.badRequest(e.message))
    } 

    };


   
    async getall(req: Request, res: Response) {

    };
    
    async getone(req: Request, res: Response) {
        const{id}=req.params
        const device = await Device.findOne({
            where: {id},
            include :[{model: Deviceinfo, as : 'info'}]
        })
        return res.json(Device)
    };

    
}
export default new DeviceController();