import Koa from "koa";
import axios from "axios";
import querystring from 'querystring';

const app = new Koa();
app.use(async ctx => {
  // const name = "binyellow";
  try {
    const result = await axios({
      url: 'http://www.zhmdy.top/music/',
      method: 'post',
      data: querystring.stringify({
        input: '周杰伦',
        filter: 'name',
        type: 'qq',
        page: 5,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Host': 'www.zhmdy.top',
        'Connection': 'keep - alive',
        'Content-Length': '60',
        'Pragma': 'no - cache',
        'Cache-Control': 'no - cache',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Origin': 'http: //www.zhmdy.top',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
        'Accept-Encoding': 'gzip',
      },
    });
    console.log(result.data.data);
    ctx.body = result.data.data;
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => console.log(3000));
// fetch("http://www.zhmdy.top/music/", {"credentials":"omit","headers":{"accept":"application/json, text/javascript, */*; q=0.01","accept-language":"zh-CN,zh;q=0.9,en;q=0.8","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded; charset=UTF-8","pragma":"no-cache","x-requested-with":"XMLHttpRequest"},"referrer":"http://www.zhmdy.top/music/?name=%E5%91%A8%E6%9D%B0%E4%BC%A6&type=qq","referrerPolicy":"no-referrer-when-downgrade","body":"input=%E5%91%A8%E6%9D%B0%E4%BC%A6&filter=name&type=qq&page=2","method":"POST","mode":"cors"});