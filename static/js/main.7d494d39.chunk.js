(this["webpackJsonp-a"]=this["webpackJsonp-a"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/flow_logo.134cada3.svg"},32:function(e,a,t){},37:function(e,a,t){e.exports=t(63)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(34),r=t.n(l),s=(t(42),t(10)),o=t(11),m=t(13),i=t(12),u=t(14),p=(t(43),t(18)),b=t.n(p),E=(t(44),t(16)),d=t(4);E.b.add(d.c,d.f,d.b,d.d,d.e,d.g),console.log(b.a);var v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"App-header"},c.a.createElement("title",null,"Creative Lab: fLOW"),c.a.createElement("a",{className:"github-link",href:"https://github.com/allisonchen23/fLOW",target:"_blank",rel:"noopener noreferrer"},"Our GitHub")))}}]),a}(n.Component),h=t(28),f=t.n(h);f.a.initializeApp({apiKey:"AIzaSyBa97q4DWj7xsO4DWtFyEJQaSD4Cv-QcbA",authDomain:"testproj-81eb3.firebaseapp.com",databaseURL:"https://testproj-81eb3.firebaseio.com",projectId:"testproj-81eb3",storageBucket:"testproj-81eb3.appspot.com",messagingSenderId:"326625281759",appId:"1:326625281759:web:7dfdd060c65ab5ff604b6a",measurementId:"G-VS469K15HM"});var g=f.a,j=(t(57),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).increment_temp=function(){var e=t.state.temp;t.setState({temp:e+1})},t.componentDidMount=function(){g.database.enableLogging(!0);var e,a=g.database(),n=a.ref("temp"),c=a.ref("image"),l=a.ref("image/name");n.on("value",(function(a){e=a.val(),t.setState({temp:e})})),c.on("value",(function(e){var a=e.child("name").val();t.setState({name:a})})),l.on("value",(function(e){t.setState({name2:e.val()})}))},t.state={temp:"0",name:"",name2:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"data"},c.a.createElement("p",null,"From database: ",this.state.temp),c.a.createElement("p",null,"Image/Name: ",this.state.name),c.a.createElement("p",null,"should be same value as above: ",this.state.name2)))}}]),a}(n.Component)),O=(t(58),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"App-header"},c.a.createElement("title",null,"About Us:")))}}]),a}(n.Component)),N=t(8),_=(t(32),t(19));E.b.add(d.c,d.f,d.b,d.d,d.e,d.g),console.log(b.a);var y=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav_wrap"},c.a.createElement("div",{className:"logo_wrap"},c.a.createElement("a",{href:"#top"},c.a.createElement("img",{src:b.a}))),c.a.createElement("nav",null,c.a.createElement("ul",{className:"nav_list"},c.a.createElement("li",{className:"nav_item"},c.a.createElement(N.b,{class:"nav_square",to:"/pages/home.js"},c.a.createElement("div",{className:""},c.a.createElement(_.a,{icon:"home",className:"nav_icon"})))),c.a.createElement("li",{className:"nav_item"},c.a.createElement(N.b,{class:"nav_square",to:"/pages/data.js"},c.a.createElement("div",{className:""},c.a.createElement(_.a,{icon:"signal",className:"nav_icon"})))),c.a.createElement("li",{className:"nav_item"},c.a.createElement(N.b,{class:"nav_square",to:"/pages/about.js"},c.a.createElement("div",{className:""},c.a.createElement(_.a,{icon:"clock",className:"nav_icon"})))),c.a.createElement("li",{className:"nav_item"},c.a.createElement(N.b,{class:"nav_square",to:"/"},c.a.createElement("div",{className:""},c.a.createElement(_.a,{icon:"lightbulb",className:"nav_icon"})))),c.a.createElement("li",{className:"nav_item"},c.a.createElement(N.b,{class:"nav_square",to:"/"},c.a.createElement("div",{className:""},c.a.createElement(_.a,{icon:"question-circle",className:"nav_icon"}))))))))}}]),a}(n.Component);E.b.add(d.c,d.f,d.b,d.d,d.e,d.g,d.a),console.log(b.a);var k=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"top_bar"},c.a.createElement("ul",{className:"top_list"},c.a.createElement("li",{className:"top_item"},c.a.createElement("a",null," AC ")),c.a.createElement("li",{className:"top_item"},c.a.createElement(N.b,{to:"/"},c.a.createElement(_.a,{icon:"user-circle",className:"top_icons"}))),c.a.createElement("li",{className:"top_item"},c.a.createElement(N.b,{to:"/"},c.a.createElement(_.a,{icon:"bell",className:"top_iconsa"}))))))}}]),a}(n.Component),w=t(20);E.b.add(d.c,d.f,d.b,d.d,d.e,d.g),console.log(b.a);var C=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,null,c.a.createElement(y,null),c.a.createElement(k,null),c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"/pages/home.js",exact:!0,component:v}),c.a.createElement(w.a,{path:"/pages/data.js",exact:!0,component:j}),c.a.createElement(w.a,{path:"/pages/about.js",exact:!0,component:O}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.7d494d39.chunk.js.map