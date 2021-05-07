const jwt = require('jsonwebtoken');


module.exports = authUser = (req, res, next) => {
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Access Denied!');
    console.log(token);
    try{
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();
    }catch(err){
        res.status(401).send('Acess Denied!');
    }

}
