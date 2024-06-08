import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    } else {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default errorHandler;
