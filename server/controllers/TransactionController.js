const { Transaction } = require('../models');
const {Op} = require('sequelize');

class TransactionController{
    static getUserTransaction(req, res, next) {
        Transaction.findAll({
            where:{
                UserId: req.userData.id
            }
        })

            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
    }

    static updateTransaction(req, res, next) {
        Transaction.update({
            status: 'finished'
        },{
            where:{
                [Op.and]: [{
                    UserId: req.userData.id
                },{
                    status: 'to cart'
                }]
            }
        })

            .then(data=>{
                res.status(200).json({message: 'Product succesfully paid.'})
            })

            .catch(err=>{
                next(err)
            })
    }
}

module.exports = TransactionController;