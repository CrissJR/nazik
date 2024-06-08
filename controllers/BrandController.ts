import { Brand } from '../src/models';
import { Request, Response } from 'express';

class BrandController {
    
    async create(req: Request, res:Response) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    };
   
    async getall(req: Request, res: Response) {
        const brands = await Brand.findAll()
        return res.json(brands)
    };

    
}
export default new BrandController();