const Product = require('../models/Product');
const { mongoosesToObject } = require('../util/mongoose');

class SiteController{

    //[GET/register]
    register(req, res){
        res.render('register');
    }

    //[GET /login]
    login(req, res){
        res.render('login');
    }
    //[GET/HOME]
    home(req, res, next){
        Product.find({})
            .then(products => {
                res.render('home', {
                    products: mongoosesToObject(products)
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController;