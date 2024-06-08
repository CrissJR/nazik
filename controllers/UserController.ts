import ApiError from '../error/ApiError';
import { Request, Response, NextFunction} from 'express';
import bcrypt from 'bcrypt';
// import models from '../src/models';
import jwt from 'jsonwebtoken'
import { Model, where } from 'sequelize';
 const { User, Basket} = require ('../src/models');

const  generateJWT = (id:number, email:string, role:string) => {
  return jwt.sign(
      {id, email, role}, 
      'pityx.pro228',
      {expiresIn: '24h'})
}



class UserController {
 
    
    async registration(req: Request, res: Response, next: NextFunction ) {
      const {password, email, role} = req.body
      if (!email || !password) {
        return next(ApiError.badRequest('невірний пароль або пошта'))
      }
      const candidateroot = await User.findOne({where: {email}})
      if (candidateroot) {
        return next(ApiError.badRequest('користувач з таким email вже існує '))
      }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({email, role , password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, user.email,user.role)
           return res.json(token)
    };
   
    async login(req: Request, res: Response, next: NextFunction) {
          const {email, password} = req.body
          const user = await User.findOne({where: {email}})
          if(!user) {
            return next(ApiError.internal('немає такого користувача'))
          }
          let comparePassword = bcrypt.compareSync(password, user.password)
          if(!comparePassword) {
            return next (ApiError.internal('паролі не співпадають'))
          }
          const token = generateJWT(user.id, user.email, user.role)
          return res.json({token})
    };
   
    async check(req: Request, res: Response, next: NextFunction) {
     const token = generateJWT(req.user.id, req.user.email, req.user.role)
      res.json({token})
    };
    
}
export default new UserController()