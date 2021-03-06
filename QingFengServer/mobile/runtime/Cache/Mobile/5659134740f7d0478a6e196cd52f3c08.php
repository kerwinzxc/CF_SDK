<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html >
<head >
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
    <!--<meta name="viewport" content="width=device-width, initial-scale=0.5,maximum-scale=0.5, user-scalable=no" />-->
    <script type="text/javascript" src="/public/ios/js/jquery.min.js" ></script >
    <script type="text/javascript" src="/public/ios/js/view.js" ></script >
    <title ><?php echo C('BRAND_NAME');?>苹果助手</title >
    <style >
        body {
            padding: 0;
            margin: 0;
        }

        body {
            font-size: 12px;
            font-family: 微软雅黑;
            background: #FFFFFF;
            color: #333333;
        }

        .clearfix:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden
        }

        .clearfix {
            zoom: 1;
            display: inline-block;
            _height: 1px
        }

        * html .clearfix {
            height: 1%
        }

        * + html .clearfix {
            height: 1%
        }

        .clearfix {
            display: block
        }

        .main {
            width: 640px;
            height: 960px;
            margin: auto;
        }

        @media screen and (max-device-height: 480px) {
            /*针对iphone4高度适配样式*/
            .o_main {
                width: 640px;
                background: url('/public/ios/images/bg_2.jpg') no-repeat top center;
                padding-top: 622px;
                position: relative;
            }
        }

        @media screen and (min-device-height: 481px) {
            /*针对iphone4高度适配样式*/
            .o_main {
                width: 640px;
                background: url('/public/ios/images/bg.jpg') no-repeat top center;
                padding-top: 846px;
                position: relative;
            }
        }

        .btn {
            width: 352px;
            height: 84px;
            line-height: 84px;
            display: block;
            background: #FB4748;
            font-size: 36px;
            color: #FFFFFF;
            text-align: center;
            text-decoration: none;
            border-radius: 6px;
            margin: auto;
            margin-top: 42px;
        }

        .f_back_info {
            width: 340px;
            margin: auto;
            font-size: 20px;
            color: #888888;
            display: none
        }

        .f_back_info dt {
            width: 340px;
        }

        .f_back_info dd {
            width: 340px;
            margin: 0
        }

        #popweixin {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: fixed;
            z-index: 1000;
            background: rgba(0, 0, 0, .5);
            top: 0;
            left: 0;
            display: none;
        }

        #popweixin .tip {
            width: 100%;
            background: #FFFFFF;
            z-index: 1001;
            text-align: right;
        }

        .top2bottom {
            -webkit-animation: top2bottom 1.2s ease;
            -moz-animation: top2bottom 1.2s ease;
            -o-animation: top2bottom 1.2s ease;
            animation: top2bottom 1.2s ease;
            -webkit-animation-fill-mode: backwards;
            -moz-animation-fill-mode: backwards;
            -o-animation-fill-mode: backwards;
            animation-fill-mode: backwards
        }

        .animate-delay-1 {
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            -o-animation-delay: 1s;
            animation-delay: 1s
        }

        #zz {
            width: 100px;
            height: 100px;
            position: fixed;
            z-index: 99;
            background: #000000;
            filter: alpha(opacity=60);
            filter: progid:DXImageTransform.Microsoft.Alpha(opacity=60);
            -moz-opacity: 0.6;
            -khtml-opacity: 0.6;
            opacity: 0.6;
            display: none;
            left: 0;
            top: 0
        }

        #tongzhi {
            width: 400px;
            padding: 30px;
            height: 380px;
            position: fixed;
            z-index: 9999;
            background: #FFFFFF;
            border-radius: 5px
        }

        #tongzhi h1 {
            margin: 0;
            padding: 0;
            font-size: 38px;
            color: #666666;
            text-align: center;
        }

        #tongzhi p {
            font-size: 24px;
            color: #666666;
            text-indent: 30px;
            line-height: 1.5em;
            margin-top: 10px;
        }

        #tongzhi p span {
            color: #FF1C1C;
        }

        #close {
            width: 36px;
            height: 36px;
            position: absolute;
            z-index: 9999;
            background: url('/public/ios/images/closed.png') no-repeat;
            top: -15px;
            right: -15px;
        }

        #new_btn {
            width: 314px;
            height: 54px;
            line-height: 54px;
            background: #5DBBE3;
            color: #FFFFFF;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            display: block;
            text-decoration: none;
            border: 3px solid #34AADC;
            border-radius: 10px;
            margin: auto;
        }

        .ios9 {
            width: 100%;
            height: 196px;
            position: fixed;
            z-index: 9;
            top: 0;
            left: 0;
            background: rgba(53, 133, 131, 0.9);
            display: none
        }

        .ios9_box {
            width: 640px;
            height: 196px;
            margin: auto;
        }

        .ios9_box .info1 {
            width: 492px;
            padding: 16px 38px 16px 80px;
            height: 90px;
            line-height: 45px;
            font-size: 28px;
            color: #FFFFFF;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .ios9_box .info2 {
            width: 640px;
            height: 60px;
        }

        .ljxr_btn {
            width: 140px;
            height: 47px;
            line-height: 47px;
            display: block;
            margin: auto;
            background: #FFFFFF;
            border-radius: 6px;
            color: #F53334;
            font-size: 28px;
            text-align: center;
            text-decoration: none;
        }

        .rhxr {
            line-height: 57px;
            float: right;
            color: #FFFFFF;
            text-decoration: underline;
            font-size: 26px;
            margin-right: 100px;
        }

        .zs {
            color: #FFFFFF;
        }

        #only_safari {
            width: 580px;
            height: 400px;
            background: #FFFFFF;
            display: none;
            z-index: 99999;
            position: fixed;
            border-radius: 10px
        }

        #jump_closed, #jump_closed1 {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 20px;
            right: 20px;
            background: url('/public/ios/images/close.png') no-repeat;
            z-index: 99999
        }

        .safari_img {
            width: 165px;
            height: 165px;
            margin: auto;
            margin-top: 46px;
        }

        #only_safari dl {
            width: 400px;
            margin: auto;
        }

        #only_safari dl dt {
            color: #444444;
            font-size: 28px;
            text-align: center;
            margin-top: 18px;
            margin-bottom: 18px;
        }

        #only_safari dl dd {
            color: #666666;
            line-height: 36px;
            font-size: 24px;
            margin: 0
        }

        #only_safari dl dd span {
            color: #DD3435
        }

        .zhengshu {
            width: 430px;
            height: 68px;
            font-size: 30px;
            color: #FFFFFF;
            line-height: 68px;
            margin: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .zhengshu span {
            text-decoration: underline;
        }

        .zhengshu span a {
            font-size: 42px;
            color: #FFFFFF;
        }

        .xinren {
            width: 500px;
            padding: 0 70px;
            height: 30px;
            line-height: 30px;
            color: #FFFFFF;
            float: right;
            text-align: right;
            font-size: 30px;
            text-decoration: underline;
        }

        #baidu_select {
            width: 496px;
            height: 330px;
            background: #FFFFFF;
            display: none;
            z-index: 99999;
            position: fixed;
            border-radius: 10px
        }

        #baidu_select h2 {
            width: 496px;
            height: 60px;
            line-height: 60px;
            margin: auto;
            margin-top: 70px;
            font-size: 28px;
            color: #5A5A5A;
            text-align: center;
            font-weight: normal
        }

        #baidu_select p {
            width: 496px;
            height: 60px;
            line-height: 60px;
            margin: auto;
            font-size: 28px;
            color: #5A5A5A;
            font-weight: bold;
            text-align: center
        }

        #baidu_select span {
            padding-left: 55px;
            background: url("/public/ios/images/safari_icon.png") no-repeat;
            display: inline-block;
        }

        #copy_box {
            width: 408px;
            height: 60px;
            line-height: 60px;
            margin: auto;
            border: 3px solid #DCDCDC;
            border-radius: 6px;
        }

        #copy_box textarea#select_url {
            width: 250px;
            height: 60px;
            line-height: 60px;
            float: left;
            font-size: 20px;
            color: #5A5A5A;
            border: none;
            background: transparent
        }

        #copy_box #btn_copy {
            width: 150px;
            height: 60px;
            line-height: 60px;
            background: #448ACA;
            color: #FFFFFF;
            font-size: 24px;
            text-align: center;
            float: right;
            border-radius: 6px;
        }

        @-webkit-keyframes top2bottom {
            0% {
                -webkit-transform: translateY(-428px);
                opacity: .6
            }
            100% {
                -webkit-transform: translateY(0px);
                opacity: 1
            }
        }

        @keyframes top2bottom {
            0% {
                transform: translateY(-428px);
                opacity: .6
            }
            100% {
                transform: translateY(0px);
                opacity: 1
            }
    </style >
<link type="text/css" rel="stylesheet" href="/public/ios/css/weibo.css" />
<script type="text/javascript" src="/public/ios/js/mi1.js" ></script >
</head >
<body onload="checkJump(true)" >
<div id="zz" ></div >
<div id="baidu_select" >
    <div id="jump_closed1" ></div >
    <h2 >当前浏览器不能直接安装</h2 >
    <p >请用 safari <span >打开</span ></p >
    <div id="copy_box" >
        <textarea id="select_url" ></textarea >
        <div id="btn_copy" >复制链接</div >
    </div >
</div >
<div class="ios9" >
    <div class="ios9_box" >
        <div class="info1" >
            安装APP后，信任下证书，即可使用。<br />
            证书名称：<a href="<?php echo U('Game/apptrust');?>" class="zs">Management And Language Training S. R. O</a>
        </div >
        <div class="info2" >
            <a href="apptrust" class="rhxr nosafari" >如何信任?</a >
            <a href="<?php echo ($mobileprovision_url); ?>" id="ljxr_btn" class="ljxr_btn" >立即信任</a >
        </div >
    </div >
</div >
<div class="main" style="text-align:center;" >
    <div id='popweixin' >
        <div class='tip top2bottom animate-delay-1' id="weixinimg" >
        </div >
    </div >
    <div class="o_main clearfix" id="o_main" >
        <a href="javascript:void(0);" onclick="checkJump(false)" class="btn" id="setup_btn"
           style="background: #FB4748" >立即安装</a >
        <p style="font-size:20px; color:#868686; margin-top: 50px" >© 2017 <?php echo C('BRAND_NAME');?>苹果助手 ALL Right Reserved.版权所有</p >
    </div >
</div >
<script id="show" type="text/html" >
    <a href="" target="_blank" >
        <img id="adshowimage" src="" width="0" height="0" >
    </a >
</script >
<script id="notice" type="text/html" >
    <iframe id="noticeframe" src="" style="display:none;" frameBorder=0 ></iframe >
</script >
<script type="text/javascript" >
    var ios_bb  = 0;
    var isbdbox = false;
    function clickStat(mid) {
    }
    function banben() {
        var uaua  = navigator.userAgent;
        var ppgz  = /iPhone OS \d+_\d/;
        var pp    = new RegExp(ppgz);
        var hqbb  = uaua.match(pp);
        var hqbb  = hqbb.toString();
        var shuzi = /\d+_\d/;
        ios_bb    = hqbb.match(shuzi);
        ios_bb    = String(ios_bb);
        ios_bb    = Number(ios_bb.replace(/_/, "."));
        if (uaua.indexOf("baiduboxapp", 10) > 0) {
            isbdbox = true;
            select_jump();
        }

        if (ios_bb >= 9) {
            var ios9 = document.getElementsByClassName("ios9")[0];
            setTimeout(function () {
                ios9.style.display = 'block';
            }, 2000);
            if (ua.indexOf('safari', 10) < 0 || ua.indexOf('ucbrowser', 10) > 0 || ua.indexOf('baidubrowser', 10) > 0 || ua.indexOf('mqqbrowser', 10) > 0 || ua.indexOf('qhbrowser', 10) > 0 || ua.indexOf('crios', 10) > 0 || ua.indexOf('opios', 10) > 0) {
                var href = "apptrust?device=3";
                var nosafariArray    = document.getElementsByClassName("nosafari");
                for (var i = 0; i < nosafariArray.length; i ++) {
                    nosafariArray[i].setAttribute("href", href);
                }
            }
        }
    }
    banben();
    function checkJump(load) {
	    $("setup_btn").href = isbdbox?"javascript:select_jump();":(ua.indexOf('baidubrowser', 10) > 0?"javascript:baiduBrower();" :"<?php echo ($ios_app_down_url); ?>");
        if (load && (ios_bb < 9 || (ua.indexOf('safari', 10) < 0 || ua.indexOf('ucbrowser', 10) > 0 || ua.indexOf('baidubrowser', 10) > 0 || ua.indexOf('mqqbrowser', 10) > 0 || ua.indexOf('qhbrowser', 10) > 0 || ua.indexOf('crios', 10) > 0 || ua.indexOf('opios', 10) > 0))) {
            setTimeout(function () { window.location = "<?php echo ($ios_app_down_url); ?>";}, 300);
        }
        var imgurl = '/public/ios/images/wxins2.png';
        popPrompt(imgurl);
    }
    function baiduBrower() {
        setTimeout(function () {
            window.location = "<?php echo ($ios_app_down_url); ?>";
        }, 300);
    }
</script >
</body >
</html >