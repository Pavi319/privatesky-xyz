import{r as t,c as e,h as i}from"./p-a1b3783e.js";import"./p-a4bfa1a2.js";import"./p-5eef8cc8.js";import{T as s}from"./p-a0ba8b88.js";import{C as l}from"./p-f30844a3.js";import{T as r}from"./p-cf86e6c0.js";var a=function(t,e,i,s){var l,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(l=t[n])&&(a=(r<3?l(a):r>3?l(e,i,a):l(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const n=class{constructor(i){t(this,i),this.error=!1,this.destinationUrl="#",this.validateUrl=e(this,"validateUrl",7)}componentDidLoad(){this.page&&this.validateUrl.emit({sourceUrl:this.page,callback:(t,e)=>{t?this.error=!0:(this.destinationUrl=e,this.error=!1)}})}render(){let t=null;return this.error&&(t=i("div",{class:"tooltip-error"},i("div",null,"Page ",i("b",null,this.page)," does not exists."))),i("div",{class:"psk-link"},this.error?i("div",null,i("a",{class:`btn btn-link ${this.error?"invalid-url":""}`,onClick:t=>{t.preventDefault()}},i("slot",null)),",",t):i("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},i("slot",null)))}};a([l(),s({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:!0,propertyType:"string"})],n.prototype,"page",void 0),a([r({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],n.prototype,"validateUrl",void 0);export{n as psk_link};