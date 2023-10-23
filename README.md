## 安装

打开 `*.user.js` 文件 raw 格式，[tampermonkey](https://www.tampermonkey.net/) 将识别并弹出安装界面

## 原则

1. ✔精简的脚本、✔单一的功能 —— ❌集中的脚本、❌多余的功能
1. 仓库命名方式 `Tampermonkey-scriptcollection-<username>`

## 脚本

+ https://github.com/LawssssCat/Tampermonkey-scriptcollection-injahow/
    + bilibili 视频下载
        + https://github.com/LawssssCat/Tampermonkey-scriptcollection-injahow/blob/main/bilibili-parse-download/dist/bilibili-parse-download.user.js
+ https://github.com/LawssssCat/Tampermonkey-scriptcollection-Ahaochan
    + pixiv 增强
        + https://github.com/LawssssCat/Tampermonkey-scriptcollection-Ahaochan/blob/master/Pixiv%20%E5%A2%9E%E5%BC%BA.user.js
            + [ ] 功能拆分❓
+ ~~https://github.com/LawssssCat/Tampermonkey-scriptcollection-taoyuancun123~~
    + 图片搜刮
        + ~~https://github.com/LawssssCat/Tampermonkey-scriptcollection-taoyuancun123/blob/master/ImageDownloader.user.js~~
            + [ ] 能用，不完善，换❓，改❓
+ https://github.com/LawssssCat/Tampermonkey-scriptcollection-xiu2
+ https://github.com/LawssssCat/Tampermonkey-scriptcollection-Yuhanawa-
    + CSDN 解除限制
        + [ ] 功能拆分❓
+ https://github.com/LawssssCat/PTMyBonusCalc
    + pt 魔力计算
+ [local](user.js/)
    + CSDN 限制解除
        + [user.js/csdn_restrictless.user.js](user.js/csdn_restrictless.user.js)
    + 图片搜刮
        + [user.js/image-download.user.js](user.js/image-download.user.js) —— console run `download_img_all_zip()`： 下载页面全部`<img>`资源，且打包为`zip`
