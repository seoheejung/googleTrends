
'use strict';

const express = require('express');
const router = express.Router();
const constRes = require('../constant/response');
const ctrlr = require('../controller/c_trends');

router.get('/', async function (req, res, next) {
    console.log(' :: post >>', req.originalUrl)
    // 반환 데이터 생성
    let resData = constRes.getResponseData()

    try {
        // const reqParams = req.body
        const result = await ctrlr.getTrendsList()
        resData.resultData = result
    }
    catch (e) {
        console.log(' ::  :: post >>> e', e)
        resData.resultCode = '500'
        resData.resultMsg = e
    }
    res.render('index', resData)
})


module.exports = router;
