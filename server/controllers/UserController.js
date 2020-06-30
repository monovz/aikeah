const {User} = require('../models');
const {Op} = require('sequelize');
const {comparePassword} = require('../helper/password')
const {generateToken} = require('../helper/token')

class UserController{
    static register(req, res, next){
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }

        User.create(newUser)
            .then(data=>{
                res.status(201).json(data)
            })

            .catch(err=>{
                next(err)
            })

    }

    static login(req, res, next){
        const user = {
            username: req.body.username,
            password: req.body.password
        }

        User.findOne({
            where:{
                [Op.or]:[{
                    username: user.username
                },{
                    email: user.username
                }]
            }
        })
            .then(data=>{
                if(data){
                    if(comparePassword(user.password, data.password)){
                        const token = generateToken(data.id, data.username, data.email, data.role);
                        res.status(200).json({token, id: data.id, username: data.username, email: data.email})
                    } else{
                        next({name: "INVALID_PASSWORD"})
                    }
                } else{
                    next({name: "USERNAME_OR_EMAIL_NOT_FOUND"})
                }
            })

            .catch(err=>{
                next(err)
            })
    }
}

module.exports = UserController