const bcrypt = require('bcrypt');

const comparePassword = (password, hashedPassword)=>{
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {comparePassword}