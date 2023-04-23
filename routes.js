const express = require('express');
const path = require('path');

const router = express.Router();

// jsx file
const index = path.join(__dirname, './build/index.html')

router.get('/', (req, res) => {
	res.sendFile(index);
});

router.get('/authcheck', (req, res) => {
	const sendData = { isLogin: "" };
    if (req.session.is_logined) {
        sendData.isLogin = "True"
    } else {
        sendData.isLogin = "False"
    }
    res.send(sendData);
});

router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

router.get('/community', (req, res) => {
	res.sendFile(index);
});

router.get('/community/post', (req, res) => {
	res.sendFile(index);
});

router.get('/community/posting', (req, res) => {
	res.sendFile(index);
});

router.get('/diary', (req, res) => {
	res.sendFile(index);
});

router.get('/diary/post', (req, res) => {
	res.sendFile(index);
});

router.get('/diary/posting', (req, res) => {
	res.sendFile(index);
});

router.get('/tip', (req, res) => {
	res.sendFile(index);
});

router.get('/tip/post', (req, res) => {
	res.sendFile(index);
});

router.get('/tip/posting', (req, res) => {
	res.sendFile(index);
});

router.get('/login', (req, res) => {
	res.sendFile(index);
});

router.get('/signup', (req, res) => {
	res.sendFile(index);
});

router.get('/mypage', (req, res) => {
	res.sendFile(index);
});

router.get('*', (req, res) => {
    console.log("존재하지 않는 페이지");
});

module.exports = router;