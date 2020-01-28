// ==UserScript==
// @name         微信读书阅读样式 
// @version      0.06
// @description  微信读书阅读样式 自定义
// @author       By Jackie http://csdn.admans.cn/
// @match        *://weread.qq.com/web/reader/*
// @grant    GM_addStyle
// @namespace https://greasyfork.org/users/164689
// @supportURL   https://github.com/JackieZheng/WeReadStyle/issues
// ==/UserScript==

GM_addStyle(".readerControls_fontSize,.readerControls_item{background-color: #3e5b94ba !important;}");
GM_addStyle(".renderTargetContainer{padding:0 40px !important;}");
GM_addStyle(".readerControls{margin-left: calc(50% - 60px) !important;}");
GM_addStyle(".app_content{width:100%;max-width:100% !important;padding-top:0;}");
GM_addStyle(".readerTopBar{width:100%;max-width:100% !important;left:0;}");
GM_addStyle(".readerNotePanel,.readerCatalog{left:20%;width:60% !important;margin:0 auto;}");
GM_addStyle(".readerChapterContent.navBarOffset {padding-top:20px !important;}");
 
(function(){
        'use strict'; 
        document.onclick=function(event){
            console.log(event.target);
            if(event.target&&hasClassName(event.target,"icon"))
            {
              return false;
            }
            if(document.getElementsByClassName("readerTopBar")[0].style.display=='none')
            {
                document.getElementsByClassName("readerTopBar")[0].style.display='flex';
                document.getElementsByClassName("readerControls")[0].style.display='flex';            
            }
            else
            {
                document.getElementsByClassName("readerTopBar")[0].style.display='none';
                document.getElementsByClassName("readerControls")[0].style.display='none';    
            }
        }       



})();

function hasClassName(obj,name){
    let tmpName = obj.className;
    let tmpReg = new RegExp(name,'g');
    if(tmpReg.test(tmpName)){
        return true;
    }else{
        return false;
    }
}

