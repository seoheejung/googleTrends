'use strict';

/**
 * resultCode = 200: success, 400: fail etc, 500: error etc
 * resultMsg = Debug용 정보
 * resultData = JSON 결과 값, success 인 경우 정상데이터, fail or error 인 경우 해당 정보 포맷
 * 
 */
const getResponseData = (params)=> {
    return {
        resultCode : '200', 
        resultMsg : '',
        resultData : null,
    };
}


module.exports = {
    getResponseData,
}