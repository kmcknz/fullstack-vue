(function(){"use strict";var t={6791:function(t,r,e){var n=e(5130),o=e(6768);const a={class:"page-wrap"};function s(t,r,e,n,s,u){const c=(0,o.g2)("NavBar"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c,{user:s.user},null,8,["user"]),(0,o.Lk)("div",a,[(0,o.bF)(i,{user:s.user},null,8,["user"])])],64)}var u=e(5955);const c={class:"nav-bar"},i={class:"logo-wrap"},d=["src"],l={class:"nav-buttons-wrap"};function p(t,r,e,n,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",c,[(0,o.bF)(u,{to:"/products",class:"products-link"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",i,[(0,o.Lk)("img",{src:a.logo},null,8,d)])])),_:1})]),(0,o.Lk)("div",l,[e.user?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.Q3)("",!0),(0,o.bF)(u,{to:"/cart"},{default:(0,o.k6)((()=>r[1]||(r[1]=[(0,o.Lk)("button",null,"Shopping Cart",-1)]))),_:1})])],64)}var m=e.p+"img/logo-hexagon.d2768201.svg",g={name:"NavBar",props:["user"],data(){return{logo:m}},methods:{signOut(){const t=(0,u.xI)();(0,u.CI)(t)}}},f=e(1241);const v=(0,f.A)(g,[["render",p]]);var h=v,k={name:"App",components:{NavBar:h},data(){return{user:null}},created(){const t=(0,u.xI)();(0,u.hg)(t,(t=>{this.user=t}))}};const b=(0,f.A)(k,[["render",s]]);var y=b,C=e(1387);const w={key:0},I={key:1};function L(t,r,e,n,a,s){const u=(0,o.g2)("ShoppingCartList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r[2]||(r[2]=(0,o.Lk)("h1",null,"My Cart",-1)),a.cartItems.length>0?((0,o.uX)(),(0,o.CE)("div",w,[(0,o.bF)(u,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"]),r[1]||(r[1]=(0,o.Lk)("button",{class:"checkout-button"},"Proceed to Checkout",-1))])):(0,o.Q3)("",!0),0===a.cartItems.length?((0,o.uX)(),(0,o.CE)("div",I," There are currently no items in your cart! ")):(0,o.Q3)("",!0)],64)}var F=e(4373),P=e(4232);const A=["src"],S={class:"details-wrap"},E=["onClick"];function X(t,r,e,n,a,s){return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.products,(r=>((0,o.uX)(),(0,o.CE)("div",{class:"product-container",key:r.id},[(0,o.Lk)("img",{class:"product-image",src:r.imageUrl},null,8,A),(0,o.Lk)("div",S,[(0,o.Lk)("h3",null,(0,P.v_)(r.name),1),(0,o.Lk)("p",null,(0,P.v_)(r.price),1)]),(0,o.Lk)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,E)])))),128)}var O={name:"ShoppingCartList",props:["products"]};const x=(0,f.A)(O,[["render",X]]);var _=x,j={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:_},data(){return{cartItems:[]}},watch:{async user(t){if(t){const r=await F.A.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async removeFromCart(t){const r=await F.A.delete(`/api/users/${this.user.uid}/cart/${t}`),e=r.data;this.cartItems=e}},async created(){if(this.user){const t=await F.A.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const $=(0,f.A)(j,[["render",L]]);var K=$;function N(t,r,e,n,a,s){const u=(0,o.g2)("ProductsList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r[0]||(r[0]=(0,o.Lk)("h1",null,"Products",-1)),(0,o.bF)(u,{products:a.products},null,8,["products"])],64)}const T={class:"grid-wrap"},M=["src"],Q={class:"product-name"},B={class:"product-price"};function V(t,r,e,n,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",T,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.products,(t=>((0,o.uX)(),(0,o.CE)("div",{class:"product-item",key:t.id},[(0,o.Lk)("img",{src:t.imageUrl},null,8,M),(0,o.Lk)("h3",Q,(0,P.v_)(t.name),1),(0,o.Lk)("p",B,(0,P.v_)(t.price),1),(0,o.bF)(u,{to:"/products/"+t.id},{default:(0,o.k6)((()=>r[0]||(r[0]=[(0,o.Lk)("button",null,"View Details",-1)]))),_:2},1032,["to"])])))),128))])}var D={name:"ProductsList",props:["products"]};const R=(0,f.A)(D,[["render",V]]);var U=R,z={name:"ProductsPage",components:{ProductsList:U},data(){return{products:[]}},async created(){const t=await F.A.get("/api/products"),r=t.data;this.products=r}};const W=(0,f.A)(z,[["render",N]]);var q=W;const G={key:0},H={class:"image-wrap"},J=["src"],Y={class:"product-details"},Z={class:"price"},tt={key:1,class:"grey-button"},rt={key:1};function et(t,r,e,n,a,s){const u=(0,o.g2)("NotFoundPage");return a.product?((0,o.uX)(),(0,o.CE)("div",G,[(0,o.Lk)("div",H,[(0,o.Lk)("img",{src:a.product.imageUrl},null,8,J)]),(0,o.Lk)("div",Y,[(0,o.Lk)("h1",null,(0,P.v_)(a.product.name),1),(0,o.Lk)("h3",Z,(0,P.v_)(a.product.price),1),e.user&&!s.exists?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add to cart")):(0,o.Q3)("",!0),e.user&&s.exists?((0,o.uX)(),(0,o.CE)("button",tt,"Item already exists.")):(0,o.Q3)("",!0),e.user?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))},"Sign in to add to cart."))])])):((0,o.uX)(),(0,o.CE)("div",rt,[(0,o.bF)(u)]))}function nt(t,r,e,n,a,s){return(0,o.uX)(),(0,o.CE)("h1",null,"404: Page Not Found")}var ot={name:"NotFoundPage"};const at=(0,f.A)(ot,[["render",nt]]);var st=at,ut={name:"ProductDetailPage",props:["user"],data(){return{product:[],cartItems:[]}},methods:{async addToCart(){await F.A.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),r=(0,u.xI)(),e={url:`https://fullstack-vue-1.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,u.MN)(r,t,e),alert("A login link was sent to the email you provided."),window.localStorage.setItem("emailForSignIn",t)}},computed:{exists(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},watch:{async user(t){if(console.log("Product user: "+t.uid),t){const r=await F.A.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},components:{NotFoundPage:st},async created(){const t=(0,u.xI)();if((0,u.Pj)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,u.hK)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await F.A.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){console.log("Product user: "+this.user.uid);const t=await F.A.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const ct=(0,f.A)(ut,[["render",et]]);var it=ct,dt=e(6400);const lt={apiKey:"AIzaSyCjVajXlVimzlPbXBpeRVO-kj6jFPSixXA",authDomain:"vue-site-55ed7.firebaseapp.com",projectId:"vue-site-55ed7",storageBucket:"vue-site-55ed7.firebasestorage.app",messagingSenderId:"947144859671",appId:"1:947144859671:web:bbae5b780ddebb09a03c52"};(0,dt.Wp)(lt),(0,n.Ef)(y).use(C.aE({history:C.LA("/"),routes:[{path:"/cart",component:K},{path:"/products",component:q},{path:"/products/:productId",component:it},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:st}]})).mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var u=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(u=!1,a<s&&(s=a));if(u){t.splice(d--,1);var i=o();void 0!==i&&(r=i)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,s=n[0],u=n[1],c=n[2],i=0;if(s.some((function(r){return 0!==t[r]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var d=c(e)}for(r&&r(n);i<s.length;i++)a=s[i],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(6791)}));n=e.O(n)})();
//# sourceMappingURL=app.747ce123.js.map