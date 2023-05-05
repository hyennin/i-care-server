const express = require('express');
const path = require('path');

const router = express.Router();

// 프로덕션 환경에서만 적용되는 라우터 경로
if (process.env.NODE_ENV === 'production') {
	const index = path.join(__dirname, './build/index.html');
	
	router.get('*', (req, res) => {
	  res.sendFile(index);
	});
} else {
    console.log("프로덕션 환경이 아님");
}

router.get('/authcheck', (req, res) => {
	const sendData = { isLogin: false };
    if (req.session.is_logined) sendData.isLogin = true
    res.send(sendData);
});

router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

module.exports = router;