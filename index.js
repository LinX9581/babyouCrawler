var request = require("request");
var cheerio = require("cheerio");

var options = {
    method: 'GET',
    url: 'https://babyou.nownews.com/opencms/channel1/index.html?pageIndex=2',
    headers: {}
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var $ = cheerio.load(body)
        // var link = $(".Blk a").attr("href")

    var link = $(".Blk a").map((index, obj) => {
        return $(obj).attr('href');
    }).get();

    for (let i = 0; i <= link.length - 1; i += 3) {
        // console.log(i)
        // console.log(link[i]);
        var optionss = {
            method: 'GET',
            url: 'https://babyou.nownews.com' + link[i],
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            }
        };
        // console.log(optionss.url)
        request(optionss, function(error, response, body) {
            if (error) throw new Error(error);
            var $ = cheerio.load(body)
            var title = $(".title").eq(2).text()
            console.log(title)
        })
    }
    // console.log(body);
    // https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/276859/
    // https://babyou.nownews.com
});