const Product = require('../models/Product');


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
                products = products.map(products => products.toObject())
                res.render('home', { products });
            })
            .catch(next);
    }
}

module.exports = new SiteController;