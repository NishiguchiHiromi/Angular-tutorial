const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.send('これはサーバサイドスクリプトだよ');
});

module.exports = router;
