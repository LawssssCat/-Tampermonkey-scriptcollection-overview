// ==UserScript==
// @name         Image Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  下载图片
// @author       lawsssscat
// @match        https://telegra.ph/*
// @grant        GM_xmlhttpRequest
// @require      https://cdn.bootcss.com/jszip/3.7.1/jszip.min.js
// @require      https://cdn.bootcss.com/FileSaver.js/1.3.8/FileSaver.min.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // ===== functions =====
    function getImgBase64(img_url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "get",
                url: img_url,
                responseType: "blob",
                onload: function (r) {
                    var blob = r.response;
                    let oFileReader = new FileReader();
                    oFileReader.onloadend = function (e) {
                        let base64 = e.target.result;
                        // console.log("img_base64", img_url,base64);
                        resolve(base64);
                    };
                    oFileReader.readAsDataURL(blob);
                    //imgZip.file(filename+".jpg",r.response);
                    //console.log(r.response);
                }
            });
        });
    }
    function getImgName(img_url, index) {
        var url = img_url;
        if (url.indexOf('?') > 0) {
            url = url.split('?')[0];
        }
        if (url.indexOf('#') > 0) {
            url = url.split('#')[0];
        }
        var filename = url.substring(
            url.lastIndexOf('/') + 1,
            url.length
        );
        return index + "-" + filename;
    }
    // ===== interface =====
    unsafeWindow.find_img_all=function find_img_all() {
        var img_all=[];
        document.querySelectorAll('img').forEach(xx => {img_all.push(xx.src)});
        return img_all;
    }
    unsafeWindow.download_img_zip=function download_img_zip(img_url_array,zip_name) {
        // from jszip.min.js
        var zipFolder = new JSZip();
        if(!zip_name) {
            zip_name="imgs.zip";
        }
        if(!img_url_array || !img_url_array.length) {
            console.log("fail: empty img url array!");
            return
        }
        console.log("wait...");
        var img_obj_map = {};
        var promise_array = [];
        img_url_array.forEach((img_url, i) => {
            promise_array[i] = getImgBase64(img_url).then((base64) => {
                // ok!
                img_obj_map[img_url] = {
                    name: getImgName(img_url, i),
                    base64: base64
                };
            }, (e) => {
                // fail
                console.error(e);
            });
        });
        console.log("download...");
        Promise.all(promise_array).then(() => {
            for (var img_url in img_obj_map) {
                var img_obj = img_obj_map[img_url];
                zipFolder.file(img_obj.name, img_obj.base64.split(",")[1], {base64:true});
            }
            console.log("packing...");
            zipFolder.generateAsync({type:"blob"}).then(function(content) {
                console.log("saving...");
                // see FileSaver.js
                saveAs(content, zip_name);
                console.log("ok!");
            });
        });
    }
    unsafeWindow.download_img_all_zip=function download_img_all_zip() {
        download_img_zip(find_img_all(),'img_all.zip');
    }
    unsafeWindow.help_img_functions = function help_img_functions() {
        console.table({
            find_img_all: "find all img urls",
            download_img_zip: "download, needs \"img_url_array,zip_name\"",
            download_img_all_zip: "download all img"
        });
    }
    console.log('load Image Downloader! run \"help_img_functions()\" for more.');
})();