import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({message: 'Access denied!'});
    }

    try { 
        const decode = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
        req.userId = decode.id;
        next();
    } catch (err) {
        res.status(401).json({message: 'Invalid token'});
    }
}

export default auth;