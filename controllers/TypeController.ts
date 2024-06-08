import { Request, Response } from 'express';
import ApiError from '../error/ApiError';  
import { Type } from '../src/models';



class TypeController {
    
    async create(req: Request, res:Response) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    };
   
    async getall(req: Request, res:Response) {
        const types = await Type.findAll()
        return res.json(types)
    };

}
export default new TypeController();