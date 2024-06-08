import jwt from "jsonwebtoken"
import { Request, Response,  NextFunction,  } from "express";
 
 declare global {
        namespace Express {
          interface Request {
            user:any;
          }
        }
      }

function AuthMiddleWare(req:Request, res:Response, next :NextFunction) {
  
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
             return res.status(401).json({message: "не авторизований"})
            
    }
  const decoded = jwt.verify(token, 'pityx.pro228')
req.user = decoded
    next()


    } catch(e) {
        res.status(401).json({message: "не авторизований "})
    }

};  export default AuthMiddleWare;