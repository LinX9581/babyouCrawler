var request = require("request");
var cheerio = require("cheerio");

var options = {
    method: 'GET',
    url: 'https://babyou.nownews.com/opencms/channel1/',
    headers: {}
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var $ = cheerio.load(body)
        // var link = $(".Blk a").attr("href")

    var link = $(".Blk a")
        .map((index, obj) => {
            return $(obj).attr('href');
        })
        .get();
    console.log(link);
    // console.log(body);
    // https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/276859/
});