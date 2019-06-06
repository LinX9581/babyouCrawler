var request = require("request");
var cheerio = require("cheerio");

var getBabyouArticle = function(categories, pageFirst, pageEnd) {
    for (let page = pageFirst; page <= pageEnd; page++) {
        switch (categories) {
            case '淘心話':
                url = 'https://babyou.nownews.com/opencms/channel1/index.html?pageIndex=' + page
                break;
            case '淘情慾':
                url = 'https://babyou.nownews.com/opencms/channel2/index.html?pageIndex=' + page
                break;
            case '淘美麗':
                url = 'https://babyou.nownews.com/opencms/channel3/index.html?pageIndex=' + page
                break;
            case '淘星聞':
                url = 'https://babyou.nownews.com/opencms/channel4/index.html?pageIndex=' + page
                break;
        }

        var options = {
            method: 'GET',
            url: url,
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
                var optionss = {
                    method: 'GET',
                    url: 'https://babyou.nownews.com' + link[i],
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
                    }
                };

                request(optionss, function(error, response, body) {
                    if (error) throw new Error(error);
                    var $ = cheerio.load(body)
                    var title = $(".title").eq(2).text()
                    console.log(title)
                    console.log(optionss.url)
                })
            }
        });
    }
}
getBabyouArticle('淘情慾', 1, 3)