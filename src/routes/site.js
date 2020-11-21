const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.use('/register', siteController.register);
router.use('/login', siteController.login);
router.use('//', siteController.home);

module.exports = router;