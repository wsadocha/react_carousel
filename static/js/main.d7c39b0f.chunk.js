(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var i=n(5),a=n.n(i),c=n(4),s=n(2),r=n(1),o=(n(10),n(11),n(0)),l=function(t){var e=t.images,n=t.itemWidth,i=t.frameSize,a=t.step,c=t.animationDuration,l=t.infinite,u=Object(r.useState)(1),m=Object(s.a)(u,2),p=m[0],b=m[1],d=e.length-i+1;p>d&&b(d);return Object(o.jsxs)("div",{className:"Carousel",children:[Object(o.jsx)("button",{type:"button",className:"Carousel__button ".concat(1!==p||l?"":"Carousel__button--disabled"),onClick:function(){if(l){if(1===p)return void b(d);if(p-a<1)return void b(1);b(p-a)}else{if(p-a<=1)return void b(1);b(p-a)}},children:"<"}),Object(o.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*i,"px"),transition:"".concat(c,"ms")},children:e.map((function(t){return Object(o.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat((1-p)*n,"px)"),transition:"transform ".concat(c,"ms ease"),width:"".concat(n,"px"),height:"".concat(n,"px")},children:Object(o.jsx)("img",{src:t,alt:t,style:{width:"".concat(n,"px"),height:"".concat(n,"px")}})},t)}))}),Object(o.jsx)("button",{"data-cy":"next",type:"button",className:"Carousel__button ".concat(d!==p||l?"":"Carousel__button--disabled"),onClick:function(){if(l){if(p===d)return void b(1);if(p+a>d)return void b(d);b(p+a)}else{if(p+a>=d)return void b(d);b(p+a)}},children:">"})]})},u=function(){var t=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],e=Object(r.useState)({itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1}),n=Object(s.a)(e,2),i=n[0],a=n[1],u=function(t){a((function(e){return Object(c.a)(Object(c.a)({},e),t)}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(o.jsxs)("form",{className:"App__form",children:[Object(o.jsxs)("label",{htmlFor:"itemWidth",className:"App__label",children:["Item width",Object(o.jsx)("input",{className:"App__input",type:"number",id:"itemWidth",defaultValue:i.itemWidth,onChange:function(t){return u({itemWidth:+t.target.value})}})]}),Object(o.jsxs)("label",{htmlFor:"frameSize",className:"App__label",children:["Frame size",Object(o.jsx)("input",{className:"App__input",type:"number",min:1,max:10,id:"frameSize",defaultValue:i.frameSize,onChange:function(t){return u({frameSize:+t.target.value})}})]}),Object(o.jsxs)("label",{htmlFor:"step",className:"App__label",children:["Step",Object(o.jsx)("input",{className:"App__input",type:"number",id:"step",defaultValue:i.step,min:1,max:10,onChange:function(t){return u({step:+t.target.value})}})]}),Object(o.jsxs)("label",{htmlFor:"animationDuration",className:"App__label",children:["Animation duration",Object(o.jsx)("input",{className:"App__input",type:"number",id:"animationDuration",defaultValue:i.animationDuration,onChange:function(t){return u({animationDuration:+t.target.value})}})]}),Object(o.jsxs)("label",{htmlFor:"infinite",children:["Infinite",Object(o.jsx)("input",{className:"App__input App__input--checkbox",type:"checkbox",id:"infinite",checked:i.infinite,onChange:function(t){return u({infinite:t.target.checked})}})]})]}),Object(o.jsx)(l,{images:t,itemWidth:i.itemWidth,frameSize:i.frameSize,step:i.step,animationDuration:i.animationDuration,infinite:i.infinite})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d7c39b0f.chunk.js.map