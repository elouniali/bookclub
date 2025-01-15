const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Accès refusé, token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalide.' });
    }
};

module.exports = authMiddleware;
