const express = require('express');
const router = express.Router();

const productEnroll = require('./controller/productEnroll')

const passport = require('passport');
router.use(passport.initialize());
router.use(passport.session());
router.use('/Enroll',productEnroll)
router.get('/', (req, res) => res.json({data:'this is index.'}));





module.exports = router;