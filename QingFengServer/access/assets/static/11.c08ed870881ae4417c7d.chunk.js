webpackJsonp([11],{1e3:function(t,e,o){e=t.exports=o(185)(),e.push([t.i,"*{padding:0;margin:0;font-family:Microsoft YaHei}html{background-attachment:fixed}body{font-family:Microsoft YaHei;font-size:12px;background:#f3f3f3;color:#000;min-width:1140px}ol,ul{list-style:none}img{border:0}em,i{font-style:normal}table{border-collapse:collapse}:focus{outline:0}a{color:#333;text-decoration:none;cursor:pointer}a:hover{color:#ff6000;text-decoration:underline}.general{clear:both;overflow:hidden;width:1140px;margin:0 auto}.user_tit{margin-bottom:20px}.user_right .tab{clear:both;overflow:hidden;display:none}.user_right .tab.active{display:block}.left_menu{width:240px;float:left;background:#fff;margin-top:20px;border-bottom:1px solid #dfdfdf}.left_menu li{width:100%;float:left;height:65px;line-height:65px;border-bottom:1px solid #e6e6e6}.left_menu li a{width:100%;float:left;font-size:18px;text-align:center}.left_menu li a:hover{text-decoration:none}.left_menu li.hover a{color:#ff6200}.left_menu li.hover,.left_menu li:hover{background:#e73c44}.left_menu li.hover a,.left_menu li:hover a{color:#fff}.user_right{width:860px;float:right;background:#fff;margin-top:20px;border-bottom:1px solid #dfdfdf;padding-bottom:100px;text-indent:2em}.user_center_top{width:100%;float:left;border-bottom:1px solid #e6e6e6;padding:30px 0}.user_center_top .p1{width:100px;float:left;margin:0 30px 0 40px;display:inline}.user_center_top .p1 img{width:100px;height:100px;display:block;border-radius:50%}.user_center_top .p2{width:55%;float:left;color:#999;line-height:25px}.user_center_top .p2 span{color:#333;display:block;font-size:22px;font-weight:700;line-height:40px}.user_center_top .p3{width:20%;float:left;margin-top:30px}.user_center_top .p3 a{width:106px;height:34px;line-height:34px;color:#e54c3d;float:left;border:2px solid #e54c3d;font-size:14px;text-align:center}.user_center_top .p3 a:hover{color:#fff;background:#e54c3d;text-decoration:none}.user_tit{width:100%;float:left;font-size:24px;color:#333;line-height:40px;height:40px;margin-top:20px}.user_tit p{margin-left:15px;padding-left:15px;border-left:3px solid #e73c44}.user_tit p span{color:#f43f08}.user_c_list{width:100%;float:left;padding:15px 0 10px;height:480px;overflow:auto}.user_c_list li{width:80px;float:left;margin:15px 0 0 26px;display:inline}.user_c_list li a{display:block;font-size:14px;text-align:center}.user_c_list li a img{width:80px;height:80px;display:block}.user_c_list li a p{line-height:25px;height:25px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",""])},1034:function(t,e){t.exports='<my-header></my-header>\r\n\x3c!--导航--\x3e\t\r\n<div class="general">\r\n\t\x3c!--左边菜单--\x3e\r\n\t<div class="left_menu">\r\n\t\t<ul>\r\n\t\t\t<li class="" [ngClass]="currentBlock == \'about\' ? \'hover\' : \'\'">\r\n\t\t\t\t<a>关于我们</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="" [ngClass]="currentBlock == \'contact\' ? \'hover\' : \'\'">\r\n\t\t\t\t<a>联系我们</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="" [ngClass]="currentBlock == \'bussiness\' ? \'hover\' : \'\'">\r\n\t\t\t\t<a >商务合作</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\x3c!--右边--\x3e\r\n\t<div class="user_right" style="min-height: 377px; padding: 0 15px;">\r\n\t\t<div class="tab" [ngClass]="currentBlock == \'about\' ? \'active\' : \'\'">\r\n\t\t\t<div class="user_tit">\r\n\t\t\t\t<p>关于我们</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="about_us">\r\n\t\t\t\t<p [innerHTML]="aboutUsContent"></p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="tab" [ngClass]="currentBlock == \'contact\' ? \'active\' : \'\'">\r\n\t\t\t<div class="user_tit">\r\n\t\t\t\t<p>联系我们</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="about_us">\r\n\t\t\t\t<p [innerHTML]="contactUsContent"></p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="tab" [ngClass]="currentBlock == \'bussiness\' ? \'active\' : \'\'">\r\n\t\t\t<div class="user_tit">\r\n\t\t\t\t<p>商务合作</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="about_us">\r\n\t\t\t\t<p [innerHTML]="bussinessContent"></p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<my-footer></my-footer>'},1053:function(t,e,o){var n=o(1e3);t.exports="string"==typeof n?n:n.toString()},932:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(1),c=o(436),s=o(952),a=o(435),l=o(434),p=o(972),u=function(){function t(){}return t}();u=n([i.NgModule({imports:[c.SharedModule,a.HeaderModule,l.FooterModule,p.routing],declarations:[s.AboutComponent]}),r("design:paramtypes",[])],u),e.AboutModule=u},952:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(1),c=o(36),s=o(973),a=o(186),l=function(){function t(t,e,o,n){this.router=t,this.route=e,this.aboutService=o,this.commonService=n,this.currentBlock="about"}return t.prototype.ngAfterViewInit=function(){this.commonService.loadScript("assets/js/custody.js"),this.commonService.navSelect(0)},t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){e.type&&(t.currentBlock=e.type)}),this.aboutService.getAboutUsData().then(function(e){t.aboutUsContent=e.content}).catch(this.handleError),this.aboutService.getContactUsData().then(function(e){t.contactUsContent=e.content}).catch(this.handleError),this.aboutService.getBussinessData().then(function(e){t.bussinessContent=e.content}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("An error occurred",t),Promise.reject(t.message||t)},t}();l=n([i.Component({selector:"my-about",template:o(1034),styles:[o(1053)],providers:[s.AboutService]}),r("design:paramtypes",["function"==typeof(p=void 0!==c.Router&&c.Router)&&p||Object,"function"==typeof(u=void 0!==c.ActivatedRoute&&c.ActivatedRoute)&&u||Object,"function"==typeof(f=void 0!==s.AboutService&&s.AboutService)&&f||Object,"function"==typeof(d=void 0!==a.CommonService&&a.CommonService)&&d||Object])],l),e.AboutComponent=l;var p,u,f,d},972:function(t,e,o){"use strict";var n=o(36),r=o(952);e.routing=n.RouterModule.forChild([{path:"",children:[{path:"",component:r.AboutComponent},{path:":type",component:r.AboutComponent}]}])},973:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(1),c=o(56),s=o(126);o(68);var a=function(){function t(t){this.http=t,this.headers=new c.Headers({"Content-Type":"application/json"}),this.aboutUsUrl=s.AppUrlSettings.app_urls.ABOUT_US_URL,this.contactUrl=s.AppUrlSettings.app_urls.CONTACT_US_URL,this.bussniessUrl=s.AppUrlSettings.app_urls.BUSSINESS_URL}return t.prototype.getAboutUsData=function(){return this.http.get(this.aboutUsUrl).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.getContactUsData=function(){return this.http.get(this.contactUrl).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.getBussinessData=function(){return this.http.get(this.bussniessUrl).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("An error occurred",t),Promise.reject(t.message||t)},t}();a=n([i.Injectable(),r("design:paramtypes",["function"==typeof(l=void 0!==c.Http&&c.Http)&&l||Object])],a),e.AboutService=a;var l}});