const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../config.json');

const ctrlWelcome = require('../controllers/welcome');
const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/about');
const ctrlWorks = require('../controllers/works');

router.get('/welcome', ctrlWelcome.getWelcome);
router.get('/blog', ctrlBlog.getBlog);
router.get('/about', ctrlAbout.getAbout);
router.get('/works', ctrlWorks.getWorks);

router.get('/', (req, res, next) => {
    res.render('pages/works');
});

router.post('/', (req, res, next) => {
    //требуем наличия имени, обратной почты и текста
    if (!req.body.name || !req.body.email || !req.body.sms) {
        //если что-либо не указано - сообщаем об этом
        return res.json({ msg: 'Все поля нужно заполнить!', status: 'Error' });
    }
    //инициализируем модуль для отправки писем и указываем данные из конфига
    const transporter = nodemailer.createTransport(config.mail.smtp);
    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: config.mail.smtp.auth.user,
        subject: config.mail.subject,
        text:
            req.body.sms.trim().slice(0, 500) +
            `\n Отправлено с: <${req.body.email}>`
    };
    //отправляем почту
    transporter.sendMail(mailOptions, function (error, info) {
        //если есть ошибки при отправке - сообщаем об этом
        if (error) {
            return res.json({ msg: `При отправке письма произошла ошибка!: ${error}`, status: 'Error' });
        }
        res.json({ msg: 'Письмо успешно отправлено!', status: 'Ok' });
    });
});


module.exports = router;