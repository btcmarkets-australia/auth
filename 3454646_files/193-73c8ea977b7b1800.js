(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{6803:function(t){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function n(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var i=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]],o=["clip","crop","fill","fillmax","max","scale","min"],a=["top","bottom","left","right","center","focalpoint","entropy"],u=["format"],s=function(){function s(e,r){this.options=void 0,this.options=e?t({},e.options||{},r||{}):t({},r||{})}var h=s.prototype;return h.withOptions=function(r){var n=r.baseUrl||this.options.baseUrl,o={baseUrl:n};for(var a in r)r.hasOwnProperty(a)&&(o[function(t){for(var r,n=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}}(t))){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(i);!(r=n()).done;){var o=r.value,a=o[0],u=o[1];if(t===a||t===u)return a}return t}(a)]=r[a]);return new s(this,t({baseUrl:n},o))},h.image=function(t){return this.withOptions({source:t})},h.dataset=function(t){return this.withOptions({dataset:t})},h.projectId=function(t){return this.withOptions({projectId:t})},h.bg=function(t){return this.withOptions({bg:t})},h.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},h.width=function(t){return this.withOptions({width:t})},h.height=function(t){return this.withOptions({height:t})},h.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},h.maxWidth=function(t){return this.withOptions({maxWidth:t})},h.minWidth=function(t){return this.withOptions({minWidth:t})},h.maxHeight=function(t){return this.withOptions({maxHeight:t})},h.minHeight=function(t){return this.withOptions({minHeight:t})},h.size=function(t,e){return this.withOptions({width:t,height:e})},h.blur=function(t){return this.withOptions({blur:t})},h.sharpen=function(t){return this.withOptions({sharpen:t})},h.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},h.format=function(t){return this.withOptions({format:t})},h.invert=function(t){return this.withOptions({invert:t})},h.orientation=function(t){return this.withOptions({orientation:t})},h.quality=function(t){return this.withOptions({quality:t})},h.forceDownload=function(t){return this.withOptions({download:t})},h.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},h.flipVertical=function(){return this.withOptions({flipVertical:!0})},h.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},h.fit=function(t){if(-1===o.indexOf(t))throw Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},h.crop=function(t){if(-1===a.indexOf(t))throw Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},h.saturation=function(t){return this.withOptions({saturation:t})},h.auto=function(t){if(-1===u.indexOf(t))throw Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},h.pad=function(t){return this.withOptions({pad:t})},h.url=function(){return function(e){var o=t({},e||{}),a=o.source;delete o.source;var u=function(e){var r;if(!e)return null;if("string"==typeof e&&/^https?:\/\//.test(""+e))r={asset:{_ref:n(e)}};else if("string"==typeof e)r={asset:{_ref:e}};else if(e&&"string"==typeof e._ref)r={asset:e};else if(e&&"string"==typeof e._id)r={asset:{_ref:e._id||""}};else if(e&&e.asset&&"string"==typeof e.asset.url)r={asset:{_ref:n(e.asset.url)}};else{if("object"!=typeof e.asset)return null;r=t({},e)}return e.crop&&(r.crop=e.crop),e.hotspot&&(r.hotspot=e.hotspot),function(e){if(e.crop&&e.hotspot)return e;var r=t({},e);return r.crop||(r.crop={left:0,top:0,bottom:0,right:0}),r.hotspot||(r.hotspot={x:.5,y:.5,height:1,width:1}),r}(r)}(a);if(!u)throw Error("Unable to resolve image URL from source ("+JSON.stringify(a)+")");var s=function(t){var e=t.split("-"),n=e[1],i=e[2],o=e[3];if(!n||!i||!o)throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');var a=i.split("x"),u=a[0],s=a[1],h=+u,f=+s;if(!(isFinite(h)&&isFinite(f)))throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');return{id:n,width:h,height:f,format:o}}(u.asset._ref||u.asset._id||""),h=Math.round(u.crop.left*s.width),f=Math.round(u.crop.top*s.height),c={left:h,top:f,width:Math.round(s.width-u.crop.right*s.width-h),height:Math.round(s.height-u.crop.bottom*s.height-f)},l=u.hotspot.height*s.height/2,p=u.hotspot.width*s.width/2,d=u.hotspot.x*s.width,g=u.hotspot.y*s.height;return o.rect||o.focalPoint||o.ignoreImageParams||o.crop||(o=t({},o,function(t,e){var r,n=e.width,i=e.height;if(!(n&&i))return{width:n,height:i,rect:t.crop};var o=t.crop,a=t.hotspot,u=n/i;if(o.width/o.height>u){var s=Math.round(o.height),h=Math.round(s*u),f=Math.max(0,Math.round(o.top)),c=Math.max(0,Math.round(Math.round((a.right-a.left)/2+a.left)-h/2));c<o.left?c=o.left:c+h>o.left+o.width&&(c=o.left+o.width-h),r={left:c,top:f,width:h,height:s}}else{var l=o.width,p=Math.round(l/u),d=Math.max(0,Math.round(o.left)),g=Math.max(0,Math.round(Math.round((a.bottom-a.top)/2+a.top)-p/2));g<o.top?g=o.top:g+p>o.top+o.height&&(g=o.top+o.height-p),r={left:d,top:g,width:l,height:p}}return{width:n,height:i,rect:r}}({crop:c,hotspot:{left:d-p,top:g-l,right:d+p,bottom:g+l}},o))),function(t){var e=(t.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,o=[];if(t.rect){var a=t.rect,u=a.left,s=a.top,h=a.width,f=a.height;(0!==u||0!==s||f!==t.asset.height||h!==t.asset.width)&&o.push("rect="+u+","+s+","+h+","+f)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var c=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return(c&&o.push("flip="+c),i.forEach(function(e){var r=e[0],n=e[1];void 0!==t[r]?o.push(n+"="+encodeURIComponent(t[r])):void 0!==t[n]&&o.push(n+"="+encodeURIComponent(t[n]))}),0===o.length)?n:n+"?"+o.join("&")}(t({},o,{asset:s}))}(this.options)},h.toString=function(){return this.url()},s}();return function(t){if(t&&"config"in t&&"function"==typeof t.config){var e=t.config(),r=e.apiHost,n=e.projectId,i=e.dataset;return new s(null,{baseUrl:(r||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:n,dataset:i})}if(t&&"clientConfig"in t&&"object"==typeof t.clientConfig){var o=t.clientConfig,a=o.apiHost,u=o.projectId,h=o.dataset;return new s(null,{baseUrl:(a||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:u,dataset:h})}return new s(null,t)}}()},3561:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()},t.exports=e.default},2084:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)},t.exports=e.default},1574:function(t,e,r){"use strict";r.d(e,{Z:function(){return D}});var n={year:0,month:1,day:2,hour:3,minute:4,second:5},i={};function o(t,e,r,n,i,o,a){var u=new Date(0);return u.setUTCFullYear(t,e,r),u.setUTCHours(n,i,o,a),u}function a(t,e,r){if(!t||(n=/^(Z)$/.exec(t)))return 0;if(n=/^([+-]\d{2})$/.exec(t))return s(a=parseInt(n[1],10))?-(36e5*a):NaN;if(n=/^([+-]\d{2}):?(\d{2})$/.exec(t)){a=parseInt(n[1],10);var n,i,a,f=parseInt(n[2],10);return s(a,f)?(i=36e5*Math.abs(a)+6e4*f,a>0?-i:i):NaN}if(function(t){if(h[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),h[t]=!0,!0}catch(t){return!1}}(t)){e=new Date(e||Date.now());var c,l=u(r?e:o((c=e).getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds()),t);return-(r?l:function(t,e,r){var n=t.getTime()-e,i=u(new Date(n),r);if(e===i)return e;n-=i-e;var o=u(new Date(n),r);return i===o?i:Math.max(i,o)}(e,l,t))}return NaN}function u(t,e){var r,a,u,s=(u=function(t){if(!i[t]){var e=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z"));i[t]="06/25/2014, 00:00:00"===e||"‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00"===e?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return i[t]}(e)).formatToParts?function(t,e){try{for(var r=t.formatToParts(e),i=[],o=0;o<r.length;o++){var a=n[r[o].type];a>=0&&(i[a]=parseInt(r[o].value,10))}return i}catch(t){if(t instanceof RangeError)return[NaN];throw t}}(u,t):(r=u.format(t).replace(/\u200E/g,""),[(a=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r))[3],a[1],a[2],a[4],a[5],a[6]]),h=o(s[0],s[1]-1,s[2],s[3]%24,s[4],s[5],0).getTime(),f=t.getTime(),c=f%1e3;return h-(f-=c>=0?c:1e3+c)}function s(t,e){return -23<=t&&t<=23&&(null==e||0<=e&&e<=59)}var h={},f=r(2084),c=r(3561),l={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/};function p(t,e,r){e=e||0,r=r||0;var n=new Date(0);n.setUTCFullYear(t,0,4);var i=7*e+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+i),n}var d=[31,28,31,30,31,30,31,31,30,31,30,31],g=[31,29,31,30,31,30,31,31,30,31,30,31];function w(t){return t%400==0||t%4==0&&t%100!=0}function m(t,e,r){if(e<0||e>11)return!1;if(null!=r){if(r<1)return!1;var n=w(t);if(n&&r>g[e]||!n&&r>d[e])return!1}return!0}function v(t,e,r){return!(e<0)&&!(e>52)&&(null==r||!(r<0)&&!(r>6))}function y(t,e,r){return(null==t||!(t<0)&&!(t>=25))&&(null==e||!(e<0)&&!(e>=60))&&(null==r||!(r<0)&&!(r>=60))}function D(t,e,r){var n=function(t,e){if(arguments.length<1)throw TypeError("1 argument required, but only "+arguments.length+" present");if(null===t)return new Date(NaN);var r=e||{},n=null==r.additionalDigits?2:f(r.additionalDigits);if(2!==n&&1!==n&&0!==n)throw RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))return new Date(t.getTime());if("number"==typeof t||"[object Number]"===Object.prototype.toString.call(t))return new Date(t);if(!("string"==typeof t||"[object String]"===Object.prototype.toString.call(t)))return new Date(NaN);var i=function(t){var e,r={},n=l.dateTimePattern.exec(t);if(n?(r.date=n[1],e=n[3]):(n=l.datePattern.exec(t))?(r.date=n[1],e=n[2]):(r.date=null,e=t),e){var i=l.timeZone.exec(e);i?(r.time=e.replace(i[1],""),r.timeZone=i[1].trim()):r.time=e}return r}(t),o=function(t,e){var r,n=l.YYY[e],i=l.YYYYY[e];if(r=l.YYYY.exec(t)||i.exec(t)){var o=r[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(r=l.YY.exec(t)||n.exec(t)){var a=r[1];return{year:100*parseInt(a,10),restDateString:t.slice(a.length)}}return{year:null}}(i.date,n),u=o.year,s=function(t,e){if(null===e)return null;if(0===t.length)return(n=new Date(0)).setUTCFullYear(e),n;if(r=l.MM.exec(t))return(n=new Date(0),m(e,i=parseInt(r[1],10)-1))?(n.setUTCFullYear(e,i),n):new Date(NaN);if(r=l.DDD.exec(t)){n=new Date(0);var r,n,i,o,a=parseInt(r[1],10);return!function(t,e){if(e<1)return!1;var r=w(t);return(!r||!(e>366))&&(!!r||!(e>365))}(e,a)?new Date(NaN):(n.setUTCFullYear(e,0,a),n)}if(r=l.MMDD.exec(t)){n=new Date(0),i=parseInt(r[1],10)-1;var u=parseInt(r[2],10);return m(e,i,u)?(n.setUTCFullYear(e,i,u),n):new Date(NaN)}if(r=l.Www.exec(t))return v(e,o=parseInt(r[1],10)-1)?p(e,o):new Date(NaN);if(r=l.WwwD.exec(t)){o=parseInt(r[1],10)-1;var s=parseInt(r[2],10)-1;return v(e,o,s)?p(e,o,s):new Date(NaN)}return null}(o.restDateString,u);if(isNaN(s)||!s)return new Date(NaN);var h,d=s.getTime(),g=0;if(i.time&&isNaN(g=function(t){if(e=l.HH.exec(t))return y(r=parseFloat(e[1].replace(",",".")))?r%24*36e5:NaN;if(e=l.HHMM.exec(t))return y(r=parseInt(e[1],10),n=parseFloat(e[2].replace(",",".")))?r%24*36e5+6e4*n:NaN;if(e=l.HHMMSS.exec(t)){r=parseInt(e[1],10),n=parseInt(e[2],10);var e,r,n,i=parseFloat(e[3].replace(",","."));return y(r,n,i)?r%24*36e5+6e4*n+1e3*i:NaN}return null}(i.time)))return new Date(NaN);if(i.timeZone||r.timeZone){if(isNaN(h=a(i.timeZone||r.timeZone,new Date(d+g))))return new Date(NaN)}else h=c(new Date(d+g)),h=c(new Date(d+g+h));return new Date(d+g+h)}(t,r),i=a(e,n,!0),o=new Date(n.getTime()-i),u=new Date(0);return u.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),u.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),u}}}]);
//# sourceMappingURL=193-73c8ea977b7b1800.js.map