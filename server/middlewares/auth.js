const {verifyToken} = require('../helper/token')
const {User, Product} = require('../models');
const {Op} = require('sequelize')

const authentication = (req, res, next)=>{
    const {token} = req.headers

    if(!token){
        next({name: 'EMPTY_TOKEN'})
    } else{
        const decode = verifyToken(token);
        req.userData = decode;

        User.findByPk(req.userData.id)
            .then(data=>{
                if(data){
                    next()
                } else{
                    next({name: "USERNAME_OR_EMAIL_NOT_FOUND"})
                }
            })

            .catch(err=>{
                next(err)
            })
    }
}

const authorization = (req, res, next) =>{
    const {id} = req.params;
    Product.findByPk(id)
        .then(data=>{
            if(data.UserId === req.userData.id && req.userData.role === 'admin'){
                next()
            } else{
                next({name: "NOT_AUTHORIZED"})
            }
        })

        .catch(err=> next(err))
}

module.exports = {authentication, authorization}