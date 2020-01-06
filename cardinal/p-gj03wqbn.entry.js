import{r as t,h as e,g as s}from"./p-a1b3783e.js";import"./p-a4bfa1a2.js";import"./p-5eef8cc8.js";import{T as i}from"./p-a0ba8b88.js";import{C as o}from"./p-f30844a3.js";import{C as l}from"./p-78275e50.js";const n="PskButtonClickEvent";class r extends CustomEvent{constructor(t,e,s){super(t,s),this.getEventType=function(){return n},this.data=e}}const h=[document,window],a=class{constructor(e){t(this,e),this.label=null,this.buttonClass="btn btn-primary",this.eventName=null,this.eventData=null,this.disabled=!1}render(){return e("button",{onClick:t=>{if(this.eventName){t.preventDefault(),t.stopImmediatePropagation();let e=new r(this.eventName,this.eventData,{bubbles:!0,composed:!0,cancelable:!0}),s=this.htmlElement;this.eventDispatcher&&-1!==h.indexOf(window[this.eventDispatcher])&&(s=window[this.eventDispatcher]),s.dispatchEvent(e)}},class:this.buttonClass,disabled:this.disabled},this.label&&this.label,e("slot",null))}get htmlElement(){return s(this)}};!function(t,e,s,i){var o,l=arguments.length,n=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(n=(l<3?o(n):l>3?o(e,s,n):o(e,s))||n);l>3&&n&&Object.defineProperty(e,s,n)}([o()],a.prototype,"label",void 0);var c=function(t,e,s,i){var o,l=arguments.length,n=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(n=(l<3?o(n):l>3?o(e,s,n):o(e,s))||n);return l>3&&n&&Object.defineProperty(e,s,n),n};const p=class{constructor(e){t(this,e),this.parentHost=null,l.getController(this.controllerName?this.controllerName:"Controller").then(t=>{this.controller=new t(this.parentHost?this.parentHost:this._host)})}render(){return[e("slot",null),this.htmlFilePath&&e("psk-page-loader",{pageUrl:this.htmlFilePath}),this.controller&&this.controllerScript&&this.controller.executeScript(this.controller,this.controllerScript)]}componentWillLoad(){this.__getInnerController.call(this,this.parentHost?this.parentHost:this._host)}__getInnerController(t){let e=t.querySelector("script");null!==e&&(this.controllerScript=e.innerHTML,e.innerHTML="")}get _host(){return s(this)}};c([i({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],p.prototype,"controllerName",void 0),c([i({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],p.prototype,"htmlFilePath",void 0);export{a as psk_button,p as psk_container};