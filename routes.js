const express = require('express');
const path = require('path');

const router = express.Router();

// jsx file
const my_page = path.resolve(__dirname, './src/page/MyPage');
const co_list = path.resolve(__dirname, './src/page/community/CommunityList');
const co_post = path.resolve(__dirname, './src/page/community/CommunityPost');
const co_posting = path.resolve(__dirname, './src/page/community/CommunityPosting');
const di_list = path.resolve(__dirname, './src/page/diary/DiaryList');
const di_post = path.resolve(__dirname, './src/page/diary/DiaryPost');
const di_posting = path.resolve(__dirname, './src/page/diary/DiaryPosting');
const ti_list = path.resolve(__dirname, './src/page/tip/TipList');
const ti_post = path.resolve(__dirname, './src/page/tip/TipPost');
const ti_posting = path.resolve(__dirname, './src/page/tip/TipPosting');

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './build/index.html'));
});

router.get('/community', (req, res) => {
	res.sendFile(co_list);
});

router.get('/community/post', (req, res) => {
	res.sendFile(co_post);
});

router.get('/community/posting', (req, res) => {
	res.sendFile(co_posting);
});

router.get('/diary', (req, res) => {
	res.sendFile(di_list);
});

router.get('/diary/post', (req, res) => {
	res.sendFile(di_post);
});

router.get('/diary/posting', (req, res) => {
	res.sendFile(di_posting);
});

router.get('/tip', (req, res) => {
	res.sendFile(ti_list);
});

router.get('/tip/post', (req, res) => {
	res.sendFile(ti_post);
});

router.get('/tip/posting', (req, res) => {
	res.sendFile(ti_posting);
});

router.get('/mypage', (req, res) => {
	res.sendFile(my_page);
});

router.get('*', (req, res) => {
    console.log("존재하지 않는 페이지");
});

module.exports = router;