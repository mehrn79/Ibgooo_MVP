(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{522:function(t,e,n){t.exports=n.p+"img/ibgooo-logo-blue.e12ed8f.png"},524:function(t,e,n){t.exports=n.p+"img/ibgooo-logo-white.ea0f095.png"},541:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("38cab764",content,!0,{sourceMap:!1})},542:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"header"},[t("img",{staticClass:"img",attrs:{src:n(524),alt:"logo"}})])}],o={name:"HeaderRes"},c=(n(559),n(77)),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,"4fd305d8",null);e.default=component.exports},543:function(t,e,n){var content=n(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("58fcc42d",content,!0,{sourceMap:!1})},546:function(t,e,n){"use strict";n.r(e);var r=n(571),o=n(569),c={name:"Header",components:{HeaderRes:n(542).default}},l=(n(562),n(77)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?e("HeaderRes"):e(o.a,{staticClass:"header-container"},[e(r.a,{attrs:{cols:"3"}},[e("img",{staticClass:"img-logo",attrs:{src:n(522),alt:""}})])],1)],1)}),[],!1,null,"0247d9fe",null);e.default=component.exports;installComponents(component,{HeaderRes:n(542).default})},559:function(t,e,n){"use strict";n(541)},560:function(t,e,n){var r=n(67)(!1);r.push([t.i,".header[data-v-4fd305d8]{background:#06c;padding:10px 20px;direction:ltr}.img[data-v-4fd305d8]{width:40%}@media (min-width:480px){.img[data-v-4fd305d8]{width:20%}}",""]),t.exports=r},562:function(t,e,n){"use strict";n(543)},563:function(t,e,n){var r=n(67)(!1);r.push([t.i,".img-logo[data-v-0247d9fe]{width:60%}.header-container[data-v-0247d9fe]{direction:rtl;padding:30px 50px 0}",""]),t.exports=r},569:function(t,e,n){"use strict";n(25),n(34),n(43),n(44);var r=n(10),o=(n(6),n(69),n(78),n(45),n(31),n(24),n(47),n(526),n(35),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(534),n(535),n(536),n(537),n(538),n(539),n(40),n(26),n(525),n(1)),c=n(523),l=n(23);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.r)(r)]=e(),n}),{})}var j=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},h=y("align",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},x=y("alignContent",(function(){return{type:String,default:null,validator:S}})),P={align:Object.keys(h),justify:Object.keys(w),alignContent:Object.keys(x)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var _=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},h),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:S}},x),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=_.get(l);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),_.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},571:function(t,e,n){"use strict";n(25),n(34),n(43),n(44);var r=n(10),o=(n(6),n(392),n(31),n(24),n(47),n(526),n(35),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(534),n(535),n(536),n(537),n(538),n(539),n(40),n(69),n(26),n(58),n(525),n(1)),c=n(523),l=n(23);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(O),offset:Object.keys(y),order:Object.keys(j)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})}}]);