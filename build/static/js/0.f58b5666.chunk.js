/*! For license information please see 0.f58b5666.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-pb"]=this["webpackJsonpreact-pb"]||[]).push([[0],{241:function(e,t,n){"use strict";var r,i=n(13),o=n(78),a=n(9),s=n(34),u=n(242),c="0.4.32",f=1e4,l="w:"+c,p="FIS_v2",d=36e5,h=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),v=new s.b("installations","Installations",h);function b(e){return e instanceof s.c&&e.code.includes("request-failed")}function g(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function y(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function j(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r;return Object(a.g)(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,v.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function m(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function w(e,t){var n=t.refreshToken,r=m(e);return r.append("Authorization",function(e){return p+" "+e}(n)),r}function O(e){return Object(a.e)(this,void 0,void 0,(function(){var t;return Object(a.g)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function S(e,t){var n=t.fid;return Object(a.e)(this,void 0,void 0,(function(){var t,r,i,o,s,u;return Object(a.g)(this,(function(a){switch(a.label){case 0:return t=g(e),r=m(e),i={fid:n,authVersion:p,appId:e.appId,sdkVersion:l},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,O((function(){return fetch(t,o)}))];case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3];case 2:return u=a.sent(),[2,{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:y(u.authToken)}];case 3:return[4,j("Create Installation",s)];case 4:throw a.sent()}}))}))}function I(e){return new Promise((function(t){setTimeout(t,e)}))}var _=/^[cdef][\w-]{21}$/;function C(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){var t=(n=e,btoa(String.fromCharCode.apply(String,Object(a.i)([],Object(a.h)(n)))).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}(e);return _.test(t)?t:""}catch(r){return""}}function k(e){return e.appName+"!"+e.appId}var T=new Map;function D(e,t){var n=k(e);x(n,t),function(e,t){var n=q();n&&n.postMessage({key:e,fid:t});E()}(n,t)}function x(e,t){var n,r,i=T.get(e);if(i)try{for(var o=Object(a.j)(i),s=o.next();!s.done;s=o.next()){(0,s.value)(t)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var P=null;function q(){return!P&&"BroadcastChannel"in self&&((P=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){x(e.data.key,e.data.fid)}),P}function E(){0===T.size&&P&&(P.close(),P=null)}var A,N="firebase-installations-store",B=null;function K(){return B||(B=Object(u.openDb)("firebase-installations-database",1,(function(e){if(0===e.oldVersion)e.createObjectStore(N)}))),B}function L(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r,i,o,s;return Object(a.g)(this,(function(a){switch(a.label){case 0:return n=k(e),[4,K()];case 1:return r=a.sent(),i=r.transaction(N,"readwrite"),[4,(o=i.objectStore(N)).get(n)];case 2:return s=a.sent(),[4,o.put(t,n)];case 3:return a.sent(),[4,i.complete];case 4:return a.sent(),s&&s.fid===t.fid||D(e,t.fid),[2,t]}}))}))}function V(e){return Object(a.e)(this,void 0,void 0,(function(){var t,n,r;return Object(a.g)(this,(function(i){switch(i.label){case 0:return t=k(e),[4,K()];case 1:return n=i.sent(),[4,(r=n.transaction(N,"readwrite")).objectStore(N).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function M(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r,i,o,s,u;return Object(a.g)(this,(function(a){switch(a.label){case 0:return n=k(e),[4,K()];case 1:return r=a.sent(),i=r.transaction(N,"readwrite"),[4,(o=i.objectStore(N)).get(n)];case 2:return s=a.sent(),void 0!==(u=t(s))?[3,4]:[4,o.delete(n)];case 3:return a.sent(),[3,6];case 4:return[4,o.put(u,n)];case 5:a.sent(),a.label=6;case 6:return[4,i.complete];case 7:return a.sent(),!u||s&&s.fid===u.fid||D(e,u.fid),[2,u]}}))}))}function $(e){return Object(a.e)(this,void 0,void 0,(function(){var t,n,r;return Object(a.g)(this,(function(i){switch(i.label){case 0:return[4,M(e,(function(n){var r=function(e){var t=e||{fid:C(),registrationStatus:0};return z(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(v.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r;return Object(a.g)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,S(e,t)];case 1:return n=i.sent(),[2,L(e,n)];case 2:return b(r=i.sent())&&409===r.customData.serverCode?[4,V(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,L(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:F(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function F(e){return Object(a.e)(this,void 0,void 0,(function(){var t,n,r,i;return Object(a.g)(this,(function(o){switch(o.label){case 0:return[4,J(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,I(100)];case 3:return o.sent(),[4,J(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,$(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function J(e){return M(e,(function(e){if(!e)throw v.create("installation-not-found");return z(e)}))}function z(e){return 1===(t=e).registrationStatus&&t.registrationTime+f<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function R(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(a.e)(this,void 0,void 0,(function(){var e,i,o,s,u,c,f;return Object(a.g)(this,(function(a){switch(a.label){case 0:return e=function(e,t){var n=t.fid;return g(e)+"/"+n+"/authTokens:generate"}(n,t),i=w(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:l}},u={method:"POST",headers:i,body:JSON.stringify(s)},[4,O((function(){return fetch(e,u)}))];case 1:return(c=a.sent()).ok?[4,c.json()]:[3,3];case 2:return f=a.sent(),[2,y(f)];case 3:return[4,j("Generate Auth Token",c)];case 4:throw a.sent()}}))}))}function U(e,t){return void 0===t&&(t=!1),Object(a.e)(this,void 0,void 0,(function(){var n,r,i;return Object(a.g)(this,(function(o){switch(o.label){case 0:return[4,M(e.appConfig,(function(r){if(!H(r))throw v.create("not-registered");var i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d}(e)}(i))return r;if(1===i.requestStatus)return n=function(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r;return Object(a.g)(this,(function(i){switch(i.label){case 0:return[4,G(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,I(100)];case 3:return i.sent(),[4,G(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,U(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw v.create("app-offline");var o=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(a.a)(Object(a.a)({},e),{authToken:t})}(r);return n=function(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r,i;return Object(a.g)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,R(e,t)];case 1:return n=o.sent(),i=Object(a.a)(Object(a.a)({},t),{authToken:n}),[4,L(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!b(r=o.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,V(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(a.a)(Object(a.a)({},t),{authToken:{requestStatus:0}}),[4,L(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,o),o}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function G(e){return M(e,(function(e){if(!H(e))throw v.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+f<Date.now()?Object(a.a)(Object(a.a)({},e),{authToken:{requestStatus:0}}):e}))}function H(e){return void 0!==e&&2===e.registrationStatus}function Q(e){return Object(a.e)(this,void 0,void 0,(function(){var t;return Object(a.g)(this,(function(n){switch(n.label){case 0:return[4,$(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function W(e,t){return Object(a.e)(this,void 0,void 0,(function(){var n,r,i,o;return Object(a.g)(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid;return g(e)+"/"+n}(e,t),r=w(e,t),i={method:"DELETE",headers:r},[4,O((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,j("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function X(e,t){var n=e.appConfig;return function(e,t){q();var n=k(e),r=T.get(n);r||(r=new Set,T.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=k(e),r=T.get(n);r&&(r.delete(t),0===r.size&&T.delete(n),E())}(n,t)}}function Y(e){return v.create("missing-app-config-values",{valueName:e})}(A=i.a).INTERNAL.registerComponent(new o.a("installations",(function(e){var t=e.getProvider("app").getImmediate(),n=function(e){var t,n;if(!e||!e.options)throw Y("App Configuration");if(!e.name)throw Y("App Name");try{for(var r=Object(a.j)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Y(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r={appConfig:n,platformLoggerProvider:e.getProvider("platform-logger")},i={app:t,getId:function(){return function(e){return Object(a.e)(this,void 0,void 0,(function(){var t,n,r;return Object(a.g)(this,(function(i){switch(i.label){case 0:return[4,$(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):U(e).catch(console.error),[2,n.fid]}}))}))}(r)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(a.e)(this,void 0,void 0,(function(){return Object(a.g)(this,(function(n){switch(n.label){case 0:return[4,Q(e.appConfig)];case 1:return n.sent(),[4,U(e,t)];case 2:return[2,n.sent().token]}}))}))}(r,e)},delete:function(){return function(e){return Object(a.e)(this,void 0,void 0,(function(){var t,n;return Object(a.g)(this,(function(r){switch(r.label){case 0:return[4,M(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw v.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw v.create("app-offline");case 3:return[4,W(t,n)];case 4:return r.sent(),[4,V(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(r)},onIdChange:function(e){return X(r,e)}};return i}),"PUBLIC")),A.registerVersion("@firebase/installations",c)},242:function(e,t,n){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){n(i=e[t].apply(e,r)).then(o,a)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new f(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function h(e){this._db=e}function v(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new d(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new h(e)}))}function b(e){return r(indexedDB,"deleteDatabase",[e])}o(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},o(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},o(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[c,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=v,e.deleteDb=b,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=0.f58b5666.chunk.js.map