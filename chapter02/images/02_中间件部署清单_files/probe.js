!function(){var f=window.performance?window.performance:window.Performance,m=navigator.userAgent,t=new Function("return!+[1,]")(),p="_SN_DATA",h="SN_SESSION_ID",v="SN_DISTINCT_ID",i="SN_CITY_INFO",w="custno",g=null,s=[],c=[],u=[],S=null,T=null,n=null,e=null,r=2e3,d=null,l=1e4,y=!1,E=null,x=G(),L={},b=[],a=0,I=G(),P=!1,_="dcbpm.suning.cn",C="/dc-web/performance.gif",k="/dc-web/resource.gif",o="/dc-web/xhr.gif",N="/dc-web/error.gif",R="ipservice.suning.com/ipQuery.do",B={},M={navigationStart:"navigationStart",unloadEventStart:"unloadEventStart",unloadEventEnd:"unloadEventEnd",redirectStart:"redirectStart",redirectEnd:"redirectEnd",fetchStart:"fetchStart",domainLookupStart:"domainLookupStart",domainLookupEnd:"domainLookupEnd",connectStart:"connectStart",connectEnd:"connectEnd",secureConnectionStart:"secureConnectionStart",requestStart:"requestStart",responseStart:"responseStart",responseEnd:"responseEnd",domLoading:"domLoading",domInteractive:"domInteractive",domContentLoadedEventStart:"domContentLoadedEventStart",domContentLoadedEventEnd:"domContentLoadedEventEnd",domComplete:"domComplete",loadEventStart:"loadEventStart",loadEventEnd:"loadEventEnd"},j="";function q(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}j=e()+"-"+e()+e()}var A,D,W,F=function(){var t=!1;try{window.localStorage&&window.localStorage.setItem(j,j),window.localStorage&&window.localStorage.removeItem(j),t=!0}catch(e){t=!1}return t}();try{window.history.pushState=(A=window.history,W=A[D="pushState"],function(){var e=W.apply(this,arguments),t=new Event(D);return t.arguments=arguments,window.dispatchEvent(t),e})}catch(e){}function U(e,t,n){if(void 0===t){var r=null;if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),a=0;a<o.length;a++){var i=H(o[a]);if(i.substring(0,e.length+1)===e+"="){r=Y(i.substring(e.length+1));break}}return r}n=n||{},null===t&&(t="",n.expires=-1);var s,c="";n.expires&&("number"==typeof n.expires||n.expires.toUTCString)&&("number"==typeof n.expires?(s=new Date).setTime(s.getTime()+24*n.expires*60*60*1e3):s=n.expires,c="; expires="+s.toUTCString());var u=n.path?"; path="+n.path:"",d=n.domain?"; domain="+n.domain:"",l=n.secure?"; secure":"";document.cookie=[e,"=",V(t),c,u,d,l].join("")}function O(e){var t={};try{if(window.JSON)t=JSON.parse(e);else{t=new Function("return"+e)}}catch(e){}return t}function z(e){var t="";try{t=window.JSON?JSON.stringify(e):function e(t){switch(typeof t){case"object":if(!t)return"null";var n,r;if(t instanceof Array){for(n="[",r=0;r<t.length;r++)n+=(0<r?",":"")+e(t[r]);return n+"]"}if(t instanceof Date)return t.getTime().toString();n="{";var o=0;for(var a in t)if("function"!=typeof t[a]){var i=e(t[a]);n+=(0<o?",":"")+e(a)+":"+i,o++}return n+"}";case"string":return'"'+t.replace(/([\"\\])/g,"\\$1").replace(/\n/g,"\\n")+'"';case"number":return t.toString();case"boolean":return t?"true":"false";case"function":return e(t.toString());case"undefined":default:return'"undefined"'}}(e)}catch(e){}return t}function H(e){var t=String.prototype.trim;return(t?function(e){return null===e?"":t.call(e)}:function(e){return null===e?"":e.toString().replace(/^\s+/,"").replace(/\s+$/,"")})(e)}function X(e,t,n,r){}function J(e){return"function"==typeof e}function $(e){return U(e)}function K(e,t,n){U(e,t,n)}function Q(e){for(var t in e)return!1;return!0}function V(e){var t=e;try{t=encodeURIComponent?encodeURIComponent(e):e}catch(e){}return t}function Y(e){var t=e;try{t=decodeURIComponent?decodeURIComponent(e):e}catch(e){}return t}function G(){return(new Date).getTime()}function Z(e,t){if((e=e||[])&&0<e.length)for(var n=0;n<e.length;n++)e[n]&&t(e[n],n,e)}function ee(){for(var e=[],t=0,n=arguments.length;t<n;t++)e.push(arguments[t]);return e}function te(e,t,n,r,o){if(!e)return!1;if(J(n)&&(r=n,n=null),t=t||"",r=J(r)?r:X,window.navigator&&window.navigator.sendBeacon&&/^http/i.test(e)&&!o){var a=window.navigator.sendBeacon(e,t);r(!a)}else{var i;if(window.XDomainRequest)(i=new XDomainRequest).open("POST",e),i.onload=function(){r(null,i.responseText)},ae(i,"load",function(){r(null,i.responseText)}),ae(i,"error",function(){r("post("+e+") error")}),ne(!0,i,"onerror",function(e){return function(){r("post error",i.responseText),J(e)&&e.apply(this,arguments)}}),i.send(t);else if(window.XMLHttpRequest){(i=new window.XMLHttpRequest).overrideMimeType&&i.overrideMimeType("text/html");try{i._wrap=1}catch(e){}i.onreadystatechange=function(e){4==i.readyState&&200==i.status&&r(null,i.responseText)},i.onerror&&ne(!0,i,"onerror",function(e){return function(){r("post err",i.responseText),J(e)&&e.apply(this,arguments)}});try{i.open("POST",e,!0)}catch(e){}for(var s in n)i.setRequestHeader(s,n[s]);i.send(t)}else r(!1)}}function ne(t,e,n,r,o){var a;try{a=e[n]}catch(e){if(!t)return!1}if(!a&&!t)return!1;if(a&&a._wrap)return!1;try{e[n]=r(a,o)}catch(e){return!1}return e[n]._wrap=[a],!0}function re(s){Z(["setTimeout","setInterval"],function(e){ne(!0,window,e,function(i){return function(){var e,t,n,r,o=ee.apply(this,arguments),a=o[0];J(a)&&(t=a,n=s,r=!0,e=function(){try{E=n,r&&re(n),t.apply(this,arguments),r&&oe()}catch(e){r&&oe()}}),e&&(o[0]=e),i.apply?i.apply(this,o):Function.prototype.apply.apply(i,[i,o])}})})}function oe(){Z(["setTimeout","setInterval"],function(e){!function(e,t){try{var n=e[t]._wrap;n&&(e[t]=n[0],e[t]._wrap=null,delete e[t]._wrap)}catch(e){}}(window,e)})}function ae(e,t,n,r){if(!e||!t)return!1;if(n=J(n)?n:X,r="boolean"==typeof r&&r,e.addEventListener)try{e.addEventListener(t,n,r)}catch(e){}else if(e.attachEvent)try{e.attachEvent("on"+t,n)}catch(e){}else e["on"+t]=n}var ie=function(){function e(e){return e<0?NaN:e<=30?0|Math.random()*(1<<e):e<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<e-30))*(1<<30):NaN}function t(e,t){for(var n=e.toString(16),r=t-n.length,o="0";0<r;r>>>=1,o+=o)1&r&&(n=o+n);return n}return function(){return t(e(32),8)+"-"+t(e(16),4)+"-"+t(16384|e(12),4)+"-"+t(32768|e(14),4)+"-"+t(e(48),12)}}();function se(e,t){return function(){return e.apply(t,arguments)}}function ce(e,t,n){F?(se(localStorage.setItem,localStorage),localStorage.setItem(e,t)):K(e,t,{expires:n})}function ue(e){return F?(se(localStorage.getItem,localStorage),localStorage.getItem(e)):$(e)}function de(e,t){var n=(/^https/i.test(document.URL)?"https":"http")+"://"+e;return t&&(n+=t),n}function le(e){return"string"==typeof e?e.length:window.ArrayBuffer&&e instanceof ArrayBuffer?e.byteLength:window.Blob&&e instanceof Blob?e.size:e&&e.length?e.length:0}function me(e,t){return(String.prototype.startsWith?function(e,t){return e.startsWith(t)}:function(e,t){return e.slice(0,t.length)===t})(e,t)}function fe(){var e={},n=x;if(f&&f.timing){var t=f.timing;function r(e){return t[e]}function o(e){var t=0;return e&&(t=e-n),t<0&&(t=0),t}n=t.navigationStart;var a,i=o(M.domainLookupStart),s=o(M.domainLookupEnd),c=o(r(M.redirectStart)),u=o(r(M.redirectEnd)),d=o(r(M.connectStart)),l=o(r(M.connectEnd));if(e={fetchStartTime:o(r(M.fetchStart)),requestStartTime:o(r(M.requestStart)),responseStartTime:o(r(M.responseStart)),responseEndTime:o(r(M.responseEnd)),domContentLoadedEventStartTime:o(r(M.domContentLoadedEventStart)),domContentLoadedEventEndTime:o(r(M.domContentLoadedEventEnd)),domInteractiveTime:o(r(M.domInteractive)),domCompleteTime:o(r(M.domComplete)),loadEventStartTime:o(r(M.loadEventStart)),loadEventEndTime:o(r(M.loadEventEnd)),unloadEventStartTime:o(r(M.unloadEventStart)),unloadEventEndTime:o(r(M.unloadEventEnd))},0<=l-d&&(e.connectStartTime=d,e.connectEndTime=l),0<=s-i&&(e.domainLookupStartTime=i,e.domainLookupEndTime=s),0<=u-c&&(e.redirectEndTime=u,e.redirectStartTime=c),t.msFirstPaint&&(a=t.msFirstPaint),window.chrome&&window.chrome.loadTimes){var m=window.chrome.loadTimes();m&&m.firstPaintTime&&(a=1e3*m.firstPaintTime)}a||(a=function(){var r=0;if(f){var e=f.timing;if(f.getEntriesByName){r=e.domLoading;var o=e.navigationStart;Z(b,function(e){var t=f.getEntriesByName(e);if(1==t.length){var n=t[0].responseEnd+o;r<n&&(r=n)}})}}return Math.round(r)}()),a&&(e.firstPaintTime=Math.round(o(a))),S&&(e.firstTouchTime=Math.round(o(S))),t.secureConnectionStart&&(e.secureConnectionStartTime=o(r(M.secureConnectionStart)))}else e={domContentLoadedEventStartTime:T-n,loadEventStartTime:g-n,loadEventEndTime:g-n};return e}function pe(){S||(S=G())}function he(){var e,t,n=Pe.version,r=Pe.key,o=V(document.URL),a=G(),i=j,s=V(ue(v)),c=V($(h)),u=V(document.title),d=document.characterSet,l=function(){var e=ue(p)||"";try{e&&(e=O(e))}catch(e){}return e}()||{};return{v:n,k:r,cref:o,r:a,p:i,d:s,s:c,tit:u,c:d,pref:Y(l.pageRef),firstd:l.isFirstDay,firstt:l.isFirstTime,lg:l.browserLanguage,sw:l.screenWidth,sh:l.screenHeight,ua:V(m),pro:L.p||"",city:L.c||"",dist:L.d||"",userId:(e=$("_snma")||"",t=(""+(e=Y(e)||"")).split("|")||[],$(w)||t[1]||""),resourceType:(document.getElementById("resourceType")||{value:"web"}).value,pageName:(document.getElementById("pagename")||{value:""}).value,exclusive:function(e){try{return window.btoa(e)}catch(e){return""}}(z(B))}}function ve(){return Math.floor(100*Math.random()+1)}var we=!1;function ge(){we||Ee(),e&&(clearInterval(e),e=null),d&&(clearInterval(d),d=null),we=!0}function Se(){we=!1,g||(g=G(),ye(),function(a){if(a=J(a)?a:X,Q(L)){var e=ue(i);e?(e=O(e),72e5<G()-e.t?t():(L=e,a(null))):t()}else a(null);function t(){var e="snpfjsonp1",n=null,t=document.createElement("script"),r=document.getElementsByTagName("head")[0]||document.documentElement;function o(){try{t.clearAttributes&&t.clearAttributes(),t.onload=t.onreadystatechange=t.onerror=null,t.parentNode&&t.parentNode.removeChild(t),t=null,delete window[e]}catch(e){}}ae(t,"error",function(){window.clearTimeout(n),a("error"),o()}),t.src=de(R)+"?callback="+e+"&_="+G(),t.async=!0,window[e]=function(e){e=e||{},window.clearTimeout(n);var t={p:V(e.provinceName),c:V(e.cityName),d:V(e.districtName),t:G()};ce(i,z(L=t)),a(null),o()},n=window.setTimeout(function(){a("timeout")},1e3),r.insertBefore(t,r.firstChild)}}(function(){setTimeout(function(){Ee()},0)}))}function Te(e){if(ve()<=Pe.jsErrorP){var t=function(e){var t=arguments,n=t.length,r={time:G(),lineno:0,colno:0,message:"",messageStack:"",fileName:""};if(0<n){var o=t[0];"string"==typeof o?(r.message=t[0],r.fileName=t[1],r.lineno=t[2],r.colno=t[3],r.messageStack=t[4]):(o instanceof Error||window.ErrorEvent&&o instanceof window.ErrorEvent)&&(o.message&&(r.message=o.message),o.error&&(r.message=o.error.constructor.name+(o.error.message||""),r.messageStack=o.error.stack||""),r.lineno=o.lineno||0,r.colno=o.colno||0,o.filename?r.fileName=o.filename:o.error?r.fileName=o.error.fileName||"":o.target&&(r.fileName=o.target.baseURI||""))}return r}.apply(this,arguments);t.fileName&&s.push(t)}}function ye(){if(!T){if(T=G(),document.querySelectorAll)Z(document.querySelectorAll("head>link,head>script")||[],function(e){var t="";"LINK"==e.tagName?t=e.href:"SCRIPT"!=e.tagName||e.defer||e.async||(t=e.src),t&&b.push(t)});e=setInterval(function(){!function(e){if((T||e)&&(e||(e=!n||(1e4<G()-n||10<=c.length)),0<c.length&&e)){var t=function(){for(var e={common:he(),xhr:[]},t=[],n=[],r=0,o=c.length;r<o;r++){var a=c[r],i={id:a.id,start:a.start,err:a.errorReason,m:a.method,reql:a.requestLength||0,resl:a.responseLength||0,s:a.status,diff:a.timeDiff,tid:a.traceId,u:Y(a.url),at:a.cbTime};i.diff>Pe.slowAjaxT&&ve()<=Pe.slowAjaxP?t.push(i):(i.err||200!=i.s&&0!=i.s)&&ve()<=Pe.ajaxErrorP&&t.push(i),n.push(i)}0<t.length?ve()<=Pe.ajaxP?e.xhr=n:e.xhr=t:ve()<=Pe.ajaxP&&(e.xhr=n);return e}();0<t.xhr.length&&(P=!0,te(de(_,o),z(t))),n=G(),c=[]}}()},r)}}function Ee(){if(y)return!1;if(!g)return!1;try{var o=fe();if(!Q(f)){var a=function(e){var t,n=[];if(f){f.getEntriesByType&&(t=f.getEntriesByType("resource")),f.getEntries&&(t=f.getEntries()),t&&(u=u.concat(t)),f.webkitClearResourceTimings&&f.webkitClearResourceTimings(),f.clearResourceTimings&&f.clearResourceTimings();for(var r=0,o=u.length;r<o;r++){var a=u[r],i={startTime:a.startTime||0,initiatorType:a.initiatorType,name:V(a.name),fetchStartTime:a.fetchStart||0,domainLookupStartTime:a.domainLookupStart||0,domainLookupEndTime:a.domainLookupEnd||0,connectStartTime:a.connectStart||0,connectEndTime:a.connectEnd||0,secureConnectionStartTime:a.secureConnectionStart||0,requestStartTime:a.requestStart||0,responseStartTime:a.responseStart||0,responseEndTime:a.responseEnd||0,encodedBodySize:a.encodedBodySize||0,transferSize:a.transferSize||0};i.responseEndTime-i.startTime>Pe.slowResourceT?ve()<=Pe.slowResourceP&&n.push(i):e>Pe.slowPageT&&ve()<=Pe.slowP&&n.push(i)}}return n}(0<o.loadEventStartTime?o.loadEventStartTime:g-x);function e(){var e,t,n=(e=o,t=he(),e=e||{},t.r=I,{common:t,page:{dc:e.domCompleteTime||0,di:e.domInteractiveTime||0,dclee:e.domContentLoadedEventEndTime||0,dcles:e.domContentLoadedEventStartTime||0,fs:e.fetchStartTime||0,led:e.loadEventEndTime||0,les:e.loadEventStartTime||0,reqs:e.requestStartTime||0,rsps:e.responseStartTime||0,rspe:e.responseEndTime||0,uee:e.unloadEventEndTime||0,ues:e.unloadEventStartTime||0,fp:e.firstPaintTime||0,dls:e.domainLookupStartTime||0,dle:e.domainLookupEndTime||0,ft:e.firstTouchTime||0,scs:e.secureConnectionStartTime||0,cs:e.connectStartTime||0,ce:e.connectEndTime||0,rde:e.redirectEndTime||0,rds:e.redirectStartTime||0}}),r=function(e){for(var t=[],n={common:he(),resources:[]},r=0,o=(e=e||[]).length;r<o;r++){var a=e[r],i={n:a.name,type:a.initiatorType,start:Math.round(a.startTime),ce:Math.round(a.connectEndTime),cs:Math.round(a.connectStartTime),dls:Math.round(a.domainLookupStartTime),dle:Math.round(a.domainLookupEndTime),fs:Math.round(a.fetchStartTime),reqs:Math.round(a.requestStartTime),rspe:Math.round(a.responseEndTime),rsps:Math.round(a.responseStartTime),scs:Math.round(a.secureConnectionStartTime),bs:a.encodedBodySize,ts:a.transferSize,s:"200"};t.push(i)}return 0<t.length&&(n.resources=t),n}(a);te(de(_,C),z(n)),0<r.resources.length&&window.setTimeout(function(){te(de(_,k),z(r))},100),y=!0}0==a.length?0<s.length?e():(ve()<=Pe.normalP||P)&&e():e(),xe(!0),d=setInterval(function(){xe()},l)}}catch(e){}}function xe(e){if(0<s.length||e){P=!0;var t=function(){var e=he();e.r=I;for(var t={common:e,errors:[]},n=0,r=s.length;n<r;n++){var o=s[n],a={time:o.time,cno:o.colno,lno:o.lineno,name:o.fileName,msg:o.message,msgStack:o.messageStack};t.errors.push(a)}return t}();te(de(_,N),z(t)),s=[]}}function Le(){var e=window.XMLHttpRequest;e.prototype&&(ne(!1,e.prototype,"open",function(t){return function(){if(!this._wrap){var e=ee.apply(this,arguments);this._openWrap={method:e[0],url:e[1],start:G()}}try{return t.apply(this,arguments)}catch(e){return Function.prototype.apply.call(t,this,arguments)}}}),ne(!1,e.prototype,"send",function(t){return function(){var r=this,o=0;function n(e){if(4==r.readyState){var t=r._openWrap;if(t){if(4===r.readyState)t.end=G(),t.status=r.status,""!=r.responseType&&"text"!=r.responseType||(t.responseLength=le(r.responseText));else if(r.response)t.responseLength=le(r.response);else try{t.responseLength=le(r.responseText)}catch(e){t.responseLength=0}t.readyState=r.readyState;var n={method:(""+t.method).toUpperCase(),url:function(e){e+="";var t="",n=/^https/i.test(document.URL)?"https":"http",r=document.location.host;if(me(e,"http"))return e;t=me(e,"//")?n+":"+e:me(e,"/")?n+"://"+r+e:me(e,"../")?n+"://"+r+e.replace("../","/"):n+"://"+r+"/"+e;return t}(t.url),timeDiff:0<t.status?t.end-t.start:0,status:t.status,responseLength:t.responseLength,requestLength:t.requestLength,errorReason:0==t.status?e||"error":"",traceId:t.tradeId||"",cbTime:o,id:a++,start:t.start};c.push(n),r._openWrap=null}}}function e(t){return function(){var e;4==r.readyState&&r._openWrap&&(e=G(),r._openWrap.readyState=4,r._openWrap.end=e);try{E&&re(E),t.apply(this,arguments),E&&oe(),E=null}catch(e){E&&oe(),E=null}4==r.readyState&&(o=G()-e),n()}}this._wrap||(this._openWrap.start=G(),this._openWrap.requestLength=arguments[0]?le(arguments[0]):0,ne(!1,this,"onreadystatechange",e)||setTimeout(function(){ne(!1,r,"onreadystatechange",e)},0),ae(this,"error",function(){r._openWrap&&n("error")}),ae(this,"abort",function(){r._openWrap&&n("abort")}),ae(this,"loadstart",function(){r._openWrap&&(r._openWrap.start=G())}),ae(this,"timeout",function(){r._openWrap&&n("timeout")}));try{return t.apply(this,arguments)}catch(e){return Function.prototype.apply.call(t,this,arguments)}}}))}function be(){function e(){var t=window.onerror;window.onerror=function(e){Te.apply(this,arguments),J(t)&&t.apply(this,arguments)},window.onerror._sn=!0}ae(window,"load",function(){Se(),t&&window.setTimeout(function(){window.onerror&&!window.onerror._sn&&e()},0)}),ae(window,"beforeunload",function(){ge()}),ae(window,"pagehide",function(){ge()}),ae(window,"unload",function(){ge()}),t?e():window.addEventListener&&ae(window,"error",Te),ae(document,"scroll",function(){pe()}),ae(document,"keypress",function(){pe()}),ae(document,"click",function(){pe()}),ae(document,"DOMContentLoaded",function(){ye()}),ae(document,"readystatechange",function(){"complete"===document.readyState&&ye()}),"VUE"===Pe.SPA&&ae(window,"pushState",function(){y=!1,q(),Ee()},!1),f&&(ae(f,"resourcetimingbufferfull",function(){if(f.getEntriesByType){var e=f.getEntriesByType("resource");e&&(u=u.concat(e)),f.clearResourceTimings()}}),ae(f,"webkitresourcetimingbufferfull",function(){if(f.getEntriesByType){var e=f.getEntriesByType("resource");e&&(u=u.concat(e)),f.webkitClearResourceTimings()}}))}function Ie(){var e,t;q(),function(){var e=ue(p)||"";e=O(e);var t,n,r="isFirstDay",o="isFirstTime",a="firstDay";n=(t=(t=e)||{})[a],t[o]=n?(n=parseInt(n,10),new Date(n).toDateString()===(new Date).toDateString()?t[r]=!0:t[r]=!1,!1):(t[a]=G(),t[r]=!0),(e=t).pageRef=document.referrer||"",e.browserLanguage=navigator.language||navigator.browserLanguage,e.screenHeight=window.screen&&window.screen.height,e.screenWidth=window.screen&&window.screen.width,ce(p,z(e),30)}(),e=ue(v),t=$(h),e||(e=ie(),ce(v,e)),t||(t=ie(),K(h,t)),Le(),be()}var Pe={version:"0.0.1",url:"",err_url:"",slowPageT:7e3,slowResourceT:4e3,slowAjaxT:5e3,normalP:50,slowP:100,slowResourceP:100,ajaxP:50,slowAjaxP:100,jsErrorP:100,ajaxErrorP:100},_e={key:"50c768fe3e3a44cf8962a46584358f53",version:"V0.1.0",SPA:"'##SPA##'",slowPageT:parseInt("5000",10)||7e3,slowResourceT:parseInt("5000",10)||4e3,slowAjaxT:parseInt("200",10)||5e3,normalP:parseInt("50",10)||50,slowP:parseInt("100",10)||100,slowResourceP:parseInt("100",10)||100,ajaxP:parseInt("50",10)||50,slowAjaxP:parseInt("100",10)||100,jsErrorP:parseInt("100",10)||100,ajaxErrorP:parseInt("100",10)||100};function Ce(){for(var e in _e){var t=_e[e];t&&-1==(t+"").indexOf("##")&&(Pe[e]=t)}}window._snBusError=window._snBusError||{},window._snBusError.bizExcp=function(e){e=e||{};var t=$("_snmb")||"",n=(""+(t=Y(t)||"")).split("|")||[],r=function(e){var t="";for(var n in e)"string"==typeof e[n]&&(t+=(t?"&":"")+n+"="+V(e[n]));return t}({ct:G(),pvid:$("_snmp")||"",sid:n[0]||"",i:String(Math.random()).substring(2,11),url:V(document.location.href),v:Pe.version,vid:n[1]||"",bizid:e.bid||"",errcode:e.error_code||"",errdetail:V(e.error_detail||""),errtype:e.error_type||"",mbrid:e.member_id||"",mbrlevel:e.member_level||"",region:e.region||"",typname:e.type_name||""});te(de(_,"/dc-web/excp.gif"),r,{"content-type":"application/x-www-form-urlencoded"},null,!0)},window._snBusError.refreshAppExclusiveInfo=function(e,t,n,r,o,a,i,s,c,u){function d(e){return(e||"").substring(0,50)}B={xclsv0:d(e),xclsv1:d(t),xclsv2:d(n),xclsv3:d(r),xclsv4:d(o),xclsv5:d(a),xclsv6:d(i),xclsv7:d(s),xclsv8:d(c),xclsv9:d(u)}},window._snBusError.bpmProbeInit=function(e){_=(_e=e).url,Ce(),Ie()},Ce(),Pe.key&&Ie()}(window,window.document);