// ==UserScript==
// @name         CSDN 限制移除
// @version      0.1
// @description  try to take over the world!
// @author       lawsssscat
// @match        https://*.csdn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

/**
 * 参考：
 * 1. https://github.com/cddchen/scripts/blob/8ef06ec744f6a3b2ff96223b6a39156ec569e74e/websiteDontDialog.js
 */

(function() {
    'use strict';

    // 文章完全显示
    GM_addStyle('.article_content{overflow:visible !important; height:auto !important;}');
    // 文章底部关注提示移除
    GM_addStyle('.hide-article-box{display:none !important}');

    // 文字/代码可选择和复制
    GM_addStyle('#content_views pre code{user-select:text !important}');
    GM_addStyle('#content_views pre{user-select:text !important}');
    GM_addStyle('#content_views{user-select:text !important}');
    setTimeout(() => {
        // $("#content_views").unbind("copy"); // 禁止：复制事件时，登录弹窗+事件阻止
        // 复制功能
        document.querySelector('.blog-content-box').addEventListener("copy", (e) => {
            e.stopPropagation()
            e.preventDefault()
            navigator.clipboard.writeText(window.getSelection().toString())
        }, true)
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.keyCode == 67) {
                e.stopPropagation()
                e.preventDefault()
                navigator.clipboard.writeText(window.getSelection().toString())
            }
        }, true);
        document.oncopy = null
        window.oncopy = null
    },500);
    // 文字复制按钮免登录（代码框，右上角，鼠标移入时显示）
    // todo

    // 评论可见
    // todo
})();
