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
    home(req, res){
        res.render('home');
    }

}

module.exports = new SiteController;