webpackJsonp([3,6],{"+AjF":function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,"nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:10px}nav .navigation{height:100%;margin-right:20px}nav .navigation a{color:#fff;font-size:18px;margin:0 15px;text-decoration:none}",""]),e.exports=e.exports.toString()},"0CML":function(e,t,o){"use strict";var n=o("3j3K"),r=o("Fzro"),i=o("5oXY"),a=o("Gvdl"),c=(o.n(a),o("RtOi"));o.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t){this.http=e,this.router=t,this._authenticated=!1,this._state=new a.BehaviorSubject({})}return e.prototype.setUserState=function(e){this._authenticated=!0,this._state.next(e)},e.prototype.getUserState=function(){return this._state},Object.defineProperty(e.prototype,"isLoggedIn",{get:function(){return localStorage.getItem("token")},enumerable:!0,configurable:!0}),e.prototype.login=function(e,t){if(console.log("user"),console.log(e),e){var o={photo:null,fullName:null};if(t&&"google"===t)o.photo=e.Paa,o.fullName=e.ig,localStorage.setItem("token",e.token);else{if(!t||"auth"!==t){var n=new r.b({"Content-Type":"application/json"}),i=new r.c({headers:n});return this.http.post(c.a.BACKEND_URL.API+"/auth/login",e,i).map(function(e){return e.json()})}o.photo=e.picture,o.fullName=e.name,localStorage.setItem("token",e.token)}return localStorage.setItem("user_profile",JSON.stringify(o)),a.Observable.create(function(e){e.next(o)})}},e.prototype.register=function(e){var t={email:e.email,password:e.password,firstName:e.firstName,lastName:e.lastName};return this.http.post(c.a.BACKEND_URL.API+"/auth/register",t).map(function(e){return e.json()})},e.prototype.getUserProfile=function(){return a.Observable.create(function(e){e.next(JSON.parse(localStorage.getItem("user_profile")))})},e.prototype.logout=function(){this._authenticated=!1,this._state.next({}),localStorage.removeItem("user_profile"),localStorage.removeItem("token")},e}();l=s([o.i(n.c)(),f("design:paramtypes",["function"==typeof(u=void 0!==r.d&&r.d)&&u||Object,"function"==typeof(p=void 0!==i.b&&i.b)&&p||Object])],l);var u,p},1:function(e,t,o){e.exports=o("x35b")},"1HY1":function(e,t){e.exports='<div class="header">\n  <a href="" routerLink="/home">\n    <img src="../../assets/images/logo.png" alt="logo">\n  </a>\n  <navigation></navigation>\n</div>\n'},"26y0":function(e,t,o){"use strict";var n=o("3j3K"),r=o("5oXY"),i=o("0CML");o.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t){this.auth=e,this.router=t}return Object.defineProperty(e.prototype,"isLoggedIn",{get:function(){return this.auth.isLoggedIn},enumerable:!0,configurable:!0}),e.prototype.logout=function(){this.auth.logout(),this.router.navigate(["auth/login"])},e}();s=a([o.i(n._11)({selector:"navigation",template:o("TCIf"),styles:[o("+AjF")]}),c("design:paramtypes",["function"==typeof(f=void 0!==i.a&&i.a)&&f||Object,"function"==typeof(l=void 0!==r.b&&r.b)&&l||Object])],s);var f,l},"2JcE":function(e,t,o){"use strict";var n=o("3j3K");o.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},i=function(){function e(){}return e}();i=r([o.i(n._11)({selector:"ct-footer",template:o("aPr3"),styles:[o("sowk")]})],i)},"37/x":function(e,t){e.exports='<div class="home-wrapper">\n  <div class="home-welcome">\n    <h1>Welcome to</h1>\n    <img src="assets/images/logo_dark.png" alt="logo">\n    <h2 *ngIf="!isLoggedIn()">To start using service:</h2>\n  </div>\n  <div class="home-actions" *ngIf="!isLoggedIn()">\n    <div class="home-login">\n      <h3>If you have an account - please Log In</h3>\n      <button class="action-button" routerLink="/auth/login">LOG IN</button>\n    </div>\n    <div class="home-register">\n      <h3>If you haven\'t - please Register</h3>\n      <button class="action-button" routerLink="/auth/register">REGISTER</button>\n    </div>\n  </div>\n</div>\n'},"5xMp":function(e,t){e.exports='<div class="app-wrapper">\n  <ct-header></ct-header>\n  <router-outlet></router-outlet>\n  <ct-footer></ct-footer>\n  <simple-notifications [options]="notificationOptions"></simple-notifications>\n</div>\n'},"6vMo":function(e,t,o){"use strict";var n=o("3j3K");o.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},i=function(){function e(){}return e}();i=r([o.i(n._11)({template:"<h2>Page not found</h2>"})],i)},AgbD:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".user-profile__wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.user-profile__wrapper,.user-profile__wrapper .user-profile__photo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.user-profile__wrapper .user-profile__photo{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border-radius:50%;color:#fff;font-size:24px;background-color:rgba(0,0,0,.5);background-repeat:no-repeat!important;background-position:50%!important;background-size:cover!important}.user-profile__wrapper .user-profile__name{color:#fff;font-weight:700}",""]),e.exports=e.exports.toString()},Cd9f:function(e,t,o){"use strict";var n=o("3j3K"),r=o("5oXY"),i=o("hAkB"),a=o("6vMo"),c=o("OKNI");o.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},f=[{path:"home",component:i.a},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"chat",loadChildren:"app/chats/chats.module#ChatsModule",canActivate:[c.a]},{path:"auth",loadChildren:"app/auth/auth.module#AuthModule"},{path:"**",component:a.a}],l=function(){function e(){}return e}();l=s([o.i(n.b)({imports:[r.a.forRoot(f,{preloadingStrategy:r.d})],exports:[r.a]})],l)},Iksp:function(e,t,o){"use strict";var n=o("3j3K"),r=o("Fzro"),i=o("Qbdm"),a=o("Cd9f"),c=o("u87A"),s=o("KN8t"),f=o("3MNG"),l=o("YWx4"),u=o("hAkB"),p=o("6vMo");o.d(t,"a",function(){return d});var h=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},d=function(){function e(){}return e}();d=h([o.i(n.b)({declarations:[l.a,u.a,p.a],imports:[i.a,c.a,a.a,r.a,f.a.forRoot(),s.a],providers:[],bootstrap:[l.a]})],d)},JJ92:function(e,t,o){"use strict";var n=o("3j3K"),r=o("0CML");o.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.auth=e,this.profile={fullName:"",photo:""},this.subscriptions=[]}return e.prototype.ngOnInit=function(){var e=this;this.subscriptions.push(this.auth.getUserState().subscribe(function(t){e.profile=t}))},e.prototype.ngOnDestroy=function(){this.subscriptions.map(function(e){return e.unsubscribe()})},e.prototype.ngAfterContentInit=function(){var e=this;this.subscriptions.push(this.auth.getUserProfile().subscribe(function(t){e.profile.fullName=t.firstName+" "+t.lastName}))},e}();c=i([o.i(n._11)({selector:"user-profile",template:o("r558"),styles:[o("AgbD")]}),a("design:paramtypes",["function"==typeof(s=void 0!==r.a&&r.a)&&s||Object])],c);var s},MOVZ:function(e,t,o){function n(e){var t=r[e];return t?o.e(t[1]).then(function(){return o(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"app/auth/auth.module":["FQYD",1],"app/chats/chats.module":["Um1I",0]};n.keys=function(){return Object.keys(r)},e.exports=n,n.id="MOVZ"},OKNI:function(e,t,o){"use strict";var n=o("3j3K"),r=o("5oXY"),i=o("0CML");o.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.canActivate=function(e,t){var o=t.url;return this.checkLogin(o)},e.prototype.checkLogin=function(e){return!!this.authService.isLoggedIn||(this.authService.redirectUrl=e,this.router.navigate(["/auth/login"]),!1)},e}();s=a([o.i(n.c)(),c("design:paramtypes",["function"==typeof(f=void 0!==i.a&&i.a)&&f||Object,"function"==typeof(l=void 0!==r.b&&r.b)&&l||Object])],s);var f,l},OL4t:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:60px;background-color:#3b3e99}.header a img{width:200px;height:auto}",""]),e.exports=e.exports.toString()},RtOi:function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n={SOCKET:{LINK:"https://eleks-chatster.herokuapp.com"},BACKEND_URL:{API:"https://eleks-chatster.herokuapp.com/api"}}},TCIf:function(e,t){e.exports='<nav>\n  <ul class="navigation">\n    <a routerLink="/" routerLinkActive="active">Home</a>\n    <a routerLink="/chat" routerLinkActive="active" *ngIf="isLoggedIn">Chats</a>\n    <a routerLink="/auth/login" routerLinkActive="active" *ngIf="!isLoggedIn">Login</a>\n    <a routerLink="/auth/register" routerLinkActive="active" *ngIf="!isLoggedIn">Register</a>\n    <a routerLink="/home" routerLinkActive="active" *ngIf="isLoggedIn" (click)="logout()">Logout</a>\n  </ul>\n  <user-profile *ngIf="isLoggedIn"></user-profile>\n</nav>\n'},ULsH:function(e,t,o){"use strict";var n=o("3j3K");o.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},i=function(){function e(){}return e}();i=r([o.i(n._11)({selector:"ct-header",template:o("1HY1"),styles:[o("OL4t")]})],i)},Y7RK:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".home-welcome,.home-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:50px}.home-welcome .home-welcome img,.home-wrapper .home-welcome img{max-width:100%}.home-welcome .home-actions,.home-wrapper .home-actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:80%}.home-welcome .home-actions .home-login,.home-welcome .home-actions .home-register,.home-wrapper .home-actions .home-login,.home-wrapper .home-actions .home-register{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:100px;width:50%}.home-welcome .home-actions .home-login .action-button,.home-welcome .home-actions .home-register .action-button,.home-wrapper .home-actions .home-login .action-button,.home-wrapper .home-actions .home-register .action-button{width:100px;height:40px;margin-top:20px;background-color:#3b3e99;border:none;border-radius:5px;color:#fff;box-shadow:3px 3px 12px 1px rgba(0,0,0,.5);transition:box-shadow .2s linear;outline:none}.home-welcome .home-actions .home-login .action-button:hover,.home-welcome .home-actions .home-register .action-button:hover,.home-wrapper .home-actions .home-login .action-button:hover,.home-wrapper .home-actions .home-register .action-button:hover{box-shadow:5px 5px 12px 2px rgba(0,0,0,.5)}@media (max-width:1000px){.home-welcome .home-actions,.home-wrapper .home-actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%}.home-welcome .home-actions .home-login,.home-welcome .home-actions .home-register,.home-wrapper .home-actions .home-login,.home-wrapper .home-actions .home-register{width:90%}}",""]),e.exports=e.exports.toString()},YWx4:function(e,t,o){"use strict";var n=o("3j3K");o.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},i=function(){function e(){this.title="app works!",this.notificationOptions={showProgressBar:!1,timeOut:5e3,preventDuplicates:!0}}return e}();i=r([o.i(n._11)({selector:"app-root",template:o("5xMp"),styles:[o("sQHO")]})],i)},aPr3:function(e,t){e.exports="<footer>\n  <p>ELEKS &copy; 2017</p>\n</footer>\n"},aupE:function(e,t,o){"use strict";var n=o("JJ92");o.d(t,"a",function(){return n.a})},hAkB:function(e,t,o){"use strict";var n=o("3j3K"),r=o("0CML");o.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.auth=e}return e.prototype.isLoggedIn=function(){return this.auth.isLoggedIn},e}();c=i([o.i(n._11)({template:o("37/x"),styles:[o("Y7RK")]}),a("design:paramtypes",["function"==typeof(s=void 0!==r.a&&r.a)&&s||Object])],c);var s},kZql:function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n={production:!0}},r558:function(e,t){e.exports='<div class="user-profile__wrapper">\n  <div class="user-profile__photo" *ngIf="profile?.photo" [style.background]="\'url(\'+(profile?.photo)+\')\'">\n  </div>\n  <div class="user-profile__photo" *ngIf="!profile?.photo">\n    <i class="fa fa-user" aria-hidden="true"></i>\n  </div>\n  <div class="user-profile__name">\n    <p>{{profile?.fullName}}</p>\n  </div>\n</div>\n'},sQHO:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".app-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}",""]),e.exports=e.exports.toString()},sowk:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,"footer{position:fixed;display:block;bottom:10px;height:10px;width:100%;text-align:center}footer,footer p{background-color:#3b3e99}footer p{color:#fff}",""]),e.exports=e.exports.toString()},u87A:function(e,t,o){"use strict";var n=o("3j3K"),r=o("2Je8"),i=o("5oXY"),a=o("ULsH"),c=o("26y0"),s=o("2JcE"),f=o("aupE"),l=o("0CML"),u=o("OKNI");o.d(t,"a",function(){return h});var p=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},h=function(){function e(){}return e}();h=p([o.i(n.b)({imports:[r.c,i.a],declarations:[a.a,c.a,s.a,f.a],exports:[a.a,c.a,s.a,f.a],providers:[l.a,u.a]})],h)},x35b:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("3j3K"),r=o("O61y"),i=o("Iksp");o("kZql").a.production&&o.i(n.a)(),o.i(r.a)().bootstrapModule(i.a)}},[1]);
