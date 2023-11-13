'use strict';

const Parser = require('rss-parser');
const parser = new Parser();

const getTrendsList = async ()=> {
    const fname = 'getTrendsList'
    const sourceUrl = 'https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR'
    const result = {}
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    try {
        const feed = await parser.parseURL(sourceUrl)
        result.feedTitle = feed.title
        result.date = date
        result.items = []
        let cnt = 1
        feed.items.forEach(item => {
            let itemObject = {}
            itemObject.index = cnt
            itemObject.title = item.title
            itemObject.content = item.content
            itemObject.isoDate = item.isoDate
            itemObject.pubDate = item.pubDate
            cnt++
            result.items.push(itemObject)
        })
        return result
    }
    catch (e) {
        console.log(' :: ' + fname + " : " + e)
    }
}

module.exports = {
    getTrendsList,
}