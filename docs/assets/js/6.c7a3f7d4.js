(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,o){},209:function(t,e,o){"use strict";var n=o(173);o.n(n).a},219:function(t,e,o){"use strict";o.r(e);o(181);var n,s=o(182),a=o(183),c=o.n(a),r={mounted:function(){console.log("mounted"),this.getData()},data:function(){return{buttonMsg:"Click to generate",text:null,posts:null}},computed:{},created:function(){},methods:{getData:(n=Object(s.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("created always run first"),t.prev=1,t.next=4,c.a.get("https://vue-two.herokuapp.com/api/posts/");case 4:e=t.sent,o=e.data,this.contents=o,this.posts=o,console.log(e.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}},t,this,[[1,11]])})),function(){return n.apply(this,arguments)}),formatDate:function(t){var e=new Date(t),o=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];return"".concat(o," ").concat(e.getDate(),", ").concat(e.getFullYear()," }")},deletePost:function(t){console.log(t)},resetDisplay:function(){this.posts=""},postone:function(){var t=this;c.a.post("https://vue-two.herokuapp.com/api/posts/",{text:this.text,createdAt:new Date}).then(function(e){c.a.get("https://vue-two.herokuapp.com/api/posts/").then(function(e){t.contents=e.data,t.posts=e.data})}).catch(function(t){console.log(t)})}}},i=(o(209),o(0)),u=Object(i.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mongoose"},[o("h1",[t._v("Basic Mongoose Use")]),t._v(" "),o("button",{on:{click:t.resetDisplay}},[t._v(t._s(t.buttonMsg))]),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Create a Post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),o("button",{on:{click:t.postone}},[t._v("CLICK TO POST REQUEST")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"post-container"},t._l(t.posts,function(e,n){return o("div",{key:e._id,staticClass:"post",attrs:{item:e,index:n},on:{dblclick:function(o){t.deletePost(e._id)}}},[o("p",{staticClass:"text"},[t._v(t._s(e.text))]),t._v(" "),o("p",{staticClass:"text"},[t._v(t._s(t.formatDate(e.createdAt)))])])}),0)])},[],!1,null,"2b6d30cb",null);u.options.__file="mongoose.vue";e.default=u.exports}}]);