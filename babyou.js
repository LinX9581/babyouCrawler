var request = require("request");
var cheerio = require("cheerio");
var options = {
    method: 'GET',
    url: 'https://babyou.nownews.com/opencms/channel1/Article005221.html?pageCount=2&pageIndex=2',
    headers: {

        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var $ = cheerio.load(body)
    var time = $(".group>.postTime").html()
    var title = $(".title").eq(2).text()
    var content = $("#articleContent").text()


    console.log(time)
    console.log(title)
    console.log(content)
        // console.log(body);
        // console.log(body);
});