(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(t,e,n){},212:function(t,e,n){"use strict";var o=n(180);n.n(o).a},220:function(t,e,n){"use strict";n.r(e);n(181);var o,a=n(182),s=n(183),i=n.n(s),r={mounted:function(){console.log("mounted"),this.getData()},data:function(){return{text:null,posts:null,urlString:null}},computed:{},created:function(){},methods:{generatePreview:function(){var t=this;i.a.post("https://api.linkpreview.net",{q:this.urlString,key:"5c32c72da32d9cefe75fadf1111936278f588ade3617c"}).then(function(e){console.log(e.data),i.a.post("https://vue-two.herokuapp.com/api/posts/",{text:e.data,createdAt:new Date}).then(function(e){i.a.get("https://vue-two.herokuapp.com/api/posts/").then(function(e){t.contents=e.data,t.posts=e.data})}).catch(function(t){console.log(t)})})},getData:(o=Object(a.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("created always run first"),t.prev=1,t.next=4,i.a.get("https://vue-two.herokuapp.com/api/posts/");case 4:e=t.sent,n=e.data,this.contents=n,this.posts=n,console.log(e.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}},t,this,[[1,11]])})),function(){return o.apply(this,arguments)}),formatDate:function(t){new Date(t).getMonth();return new Date(t).toLocaleString()},deletePost:function(t){console.log(t)},analysisData:function(){var t=this;i.a.post("https://vue-two.herokuapp.com/api/posts/",{text:this.text,createdAt:new Date}).then(function(e){i.a.get("https://vue-two.herokuapp.com/api/posts/").then(function(e){t.contents=e.data,t.posts=e.data})}).catch(function(t){console.log(t)})}}},c=(n(212),n(0)),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mongoose"},[n("h1",[t._v("Projects Lists")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Create a Post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.urlString,expression:"urlString"}],attrs:{type:"text",placeholder:"Create a Post with Preview"},domProps:{value:t.urlString},on:{input:function(e){e.target.composing||(t.urlString=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.analysisData}},[t._v("CLICK TO POST REQUEST")]),t._v(" "),n("button",{on:{click:function(e){t.generatePreview()}}},[t._v("SEND URL")]),t._v(" "),n("div",{staticClass:"post-container"},t._l(t.posts,function(e,o){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:o},on:{dblclick:function(n){t.deletePost(e._id)}}},[n("h4",{staticClass:"text"},[t._v(t._s(t.posts[o].text.title))]),t._v(" "),n("h5",{staticClass:"text"},[t._v(t._s(t.posts[o].text.description))]),t._v(" "),n("a",{attrs:{href:t.posts[o].text.url,target:"_blank"}},[n("img",{attrs:{src:t.posts[o].text.image}})]),t._v(" "),n("h6",{staticClass:"text"},[t._v(t._s(t.formatDate(e.createdAt)))])])}),0)])},[],!1,null,"bce344be",null);u.options.__file="projectlist.vue";e.default=u.exports}}]);