// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        name: '天涯资源',
    },
        xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
        lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    ffzy: {
        api: 'http://ffzy5.tv',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    zy360: {
        api: 'https://360zy.com',
        name: '360资源',
    },
    wolong: {
        api: 'https://wolongzyw.com',
        name: '卧龙资源',
    },
    hwba: {
        api: 'https://cjhwba.com',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.com',
        name: '豆瓣资源',
    },
    huya: {
        api: 'https://www.huyaapi.com',
        name: '虎牙资源',
        detail: 'https://www.huyaapi.com',
    },
    mozhua: {
        api: 'https://mozhuazy.com',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
 ckzy: {
    //     api: 'https://www.ckzy1.com',
    //     name: 'CK资源',
@@ -227,5 +239,5 @@
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 新增隐藏内置黄色采集站API的变量，默认为true
const HIDE_BUILTIN_ADULT_APIS = true;
// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
