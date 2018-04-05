const express = require('express');
const router = express.Router();

const ctrlWelcome = require('../controllers/welcome');
const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/about');
const ctrlWorks = require('../controllers/works');

router.get('/welcome', ctrlWelcome.getWelcome);
router.get('/blog', ctrlBlog.getBlog);
router.get('/about', ctrlAbout.getAbout);
router.get('/works', ctrlWorks.getWorks);

router.post('/mail', ctrlWorks.sendEmail);

module.exports = router;