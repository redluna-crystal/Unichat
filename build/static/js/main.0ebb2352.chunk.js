(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),u=a.n(r),i=(a(62),a(25)),o=a(5),l=a(19),s=a(14),p=a.n(s),m=(a(65),p.a.initializeApp({apiKey:"AIzaSyCnoHFBGsPVGuldH8Yeowb7gLXSlC3cjHc",authDomain:"unichat-33f99.firebaseapp.com",projectId:"unichat-33f99",storageBucket:"unichat-33f99.appspot.com",messagingSenderId:"554318184365",appId:"1:554318184365:web:bceebf45d8601da82feb24"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),i(!1),e&&b.push("/chats")}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!u&&t)},f=a(20),b=a.n(f),g=a(35),v=a(55),E=a(4),j=a.n(E),w=function(){var e=Object(o.f)(),t=Object(n.useContext)(h).user,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=function(){var t=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"2b7c1e8e-973a-4ae9-8d9d-ebd25f2e0094","user-name":t.email,"user-secret":t.uid}}).then((function(){i(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"0b09d24f-1058-47d6-ab36-ca89dfea749c"}}).then((function(){return i(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||u?"":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Unichat"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{height:"calc(100vh - 66px)",projectID:"2b7c1e8e-973a-4ae9-8d9d-ebd25f2e0094",userName:t.email,userSecret:t.uid}))},O=a(120),k=a(121),S=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Unichat!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(O.a,null)," Sign In with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null)," Sign In with Facebook")))};var I=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(d,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:w}),c.a.createElement(o.a,{path:"/",component:S})))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))},57:function(e,t,a){e.exports=a(118)},62:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.0ebb2352.chunk.js.map