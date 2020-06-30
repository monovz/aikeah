const jwt = require('jsonwebtoken');

const generateToken = (id, username, email, role) =>{
    const token = jwt.sign({id,username,email, role}, process.env.SECRET_KEY);
    return token
}

const verifyToken = (token)=>{
    const userData = jwt.verify(token, process.env.SECRET_KEY);
    return userData
}

module.exports = {generateToken, verifyToken}