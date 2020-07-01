const {Product, Transaction} = require('../models');
const {Op} = require('sequelize')

class ProductController{
    static addProduct(req, res, next){
        const newProduct = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock,
            UserId: req.body.UserId
        }

        if(process.env.NODE_ENV !== "test"){
            newProduct.UserId = req.userData.id
        }

        Product.create(newProduct)
            .then(data=>{
                res.status(201).json(data)
            })

            .catch(err=>{
                next(err)
            })
    }

    static getAll(req, res, next){
        Product.findAll({order:[["id", "ASC"]]})
            .then(data=>{
                res.status(200).json(data)
            })

            .catch(err=>{
                next(err)
            })
    }

    static getProductById(req, res, next){
        const id = req.params.id;
        Product.findByPk(id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                next(err);
            });
    }

    static updateProduct(req, res, next){
        const newProduct = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock,
            UserId: req.body.UserId
        }

        if(process.env.NODE_ENV !== "test"){
            newProduct.UserId = req.userData.id
        }

        const id = req.params.id

        Product.update(newProduct,{where:{id}})
            .then(data=>{
                res.status(200).json({message: "Data succesfuly updated."})
            })

            .catch(err=> next(err))
    }

    static deleteProduct(req, res, next){
        const id = req.params.id;
        Product.destroy({where:{id}})
            .then(data=>{
                res.status(200).json({message: "Data succesfuly deleted."})
            })

            .catch(err=> next(err))
    }

    static makeTransaction(req, res, next){
        const {id} = req.params
        const newTransaction = {
            UserId: req.body.UserId,
            ProductId: id,
            amount: Number(req.body.amount),
            status : 'to cart'
        }
        let transaction

        if(process.env.NODE_ENV !== "test"){
            newTransaction.UserId = req.userData.id
        }

        Transaction.create(newTransaction)
            .then(data=>{
                transaction = data
                return Product.findByPk(id)
            })

            .then(data=>{
                let stock = Number(data.stock) - Number(newTransaction.amount);
                return Product.update({
                    stock
                },{
                    where: {
                        id
                    }
                })
            })

            .then(data=>{
                res.status(201).json(transaction)
            })

            .catch(err=>{
                next(err)
            })
    }

    static deleteTransaction(req, res, next){
        const {id} = req.params;
        let amount;
        Transaction.findOne({
            where:{
                [Op.and]:[{
                    UserId: req.userData.id,
                },{
                    ProductId: id
                }]
            }
        })

            .then(data=>{
                amount = data.amount;
                return Transaction.destroy({
                    where:{
                        [Op.and]:[{
                            ProductId: id
                        },{
                            UserId: req.userData.id
                        },{
                            status: 'to cart'
                        }]
                    }
                })
            })
        
            .then(data=>{
                return Product.findByPk(id)
            })

            .then(data=>{
                let stock = Number(data.stock) + Number(amount)
                return Product.update({
                    stock
                },{
                    where:{id}
                })
            })

            .then(()=>{
                res.status(200).json({message: 'data successfully deleted'})
            })

            .catch(err=>{
                next(err)
            })
    }
}

module.exports = ProductController