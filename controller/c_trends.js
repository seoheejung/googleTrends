'use strict';

const dao = require('../dao/d_trends');

const getTrendsList = async ()=> {
    const fname = 'getTrendsList'
    try {
        const result =  await dao.getTrendsList()
        return result
    }
    catch (e) {
        console.log(' :: ' + fname + " : " + e)
    }
}

module.exports = {
    getTrendsList
}