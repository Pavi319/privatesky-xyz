System.register(["./p-0b2166d8.system.js","./p-a567d6cd.system.js"],(function(t){"use strict";var e,r,n,o;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(t){o=t.C}],execute:function(){var i=undefined&&undefined.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)if(c=t[s])i=(o<3?c(i):o>3?c(e,r,i):c(e,r))||i;return o>3&&i&&Object.defineProperty(e,r,i),i};var c=t("psk_form",function(){function t(t){e(this,t);this.formActions="submit"}t.prototype.render=function(){return r("psk-container",{controllerName:this.controllerName,parentHost:this._host},r("div",{class:"container"},r("form",null,r("slot",null),r("div",{id:"#actions"},this._createFormActions(this.formActions)))))};t.prototype._createFormActions=function(t){var e=[];e=t.split(",").map((function(t){return r("psk-button",{eventName:t,label:t.toUpperCase()})}));return e};Object.defineProperty(t.prototype,"_host",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());i([o()],c.prototype,"controllerName",void 0)}}}));