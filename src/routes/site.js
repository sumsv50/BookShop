const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/register', siteController.register);
router.get('/login', siteController.login);
router.get('//', siteController.home);

module.exports = router;