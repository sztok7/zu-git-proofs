/* eslint-disable */
function O(){throw new Error("setTimeout has not been defined")}function $(){throw new Error("clearTimeout has not been defined")}var P=O,R=$;typeof globalThis.setTimeout=="function"&&(P=setTimeout);typeof globalThis.clearTimeout=="function"&&(R=clearTimeout);function K(n){if(P===setTimeout)return setTimeout(n,0);if((P===O||!P)&&setTimeout)return P=setTimeout,setTimeout(n,0);try{return P(n,0)}catch{try{return P.call(null,n,0)}catch{return P.call(this,n,0)}}}function vr(n){if(R===clearTimeout)return clearTimeout(n);if((R===$||!R)&&clearTimeout)return R=clearTimeout,clearTimeout(n);try{return R(n)}catch{try{return R.call(null,n)}catch{return R.call(this,n)}}}var y=[],B=!1,I,C=-1;function Tr(){!B||!I||(B=!1,I.length?y=I.concat(y):C=-1,y.length&&J())}function J(){if(!B){var n=K(Tr);B=!0;for(var r=y.length;r;){for(I=y,y=[];++C<r;)I&&I[C].run();C=-1,r=y.length}I=null,B=!1,vr(n)}}function Pr(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];y.push(new V(n,r)),y.length===1&&!B&&K(J)}function V(n,r){this.fun=n,this.array=r}V.prototype.run=function(){this.fun.apply(null,this.array)};var Rr="browser",Ir="browser",Ur=!0,Dr={},Sr=[],_r="",Br={},Cr={},kr={};function U(){}var Mr=U,Yr=U,Nr=U,Lr=U,Zr=U,br=U,Fr=U;function qr(n){throw new Error("process.binding is not supported")}function zr(){return"/"}function Wr(n){throw new Error("process.chdir is not supported")}function Gr(){return 0}var _=globalThis.performance||{},Or=_.now||_.mozNow||_.msNow||_.oNow||_.webkitNow||function(){return new Date().getTime()};function $r(n){var r=Or.call(_)*.001,e=Math.floor(r),t=Math.floor(r%1*1e9);return n&&(e=e-n[0],t=t-n[1],t<0&&(e--,t+=1e9)),[e,t]}var Kr=new Date;function Jr(){var n=new Date,r=n-Kr;return r/1e3}var m={nextTick:Pr,title:Rr,browser:Ur,env:Dr,argv:Sr,version:_r,versions:Br,on:Mr,addListener:Yr,once:Nr,off:Lr,removeListener:Zr,removeAllListeners:br,emit:Fr,binding:qr,cwd:zr,chdir:Wr,umask:Gr,hrtime:$r,platform:Ir,release:Cr,config:kr,uptime:Jr},G={};Object.keys(G).forEach(n=>{let r=n.split("."),e=m;for(let t=0;t<r.length;t++){let i=r[t];t===r.length-1?e[i]=G[n]:e=e[i]||(e[i]={})}});var E=[],g=[],Vr=typeof Uint8Array<"u"?Uint8Array:Array,F=!1;function j(){F=!0;for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=n.length;r<e;++r)E[r]=n[r],g[n.charCodeAt(r)]=r;g["-".charCodeAt(0)]=62,g["_".charCodeAt(0)]=63}function Hr(n){F||j();var r,e,t,i,o,u,a=n.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o=n[a-2]==="="?2:n[a-1]==="="?1:0,u=new Vr(a*3/4-o),t=o>0?a-4:a;var c=0;for(r=0,e=0;r<t;r+=4,e+=3)i=g[n.charCodeAt(r)]<<18|g[n.charCodeAt(r+1)]<<12|g[n.charCodeAt(r+2)]<<6|g[n.charCodeAt(r+3)],u[c++]=i>>16&255,u[c++]=i>>8&255,u[c++]=i&255;return o===2?(i=g[n.charCodeAt(r)]<<2|g[n.charCodeAt(r+1)]>>4,u[c++]=i&255):o===1&&(i=g[n.charCodeAt(r)]<<10|g[n.charCodeAt(r+1)]<<4|g[n.charCodeAt(r+2)]>>2,u[c++]=i>>8&255,u[c++]=i&255),u}function Xr(n){return E[n>>18&63]+E[n>>12&63]+E[n>>6&63]+E[n&63]}function Qr(n,r,e){for(var t,i=[],o=r;o<e;o+=3)t=(n[o]<<16)+(n[o+1]<<8)+n[o+2],i.push(Xr(t));return i.join("")}function H(n){F||j();for(var r,e=n.length,t=e%3,i="",o=[],u=16383,a=0,c=e-t;a<c;a+=u)o.push(Qr(n,a,a+u>c?c:a+u));return t===1?(r=n[e-1],i+=E[r>>2],i+=E[r<<4&63],i+="=="):t===2&&(r=(n[e-2]<<8)+n[e-1],i+=E[r>>10],i+=E[r>>4&63],i+=E[r<<2&63],i+="="),o.push(i),o.join("")}f.TYPED_ARRAY_SUPPORT=globalThis.TYPED_ARRAY_SUPPORT!==void 0?globalThis.TYPED_ARRAY_SUPPORT:!0;function k(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function v(n,r){if(k()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(r),n.__proto__=f.prototype):(n===null&&(n=new f(r)),n.length=r),n}function f(n,r,e){if(!f.TYPED_ARRAY_SUPPORT&&!(this instanceof f))return new f(n,r,e);if(typeof n=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return q(this,n)}return rr(this,n,r,e)}f.poolSize=8192;f._augment=function(n){return n.__proto__=f.prototype,n};function rr(n,r,e,t){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer?ee(n,r,e,t):typeof r=="string"?re(n,r,e):ne(n,r)}f.from=function(n,r,e){return rr(null,n,r,e)};f.kMaxLength=k();f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&f[Symbol.species]);function er(n){if(typeof n!="number")throw new TypeError('"size" argument must be a number');if(n<0)throw new RangeError('"size" argument must not be negative')}function jr(n,r,e,t){return er(r),r<=0?v(n,r):e!==void 0?typeof t=="string"?v(n,r).fill(e,t):v(n,r).fill(e):v(n,r)}f.alloc=function(n,r,e){return jr(null,n,r,e)};function q(n,r){if(er(r),n=v(n,r<0?0:z(r)|0),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)n[e]=0;return n}f.allocUnsafe=function(n){return q(null,n)};f.allocUnsafeSlow=function(n){return q(null,n)};function re(n,r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var t=nr(r,e)|0;n=v(n,t);var i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}function b(n,r){var e=r.length<0?0:z(r.length)|0;n=v(n,e);for(var t=0;t<e;t+=1)n[t]=r[t]&255;return n}function ee(n,r,e,t){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(t||0))throw new RangeError("'length' is out of bounds");return e===void 0&&t===void 0?r=new Uint8Array(r):t===void 0?r=new Uint8Array(r,e):r=new Uint8Array(r,e,t),f.TYPED_ARRAY_SUPPORT?(n=r,n.__proto__=f.prototype):n=b(n,r),n}function ne(n,r){if(A(r)){var e=z(r.length)|0;return n=v(n,e),n.length===0||r.copy(n,0,0,e),n}if(r){if(typeof ArrayBuffer<"u"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||ye(r.length)?v(n,0):b(n,r);if(r.type==="Buffer"&&Array.isArray(r.data))return b(n,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function z(n){if(n>=k())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+k().toString(16)+" bytes");return n|0}f.isBuffer=ve;function A(n){return!!(n!=null&&n._isBuffer)}f.compare=function(r,e){if(!A(r)||!A(e))throw new TypeError("Arguments must be Buffers");if(r===e)return 0;for(var t=r.length,i=e.length,o=0,u=Math.min(t,i);o<u;++o)if(r[o]!==e[o]){t=r[o],i=e[o];break}return t<i?-1:i<t?1:0};f.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};f.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return f.alloc(0);var t;if(e===void 0)for(e=0,t=0;t<r.length;++t)e+=r[t].length;var i=f.allocUnsafe(e),o=0;for(t=0;t<r.length;++t){var u=r[t];if(!A(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(i,o),o+=u.length}return i};function nr(n,r){if(A(n))return n.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(n)||n instanceof ArrayBuffer))return n.byteLength;typeof n!="string"&&(n=""+n);var e=n.length;if(e===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return M(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return cr(n).length;default:if(t)return M(n).length;r=(""+r).toLowerCase(),t=!0}}f.byteLength=nr;function te(n,r,e){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return le(this,r,e);case"utf8":case"utf-8":return or(this,r,e);case"ascii":return pe(this,r,e);case"latin1":case"binary":return he(this,r,e);case"base64":return ce(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,r,e);default:if(t)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),t=!0}}f.prototype._isBuffer=!0;function D(n,r,e){var t=n[r];n[r]=n[e],n[e]=t}f.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)D(this,e,e+1);return this};f.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)D(this,e,e+3),D(this,e+1,e+2);return this};f.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)D(this,e,e+7),D(this,e+1,e+6),D(this,e+2,e+5),D(this,e+3,e+4);return this};f.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?or(this,0,r):te.apply(this,arguments)};f.prototype.equals=function(r){if(!A(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:f.compare(this,r)===0};f.prototype.compare=function(r,e,t,i,o){if(!A(r))throw new TypeError("Argument must be a Buffer");if(e===void 0&&(e=0),t===void 0&&(t=r?r.length:0),i===void 0&&(i=0),o===void 0&&(o=this.length),e<0||t>r.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=t)return 0;if(i>=o)return-1;if(e>=t)return 1;if(e>>>=0,t>>>=0,i>>>=0,o>>>=0,this===r)return 0;for(var u=o-i,a=t-e,c=Math.min(u,a),s=this.slice(i,o),h=r.slice(e,t),p=0;p<c;++p)if(s[p]!==h[p]){u=s[p],a=h[p];break}return u<a?-1:a<u?1:0};function tr(n,r,e,t,i){if(n.length===0)return-1;if(typeof e=="string"?(t=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(i)return-1;e=n.length-1}else if(e<0)if(i)e=0;else return-1;if(typeof r=="string"&&(r=f.from(r,t)),A(r))return r.length===0?-1:X(n,r,e,t,i);if(typeof r=="number")return r=r&255,f.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(n,r,e):Uint8Array.prototype.lastIndexOf.call(n,r,e):X(n,[r],e,t,i);throw new TypeError("val must be string, number or Buffer")}function X(n,r,e,t,i){var o=1,u=n.length,a=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(n.length<2||r.length<2)return-1;o=2,u/=2,a/=2,e/=2}function c(l,S){return o===1?l[S]:l.readUInt16BE(S*o)}var s;if(i){var h=-1;for(s=e;s<u;s++)if(c(n,s)===c(r,h===-1?0:s-h)){if(h===-1&&(h=s),s-h+1===a)return h*o}else h!==-1&&(s-=s-h),h=-1}else for(e+a>u&&(e=u-a),s=e;s>=0;s--){for(var p=!0,x=0;x<a;x++)if(c(n,s+x)!==c(r,x)){p=!1;break}if(p)return s}return-1}f.prototype.includes=function(r,e,t){return this.indexOf(r,e,t)!==-1};f.prototype.indexOf=function(r,e,t){return tr(this,r,e,t,!0)};f.prototype.lastIndexOf=function(r,e,t){return tr(this,r,e,t,!1)};function ie(n,r,e,t){e=Number(e)||0;var i=n.length-e;t?(t=Number(t),t>i&&(t=i)):t=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");t>o/2&&(t=o/2);for(var u=0;u<t;++u){var a=parseInt(r.substr(u*2,2),16);if(isNaN(a))return u;n[e+u]=a}return u}function oe(n,r,e,t){return L(M(r,n.length-e),n,e,t)}function ir(n,r,e,t){return L(Ee(r),n,e,t)}function ue(n,r,e,t){return ir(n,r,e,t)}function fe(n,r,e,t){return L(cr(r),n,e,t)}function ae(n,r,e,t){return L(Ae(r,n.length-e),n,e,t)}f.prototype.write=function(r,e,t,i){if(e===void 0)i="utf8",t=this.length,e=0;else if(t===void 0&&typeof e=="string")i=e,t=this.length,e=0;else if(isFinite(e))e=e|0,isFinite(t)?(t=t|0,i===void 0&&(i="utf8")):(i=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-e;if((t===void 0||t>o)&&(t=o),r.length>0&&(t<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var u=!1;;)switch(i){case"hex":return ie(this,r,e,t);case"utf8":case"utf-8":return oe(this,r,e,t);case"ascii":return ir(this,r,e,t);case"latin1":case"binary":return ue(this,r,e,t);case"base64":return fe(this,r,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ae(this,r,e,t);default:if(u)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),u=!0}};f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ce(n,r,e){return r===0&&e===n.length?H(n):H(n.slice(r,e))}function or(n,r,e){e=Math.min(n.length,e);for(var t=[],i=r;i<e;){var o=n[i],u=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=e){var c,s,h,p;switch(a){case 1:o<128&&(u=o);break;case 2:c=n[i+1],(c&192)===128&&(p=(o&31)<<6|c&63,p>127&&(u=p));break;case 3:c=n[i+1],s=n[i+2],(c&192)===128&&(s&192)===128&&(p=(o&15)<<12|(c&63)<<6|s&63,p>2047&&(p<55296||p>57343)&&(u=p));break;case 4:c=n[i+1],s=n[i+2],h=n[i+3],(c&192)===128&&(s&192)===128&&(h&192)===128&&(p=(o&15)<<18|(c&63)<<12|(s&63)<<6|h&63,p>65535&&p<1114112&&(u=p))}}u===null?(u=65533,a=1):u>65535&&(u-=65536,t.push(u>>>10&1023|55296),u=56320|u&1023),t.push(u),i+=a}return se(t)}var Q=4096;function se(n){var r=n.length;if(r<=Q)return String.fromCharCode.apply(String,n);for(var e="",t=0;t<r;)e+=String.fromCharCode.apply(String,n.slice(t,t+=Q));return e}function pe(n,r,e){var t="";e=Math.min(n.length,e);for(var i=r;i<e;++i)t+=String.fromCharCode(n[i]&127);return t}function he(n,r,e){var t="";e=Math.min(n.length,e);for(var i=r;i<e;++i)t+=String.fromCharCode(n[i]);return t}function le(n,r,e){var t=n.length;(!r||r<0)&&(r=0),(!e||e<0||e>t)&&(e=t);for(var i="",o=r;o<e;++o)i+=me(n[o]);return i}function we(n,r,e){for(var t=n.slice(r,e),i="",o=0;o<t.length;o+=2)i+=String.fromCharCode(t[o]+t[o+1]*256);return i}f.prototype.slice=function(r,e){var t=this.length;r=~~r,e=e===void 0?t:~~e,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),e<r&&(e=r);var i;if(f.TYPED_ARRAY_SUPPORT)i=this.subarray(r,e),i.__proto__=f.prototype;else{var o=e-r;i=new f(o,void 0);for(var u=0;u<o;++u)i[u]=this[u+r]}return i};function w(n,r,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>e)throw new RangeError("Trying to access beyond buffer length")}f.prototype.readUIntLE=function(r,e,t){r=r|0,e=e|0,t||w(r,e,this.length);for(var i=this[r],o=1,u=0;++u<e&&(o*=256);)i+=this[r+u]*o;return i};f.prototype.readUIntBE=function(r,e,t){r=r|0,e=e|0,t||w(r,e,this.length);for(var i=this[r+--e],o=1;e>0&&(o*=256);)i+=this[r+--e]*o;return i};f.prototype.readUInt8=function(r,e){return e||w(r,1,this.length),this[r]};f.prototype.readUInt16LE=function(r,e){return e||w(r,2,this.length),this[r]|this[r+1]<<8};f.prototype.readUInt16BE=function(r,e){return e||w(r,2,this.length),this[r]<<8|this[r+1]};f.prototype.readUInt32LE=function(r,e){return e||w(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};f.prototype.readUInt32BE=function(r,e){return e||w(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};f.prototype.readIntLE=function(r,e,t){r=r|0,e=e|0,t||w(r,e,this.length);for(var i=this[r],o=1,u=0;++u<e&&(o*=256);)i+=this[r+u]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i};f.prototype.readIntBE=function(r,e,t){r=r|0,e=e|0,t||w(r,e,this.length);for(var i=e,o=1,u=this[r+--i];i>0&&(o*=256);)u+=this[r+--i]*o;return o*=128,u>=o&&(u-=Math.pow(2,8*e)),u};f.prototype.readInt8=function(r,e){return e||w(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};f.prototype.readInt16LE=function(r,e){e||w(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};f.prototype.readInt16BE=function(r,e){e||w(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};f.prototype.readInt32LE=function(r,e){return e||w(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};f.prototype.readInt32BE=function(r,e){return e||w(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};f.prototype.readFloatLE=function(r,e){return e||w(r,4,this.length),Z(this,r,!0,23,4)};f.prototype.readFloatBE=function(r,e){return e||w(r,4,this.length),Z(this,r,!1,23,4)};f.prototype.readDoubleLE=function(r,e){return e||w(r,8,this.length),Z(this,r,!0,52,8)};f.prototype.readDoubleBE=function(r,e){return e||w(r,8,this.length),Z(this,r,!1,52,8)};function d(n,r,e,t,i,o){if(!A(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+t>n.length)throw new RangeError("Index out of range")}f.prototype.writeUIntLE=function(r,e,t,i){if(r=+r,e=e|0,t=t|0,!i){var o=Math.pow(2,8*t)-1;d(this,r,e,t,o,0)}var u=1,a=0;for(this[e]=r&255;++a<t&&(u*=256);)this[e+a]=r/u&255;return e+t};f.prototype.writeUIntBE=function(r,e,t,i){if(r=+r,e=e|0,t=t|0,!i){var o=Math.pow(2,8*t)-1;d(this,r,e,t,o,0)}var u=t-1,a=1;for(this[e+u]=r&255;--u>=0&&(a*=256);)this[e+u]=r/a&255;return e+t};f.prototype.writeUInt8=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,1,255,0),f.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[e]=r&255,e+1};function Y(n,r,e,t){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(n.length-e,2);i<o;++i)n[e+i]=(r&255<<8*(t?i:1-i))>>>(t?i:1-i)*8}f.prototype.writeUInt16LE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=r&255,this[e+1]=r>>>8):Y(this,r,e,!0),e+2};f.prototype.writeUInt16BE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=r&255):Y(this,r,e,!1),e+2};function N(n,r,e,t){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(n.length-e,4);i<o;++i)n[e+i]=r>>>(t?i:3-i)*8&255}f.prototype.writeUInt32LE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255):N(this,r,e,!0),e+4};f.prototype.writeUInt32BE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255):N(this,r,e,!1),e+4};f.prototype.writeIntLE=function(r,e,t,i){if(r=+r,e=e|0,!i){var o=Math.pow(2,8*t-1);d(this,r,e,t,o-1,-o)}var u=0,a=1,c=0;for(this[e]=r&255;++u<t&&(a*=256);)r<0&&c===0&&this[e+u-1]!==0&&(c=1),this[e+u]=(r/a>>0)-c&255;return e+t};f.prototype.writeIntBE=function(r,e,t,i){if(r=+r,e=e|0,!i){var o=Math.pow(2,8*t-1);d(this,r,e,t,o-1,-o)}var u=t-1,a=1,c=0;for(this[e+u]=r&255;--u>=0&&(a*=256);)r<0&&c===0&&this[e+u+1]!==0&&(c=1),this[e+u]=(r/a>>0)-c&255;return e+t};f.prototype.writeInt8=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,1,127,-128),f.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[e]=r&255,e+1};f.prototype.writeInt16LE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=r&255,this[e+1]=r>>>8):Y(this,r,e,!0),e+2};f.prototype.writeInt16BE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=r&255):Y(this,r,e,!1),e+2};f.prototype.writeInt32LE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24):N(this,r,e,!0),e+4};f.prototype.writeInt32BE=function(r,e,t){return r=+r,e=e|0,t||d(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),f.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255):N(this,r,e,!1),e+4};function ur(n,r,e,t,i,o){if(e+t>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function fr(n,r,e,t,i){return i||ur(n,r,e,4,34028234663852886e22,-34028234663852886e22),pr(n,r,e,t,23,4),e+4}f.prototype.writeFloatLE=function(r,e,t){return fr(this,r,e,!0,t)};f.prototype.writeFloatBE=function(r,e,t){return fr(this,r,e,!1,t)};function ar(n,r,e,t,i){return i||ur(n,r,e,8,17976931348623157e292,-17976931348623157e292),pr(n,r,e,t,52,8),e+8}f.prototype.writeDoubleLE=function(r,e,t){return ar(this,r,e,!0,t)};f.prototype.writeDoubleBE=function(r,e,t){return ar(this,r,e,!1,t)};f.prototype.copy=function(r,e,t,i){if(t||(t=0),!i&&i!==0&&(i=this.length),e>=r.length&&(e=r.length),e||(e=0),i>0&&i<t&&(i=t),i===t||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-e<i-t&&(i=r.length-e+t);var o=i-t,u;if(this===r&&t<e&&e<i)for(u=o-1;u>=0;--u)r[u+e]=this[u+t];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(u=0;u<o;++u)r[u+e]=this[u+t];else Uint8Array.prototype.set.call(r,this.subarray(t,t+o),e);return o};f.prototype.fill=function(r,e,t,i){if(typeof r=="string"){if(typeof e=="string"?(i=e,e=0,t=this.length):typeof t=="string"&&(i=t,t=this.length),r.length===1){var o=r.charCodeAt(0);o<256&&(r=o)}if(i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!f.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else typeof r=="number"&&(r=r&255);if(e<0||this.length<e||this.length<t)throw new RangeError("Out of range index");if(t<=e)return this;e=e>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var u;if(typeof r=="number")for(u=e;u<t;++u)this[u]=r;else{var a=A(r)?r:M(new f(r,i).toString()),c=a.length;for(u=0;u<t-e;++u)this[u+e]=a[u%c]}return this};var de=/[^+\/0-9A-Za-z-_]/g;function xe(n){if(n=ge(n).replace(de,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function ge(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function me(n){return n<16?"0"+n.toString(16):n.toString(16)}function M(n,r){r=r||1/0;for(var e,t=n.length,i=null,o=[],u=0;u<t;++u){if(e=n.charCodeAt(u),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(u+1===t){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return o}function Ee(n){for(var r=[],e=0;e<n.length;++e)r.push(n.charCodeAt(e)&255);return r}function Ae(n,r){for(var e,t,i,o=[],u=0;u<n.length&&!((r-=2)<0);++u)e=n.charCodeAt(u),t=e>>8,i=e%256,o.push(i),o.push(t);return o}function cr(n){return Hr(xe(n))}function L(n,r,e,t){for(var i=0;i<t&&!(i+e>=r.length||i>=n.length);++i)r[i+e]=n[i];return i}function ye(n){return n!==n}function ve(n){return n!=null&&(!!n._isBuffer||sr(n)||Te(n))}function sr(n){return!!n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function Te(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&sr(n.slice(0,0))}function Z(n,r,e,t,i){var o,u,a=i*8-t-1,c=(1<<a)-1,s=c>>1,h=-7,p=e?i-1:0,x=e?-1:1,l=n[r+p];for(p+=x,o=l&(1<<-h)-1,l>>=-h,h+=a;h>0;o=o*256+n[r+p],p+=x,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=t;h>0;u=u*256+n[r+p],p+=x,h-=8);if(o===0)o=1-s;else{if(o===c)return u?NaN:(l?-1:1)*(1/0);u=u+Math.pow(2,t),o=o-s}return(l?-1:1)*u*Math.pow(2,o-t)}function pr(n,r,e,t,i,o){var u,a,c,s=o*8-i-1,h=(1<<s)-1,p=h>>1,x=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=t?0:o-1,S=t?1:-1,yr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(c=Math.pow(2,-u))<1&&(u--,c*=2),u+p>=1?r+=x/c:r+=x*Math.pow(2,1-p),r*c>=2&&(u++,c/=2),u+p>=h?(a=0,u=h):u+p>=1?(a=(r*c-1)*Math.pow(2,i),u=u+p):(a=r*Math.pow(2,p-1)*Math.pow(2,i),u=0));i>=8;n[e+l]=a&255,l+=S,a/=256,i-=8);for(u=u<<i|a,s+=i;s>0;n[e+l]=u&255,l+=S,u/=256,s-=8);n[e+l-S]|=yr*128}var lr="eddsa-ticket-pcd",hr;(function(n){n[n.ZuConnect=0]="ZuConnect",n[n.Devconnect=1]="Devconnect",n[n.PcdWorkingGroup=2]="PcdWorkingGroup",n[n.Zuzalu=3]="Zuzalu",n[n.Generic=4]="Generic"})(hr||(hr={}));var W;(function(n){n.Get="Get",n.GetWithoutProving="GetWithoutProving",n.Add="Add",n.ProveAndAdd="ProveAndAdd"})(W||(W={}));function dr(n,r,e,t,i,o=!1){let u={type:W.Get,returnUrl:r,args:t,pcdType:e,options:i,postMessage:o},a=encodeURIComponent(JSON.stringify(u));return`${n}#/prove?request=${a}`}var wr;(function(n){n.RedirectTopicData="topic-data",n.NullifierHash="nullifier-hash",n.AnonTopicDataPayload="anon-topic-data-payload",n.ReactData="react-data"})(wr||(wr={}));async function Pe(){if(!window.opener)return"zupassPopupSetup() can only be called from within a popup window";let n;window.location.href.includes(window.location.origin+"/#/")?n=new URL(window.location.href.replace("#","")).searchParams:n=new URLSearchParams(window.location.search);let r=n.get("proofUrl"),e=n.get("proof"),t=n.get("encodedPendingPCD"),i=n.get("finished");if(r)window.location.href=r;else{if(i)return e&&window.opener.postMessage({encodedPCD:e},"*"),window.close(),await new Promise(o=>window.setTimeout(()=>o(),1e3*3)),"Finished. Please close this window.";if(t)return window.opener.postMessage({encodedPendingPCD:t},"*"),window.close(),await new Promise(o=>window.setTimeout(()=>o(),1e3*3)),"Finished. Please close this window."}}function Re(n,r){let e=`${n}?proofUrl=${encodeURIComponent(r)}`;return xr(e)}function xr(n){return new Promise(r=>window.setTimeout(()=>r(window.open(n,"_blank","width=450,height=600,top=100,popup")),0))}function Ie(n){return new Promise(r=>{let e=t=>{t.data.encodedPCD?(r({type:"pcd",pcdStr:t.data.encodedPCD}),window.removeEventListener("message",e)):t.data.encodedPendingPCD&&(r({type:"pendingPcd",pendingPcdStr:t.data.encodedPendingPCD}),window.removeEventListener("message",e))};window.addEventListener("message",e,{signal:n}),n.addEventListener("abort",()=>{r({type:"aborted"})})})}async function gr(n,r){let e=await(r?Re(n,r):xr(n));if(!e)return{type:"popupBlocked"};let t=new AbortController,i=new Promise(o=>{let u=window.setInterval(()=>{e.closed&&(clearInterval(u),window.setTimeout(()=>{o({type:"popupClosed"}),t.abort()},250))},100)});return Promise.race([i,Ie(t.signal)])}var T;(function(n){n.String="String",n.Number="Number",n.BigInt="BigInt",n.Boolean="Boolean",n.Object="Object",n.StringArray="StringArray",n.PCD="PCD",n.ToggleList="ToggleList",n.Unknown="Unknown"})(T||(T={}));var mr="semaphore-identity-pcd";var Er="zk-eddsa-event-ticket-pcd";async function pn(n){let r=Ar(n);return gr(r)}function hn(n){let r=Ar(n);window.location.href=r}function Ar(n){let{zupassUrl:r="https://zupass.org",returnUrl:e,fieldsToReveal:t,watermark:i,config:o,externalNullifier:u,proofTitle:a,proofDescription:c}=n,s=[],h=[],p=[];for(let l of o){if(l.productId){if(s.length>h.length)throw new Error("It is not possible to mix events with product IDs and events without product IDs");h.push(l.productId)}if(!l.productId&&h.length>0)throw new Error("It is not possible to mix events with product IDs and events without product IDs");s.push(l.eventId),p.push(l.publicKey)}let x={ticket:{argumentType:T.PCD,pcdType:lr,value:void 0,userProvided:!0,validatorParams:{eventIds:s,productIds:h,publicKeys:p,notFoundMessage:"No eligible PCDs found"}},identity:{argumentType:T.PCD,pcdType:mr,value:void 0,userProvided:!0},validEventIds:{argumentType:T.StringArray,value:s.length!==0&&s.length<=20?s:void 0,userProvided:!1},fieldsToReveal:{argumentType:T.ToggleList,value:t,userProvided:!1},watermark:{argumentType:T.BigInt,value:BigInt(i).toString(),userProvided:!1},externalNullifier:{argumentType:T.BigInt,value:u?u.toString():BigInt(i).toString(),userProvided:!1}};return dr(r,e??"",Er,x,{genericProveScreen:!0,title:a,description:c},!0)}export{Ar as constructZkTicketProofUrl,pn as zuAuthPopup,hn as zuAuthRedirect,Pe as zupassPopupSetup};
/*! Bundled license information:

@esbuild-plugins/node-globals-polyfill/Buffer.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
