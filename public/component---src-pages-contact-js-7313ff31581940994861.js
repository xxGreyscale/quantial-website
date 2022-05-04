(self.webpackChunkquantial_solutions=self.webpackChunkquantial_solutions||[]).push([[501],{6633:function(e,t,n){e.exports=n(2465)},3344:function(e,t,n){"use strict";var r=n(1599),o=n(7202),s=n(116),a=n(8710),i=n(3656),c=n(2306),u=n(778),l=n(5037),f=n(7944),d=n(3920),m=n(7564);e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,v=e.headers,E=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&r.isStandardBrowserEnv()&&delete v["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(y+":"+w)}var O=i(e.baseURL,e.url);function x(){if(b){var r="getAllResponseHeaders"in b?c(b.getAllResponseHeaders()):null,s={data:E&&"text"!==E&&"json"!==E?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};o((function(e){t(e),g()}),(function(e){n(e),g()}),s),b=null}}if(b.open(e.method.toUpperCase(),a(O,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(x)},b.onabort=function(){b&&(n(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){n(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var N=(e.withCredentials||u(O))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;N&&(v[e.xsrfHeaderName]=N)}"setRequestHeader"in b&&r.forEach(v,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete v[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),E&&"json"!==E&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(n(!e||e&&e.type?new d:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null);var R=m(O);R&&-1===["http","https","file"].indexOf(R)?n(new f("Unsupported protocol "+R+":",f.ERR_BAD_REQUEST,e)):b.send(h)}))}},2465:function(e,t,n){"use strict";var r=n(1599),o=n(6013),s=n(2234),a=n(5469);var i=function e(t){var n=new s(t),i=o(s.prototype.request,n);return r.extend(i,s.prototype,n),r.extend(i,n),i.create=function(n){return e(a(t,n))},i}(n(5610));i.Axios=s,i.CanceledError=n(3920),i.CancelToken=n(4396),i.isCancel=n(7458),i.VERSION=n(1191).version,i.toFormData=n(9937),i.AxiosError=n(7944),i.Cancel=i.CanceledError,i.all=function(e){return Promise.all(e)},i.spread=n(2744),i.isAxiosError=n(6683),e.exports=i,e.exports.default=i},4396:function(e,t,n){"use strict";var r=n(3920);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},3920:function(e,t,n){"use strict";var r=n(7944);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}n(1599).inherits(o,r,{__CANCEL__:!0}),e.exports=o},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},2234:function(e,t,n){"use strict";var r=n(1599),o=n(8710),s=n(5950),a=n(4126),i=n(5469),c=n(3656),u=n(8260),l=u.validators;function f(e){this.defaults=e,this.interceptors={request:new s,response:new s}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=i(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!o){var f=[a,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(c),s=Promise.resolve(t);f.length;)s=s.then(f.shift(),f.shift());return s}for(var d=t;r.length;){var m=r.shift(),p=r.shift();try{d=m(d)}catch(h){p(h);break}}try{s=a(d)}catch(h){return Promise.reject(h)}for(;c.length;)s=s.then(c.shift(),c.shift());return s},f.prototype.getUri=function(e){e=i(this.defaults,e);var t=c(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(i(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f},7944:function(e,t,n){"use strict";var r=n(1599);function o(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=o.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(o,a),Object.defineProperty(s,"isAxiosError",{value:!0}),o.from=function(e,t,n,a,i,c){var u=Object.create(s);return r.toFlatObject(e,u,(function(e){return e!==Error.prototype})),o.call(u,e.message,t,n,a,i),u.name=e.name,c&&Object.assign(u,c),u},e.exports=o},5950:function(e,t,n){"use strict";var r=n(1599);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},3656:function(e,t,n){"use strict";var r=n(789),o=n(7020);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},4126:function(e,t,n){"use strict";var r=n(1599),o=n(7989),s=n(7458),a=n(5610),i=n(3920);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new i}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5469:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||s,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},7202:function(e,t,n){"use strict";var r=n(7944);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},7989:function(e,t,n){"use strict";var r=n(1599),o=n(5610);e.exports=function(e,t,n){var s=this||o;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},5610:function(e,t,n){"use strict";var r=n(1599),o=n(4188),s=n(7944),a=n(5037),i=n(9937),c={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(l=n(3344)),l),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,s=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||s&&"multipart/form-data"===a){var c=this.env&&this.env.FormData;return i(n?{"files[]":e}:e,c&&new c)}return s||"application/json"===a?(u(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(a){if("SyntaxError"===i.name)throw s.from(i,s.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(2753)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f},5037:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},1191:function(e){e.exports={version:"0.27.2"}},6013:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8710:function(e,t,n){"use strict";var r=n(1599);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},7020:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},116:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6683:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},778:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},4188:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},2753:function(e){e.exports=null},2306:function(e,t,n){"use strict";var r=n(1599),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,a={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},7564:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},2744:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},9937:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||new FormData;var n=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(s,a){if(r.isPlainObject(s)||r.isArray(s)){if(-1!==n.indexOf(s))throw Error("Circular reference detected in "+a);n.push(s),r.forEach(s,(function(n,s){if(!r.isUndefined(n)){var i,c=a?a+"."+s:s;if(n&&!a&&"object"==typeof n)if(r.endsWith(s,"{}"))n=JSON.stringify(n);else if(r.endsWith(s,"[]")&&(i=r.toArray(n)))return void i.forEach((function(e){!r.isUndefined(e)&&t.append(c,o(e))}));e(n,c)}})),n.pop()}else t.append(a,o(s))}(e),t}},8260:function(e,t,n){"use strict";var r=n(1191).version,o=n(7944),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={};s.transitional=function(e,t,n){function s(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,i){if(!1===e)throw new o(s(r," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,i)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),s=r.length;s-- >0;){var a=r[s],i=t[a];if(i){var c=e[a],u=void 0===c||i(c,a,e);if(!0!==u)throw new o("option "+a+" must be "+u,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+a,o.ERR_BAD_OPTION)}},validators:s}},1599:function(e,t,n){"use strict";var r,o=n(6013),s=Object.prototype.toString,a=(r=Object.create(null),function(e){var t=s.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function i(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function c(e){return Array.isArray(e)}function u(e){return void 0===e}var l=i("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function d(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var m=i("Date"),p=i("File"),h=i("Blob"),v=i("FileList");function E(e){return"[object Function]"===s.call(e)}var g=i("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var y,w=(y="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return y&&e instanceof y});e.exports={isArray:c,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||E(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:d,isUndefined:u,isDate:m,isFile:p,isBlob:h,isFunction:E,isStream:function(e){return f(e)&&E(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function n(n,r){d(t[r])&&d(n)?t[r]=e(t[r],n):d(n)?t[r]=e({},n):c(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)b(arguments[r],n);return t},extend:function(e,t,n){return b(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,s,a={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)a[s=r[o]]||(t[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:i,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(u(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:v}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),c(e.child))}}function l(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var s=e.attr,c=e.title,u=i(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(o)}},2618:function(e,t){"use strict";t.Z=void 0;var n=function(e,t){void 0===t&&(t="start");var n=document.querySelector(e);return!!n&&(n.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=n},5791:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(7144),s=n(3639),a=n(262),i=n(2618),c=n(3750),u=n(6633),l=n.n(u);t.default=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],u=(0,r.useState)(!1),f=u[0],d=u[1],m=(0,r.useState)({name:"",subject:"",email:"",message:""}),p=m[0],h=m[1],v=(0,r.useState)(!1),E=v[0],g=v[1],b=(0,r.useState)(!1),y=b[0],w=b[1];return"undefined"!=typeof window&&(window.addEventListener("scroll",(function(){window.scrollY>=60*window.innerHeight/100?n(!0):n(!1)})),window.addEventListener("scroll",(function(){window.scrollY>=120*window.innerHeight/100?d(!0):d(!1)}))),(0,r.useEffect)((function(){console.log("effect")}),[f,t]),(0,r.useEffect)((function(){return function(){console.log("clean up")}}),[]),r.createElement(o.Z,null,r.createElement(a.Z,{title:"Contact Us"}),r.createElement("div",{className:"contacts carousel"},r.createElement(s.Z,{className:"h-100 w-100"},r.createElement("div",{className:"d-flex h-100 align-items-center"},r.createElement("div",{className:"d-block pb-3 carousel-content w-100"},r.createElement("div",{className:"row mt-5 mt-md-0 mt-lg-0"},r.createElement("div",{className:"col-12 col-lg"},r.createElement("h1",{className:"my-0"},"Get"),r.createElement("h1",{className:"m-0"},"In Touch"),r.createElement("div",{className:"subtitle my-3"},r.createElement("p",{className:"pt-3 description"},"We are your solution."))),r.createElement("div",{className:"col-12 col-lg"},r.createElement("div",{className:"d-block d-lg-flex w-100 justify-content-end"},r.createElement("div",{className:"d-block quick-nav-container text-left text-lg-right mt-4 mt-md-3 mt-lg-0"},r.createElement("span",{className:f?"d-none":t?"contacts scrolled font-weight-bold":"secondary quick-nav title font-weight-bold"},"CONTACTS"),r.createElement("ul",{className:f?"d-lg-none":t?"mt-2 contacts scrolled":"mt-2 font-weight-normal"},r.createElement("li",{style:{gridGap:"0rem"},className:"my-1"},"6th Floor, Tanzanite Park,",r.createElement("br",null)," Old Bagamoyo Road,",r.createElement("br",null),"Dar es Salaam, TANZANIA"),r.createElement("li",{style:{gridGap:"0rem"},className:"my-1"},"PHONE:",r.createElement("br",null),"+255 785 083 324"),r.createElement("li",{style:{gridGap:"0rem"},className:"my-1"},"EMAIL:",r.createElement("br",null),"info@quantial.solutions")))))))),r.createElement("div",{id:"scroll_button",className:"d-block w-100"},r.createElement("div",{className:"d-block"},r.createElement("span",{className:"d-block text-center text-md-center text-lg-center scroll-label","aria-hidden":"true",onClick:function(){return(0,i.Z)("#about_us")}},"WRITE US"),r.createElement("div",{className:"d-block"},r.createElement("div",{className:"scroll-container mx-auto mx-md-auto mx-lg-auto","aria-hidden":"true",onClick:function(){return(0,i.Z)("#write_us")}},r.createElement(c.nlg,{className:"d-flex d-justify-content-center scroll-down text-center"}))))))),r.createElement("section",{className:"content",id:"write_us"},r.createElement(s.Z,null,r.createElement("div",{className:"w-100 w-lg-63 d-block"},r.createElement("h2",{className:"divider"},"write us"),r.createElement("p",{className:"para-1"},"Write us and we will get back to as soon as possible. Or call by the contacts provided on the right."),r.createElement("form",null,r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"name"},"Name:"),r.createElement("input",{type:"text",onChange:function(e){w(!1),h(Object.assign({},p,{email:e.target.value}))},className:"form-control rounded-sm",name:"name",id:"name","aria-describedby":"nameHelp",placeholder:"full name"})),r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"email"},"Email:"),r.createElement("input",{type:"email",onChange:function(e){w(!1),h(Object.assign({},p,{email:e.target.value}))},className:"form-control rounded-sm",name:"email",id:"email","aria-describedby":"emailHelp",placeholder:"email@email.com"}),r.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"subject"},"Subject:"),r.createElement("input",{type:"text",onChange:function(e){w(!1),h(Object.assign({},p,{email:e.target.value}))},className:"form-control rounded-sm",name:"subject",id:"subject",placeholder:"subject","aria-describedby":"subjectHelp"})),r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"message"},"Message:"),r.createElement("textarea",{className:"form-control rounded-sm",onChange:function(e){w(!1),h(Object.assign({},p,{email:e.target.value}))},id:"message",placeholder:"How may we help you?",rows:"8",name:"message"})),r.createElement("div",{className:"d-flex justify-content-end"},r.createElement("button",{className:y?"btn btn-sm-lg btn-success":"btn btn-sm-lg .quantial-btn",onClick:function(e){e.preventDefault(),g(!0),w(!1);var t=Object.assign({},p,{sender:"onesmo@quantial.solutions",recievers:["onesmo@quantial.solutions, salim.nassor.sn@gmail.com"],header:"Contact form from Quantial Solutions website"});h(t),l().post("https://qyxpx21ks2.execute-api.eu-west-1.amazonaws.com/prod/contact-us",t).then((function(e){console.log(e),console.log(e.data),w(!0),g(!1)})).catch((function(e){g(!1),console.log(e)}))},type:"submit"},E&&!y&&r.createElement("span",null,r.createElement("span",{className:"spinner-border spinner-border-sm mr-3",role:"status"}),"Submitting..."),!E&&!y&&r.createElement("span",null,"Submit"),y&&r.createElement("span",null,r.createElement("span",{className:"mr-3"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-check",viewBox:"0 0 16 16"},r.createElement("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}))),"Submitted"))))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-7313ff31581940994861.js.map