(this["webpackJsonpsocial_network_2.0"]=this["webpackJsonpsocial_network_2.0"]||[]).push([[1],{101:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(38),r=n(3),c=n(27),o="SEND_MY_MESSAGE_TEXT",s="SET_OPEN_DIALOG",i={usersWithDialogs:[{id:3450,userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU",userName:"Sponge Bob"},{id:4560,userImg:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg",userName:"Volk"},{id:2340,userImg:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg",userName:"Dasha"},{id:3440,userImg:"https://www.meme-arsenal.com/memes/f0ffafb204862b25d0f1aa7fce251f3a.jpg",userName:"Niko"},{id:4e3,userImg:"https://drasler.ru/wp-content/uploads/2019/05/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8023.jpg",userName:"Julia"},{id:5567,userImg:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg",userName:"Vlad"}],dialogsMessages:[{id:0,message:"hi"},{id:1,message:"how are u?"},{id:2,message:"you here?"}],openDialogWithUser:!1},u=function(e){return function(t){t(function(e){return{type:o,payload:e}}(e)),t(Object(c.a)("addDialogMessageForm"))}},l=function(e){return function(t){t(function(e){return{type:s,payload:e}}(e))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return t.payload&&t.payload.replace(/\s/g,"")?Object(r.a)(Object(r.a)({},e),{},{dialogsMessages:[].concat(Object(a.a)(e.dialogsMessages),[{id:3,message:t.payload}])}):e;case s:return Object(r.a)(Object(r.a)({},e),{},{openDialogWithUser:t.payload});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var a=n(127),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a1cfc85a-7e70-4120-8bed-62fbd526678c"}}),c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateUserStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},updateBioProfile:function(e){return r.put("profile",e).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},s={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getCaptcha:function(){return r.get("security/get-captcha-url").then((function(e){return e.data}))}}},14:function(e,t,n){e.exports={aside:"Aside_aside__11b96",asideOpen:"Aside_asideOpen__2HEwF",nav:"Aside_nav__LAQWh",active_link:"Aside_active_link__6zfJc",avatars_wrapper:"Aside_avatars_wrapper__2968D",avatars_box:"Aside_avatars_box__Nq9mM",avatar_wrapper:"Aside_avatar_wrapper__vA0o8",img_wrapper:"Aside_img_wrapper___ILMY",user_name:"Aside_user_name__32glW",closeMenu_wrapper:"Aside_closeMenu_wrapper__1-kwU"}},239:function(e,t,n){},240:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(126),c=n(125),o=n(31),s=n(91),i=n(8),u=n.n(i),l=n(16),d=n(3),p=n(13),f=n(27),j="SET_USER_DATA",b="SET_CAPTCHA",h="SET_OWNER",m={id:null,email:null,login:null,isAuth:!1,isOwner:!1,captchaUrl:null},O=function(e,t,n,a){return{type:j,payload:{id:e,email:t,login:n,isAuth:a}}},g=function(e){return{type:b,payload:e}},_=function(e){return{type:h,payload:e}},v=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,c=a.email,o=a.login,t(O(r,c,o,!0)),t(_(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.resultCode&&(t(O(null,null,null,!1)),t(g(null)),t(_(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.c.getCaptcha();case 2:n=e.sent,t(g(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),t.payload);case b:return Object(d.a)(Object(d.a)({},e),{},{captchaUrl:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{isOwner:t.payload});default:return e}},y="INITIALIZED_SUCCESS",B={initialized:!1},N=function(){return function(e){var t=e(v());Promise.all([t]).then((function(){e({type:y})}))}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},E=n(89),S=n(101),I=Object(a.c)({sideBar:o.b,usersPage:s.a,auth:w,app:A,profilePage:E.b,messagesPage:S.a,form:c.a}),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,k=Object(a.e)(I,C(Object(a.a)(r.a)));window.store=k;var T=k,P=n(0),U=n.n(P),M=n(52),L=n.n(M),F=(n(239),n(240),n(35)),W=n.n(F),z=n(12),R=n(123),V=n(124),G=n(67),J=n(88),H=n(1),q=Object(J.a)("input"),X=Object(V.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.captchaUrl,a=e.error;return Object(H.jsxs)("form",{onSubmit:t,className:W.a.login_form,action:"",children:[Object(H.jsx)("h5",{children:"Login"}),a&&Object(H.jsx)("span",{className:W.a.commonError,children:a}),Object(H.jsx)("span",{children:Object(H.jsx)(R.a,{name:"email",placeholder:"email",component:q,validate:[G.b]})}),Object(H.jsx)("span",{children:Object(H.jsx)(R.a,{name:"password",type:"password",placeholder:"password",component:q,validate:[G.b]})}),Object(H.jsxs)("label",{children:[Object(H.jsx)(R.a,{name:"rememberMe",component:q,type:"checkbox"}),Object(H.jsx)("span",{children:"Remember me"})]}),n&&Object(H.jsxs)("span",{className:W.a.login_captcha,children:[Object(H.jsx)(R.a,{name:"captcha",placeholder:"captcha",component:q}),Object(H.jsx)("img",{src:n,alt:"captcha"})]}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{children:"Login"})})]})})),Q=function(e){return e.auth.captchaUrl},K=function(e){return e.auth.isOwner},Y=n(10),Z=Object(z.b)((function(e){return{captchaUrl:Q(e),isOwner:K(e)}}),{loginAction:function(e,t,n,a){return function(){var r=Object(l.a)(u.a.mark((function r(c){var o,s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n,a);case 2:0===(o=r.sent).resultCode?c(v()):(10===o.resultCode&&c(x()),s=o.messages?o.messages[0]:"Some error",c(Object(f.b)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},startInitialize:N})((function(e){var t=e.loginAction,n=e.captchaUrl;return e.isOwner?Object(H.jsx)(Y.a,{to:"/"}):Object(H.jsx)("div",{className:W.a.login_wrapper,children:Object(H.jsx)("div",{className:W.a.login_box,children:Object(H.jsx)(X,{onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:n})})})})),$=n(51),ee=n.n($),te=n(19),ne=Object(z.b)(null,{logout:D,openMenu:o.c,closeMenu:o.a})((function(e){var t=e.logout,n=e.openMenu;return Object(H.jsxs)("header",{className:"".concat(ee.a.header),children:[Object(H.jsx)(te.b,{to:"/profile",children:Object(H.jsx)("div",{className:ee.a.logo,children:"LOGO"})}),Object(H.jsx)("div",{className:ee.a.menuBtn_visible,children:Object(H.jsx)("button",{onClick:function(){n()},children:"Menu"})}),Object(H.jsx)("div",{className:ee.a.actionLogout_box,children:Object(H.jsx)("button",{onClick:function(){t()},children:"Logout"})})]})})),ae=Object(z.b)(null,{logout:D})((function(e){return Object(H.jsx)(ne,Object(d.a)({},e))})),re=n(14),ce=n.n(re),oe=function(e){return e.sideBar.avatarsData},se=function(e){var t=e.avatarName,n=e.avatarImg;return Object(H.jsxs)("div",{className:ce.a.avatar_wrapper,children:[Object(H.jsx)("div",{className:ce.a.img_wrapper,children:Object(H.jsx)("img",{src:n,alt:"userAvatar"})}),Object(H.jsx)("span",{className:ce.a.user_name,children:t})]})},ie=Object(z.b)((function(e){return{avatarsData:oe(e)}}),null)((function(e){var t=e.avatarsData.map((function(e){return Object(H.jsx)(se,{avatarName:e.userName,avatarImg:e.userImg},e.id)}));return Object(H.jsxs)("div",{className:ce.a.avatars_wrapper,children:[Object(H.jsx)("h5",{children:"Users"}),Object(H.jsx)("div",{className:ce.a.avatars_box,children:t})]})})),ue=Object(z.b)((function(e){return{menuVisible:e.sideBar.menuVisible}}),{closeMenu:o.a})((function(e){var t=e.menuVisible,n=e.closeMenu;return Object(P.useEffect)((function(){document.querySelector("body").style.overflow=t?"hidden":"auto"}),[t]),Object(H.jsxs)("aside",{className:"".concat(ce.a.aside," ").concat(t?ce.a.asideOpen:""),children:[Object(H.jsxs)("ul",{className:ce.a.nav,children:[Object(H.jsx)("li",{children:Object(H.jsx)(te.b,{to:"/profile",activeClassName:ce.a.active_link,children:Object(H.jsx)("span",{children:"Profile"})})}),Object(H.jsx)("li",{children:Object(H.jsx)(te.b,{to:"/messages",activeClassName:ce.a.active_link,children:Object(H.jsx)("span",{children:"Messages"})})}),Object(H.jsx)("li",{children:Object(H.jsx)(te.b,{to:"/music",activeClassName:ce.a.active_link,children:Object(H.jsx)("span",{children:"Music"})})}),Object(H.jsx)("li",{children:Object(H.jsx)(te.b,{to:"/notifications",activeClassName:ce.a.active_link,children:Object(H.jsx)("span",{children:"Notifications"})})}),Object(H.jsx)("li",{children:Object(H.jsx)(te.b,{to:"/users",activeClassName:ce.a.active_link,children:Object(H.jsx)("span",{children:"Users"})})}),Object(H.jsx)("li",{children:Object(H.jsx)(te.b,{to:"/settings",activeClassName:ce.a.active_link,children:Object(H.jsx)("span",{children:"Settings"})})})]}),Object(H.jsx)("div",{children:Object(H.jsx)(ie,{})}),Object(H.jsx)("span",{onClick:function(){setTimeout((function(){return n()}),250)},className:ce.a.closeMenu_wrapper,children:" "})]})})),le=n(53),de=function(e){return function(t){return Object(H.jsx)(U.a.Suspense,{fallback:Object(H.jsx)(le.a,{}),children:Object(H.jsx)(e,Object(d.a)({},t))})}},pe=U.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,344))})),fe=U.a.lazy((function(){return n.e(7).then(n.bind(null,346))})),je=U.a.lazy((function(){return n.e(8).then(n.bind(null,342))})),be=U.a.lazy((function(){return n.e(9).then(n.bind(null,343))})),he=U.a.lazy((function(){return Promise.all([n.e(0),n.e(10),n.e(5)]).then(n.bind(null,347))})),me=U.a.lazy((function(){return n.e(6).then(n.bind(null,348))})),Oe=function(){return Object(H.jsxs)("div",{className:"main_page",children:[Object(H.jsx)(Y.b,{exact:!0,path:"/",children:Object(H.jsx)(Y.a,{to:"/profile"})}),Object(H.jsx)(Y.b,{path:"/profile/:userId?",render:de(pe)}),Object(H.jsx)(Y.b,{path:"/messages/",render:de(fe)}),Object(H.jsx)(Y.b,{path:"/music",render:de(je)}),Object(H.jsx)(Y.b,{path:"/notifications",render:de(be)}),Object(H.jsx)(Y.b,{path:"/users",render:de(he)}),Object(H.jsx)(Y.b,{path:"/settings",render:de(me)})]})},ge=Object(z.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{startInitialize:N})((function(e){var t=e.initialized,n=e.startInitialize,a=e.isAuth;return Object(P.useEffect)((function(){n()}),[]),t?a?Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(ae,{}),Object(H.jsxs)("main",{className:"main_wrapper",children:[Object(H.jsx)(ue,{}),Object(H.jsx)(Oe,{})]})]}):Object(H.jsx)(Z,{}):Object(H.jsx)(le.a,{})}));L.a.render(Object(H.jsx)(te.a,{children:Object(H.jsx)(z.a,{store:T,children:Object(H.jsx)(ge,{})})}),document.getElementById("root"))},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(3),r="SET_OPEN_MENU",c="SET_CLOSE_MENU",o={avatarsData:[{id:0,userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU",userName:"Sponge Bob"},{id:1,userImg:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg",userName:"Volk"},{id:2,userImg:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg",userName:"Dasha"},{id:3,userImg:"https://www.meme-arsenal.com/memes/f0ffafb204862b25d0f1aa7fce251f3a.jpg",userName:"Niko"},{id:4,userImg:"https://drasler.ru/wp-content/uploads/2019/05/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8023.jpg",userName:"Julia"},{id:5,userImg:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg",userName:"Vlad"}],menuVisible:!1},s=function(){return function(e){e({type:r,payload:!0})}},i=function(){return function(e){e({type:c,payload:!1})}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:case c:return Object(a.a)(Object(a.a)({},e),{},{menuVisible:t.payload});default:return e}}},35:function(e,t,n){e.exports={login_wrapper:"Login_login_wrapper__33QG2",login_box:"Login_login_box__mubJU",login_form:"Login_login_form__2y_Z_",login_captcha:"Login_login_captcha__2A5do",commonError:"Login_commonError__1XlwA"}},51:function(e,t,n){e.exports={header:"Header_header__1Sdb4",actionLogout_box:"Header_actionLogout_box__w54Gz",menuBtn_visible:"Header_menuBtn_visible__2aNtE",logo:"Header_logo__3IA6t"}},53:function(e,t,n){"use strict";n(0);var a=n(87),r=n.n(a),c=n(1);t.a=function(){return Object(c.jsx)("div",{className:r.a.preloader_wrapper,children:Object(c.jsx)("div",{className:r.a.fetching})})}},64:function(e,t,n){e.exports={form_control:"FormControl_form_control__3j1S1",error:"FormControl_error__3Jt8C",errorMessage:"FormControl_errorMessage__3jpv-",commonError:"FormControl_commonError__1hDeW"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},87:function(e,t,n){e.exports={preloader_wrapper:"Preloader_preloader_wrapper__2-yzO",fetching:"Preloader_fetching__2T72x","search-fetching":"Preloader_search-fetching__2v8MP"}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n(130),c=(n(0),n(64)),o=n.n(c),s=n(1),i=["input","meta"],u=function(e){return function(t){var n=t.input,c=t.meta,u=Object(r.a)(t,i),l=c.touched&&c.error;return Object(s.jsxs)("div",{className:"".concat(o.a.form_control," ").concat(l&&o.a.error),children:[l&&Object(s.jsx)("span",{className:o.a.errorMessage,children:c.error}),Object(s.jsx)(e,Object(a.a)(Object(a.a)({},n),u))]})}}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return _})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return D})),n.d(t,"f",(function(){return x})),n.d(t,"i",(function(){return w})),n.d(t,"e",(function(){return y}));var a=n(8),r=n.n(a),c=n(16),o=n(38),s=n(3),i=n(13),u=n(27),l="SET_PROFILE",d="SET_POST",p="SET_STATUS",f="SET_UPDATE_BIO_SUCCESS",j="SET_UPLOADED_PHOTO",b={profile:null,status:null,updatingBioSuccess:"",postData:[{id:0,name:"Vlad",message:"hi",likesCount:"150",img:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg"},{id:1,name:"Volk",message:"hi, are u there??",likesCount:"35",img:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg"},{id:2,name:"Dasha",message:"hi, how are u?",likesCount:"1536",img:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg"}]},h=function(e){return{type:p,payload:e}},m=function(e){return{type:f,payload:e}},O=function(e){return function(t){t(function(e){return{type:d,payload:e}}(e)),t(Object(u.a)("postMessageForm"))}},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:l,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(h(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateUserStatus(e);case 2:0===t.sent.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.id,t.next=3,i.b.updateBioProfile(e);case 3:0===t.sent.resultCode&&(n(g(c)),n(m("updating was successfully!")));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:a=t.sent,n((r=a.data.photos,{type:j,payload:r})),n(m("updating was successfully!"));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(t){t(m(e))}},y=function(){return function(e,t){var n=t().auth.id;e(g(n))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.payload});case p:return Object(s.a)(Object(s.a)({},e),{},{status:t.payload});case f:return Object(s.a)(Object(s.a)({},e),{},{updatingBioSuccess:t.payload});case j:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.payload})});case d:return t.payload&&t.payload.replace(/\s/g,"")?Object(s.a)(Object(s.a)({},e),{},{postData:[].concat(Object(o.a)(e.postData),[{id:3,name:"Dasha",message:t.payload,likesCount:0,img:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg"}])}):e;default:return e}}},91:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return D})),n.d(t,"d",(function(){return x}));var a=n(8),r=n.n(a),c=n(16),o=n(38),s=n(3),i=n(13),u="SET_USERS_DATA",l="SET_TOTAL_COUNT",d="SET_CURRENT_PAGE",p="SET_TOGGLE_FOLLOW",f="SET_IS_FETCHING",j="SET_FOLLOWING_IN_PROGRESS",b={users:[],pageSize:75,currentPage:1,totalCount:0,isFetching:!1,followingInProgress:[]},h=function(e){return{type:d,payload:e}},m=function(e){return{type:p,payload:e}},O=function(e){return{type:f,payload:e}},g=function(e,t){return{type:j,payload:{isFollowing:e,userId:t}}},_=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(e)),a(O(!0)),n.next=4,i.e.getUsers(e,t);case 4:c=n.sent,a(O(!1)),a((o=c.totalCount,{type:l,payload:o})),a((r=c.items,{type:u,payload:r}));case 8:case"end":return n.stop()}var r,o}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&(t(m(n)),t(g(!1,n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),D=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,i.d.follow.bind(i.d));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,i.d.unfollow.bind(i.d));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{users:t.payload});case l:return Object(s.a)(Object(s.a)({},e),{},{totalCount:t.payload});case d:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.payload});case f:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.payload});case j:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.payload.isFollowing?[].concat(Object(o.a)(e.followingInProgress),[t.payload.userId]):e.followingInProgress.filter((function(e){return e!==t.payload.userId}))});case p:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return t.payload!==e.id||e.followed?t.payload===e.id&&e.followed?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e:Object(s.a)(Object(s.a)({},e),{},{followed:!0})}))});default:return e}}}},[[285,2,3]]]);
//# sourceMappingURL=main.18d20e64.chunk.js.map