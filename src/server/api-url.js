export let BASE_URL = ''; //接口地址
switch (process.env.VUE_APP_CURENV) {
    case "test":
        BASE_URL = "//b-test.yunxi.tv"; //测试环境url
        break;
    case "development":
        BASE_URL = "//b-dev.yunxi.tv"; //开发环境url
        break;
    case "production":
        BASE_URL = "//b.yunxi.tv"; //生产环境url
        break;
}
