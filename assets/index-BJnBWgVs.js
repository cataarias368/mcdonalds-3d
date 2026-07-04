var g0=Object.defineProperty;var _0=(n,e,t)=>e in n?g0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var oe=(n,e,t)=>_0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eh="165",v0=0,Mu=1,x0=2,y0=0,Sp=1,Ep=2,Ri=3,Oi=0,ln=1,ri=2,es=0,sr=1,Su=2,Eu=3,Tu=4,M0=5,bs=100,S0=101,E0=102,T0=103,b0=104,A0=200,w0=201,R0=202,C0=203,xl=204,yl=205,L0=206,P0=207,I0=208,D0=209,U0=210,N0=211,F0=212,O0=213,B0=214,k0=0,H0=1,z0=2,Ta=3,G0=4,V0=5,W0=6,X0=7,Tp=0,j0=1,q0=2,ts=0,Y0=1,K0=2,$0=3,bp=4,Z0=5,J0=6,Q0=7,bu="attached",e_="detached",Ap=300,lr=301,hr=302,Ml=303,Sl=304,Wa=306,ur=1e3,Zi=1001,ba=1002,cn=1003,wp=1004,Qr=1005,En=1006,pa=1007,Pi=1008,is=1009,t_=1010,n_=1011,Aa=1012,Rp=1013,dr=1014,ci=1015,Xa=1016,Cp=1017,Lp=1018,fr=1020,i_=35902,s_=1021,r_=1022,jn=1023,o_=1024,a_=1025,rr=1026,pr=1027,Pp=1028,Ip=1029,c_=1030,Dp=1031,Up=1033,Mc=33776,Sc=33777,Ec=33778,Tc=33779,Au=35840,wu=35841,Ru=35842,Cu=35843,Lu=36196,Pu=37492,Iu=37496,Du=37808,Uu=37809,Nu=37810,Fu=37811,Ou=37812,Bu=37813,ku=37814,Hu=37815,zu=37816,Gu=37817,Vu=37818,Wu=37819,Xu=37820,ju=37821,bc=36492,qu=36494,Yu=36495,l_=36283,Ku=36284,$u=36285,Zu=36286,uo=2300,fo=2301,Ac=2302,Ju=2400,Qu=2401,ed=2402,h_=2500,u_=0,Np=1,El=2,d_=3200,f_=3201,Fp=0,p_=1,Ki="",qt="srgb",Kt="srgb-linear",th="display-p3",ja="display-p3-linear",wa="linear",gt="srgb",Ra="rec709",Ca="p3",Fs=7680,td=519,m_=512,g_=513,__=514,Op=515,v_=516,x_=517,y_=518,M_=519,Tl=35044,nd="300 es",Ii=2e3,La=2001;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let id=1234567;const io=Math.PI/180,mr=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function nh(n,e){return(n%e+e)%e}function S_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function E_(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function T_(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}function b_(n,e=1){return e-Math.abs(nh(n,e*2)-e)}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function w_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function R_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function C_(n,e){return n+Math.random()*(e-n)}function L_(n){return n*(.5-Math.random())}function P_(n){n!==void 0&&(id=n);let e=id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I_(n){return n*io}function D_(n){return n*mr}function U_(n){return(n&n-1)===0&&n!==0}function N_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fn={DEG2RAD:io,RAD2DEG:mr,generateUUID:qn,clamp:Qt,euclideanModulo:nh,mapLinear:S_,inverseLerp:E_,lerp:so,damp:T_,pingpong:b_,smoothstep:A_,smootherstep:w_,randInt:R_,randFloat:C_,randFloatSpread:L_,seededRandom:P_,degToRad:I_,radToDeg:D_,isPowerOfTwo:U_,ceilPowerOfTwo:N_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:O_,normalize:ot,denormalize:Xn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],M=s[4],T=s[7],N=s[2],R=s[5],w=s[8];return r[0]=o*_+a*E+c*N,r[3]=o*m+a*M+c*R,r[6]=o*f+a*T+c*w,r[1]=l*_+h*E+u*N,r[4]=l*m+h*M+u*R,r[7]=l*f+h*T+u*w,r[2]=d*_+p*E+g*N,r[5]=d*m+p*M+g*R,r[8]=d*f+p*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Ge;function Bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B_(){const n=po("canvas");return n.style.display="block",n}const sd={};function ih(n){n in sd||(sd[n]=!0,console.warn(n))}function k_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const rd=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),od=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Kt]:{transfer:wa,primaries:Ra,toReference:n=>n,fromReference:n=>n},[qt]:{transfer:gt,primaries:Ra,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ja]:{transfer:wa,primaries:Ca,toReference:n=>n.applyMatrix3(od),fromReference:n=>n.applyMatrix3(rd)},[th]:{transfer:gt,primaries:Ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(od),fromReference:n=>n.applyMatrix3(rd).convertLinearToSRGB()}},H_=new Set([Kt,ja]),nt={enabled:!0,_workingColorSpace:Kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!H_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Do[e].toReference,s=Do[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Do[n].primaries},getTransfer:function(n){return n===Ki?wa:Do[n].transfer}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=po("canvas")),Os.width=e.width,Os.height=e.height;const i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cc(s[o].image)):r.push(Cc(s[o]))}else r=Cc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?z_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;class Yt extends Lr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Zi,s=Zi,r=En,o=Pi,a=jn,c=is,l=Yt.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=qn(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Ap;Yt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,T=(p+1)/2,N=(f+1)/2,R=(h+d)/4,w=(u+_)/4,U=(g+m)/4;return M>T&&M>N?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=w/i):T>N?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=R/s,r=U/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=w/r,s=U/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends Lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Yt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends W_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hp extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const N=Math.sqrt(M),R=Math.atan2(N,f*E);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const T=a*E;if(c=c*m+d*T,l=l*m+p*T,h=h*m+g*T,u=u*m+_*T,m===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new P,ad=new hs;class Fn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),No.subVectors(this.max,Gr),Bs.subVectors(e.a,Gr),ks.subVectors(e.b,Gr),Hs.subVectors(e.c,Gr),Hi.subVectors(ks,Bs),zi.subVectors(Hs,ks),ms.subVectors(Bs,Hs);let t=[0,-Hi.z,Hi.y,0,-zi.z,zi.y,0,-ms.z,ms.y,Hi.z,0,-Hi.x,zi.z,0,-zi.x,ms.z,0,-ms.x,-Hi.y,Hi.x,0,-zi.y,zi.x,0,-ms.y,ms.x,0];return!Pc(t,Bs,ks,Hs,No)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Bs,ks,Hs,No))?!1:(Fo.crossVectors(Hi,zi),t=[Fo.x,Fo.y,Fo.z],Pc(t,Bs,ks,Hs,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new P,new P,new P,new P,new P,new P,new P,new P],Gn=new P,Uo=new Fn,Bs=new P,ks=new P,Hs=new P,Hi=new P,zi=new P,ms=new P,Gr=new P,No=new P,Fo=new P,gs=new P;function Pc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const j_=new Fn,Vr=new P,Ic=new P;class pi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):j_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Ic)),this.expandByPoint(Vr.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new P,Dc=new P,Oo=new P,Gi=new P,Uc=new P,Bo=new P,Nc=new P;class vo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Dc.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Dc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Oo),a=Gi.dot(this.direction),c=-Gi.dot(Oo),l=Gi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dc).addScaledVector(Oo,d),p}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,s,r){Uc.subVectors(t,e),Bo.subVectors(i,e),Nc.crossVectors(Uc,Bo);let o=this.direction.dot(Nc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const c=a*this.direction.dot(Bo.crossVectors(Gi,Bo));if(c<0)return null;const l=a*this.direction.dot(Uc.cross(Gi));if(l<0||c+l>o)return null;const h=-a*Gi.dot(Nc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,Y_)}lookAt(e,t,i){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Vi.crossVectors(i,vn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Vi.crossVectors(i,vn)),Vi.normalize(),ko.crossVectors(vn,Vi),s[0]=Vi.x,s[4]=ko.x,s[8]=vn.x,s[1]=Vi.y,s[5]=ko.y,s[9]=vn.y,s[2]=Vi.z,s[6]=ko.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],M=i[7],T=i[11],N=i[15],R=s[0],w=s[4],U=s[8],S=s[12],y=s[1],L=s[5],z=s[9],k=s[13],j=s[2],X=s[6],V=s[10],Y=s[14],H=s[3],pe=s[7],ve=s[11],_e=s[15];return r[0]=o*R+a*y+c*j+l*H,r[4]=o*w+a*L+c*X+l*pe,r[8]=o*U+a*z+c*V+l*ve,r[12]=o*S+a*k+c*Y+l*_e,r[1]=h*R+u*y+d*j+p*H,r[5]=h*w+u*L+d*X+p*pe,r[9]=h*U+u*z+d*V+p*ve,r[13]=h*S+u*k+d*Y+p*_e,r[2]=g*R+_*y+m*j+f*H,r[6]=g*w+_*L+m*X+f*pe,r[10]=g*U+_*z+m*V+f*ve,r[14]=g*S+_*k+m*Y+f*_e,r[3]=E*R+M*y+T*j+N*H,r[7]=E*w+M*L+T*X+N*pe,r[11]=E*U+M*z+T*V+N*ve,r[15]=E*S+M*k+T*Y+N*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,M=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,T=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,N=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*E+i*M+s*T+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*w,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*f+i*c*f)*w,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*w,e[4]=M*w,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*w,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*w,e[8]=T*w,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*f-t*u*f)*w,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*f+t*a*f)*w,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*w,e[12]=N*w,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*w,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=c*l,M=c*h,T=c*u,N=i.x,R=i.y,w=i.z;return s[0]=(1-(_+f))*N,s[1]=(p+T)*N,s[2]=(g-M)*N,s[3]=0,s[4]=(p-T)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+M)*w,s[9]=(m-E)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=zs.set(s[0],s[1],s[2]).length();const o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);const l=1/r,h=1/o,u=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ii){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===Ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===La)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ii){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,p=(i+s)*h;let g,_;if(a===Ii)g=(o+r)*u,_=-2*u;else if(a===La)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zs=new P,Vn=new He,q_=new P(0,0,0),Y_=new P(1,1,1),Vi=new P,ko=new P,vn=new P,cd=new He,ld=new hs;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K_=0;const hd=new P,Gs=new hs,Ti=new He,Ho=new P,Wr=new P,$_=new P,Z_=new hs,ud=new P(1,0,0),dd=new P(0,1,0),fd=new P(0,0,1),pd={type:"added"},J_={type:"removed"},Vs={type:"childadded",child:null},Fc={type:"childremoved",child:null};class St extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new P,t=new On,i=new hs,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ge}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(dd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(dd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Wr,Ho,this.up):Ti.lookAt(Ho,Wr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J_),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new P,bi=new P,Oc=new P,Ai=new P,Ws=new P,Xs=new P,md=new P,Bc=new P,kc=new P,Hc=new P;class oi{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),bi.subVectors(i,t),Oc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(bi),c=Wn.dot(Oc),l=bi.dot(bi),h=bi.dot(Oc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),bi.subVectors(e,t),Wn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Wn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),Bc.subVectors(e,i);const c=Ws.dot(Bc),l=Xs.dot(Bc);if(c<=0&&l<=0)return t.copy(i);kc.subVectors(e,s);const h=Ws.dot(kc),u=Xs.dot(kc);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ws,o);Hc.subVectors(e,r);const p=Ws.dot(Hc),g=Xs.dot(Hc);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Xs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return md.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(md,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=nh(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return nt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Qt(Zt.r*255,0,255))*65536+Math.round(Qt(Zt.g*255,0,255))*256+Math.round(Qt(Zt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=qt){nt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(zo);const i=so(Wi.h,zo.h,t),s=so(Wi.s,zo.s,t),r=so(Wi.l,zo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ue;Ue.NAMES=zp;let Q_=0;class li extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=sr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xl&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new P,Go=new ke;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ih("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}}class Gp extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vp extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Di extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let e1=0;const Cn=new He,Gc=new St,js=new P,xn=new Fn,Xr=new Fn,Wt=new P;class mi extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bp(e)?Vp:Gp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(xn.min,Xr.min),xn.expandByPoint(Wt),Wt.addVectors(xn.max,Xr.max),xn.expandByPoint(Wt)):(xn.expandByPoint(Xr.min),xn.expandByPoint(Xr.max))}xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),Wt.add(js)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new P,c[U]=new P;const l=new P,h=new P,u=new P,d=new ke,p=new ke,g=new ke,_=new P,m=new P;function f(U,S,y){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[U].add(_),a[S].add(_),a[y].add(_),c[U].add(m),c[S].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,S=E.length;U<S;++U){const y=E[U],L=y.start,z=y.count;for(let k=L,j=L+z;k<j;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new P,T=new P,N=new P,R=new P;function w(U){N.fromBufferAttribute(s,U),R.copy(N);const S=a[U];M.copy(S),M.sub(N.multiplyScalar(N.dot(S))).normalize(),T.crossVectors(R,S);const L=T.dot(c[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,L)}for(let U=0,S=E.length;U<S;++U){const y=E[U],L=y.start,z=y.count;for(let k=L,j=L+z;k<j;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new hn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gd=new He,_s=new vo,Vo=new pi,_d=new P,qs=new P,Ys=new P,Ks=new P,Vc=new P,Wo=new P,Xo=new ke,jo=new ke,qo=new ke,vd=new P,xd=new P,yd=new P,Yo=new P,Ko=new P;class wt extends St{constructor(e=new mi,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Vc.fromBufferAttribute(u,e),o?Wo.addScaledVector(Vc,h):Wo.addScaledVector(Vc.sub(t),h))}t.add(Wo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Vo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Vo,_d)===null||_s.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(gd.copy(r).invert(),_s.copy(e.ray).applyMatrix4(gd),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,N=M;T<N;T+=3){const R=a.getX(T),w=a.getX(T+1),U=a.getX(T+2);s=$o(this,f,e,i,l,h,u,R,w,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),M=a.getX(m+1),T=a.getX(m+2);s=$o(this,o,e,i,l,h,u,E,M,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,N=M;T<N;T+=3){const R=T,w=T+1,U=T+2;s=$o(this,f,e,i,l,h,u,R,w,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,M=m+1,T=m+2;s=$o(this,o,e,i,l,h,u,E,M,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function t1(n,e,t,i,s,r,o,a){let c;if(e.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Oi,a),c===null)return null;Ko.copy(a),Ko.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:n}}function $o(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,qs),n.getVertexPosition(c,Ys),n.getVertexPosition(l,Ks);const h=t1(n,e,t,i,qs,Ys,Ks,Yo);if(h){s&&(Xo.fromBufferAttribute(s,a),jo.fromBufferAttribute(s,c),qo.fromBufferAttribute(s,l),h.uv=oi.getInterpolation(Yo,qs,Ys,Ks,Xo,jo,qo,new ke)),r&&(Xo.fromBufferAttribute(r,a),jo.fromBufferAttribute(r,c),qo.fromBufferAttribute(r,l),h.uv1=oi.getInterpolation(Yo,qs,Ys,Ks,Xo,jo,qo,new ke)),o&&(vd.fromBufferAttribute(o,a),xd.fromBufferAttribute(o,c),yd.fromBufferAttribute(o,l),h.normal=oi.getInterpolation(Yo,qs,Ys,Ks,vd,xd,yd,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};oi.getNormal(qs,Ys,Ks,u.normal),h.face=u}return h}class ai extends mi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Di(l,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(u,2));function g(_,m,f,E,M,T,N,R,w,U,S){const y=T/w,L=N/U,z=T/2,k=N/2,j=R/2,X=w+1,V=U+1;let Y=0,H=0;const pe=new P;for(let ve=0;ve<V;ve++){const _e=ve*L-k;for(let Be=0;Be<X;Be++){const Je=Be*y-z;pe[_]=Je*E,pe[m]=_e*M,pe[f]=j,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[f]=R>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Be/w),u.push(1-ve/U),Y+=1}}for(let ve=0;ve<U;ve++)for(let _e=0;_e<w;_e++){const Be=d+_e+X*ve,Je=d+_e+X*(ve+1),G=d+(_e+1)+X*(ve+1),J=d+(_e+1)+X*ve;c.push(Be,Je,J),c.push(Je,G,J),H+=6}a.addGroup(p,H,S),p+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const s in i)e[s]=i[s]}return e}function n1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const i1={clone:gr,merge:rn};var s1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xp extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new P,Md=new ke,Sd=new ke;class an extends Xp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Sd),t.subVectors(Sd,Md)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Zs=1;class o1 extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an($s,Zs,e,t);s.layers=this.layers,this.add(s);const r=new an($s,Zs,e,t);r.layers=this.layers,this.add(r);const o=new an($s,Zs,e,t);o.layers=this.layers,this.add(o);const a=new an($s,Zs,e,t);a.layers=this.layers,this.add(a);const c=new an($s,Zs,e,t);c.layers=this.layers,this.add(c);const l=new an($s,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jp extends Yt{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a1 extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new ss({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:es});r.uniforms.tEquirect.value=t;const o=new wt(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=En),new o1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Wc=new P,c1=new P,l1=new Ge;class Es{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wc.subVectors(i,t).cross(c1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l1.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new pi,Zo=new P;class rh{constructor(e=new Es,t=new Es,i=new Es,s=new Es,r=new Es,o=new Es){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],M=s[14],T=s[15];if(i[0].setComponents(c-r,d-l,m-p,T-f).normalize(),i[1].setComponents(c+r,d+l,m+p,T+f).normalize(),i[2].setComponents(c+o,d+h,m+g,T+E).normalize(),i[3].setComponents(c-o,d-h,m-g,T-E).normalize(),i[4].setComponents(c-a,d-u,m-_,T-M).normalize(),t===Ii)i[5].setComponents(c+a,d+u,m+_,T+M).normalize();else if(t===La)i[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function h1(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,a),u.count===-1&&d.length===0&&n.bufferSubData(l,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class _r extends mi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let M=0;M<l;M++){const T=M*u-r;g.push(T,-E,0),_.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const M=E+l*f,T=E+l*(f+1),N=E+1+l*(f+1),R=E+1+l*f;p.push(M,T,R),p.push(T,N,R)}this.setIndex(p),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,U1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,V1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,v2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:u1,alphahash_pars_fragment:d1,alphamap_fragment:f1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:_1,aomap_pars_fragment:v1,batching_pars_vertex:x1,batching_vertex:y1,begin_vertex:M1,beginnormal_vertex:S1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:b1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:w1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:C1,color_fragment:L1,color_pars_fragment:P1,color_pars_vertex:I1,color_vertex:D1,common:U1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:F1,displacementmap_pars_vertex:O1,displacementmap_vertex:B1,emissivemap_fragment:k1,emissivemap_pars_fragment:H1,colorspace_fragment:z1,colorspace_pars_fragment:G1,envmap_fragment:V1,envmap_common_pars_fragment:W1,envmap_pars_fragment:X1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:iv,envmap_vertex:q1,fog_vertex:Y1,fog_pars_vertex:K1,fog_fragment:$1,fog_pars_fragment:Z1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:Q1,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:cv,lights_physical_pars_fragment:lv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:dv,logdepthbuf_fragment:fv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:_v,map_pars_fragment:vv,map_particle_fragment:xv,map_particle_pars_fragment:yv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:Ev,morphcolor_vertex:Tv,morphnormal_vertex:bv,morphtarget_pars_vertex:Av,morphtarget_vertex:wv,normal_fragment_begin:Rv,normal_fragment_maps:Cv,normal_pars_fragment:Lv,normal_pars_vertex:Pv,normal_vertex:Iv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Ov,opaque_fragment:Bv,packing:kv,premultiplied_alpha_fragment:Hv,project_vertex:zv,dithering_fragment:Gv,dithering_pars_fragment:Vv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Xv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:qv,shadowmap_vertex:Yv,shadowmask_pars_fragment:Kv,skinbase_vertex:$v,skinning_pars_vertex:Zv,skinning_vertex:Jv,skinnormal_vertex:Qv,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:s2,transmission_pars_fragment:r2,uv_pars_fragment:o2,uv_pars_vertex:a2,uv_vertex:c2,worldpos_vertex:l2,background_vert:h2,background_frag:u2,backgroundCube_vert:d2,backgroundCube_frag:f2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:_2,distanceRGBA_vert:v2,distanceRGBA_frag:x2,equirect_vert:y2,equirect_frag:M2,linedashed_vert:S2,linedashed_frag:E2,meshbasic_vert:T2,meshbasic_frag:b2,meshlambert_vert:A2,meshlambert_frag:w2,meshmatcap_vert:R2,meshmatcap_frag:C2,meshnormal_vert:L2,meshnormal_frag:P2,meshphong_vert:I2,meshphong_frag:D2,meshphysical_vert:U2,meshphysical_frag:N2,meshtoon_vert:F2,meshtoon_frag:O2,points_vert:B2,points_frag:k2,shadow_vert:H2,shadow_frag:z2,sprite_vert:G2,sprite_frag:V2},se={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ii={basic:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:rn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:rn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:rn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:rn([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:rn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:rn([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:rn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:rn([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:rn([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:rn([se.lights,se.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ii.physical={uniforms:rn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Jo={r:0,b:0,g:0},xs=new On,W2=new He;function X2(n,e,t,i,s,r,o){const a=new Ue(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function _(E){let M=!1;const T=g(E);T===null?f(a,c):T&&T.isColor&&(f(T,1),M=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===Wa)?(h===void 0&&(h=new wt(new ai(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:gr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xs.copy(M.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(xs)),h.material.toneMapped=nt.getTransfer(T.colorSpace)!==gt,(u!==T||d!==T.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new wt(new _r(2,2),new ss({name:"BackgroundMaterial",uniforms:gr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(T.colorSpace)!==gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,M){E.getRGB(Jo,Wp(n)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:m}}function j2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,L,z,k,j){let X=!1;const V=u(k,z,L);r!==V&&(r=V,l(r.object)),X=p(y,k,z,j),X&&g(y,k,z,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,T(y,L,z,k),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,L,z){const k=z.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let X=j[L.id];X===void 0&&(X={},j[L.id]=X);let V=X[k];return V===void 0&&(V=d(c()),X[k]=V),V}function d(y){const L=[],z=[],k=[];for(let j=0;j<t;j++)L[j]=0,z[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,L,z,k){const j=r.attributes,X=L.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const ve=j[H];let _e=X[H];if(_e===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),ve===void 0||ve.attribute!==_e||_e&&ve.data!==_e.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function g(y,L,z,k){const j={},X=L.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let ve=X[H];ve===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));const _e={};_e.attribute=ve,ve&&ve.data&&(_e.data=ve.data),j[H]=_e,V++}r.attributes=j,r.attributesNum=V,r.index=k}function _(){const y=r.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function m(y){f(y,0)}function f(y,L){const z=r.newAttributes,k=r.enabledAttributes,j=r.attributeDivisors;z[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),j[y]!==L&&(n.vertexAttribDivisor(y,L),j[y]=L)}function E(){const y=r.newAttributes,L=r.enabledAttributes;for(let z=0,k=L.length;z<k;z++)L[z]!==y[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function M(y,L,z,k,j,X,V){V===!0?n.vertexAttribIPointer(y,L,z,j,X):n.vertexAttribPointer(y,L,z,k,j,X)}function T(y,L,z,k){_();const j=k.attributes,X=z.getAttributes(),V=L.defaultAttributeValues;for(const Y in X){const H=X[Y];if(H.location>=0){let pe=j[Y];if(pe===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),pe!==void 0){const ve=pe.normalized,_e=pe.itemSize,Be=e.get(pe);if(Be===void 0)continue;const Je=Be.buffer,G=Be.type,J=Be.bytesPerElement,ue=G===n.INT||G===n.UNSIGNED_INT||pe.gpuType===Rp;if(pe.isInterleavedBufferAttribute){const re=pe.data,Ve=re.stride,Oe=pe.offset;if(re.isInstancedInterleavedBuffer){for(let qe=0;qe<H.locationSize;qe++)f(H.location+qe,re.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let qe=0;qe<H.locationSize;qe++)m(H.location+qe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let qe=0;qe<H.locationSize;qe++)M(H.location+qe,_e/H.locationSize,G,ve,Ve*J,(Oe+_e/H.locationSize*qe)*J,ue)}else{if(pe.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)f(H.location+re,pe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let re=0;re<H.locationSize;re++)m(H.location+re);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let re=0;re<H.locationSize;re++)M(H.location+re,_e/H.locationSize,G,ve,_e*J,_e/H.locationSize*re*J,ue)}}else if(V!==void 0){const ve=V[Y];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(H.location,ve);break;case 3:n.vertexAttrib3fv(H.location,ve);break;case 4:n.vertexAttrib4fv(H.location,ve);break;default:n.vertexAttrib1fv(H.location,ve)}}}}E()}function N(){U();for(const y in i){const L=i[y];for(const z in L){const k=L[z];for(const j in k)h(k[j].object),delete k[j];delete L[z]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const z in L){const k=L[z];for(const j in k)h(k[j].object),delete k[j];delete L[z]}delete i[y.id]}function w(y){for(const L in i){const z=i[L];if(z[y.id]===void 0)continue;const k=z[y.id];for(const j in k)h(k[j].object),delete k[j];delete z[y.id]}}function U(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function q2(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(l[p],h[p]);else{d.multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Y2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==jn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const w=R===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==is&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!w)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:T,maxSamples:N}}function K2(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Es,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:i,M=E*4;let T=f.clippingState||null;c.value=T,T=h(g,d,M,p);for(let N=0;N!==M;++N)T[N]=t[N];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,T=p;M!==_;++M,T+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $2(n){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=lr:a===Sl&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===Sl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new a1(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class oh extends Xp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,Ed=[.125,.215,.35,.446,.526,.582],As=20,Xc=new oh,Td=new Ue;let jc=null,qc=0,Yc=0,Kc=!1;const Ts=(1+Math.sqrt(5))/2,Js=1/Ts,bd=[new P(-Ts,Js,0),new P(Ts,Js,0),new P(-Js,0,Ts),new P(Js,0,Ts),new P(0,Ts,-Js),new P(0,Ts,Js),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){jc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,qc,Yc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Xa,format:jn,colorSpace:Kt,depthBuffer:!1},s=wd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z2(r)),this._blurMaterial=J2(r,e,t)}return s}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,i,s){const a=new an(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Td),h.toneMapping=ts,h.autoClear=!1;const p=new Ji({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new wt(new ai,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Td),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const M=this._cubeSize;Qo(s,E*M,f>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===lr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Xc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bd[(s-r-1)%bd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*As-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):As;m>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const f=[];let E=0;for(let w=0;w<As;++w){const U=w/_,S=Math.exp(-U*U/2);f.push(S),w===0?E+=S:w<m&&(E+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const T=this._sizeLods[s],N=3*T*(s>M-nr?s-M+nr:0),R=4*(this._cubeSize-T);Qo(t,N,R,3*T,2*T),c.setRenderTarget(t),c.render(u,Xc)}}function Z2(n){const e=[],t=[],i=[];let s=n;const r=n-nr+1+Ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-nr?c=Ed[o-n+nr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,U=R>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];E.set(S,_*g*R),M.set(d,m*g*R);const y=[R,R,R,R,R,R];T.set(y,f*g*R)}const N=new mi;N.setAttribute("position",new hn(E,_)),N.setAttribute("uv",new hn(M,m)),N.setAttribute("faceIndex",new hn(T,f)),e.push(N),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wd(n,e,t){const i=new Ds(n,e,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function J2(n,e,t){const i=new Float32Array(As),s=new P(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Rd(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Cd(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ml||c===Sl,h=c===lr||c===hr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ad(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ad(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ex(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ih("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tx(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let M=0,T=E.length;M<T;M+=3){const N=E[M+0],R=E[M+1],w=E[M+2];d.push(N,R,R,w,w,N)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const N=M+0,R=M+1,w=M+2;d.push(N,R,R,w,w,N)}}else return;const m=new(Bp(d)?Vp:Gp)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function nx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)t.update(f,i,_[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ix(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sx(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let N=a.attributes.position.count*T,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*R*4*u),U=new Hp(w,N,R,u);U.type=ci,U.needsUpdate=!0;const S=T*4;for(let L=0;L<u;L++){const z=f[L],k=E[L],j=M[L],X=N*R*4*L;for(let V=0;V<z.count;V++){const Y=V*S;g===!0&&(s.fromBufferAttribute(z,V),w[X+Y+0]=s.x,w[X+Y+1]=s.y,w[X+Y+2]=s.z,w[X+Y+3]=0),_===!0&&(s.fromBufferAttribute(k,V),w[X+Y+4]=s.x,w[X+Y+5]=s.y,w[X+Y+6]=s.z,w[X+Y+7]=0),m===!0&&(s.fromBufferAttribute(j,V),w[X+Y+8]=s.x,w[X+Y+9]=s.y,w[X+Y+10]=s.z,w[X+Y+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new ke(N,R)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function rx(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Yp extends Yt{constructor(e,t,i,s,r,o,a,c,l,h=rr){if(h!==rr&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===rr&&(i=dr),i===void 0&&h===pr&&(i=fr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kp=new Yt,$p=new Yp(1,1);$p.compareFunction=Op;const Zp=new Hp,Jp=new X_,Qp=new jp,Ld=[],Pd=[],Id=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Ht(t,i)}}function ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),Ht(t,i)}}function dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,i))return;Id.set(i),n.uniformMatrix4fv(this.addr,!1,Id),Ht(t,i)}}function fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function _x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Mx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?$p:Kp;t.setTexture2D(e||r,s)}function Sx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jp,s)}function Ex(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qp,s)}function Tx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zp,s)}function bx(n){switch(n){case 5126:return ox;case 35664:return ax;case 35665:return cx;case 35666:return lx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return vx;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}function Ax(n,e){n.uniform1fv(this.addr,e)}function wx(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rx(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function Cx(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Lx(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Px(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ix(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dx(n,e){n.uniform1iv(this.addr,e)}function Ux(n,e){n.uniform2iv(this.addr,e)}function Nx(n,e){n.uniform3iv(this.addr,e)}function Fx(n,e){n.uniform4iv(this.addr,e)}function Ox(n,e){n.uniform1uiv(this.addr,e)}function Bx(n,e){n.uniform2uiv(this.addr,e)}function kx(n,e){n.uniform3uiv(this.addr,e)}function Hx(n,e){n.uniform4uiv(this.addr,e)}function zx(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Kp,r[o])}function Gx(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jp,r[o])}function Vx(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qp,r[o])}function Wx(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zp,r[o])}function Xx(n){switch(n){case 5126:return Ax;case 35664:return wx;case 35665:return Rx;case 35666:return Cx;case 35674:return Lx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Dx;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return kx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}class jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}}class qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xx(t.type)}}class Yx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Nd(n,e){n.seq.push(e),n.map[e.id]=e}function Kx(n,e,t){const i=n.name,s=i.length;for($c.lastIndex=0;;){const r=$c.exec(i),o=$c.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Nd(t,l===void 0?new jx(a,n,e):new qx(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Yx(a),Nd(t,u)),t=u}}}class ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Kx(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Fd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $x=37297;let Zx=0;function Jx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Qx(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Ca&&t===Ra?i="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case Kt:case ja:return[i,"LinearTransferOETF"];case qt:case th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Od(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jx(n.getShaderSource(e),o)}else return s}function ey(n,e){const t=Qx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ty(n,e){let t;switch(e){case Y0:t="Linear";break;case K0:t="Reinhard";break;case $0:t="OptimizedCineon";break;case bp:t="ACESFilmic";break;case J0:t="AgX";break;case Q0:t="Neutral";break;case Z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ny(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function iy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function eo(n){return n!==""}function Bd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(n){return n.replace(ry,ay)}const oy=new Map;function ay(n,e){let t=ze[e];if(t===void 0){const i=oy.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bl(t)}const cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(n){return n.replace(cy,ly)}function ly(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function uy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case hr:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function fy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tp:e="ENVMAP_BLENDING_MULTIPLY";break;case j0:e="ENVMAP_BLENDING_MIX";break;case q0:e="ENVMAP_BLENDING_ADD";break}return e}function py(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function my(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=hy(t),l=uy(t),h=dy(t),u=fy(t),d=py(t),p=ny(t),g=iy(r),_=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),f.length>0&&(f+=`
`)):(m=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),f=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?ze.tonemapping_pars_fragment:"",t.toneMapping!==ts?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),o=bl(o),o=Bd(o,t),o=kd(o,t),a=bl(a),a=Bd(a,t),a=kd(a,t),o=Hd(o),a=Hd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+m+o,T=E+f+a,N=Fd(s,s.VERTEX_SHADER,M),R=Fd(s,s.FRAGMENT_SHADER,T);s.attachShader(_,N),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(N).trim(),j=s.getShaderInfoLog(R).trim();let X=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,N,R);else{const Y=Od(s,N,"vertex"),H=Od(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||j==="")&&(V=!1);V&&(L.diagnostics={runnable:X,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:f}})}s.deleteShader(N),s.deleteShader(R),U=new ma(s,_),S=sy(s,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,$x)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=R,this}let gy=0;class _y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vy(e),t.set(e,i)),i}}class vy{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}}function xy(n,e,t,i,s,r,o){const a=new sh,c=new _y,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,L,z,k){const j=z.fog,X=k.geometry,V=S.isMeshStandardMaterial?z.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),H=Y&&Y.mapping===Wa?Y.image.height:null,pe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=ve!==void 0?ve.length:0;let Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let Je,G,J,ue;if(pe){const ct=ii[pe];Je=ct.vertexShader,G=ct.fragmentShader}else Je=S.vertexShader,G=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),ue=c.getFragmentShaderID(S);const re=n.getRenderTarget(),Ve=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,qe=!!S.map,b=!!S.matcap,ie=!!Y,ge=!!S.aoMap,be=!!S.lightMap,te=!!S.bumpMap,ae=!!S.normalMap,Me=!!S.displacementMap,we=!!S.emissiveMap,ft=!!S.metalnessMap,A=!!S.roughnessMap,v=S.anisotropy>0,B=S.clearcoat>0,K=S.dispersion>0,$=S.iridescence>0,Z=S.sheen>0,Le=S.transmission>0,ce=v&&!!S.anisotropyMap,le=B&&!!S.clearcoatMap,We=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,Ae=$&&!!S.iridescenceMap,Ye=$&&!!S.iridescenceThicknessMap,Ne=Z&&!!S.sheenColorMap,he=Z&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,$e=!!S.specularColorMap,Pt=!!S.specularIntensityMap,C=Le&&!!S.transmissionMap,de=Le&&!!S.thicknessMap,W=!!S.gradientMap,q=!!S.alphaMap,ne=S.alphaTest>0,Fe=!!S.alphaHash,tt=!!S.extensions;let It=ts;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(It=n.toneMapping);const Gt={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:G,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&k.instanceColor!==null,instancingMorph:Ve&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Kt,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:b,envMap:ie,envMapMode:ie&&Y.mapping,envMapCubeUVHeight:H,aoMap:ge,lightMap:be,bumpMap:te,normalMap:ae,displacementMap:d&&Me,emissiveMap:we,normalMapObjectSpace:ae&&S.normalMapType===p_,normalMapTangentSpace:ae&&S.normalMapType===Fp,metalnessMap:ft,roughnessMap:A,anisotropy:v,anisotropyMap:ce,clearcoat:B,clearcoatMap:le,clearcoatNormalMap:We,clearcoatRoughnessMap:Q,dispersion:K,iridescence:$,iridescenceMap:Ae,iridescenceThicknessMap:Ye,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:he,specularMap:Xe,specularColorMap:$e,specularIntensityMap:Pt,transmission:Le,transmissionMap:C,thicknessMap:de,gradientMap:W,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:ne,alphaHash:Fe,combine:S.combine,mapUv:qe&&_(S.map.channel),aoMapUv:ge&&_(S.aoMap.channel),lightMapUv:be&&_(S.lightMap.channel),bumpMapUv:te&&_(S.bumpMap.channel),normalMapUv:ae&&_(S.normalMap.channel),displacementMapUv:Me&&_(S.displacementMap.channel),emissiveMapUv:we&&_(S.emissiveMap.channel),metalnessMapUv:ft&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(S.sheenRoughnessMap.channel),specularMapUv:Xe&&_(S.specularMap.channel),specularColorMapUv:$e&&_(S.specularColorMap.channel),specularIntensityMapUv:Pt&&_(S.specularIntensityMap.channel),transmissionMapUv:C&&_(S.transmissionMap.channel),thicknessMapUv:de&&_(S.thicknessMap.channel),alphaMapUv:q&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ae||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(qe||q),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:tt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)y.push(L),y.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),S.push(a.mask)}function T(S){const y=g[S.type];let L;if(y){const z=ii[y];L=i1.clone(z.uniforms)}else L=S.uniforms;return L}function N(S,y){let L;for(let z=0,k=h.length;z<k;z++){const j=h[z];if(j.cacheKey===y){L=j,++L.usedTimes;break}}return L===void 0&&(L=new my(n,y,S,r),h.push(L)),L}function R(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:N,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:U}}function yy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function My(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||My),i.length>1&&i.sort(d||Gd),s.length>1&&s.sort(d||Gd)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Sy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Vd,n.set(i,[o])):s>=r.length?(o=new Vd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ue};break;case"SpotLight":t={position:new P,direction:new P,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Ty(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let by=0;function Ay(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wy(n){const e=new Ey,t=Ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new He,o=new He;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,M=0,T=0,N=0,R=0,w=0;l.sort(Ay);for(let S=0,y=l.length;S<y;S++){const L=l[S],z=L.color,k=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],k);w++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=L.shadow.matrix,E++}i.directional[p]=V,p++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=j,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[_]=V;const Y=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,Y.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[_]=Y.matrix,L.castShadow){const H=t.get(L);H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=X,T++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(k),V.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==M||U.numSpotShadows!==T||U.numSpotMaps!==N||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=M,U.numSpotShadows=T,U.numSpotMaps=N,U.numLightProbes=w,i.version=by++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const M=l[f];if(M.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(M.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Wd(n){const e=new wy(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ry(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wd(n),e.set(s,[a])):r>=o.length?(a=new Wd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Cy extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ly extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dy(n,e,t){let i=new rh;const s=new ke,r=new ke,o=new dt,a=new Cy({depthPacking:f_}),c=new Ly,l={},h=t.maxTextureSize,u={[Oi]:ln,[ln]:Oi,[ri]:ri},d=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Py,fragmentShader:Iy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sp;let f=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(es),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==Ri&&this.type===Ri,j=f===Ri&&this.type!==Ri;for(let X=0,V=R.length;X<V;X++){const Y=R[X],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const pe=H.getFrameExtents();if(s.multiply(pe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,H.mapSize.y=r.y)),H.map===null||k===!0||j===!0){const _e=this.type!==Ri?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new Ds(s.x,s.y,_e),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ve=H.getViewportCount();for(let _e=0;_e<ve;_e++){const Be=H.getViewport(_e);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),z.viewport(o),H.updateMatrices(Y,_e),i=H.getFrustum(),T(w,U,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Ri&&E(H,U),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,L)};function E(R,w){const U=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ds(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,U,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,U,p,_,null)}function M(R,w,U,S){let y=null;const L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=U.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=y.uuid,k=w.uuid;let j=l[z];j===void 0&&(j={},l[z]=j);let X=j[k];X===void 0&&(X=y.clone(),j[k]=X,w.addEventListener("dispose",N)),y=X}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Ri?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=U}return y}function T(R,w,U,S,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const k=e.update(R),j=R.material;if(Array.isArray(j)){const X=k.groups;for(let V=0,Y=X.length;V<Y;V++){const H=X[V],pe=j[H.materialIndex];if(pe&&pe.visible){const ve=M(R,pe,S,y);R.onBeforeShadow(n,R,w,U,k,ve,H),n.renderBufferDirect(U,null,k,ve,R,H),R.onAfterShadow(n,R,w,U,k,ve,H)}}}else if(j.visible){const X=M(R,j,S,y);R.onBeforeShadow(n,R,w,U,k,X,null),n.renderBufferDirect(U,null,k,X,R,null),R.onAfterShadow(n,R,w,U,k,X,null)}}const z=R.children;for(let k=0,j=z.length;k<j;k++)T(z[k],w,U,S,y)}function N(R){R.target.removeEventListener("dispose",N);for(const U in l){const S=l[U],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function Uy(n){function e(){let C=!1;const de=new dt;let W=null;const q=new dt(0,0,0,0);return{setMask:function(ne){W!==ne&&!C&&(n.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){C=ne},setClear:function(ne,Fe,tt,It,Gt){Gt===!0&&(ne*=It,Fe*=It,tt*=It),de.set(ne,Fe,tt,It),q.equals(de)===!1&&(n.clearColor(ne,Fe,tt,It),q.copy(de))},reset:function(){C=!1,W=null,q.set(-1,0,0,0)}}}function t(){let C=!1,de=null,W=null,q=null;return{setTest:function(ne){ne?ue(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(ne){de!==ne&&!C&&(n.depthMask(ne),de=ne)},setFunc:function(ne){if(W!==ne){switch(ne){case k0:n.depthFunc(n.NEVER);break;case H0:n.depthFunc(n.ALWAYS);break;case z0:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case G0:n.depthFunc(n.EQUAL);break;case V0:n.depthFunc(n.GEQUAL);break;case W0:n.depthFunc(n.GREATER);break;case X0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=ne}},setLocked:function(ne){C=ne},setClear:function(ne){q!==ne&&(n.clearDepth(ne),q=ne)},reset:function(){C=!1,de=null,W=null,q=null}}}function i(){let C=!1,de=null,W=null,q=null,ne=null,Fe=null,tt=null,It=null,Gt=null;return{setTest:function(ct){C||(ct?ue(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(ct){de!==ct&&!C&&(n.stencilMask(ct),de=ct)},setFunc:function(ct,Jn,Qn){(W!==ct||q!==Jn||ne!==Qn)&&(n.stencilFunc(ct,Jn,Qn),W=ct,q=Jn,ne=Qn)},setOp:function(ct,Jn,Qn){(Fe!==ct||tt!==Jn||It!==Qn)&&(n.stencilOp(ct,Jn,Qn),Fe=ct,tt=Jn,It=Qn)},setLocked:function(ct){C=ct},setClear:function(ct){Gt!==ct&&(n.clearStencil(ct),Gt=ct)},reset:function(){C=!1,de=null,W=null,q=null,ne=null,Fe=null,tt=null,It=null,Gt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,T=null,N=null,R=new Ue(0,0,0),w=0,U=!1,S=null,y=null,L=null,z=null,k=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=V>=2);let H=null,pe={};const ve=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Be=new dt().fromArray(ve),Je=new dt().fromArray(_e);function G(C,de,W,q){const ne=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(C,Fe),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<W;tt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(de+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return Fe}const J={};J[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),r.setFunc(Ta),te(!1),ae(Mu),ue(n.CULL_FACE),ge(es);function ue(C){l[C]!==!0&&(n.enable(C),l[C]=!0)}function re(C){l[C]!==!1&&(n.disable(C),l[C]=!1)}function Ve(C,de){return h[C]!==de?(n.bindFramebuffer(C,de),h[C]=de,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(C,de){let W=d,q=!1;if(C){W=u.get(de),W===void 0&&(W=[],u.set(de,W));const ne=C.textures;if(W.length!==ne.length||W[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,tt=ne.length;Fe<tt;Fe++)W[Fe]=n.COLOR_ATTACHMENT0+Fe;W.length=ne.length,q=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,q=!0);q&&n.drawBuffers(W)}function qe(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const b={[bs]:n.FUNC_ADD,[S0]:n.FUNC_SUBTRACT,[E0]:n.FUNC_REVERSE_SUBTRACT};b[T0]=n.MIN,b[b0]=n.MAX;const ie={[A0]:n.ZERO,[w0]:n.ONE,[R0]:n.SRC_COLOR,[xl]:n.SRC_ALPHA,[U0]:n.SRC_ALPHA_SATURATE,[I0]:n.DST_COLOR,[L0]:n.DST_ALPHA,[C0]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[D0]:n.ONE_MINUS_DST_COLOR,[P0]:n.ONE_MINUS_DST_ALPHA,[N0]:n.CONSTANT_COLOR,[F0]:n.ONE_MINUS_CONSTANT_COLOR,[O0]:n.CONSTANT_ALPHA,[B0]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(C,de,W,q,ne,Fe,tt,It,Gt,ct){if(C===es){g===!0&&(re(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),C!==M0){if(C!==_||ct!==U){if((m!==bs||M!==bs)&&(n.blendEquation(n.FUNC_ADD),m=bs,M=bs),ct)switch(C){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Su:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Su:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,E=null,T=null,N=null,R.set(0,0,0),w=0,_=C,U=ct}return}ne=ne||de,Fe=Fe||W,tt=tt||q,(de!==m||ne!==M)&&(n.blendEquationSeparate(b[de],b[ne]),m=de,M=ne),(W!==f||q!==E||Fe!==T||tt!==N)&&(n.blendFuncSeparate(ie[W],ie[q],ie[Fe],ie[tt]),f=W,E=q,T=Fe,N=tt),(It.equals(R)===!1||Gt!==w)&&(n.blendColor(It.r,It.g,It.b,Gt),R.copy(It),w=Gt),_=C,U=!1}function be(C,de){C.side===ri?re(n.CULL_FACE):ue(n.CULL_FACE);let W=C.side===ln;de&&(W=!W),te(W),C.blending===sr&&C.transparent===!1?ge(es):ge(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const q=C.stencilWrite;o.setTest(q),q&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),we(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(C){S!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),S=C)}function ae(C){C!==v0?(ue(n.CULL_FACE),C!==y&&(C===Mu?n.cullFace(n.BACK):C===x0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),y=C}function Me(C){C!==L&&(X&&n.lineWidth(C),L=C)}function we(C,de,W){C?(ue(n.POLYGON_OFFSET_FILL),(z!==de||k!==W)&&(n.polygonOffset(de,W),z=de,k=W)):re(n.POLYGON_OFFSET_FILL)}function ft(C){C?ue(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function A(C){C===void 0&&(C=n.TEXTURE0+j-1),H!==C&&(n.activeTexture(C),H=C)}function v(C,de,W){W===void 0&&(H===null?W=n.TEXTURE0+j-1:W=H);let q=pe[W];q===void 0&&(q={type:void 0,texture:void 0},pe[W]=q),(q.type!==C||q.texture!==de)&&(H!==W&&(n.activeTexture(W),H=W),n.bindTexture(C,de||J[C]),q.type=C,q.texture=de)}function B(){const C=pe[H];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(C){Be.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Be.copy(C))}function he(C){Je.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Je.copy(C))}function Xe(C,de){let W=c.get(de);W===void 0&&(W=new WeakMap,c.set(de,W));let q=W.get(C);q===void 0&&(q=n.getUniformBlockIndex(de,C.name),W.set(C,q))}function $e(C,de){const q=c.get(de).get(C);a.get(de)!==q&&(n.uniformBlockBinding(de,q,C.__bindingPointIndex),a.set(de,q))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,pe={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,T=null,N=null,R=new Ue(0,0,0),w=0,U=!1,S=null,y=null,L=null,z=null,k=null,Be.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ue,disable:re,bindFramebuffer:Ve,drawBuffers:Oe,useProgram:qe,setBlending:ge,setMaterial:be,setFlipSided:te,setCullFace:ae,setLineWidth:Me,setPolygonOffset:we,setScissorTest:ft,activeTexture:A,bindTexture:v,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:Ae,texImage3D:Ye,updateUBOMapping:Xe,uniformBlockBinding:$e,texStorage2D:We,texStorage3D:Q,texSubImage2D:Z,texSubImage3D:Le,compressedTexSubImage2D:ce,compressedTexSubImage3D:le,scissor:Ne,viewport:he,reset:Pt}}function Ny(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):po("canvas")}function _(A,v,B){let K=1;const $=ft(A);if(($.width>B||$.height>B)&&(K=B/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(K*$.width),Le=Math.floor(K*$.height);u===void 0&&(u=g(Z,Le));const ce=v?g(Z,Le):u;return ce.width=Z,ce.height=Le,ce.getContext("2d").drawImage(A,0,0,Z,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Le+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==cn&&A.minFilter!==En}function f(A){n.generateMipmap(A)}function E(A,v,B,K,$=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=v;if(v===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){const Le=$?wa:nt.getTransfer(K);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Le===gt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(A,v){let B;return A?v===null||v===dr||v===fr?B=n.DEPTH24_STENCIL8:v===ci?B=n.DEPTH32F_STENCIL8:v===Aa&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===dr||v===fr?B=n.DEPTH_COMPONENT24:v===ci?B=n.DEPTH_COMPONENT32F:v===Aa&&(B=n.DEPTH_COMPONENT16),B}function T(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function N(A){const v=A.target;v.removeEventListener("dispose",N),w(v),v.isVideoTexture&&h.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),S(v)}function w(A){const v=i.get(A);if(v.__webglInit===void 0)return;const B=A.source,K=d.get(B);if(K){const $=K[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(A),Object.keys(K).length===0&&d.delete(B)}i.remove(A)}function U(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const B=A.source,K=d.get(B);delete K[v.__cacheKey],o.memory.textures--}function S(A){const v=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let $=0;$<v.__webglFramebuffer[K].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[K][$]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,$=B.length;K<$;K++){const Z=i.get(B[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(A)}let y=0;function L(){y=0}function z(){const A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function k(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function j(A,v){const B=i.get(A);if(A.isVideoTexture&&Me(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(B,A,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function X(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Je(B,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function V(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Je(B,A,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function Y(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){G(B,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const H={[ur]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[ba]:n.MIRRORED_REPEAT},pe={[cn]:n.NEAREST,[wp]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},ve={[m_]:n.NEVER,[M_]:n.ALWAYS,[g_]:n.LESS,[Op]:n.LEQUAL,[__]:n.EQUAL,[y_]:n.GEQUAL,[v_]:n.GREATER,[x_]:n.NOTEQUAL};function _e(A,v){if(v.type===ci&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===pa||v.magFilter===Qr||v.magFilter===Pi||v.minFilter===En||v.minFilter===pa||v.minFilter===Qr||v.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,H[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==Qr&&v.minFilter!==Pi||v.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Be(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",N));const K=v.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const Z=k(v);if(Z!==A.__cacheKey){$[Z]===void 0&&($[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[Z].usedTimes++;const Le=$[A.__cacheKey];Le!==void 0&&($[A.__cacheKey].usedTimes--,Le.usedTimes===0&&U(v)),A.__cacheKey=Z,A.__webglTexture=$[Z].texture}return B}function Je(A,v,B){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const $=Be(A,v),Z=v.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+B);const Le=i.get(Z);if(Z.version!==Le.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const ce=nt.getPrimaries(nt.workingColorSpace),le=v.colorSpace===Ki?null:nt.getPrimaries(v.colorSpace),We=v.colorSpace===Ki||ce===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Q=_(v.image,!1,s.maxTextureSize);Q=we(v,Q);const Ae=r.convert(v.format,v.colorSpace),Ye=r.convert(v.type);let Ne=E(v.internalFormat,Ae,Ye,v.colorSpace,v.isVideoTexture);_e(K,v);let he;const Xe=v.mipmaps,$e=v.isVideoTexture!==!0,Pt=Le.__version===void 0||$===!0,C=Z.dataReady,de=T(v,Q);if(v.isDepthTexture)Ne=M(v.format===pr,v.type),Pt&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ne,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ne,Q.width,Q.height,0,Ae,Ye,null));else if(v.isDataTexture)if(Xe.length>0){$e&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,Xe[0].width,Xe[0].height);for(let W=0,q=Xe.length;W<q;W++)he=Xe[W],$e?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,he.width,he.height,Ae,Ye,he.data):t.texImage2D(n.TEXTURE_2D,W,Ne,he.width,he.height,0,Ae,Ye,he.data);v.generateMipmaps=!1}else $e?(Pt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,Q.width,Q.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Ae,Ye,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,Q.width,Q.height,0,Ae,Ye,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,Xe[0].width,Xe[0].height,Q.depth);for(let W=0,q=Xe.length;W<q;W++)if(he=Xe[W],v.format!==jn)if(Ae!==null)if($e){if(C)if(v.layerUpdates.size>0){for(const ne of v.layerUpdates){const Fe=he.width*he.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ne,he.width,he.height,1,Ae,he.data.slice(Fe*ne,Fe*(ne+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,he.width,he.height,Q.depth,Ae,he.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ne,he.width,he.height,Q.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,he.width,he.height,Q.depth,Ae,Ye,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ne,he.width,he.height,Q.depth,0,Ae,Ye,he.data)}else{$e&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,Ne,Xe[0].width,Xe[0].height);for(let W=0,q=Xe.length;W<q;W++)he=Xe[W],v.format!==jn?Ae!==null?$e?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,he.width,he.height,Ae,he.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ne,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,he.width,he.height,Ae,Ye,he.data):t.texImage2D(n.TEXTURE_2D,W,Ne,he.width,he.height,0,Ae,Ye,he.data)}else if(v.isDataArrayTexture)if($e){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ne,Q.width,Q.height,Q.depth),C)if(v.layerUpdates.size>0){let W;switch(Ye){case n.UNSIGNED_BYTE:switch(Ae){case n.ALPHA:W=1;break;case n.LUMINANCE:W=1;break;case n.LUMINANCE_ALPHA:W=2;break;case n.RGB:W=3;break;case n.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${Ae}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Ye}.`)}const q=Q.width*Q.height*W;for(const ne of v.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,Q.width,Q.height,1,Ae,Ye,Q.data.slice(q*ne,q*(ne+1)));v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ae,Ye,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,Q.width,Q.height,Q.depth,0,Ae,Ye,Q.data);else if(v.isData3DTexture)$e?(Pt&&t.texStorage3D(n.TEXTURE_3D,de,Ne,Q.width,Q.height,Q.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ae,Ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,Q.width,Q.height,Q.depth,0,Ae,Ye,Q.data);else if(v.isFramebufferTexture){if(Pt)if($e)t.texStorage2D(n.TEXTURE_2D,de,Ne,Q.width,Q.height);else{let W=Q.width,q=Q.height;for(let ne=0;ne<de;ne++)t.texImage2D(n.TEXTURE_2D,ne,Ne,W,q,0,Ae,Ye,null),W>>=1,q>>=1}}else if(Xe.length>0){if($e&&Pt){const W=ft(Xe[0]);t.texStorage2D(n.TEXTURE_2D,de,Ne,W.width,W.height)}for(let W=0,q=Xe.length;W<q;W++)he=Xe[W],$e?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ae,Ye,he):t.texImage2D(n.TEXTURE_2D,W,Ne,Ae,Ye,he);v.generateMipmaps=!1}else if($e){if(Pt){const W=ft(Q);t.texStorage2D(n.TEXTURE_2D,de,Ne,W.width,W.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Ae,Ye,Q);m(v)&&f(K),Le.__version=Z.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function G(A,v,B){if(v.image.length!==6)return;const K=Be(A,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const Z=i.get($);if($.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const Le=nt.getPrimaries(nt.workingColorSpace),ce=v.colorSpace===Ki?null:nt.getPrimaries(v.colorSpace),le=v.colorSpace===Ki||Le===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const We=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let q=0;q<6;q++)!We&&!Q?Ae[q]=_(v.image[q],!0,s.maxCubemapSize):Ae[q]=Q?v.image[q].image:v.image[q],Ae[q]=we(v,Ae[q]);const Ye=Ae[0],Ne=r.convert(v.format,v.colorSpace),he=r.convert(v.type),Xe=E(v.internalFormat,Ne,he,v.colorSpace),$e=v.isVideoTexture!==!0,Pt=Z.__version===void 0||K===!0,C=$.dataReady;let de=T(v,Ye);_e(n.TEXTURE_CUBE_MAP,v);let W;if(We){$e&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Xe,Ye.width,Ye.height);for(let q=0;q<6;q++){W=Ae[q].mipmaps;for(let ne=0;ne<W.length;ne++){const Fe=W[ne];v.format!==jn?Ne!==null?$e?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,Xe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,0,0,Fe.width,Fe.height,Ne,he,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne,Xe,Fe.width,Fe.height,0,Ne,he,Fe.data)}}}else{if(W=v.mipmaps,$e&&Pt){W.length>0&&de++;const q=ft(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Xe,q.width,q.height)}for(let q=0;q<6;q++)if(Q){$e?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ae[q].width,Ae[q].height,Ne,he,Ae[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,Ae[q].width,Ae[q].height,0,Ne,he,Ae[q].data);for(let ne=0;ne<W.length;ne++){const tt=W[ne].image[q].image;$e?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,0,0,tt.width,tt.height,Ne,he,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,Xe,tt.width,tt.height,0,Ne,he,tt.data)}}else{$e?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ne,he,Ae[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,Ne,he,Ae[q]);for(let ne=0;ne<W.length;ne++){const Fe=W[ne];$e?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,0,0,Ne,he,Fe.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne+1,Xe,Ne,he,Fe.image[q])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),Z.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function J(A,v,B,K,$,Z){const Le=r.convert(B.format,B.colorSpace),ce=r.convert(B.type),le=E(B.internalFormat,Le,ce,B.colorSpace);if(!i.get(v).__hasExternalTextures){const Q=Math.max(1,v.width>>Z),Ae=Math.max(1,v.height>>Z);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,Z,le,Q,Ae,v.depth,0,Le,ce,null):t.texImage2D($,Z,le,Q,Ae,0,Le,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,$,i.get(B).__webglTexture,0,te(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,$,i.get(B).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(A,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const K=v.depthTexture,$=K&&K.isDepthTexture?K.type:null,Z=M(v.stencilBuffer,$),Le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=te(v);ae(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Z,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,A)}else{const K=v.textures;for(let $=0;$<K.length;$++){const Z=K[$],Le=r.convert(Z.format,Z.colorSpace),ce=r.convert(Z.type),le=E(Z.internalFormat,Le,ce,Z.colorSpace),We=te(v);B&&ae(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,le,v.width,v.height):ae(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,$=te(v);if(v.depthTexture.format===rr)ae(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===pr)ae(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ve(A){const v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");re(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),ue(v.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ue(v.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(A,v,B){const K=i.get(A);v!==void 0&&J(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ve(A)}function qe(A){const v=A.texture,B=i.get(A),K=i.get(v);A.addEventListener("dispose",R);const $=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Le=$.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let le=0;le<v.mipmaps.length;le++)B.__webglFramebuffer[ce][le]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Le)for(let ce=0,le=$.length;ce<le;ce++){const We=i.get($[ce]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const le=$[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const We=r.convert(le.format,le.colorSpace),Q=r.convert(le.type),Ae=E(le.internalFormat,We,Q,le.colorSpace,A.isXRRenderTarget===!0),Ye=te(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)J(B.__webglFramebuffer[ce][le],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,le);else J(B.__webglFramebuffer[ce],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ce=0,le=$.length;ce<le;ce++){const We=$[ce],Q=i.get(We);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),_e(n.TEXTURE_2D,We),J(B.__webglFramebuffer,A,We,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(We)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),_e(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)J(B.__webglFramebuffer[le],A,v,n.COLOR_ATTACHMENT0,ce,le);else J(B.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&f(ce),t.unbindTexture()}A.depthBuffer&&Ve(A)}function b(A){const v=A.textures;for(let B=0,K=v.length;B<K;B++){const $=v[B];if(m($)){const Z=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Le=i.get($).__webglTexture;t.bindTexture(Z,Le),f(Z),t.unbindTexture()}}}const ie=[],ge=[];function be(A){if(A.samples>0){if(ae(A)===!1){const v=A.textures,B=A.width,K=A.height;let $=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(A),ce=v.length>1;if(ce)for(let le=0;le<v.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let le=0;le<v.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[le]);const We=i.get(v[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,$,n.NEAREST),c===!0&&(ie.length=0,ge.length=0,ie.push(n.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ie.push(Z),ge.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let le=0;le<v.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Le.__webglColorRenderbuffer[le]);const We=i.get(v[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function te(A){return Math.min(s.maxSamples,A.samples)}function ae(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function we(A,v){const B=A.colorSpace,K=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Kt&&B!==Ki&&(nt.getTransfer(B)===gt?(K!==jn||$!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Oe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ae}function Fy(n,e){function t(i,s=Ki){let r;const o=nt.getTransfer(s);if(i===is)return n.UNSIGNED_BYTE;if(i===Cp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===t_)return n.BYTE;if(i===n_)return n.SHORT;if(i===Aa)return n.UNSIGNED_SHORT;if(i===Rp)return n.INT;if(i===dr)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Xa)return n.HALF_FLOAT;if(i===s_)return n.ALPHA;if(i===r_)return n.RGB;if(i===jn)return n.RGBA;if(i===o_)return n.LUMINANCE;if(i===a_)return n.LUMINANCE_ALPHA;if(i===rr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Pp)return n.RED;if(i===Ip)return n.RED_INTEGER;if(i===c_)return n.RG;if(i===Dp)return n.RG_INTEGER;if(i===Up)return n.RGBA_INTEGER;if(i===Mc||i===Sc||i===Ec||i===Tc)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Au||i===wu||i===Ru||i===Cu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lu||i===Pu||i===Iu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lu||i===Pu)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Iu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Du||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu||i===ku||i===Hu||i===zu||i===Gu||i===Vu||i===Wu||i===Xu||i===ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Du)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ou)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===qu||i===Yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bc)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l_||i===Ku||i===$u||i===Zu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Oy extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ws extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Yt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ss({vertexShader:ky,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Gy extends Lr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new zy,m=t.getContextAttributes();let f=null,E=null;const M=[],T=[],N=new ke;let R=null;const w=new an;w.layers.enable(1),w.viewport=new dt;const U=new an;U.layers.enable(2),U.viewport=new dt;const S=[w,U],y=new Oy;y.layers.enable(1),y.layers.enable(2);let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=M[G];return J===void 0&&(J=new Zc,M[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=M[G];return J===void 0&&(J=new Zc,M[G]=J),J.getGripSpace()},this.getHand=function(G){let J=M[G];return J===void 0&&(J=new Zc,M[G]=J),J.getHandSpace()};function k(G){const J=T.indexOf(G.inputSource);if(J===-1)return;const ue=M[J];ue!==void 0&&(ue.update(G.inputSource,G.frame,l||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",X);for(let G=0;G<M.length;G++){const J=T[G];J!==null&&(T[G]=null,M[G].disconnect(J))}L=null,z=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ds(p.framebufferWidth,p.framebufferHeight,{format:jn,type:is,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ue=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?pr:rr,ue=m.stencil?fr:dr);const Ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ds(d.textureWidth,d.textureHeight,{format:jn,type:is,depthTexture:new Yp(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(G){for(let J=0;J<G.removed.length;J++){const ue=G.removed[J],re=T.indexOf(ue);re>=0&&(T[re]=null,M[re].disconnect(ue))}for(let J=0;J<G.added.length;J++){const ue=G.added[J];let re=T.indexOf(ue);if(re===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=T.length){T.push(ue),re=Oe;break}else if(T[Oe]===null){T[Oe]=ue,re=Oe;break}if(re===-1)break}const Ve=M[re];Ve&&Ve.connect(ue)}}const V=new P,Y=new P;function H(G,J,ue){V.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const re=V.distanceTo(Y),Ve=J.projectionMatrix.elements,Oe=ue.projectionMatrix.elements,qe=Ve[14]/(Ve[10]-1),b=Ve[14]/(Ve[10]+1),ie=(Ve[9]+1)/Ve[5],ge=(Ve[9]-1)/Ve[5],be=(Ve[8]-1)/Ve[0],te=(Oe[8]+1)/Oe[0],ae=qe*be,Me=qe*te,we=re/(-be+te),ft=we*-be;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ft),G.translateZ(we),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=qe+we,v=b+we,B=ae-ft,K=Me+(re-ft),$=ie*b/v*A,Z=ge*b/v*A;G.projectionMatrix.makePerspective(B,K,$,Z,A,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function pe(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),y.near=U.near=w.near=G.near,y.far=U.far=w.far=G.far,(L!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,z=y.far,w.near=L,w.far=z,U.near=L,U.far=z,w.updateProjectionMatrix(),U.updateProjectionMatrix(),G.updateProjectionMatrix());const J=G.parent,ue=y.cameras;pe(y,J);for(let re=0;re<ue.length;re++)pe(ue[re],J);ue.length===2?H(y,w,U):y.projectionMatrix.copy(w.projectionMatrix),ve(G,y,J)};function ve(G,J,ue){ue===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=mr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _e=null;function Be(G,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let re=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Oe=0;Oe<ue.length;Oe++){const qe=ue[Oe];let b=null;if(p!==null)b=p.getViewport(qe);else{const ge=u.getViewSubImage(d,qe);b=ge.viewport,Oe===0&&(e.setRenderTargetTextures(E,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(E))}let ie=S[Oe];ie===void 0&&(ie=new an,ie.layers.enable(Oe),ie.viewport=new dt,S[Oe]=ie),ie.matrix.fromArray(qe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(qe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(b.x,b.y,b.width,b.height),Oe===0&&(y.matrix.copy(ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(ie)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const Oe=u.getDepthInformation(ue[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,s.renderState)}}for(let ue=0;ue<M.length;ue++){const re=T[ue],Ve=M[ue];re!==null&&Ve!==void 0&&Ve.update(re,J,l||o)}_e&&_e(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Je=new qp;Je.setAnimationLoop(Be),this.setAnimationLoop=function(G){_e=G},this.dispose=function(){}}}const ys=new On,Vy=new He;function Wy(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Wp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,M,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),M=E.envMap,T=E.envMapRotation;M&&(m.envMap.value=M,ys.copy(T),ys.x*=-1,ys.y*=-1,ys.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(ys)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const T=M.program;i.uniformBlockBinding(E,T)}function l(E,M){let T=s[E.id];T===void 0&&(g(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",m));const N=M.program;i.updateUBOMapping(E,N);const R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){const M=u();E.__bindingPointIndex=M;const T=n.createBuffer(),N=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,N,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],T=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,w=T.length;R<w;R++){const U=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,y=U.length;S<y;S++){const L=U[S];if(p(L,R,S,N)===!0){const z=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let X=0;X<k.length;X++){const V=k[X],Y=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+j,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,T,N){const R=E.value,w=M+"_"+T;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{const U=N[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return N[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(E){const M=E.uniforms;let T=0;const N=16;for(let w=0,U=M.length;w<U;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,L=S.length;y<L;y++){const z=S[y],k=Array.isArray(z.value)?z.value:[z.value];for(let j=0,X=k.length;j<X;j++){const V=k[j],Y=_(V),H=T%N;H!==0&&N-H<Y.boundary&&(T+=N-H),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=Y.storage}}}const R=T%N;return R>0&&(T+=N-R),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class jy{constructor(e={}){const{canvas:t=B_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=ts,this.toneMappingExposure=1;const M=this;let T=!1,N=0,R=0,w=null,U=-1,S=null;const y=new dt,L=new dt;let z=null;const k=new Ue(0);let j=0,X=t.width,V=t.height,Y=1,H=null,pe=null;const ve=new dt(0,0,X,V),_e=new dt(0,0,X,V);let Be=!1;const Je=new rh;let G=!1,J=!1;const ue=new He,re=new P,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function qe(){return w===null?Y:1}let b=i;function ie(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",q,!1),b===null){const I="webgl2";if(b=ie(I,x),b===null)throw ie(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ge,be,te,ae,Me,we,ft,A,v,B,K,$,Z,Le,ce,le,We,Q,Ae,Ye,Ne,he,Xe,$e;function Pt(){ge=new ex(b),ge.init(),he=new Fy(b,ge),be=new Y2(b,ge,e,he),te=new Uy(b),ae=new ix(b),Me=new yy,we=new Ny(b,ge,te,Me,be,he,ae),ft=new $2(M),A=new Q2(M),v=new h1(b),Xe=new j2(b,v),B=new tx(b,v,ae,Xe),K=new rx(b,B,v,ae),Ae=new sx(b,be,we),le=new K2(Me),$=new xy(M,ft,A,ge,be,Xe,le),Z=new Wy(M,Me),Le=new Sy,ce=new Ry(ge),Q=new X2(M,ft,A,te,K,d,c),We=new Dy(M,K,be),$e=new Xy(b,ae,be,te),Ye=new q2(b,ge,ae),Ne=new nx(b,ge,ae),ae.programs=$.programs,M.capabilities=be,M.extensions=ge,M.properties=Me,M.renderLists=Le,M.shadowMap=We,M.state=te,M.info=ae}Pt();const C=new Gy(M,b);this.xr=C,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const x=ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(X,V,!1))},this.getSize=function(x){return x.set(X,V)},this.setSize=function(x,I,F=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,V=I,t.width=Math.floor(x*Y),t.height=Math.floor(I*Y),F===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(X*Y,V*Y).floor()},this.setDrawingBufferSize=function(x,I,F){X=x,V=I,Y=F,t.width=Math.floor(x*F),t.height=Math.floor(I*F),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,I,F,O){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,I,F,O),te.viewport(y.copy(ve).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(_e)},this.setScissor=function(x,I,F,O){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,I,F,O),te.scissor(L.copy(_e).multiplyScalar(Y).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(x){te.setScissorTest(Be=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(x=!0,I=!0,F=!0){let O=0;if(x){let D=!1;if(w!==null){const ee=w.texture.format;D=ee===Up||ee===Dp||ee===Ip}if(D){const ee=w.texture.type,fe=ee===is||ee===dr||ee===Aa||ee===fr||ee===Cp||ee===Lp,xe=Q.getClearColor(),Ee=Q.getClearAlpha(),Ie=xe.r,De=xe.g,Pe=xe.b;fe?(p[0]=Ie,p[1]=De,p[2]=Pe,p[3]=Ee,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=Ie,g[1]=De,g[2]=Pe,g[3]=Ee,b.clearBufferiv(b.COLOR,0,g))}else O|=b.COLOR_BUFFER_BIT}I&&(O|=b.DEPTH_BUFFER_BIT),F&&(O|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Le.dispose(),ce.dispose(),Me.dispose(),ft.dispose(),A.dispose(),K.dispose(),Xe.dispose(),$e.dispose(),$.dispose(),C.dispose(),C.removeEventListener("sessionstart",Jn),C.removeEventListener("sessionend",Qn),fs.stop()};function de(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=ae.autoReset,I=We.enabled,F=We.autoUpdate,O=We.needsUpdate,D=We.type;Pt(),ae.autoReset=x,We.enabled=I,We.autoUpdate=F,We.needsUpdate=O,We.type=D}function q(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ne(x){const I=x.target;I.removeEventListener("dispose",ne),Fe(I)}function Fe(x){tt(x),Me.remove(x)}function tt(x){const I=Me.get(x).programs;I!==void 0&&(I.forEach(function(F){$.releaseProgram(F)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,F,O,D,ee){I===null&&(I=Ve);const fe=D.isMesh&&D.matrixWorld.determinant()<0,xe=d0(x,I,F,O,D);te.setMaterial(O,fe);let Ee=F.index,Ie=1;if(O.wireframe===!0){if(Ee=B.getWireframeAttribute(F),Ee===void 0)return;Ie=2}const De=F.drawRange,Pe=F.attributes.position;let it=De.start*Ie,bt=(De.start+De.count)*Ie;ee!==null&&(it=Math.max(it,ee.start*Ie),bt=Math.min(bt,(ee.start+ee.count)*Ie)),Ee!==null?(it=Math.max(it,0),bt=Math.min(bt,Ee.count)):Pe!=null&&(it=Math.max(it,0),bt=Math.min(bt,Pe.count));const At=bt-it;if(At<0||At===1/0)return;Xe.setup(D,O,xe,F,Ee);let _n,rt=Ye;if(Ee!==null&&(_n=v.get(Ee),rt=Ne,rt.setIndex(_n)),D.isMesh)O.wireframe===!0?(te.setLineWidth(O.wireframeLinewidth*qe()),rt.setMode(b.LINES)):rt.setMode(b.TRIANGLES);else if(D.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),te.setLineWidth(Ce*qe()),D.isLineSegments?rt.setMode(b.LINES):D.isLineLoop?rt.setMode(b.LINE_LOOP):rt.setMode(b.LINE_STRIP)}else D.isPoints?rt.setMode(b.POINTS):D.isSprite&&rt.setMode(b.TRIANGLES);if(D.isBatchedMesh)D._multiDrawInstances!==null?rt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances):rt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)rt.renderInstances(it,At,D.count);else if(F.isInstancedBufferGeometry){const Ce=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,nn=Math.min(F.instanceCount,Ce);rt.renderInstances(it,At,nn)}else rt.render(it,At)};function It(x,I,F){x.transparent===!0&&x.side===ri&&x.forceSinglePass===!1?(x.side=ln,x.needsUpdate=!0,Po(x,I,F),x.side=Oi,x.needsUpdate=!0,Po(x,I,F),x.side=ri):Po(x,I,F)}this.compile=function(x,I,F=null){F===null&&(F=x),m=ce.get(F),m.init(I),E.push(m),F.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),x!==F&&x.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();const O=new Set;return x.traverse(function(D){const ee=D.material;if(ee)if(Array.isArray(ee))for(let fe=0;fe<ee.length;fe++){const xe=ee[fe];It(xe,F,D),O.add(xe)}else It(ee,F,D),O.add(ee)}),E.pop(),m=null,O},this.compileAsync=function(x,I,F=null){const O=this.compile(x,I,F);return new Promise(D=>{function ee(){if(O.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){D(x);return}setTimeout(ee,10)}ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Gt=null;function ct(x){Gt&&Gt(x)}function Jn(){fs.stop()}function Qn(){fs.start()}const fs=new qp;fs.setAnimationLoop(ct),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(x){Gt=x,C.setAnimationLoop(x),x===null?fs.stop():fs.start()},C.addEventListener("sessionstart",Jn),C.addEventListener("sessionend",Qn),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(I),I=C.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,I,w),m=ce.get(x,E.length),m.init(I),E.push(m),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Je.setFromProjectionMatrix(ue),J=this.localClippingEnabled,G=le.init(this.clippingPlanes,J),_=Le.get(x,f.length),_.init(),f.push(_),C.enabled===!0&&C.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&_c(ee,I,-1/0,M.sortObjects)}_c(x,I,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(H,pe),Oe=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Oe&&Q.addToRenderList(_,x),this.info.render.frame++,G===!0&&le.beginShadows();const F=m.state.shadowsArray;We.render(F,x,I),G===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,D=_.transmissive;if(m.setupLights(),I.isArrayCamera){const ee=I.cameras;if(D.length>0)for(let fe=0,xe=ee.length;fe<xe;fe++){const Ee=ee[fe];gu(O,D,x,Ee)}Oe&&Q.render(x);for(let fe=0,xe=ee.length;fe<xe;fe++){const Ee=ee[fe];mu(_,x,Ee,Ee.viewport)}}else D.length>0&&gu(O,D,x,I),Oe&&Q.render(x),mu(_,x,I);w!==null&&(we.updateMultisampleRenderTarget(w),we.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(M,x,I),Xe.resetDefaultState(),U=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],G===!0&&le.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function _c(x,I,F,O){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Je.intersectsSprite(x)){O&&re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ue);const fe=K.update(x),xe=x.material;xe.visible&&_.push(x,fe,xe,F,re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Je.intersectsObject(x))){const fe=K.update(x),xe=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),re.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),re.copy(fe.boundingSphere.center)),re.applyMatrix4(x.matrixWorld).applyMatrix4(ue)),Array.isArray(xe)){const Ee=fe.groups;for(let Ie=0,De=Ee.length;Ie<De;Ie++){const Pe=Ee[Ie],it=xe[Pe.materialIndex];it&&it.visible&&_.push(x,fe,it,F,re.z,Pe)}}else xe.visible&&_.push(x,fe,xe,F,re.z,null)}}const ee=x.children;for(let fe=0,xe=ee.length;fe<xe;fe++)_c(ee[fe],I,F,O)}function mu(x,I,F,O){const D=x.opaque,ee=x.transmissive,fe=x.transparent;m.setupLightsView(F),G===!0&&le.setGlobalState(M.clippingPlanes,F),O&&te.viewport(y.copy(O)),D.length>0&&Lo(D,I,F),ee.length>0&&Lo(ee,I,F),fe.length>0&&Lo(fe,I,F),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function gu(x,I,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Ds(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Xa:is,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ee=m.state.transmissionRenderTarget[O.id],fe=O.viewport||y;ee.setSize(fe.z,fe.w);const xe=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(k),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),Oe?Q.render(F):M.clear();const Ee=M.toneMapping;M.toneMapping=ts;const Ie=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),G===!0&&le.setGlobalState(M.clippingPlanes,O),Lo(x,F,O),we.updateMultisampleRenderTarget(ee),we.updateRenderTargetMipmap(ee),ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Pe=0,it=I.length;Pe<it;Pe++){const bt=I[Pe],At=bt.object,_n=bt.geometry,rt=bt.material,Ce=bt.group;if(rt.side===ri&&At.layers.test(O.layers)){const nn=rt.side;rt.side=ln,rt.needsUpdate=!0,_u(At,F,O,_n,rt,Ce),rt.side=nn,rt.needsUpdate=!0,De=!0}}De===!0&&(we.updateMultisampleRenderTarget(ee),we.updateRenderTargetMipmap(ee))}M.setRenderTarget(xe),M.setClearColor(k,j),Ie!==void 0&&(O.viewport=Ie),M.toneMapping=Ee}function Lo(x,I,F){const O=I.isScene===!0?I.overrideMaterial:null;for(let D=0,ee=x.length;D<ee;D++){const fe=x[D],xe=fe.object,Ee=fe.geometry,Ie=O===null?fe.material:O,De=fe.group;xe.layers.test(F.layers)&&_u(xe,I,F,Ee,Ie,De)}}function _u(x,I,F,O,D,ee){x.onBeforeRender(M,I,F,O,D,ee),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(M,I,F,O,x,ee),D.transparent===!0&&D.side===ri&&D.forceSinglePass===!1?(D.side=ln,D.needsUpdate=!0,M.renderBufferDirect(F,I,O,D,x,ee),D.side=Oi,D.needsUpdate=!0,M.renderBufferDirect(F,I,O,D,x,ee),D.side=ri):M.renderBufferDirect(F,I,O,D,x,ee),x.onAfterRender(M,I,F,O,D,ee)}function Po(x,I,F){I.isScene!==!0&&(I=Ve);const O=Me.get(x),D=m.state.lights,ee=m.state.shadowsArray,fe=D.state.version,xe=$.getParameters(x,D.state,ee,I,F),Ee=$.getProgramCacheKey(xe);let Ie=O.programs;O.environment=x.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(x.isMeshStandardMaterial?A:ft).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ie===void 0&&(x.addEventListener("dispose",ne),Ie=new Map,O.programs=Ie);let De=Ie.get(Ee);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===fe)return xu(x,xe),De}else xe.uniforms=$.getUniforms(x),x.onBuild(F,xe,M),x.onBeforeCompile(xe,M),De=$.acquireProgram(xe,Ee),Ie.set(Ee,De),O.uniforms=xe.uniforms;const Pe=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pe.clippingPlanes=le.uniform),xu(x,xe),O.needsLights=p0(x),O.lightsStateVersion=fe,O.needsLights&&(Pe.ambientLightColor.value=D.state.ambient,Pe.lightProbe.value=D.state.probe,Pe.directionalLights.value=D.state.directional,Pe.directionalLightShadows.value=D.state.directionalShadow,Pe.spotLights.value=D.state.spot,Pe.spotLightShadows.value=D.state.spotShadow,Pe.rectAreaLights.value=D.state.rectArea,Pe.ltc_1.value=D.state.rectAreaLTC1,Pe.ltc_2.value=D.state.rectAreaLTC2,Pe.pointLights.value=D.state.point,Pe.pointLightShadows.value=D.state.pointShadow,Pe.hemisphereLights.value=D.state.hemi,Pe.directionalShadowMap.value=D.state.directionalShadowMap,Pe.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Pe.spotShadowMap.value=D.state.spotShadowMap,Pe.spotLightMatrix.value=D.state.spotLightMatrix,Pe.spotLightMap.value=D.state.spotLightMap,Pe.pointShadowMap.value=D.state.pointShadowMap,Pe.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function vu(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ma.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function xu(x,I){const F=Me.get(x);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function d0(x,I,F,O,D){I.isScene!==!0&&(I=Ve),we.resetTextureUnits();const ee=I.fog,fe=O.isMeshStandardMaterial?I.environment:null,xe=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Kt,Ee=(O.isMeshStandardMaterial?A:ft).get(O.envMap||fe),Ie=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pe=!!F.morphAttributes.position,it=!!F.morphAttributes.normal,bt=!!F.morphAttributes.color;let At=ts;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=M.toneMapping);const _n=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=_n!==void 0?_n.length:0,Ce=Me.get(O),nn=m.state.lights;if(G===!0&&(J===!0||x!==S)){const Rn=x===S&&O.id===U;le.setState(O,x,Rn)}let lt=!1;O.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==nn.state.version||Ce.outputColorSpace!==xe||D.isBatchedMesh&&Ce.batching===!1||!D.isBatchedMesh&&Ce.batching===!0||D.isBatchedMesh&&Ce.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ce.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ce.instancing===!1||!D.isInstancedMesh&&Ce.instancing===!0||D.isSkinnedMesh&&Ce.skinning===!1||!D.isSkinnedMesh&&Ce.skinning===!0||D.isInstancedMesh&&Ce.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ce.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ce.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ce.instancingMorph===!1&&D.morphTexture!==null||Ce.envMap!==Ee||O.fog===!0&&Ce.fog!==ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==le.numPlanes||Ce.numIntersection!==le.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==De||Ce.morphTargets!==Pe||Ce.morphNormals!==it||Ce.morphColors!==bt||Ce.toneMapping!==At||Ce.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,Ce.__version=O.version);let Mi=Ce.currentProgram;lt===!0&&(Mi=Po(O,I,D));let Io=!1,ps=!1,vc=!1;const Vt=Mi.getUniforms(),ki=Ce.uniforms;if(te.useProgram(Mi.program)&&(Io=!0,ps=!0,vc=!0),O.id!==U&&(U=O.id,ps=!0),Io||S!==x){Vt.setValue(b,"projectionMatrix",x.projectionMatrix),Vt.setValue(b,"viewMatrix",x.matrixWorldInverse);const Rn=Vt.map.cameraPosition;Rn!==void 0&&Rn.setValue(b,re.setFromMatrixPosition(x.matrixWorld)),be.logarithmicDepthBuffer&&Vt.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Vt.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,ps=!0,vc=!0)}if(D.isSkinnedMesh){Vt.setOptional(b,D,"bindMatrix"),Vt.setOptional(b,D,"bindMatrixInverse");const Rn=D.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Vt.setValue(b,"boneTexture",Rn.boneTexture,we))}D.isBatchedMesh&&(Vt.setOptional(b,D,"batchingTexture"),Vt.setValue(b,"batchingTexture",D._matricesTexture,we),Vt.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&Vt.setValue(b,"batchingColorTexture",D._colorsTexture,we));const xc=F.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0)&&Ae.update(D,F,Mi),(ps||Ce.receiveShadow!==D.receiveShadow)&&(Ce.receiveShadow=D.receiveShadow,Vt.setValue(b,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ki.envMap.value=Ee,ki.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&I.environment!==null&&(ki.envMapIntensity.value=I.environmentIntensity),ps&&(Vt.setValue(b,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&f0(ki,vc),ee&&O.fog===!0&&Z.refreshFogUniforms(ki,ee),Z.refreshMaterialUniforms(ki,O,Y,V,m.state.transmissionRenderTarget[x.id]),ma.upload(b,vu(Ce),ki,we)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ma.upload(b,vu(Ce),ki,we),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Vt.setValue(b,"center",D.center),Vt.setValue(b,"modelViewMatrix",D.modelViewMatrix),Vt.setValue(b,"normalMatrix",D.normalMatrix),Vt.setValue(b,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Rn=O.uniformsGroups;for(let yc=0,m0=Rn.length;yc<m0;yc++){const yu=Rn[yc];$e.update(yu,Mi),$e.bind(yu,Mi)}}return Mi}function f0(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function p0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,I,F){Me.get(x.texture).__webglTexture=I,Me.get(x.depthTexture).__webglTexture=F;const O=Me.get(x);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const F=Me.get(x);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,F=0){w=x,N=I,R=F;let O=!0,D=null,ee=!1,fe=!1;if(x){const Ee=Me.get(x);Ee.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(b.FRAMEBUFFER,null),O=!1):Ee.__webglFramebuffer===void 0?we.setupRenderTarget(x):Ee.__hasExternalTextures&&we.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);const Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const De=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(De[I])?D=De[I][F]:D=De[I],ee=!0):x.samples>0&&we.useMultisampledRTT(x)===!1?D=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(De)?D=De[F]:D=De,y.copy(x.viewport),L.copy(x.scissor),z=x.scissorTest}else y.copy(ve).multiplyScalar(Y).floor(),L.copy(_e).multiplyScalar(Y).floor(),z=Be;if(te.bindFramebuffer(b.FRAMEBUFFER,D)&&O&&te.drawBuffers(x,D),te.viewport(y),te.scissor(L),te.setScissorTest(z),ee){const Ee=Me.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,F)}else if(fe){const Ee=Me.get(x.texture),Ie=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ee.__webglTexture,F||0,Ie)}U=-1},this.readRenderTargetPixels=function(x,I,F,O,D,ee,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){te.bindFramebuffer(b.FRAMEBUFFER,xe);try{const Ee=x.texture,Ie=Ee.format,De=Ee.type;if(!be.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-O&&F>=0&&F<=x.height-D&&b.readPixels(I,F,O,D,he.convert(Ie),he.convert(De),ee)}finally{const Ee=w!==null?Me.get(w).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,I,F,O,D,ee,fe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){te.bindFramebuffer(b.FRAMEBUFFER,xe);try{const Ee=x.texture,Ie=Ee.format,De=Ee.type;if(!be.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-O&&F>=0&&F<=x.height-D){const Pe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.bufferData(b.PIXEL_PACK_BUFFER,ee.byteLength,b.STREAM_READ),b.readPixels(I,F,O,D,he.convert(Ie),he.convert(De),0),b.flush();const it=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await k_(b,it,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ee)}finally{b.deleteBuffer(Pe),b.deleteSync(it)}return ee}}finally{const Ee=w!==null?Me.get(w).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(x,I=null,F=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(x.image.width*O),ee=Math.floor(x.image.height*O),fe=I!==null?I.x:0,xe=I!==null?I.y:0;we.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,F,0,0,fe,xe,D,ee),te.unbindTexture()},this.copyTextureToTexture=function(x,I,F=null,O=null,D=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1],I=arguments[2],D=arguments[3]||0,F=null);let ee,fe,xe,Ee,Ie,De;F!==null?(ee=F.max.x-F.min.x,fe=F.max.y-F.min.y,xe=F.min.x,Ee=F.min.y):(ee=x.image.width,fe=x.image.height,xe=0,Ee=0),O!==null?(Ie=O.x,De=O.y):(Ie=0,De=0);const Pe=he.convert(I.format),it=he.convert(I.type);we.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const bt=b.getParameter(b.UNPACK_ROW_LENGTH),At=b.getParameter(b.UNPACK_IMAGE_HEIGHT),_n=b.getParameter(b.UNPACK_SKIP_PIXELS),rt=b.getParameter(b.UNPACK_SKIP_ROWS),Ce=b.getParameter(b.UNPACK_SKIP_IMAGES),nn=x.isCompressedTexture?x.mipmaps[D]:x.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,nn.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,nn.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ee),x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,D,Ie,De,ee,fe,Pe,it,nn.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,D,Ie,De,nn.width,nn.height,Pe,nn.data):b.texSubImage2D(b.TEXTURE_2D,D,Ie,De,Pe,it,nn),b.pixelStorei(b.UNPACK_ROW_LENGTH,bt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,At),b.pixelStorei(b.UNPACK_SKIP_PIXELS,_n),b.pixelStorei(b.UNPACK_SKIP_ROWS,rt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ce),D===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(x,I,F=null,O=null,D=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,x=arguments[2],I=arguments[3],D=arguments[4]||0);let ee,fe,xe,Ee,Ie,De,Pe,it,bt;const At=x.isCompressedTexture?x.mipmaps[D]:x.image;F!==null?(ee=F.max.x-F.min.x,fe=F.max.y-F.min.y,xe=F.max.z-F.min.z,Ee=F.min.x,Ie=F.min.y,De=F.min.z):(ee=At.width,fe=At.height,xe=At.depth,Ee=0,Ie=0,De=0),O!==null?(Pe=O.x,it=O.y,bt=O.z):(Pe=0,it=0,bt=0);const _n=he.convert(I.format),rt=he.convert(I.type);let Ce;if(I.isData3DTexture)we.setTexture3D(I,0),Ce=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)we.setTexture2DArray(I,0),Ce=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const nn=b.getParameter(b.UNPACK_ROW_LENGTH),lt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Mi=b.getParameter(b.UNPACK_SKIP_PIXELS),Io=b.getParameter(b.UNPACK_SKIP_ROWS),ps=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,At.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,At.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ie),b.pixelStorei(b.UNPACK_SKIP_IMAGES,De),x.isDataTexture||x.isData3DTexture?b.texSubImage3D(Ce,D,Pe,it,bt,ee,fe,xe,_n,rt,At.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(Ce,D,Pe,it,bt,ee,fe,xe,_n,At.data):b.texSubImage3D(Ce,D,Pe,it,bt,ee,fe,xe,_n,rt,At),b.pixelStorei(b.UNPACK_ROW_LENGTH,nn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,lt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Mi),b.pixelStorei(b.UNPACK_SKIP_ROWS,Io),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ps),D===0&&I.generateMipmaps&&b.generateMipmap(Ce),te.unbindTexture()},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&we.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?we.setTextureCube(x,0):x.isData3DTexture?we.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?we.setTexture2DArray(x,0):we.setTexture2D(x,0),te.unbindTexture()},this.resetState=function(){N=0,R=0,w=null,te.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===th?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===ja?"display-p3":"srgb"}}class ch{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qy extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ih("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new P;class lh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xd=new P,jd=new dt,qd=new dt,Ky=new P,Yd=new He,ea=new P,Jc=new pi,Kd=new He,Qc=new vo;class $y extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bu,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ea),this.boundingBox.expandByPoint(ea)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ea),this.boundingSphere.expandByPoint(ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(s),e.ray.intersectsSphere(Jc)!==!1&&(Kd.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(Kd),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;jd.fromBufferAttribute(s.attributes.skinIndex,e),qd.fromBufferAttribute(s.attributes.skinWeight,e),Xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=qd.getComponent(r);if(o!==0){const a=jd.getComponent(r);Yd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ky.copy(Xd).applyMatrix4(Yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class em extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tm extends Yt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=cn,h=cn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $d=new He,Zy=new He;class hh{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Zy;$d.multiplyMatrices(a,t[r]),$d.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new hh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new tm(t,e,e,jn,ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new em),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Al extends hn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new He,Zd=new He,ta=[],Jd=new Fn,Jy=new He,jr=new wt,qr=new pi;class Qy extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),Jd.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Jd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),qr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Zd.multiplyMatrices(i,Qs),jr.matrixWorld=Zd,jr.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){const c=ta[o];c.instanceId=r,c.object=this,t.push(c)}ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tm(new Float32Array(s*this.count),s,this.count,Pp,ci));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class nm extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pa=new P,Ia=new P,Qd=new He,Yr=new vo,na=new pi,el=new P,ef=new P;class uh extends St{constructor(e=new mi,t=new nm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Pa.fromBufferAttribute(t,s-1),Ia.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Pa.distanceTo(Ia);e.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Qd.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(Qd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),E=h.getX(_+1),M=ia(this,e,Yr,c,f,E);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ia(this,e,Yr,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=ia(this,e,Yr,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=ia(this,e,Yr,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ia(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Pa.fromBufferAttribute(o,s),Ia.fromBufferAttribute(o,r),t.distanceSqToSegment(Pa,Ia,el,ef)>i)return;el.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(el);if(!(c<e.near||c>e.far))return{distance:c,point:ef.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const tf=new P,nf=new P;class eM extends uh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tf.fromBufferAttribute(t,s),nf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tf.distanceTo(nf);e.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tM extends uh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class im extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sf=new He,wl=new vo,sa=new pi,ra=new P;class nM extends St{constructor(e=new mi,t=new im){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;sf.copy(s).invert(),wl.copy(e.ray).applyMatrix4(sf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);ra.fromBufferAttribute(u,m),rf(ra,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ra.fromBufferAttribute(u,g),rf(ra,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rf(n,e,t,i,s,r,o){const a=wl.distanceSqToPoint(n);if(a<t){const c=new P;wl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Rs extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends Rs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function sM(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function of(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function sm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class xo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rM extends xo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qu:r=e,a=2*t-i;break;case ed:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Qu:o=e,c=2*i-t;break;case ed:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let N=0;N!==a;++N)r[N]=f*o[h+N]+E*o[l+N]+M*o[c+N]+T*o[u+N];return r}}class oM extends xo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class aM extends xo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new aM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case uo:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&iM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ac,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=fo;class Ir extends _i{constructor(e,t,i){super(e,t,i)}}Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=uo;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class rm extends _i{}rm.prototype.ValueTypeName="color";class vr extends _i{}vr.prototype.ValueTypeName="number";class cM extends xo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)hs.slerpFlat(r,0,o,l-a,o,l,c);return r}}class xr extends _i{InterpolantFactoryMethodLinear(e){return new cM(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends _i{constructor(e,t,i){super(e,t,i)}}Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=uo;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends _i{}yr.prototype.ValueTypeName="vector";class lM{constructor(e="",t=-1,i=[],s=h_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(uM(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(_i.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=sM(c);c=of(c,1,h),l=of(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new vr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];sm(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const M=d[g];m.push(M.time),f.push(M.morphTarget===_?1:0)}s.push(new vr(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";i(yr,p+".position",d,"pos",s),i(xr,p+".quaternion",d,"rot",s),i(yr,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return rm;case"quaternion":return xr;case"bool":case"boolean":return Ir;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hM(n.type);if(n.times===void 0){const t=[],i=[];sm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Qi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dM{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const fM=new dM;class Ur{constructor(e){this.manager=e!==void 0?e:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class pM extends Error{constructor(e,t){super(e),this.response=t}}class om extends Ur{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:i,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=wi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){E();function E(){u.read().then(({done:M,value:T})=>{if(M)f.close();else{_+=T.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,w=h.length;R<w;R++){const U=h[R];U.onProgress&&U.onProgress(N)}f.enqueue(T),E()}},M=>{f.error(M)})}}});return new Response(m)}else throw new pM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Qi.add(e,l);const h=wi[e];delete wi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mM extends Ur{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=po("img");function c(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class gM extends Ur{constructor(e){super(e)}load(e,t,i,s){const r=new Yt,o=new mM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class yo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _M extends yo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tl=new He,af=new P,cf=new P;class dh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cf),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vM extends dh{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xM extends yo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lf=new He,Kr=new P,nl=new P;class yM extends dh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kr),nl.copy(i.position),nl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nl),i.updateMatrixWorld(),s.makeTranslation(-Kr.x,-Kr.y,-Kr.z),lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf)}}class Rl extends yo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MM extends dh{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new MM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class SM extends yo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ro{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class EM extends Ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,c),r.manager.itemStart(e)}}const fh="\\[\\]\\.:\\/",TM=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",bM="[^"+fh.replace("\\.","")+"]",AM=/((?:WC+[\/:])*)/.source.replace("WC",ph),wM=/(WCOD+)?/.source.replace("WCOD",bM),RM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),CM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),LM=new RegExp("^"+AM+wM+RM+CM+"$"),PM=["material","materials","bones","map"];class IM{constructor(e,t,i){const s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(TM,"")}static parseTrackName(e){const t=LM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);PM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=IM;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const hf=new He;class aa{constructor(e,t,i=0,s=1/0){this.ray=new vo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hf),this}intersectObject(e,t=!0,i=[]){return Ll(e,this,i,t),i.sort(uf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ll(e[s],this,i,t);return i.sort(uf),i}}function uf(n,e){return n.distance-e.distance}function Ll(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ll(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);function df(n,e){if(e===u_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===El||e===Np){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===El)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class DM extends Ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new JM(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ro.extractUrlBase(e);o=ro.resolveURL(l,this.path)}else o=ro.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new om(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===am){try{o[je.KHR_BINARY_GLTF]=new QM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new dS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new FM;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new eS(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new tS;break;case je.KHR_MESH_QUANTIZATION:o[u]=new nS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function UM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NM{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Cl(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rl(h),l.distance=u;break;case"spot":l=new xM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class FM{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(e,t,i){const s=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(s)}}class OM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class BM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}}class kM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class HM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class zM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class GM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class VM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,qt)),Promise.all(r)}}class jM{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class KM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $M{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZM{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class JM{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Dn.TRIANGLES&&l.mode!==Dn.TRIANGLE_STRIP&&l.mode!==Dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new He,m=new P,f=new hs,E=new P(1,1,1),M=new Qy(g.geometry,g.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,T),c.SCALE&&E.fromBufferAttribute(c.SCALE,T),M.setMatrixAt(T,_.compose(m,f,E));for(const T in c)if(T==="_COLOR_0"){const N=c[T];M.instanceColor=new Al(N.array,N.itemSize,N.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,c[T]);St.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const am="glTF",$r=12,ff={JSON:1313821514,BIN:5130562};class QM{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$r),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-$r,r=new DataView(e,$r);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===ff.JSON){const l=new Uint8Array(e,$r+o,a);this.content=i.decode(l)}else if(c===ff.BIN){const l=$r+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Pl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Pl[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],p=ar[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,Kt,d)})})}}class tS{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nS{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class cm extends xo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,E=1-m,M=f-d+u;for(let T=0;T!==a;T++){const N=o[_+T+a],R=o[_+T+c]*h,w=o[g+T+a],U=o[g+T]*h;r[T]=E*N+M*R+m*w+f*U}return r}}const iS=new hs;class sS extends cm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return iS.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pf={9728:cn,9729:En,9984:wp,9985:pa,9986:Qr,9987:Pi},mf={33071:Zi,33648:ba,10497:ur},il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rS={CUBICSPLINE:void 0,LINEAR:fo,STEP:uo},sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Rs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),n.DefaultMaterial}function Ms(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aS(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function cS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lS(n){let e;const t=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rl(t.attributes):e=n.indices+":"+rl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+rl(n.targets[i]);return e}function rl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Il(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const uS=new He;class dS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new gM(this.options.manager):this.textureLoader=new EM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new om(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ms(r,a,s),Ci(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(ro.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=il[s.type],a=ar[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new hn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=il[s.type],l=ar[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let M=t.cache.get(E);M||(_=new l(a,f*p,s.count*p/h),M=new Yy(_,p/h),t.cache.add(E,M)),m=new lh(M,c,d%p/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new hn(_,c,g);if(s.sparse!==void 0){const f=il.SCALAR,E=ar[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,N=new E(o[1],M,s.sparse.count*f),R=new l(o[2],T,s.sparse.count*c);a!==null&&(m=new hn(m.array.slice(),m.itemSize,m.normalized));for(let w=0,U=N.length;w<U;w++){const S=N[w];if(m.setX(S,R[w*c]),c>=2&&m.setY(S,R[w*c+1]),c>=3&&m.setZ(S,R[w*c+2]),c>=4&&m.setW(S,R[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=pf[d.magFilter]||En,h.minFilter=pf[d.minFilter]||Pi,h.wrapS=mf[d.wrapS]||ur,h.wrapT=mf[d.wrapT]||ur,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Yt(_);m.needsUpdate=!0,d(m)}),t.load(ro.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ci(u,o),u.userData.mimeType=o.mimeType||hS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new im,li.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new nm,li.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Rs}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const u=s[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,qt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ri);const h=r.alphaMode||sl.OPAQUE;if(h===sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===sl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ji&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ji&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ji){const u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&o!==Ji&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ms(s,u,r),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return gf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=lS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=gf(new mi,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?oS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const E=l[p];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new $y(_,E):new wt(_,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?f.geometry=df(f.geometry,Np):m.mode===Dn.TRIANGLE_FAN&&(f.geometry=df(f.geometry,El));else if(m.mode===Dn.LINES)f=new eM(_,E);else if(m.mode===Dn.LINE_STRIP)f=new uh(_,E);else if(m.mode===Dn.LINE_LOOP)f=new tM(_,E);else if(m.mode===Dn.POINTS)f=new nM(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&cS(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Ci(f,r),m.extensions&&Ms(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ms(s,u[0],r),u[0];const d=new ws;r.extensions&&Ms(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new an(fn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new oh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ci(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hh(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",E)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let E=0,M=d.length;E<M;E++){const T=d[E],N=p[E],R=g[E],w=_[E],U=m[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const S=i._createAnimationTracks(T,N,R,w,U);if(S)for(let y=0;y<S.length;y++)f.push(S[y])}return new lM(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,uS)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new em:l.length>1?h=new ws:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ci(h,r),r.extensions&&Ms(i,h,r),r.matrix!==void 0){const u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ws;i.name&&(r.name=s.createUniqueName(i.name)),Ci(r,i),i.extensions&&Ms(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof li||d instanceof Yt)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ji[r.path]){case ji.weights:l=vr;break;case ji.rotation:l=xr;break;case ji.position:case ji.scale:l=yr;break;default:switch(i.itemSize){case 1:l=vr;break;case 2:case 3:default:l=yr;break}break}const h=s.interpolation!==void 0?rS[s.interpolation]:fo,u=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+ji[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Il(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof xr?sS:cm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fS(n,e,t){const i=e.attributes,s=new Fn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=Il(ar[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Il(ar[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new pi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function gf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Pl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ci(n,e),fS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aS(n,e.targets,t):n})}const pS=1.65,mS=fn.degToRad(-45),gS=fn.degToRad(45),ol="door_exit",_f=3.5,ca=.4,vf=2.2,Zr={x:-2.63,y:.75,z:-.13,yawDeg:-4796};class _S{constructor(e){oe(this,"scene");oe(this,"camera");oe(this,"renderer");oe(this,"doorObject",null);oe(this,"modelLoaded",!1);oe(this,"perf");oe(this,"modelBounds",null);oe(this,"CAMERA_HEIGHT",pS);oe(this,"YAW_LIMITS",{min:-1/0,max:1/0});oe(this,"PITCH_LIMITS",{min:-45,max:45});oe(this,"yaw",0);oe(this,"pitch",0);oe(this,"currentYaw",0);oe(this,"currentPitch",0);oe(this,"animationId",null);oe(this,"resizeHandler");oe(this,"canvas");this.canvas=e.canvas,this.perf=e.performance??{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:50,handNumHands:2,handUseGpu:!0,minAcceptableFps:30},console.log(`🎨 SceneManager inicializando con preset: ${this.perf.tier}`),this.scene=new qy,this.scene.background=new Ue(10406376),this.scene.fog=new ch(10406376,30,100);const t=window.innerWidth/window.innerHeight;this.camera=new an(75,t,.05,300),this.camera.position.set(0,this.CAMERA_HEIGHT,0),this.camera.rotation.order="YXZ",this.renderer=new jy({canvas:this.canvas,antialias:this.perf.antialias,powerPreference:this.perf.powerPreference,stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.perf.pixelRatioMax)),this.renderer.shadowMap.enabled=this.perf.shadowsEnabled,this.perf.shadowsEnabled&&(this.renderer.shadowMap.type=this.perf.tier==="high"?Ep:y0),this.renderer.toneMapping=bp,this.renderer.toneMappingExposure=1.5,this.renderer.outputColorSpace=qt,this.setupLighting(),this.loadModel(),this.resizeHandler=this.resize.bind(this),window.addEventListener("resize",this.resizeHandler)}setupLighting(){const e=this.perf.tier==="low"?1.6:1.2,t=new SM(16777215,e);this.scene.add(t);const i=new Cl(16772829,1.8);if(i.position.set(2,5,3),this.perf.shadowsEnabled&&(i.castShadow=!0,i.shadow.mapSize.set(this.perf.shadowMapSize,this.perf.shadowMapSize),i.shadow.camera.near=.5,i.shadow.camera.far=30,i.shadow.camera.left=-10,i.shadow.camera.right=10,i.shadow.camera.top=10,i.shadow.camera.bottom=-10,i.shadow.bias=-5e-4),this.scene.add(i),this.scene.add(i.target),this.perf.numDirectionalLights>=2){const s=new Cl(16777215,.8);s.position.set(-3,2,-2),this.scene.add(s)}if(this.perf.numPointLights>0){const s=[[-3,-3],[3,-3],[-3,3],[3,3]],r=Math.min(s.length,this.perf.numPointLights);for(let o=0;o<r;o++){const[a,c]=s[o],l=new Rl(16769200,1,12,1.5);l.position.set(a,3,c),this.scene.add(l)}}if(this.perf.tier==="high"){const s=new Rl(16764074,1.2,12);s.position.set(0,3.5,0),this.scene.add(s)}if(this.perf.hemisphereLight){const s=new _M(16771248,4202512,.7);s.position.set(0,5,0),this.scene.add(s)}}loadModel(){new DM().load("/mcdonalds-3d/model/mcdonald/scene.gltf",i=>{const s=i.scene,r=new Fn().setFromObject(s),o=new P,a=new P;r.getSize(o),r.getCenter(a),console.log(`📦 Modelo - size original: [${o.x.toFixed(2)}, ${o.y.toFixed(2)}, ${o.z.toFixed(2)}]`),console.log(`📦 Modelo - center original: [${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}]`);const c=_f/o.y;s.scale.setScalar(c);const l=new Fn().setFromObject(s),h=new P,u=new P;l.getSize(h),l.getCenter(u),s.position.x-=u.x,s.position.z-=u.z,s.position.y-=l.min.y,s.updateMatrixWorld(!0);const d=new Fn().setFromObject(s);console.log(`📐 Modelo escalado a ${c.toFixed(4)}x (altura objetivo: ${_f}m)`),console.log(`📐 Nuevo tamaño: [${h.x.toFixed(2)}, ${h.y.toFixed(2)}, ${h.z.toFixed(2)}] m`),console.log(`📐 Bounding box final: min=[${d.min.x.toFixed(2)}, ${d.min.y.toFixed(2)}, ${d.min.z.toFixed(2)}] max=[${d.max.x.toFixed(2)}, ${d.max.y.toFixed(2)}, ${d.max.z.toFixed(2)}]`),this.modelBounds={minX:d.min.x+ca,maxX:d.max.x-ca,minZ:d.min.z+ca,maxZ:d.max.z-ca},console.log(`🚶 Límites de caminata: X[${this.modelBounds.minX.toFixed(2)}, ${this.modelBounds.maxX.toFixed(2)}] Z[${this.modelBounds.minZ.toFixed(2)}, ${this.modelBounds.maxZ.toFixed(2)}]`),this.applyStartPosition(),console.log(`📷 Cámara inicial (START_POSITION): x=${this.camera.position.x.toFixed(2)}, y=${this.camera.position.y.toFixed(2)}, z=${this.camera.position.z.toFixed(2)}, yaw=${Zr.yawDeg}°`),s.traverse(p=>{if(p instanceof wt){p.castShadow=!0,p.receiveShadow=!0;const g=p.material;Array.isArray(g)?g.forEach(_=>this.fixMaterialSRGB(_)):g&&this.fixMaterialSRGB(g)}}),this.scene.add(s),this.modelLoaded=!0,this.doorObject=s.getObjectByName("door_exit")??null,this.doorObject||(console.warn('⚠️ No se encontró "door_exit" en el modelo. Buscando por "door"...'),this.doorObject=s.getObjectByName("door")??null),this.doorObject?(this.doorObject.userData.isDoor=!0,this.doorObject.name=ol,console.log("✅ Puerta detectada y etiquetada")):(console.warn("⚠️ No se encontró ningún objeto de puerta. Creando fallback..."),this.createDoorFallback(d)),console.log("✅ Modelo cargado correctamente")},i=>{if(i.total){const s=i.loaded/i.total*100;console.log(`Cargando modelo: ${Math.round(s)}%`)}},i=>{console.error("❌ Error al cargar el modelo:",i),this.buildProceduralScene()})}fixMaterialSRGB(e){const t=e;t.map&&(t.map.colorSpace=qt),t.emissiveMap&&(t.emissiveMap.colorSpace=qt),t.opacity=1,t.transparent=!1,t.color&&typeof t.color.a=="number"&&(t.color.a=1),t.depthWrite=!0}buildProceduralScene(){console.warn("🔄 Usando escena procedural (fallback)");const e=new wt(new _r(20,20),new Rs({color:14210248,roughness:.85}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e);const t=new wt(new ai(14,4,12),new Rs({color:15921128,roughness:.9,side:ln}));t.position.y=2,t.receiveShadow=!0,this.scene.add(t),this.createDoorFallback()}createDoorFallback(e){const t=e?e.min.z+.2:-4.8,i=0,s=1.2,r=new wt(new ai(1.6,2.4,.4),new Ji({color:16762668,transparent:!0,opacity:0,depthWrite:!1}));r.position.set(i,s,t),r.userData.isDoor=!0,r.name=ol,this.doorObject=r,this.scene.add(r),console.log(`✅ Collider de puerta creado en posición: (${i}, ${s}, ${t})`);const o=new wt(new _r(.6,.3),new Rs({color:43588,emissive:65382,emissiveIntensity:.8}));o.position.set(0,s+1.4,t+.21),this.scene.add(o);const a=new Rs({color:14297372,roughness:.5}),c=new wt(new ai(1.8,.1,.1),a);c.position.set(0,s+1.25,t),this.scene.add(c);const l=new wt(new ai(.1,2.5,.1),a);l.position.set(-.85,s,t),this.scene.add(l);const h=new wt(new ai(.1,2.5,.1),a);h.position.set(.85,s,t),this.scene.add(h)}setRotation(e,t){const i=fn.clamp(t,fn.degToRad(this.PITCH_LIMITS.min),fn.degToRad(this.PITCH_LIMITS.max));this.currentYaw=e,this.currentPitch=i,this.yaw=e,this.pitch=i,this.camera.rotation.y=this.currentYaw,this.camera.rotation.x=this.currentPitch}applyRotation(e,t,i=.15){const s=e-this.yaw,r=Math.atan2(Math.sin(s),Math.cos(s));this.yaw=this.yaw+r*i;const o=fn.clamp(t,mS,gS);this.pitch=fn.lerp(this.pitch,o,i),this.currentYaw=this.yaw,this.currentPitch=this.pitch,this.camera.rotation.y=this.currentYaw,this.camera.rotation.x=this.currentPitch}setYawAbsolute(e){this.yaw=e,this.currentYaw=e,this.camera.rotation.y=e}setControls(e,t,i){if(this.yaw+=e*i,this.currentYaw=this.yaw,this.camera.rotation.y=this.currentYaw,t!==0){const s=new P(0,0,-1);s.applyEuler(new On(0,this.yaw,0,"YXZ")),s.y=0,s.normalize();const r=s.multiplyScalar(t*i);this.camera.position.add(r),this.clampPosition()}}moveRelative(e,t,i){if(e===0&&t===0)return;const s=new P(0,0,-1);s.applyEuler(new On(0,this.yaw,0,"YXZ")),s.y=0,s.normalize();const r=new P().crossVectors(s,new P(0,1,0)).normalize(),o=new P;o.addScaledVector(s,e*vf*i),o.addScaledVector(r,t*vf*i),this.camera.position.add(o),this.clampPosition()}clampPosition(){if(!this.modelBounds)return;const e=this.camera.position;e.x=fn.clamp(e.x,this.modelBounds.minX,this.modelBounds.maxX),e.z=fn.clamp(e.z,this.modelBounds.minZ,this.modelBounds.maxZ)}adjustCameraHeight(e){this.camera.position.y+=e,this.camera.position.y=fn.clamp(this.camera.position.y,-5,10)}getCameraInfo(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yawDeg:fn.radToDeg(this.yaw),pitchDeg:fn.radToDeg(this.pitch)}}setCameraPosition(e,t,i){this.camera.position.set(e,t,i)}applyStartPosition(){this.camera.position.set(Zr.x,Zr.y,Zr.z);const e=fn.degToRad(Zr.yawDeg);this.yaw=e,this.currentYaw=e,this.pitch=0,this.currentPitch=0,this.camera.rotation.set(0,e,0,"YXZ")}resetPosition(){this.applyStartPosition()}checkDoorHit(){if(!this.doorObject)return!1;const e=new aa,t=new ke(0,0);return e.setFromCamera(t,this.camera),e.far=20,e.intersectObject(this.doorObject,!0).length>0}isLookingAtDoor(){if(this.checkDoorHit())return!0;const e=new aa;e.setFromCamera(new ke(0,0),this.camera),e.far=20;const t=e.intersectObjects(this.scene.children,!0);for(const i of t){let s=i.object;for(;s;){if(s.name===ol||s.userData?.isDoor===!0)return!0;s=s.parent}}return!1}getLookedObject(){const e=new aa;e.setFromCamera(new ke(0,0),this.camera),e.far=20;const t=e.intersectObjects(this.scene.children,!0);return t.length===0?null:t[0].object}getObjectAtScreenPoint(e,t){const i=new aa;i.setFromCamera(new ke(e,t),this.camera),i.far=25;const s=i.intersectObjects(this.scene.children,!0);return s.length===0?null:s[0].object}render(){this.renderer.render(this.scene,this.camera)}start(){const e=()=>{this.animationId=requestAnimationFrame(e),this.render()};e()}getPerformancePreset(){return this.perf}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}dispose(){this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.resizeHandler),this.scene.traverse(e=>{if(e instanceof wt){e.geometry?.dispose?.();const t=e.material;Array.isArray(t)?t.forEach(i=>i.dispose()):t&&t.dispose()}}),this.renderer.dispose()}}var Mo=typeof self<"u"?self:{};function lm(n){e:{for(var e=["CLOSURE_FLAGS"],t=Mo,i=0;i<e.length;i++)if((t=t[e[i]])==null){e=null;break e}e=t}return(n=e&&e[n])!=null&&n}function Ss(){throw Error("Invalid UTF8")}function xf(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let la,al;const vS=typeof TextDecoder<"u";let xS;const yS=typeof TextEncoder<"u";function hm(n){if(yS)n=(xS||(xS=new TextEncoder)).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var e=n.charCodeAt(s);if(128>e)i[t++]=e;else{if(2048>e)i[t++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&s<n.length){const r=n.charCodeAt(++s);if(56320<=r&&57343>=r){e=1024*(e-55296)+r-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}s--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}var mo,um=lm(610401301),MS=lm(188588736);const yf=Mo.navigator;function Dl(n){return!!um&&!!mo&&mo.brands.some(({brand:e})=>e&&e.indexOf(n)!=-1)}function Un(n){var e;return(e=Mo.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(n)!=-1}function $i(){return!!um&&!!mo&&0<mo.brands.length}function cl(){return $i()?Dl("Chromium"):(Un("Chrome")||Un("CriOS"))&&!(!$i()&&Un("Edge"))||Un("Silk")}function mh(n){return mh[" "](n),n}mo=yf&&yf.userAgentData||null,mh[" "]=function(){};var SS=!$i()&&(Un("Trident")||Un("MSIE"));!Un("Android")||cl(),cl(),Un("Safari")&&(cl()||!$i()&&Un("Coast")||!$i()&&Un("Opera")||!$i()&&Un("Edge")||($i()?Dl("Microsoft Edge"):Un("Edg/"))||$i()&&Dl("Opera"));var dm={},to=null;function ES(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),s=0;return function(r,o){function a(p){for(;c<r.length;){var g=r.charAt(c++),_=to[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}fm();for(var c=0;;){var l=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}}(n,function(r){i[s++]=r}),s!==t?i.subarray(0,s):i}function fm(){if(!to){to={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],t=0;5>t;t++){var i=n.concat(e[t].split(""));dm[t]=i;for(var s=0;s<i.length;s++){var r=i[s];to[r]===void 0&&(to[r]=s)}}}}var pm=typeof Uint8Array<"u",mm=!SS&&typeof btoa=="function";function Mf(n){if(!mm){var e;e===void 0&&(e=0),fm(),e=dm[e];var t=Array(Math.floor(n.length/3)),i=e[64]||"";let c=0,l=0;for(;c<n.length-2;c+=3){var s=n[c],r=n[c+1],o=n[c+2],a=e[s>>2];s=e[(3&s)<<4|r>>4],r=e[(15&r)<<2|o>>6],o=e[63&o],t[l++]=a+s+r+o}switch(a=0,o=i,n.length-c){case 2:o=e[(15&(a=n[c+1]))<<2]||i;case 1:n=n[c],t[l]=e[n>>2]+e[(3&n)<<4|a>>4]+o+i}return t.join("")}for(e="",t=0,i=n.length-10240;t<i;)e+=String.fromCharCode.apply(null,n.subarray(t,t+=10240));return e+=String.fromCharCode.apply(null,t?n.subarray(t):n),btoa(e)}const Sf=/[-_.]/g,TS={"-":"+",_:"/",".":"="};function bS(n){return TS[n]||""}function gm(n){if(!mm)return ES(n);Sf.test(n)&&(n=n.replace(Sf,bS)),n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function So(n){return pm&&n!=null&&n instanceof Uint8Array}let AS;function Ya(){return AS||(AS=new Uint8Array(0))}var Mr={};let wS;function _m(n){if(n!==Mr)throw Error("illegal external caller")}function Us(){return wS||(wS=new Ui(null,Mr))}function gh(n){_m(Mr);var e=n.g;return(e=e==null||So(e)?e:typeof e=="string"?gm(e):null)==null?e:n.g=e}var Ui=class{constructor(n,e){if(_m(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const n=gh(this);return n?new Uint8Array(n):Ya()}};function vm(n,e){return Error(`Invalid wire type: ${n} (at position ${e})`)}function _h(){return Error("Failed to read varint, encoding is invalid.")}function xm(n,e){return Error(`Tried to read past the end of the data ${e} > ${n}`)}function vh(n){if(typeof n=="string")return{buffer:gm(n),P:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Uint8Array)return{buffer:n,P:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Ui)return{buffer:gh(n)||Ya(),P:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function xh(){return typeof BigInt=="function"}const RS=typeof Uint8Array.prototype.slice=="function";let ym,_t=0,Ot=0;function Cs(n){const e=0>n;let t=(n=Math.abs(n))>>>0;if(n=Math.floor((n-t)/4294967296),e){const[i,s]=Sh(t,n);n=s,t=i}_t=t>>>0,Ot=n>>>0}function yh(n){const e=ym||(ym=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),Ot=0,_t=e.getUint32(0,!0)}function Ul(n,e){return 4294967296*e+(n>>>0)}function Mh(n,e){const t=2147483648&e;return t&&(e=~e>>>0,(n=1+~n>>>0)==0&&(e=e+1>>>0)),n=Ul(n,e),t?-n:n}function Da(n,e){if(n>>>=0,2097151>=(e>>>=0))var t=""+(4294967296*e+n);else xh()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,1e7<=n&&(t+=Math.floor(n/1e7),n%=1e7),1e7<=t&&(e+=Math.floor(t/1e7),t%=1e7),t=e+Ef(t)+Ef(n));return t}function Ef(n){return n=String(n),"0000000".slice(n.length)+n}function Mm(){var n=_t,e=Ot;if(2147483648&e)if(xh())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=Sh(n,e);n="-"+Da(t,i)}else n=Da(n,e);return n}function Ka(n){if(16>n.length)Cs(Number(n));else if(xh())n=BigInt(n),_t=Number(n&BigInt(4294967295))>>>0,Ot=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");Ot=_t=0;const t=n.length;for(let i=e,s=(t-e)%6+e;s<=t;i=s,s+=6){const r=Number(n.slice(i,s));Ot*=1e6,_t=1e6*_t+r,4294967296<=_t&&(Ot+=Math.trunc(_t/4294967296),Ot>>>=0,_t>>>=0)}if(e){const[i,s]=Sh(_t,Ot);_t=i,Ot=s}}}function Sh(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function Eh(n,e){let t,i=0,s=0,r=0;const o=n.h;let a=n.g;do t=o[a++],i|=(127&t)<<r,r+=7;while(32>r&&128&t);for(32<r&&(s|=(127&t)>>4),r=3;32>r&&128&t;r+=7)t=o[a++],s|=(127&t)<<r;if(Ls(n,a),128>t)return e(i>>>0,s>>>0);throw _h()}function Th(n){let e=0,t=n.g;const i=t+10,s=n.h;for(;t<i;){const r=s[t++];if(e|=r,(128&r)==0)return Ls(n,t),!!(127&e)}throw _h()}function rs(n){const e=n.h;let t=n.g,i=e[t++],s=127&i;if(128&i&&(i=e[t++],s|=(127&i)<<7,128&i&&(i=e[t++],s|=(127&i)<<14,128&i&&(i=e[t++],s|=(127&i)<<21,128&i&&(i=e[t++],s|=i<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw _h();return Ls(n,t),s}function os(n){return rs(n)>>>0}function Nl(n){var e=n.h;const t=n.g,i=e[t],s=e[t+1],r=e[t+2];return e=e[t+3],Ls(n,n.g+4),(i<<0|s<<8|r<<16|e<<24)>>>0}function Fl(n){var e=Nl(n);n=2*(e>>31)+1;const t=e>>>23&255;return e&=8388607,t==255?e?NaN:1/0*n:t==0?n*Math.pow(2,-149)*e:n*Math.pow(2,t-150)*(e+Math.pow(2,23))}function CS(n){return rs(n)}function ll(n,e,{ca:t=!1}={}){n.ca=t,e&&(e=vh(e),n.h=e.buffer,n.m=e.P,n.j=0,n.l=n.h.length,n.g=n.j)}function Ls(n,e){if(n.g=e,e>n.l)throw xm(n.l,e)}function Sm(n,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const t=n.g,i=t+e;if(i>n.l)throw xm(e,n.l-t);return n.g=i,t}function Em(n,e){if(e==0)return Us();var t=Sm(n,e);return n.ca&&n.m?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?Ya():RS?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?Us():new Ui(t,Mr)}var Tf=[];function Tm(n){var e=n.g;if(e.g==e.l)return!1;n.l=n.g.g;var t=os(n.g);if(e=t>>>3,!(0<=(t&=7)&&5>=t))throw vm(t,n.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${n.l})`);return n.m=e,n.h=t,!0}function ga(n){switch(n.h){case 0:n.h!=0?ga(n):Th(n.g);break;case 1:Ls(n=n.g,n.g+8);break;case 2:if(n.h!=2)ga(n);else{var e=os(n.g);Ls(n=n.g,n.g+e)}break;case 5:Ls(n=n.g,n.g+4);break;case 3:for(e=n.m;;){if(!Tm(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=e)throw Error("Unmatched end-group tag");break}ga(n)}break;default:throw vm(n.h,n.l)}}function Eo(n,e,t){const i=n.g.l,s=os(n.g),r=n.g.g+s;let o=r-i;if(0>=o&&(n.g.l=r,t(e,n,void 0,void 0,void 0),o=r-n.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=r,n.g.l=i,e}function bh(n){var e=os(n.g),t=Sm(n=n.g,e);if(n=n.h,vS){var i,s=n;(i=al)||(i=al=new TextDecoder("utf-8",{fatal:!0})),e=t+e,s=t===0&&e===s.length?s:s.subarray(t,e);try{var r=i.decode(s)}catch(a){if(la===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),la=!0}catch{la=!1}}throw!la&&(al=void 0),a}}else{e=(r=t)+e,t=[];let a,c=null;for(;r<e;){var o=n[r++];128>o?t.push(o):224>o?r>=e?Ss():(a=n[r++],194>o||(192&a)!=128?(r--,Ss()):t.push((31&o)<<6|63&a)):240>o?r>=e-1?Ss():(a=n[r++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(i=n[r++]))!=128?(r--,Ss()):t.push((15&o)<<12|(63&a)<<6|63&i)):244>=o?r>=e-2?Ss():(a=n[r++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,Ss()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,t.push(55296+(o>>10&1023),56320+(1023&o)))):Ss(),8192<=t.length&&(c=xf(c,t),t.length=0)}r=xf(c,t)}return r}function bm(n){const e=os(n.g);return Em(n.g,e)}function $a(n,e,t){var i=os(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var ha=[];function bf(n){return n?/^\d+$/.test(n)?(Ka(n),new Af(_t,Ot)):null:LS||(LS=new Af(0,0))}var Af=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let LS;function wf(n){return n?/^-?\d+$/.test(n)?(Ka(n),new Rf(_t,Ot)):null:PS||(PS=new Rf(0,0))}var Rf=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let PS;function Ua(n,e,t){for(;0<t||127<e;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function To(n,e){for(;127<e;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Za(n,e){if(0<=e)To(n,e);else{for(let t=0;9>t;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function go(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function Sr(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function kn(n,e,t){To(n.g,8*e+t)}function Ah(n,e){return kn(n,e,2),e=n.g.end(),Sr(n,e),e.push(n.h),e}function wh(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;127<t;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function Ja(n,e,t){kn(n,e,2),To(n.g,t.length),Sr(n,n.g.end()),Sr(n,t)}function Ol(n,e,t,i){t!=null&&(e=Ah(n,e),i(t,n),wh(n,e))}class Nr{constructor(e,t,i,s){this.g=e,this.h=t,this.l=i,this.pa=s}}function Tn(n){return Array.prototype.slice.call(n)}function Rh(n){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():n}var hi=Rh(),Cf=Rh("0di"),hl=Rh("2ex"),Ch=hi?(n,e)=>{n[hi]|=e}:(n,e)=>{n.g!==void 0?n.g|=e:Object.defineProperties(n,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},Na=hi?(n,e)=>{n[hi]&=~e}:(n,e)=>{n.g!==void 0&&(n.g&=~e)};function Jt(n,e,t){return t?n|e:n&~e}var Ct=hi?n=>0|n[hi]:n=>0|n.g,st=hi?n=>n[hi]:n=>n.g,Rt=hi?(n,e)=>(n[hi]=e,n):(n,e)=>(n.g!==void 0?n.g=e:Object.defineProperties(n,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),n);function Fr(n){return Ch(n,34),n}function IS(n,e){Rt(e,-14591&(0|n))}function Bl(n,e){Rt(e,-14557&(34|n))}function Am(n){return(n=n>>14&1023)===0?536870912:n}var Lh,bo={},wm={};function Lf(n){return!(!n||typeof n!="object"||n.Ja!==wm)}function Ph(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function Ih(n,e,t){if(n!=null){if(typeof n=="string")n=n?new Ui(n,Mr):Us();else if(n.constructor!==Ui)if(So(n))n=n.length?new Ui(t?n:new Uint8Array(n),Mr):Us();else{if(!e)throw Error();n=void 0}}return n}function Fa(n,e,t){if(!Array.isArray(n)||n.length)return!1;const i=Ct(n);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(t):e.has(t)))&&(Rt(n,1|i),!0)}const Pf=[];function vi(n){if(2&n)throw Error()}Rt(Pf,55),Lh=Object.freeze(Pf);class Oa{constructor(e,t,i){this.l=0,this.g=e,this.h=t,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Oa(this.g,this.h,this.m)}}let ns,DS,US;function Rm(n,e){(e=ns?e[ns]:void 0)&&(n[ns]=Tn(e))}function Cm(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}function NS(){const n=Error();Cm(n,"incident"),function(e){Mo.setTimeout(()=>{throw e},0)}(n)}function kl(n){return Cm(n=Error(n),"warning"),n}function us(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Lm(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}Object.freeze(new class{}),Object.freeze(new class{});const FS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qa(n){const e=typeof n;return e==="number"?Number.isFinite(n):e==="string"&&FS.test(n)}function Or(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?0|n:void 0}function OS(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?n>>>0:void 0}function If(n){return n[0]!=="-"&&(20>n.length||n.length===20&&184467>Number(n.substring(0,6)))}function Pm(n){return n[0]==="-"?20>n.length||n.length===20&&-922337<Number(n.substring(0,7)):19>n.length||n.length===19&&922337>Number(n.substring(0,6))}function Dh(n){return n=Math.trunc(n),Number.isSafeInteger(n)||(Cs(n),n=Mh(_t,Ot)),n}function Uh(n){var e=Math.trunc(Number(n));return Number.isSafeInteger(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Pm(n)||(Ka(n),n=Mm()),n)}function Ba(n){return n==null?n:Qa(n)?typeof n=="number"?Dh(n):Uh(n):void 0}function Ao(n){if(typeof n!="string")throw Error();return n}function Br(n){if(n!=null&&typeof n!="string")throw Error();return n}function Ps(n){return n==null||typeof n=="string"?n:void 0}function Nh(n,e,t,i){if(n!=null&&typeof n=="object"&&n.X===bo)return n;if(!Array.isArray(n))return t?2&i?(n=e[Cf])?e=n:(Fr((n=new e).s),e=e[Cf]=n):e=new e:e=void 0,e;let s=t=Ct(n);return s===0&&(s|=32&i),s|=2&i,s!==t&&Rt(n,s),new e(n)}function BS(n,e,t){if(e){var i=!!i;if(!Qa(e=n))throw kl("int64");typeof e=="string"?i=Uh(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):Pm(e=String(i))?i=e:(Cs(i),i=Mm())):i=Dh(e)}else i=Ba(n);return typeof(t=(n=i)==null?t?0:void 0:n)=="string"&&(i=+t,Number.isSafeInteger(i))?i:t}let ka,Fh,kS;function Ha(n){switch(typeof n){case"boolean":return Fh||(Fh=[0,void 0,!0]);case"number":return 0<n?void 0:n===0?kS||(kS=[0,void 0]):[-n,void 0];case"string":return[0,n];case"object":return n}}function Is(n,e){return Im(n,e[0],e[1])}function Im(n,e,t){if(n==null&&(n=ka),ka=void 0,n==null){var i=96;t?(n=[t],i|=512):n=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(i=Ct(n)))throw Error("farr");if(64&i)return n;if(i|=64,t&&(i|=512,t!==n[0]))throw Error("mid");e:{const s=(t=n).length;if(s){const r=s-1;if(Ph(t[r])){if(1024<=(e=r-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,s-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return Rt(n,i),n}const HS={};let zS=function(){try{return mh(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class ul{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const GS=zS?(Object.setPrototypeOf(ul.prototype,Map.prototype),Object.defineProperties(ul.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),ul):class extends Map{constructor(){super()}};function Df(n){return n}function dl(n){if(2&n.N)throw Error("Cannot mutate an immutable Map")}var Bn=class extends GS{constructor(n,e,t=Df,i=Df){super();let s=Ct(n);s|=64,Rt(n,s),this.N=s,this.U=e,this.S=t,this.Z=this.U?VS:i;for(let r=0;r<n.length;r++){const o=n[r],a=t(o[0],!1,!0);let c=o[1];e?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,s),super.set(a,c)}}oa(n=Uf){if(this.size!==0)return this.Y(n)}Y(n=Uf){const e=[],t=super.entries();for(var i;!(i=t.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),e.push(i);return e}clear(){dl(this),super.clear()}delete(n){return dl(this),super.delete(this.S(n,!0,!1))}entries(){var n=this.na();return new Oa(n,WS,this)}keys(){return this.Ia()}values(){var n=this.na();return new Oa(n,Bn.prototype.get,this)}forEach(n,e){super.forEach((t,i)=>{n.call(e,this.get(i),i,this)})}set(n,e){return dl(this),(n=this.S(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(n){const e=this.S(n[0],!1,!0);n=n[1],n=this.U?n===void 0?null:n:this.Z(n,!1,!0,void 0,!1,this.N),super.set(e,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.U;return t?((t=this.Z(e,!1,!0,t,this.ta,this.N))!==e&&super.set(n,t),t):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function VS(n,e,t,i,s,r){return n=Nh(n,i,t,r),s&&(n=tc(n)),n}function Uf(n){return n}function WS(n){return[n,this.get(n)]}let XS;function Nf(){return XS||(XS=new Bn(Fr([]),void 0,void 0,void 0,HS))}function Oh(n,e,t,i,s){if(n!=null){if(Array.isArray(n))n=Fa(n,void 0,0)?void 0:s&&2&Ct(n)?n:ec(n,e,t,i!==void 0,s);else if(Ph(n)){const r={};for(let o in n)r[o]=Oh(n[o],e,t,i,s);n=r}else n=e(n,i);return n}}function ec(n,e,t,i,s){const r=i||t?Ct(n):0;i=i?!!(32&r):void 0;const o=Tn(n);for(let a=0;a<o.length;a++)o[a]=Oh(o[a],e,t,i,s);return t&&(Rm(o,n),t(r,o)),o}function jS(n){return Oh(n,Bh,void 0,void 0,!1)}function Bh(n){return n.X===bo?n.toJSON():n instanceof Bn?n.oa(jS):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(Fa(e,void 0,0))return}else{if(So(e))return Mf(e);if(e instanceof Ui){const t=e.g;return t==null?"":typeof t=="string"?t:e.g=Mf(t)}if(e instanceof Bn)return e.oa()}}return e}(n)}function Hl(n,e,t=Bl){if(n!=null){if(pm&&n instanceof Uint8Array)return e?n:new Uint8Array(n);if(Array.isArray(n)){var i=Ct(n);return 2&i||(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),n=e?Rt(n,-12293&(34|i)):ec(n,Hl,4&i?Bl:t,!0,!0)),n}return n.X===bo?(t=n.s,n=2&(i=st(t))?n:kh(n,t,i,!0)):n instanceof Bn&&!(2&n.N)&&(t=Fr(n.Y(Hl)),n=new Bn(t,n.U,n.S,n.Z)),n}}function kh(n,e,t,i){return n=n.constructor,ka=e=Dm(e,t,i),e=new n(e),ka=void 0,e}function Dm(n,e,t){const i=t||2&e?Bl:IS,s=!!(32&e);return n=function(r,o,a){const c=Tn(r);var l=c.length;const h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(const u in h)o[u]=a(h[u])}return Rm(c,r),c}(n,e,r=>Hl(r,s,i)),Ch(n,32|(t?2:0)),n}function tc(n){const e=n.s,t=st(e);return 2&t?kh(n,e,t,!1):n}function Um(n,e,t,i){return!(4&e)||t!=null}function as(n,e){return xi(n=n.s,st(n),e)}function Ff(n,e,t,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=n.length||e>=t))return n[e]}function xi(n,e,t,i){if(t===-1)return null;const s=Am(e);if(!(t>=s)){var r=n.length;return i&&256&e&&(i=n[r-1][t])!=null?(Ff(n,e,s,t)&&hl!=null&&(4<=(e=(n=US??(US={}))[hl]||0)||(n[hl]=e+1,NS())),i):Ff(n,e,s,t)}return 256&e?n[n.length-1][t]:void 0}function pt(n,e,t,i){const s=n.s;let r=st(s);return vi(r),vt(s,r,e,t,i),n}function vt(n,e,t,i,s){const r=Am(e);if(t>=r||s){let o=e;if(256&e)s=n[n.length-1];else{if(i==null)return o;s=n[r+(+!!(512&e)-1)]={},o|=256}return s[t]=i,t<r&&(n[t+(+!!(512&e)-1)]=void 0),o!==e&&Rt(n,o),o}return n[t+(+!!(512&e)-1)]=i,256&e&&t in(n=n[n.length-1])&&delete n[t],e}function kr(n,e,t,i,s){var r=2&e;let o=xi(n,e,t,s);Array.isArray(o)||(o=Lh);const a=!(2&i);i=!(1&i);const c=!!(32&e);let l=Ct(o);return l!==0||!c||r||a?1&l||(l|=1,Rt(o,l)):(l|=33,Rt(o,l)),r?(n=!1,2&l||(Fr(o),n=!!(4&l)),(i||n)&&Object.freeze(o)):(r=!!(2&l)||!!(2048&l),i&&r?(o=Tn(o),i=1,c&&!a&&(i|=32),Rt(o,i),vt(n,e,t,o,s)):a&&32&l&&!r&&Na(o,32)),o}function _a(n,e){n=n.s;let t=st(n);const i=xi(n,t,e),s=us(i);return s!=null&&s!==i&&vt(n,t,e,s),s}function Nm(n){n=n.s;let e=st(n);const t=xi(n,e,1),i=Ih(t,!0,!!(34&e));return i!=null&&i!==t&&vt(n,e,1,i),i}function ir(n,e,t){const i=n.s;let s=st(i);const r=2&s?1:2;let o=Fm(i,s,e);var a=Ct(o);if(Um(n,a,void 0)){(4&a||Object.isFrozen(o))&&(o=Tn(o),a=Ns(a,s),s=vt(i,s,e,o));let c=n=0;for(;n<o.length;n++){const l=t(o[n]);l!=null&&(o[c++]=l)}c<n&&(o.length=c),a=Jt(a=Om(a,s),20,!0),a=Jt(a,4096,!1),a=Jt(a,8192,!1),Rt(o,a),2&a&&Object.freeze(o)}return oo(a)||(t=a,(a=(n=r===1||r===4&&!!(32&a))?Jt(a,2,!0):Er(a,s,!1))!==t&&Rt(o,a),n&&Object.freeze(o)),r===2&&oo(a)&&(o=Tn(o),a=Er(a=Ns(a,s),s,!1),Rt(o,a),vt(i,s,e,o)),o}function Fm(n,e,t){return n=xi(n,e,t),Array.isArray(n)?n:Lh}function Om(n,e){return n===0&&(n=Ns(n,e)),Jt(n,1,!0)}function oo(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function Bm(n){n=Tn(n);for(let e=0;e<n.length;e++){const t=n[e]=Tn(n[e]);Array.isArray(t[1])&&(t[1]=Fr(t[1]))}return n}function za(n,e,t){{const a=n.s;let c=st(a);if(vi(c),t==null)vt(a,c,e);else{var i,s=Ct(t),r=s,o=!!(2&s)||Object.isFrozen(t);if((i=!o)&&(i=!1),Um(n,s))for(s=21,o&&(t=Tn(t),r=0,s=Er(s=Ns(s,c),c,!0)),n=0;n<t.length;n++)t[n]=Ao(t[n]);i&&(t=Tn(t),r=0,s=Er(s=Ns(s,c),c,!0)),s!==r&&Rt(t,s),vt(a,c,e,t)}}}function zl(n,e,t,i){n=n.s;let s=st(n);vi(s),vt(n,s,e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function wo(n,e,t,i){const s=st(n);vi(s),n=kr(n,s,e,2),i=t(i,!!(4&(e=Ct(n)))&&!!(4096&e)),n.push(i)}function qS(n){return n}function fl(n,e){return Hh(n=n.s,st(n),Sg)===e?e:-1}function Hh(n,e,t){let i=0;for(let s=0;s<t.length;s++){const r=t[s];xi(n,e,r)!=null&&(i!==0&&(e=vt(n,e,i)),i=r)}return i}function zh(n,e,t,i){let s=st(n);vi(s);const r=xi(n,s,t,i);let o;if(r!=null&&r.X===bo)return(e=tc(r))!==r&&vt(n,s,t,e,i),e.s;if(Array.isArray(r)){const a=Ct(r);o=2&a?Dm(r,a,!1):r,o=Is(o,e)}else o=Is(void 0,e);return o!==r&&vt(n,s,t,o,i),o}function km(n,e,t,i){n=n.s;let s=st(n);const r=xi(n,s,t,i);return(e=Nh(r,e,!1,s))!==r&&e!=null&&vt(n,s,t,e,i),e}function Qe(n,e,t,i=!1){if((e=km(n,e,t,i))==null)return e;n=n.s;let s=st(n);if(!(2&s)){const r=tc(e);r!==e&&vt(n,s,t,e=r,i)}return e}function Hm(n,e,t,i,s,r){var o=2,a=!!(2&e);o=a?1:o,s=!!s,r&&(r=!a),a=Fm(n,e,i);var c=Ct(a);const l=!!(4&c);if(!l){var h=a,u=e;const d=!!(2&(c=Om(c,e)));d&&(u=Jt(u,2,!0));let p=!d,g=!0,_=0,m=0;for(;_<h.length;_++){const f=Nh(h[_],t,!1,u);if(f instanceof t){if(!d){const E=!!(2&Ct(f.s));p&&(p=!E),g&&(g=E)}h[m++]=f}}m<_&&(h.length=m),c=Jt(c,4,!0),c=Jt(c,16,g),c=Jt(c,8,p),Rt(h,c),d&&Object.freeze(h)}if(r&&!(8&c||!a.length&&(o===1||o===4&&32&c))){for(oo(c)&&(a=Tn(a),c=Ns(c,e),e=vt(n,e,i,a)),t=a,r=c,h=0;h<t.length;h++)(c=t[h])!==(u=tc(c))&&(t[h]=u);r=Jt(r,8,!0),r=Jt(r,16,!t.length),Rt(t,r),c=r}return oo(c)||(t=c,(c=(r=o===1||o===4&&!!(32&c))?Jt(c,!a.length||16&c&&(!l||32&c)?2:2048,!0):Er(c,e,s))!==t&&Rt(a,c),r&&Object.freeze(a)),o===2&&oo(c)&&(a=Tn(a),c=Er(c=Ns(c,e),e,s),Rt(a,c),vt(n,e,i,a)),a}function Bi(n,e,t){n=n.s;const i=st(n);return Hm(n,i,e,t,!1,!(2&i))}function Re(n,e,t,i,s){return i==null&&(i=void 0),pt(n,t,i,s)}function ao(n,e,t,i){i==null&&(i=void 0),n=n.s;let s=st(n);vi(s),(t=Hh(n,s,t))&&t!==e&&i!=null&&(s=vt(n,s,t)),vt(n,s,e,i)}function Ns(n,e){return n=Jt(n,2,!!(2&e)),n=Jt(n,32,!0),Jt(n,2048,!1)}function Er(n,e,t){return 32&e&&t||(n=Jt(n,32,!1)),n}function Ga(n,e,t,i){n=n.s;const s=st(n);vi(s),e=Hm(n,s,t,e,!0),t=i??new t,e.push(t),2&Ct(t.s)?Na(e,8):Na(e,16)}function Nn(n,e){return Or(as(n,e))}function Yn(n,e){return n??e}function Dt(n,e){return Yn(_a(n,e),0)}function ui(n,e){return Yn(Ps(as(n,e)),"")}function _o(n,e,t){if(t!=null&&typeof t!="boolean")throw n=typeof t,Error(`Expected boolean but got ${n!="object"?n:t?Array.isArray(t)?"array":n:"null"}: ${t}`);pt(n,e,t)}function di(n,e,t){if(t!=null){if(typeof t!="number"||!Number.isFinite(t))throw kl("int32");t|=0}pt(n,e,t)}function Se(n,e,t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);pt(n,e,t)}function Kn(n,e,t){e.g?e.m(n,e.g,e.h,t,!0):e.m(n,e.h,t,!0)}Bn.prototype.toJSON=void 0,Bn.prototype.Ja=wm;var ye=class{constructor(n,e){this.s=Im(n,e)}toJSON(){return zm(this,ec(this.s,Bh,void 0,void 0,!1),!0)}l(){var n=QE;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.s;return kh(this,n,st(n),!1)}P(){return!!(2&Ct(this.s))}};function zm(n,e,t){var i=MS?void 0:n.constructor.B;const s=st(t?n.s:e);if(!(n=e.length))return e;let r,o;if(Ph(t=e[n-1])){e:{var a=t;let h={},u=!1;for(var c in a){let d=a[c];if(Array.isArray(d)){let p=d;(Fa(d,i,+c)||Lf(d)&&d.size===0)&&(d=null),d!=p&&(u=!0)}d!=null?h[c]=d:u=!0}if(u){for(var l in h){a=h;break e}a=null}}a!=t&&(r=!0),n--}for(c=+!!(512&s)-1;0<n&&(t=e[l=n-1],l-=c,t==null||Fa(t,i,l)||Lf(t)&&t.size===0);n--)o=!0;return(r||o)&&(e=Array.prototype.slice.call(e,0,n),a&&e.push(a)),e}function Gm(n){return Array.isArray(n)?n[0]instanceof Nr?n:[sE,n]:[n,void 0]}function Hr(n,e){if(Array.isArray(e)){var t=Ct(e);if(4&t)return e;for(var i=0,s=0;i<e.length;i++){const r=n(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),Rt(e,-12289&(5|t)),2&t&&Object.freeze(e),e}}ye.prototype.X=bo,ye.prototype.toString=function(){return zm(this,this.s,!1).toString()};const Of=Symbol();function Gh(n){let e=n[Of];if(!e){const t=Wm(n),i=Wh(n),s=i.l;e=s?(r,o)=>s(r,o,i):(r,o)=>{for(;Tm(o)&&o.h!=4;){var a=o.m,c=i[a];if(!c){var l=i.ea;l&&(l=l[a])&&(c=i[a]=YS(l))}c&&c(o,r,a)||(a=(c=o).l,ga(c),c.ia?c=void 0:(l=c.g.g-a,c.g.g=a,c=Em(c.g,l)),a=r,c&&(ns||(ns=Symbol()),(l=a[ns])?l.push(c):a[ns]=[c]))}t===Vm||t===va||t.j||(r[DS||(DS=Symbol())]=t)},n[Of]=e}return e}function YS(n){const e=(n=Gm(n))[0].g;if(n=n[1]){const t=Gh(n),i=Wh(n).T;return(s,r,o)=>e(s,r,o,i,t)}return e}class pl{}let Vm,va;const co=Symbol();function KS(n,e,t){const i=t[1];let s;if(i){const r=i[co];s=r?r.T:Ha(i[0]),n[e]=r??i}s&&s===Fh?(n.g||(n.g=new Set)).add(e):t[0]&&(n.h||(n.h=new Set)).add(e)}function Bf(n,e){return[n.l,!e||0<e[0]?void 0:e]}function Wm(n){var e=n[co];if(e)return e;if(!(e=Vh(n,n[co]=new pl,Bf,Bf,KS)).ea&&!e.h&&!e.g){let t=!0;for(let i in e)isNaN(i)||(t=!1);t?(Ha(n[0])===Fh?va?e=va:((e=new pl).T=Ha(!0),e=va=e):e=Vm||(Vm=new pl),e=n[co]=e):e.j=!0}return e}function $S(n,e,t){n[e]=t}function Vh(n,e,t,i,s=$S){e.T=Ha(n[0]);let r=0;var o=n[++r];o&&o.constructor===Object&&(e.ea=o,typeof(o=n[++r])=="function"&&(e.l=o,e.m=n[++r],o=n[++r]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var c=0;c<o.length;c++)a[o[c]]=o;o=n[++r]}for(c=1;o!==void 0;){let u;typeof o=="number"&&(c+=o,o=n[++r]);var l=void 0;if(o instanceof Nr?u=o:(u=rE,r--),u.pa){o=n[++r],l=n;var h=r;typeof o=="function"&&(o=o(),l[h]=o),l=o}for(h=c+1,typeof(o=n[++r])=="number"&&0>o&&(h-=o,o=n[++r]);c<h;c++){const d=a[c];s(e,c,l?i(u,l,d):t(u,d))}}return e}const kf=Symbol();function Xm(n){let e=n[kf];if(!e){const t=nc(n);e=(i,s)=>qm(i,s,t),n[kf]=e}return e}const Gl=Symbol();function ZS(n){return n.h}function JS(n,e){let t,i;const s=n.h;return(r,o,a)=>s(r,o,a,i||(i=nc(e).T),t||(t=Xm(e)))}function nc(n){let e=n[Gl];return e||(e=Vh(n,n[Gl]={},ZS,JS),jm(n),e)}const Vl=Symbol();function QS(n,e){const t=n.g;return e?(i,s,r)=>t(i,s,r,e):t}function eE(n,e,t){const i=n.g;let s,r;return(o,a,c)=>i(o,a,c,r||(r=Wh(e).T),s||(s=Gh(e)),t)}function Wh(n){let e=n[Vl];return e||(Wm(n),e=Vh(n,n[Vl]={},QS,eE),jm(n),e)}function jm(n){Vl in n&&co in n&&Gl in n&&(n.length=0)}function Hf(n,e){var t=n[e];if(t)return t;if((t=n.ea)&&(t=t[e])){var i=(t=Gm(t))[0].h;if(t=t[1]){const s=Xm(t),r=nc(t).T;t=(t=n.m)?t(r,s):(o,a,c)=>i(o,a,c,r,s)}else t=i;return n[e]=t}}function qm(n,e,t){for(var i=st(n),s=+!!(512&i)-1,r=n.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){const c=n[o];if(c==null)continue;const l=o-s,h=Hf(t,l);h&&h(e,c,l)}if(256&i){i=n[r-1];for(let c in i)s=+c,Number.isNaN(s)||(r=i[c])!=null&&(a=Hf(t,s))&&a(e,r,s)}if(n=ns?n[ns]:void 0)for(Sr(e,e.g.end()),t=0;t<n.length;t++)Sr(e,gh(n[t])||Ya())}function mn(n,e){return new Nr(n,e,!1,!1)}function zr(n,e){return new Nr(n,e,!0,!1)}function ic(n,e){return new Nr(n,e,!1,!0)}function gn(n,e,t){vt(n,st(n),e,t)}var tE=ic(function(n,e,t,i,s){return n.h===2&&(n=Eo(n,Is([void 0,void 0],i),s),vi(i=st(e)),(s=xi(e,i,t))instanceof Bn?2&s.N?((s=s.Y()).push(n),vt(e,i,t,s)):s.Oa(n):Array.isArray(s)?(2&Ct(s)&&vt(e,i,t,s=Bm(s)),s.push(n)):vt(e,i,t,[n]),!0)},function(n,e,t,i,s){if(e instanceof Bn)e.forEach((r,o)=>{Ol(n,t,Is([o,r],i),s)});else if(Array.isArray(e))for(let r=0;r<e.length;r++){const o=e[r];Array.isArray(o)&&Ol(n,t,Is(o,i),s)}});function Ym(n,e,t){e:if(e!=null){if(Qa(e)){if(typeof e=="string"){e=Uh(e);break e}if(typeof e=="number"){e=Dh(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&wf(e),e!=null&&(kn(n,t,0),typeof e=="number"?(n=n.g,Cs(e),Ua(n,_t,Ot)):(t=wf(e),Ua(n.g,t.h,t.g))))}function Km(n,e,t){(e=Or(e))!=null&&e!=null&&(kn(n,t,0),Za(n.g,e))}function $m(n,e,t){(e=Lm(e))!=null&&(kn(n,t,0),n.g.g.push(e?1:0))}function Zm(n,e,t){(e=Ps(e))!=null&&Ja(n,t,hm(e))}function sc(n,e,t,i,s){Ol(n,t,e instanceof ye?e.s:Array.isArray(e)?Is(e,i):void 0,s)}function Jm(n,e,t){(e=e==null||typeof e=="string"||So(e)||e instanceof Ui?e:void 0)!=null&&Ja(n,t,vh(e).buffer)}function Qm(n,e,t){return(n.h===5||n.h===2)&&(e=kr(e,st(e),t,2,!1),n.h==2?$a(n,Fl,e):e.push(Fl(n.g)),!0)}var Bt,Ni=mn(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=Nl(i);const s=Nl(i);i=2*(s>>31)+1;const r=s>>>20&2047;return n=4294967296*(1048575&s)+n,gn(e,t,r==2047?n?NaN:1/0*i:r==0?i*Math.pow(2,-1074)*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=us(e))!=null&&(kn(n,t,1),n=n.g,(t=ym||(ym=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),_t=t.getUint32(0,!0),Ot=t.getUint32(4,!0),go(n,_t),go(n,Ot))}),zt=mn(function(n,e,t){return n.h===5&&(gn(e,t,Fl(n.g)),!0)},function(n,e,t){(e=us(e))!=null&&(kn(n,t,5),n=n.g,yh(e),go(n,_t))}),nE=zr(Qm,function(n,e,t){if((e=Hr(us,e))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(kn(i,s,5),i=i.g,yh(r),go(i,_t))}}),Xh=zr(Qm,function(n,e,t){if((e=Hr(us,e))!=null&&e.length){kn(n,t,2),To(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,yh(e[i]),go(t,_t)}}),cs=mn(function(n,e,t){return n.h===0&&(gn(e,t,Eh(n.g,Mh)),!0)},Ym),ml=mn(function(n,e,t){return n.h===0&&(gn(e,t,(n=Eh(n.g,Mh))===0?void 0:n),!0)},Ym),iE=mn(function(n,e,t){return n.h===0&&(gn(e,t,Eh(n.g,Ul)),!0)},function(n,e,t){e:if(e!=null){if(Qa(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),If(e)||(Ka(e),e=Da(_t,Ot)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(s){if(0>s){Cs(s);const r=Da(_t,Ot);return s=Number(r),Number.isSafeInteger(s)?s:r}return If(String(s))?s:(Cs(s),Ul(_t,Ot))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&bf(e),e!=null&&(kn(n,t,0),typeof e=="number"?(n=n.g,Cs(e),Ua(n,_t,Ot)):(t=bf(e),Ua(n.g,t.h,t.g))))}),Lt=mn(function(n,e,t){return n.h===0&&(gn(e,t,rs(n.g)),!0)},Km),rc=zr(function(n,e,t){return(n.h===0||n.h===2)&&(e=kr(e,st(e),t,2,!1),n.h==2?$a(n,rs,e):e.push(rs(n.g)),!0)},function(n,e,t){if((e=Hr(Or,e))!=null&&e.length){t=Ah(n,t);for(let i=0;i<e.length;i++)Za(n.g,e[i]);wh(n,t)}}),Tr=mn(function(n,e,t){return n.h===0&&(gn(e,t,(n=rs(n.g))===0?void 0:n),!0)},Km),Ut=mn(function(n,e,t){return n.h===0&&(gn(e,t,Th(n.g)),!0)},$m),lo=mn(function(n,e,t){return n.h===0&&(gn(e,t,(n=Th(n.g))===!1?void 0:n),!0)},$m),en=zr(function(n,e,t){return n.h===2&&(wo(e,t,qS,n=bh(n)),!0)},function(n,e,t){if((e=Hr(Ps,e))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&Ja(i,s,hm(r))}}),ls=mn(function(n,e,t){return n.h===2&&(gn(e,t,(n=bh(n))===""?void 0:n),!0)},Zm),ht=mn(function(n,e,t){return n.h===2&&(gn(e,t,bh(n)),!0)},Zm),sE=ic(function(n,e,t,i,s){return n.h===2&&(Eo(n,zh(e,i,t,!0),s),!0)},sc),rE=ic(function(n,e,t,i,s){return n.h===2&&(Eo(n,zh(e,i,t),s),!0)},sc);Bt=new Nr(function(n,e,t,i,s){if(n.h!==2)return!1;i=Is(void 0,i);let r=st(e);vi(r);let o=kr(e,r,t,3);return r=st(e),4&Ct(o)&&(o=Tn(o),Rt(o,-2079&(1|Ct(o))),vt(e,r,t,o)),o.push(i),Eo(n,i,s),!0},function(n,e,t,i,s){if(Array.isArray(e))for(let r=0;r<e.length;r++)sc(n,e[r],t,i,s)},!0,!0);var ut=ic(function(n,e,t,i,s,r){if(n.h!==2)return!1;let o=st(e);return vi(o),(r=Hh(e,o,r))&&t!==r&&vt(e,o,r),Eo(n,e=zh(e,i,t),s),!0},sc),eg=mn(function(n,e,t){return n.h===2&&(gn(e,t,bm(n)),!0)},Jm),oE=zr(function(n,e,t){return(n.h===0||n.h===2)&&(e=kr(e,st(e),t,2,!1),n.h==2?$a(n,os,e):e.push(os(n.g)),!0)},function(n,e,t){if((e=Hr(OS,e))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(kn(i,s,0),To(i.g,r))}}),fi=mn(function(n,e,t){return n.h===0&&(gn(e,t,rs(n.g)),!0)},function(n,e,t){(e=Or(e))!=null&&(e=parseInt(e,10),kn(n,t,0),Za(n.g,e))}),aE=zr(function(n,e,t){return(n.h===0||n.h===2)&&(e=kr(e,st(e),t,2,!1),n.h==2?$a(n,CS,e):e.push(rs(n.g)),!0)},function(n,e,t){if((e=Hr(Or,e))!=null&&e.length){t=Ah(n,t);for(let i=0;i<e.length;i++)Za(n.g,e[i]);wh(n,t)}});class cE{constructor(e,t){this.h=e,this.g=t,this.l=Qe,this.m=Re,this.defaultValue=void 0}}function $n(n,e){return new cE(n,e)}function ds(n,e){return(t,i)=>{if(ha.length){const r=ha.pop();r.o(i),ll(r.g,t,i),t=r}else t=new class{constructor(r,o){if(Tf.length){const a=Tf.pop();ll(a,r,o),r=a}else r=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,ll(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ia:r=!1}={}){this.ia=r}}(t,i);try{const r=new n,o=r.s;Gh(e)(o,t);var s=r}finally{t.g.clear(),t.m=-1,t.h=-1,100>ha.length&&ha.push(t)}return s}}function oc(n){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};qm(this.s,e,nc(n)),Sr(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];t.set(a,r),r+=a.length}return e.l=[t],t}}var zf=class extends ye{constructor(n){super(n)}},tg=[0,ls,mn(function(n,e,t){return n.h===2&&(gn(e,t,(n=bm(n))===Us()?void 0:n),!0)},function(n,e,t){if(e!=null){if(e instanceof ye){const i=e.Qa;return void(i&&(e=i(e),e!=null&&Ja(n,t,vh(e).buffer)))}if(Array.isArray(e))return}Jm(n,e,t)})],lE=[0,ht],ng=[0,Lt,fi,Ut,-1,rc,fi,-1],hE=[0,Ut,-1],ig=class extends ye{constructor(){super()}};ig.B=[6];var sg=[0,Ut,ht,Ut,fi,-1,aE,ht,-1,hE,fi],rg=[0,ht,-2],Gf=class extends ye{constructor(){super()}},og=[0],ag=[0,Lt,Ut,-4],bn=class extends ye{constructor(n){super(n,2)}},Et={},uE=[-2,Et,Ut];Et[336783863]=[0,ht,Ut,-1,Lt,[0,[1,2,3,4,5,6],ut,og,ut,sg,ut,rg,ut,ag,ut,ng,ut,[0,ht]],lE,Ut,[0,[1,3],[2,4],ut,[0,rc],-1,ut,[0,en],-1,Bt,[0,ht,-1]],ht];var dE=[0,ls,lo],cg=[0,ml,-1,lo,-3,ml,rc,ls,Tr,ml,-1,lo,Tr,lo,-2,ls],Ro=[-1,{}],lg=[0,ht,1,Ro],hg=[0,ht,en,Ro];function An(n,e){zl(n,2,Br(e),"")}function mt(n,e){wo(n.s,3,Ao,e)}function Ze(n,e){wo(n.s,4,Ao,e)}var tn=class extends ye{constructor(n){super(n,500)}o(n){return Re(this,0,7,n)}};tn.B=[3,4,5,6,8,13,17,1005];var fE=[-500,ls,-1,en,-3,uE,Bt,tg,Tr,-1,lg,hg,Bt,dE,ls,cg,Tr,en,987,en],pE=[0,ls,-1,Ro],mE=[-500,ht,-1,[-1,{}],998,ht],gE=[-500,ht,en,-1,[-2,{},Ut],997,en,-1],_E=[-500,ht,en,Ro,998,en];function wn(n,e){Ga(n,1,tn,e)}function xt(n,e){wo(n.s,10,Ao,e)}function et(n,e){wo(n.s,15,Ao,e)}var un=class extends ye{constructor(n){super(n,500)}o(n){return Re(this,0,1001,n)}};un.B=[1,6,7,9,10,15,16,17,14,1002];var ug=[-500,Bt,fE,4,Bt,mE,Bt,gE,Tr,Bt,_E,en,Tr,lg,hg,Bt,pE,en,-2,cg,ls,-1,lo,979,Ro,Bt,tg],vE=ds(un,ug);un.prototype.g=oc(ug);var xE=[0,Bt,[0,Lt,-2]],yE=class extends ye{constructor(n){super(n)}},ME=[0,Lt,zt,ht,-1],jh=class extends ye{constructor(n){super(n)}g(){return Bi(this,yE,1)}};jh.B=[1];var dg=[0,Bt,ME],ac=ds(jh,dg),SE=[0,Lt,zt],EE=[0,Lt,-1,xE],TE=class extends ye{constructor(n){super(n)}},bE=[0,Lt,-3],AE=[0,zt,-3],wE=class extends ye{constructor(n){super(n)}},RE=[0,zt,-1,ht,zt],xa=class extends ye{constructor(n){super(n)}h(){return Qe(this,TE,2)}g(){return Bi(this,wE,5)}};xa.B=[5];var CE=[0,fi,bE,AE,EE,Bt,RE],fg=class extends ye{constructor(n){super(n)}};fg.B=[1,2,3,8,9];var pg=ds(fg,[0,en,rc,Xh,CE,ht,-1,cs,Bt,SE,en,cs]),mg=class extends ye{constructor(n){super(n)}},LE=[0,zt,-4],gg=class extends ye{constructor(n){super(n)}};gg.B=[1];var cr=ds(gg,[0,Bt,LE]),_g=class extends ye{constructor(n){super(n)}},PE=[0,zt,-4],vg=class extends ye{constructor(n){super(n)}};vg.B=[1];var Co=ds(vg,[0,Bt,PE]),xg=class extends ye{constructor(n){super(n)}};xg.B=[3];var IE=[0,Lt,-1,Xh,fi],yg=class extends ye{constructor(){super()}};yg.prototype.g=oc([0,zt,-4,cs]);var DE=class extends ye{constructor(n){super(n)}},UE=[0,1,Lt,ht,dg],Mg=class extends ye{constructor(n){super(n)}};Mg.B=[1];var NE=ds(Mg,[0,Bt,UE,cs]),Wl=class extends ye{constructor(n){super(n)}};Wl.B=[1];var FE=class extends ye{constructor(n){super(n)}qa(){const n=Nm(this);return n??Us()}},OE=class extends ye{constructor(n){super(n)}},Sg=[1,2],BE=[0,Sg,ut,[0,Xh],ut,[0,eg],Lt,ht],Eg=class extends ye{constructor(n){super(n)}};Eg.B=[1];var kE=ds(Eg,[0,Bt,BE,cs]),cc=class extends ye{constructor(n){super(n)}};cc.B=[4,5];var Tg=[0,ht,Lt,zt,en,-1],Vf=class extends ye{constructor(n){super(n)}},HE=[0,Ut,-1],Wf=class extends ye{constructor(n){super(n)}},ya=[1,2,3,4,5],Va=class extends ye{constructor(n){super(n)}g(){return Nm(this)!=null}h(){return Ps(as(this,2))!=null}},bg=[0,eg,ht,[0,Lt,cs,-1],[0,iE,cs]],Tt=class extends ye{constructor(n){super(n)}g(){return Lm(as(this,2))??!1}},Nt=[0,bg,Ut,[0,ya,ut,ag,ut,sg,ut,ng,ut,og,ut,rg],fi],lc=class extends ye{constructor(n){super(n)}},qh=[0,Nt,zt,-1,Lt],zE=$n(502141897,lc);Et[502141897]=qh;var Ag=[0,bg];Et[512499200]=Ag;var wg=[0,Ag];Et[515723506]=wg;var GE=ds(class extends ye{constructor(n){super(n)}},[0,[0,fi,-1,nE,oE],IE]),Rg=[0,Nt];Et[508981768]=Rg;var Cg=class extends ye{constructor(n){super(n)}},Yh=[0,Nt,zt,Rg,Ut],Lg=class extends ye{constructor(n){super(n)}},Pg=[0,Nt,qh,Yh,zt,wg];Et[508968149]=Yh;var VE=$n(508968150,Lg);Et[508968150]=Pg;var Ig=class extends ye{constructor(n){super(n)}},WE=$n(513916220,Ig);Et[513916220]=[0,Nt,Pg,Lt];var er=class extends ye{constructor(n){super(n)}h(){return Qe(this,cc,2)}g(){pt(this,2)}},Dg=[0,Nt,Tg];Et[478825465]=Dg;var Ug=[0,Nt];Et[478825422]=Ug;var XE=class extends ye{constructor(n){super(n)}},Ng=[0,Nt,Ug,Dg,-1],Fg=class extends ye{constructor(n){super(n)}},Og=[0,Nt,zt,Lt],Kh=class extends ye{constructor(n){super(n)}},$h=[0,Nt,zt],Zh=class extends ye{constructor(n){super(n)}},Bg=[0,Nt,Og,$h,zt],kg=class extends ye{constructor(n){super(n)}},jE=[0,Nt,Bg,Ng];Et[463370452]=Ng,Et[464864288]=Og,Et[474472470]=$h;var qE=$n(462713202,Zh);Et[462713202]=Bg;var YE=$n(479097054,kg);Et[479097054]=jE;var KE=class extends ye{constructor(n){super(n)}},$E=[0,Nt],Hg=class extends ye{constructor(n){super(n)}},Jh=[0,Nt,zt,-1,Lt];Et[514774813]=Jh;var zg=class extends ye{constructor(n){super(n)}},Qh=[0,Nt,zt,Ut];Et[518928384]=Qh;var Gg=class extends ye{constructor(){super()}};Gg.prototype.g=oc([0,Nt,$h,$E,qh,Yh,Jh,Qh]);var Vg=class extends ye{constructor(n){super(n)}},ZE=$n(456383383,Vg);Et[456383383]=[0,Nt,Tg];var Wg=class extends ye{constructor(n){super(n)}},JE=$n(476348187,Wg);Et[476348187]=[0,Nt,HE];var Xg=class extends ye{constructor(n){super(n)}},jg=[0,fi,-1],Xl=class extends ye{constructor(n){super(n)}};Xl.B=[3];var QE=$n(458105876,class extends ye{constructor(n){super(n)}g(){var n=this.s;const e=st(n);var t=2&e;return n=function(i,s,r){var o=Xl;const a=2&s;let c=!1;if(r==null){if(a)return Nf();r=[]}else if(r.constructor===Bn){if(!(2&r.N)||a)return r;r=r.Y()}else Array.isArray(r)?c=!!(2&Ct(r)):r=[];if(a){if(!r.length)return Nf();c||(c=!0,Fr(r))}else c&&(c=!1,r=Bm(r));return c||(64&Ct(r)?Na(r,32):32&s&&Ch(r,32)),vt(i,s,2,o=new Bn(r,o,BS,void 0),!1),o}(n,e,xi(n,e,2)),n==null||!t&&Xl&&(n.ta=!0),t=n}});Et[458105876]=[0,jg,tE,[!0,cs,[0,ht,-1,en]]];var eu=class extends ye{constructor(n){super(n)}},qg=$n(458105758,eu);Et[458105758]=[0,Nt,ht,jg];var tu=class extends ye{constructor(n){super(n)}};tu.B=[5,6];var e3=$n(443442058,tu);Et[443442058]=[0,Nt,ht,Lt,zt,en,-1];var Yg=class extends ye{constructor(n){super(n)}},t3=$n(516587230,Yg);function jl(n,e){return e=e?e.clone():new cc,n.displayNamesLocale!==void 0?pt(e,1,Br(n.displayNamesLocale)):n.displayNamesLocale===void 0&&pt(e,1),n.maxResults!==void 0?di(e,2,n.maxResults):"maxResults"in n&&pt(e,2),n.scoreThreshold!==void 0?Se(e,3,n.scoreThreshold):"scoreThreshold"in n&&pt(e,3),n.categoryAllowlist!==void 0?za(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&pt(e,4),n.categoryDenylist!==void 0?za(e,5,n.categoryDenylist):"categoryDenylist"in n&&pt(e,5),e}function nu(n,e=-1,t=""){return{categories:n.map(i=>({index:Yn(Nn(i,1),0)??-1,score:Dt(i,2)??0,categoryName:ui(i,3)??"",displayName:ui(i,4)??""})),headIndex:e,headName:t}}function Kg(n){var e=ir(n,3,us),t=ir(n,2,Or),i=ir(n,1,Ps),s=ir(n,9,Ps);const r={categories:[],keypoints:[]};for(let o=0;o<e.length;o++)r.categories.push({score:e[o],index:t[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((e=Qe(n,xa,4)?.h())&&(r.boundingBox={originX:Nn(e,1)??0,originY:Nn(e,2)??0,width:Nn(e,3)??0,height:Nn(e,4)??0,angle:0}),Qe(n,xa,4)?.g().length)for(const o of Qe(n,xa,4).g())r.keypoints.push({x:_a(o,1)??0,y:_a(o,2)??0,score:_a(o,4)??0,label:Ps(as(o,3))??""});return r}function hc(n){const e=[];for(const t of Bi(n,_g,1))e.push({x:Dt(t,1)??0,y:Dt(t,2)??0,z:Dt(t,3)??0,visibility:Dt(t,4)??0});return e}function ho(n){const e=[];for(const t of Bi(n,mg,1))e.push({x:Dt(t,1)??0,y:Dt(t,2)??0,z:Dt(t,3)??0,visibility:Dt(t,4)??0});return e}function Xf(n){return Array.from(n,e=>127<e?e-256:e)}function jf(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,s=0;for(let r=0;r<n.length;r++)t+=n[r]*e[r],i+=n[r]*n[r],s+=e[r]*e[r];if(0>=i||0>=s)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*s)}let ua;Et[516587230]=[0,Nt,Jh,Qh,zt];const n3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function $g(){if(ua===void 0)try{await WebAssembly.instantiate(n3),ua=!0}catch{ua=!1}return ua}async function Jr(n,e=""){const t=await $g()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${n}_${t}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var Yi=class{};function Zg(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=n.length&&17<=Number(n[1])))}async function qf(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}importScripts(n.toString())}function Jg(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Te(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function Yf(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=Jg(e);return!n.l||i===n.i.canvas.width&&s===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=s),[i,s]}function Kf(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=n.i.stringToNewUTF8(e[s]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const s of i)n.i._free(s);n.i._free(e)}function ei(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function qi(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(s,r,o)=>{r?(t(i,o),i=[]):i.push(s)}}Yi.forVisionTasks=function(n){return Jr("vision",n)},Yi.forTextTasks=function(n){return Jr("text",n)},Yi.forGenAiExperimentalTasks=function(n){return Jr("genai_experimental",n)},Yi.forGenAiTasks=function(n){return Jr("genai",n)},Yi.forAudioTasks=function(n){return Jr("audio",n)},Yi.isSimdSupported=function(){return $g()};async function i3(n,e,t,i){return n=await(async(s,r,o,a,c)=>{if(r&&await qf(r),!self.ModuleFactory||o&&(await qf(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&s.endsWith(".data")?t.assetBinaryPath.toString():s}),await n.o(i),n}function gl(n,e){const t=Qe(n.baseOptions,Va,1)||new Va;typeof e=="string"?(pt(t,2,Br(e)),pt(t,1)):e instanceof Uint8Array&&(pt(t,1,Ih(e,!1,!1)),pt(t,2)),Re(n.baseOptions,0,1,t)}function $f(n){try{const e=n.K.length;if(e===1)throw Error(n.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+n.K.map(t=>t.message).join(", "))}finally{n.K=[]}}function me(n,e){n.J=Math.max(n.J,e)}function uc(n,e){n.C=new tn,An(n.C,"PassThroughCalculator"),mt(n.C,"free_memory"),Ze(n.C,"free_memory_unused_out"),xt(e,"free_memory"),wn(e,n.C)}function br(n,e){mt(n.C,e),Ze(n.C,e+"_unused_out")}function dc(n){n.g.addBoolToStream(!0,"free_memory",n.J)}var Ma=class{constructor(n){this.g=n,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){if(e){const t=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Qe(this.baseOptions,Va,1)?.g()||Qe(this.baseOptions,Va,1)?.h()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,s){let r=Qe(i.baseOptions,Wf,3);if(!r){var o=r=new Wf,a=new Gf;ao(o,4,ya,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new ig,ao(s,2,ya,o)):(s=r,o=new Gf,ao(s,4,ya,o))),Re(i.baseOptions,0,3,r)}(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),gl(this,"/model.dat"),this.m(),this.L()});if(t.modelAssetBuffer instanceof Uint8Array)gl(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return async function(i){const s=[];for(var r=0;;){const{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(const o of s)i.set(o,r),r+=o.length;return i}(t.modelAssetBuffer).then(i=>{gl(this,i),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let n;if(this.g.fa(e=>{n=vE(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(n,e),this.C=void 0,$f(this)}finishProcessing(){this.g.finishProcessing(),$f(this)}close(){this.C=void 0,this.g.closeGraph()}};function Fi(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Ma.prototype.close=Ma.prototype.close,function(n,e){n=n.split(".");var t,i=Mo;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}("TaskRunner",Ma);class s3{constructor(e,t,i,s){this.g=e,this.h=t,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Zf(n,e,t){const i=n.g;if(t=Fi(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function Jf(n,e){const t=n.g,i=Fi(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const s=Fi(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.K),t.vertexAttribPointer(n.K,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const r=Fi(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.J),t.vertexAttribPointer(n.J,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new s3(t,i,s,r)}function iu(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function su(n,e,t,i){return iu(n,e),n.h||(n.m(),n.D()),t?(n.v||(n.v=Jf(n,!0)),t=n.v):(n.A||(n.A=Jf(n,!1)),t=n.A),e.useProgram(n.h),t.bind(),n.l(),n=i(),t.g.bindVertexArray(null),n}function fc(n,e,t){return iu(n,e),n=Fi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function pc(n,e,t){iu(n,e),n.u||(n.u=Fi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function ru(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var ou=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=Fi(n.createProgram(),"Failed to create WebGL program"),this.ba=Zf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=Zf(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.K=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.ba),n.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function Li(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function ql(n){var e=Li(n,1);if(!e){if(e=Li(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);const i=Ar(n);var t=au(n);if(pc(t,i,Qg(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=t[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function Qg(n){let e=Li(n,2);if(!e){const t=Ar(n);e=t0(n);const i=ql(n),s=e0(n);t.texImage2D(t.TEXTURE_2D,0,s,n.width,n.height,0,t.RED,t.FLOAT,i),Yl(n)}return e}function Ar(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Fi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function e0(n){if(n=Ar(n),!da)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))da=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");da=n.R16F}return da}function au(n){return n.l||(n.l=new ou),n.l}function t0(n){const e=Ar(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Li(n,2);return t||(t=fc(au(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.j=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Yl(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var da,Xt=class{constructor(n,e,t,i,s,r,o){this.g=n,this.m=e,this.j=t,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Qf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Li(this,0)}la(){return!!Li(this,1)}R(){return!!Li(this,2)}ka(){return(e=Li(n=this,0))||(e=ql(n),e=new Uint8Array(e.map(t=>255*t)),n.g.push(e)),e;var n,e}ja(){return ql(this)}O(){return Qg(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ar(this),s=au(this);i.activeTexture(i.TEXTURE1),t=fc(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);const r=e0(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),pc(s,i,t),su(s,i,!1,()=>{t0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Yl(this)}),ru(s),Yl(this)}}n.push(t)}return new Xt(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ar(this).deleteTexture(Li(this,2)),Qf=-1}};Xt.prototype.close=Xt.prototype.close,Xt.prototype.clone=Xt.prototype.clone,Xt.prototype.getAsWebGLTexture=Xt.prototype.O,Xt.prototype.getAsFloat32Array=Xt.prototype.ja,Xt.prototype.getAsUint8Array=Xt.prototype.ka,Xt.prototype.hasWebGLTexture=Xt.prototype.R,Xt.prototype.hasFloat32Array=Xt.prototype.la,Xt.prototype.hasUint8Array=Xt.prototype.Ha;var Qf=250;function si(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function n0(n){var e=si(n,0);if(!e){e=wr(n);const t=mc(n),i=new Uint8Array(n.width*n.height*4);pc(t,e,Sa(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),ru(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function Sa(n){let e=si(n,2);if(!e){const t=wr(n);e=Ea(n);const i=si(n,1)||n0(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),no(n)}return e}function wr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=Fi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function mc(n){return n.l||(n.l=new ou),n.l}function Ea(n){const e=wr(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=si(n,2);return t||(t=fc(mc(n),e),n.g.push(t),n.m=!0),e.bindTexture(e.TEXTURE_2D,t),t}function no(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function ep(n){const e=wr(n);return su(mc(n),e,!0,()=>function(t,i){const s=t.canvas;if(s.width===t.width&&s.height===t.height)return i();const r=s.width,o=s.height;return s.width=t.width,s.height=t.height,t=i(),s.width=r,s.height=o,t}(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}var jt=class{constructor(n,e,t,i,s,r,o){this.g=n,this.j=e,this.m=t,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--tp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!si(this,0)}ma(){return!!si(this,1)}R(){return!!si(this,2)}Ea(){return n0(this)}Da(){var n=si(this,1);return n||(Sa(this),Ea(this),n=ep(this),no(this),this.g.push(n),this.j=!0),n}O(){return Sa(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=wr(this),s=mc(this);i.activeTexture(i.TEXTURE1),t=fc(s,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),pc(s,i,t),su(s,i,!1,()=>{Ea(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),no(this)}),ru(s),no(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Sa(this),Ea(this),t=ep(this),no(this)}n.push(t)}return new jt(n,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&si(this,1).close(),this.m&&wr(this).deleteTexture(si(this,2)),tp=-1}};jt.prototype.close=jt.prototype.close,jt.prototype.clone=jt.prototype.clone,jt.prototype.getAsWebGLTexture=jt.prototype.O,jt.prototype.getAsImageBitmap=jt.prototype.Da,jt.prototype.getAsImageData=jt.prototype.Ea,jt.prototype.hasWebGLTexture=jt.prototype.R,jt.prototype.hasImageBitmap=jt.prototype.ma,jt.prototype.hasImageData=jt.prototype.Ga;var tp=250;function Zn(...n){return n.map(([e,t])=>({start:e,end:t}))}const r3=function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}}((np=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Zg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Te(this,i||"input_audio",r=>{Te(this,s=s||"audio_header",o=>{this.i._configureAudio(r,o,n,e,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}fa(n){ei(this,"__graph_config__",e=>{n(e)}),Te(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,s){const r=4*n.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(n,this.g/4),Te(this,i,o=>{this.i._addAudioToInputStream(this.g,e,t,o,s)})}addGpuBufferToStream(n,e,t){Te(this,e,i=>{const[s,r]=Yf(this,n,i);this.i._addBoundTextureToStream(i,s,r,t)})}addBoolToStream(n,e,t){Te(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Te(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Te(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Te(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Te(this,e,i=>{this.i._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Te(this,e,i=>{Te(this,n,s=>{this.i._addStringToInputStream(s,i,t)})})}addStringRecordToStream(n,e,t){Te(this,e,i=>{Kf(this,Object.keys(n),s=>{Kf(this,Object.values(n),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Te(this,t,s=>{Te(this,e,r=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,r,s,i),this.i._free(o)})})}addEmptyPacketToStream(n,e){Te(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Te(this,e,i=>{const s=this.i._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,t)})}addDoubleVectorToStream(n,e,t){Te(this,e,i=>{const s=this.i._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,t)})}addFloatVectorToStream(n,e,t){Te(this,e,i=>{const s=this.i._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,t)})}addIntVectorToStream(n,e,t){Te(this,e,i=>{const s=this.i._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,t)})}addUintVectorToStream(n,e,t){Te(this,e,i=>{const s=this.i._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,t)})}addStringVectorToStream(n,e,t){Te(this,e,i=>{const s=this.i._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Te(this,r,o=>{this.i._addStringVectorEntry(s,o)});this.i._addStringVectorToInputStream(s,i,t)})}addBoolToInputSidePacket(n,e){Te(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Te(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Te(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Te(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Te(this,e,t=>{this.i._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Te(this,e,t=>{Te(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Te(this,t,i=>{Te(this,e,s=>{const r=this.i._malloc(n.length);this.i.HEAPU8.set(n,r),this.i._addProtoToInputSidePacket(r,n.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Te(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){ei(this,n,e),Te(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){qi(this,n,e),Te(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){ei(this,n,e),Te(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){qi(this,n,e),Te(this,n,t=>{this.i._attachIntVectorListener(t)})}attachUintListener(n,e){ei(this,n,e),Te(this,n,t=>{this.i._attachUintListener(t)})}attachUintVectorListener(n,e){qi(this,n,e),Te(this,n,t=>{this.i._attachUintVectorListener(t)})}attachDoubleListener(n,e){ei(this,n,e),Te(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){qi(this,n,e),Te(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){ei(this,n,e),Te(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){qi(this,n,e),Te(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){ei(this,n,e),Te(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){qi(this,n,e),Te(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){ei(this,n,e),Te(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){qi(this,n,e),Te(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ei(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Te(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends np{get ha(){return this.i}sa(n,e,t){Te(this,e,i=>{const[s,r]=Yf(this,n,i);this.ha._addBoundTextureAsImageToStream(i,s,r,t)})}W(n,e){ei(this,n,e),Te(this,n,t=>{this.ha._attachImageListener(t)})}da(n,e){qi(this,n,e),Te(this,n,t=>{this.ha._attachImageVectorListener(t)})}}));var np,Hn=class extends r3{};async function Ke(n,e,t){return async function(i,s,r,o){return i3(i,s,r,o)}(n,t.canvas??(Zg()?void 0:document.createElement("canvas")),e,t)}function i0(n,e,t,i){if(n.V){const r=new yg;if(t?.regionOfInterest){if(!n.ra)throw Error("This task doesn't support region-of-interest.");var s=t.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>s.left||0>s.top||1<s.right||1<s.bottom)throw Error("Expected RectF values to be in [0,1].");Se(r,1,(s.left+s.right)/2),Se(r,2,(s.top+s.bottom)/2),Se(r,4,s.right-s.left),Se(r,3,s.bottom-s.top)}else Se(r,1,.5),Se(r,2,.5),Se(r,4,1),Se(r,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Se(r,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){const[o,a]=Jg(e);t=Dt(r,3)*a/o,s=Dt(r,4)*o/a,Se(r,4,t),Se(r,3,s)}}n.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",n.V,i)}n.g.sa(e,n.ba,i??performance.now()),n.finishProcessing()}function zn(n,e,t){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");i0(n,e,t,n.J+1)}function yi(n,e,t,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");i0(n,e,t,i)}function Rr(n,e,t,i){var s=e.data;const r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return n=new Xt([s],t,!1,n.g.i.canvas,n.M,r,e),i?n.clone():n}var pn=class extends Ma{constructor(n,e,t,i){super(n),this.g=n,this.ba=e,this.V=t,this.ra=i,this.M=new ou}l(n,e=!0){if("runningMode"in n&&_o(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.M.close(),super.close()}};pn.prototype.close=pn.prototype.close;var Ln=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Re(n=this.h=new lc,0,1,e=new Tt),Se(this.h,2,.5),Se(this.h,3,.3)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Se(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Se(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,e){return this.j={detections:[]},zn(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},yi(this,n,t,e),this.j}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect_in"),et(n,"detections");const e=new bn;Kn(e,zE,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect_in"),Ze(t,"DETECTIONS:detections"),t.o(e),wn(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=pg(r),this.j.detections.push(Kg(i));me(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ln.prototype.detectForVideo=Ln.prototype.G,Ln.prototype.detect=Ln.prototype.F,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=async function(n,e){return Ke(Ln,n,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(n,e){return Ke(Ln,n,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(n,e){return Ke(Ln,n,e)};var cu=Zn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),lu=Zn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),hu=Zn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),s0=Zn([474,475],[475,476],[476,477],[477,474]),uu=Zn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),du=Zn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),r0=Zn([469,470],[470,471],[471,472],[472,469]),fu=Zn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),o0=[...cu,...lu,...hu,...uu,...du,...fu],a0=Zn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function ip(n){n.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Mt=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Re(n=this.h=new Lg,0,1,e=new Tt),this.H=new Cg,Re(this.h,0,3,this.H),this.j=new lc,Re(this.h,0,2,this.j),di(this.j,4,1),Se(this.j,2,.5),Se(this.H,2,.5),Se(this.h,4,.5)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return"numFaces"in n&&di(this.j,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Se(this.j,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Se(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,e){return ip(this),zn(this,n,e),this.u}G(n,e,t){return ip(this),yi(this,n,t,e),this.u}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"face_landmarks");const e=new bn;Kn(e,VE,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),wn(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(const r of i)i=Co(r),this.u.faceLandmarks.push(hc(i));me(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{me(this,i)}),this.outputFaceBlendshapes&&(et(n,"blendshapes"),Ze(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=ac(r),this.u.faceBlendshapes.push(nu(i.g()??[]));me(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{me(this,i)})),this.outputFacialTransformationMatrixes&&(et(n,"face_geometry"),Ze(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=Qe(GE(r),xg,2))&&this.u.facialTransformationMatrixes.push({rows:Yn(Nn(i,1),0)??0,columns:Yn(Nn(i,2),0)??0,data:ir(i,3,us).slice()??[]});me(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{me(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Mt.prototype.detectForVideo=Mt.prototype.G,Mt.prototype.detect=Mt.prototype.F,Mt.prototype.setOptions=Mt.prototype.o,Mt.createFromModelPath=function(n,e){return Ke(Mt,n,{baseOptions:{modelAssetPath:e}})},Mt.createFromModelBuffer=function(n,e){return Ke(Mt,n,{baseOptions:{modelAssetBuffer:e}})},Mt.createFromOptions=function(n,e){return Ke(Mt,n,e)},Mt.FACE_LANDMARKS_LIPS=cu,Mt.FACE_LANDMARKS_LEFT_EYE=lu,Mt.FACE_LANDMARKS_LEFT_EYEBROW=hu,Mt.FACE_LANDMARKS_LEFT_IRIS=s0,Mt.FACE_LANDMARKS_RIGHT_EYE=uu,Mt.FACE_LANDMARKS_RIGHT_EYEBROW=du,Mt.FACE_LANDMARKS_RIGHT_IRIS=r0,Mt.FACE_LANDMARKS_FACE_OVAL=fu,Mt.FACE_LANDMARKS_CONTOURS=o0,Mt.FACE_LANDMARKS_TESSELATION=a0;var ti=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!0),Re(n=this.j=new Ig,0,1,e=new Tt)}get baseOptions(){return Qe(this.j,Tt,1)}set baseOptions(n){Re(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,e,t){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:t,zn(this,n,i??{}),!this.h)return this.u}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"stylized_image");const e=new bn;Kn(e,WE,this.j);const t=new tn;An(t,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"STYLIZED_IMAGE:stylized_image"),t.o(e),wn(n,t),this.g.W("stylized_image",(i,s)=>{var r=!this.h,o=i.data,a=i.width;const c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new jt([o],!1,!1,this.g.i.canvas,this.M,a,i),this.u=r=r?a.clone():a,this.h&&this.h(r),me(this,s)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ti.prototype.stylize=ti.prototype.Pa,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=function(n,e){return Ke(ti,n,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(n,e){return Ke(ti,n,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(n,e){return Ke(ti,n,e)};var pu=Zn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function sp(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function rp(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function op(n,e=!0){const t=[];for(const s of n){var i=ac(s);n=[];for(const r of i.g())i=e&&Nn(r,1)!=null?Yn(Nn(r,1),0):-1,n.push({score:Dt(r,2)??0,index:i,categoryName:ui(r,3)??"",displayName:ui(r,4)??""});t.push(n)}return t}var yn=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(n=this.v=new kg,0,1,e=new Tt),this.A=new Zh,Re(this.v,0,2,this.A),this.u=new Kh,Re(this.A,0,3,this.u),this.h=new Fg,Re(this.A,0,2,this.h),this.j=new XE,Re(this.v,0,3,this.j),Se(this.h,2,.5),Se(this.A,4,.5),Se(this.u,2,.5)}get baseOptions(){return Qe(this.v,Tt,1)}set baseOptions(n){Re(this.v,0,1,n)}o(n){if(di(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&Se(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.A,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Se(this.u,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new er,t=e,i=jl(n.cannedGesturesClassifierOptions,Qe(this.j,er,3)?.h());Re(t,0,2,i),Re(this.j,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&Qe(this.j,er,3)?.g();return n.customGesturesClassifierOptions?(Re(t=e=new er,0,2,i=jl(n.customGesturesClassifierOptions,Qe(this.j,er,4)?.h())),Re(this.j,0,4,e)):n.customGesturesClassifierOptions===void 0&&Qe(this.j,er,4)?.g(),this.l(n)}Ka(n,e){return sp(this),zn(this,n,e),rp(this)}La(n,e,t){return sp(this),yi(this,n,t,e),rp(this)}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"hand_gestures"),et(n,"hand_landmarks"),et(n,"world_hand_landmarks"),et(n,"handedness");const e=new bn;Kn(e,YE,this.v);const t=new tn;An(t,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"HAND_GESTURES:hand_gestures"),Ze(t,"LANDMARKS:hand_landmarks"),Ze(t,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(t,"HANDEDNESS:handedness"),t.o(e),wn(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i){i=Co(r);const o=[];for(const a of Bi(i,_g,1))o.push({x:Dt(a,1)??0,y:Dt(a,2)??0,z:Dt(a,3)??0,visibility:Dt(a,4)??0});this.landmarks.push(o)}me(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i){i=cr(r);const o=[];for(const a of Bi(i,mg,1))o.push({x:Dt(a,1)??0,y:Dt(a,2)??0,z:Dt(a,3)??0,visibility:Dt(a,4)??0});this.worldLandmarks.push(o)}me(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...op(i,!1)),me(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{me(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...op(i)),me(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function ap(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}yn.prototype.recognizeForVideo=yn.prototype.La,yn.prototype.recognize=yn.prototype.Ka,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(n,e){return Ke(yn,n,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(n,e){return Ke(yn,n,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(n,e){return Ke(yn,n,e)},yn.HAND_CONNECTIONS=pu;var on=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(n=this.j=new Zh,0,1,e=new Tt),this.u=new Kh,Re(this.j,0,3,this.u),this.h=new Fg,Re(this.j,0,2,this.h),di(this.h,3,1),Se(this.h,2,.5),Se(this.u,2,.5),Se(this.j,4,.5)}get baseOptions(){return Qe(this.j,Tt,1)}set baseOptions(n){Re(this.j,0,1,n)}o(n){return"numHands"in n&&di(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&Se(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.j,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Se(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],zn(this,n,e),ap(this)}G(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],yi(this,n,t,e),ap(this)}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"hand_landmarks"),et(n,"world_hand_landmarks"),et(n,"handedness");const e=new bn;Kn(e,qE,this.j);const t=new tn;An(t,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"LANDMARKS:hand_landmarks"),Ze(t,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(t,"HANDEDNESS:handedness"),t.o(e),wn(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i)i=Co(r),this.landmarks.push(hc(i));me(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i)i=cr(r),this.worldLandmarks.push(ho(i));me(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const c of i){i=ac(c);const l=[];for(const h of i.g())l.push({score:Dt(h,2)??0,index:Yn(Nn(h,1),0)??-1,categoryName:ui(h,3)??"",displayName:ui(h,4)??""});a.push(l)}o.call(r,...a),me(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};on.prototype.detectForVideo=on.prototype.G,on.prototype.detect=on.prototype.F,on.prototype.setOptions=on.prototype.o,on.createFromModelPath=function(n,e){return Ke(on,n,{baseOptions:{modelAssetPath:e}})},on.createFromModelBuffer=function(n,e){return Ke(on,n,{baseOptions:{modelAssetBuffer:e}})},on.createFromOptions=function(n,e){return Ke(on,n,e)},on.HAND_CONNECTIONS=pu;var c0=Zn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function cp(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function lp(n){try{if(!n.I)return n.h;n.I(n.h)}finally{dc(n)}}function fa(n,e){n=Co(n),e.push(hc(n))}var yt=class extends pn{constructor(n,e){super(new Hn(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Re(n=this.A=new Gg,0,1,e=new Tt),this.u=new Kh,Re(this.A,0,2,this.u),this.aa=new KE,Re(this.A,0,3,this.aa),this.j=new lc,Re(this.A,0,4,this.j),this.H=new Cg,Re(this.A,0,5,this.H),this.v=new Hg,Re(this.A,0,6,this.v),this.D=new zg,Re(this.A,0,7,this.D),Se(this.j,2,.5),Se(this.j,3,.3),Se(this.H,2,.5),Se(this.v,2,.5),Se(this.v,3,.3),Se(this.D,2,.5),Se(this.u,2,.5)}get baseOptions(){return Qe(this.A,Tt,1)}set baseOptions(n){Re(this.A,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&Se(this.j,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Se(this.j,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Se(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Se(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Se(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Se(this.D,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Se(this.u,2,n.minHandLandmarksConfidence??.5),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:t,cp(this),zn(this,n,i),lp(this)}G(n,e,t,i){const s=typeof t!="function"?t:{};return this.I=typeof t=="function"?t:i,cp(this),yi(this,n,s,e),lp(this)}m(){var n=new un;xt(n,"input_frames_image"),et(n,"pose_landmarks"),et(n,"pose_world_landmarks"),et(n,"face_landmarks"),et(n,"left_hand_landmarks"),et(n,"left_hand_world_landmarks"),et(n,"right_hand_landmarks"),et(n,"right_hand_world_landmarks");const e=new bn,t=new zf;zl(t,1,Br("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(s,r){if(r!=null)if(Array.isArray(r))pt(s,2,ec(r,Bh,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof Ui||So(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");zl(s,2,Ih(r,!1,!1),Us())}}(t,this.A.g());const i=new tn;An(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Ga(i,8,zf,t),mt(i,"IMAGE:input_frames_image"),Ze(i,"POSE_LANDMARKS:pose_landmarks"),Ze(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Ze(i,"FACE_LANDMARKS:face_landmarks"),Ze(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Ze(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Ze(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Ze(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),wn(n,i),uc(this,n),this.g.attachProtoListener("pose_landmarks",(s,r)=>{fa(s,this.h.poseLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var o=this.h.poseWorldLandmarks;s=cr(s),o.push(ho(s)),me(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{me(this,s)}),this.outputPoseSegmentationMasks&&(Ze(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),br(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[Rr(this,s,!0,!this.I)],me(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],me(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{fa(s,this.h.faceLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{me(this,s)}),this.outputFaceBlendshapes&&(et(n,"extra_blendshapes"),Ze(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=ac(s),o.push(nu(s.g()??[]))),me(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{me(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{fa(s,this.h.leftHandLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var o=this.h.leftHandWorldLandmarks;s=cr(s),o.push(ho(s)),me(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{fa(s,this.h.rightHandLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var o=this.h.rightHandWorldLandmarks;s=cr(s),o.push(ho(s)),me(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{me(this,s)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};yt.prototype.detectForVideo=yt.prototype.G,yt.prototype.detect=yt.prototype.F,yt.prototype.setOptions=yt.prototype.o,yt.createFromModelPath=function(n,e){return Ke(yt,n,{baseOptions:{modelAssetPath:e}})},yt.createFromModelBuffer=function(n,e){return Ke(yt,n,{baseOptions:{modelAssetBuffer:e}})},yt.createFromOptions=function(n,e){return Ke(yt,n,e)},yt.HAND_CONNECTIONS=pu,yt.POSE_CONNECTIONS=c0,yt.FACE_LANDMARKS_LIPS=cu,yt.FACE_LANDMARKS_LEFT_EYE=lu,yt.FACE_LANDMARKS_LEFT_EYEBROW=hu,yt.FACE_LANDMARKS_LEFT_IRIS=s0,yt.FACE_LANDMARKS_RIGHT_EYE=uu,yt.FACE_LANDMARKS_RIGHT_EYEBROW=du,yt.FACE_LANDMARKS_RIGHT_IRIS=r0,yt.FACE_LANDMARKS_FACE_OVAL=fu,yt.FACE_LANDMARKS_CONTOURS=o0,yt.FACE_LANDMARKS_TESSELATION=a0;var Pn=class extends pn{constructor(n,e){super(new Hn(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},Re(n=this.h=new Vg,0,1,e=new Tt)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return Re(this.h,0,2,jl(n,Qe(this.h,cc,2))),this.l(n)}ua(n,e){return this.j={classifications:[]},zn(this,n,e),this.j}va(n,e,t){return this.j={classifications:[]},yi(this,n,t,e),this.j}m(){var n=new un;xt(n,"input_image"),xt(n,"norm_rect"),et(n,"classifications");const e=new bn;Kn(e,ZE,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),mt(t,"IMAGE:input_image"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"CLASSIFICATIONS:classifications"),t.o(e),wn(n,t),this.g.attachProtoListener("classifications",(i,s)=>{this.j=function(r){const o={classifications:Bi(r,DE,1).map(a=>nu(Qe(a,jh,4)?.g()??[],Yn(Nn(a,2),0),ui(a,3)))};return Ba(as(r,2))!=null&&(o.timestampMs=Yn(Ba(as(r,2)),0)),o}(NE(i)),me(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pn.prototype.classifyForVideo=Pn.prototype.va,Pn.prototype.classify=Pn.prototype.ua,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(n,e){return Ke(Pn,n,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(n,e){return Ke(Pn,n,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(n,e){return Ke(Pn,n,e)};var Mn=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!0),this.h=new Wg,this.embeddings={embeddings:[]},Re(n=this.h,0,1,e=new Tt)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){var e=this.h,t=Qe(this.h,Vf,2);return t=t?t.clone():new Vf,n.l2Normalize!==void 0?_o(t,1,n.l2Normalize):"l2Normalize"in n&&pt(t,1),n.quantize!==void 0?_o(t,2,n.quantize):"quantize"in n&&pt(t,2),Re(e,0,2,t),this.l(n)}Ba(n,e){return zn(this,n,e),this.embeddings}Ca(n,e,t){return yi(this,n,t,e),this.embeddings}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"embeddings_out");const e=new bn;Kn(e,JE,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"EMBEDDINGS:embeddings_out"),t.o(e),wn(n,t),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=kE(i),this.embeddings=function(r){return{embeddings:Bi(r,OE,1).map(o=>{const a={headIndex:Yn(Nn(o,3),0)??-1,headName:ui(o,4)??""};if(km(o,Wl,fl(o,1))!==void 0)o=ir(o=Qe(o,Wl,fl(o,1)),1,us),a.floatEmbedding=o.slice();else{const c=new Uint8Array(0);a.quantizedEmbedding=Qe(o,FE,fl(o,2))?.qa()?.h()??c}return a}),timestampMs:Yn(Ba(as(r,2)),0)}}(i),me(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Mn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=jf(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=jf(Xf(n.quantizedEmbedding),Xf(e.quantizedEmbedding))}return n},Mn.prototype.embedForVideo=Mn.prototype.Ca,Mn.prototype.embed=Mn.prototype.Ba,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(n,e){return Ke(Mn,n,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(n,e){return Ke(Mn,n,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(n,e){return Ke(Mn,n,e)};var Kl=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function hp(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function up(n){try{const e=new Kl(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{dc(n)}}Kl.prototype.close=Kl.prototype.close;var dn=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new eu,this.v=new Xg,Re(this.h,0,3,this.v),Re(n=this.h,0,1,e=new Tt)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,Br(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}L(){(function(n){const e=Bi(n.fa(),tn,1).filter(t=>ui(t,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(Qe(e[0],bn,7)?.l()?.g()??new Map).forEach((t,i)=>{n.u[Number(i)]=ui(t,1)})})(this)}ga(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,hp(this),zn(this,n,i),up(this)}Na(n,e,t,i){const s=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,hp(this),yi(this,n,s,e),up(this)}Fa(){return this.u}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect");const e=new bn;Kn(e,qg,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),t.o(e),wn(n,t),uc(this,n),this.outputConfidenceMasks&&(et(n,"confidence_masks"),Ze(t,"CONFIDENCE_MASKS:confidence_masks"),br(this,"confidence_masks"),this.g.da("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Rr(this,r,!0,!this.j)),me(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(et(n,"category_mask"),Ze(t,"CATEGORY_MASK:category_mask"),br(this,"category_mask"),this.g.W("category_mask",(i,s)=>{this.categoryMask=Rr(this,i,!1,!this.j),me(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),et(n,"quality_scores"),Ze(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,me(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};dn.prototype.getLabels=dn.prototype.Fa,dn.prototype.segmentForVideo=dn.prototype.Na,dn.prototype.segment=dn.prototype.ga,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(n,e){return Ke(dn,n,{baseOptions:{modelAssetPath:e}})},dn.createFromModelBuffer=function(n,e){return Ke(dn,n,{baseOptions:{modelAssetBuffer:e}})},dn.createFromOptions=function(n,e){return Ke(dn,n,e)};var $l=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};$l.prototype.close=$l.prototype.close;var o3=class extends ye{constructor(n){super(n)}},Cr=[0,Lt,-2],a3=[0,Ni,-3,Ut],gc=[0,Ni,-3,Ut,Ni,-1],l0=[0,gc],c3=[0,l0,Cr],l3=[0,gc,Cr],h0=[0,gc,Lt,-1],h3=[0,h0,Cr],u3=[0,Ni,-3,Ut,Cr,-1],d3=[0,Ni,-3,Ut,fi],_l=class extends ye{constructor(n){super(n)}},dp=[0,Ni,-1,Ut],u0=class extends ye{constructor(){super()}};u0.B=[1];var fp=class extends ye{constructor(n){super(n)}},Zl=[1,2,3,4,5,6,7,8,9,10,14,15],f3=[0,Zl,ut,gc,ut,l3,ut,l0,ut,c3,ut,dp,ut,d3,ut,a3,ut,[0,ht,Ni,-2,Ut,Lt,Ut,-1,2,Ni,Cr],ut,h0,ut,h3,Ni,Cr,ht,ut,u3,ut,[0,Bt,dp]],p3=[0,ht,Lt,-1,Ut],Jl=class extends ye{constructor(){super()}};Jl.B=[1],Jl.prototype.g=oc([0,Bt,f3,ht,p3]);var ni=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new eu,this.v=new Xg,Re(this.h,0,3,this.v),Re(n=this.h,0,1,e=new Tt)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ga(n,e,t,i){const s=typeof t!="function"?t:{};this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.J+1,i=new Jl;const r=new fp;var o=new o3;if(di(o,1,255),Re(r,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new _l;_o(a,3,!0),Se(a,1,e.keypoint.x),Se(a,2,e.keypoint.y),ao(r,5,Zl,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new u0,e.scribble))_o(e=new _l,3,!0),Se(e,1,a.x),Se(e,2,a.y),Ga(o,1,_l,e);ao(r,15,Zl,o)}Ga(i,1,fp,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",t),zn(this,n,s);e:{try{const l=new $l(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{dc(this)}c=void 0}return c}m(){var n=new un;xt(n,"image_in"),xt(n,"roi_in"),xt(n,"norm_rect_in");const e=new bn;Kn(e,qg,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),mt(t,"IMAGE:image_in"),mt(t,"ROI:roi_in"),mt(t,"NORM_RECT:norm_rect_in"),t.o(e),wn(n,t),uc(this,n),this.outputConfidenceMasks&&(et(n,"confidence_masks"),Ze(t,"CONFIDENCE_MASKS:confidence_masks"),br(this,"confidence_masks"),this.g.da("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Rr(this,r,!0,!this.j)),me(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(et(n,"category_mask"),Ze(t,"CATEGORY_MASK:category_mask"),br(this,"category_mask"),this.g.W("category_mask",(i,s)=>{this.categoryMask=Rr(this,i,!1,!this.j),me(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),et(n,"quality_scores"),Ze(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,me(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ni.prototype.segment=ni.prototype.ga,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(n,e){return Ke(ni,n,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(n,e){return Ke(ni,n,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(n,e){return Ke(ni,n,e)};var In=class extends pn{constructor(n,e){super(new Hn(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Re(n=this.h=new tu,0,1,e=new Tt)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,Br(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),n.maxResults!==void 0?di(this.h,3,n.maxResults):"maxResults"in n&&pt(this.h,3),n.scoreThreshold!==void 0?Se(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&pt(this.h,4),n.categoryAllowlist!==void 0?za(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&pt(this.h,5),n.categoryDenylist!==void 0?za(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&pt(this.h,6),this.l(n)}F(n,e){return this.j={detections:[]},zn(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},yi(this,n,t,e),this.j}m(){var n=new un;xt(n,"input_frame_gpu"),xt(n,"norm_rect"),et(n,"detections");const e=new bn;Kn(e,e3,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.ObjectDetectorGraph"),mt(t,"IMAGE:input_frame_gpu"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"DETECTIONS:detections"),t.o(e),wn(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=pg(r),this.j.detections.push(Kg(i));me(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};In.prototype.detectForVideo=In.prototype.G,In.prototype.detect=In.prototype.F,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=async function(n,e){return Ke(In,n,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(n,e){return Ke(In,n,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(n,e){return Ke(In,n,e)};var Ql=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function pp(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function mp(n){try{const e=new Ql(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.j)return e;n.j(e)}finally{dc(n)}}Ql.prototype.close=Ql.prototype.close;var Sn=class extends pn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Re(n=this.h=new Yg,0,1,e=new Tt),this.D=new zg,Re(this.h,0,3,this.D),this.v=new Hg,Re(this.h,0,2,this.v),di(this.v,4,1),Se(this.v,2,.5),Se(this.D,2,.5),Se(this.h,4,.5)}get baseOptions(){return Qe(this.h,Tt,1)}set baseOptions(n){Re(this.h,0,1,n)}o(n){return"numPoses"in n&&di(this.v,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Se(this.v,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Se(this.D,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,pp(this),zn(this,n,i),mp(this)}G(n,e,t,i){const s=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,pp(this),yi(this,n,s,e),mp(this)}m(){var n=new un;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"normalized_landmarks"),et(n,"world_landmarks"),et(n,"segmentation_masks");const e=new bn;Kn(e,t3,this.h);const t=new tn;An(t,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"NORM_LANDMARKS:normalized_landmarks"),Ze(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),wn(n,t),uc(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(const r of i)i=Co(r),this.landmarks.push(hc(i));me(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],me(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(const r of i)i=cr(r),this.worldLandmarks.push(ho(i));me(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],me(this,i)}),this.outputSegmentationMasks&&(Ze(t,"SEGMENTATION_MASK:segmentation_masks"),br(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Rr(this,r,!0,!this.j)),me(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],me(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(n,e){return Ke(Sn,n,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(n,e){return Ke(Sn,n,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(n,e){return Ke(Sn,n,e)},Sn.POSE_CONNECTIONS=c0;const gp=1,m3="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",_p="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";class g3{constructor(e){oe(this,"faceLandmarker",null);oe(this,"video");oe(this,"overlay");oe(this,"overlayCtx");oe(this,"showOverlay");oe(this,"onFrame");oe(this,"onReady");oe(this,"onError");oe(this,"running",!1);oe(this,"rafId",null);oe(this,"stream",null);oe(this,"lastVideoTime",-1);oe(this,"perf");oe(this,"lastSendTime",0);oe(this,"loop",()=>{if(!this.running||!this.faceLandmarker){this.rafId=requestAnimationFrame(this.loop);return}if(this.video.readyState>=2&&this.video.videoWidth>0){const e=performance.now(),t=e-this.lastSendTime,i=this.perf.faceThrottleMs;if(t>=i&&this.video.currentTime!==this.lastVideoTime){this.lastSendTime=e,this.lastVideoTime=this.video.currentTime;try{const s=this.faceLandmarker.detectForVideo(this.video,e);this.onResults(s)}catch{}}}this.rafId=requestAnimationFrame(this.loop)});this.video=e.video,this.overlay=e.overlayCanvas,this.showOverlay=!!e.showOverlay,this.onFrame=e.onFrame,this.onReady=e.onReady,this.onError=e.onError,this.perf=e.performance??{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:50,handNumHands:2,handUseGpu:!0,minAcceptableFps:30},this.overlay&&(this.overlayCtx=this.overlay.getContext("2d")??void 0)}async init(){try{const e=await Yi.forVisionTasks(m3),t=this.perf.faceUseGpu?"GPU":"CPU";console.log(`📷 FaceTracker: delegate inicial=${t}, video=${this.perf.videoWidth}x${this.perf.videoHeight}, throttle=${this.perf.faceThrottleMs}ms`);try{this.faceLandmarker=await Mt.createFromOptions(e,{baseOptions:{modelAssetPath:_p,delegate:t},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1})}catch(i){console.warn("⚠️ FaceTracker GPU delegate falló, reintentando con CPU:",i),this.faceLandmarker=await Mt.createFromOptions(e,{baseOptions:{modelAssetPath:_p,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1})}this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:this.perf.videoWidth},height:{ideal:this.perf.videoHeight}},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.onReady?.()}catch(e){this.onError?.(e instanceof Error?e:new Error(String(e)))}}onResults(e){if(!e.faceLandmarks||e.faceLandmarks.length===0){this.onFrame?.({x:.5,y:.5,detected:!1}),this.clearOverlay();return}const t=e.faceLandmarks[0],i=t[gp];if(!i){this.onFrame?.({x:.5,y:.5,detected:!1}),this.clearOverlay();return}this.onFrame?.({x:i.x,y:i.y,detected:!0}),this.showOverlay&&this.drawOverlay(t)}drawOverlay(e){if(!this.overlay||!this.overlayCtx)return;const t=this.overlay.width,i=this.overlay.height;this.overlayCtx.clearRect(0,0,t,i),this.overlayCtx.fillStyle="#FFC72C";for(const r of e)this.overlayCtx.beginPath(),this.overlayCtx.arc(r.x*t,r.y*i,1.2,0,Math.PI*2),this.overlayCtx.fill();const s=e[gp];s&&(this.overlayCtx.fillStyle="#DA291C",this.overlayCtx.beginPath(),this.overlayCtx.arc(s.x*t,s.y*i,5,0,Math.PI*2),this.overlayCtx.fill())}clearOverlay(){!this.overlay||!this.overlayCtx||this.overlayCtx.clearRect(0,0,this.overlay.width,this.overlay.height)}start(){this.running=!0,this.rafId===null&&(this.rafId=requestAnimationFrame(this.loop))}stop(){if(this.running=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.faceLandmarker){try{this.faceLandmarker.close()}catch{}this.faceLandmarker=null}}setShowOverlay(e){this.showOverlay=e,e||this.clearOverlay()}}const vp=4,_3=8,v3=6,xp=5,x3=12,y3=10,M3=16,S3=14,E3=20,T3=18,b3=9,A3=.06,w3="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",yp="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";class R3{constructor(e){oe(this,"handLandmarker",null);oe(this,"video");oe(this,"onFrame");oe(this,"onReady");oe(this,"onError");oe(this,"running",!1);oe(this,"rafId",null);oe(this,"perf");oe(this,"confirmWasActive",!1);oe(this,"lastSendTime",0);oe(this,"lastVideoTime",-1);oe(this,"loop",()=>{if(!this.running){this.rafId=requestAnimationFrame(this.loop);return}const e=performance.now();if(this.handLandmarker&&e-this.lastSendTime>=this.perf.handThrottleMs&&this.video.readyState>=2&&this.video.videoWidth>0&&this.video.currentTime!==this.lastVideoTime){this.lastSendTime=e,this.lastVideoTime=this.video.currentTime;try{const t=this.handLandmarker.detectForVideo(this.video,e);this.onResults(t)}catch{}}this.rafId=requestAnimationFrame(this.loop)});this.video=e.video,this.onFrame=e.onFrame,this.onReady=e.onReady,this.onError=e.onError,this.perf=e.performance??{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:50,handNumHands:2,handUseGpu:!0,minAcceptableFps:30}}async init(){try{const e=await Yi.forVisionTasks(w3),t=this.perf.handUseGpu?"GPU":"CPU",i=this.perf.handNumHands;console.log(`✋ HandTracker: delegate inicial=${t}, numHands=${i}, throttle=${this.perf.handThrottleMs}ms`);try{this.handLandmarker=await on.createFromOptions(e,{baseOptions:{modelAssetPath:yp,delegate:t},runningMode:"VIDEO",numHands:i,minHandDetectionConfidence:.6,minHandPresenceConfidence:.5,minTrackingConfidence:.5})}catch(s){console.warn("⚠️ HandTracker GPU delegate falló, reintentando con CPU:",s),this.handLandmarker=await on.createFromOptions(e,{baseOptions:{modelAssetPath:yp,delegate:"CPU"},runningMode:"VIDEO",numHands:i,minHandDetectionConfidence:.6,minHandPresenceConfidence:.5,minTrackingConfidence:.5})}this.onReady?.()}catch(e){this.onError?.(e instanceof Error?e:new Error(String(e)))}}start(){this.running=!0,this.rafId===null&&(this.rafId=requestAnimationFrame(this.loop))}stop(){if(this.running=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.handLandmarker){try{this.handLandmarker.close()}catch{}this.handLandmarker=null}}onResults(e){if(!e.landmarks||e.landmarks.length===0){this.onFrame?.({detected:!1,isActive:!1,cursorX:.5,cursorY:.5,confirm:!1,handedness:""}),this.confirmWasActive=!1;return}let t=0,i="Right";if(e.handednesses&&e.handednesses.length>1){let _=!1;for(let m=0;m<e.handednesses.length;m++){const f=e.handednesses[m];if(f&&f.length>0&&f[0].categoryName==="Right"){t=m,i="Right",_=!0;break}}if(!_){t=0;const m=e.handednesses[0];i=m&&m[0]?m[0].categoryName:"Right"}}else if(e.handednesses&&e.handednesses.length===1){const _=e.handednesses[0];i=_&&_[0]?_[0].categoryName:"Right"}const s=e.landmarks[t],r=s[_3].y<s[v3].y+.005,o=s[x3].y<s[y3].y+.005;s[M3].y<s[S3].y-.01,s[E3].y<s[T3].y-.01;const c=Math.hypot(s[vp].x-s[xp].x,s[vp].y-s[xp].y)>A3,l=r&&o,h=l&&c,u=s[b3],d=1-u.x,p=u.y;let g=!1;h&&!this.confirmWasActive&&(g=!0),this.confirmWasActive=h,this.onFrame?.({detected:!0,isActive:l,cursorX:d,cursorY:p,confirm:g,handedness:i})}}class C3{constructor(){oe(this,"el");oe(this,"visible",!1);oe(this,"hovering",!1);oe(this,"currentX",0);oe(this,"currentY",0);this.el=document.createElement("div"),this.el.id="gesture-cursor",this.el.style.cssText=["position: fixed","top: 0","left: 0","width: 24px","height: 24px","border-radius: 50%","background: rgba(255, 34, 34, 0.85)","border: 2px solid #fff","box-shadow: 0 0 12px rgba(255, 0, 0, 0.8), 0 0 4px rgba(0,0,0,0.5)","pointer-events: none","z-index: 870","transform: translate(-50%, -50%)","opacity: 0","transition: opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease","will-change: transform, opacity"].join(";"),document.body.appendChild(this.el)}setVisible(e){e!==this.visible&&(this.visible=e,this.el.style.opacity=e?"1":"0")}setHovering(e){e!==this.hovering&&(this.hovering=e,e?(this.el.style.background="rgba(52, 199, 89, 0.9)",this.el.style.width="28px",this.el.style.height="28px",this.el.style.boxShadow="0 0 14px rgba(52, 199, 89, 0.9), 0 0 4px rgba(0,0,0,0.5)"):(this.el.style.background="rgba(255, 34, 34, 0.85)",this.el.style.width="24px",this.el.style.height="24px",this.el.style.boxShadow="0 0 12px rgba(255, 0, 0, 0.8), 0 0 4px rgba(0,0,0,0.5)"))}setPosition(e,t){this.currentX=e,this.currentY=t,this.el.style.transform=`translate(${e}px, ${t}px) translate(-50%, -50%)`}pulse(){this.el.style.transition="transform 0.1s ease-out, opacity 0.15s ease",this.el.style.transform=`translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%) scale(1.6)`,setTimeout(()=>{this.el.style.transition="opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease",this.el.style.transform=`translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`},180)}}const L3=[{emoji:"💰",title:"Mostrador",description:"Hacé tu pedido aquí. Atención al cliente y cajas para pagar.",keywords:["mostrador","counter","caja","cashier","tilde","checkout","register"]},{emoji:"🖥️",title:"Kiosk",description:"Pedidos self-service. Tocá la pantalla para armar tu pedido.",keywords:["kiosk","kiosco","pantalla","screen","touchscreen","totem","tótem"]},{emoji:"🪑",title:"Mesa",description:"Comedor principal. Sentate y disfrutá tu pedido.",keywords:["mesa","table","chair","silla","banqueta","asiento","seat","booth"]},{emoji:"👨‍🍳",title:"Cocina",description:"Preparación de pedidos. Zona restringida al personal.",keywords:["cocina","kitchen","grill","parrilla","freidora","fryer","horno","oven"]},{emoji:"🚻",title:"Baños",description:"Zona de servicios. WC para clientes.",keywords:["baño","bano","bathroom","toilet","wc","restroom","lavabo"]},{emoji:"🚪",title:"Puerta",description:"Salida del local. Mirala para salir de la experiencia.",keywords:["puerta","door","exit","salida","entrance","entrada"]},{emoji:"🍔",title:"Menú",description:"Cartel con el menú del local. Burgers, papas, postres y más.",keywords:["menu","menú","cartel","sign","board","carta","mccafe"]},{emoji:"🚗",title:"Drive-Thru",description:"Pedidos desde el auto. Zona exterior.",keywords:["drive","drivethru","auto","car"]},{emoji:"🧒",title:"Zona infantil",description:"Espacio para los más chicos. Juegos y diversión.",keywords:["play","playground","infantil","kids","niños","ninos","mccafe"]}];function P3(n){const e=n.toLowerCase();for(const t of L3)for(const i of t.keywords)if(e.includes(i))return t;return null}function I3(n){let e=n,t=0;for(;e&&t<10;){if(e.name){const i=P3(e.name);if(i)return i}e=e.parent,t++}return null}class D3{constructor(){oe(this,"overlay");oe(this,"card");oe(this,"onClose");this.overlay=document.createElement("div"),this.overlay.id="object-info-popup",this.overlay.style.cssText=["position: fixed","inset: 0","background: rgba(0,0,0,0.65)","backdrop-filter: blur(6px)","-webkit-backdrop-filter: blur(6px)","display: flex","align-items: center","justify-content: center","z-index: 960","opacity: 0","pointer-events: none","transition: opacity 0.2s ease"].join(";"),this.card=document.createElement("div"),this.card.style.cssText=["background: linear-gradient(180deg, #1f1f1f 0%, #2a2a2a 100%)","border: 1px solid rgba(255,199,44,0.4)","border-radius: 18px","padding: 1.6rem 1.4rem","max-width: 340px","width: 86%","text-align: center","box-shadow: 0 20px 60px rgba(0,0,0,0.6)","transform: scale(0.9)","transition: transform 0.2s ease","font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif","color: #fff"].join(";"),this.overlay.appendChild(this.card),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay)}show(e,t,i,s){this.card.innerHTML=`
      <div style="font-size: 2.4rem; margin-bottom: 0.5rem;">${e}</div>
      <div style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; color: #FFC72C;">${t}</div>
      <div style="font-size: 0.88rem; color: #ccc; line-height: 1.5; margin-bottom: 1rem;">${i}</div>
      ${s?`<div style="font-size: 0.7rem; color: #666; font-family: monospace; margin-bottom: 0.8rem;">${s}</div>`:""}
      <button id="obj-info-close" style="
        background: linear-gradient(90deg, #DA291C, #FFC72C);
        color: #fff;
        font-weight: 700;
        font-size: 0.95rem;
        padding: 0.7rem 1.6rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(218,41,28,0.4);
      ">Cerrar</button>
    `,this.card.querySelector("#obj-info-close")?.addEventListener("click",()=>this.hide()),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",this.card.style.transform="scale(1)"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",this.card.style.transform="scale(0.9)",this.onClose?.()}isOpen(){return this.overlay.style.pointerEvents==="auto"}setOnClose(e){this.onClose=e}}const U3=[{emoji:"🍔",title:"Hamburguesas",items:[{emoji:"🍔",name:"Big Mac",description:"Doble carne, queso, lechuga, pepino, salsa Big Mac",price:"$U 590",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg"},{emoji:"🍔",name:"Cuarto de Libra",description:"Carne 113g, queso cheddar, cebolla, pepinillos, ketchup",price:"$U 650",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg"},{emoji:"🍔",name:"Doble Cuarto de Libra",description:"Doble carne 226g, doble queso, mostaza, cebolla, pepinillos",price:"$U 790",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.jpg"},{emoji:"🍔",name:"Cheeseburger",description:"Carne, queso cheddar, cebolla, pepinillos, mostaza, ketchup",price:"$U 290",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg"},{emoji:"🍔",name:"McDouble",description:"Doble carne, queso, cebolla, pepinillos, mostaza, ketchup",price:"$U 390",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McDouble.jpg"},{emoji:"🍔",name:"Hamburguesa Simple",description:"Carne, cebolla, pepinillos, mostaza, ketchup",price:"$U 240",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg"},{emoji:"🐷",name:"McPork Deluxe",description:"Cerdo grillado, queso, lechuga, mayonesa",price:"$U 590",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg"}]},{emoji:"🐔",title:"Pollo",items:[{emoji:"🐔",name:"McChicken",description:"Pollo crujiente, lechuga, mayonesa",price:"$U 540",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McChicken-Sandwich.jpg"},{emoji:"🐟",name:"Filete-O-Fish",description:"Pescado rebozado, queso, salsa tártara",price:"$U 520",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Filet-O-Fish.jpg"},{emoji:"🍗",name:"McNuggets (6u)",description:"6 nuggets de pollo crujientes con salsa a elección",price:"$U 390",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Chicken-McNuggets-6-piece.jpg"},{emoji:"🍗",name:"McNuggets (10u)",description:"10 nuggets de pollo crujientes con salsa a elección",price:"$U 590",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Chicken-McNuggets-10-piece.jpg"},{emoji:"🥪",name:"Crispy Chicken Deluxe",description:"Pollo crujiente, tomate, lechuga, queso, mayonesa",price:"$U 690",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Deluxe-Crispy-Chicken-Sandwich.jpg"}]},{emoji:"🍟",title:"Acompañamientos",items:[{emoji:"🍟",name:"Papas Fritas Medianas",description:"Las clásicas papas crujientes doradas",price:"$U 220",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-French-Fries.jpg"},{emoji:"🍟",name:"Papas Fritas Grandes",description:"Porción grande de las clásicas papas crujientes",price:"$U 290",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Large-French-Fries.jpg"},{emoji:"🧀",name:"Papas con Cheddar",description:"Papas fritas con salsa de queso cheddar",price:"$U 320",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-French-Fries.jpg"},{emoji:"🥗",name:"Ensalada César",description:"Lechuga, pollo grillado, croutones, parmesano, salsa césar",price:"$U 490",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Caesar-Salad-with-Grilled-Chicken.jpg"},{emoji:"🧅",name:"Aros de Cebolla (6u)",description:"6 aros de cebolla rebozados, crujientes",price:"$U 290",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-French-Fries.jpg"}]},{emoji:"🥤",title:"Bebidas",items:[{emoji:"🥤",name:"Coca-Cola",description:"Refresco de cola. Tamaños: chico / mediano / grande",price:"$U 220",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Coca-Cola.jpg"},{emoji:"🥤",name:"Sprite",description:"Refresco de limón-lima. Sin cafeína",price:"$U 220",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Sprite.jpg"},{emoji:"🥤",name:"Fanta Naranja",description:"Refresco de naranja. Sabor cítrico",price:"$U 220",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Fanta-Orange.jpg"},{emoji:"💧",name:"Agua Mineral",description:"Agua sin gas. Botella 500ml",price:"$U 180",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Dasani-Water.jpg"},{emoji:"🧊",name:"Limonada Frozen",description:"Limonada frappeada con hielo. Sabores: clásica / frutilla",price:"$U 320",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Minute-Maid-Slushie-Lemonade.jpg"}]},{emoji:"☕",title:"McCafé",items:[{emoji:"☕",name:"Café Americano",description:"Café caliente, intenso. Tamaño mediano",price:"$U 240",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Premium-Roast-Coffee.jpg"},{emoji:"🥛",name:"McCafé Latte",description:"Espresso con leche vaporizada. Varios sabores",price:"$U 380",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Latte.jpg"},{emoji:"🍫",name:"McCafé Mocha",description:"Espresso, leche, chocolate vaporizado. Crema de leche",price:"$U 410",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Mocha.jpg"},{emoji:"☕",name:"Capuchino",description:"Espresso con espuma de leche cremosa",price:"$U 360",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cappuccino.jpg"}]},{emoji:"🍦",title:"Postres",items:[{emoji:"🍦",name:"Helado de Vainilla",description:"Cono de helado cremoso de vainilla",price:"$U 150",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Vanilla-Cone.jpg"},{emoji:"🍦",name:"Sundae Chocolate",description:"Helado de vainilla con salsa de chocolate",price:"$U 240",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hot-Fudge-Sundae.jpg"},{emoji:"🍦",name:"Sundae Fresa",description:"Helado de vainilla con salsa de frutilla",price:"$U 240",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Strawberry-Sundae.jpg"},{emoji:"🥧",name:"Tarta de Manzana",description:"Tarta caliente de manzana con canela",price:"$U 190",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Apple-Pie.jpg"},{emoji:"🍫",name:"Brownie MCFlurry",description:"Helado de vainilla con trozos de brownie y salsa de chocolate",price:"$U 340",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McFlurry-with-Oreo-Cookies.jpg"}]},{emoji:"🍳",title:"Desayunos",items:[{emoji:"🥚",name:"McMuffin de Huevo",description:"Huevo, queso cheddar, jamón, pan inglés tostado",price:"$U 320",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg"},{emoji:"🥞",name:"Hotcakes",description:"3 panqueques con miel y manteca",price:"$U 290",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hotcakes.jpg"},{emoji:"🥐",name:"Medialuna",description:"Medialuna de manteca caliente",price:"$U 120",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg"}]},{emoji:"📦",title:"Combos",items:[{emoji:"🍔",name:"Combo Big Mac",description:"Big Mac + papas medianas + bebida mediana",price:"$U 890",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg"},{emoji:"🍔",name:"Combo Cuarto de Libra",description:"Cuarto de Libra + papas medianas + bebida mediana",price:"$U 950",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg"},{emoji:"🐔",name:"Combo McChicken",description:"McChicken + papas medianas + bebida mediana",price:"$U 840",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McChicken-Sandwich.jpg"},{emoji:"🍗",name:"Combo McNuggets 6u",description:"6 McNuggets + papas medianas + bebida mediana",price:"$U 690",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Chicken-McNuggets-6-piece.jpg"}]}];class N3{constructor(){oe(this,"overlay");oe(this,"card");oe(this,"onClose");this.overlay=document.createElement("div"),this.overlay.id="menu-popup",this.overlay.style.cssText=["position: fixed","inset: 0","background: rgba(0,0,0,0.78)","backdrop-filter: blur(8px)","-webkit-backdrop-filter: blur(8px)","display: flex","align-items: center","justify-content: center","z-index: 970","opacity: 0","pointer-events: none","transition: opacity 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"].join(";"),this.card=document.createElement("div"),this.card.style.cssText=["background: linear-gradient(180deg, #1f1f1f 0%, #2a2a2a 100%)","border: 1px solid rgba(255,199,44,0.5)","border-radius: 18px","padding: 1.2rem 1rem 1rem","max-width: 460px","width: 92%","max-height: 85vh","overflow-y: auto","box-shadow: 0 20px 60px rgba(0,0,0,0.7)","transform: scale(0.9) translateY(20px)","transition: transform 0.25s ease","color: #fff","-webkit-overflow-scrolling: touch"].join(";"),this.overlay.appendChild(this.card),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay)}show(){this.render(),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",this.card.style.transform="scale(1) translateY(0)"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",this.card.style.transform="scale(0.9) translateY(20px)",this.onClose?.()}isOpen(){return this.overlay.style.pointerEvents==="auto"}setOnClose(e){this.onClose=e}render(){const e=`
      <div style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.7rem;
        margin-bottom: 0.6rem;
        border-bottom: 1px solid rgba(255,199,44,0.3);
      ">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size: 1.6rem;">🍔</span>
          <div style="display:flex; flex-direction:column; line-height:1.1;">
            <span style="font-size: 1.1rem; font-weight: 800; color: #FFC72C;">Menú McDonald's</span>
            <span style="font-size: 0.65rem; color: #aaa; font-weight: 500;">Precios en pesos uruguayos ($U)</span>
          </div>
        </div>
        <button id="menu-close-btn" style="
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          width: 32px; height: 32px;
          font-size: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          padding: 0;
        ">×</button>
      </div>
    `,t=U3.map((a,c)=>{const l=a.items.map(h=>`
        <div style="
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          padding: 0.6rem 0.5rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 0.4rem;
        ">
          <div class="menu-item-img-wrap" style="
            width: 56px; height: 56px;
            flex-shrink: 0;
            border-radius: 10px;
            overflow: hidden;
            background: rgba(255,199,44,0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            border: 1px solid rgba(255,199,44,0.25);
            position: relative;
          ">
            ${h.image?`<img src="${h.image}" alt="${h.name}" loading="lazy" style="
                  width: 100%; height: 100%; object-fit: cover;
                  display: block;
                  position: absolute; inset: 0;
                " onerror="this.style.display='none'; this.parentElement.setAttribute('data-fallback','1');" />`:""}
            <span class="menu-item-emoji" style="font-size: 1.8rem; ${h.image?"display:none;":""}">${h.emoji}</span>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              gap: 0.5rem;
            ">
              <span style="font-weight: 700; font-size: 0.92rem; color: #fff;">${h.name}</span>
              <span style="font-weight: 800; color: #FFC72C; font-size: 0.95rem; flex-shrink: 0;">${h.price}</span>
            </div>
            <div style="font-size: 0.74rem; color: #aaa; line-height: 1.4; margin-top: 0.15rem;">
              ${h.description}
            </div>
          </div>
        </div>
      `).join("");return`
        <div class="menu-category" data-idx="${c}" style="margin-bottom: 0.8rem;">
          <button class="menu-cat-header" data-idx="${c}" style="
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.7rem 0.8rem;
            background: linear-gradient(90deg, rgba(218,41,28,0.85), rgba(255,199,44,0.7));
            border: none;
            border-radius: 10px;
            color: #fff;
            font-weight: 800;
            font-size: 0.95rem;
            cursor: pointer;
            text-shadow: 0 1px 2px rgba(0,0,0,0.4);
            margin-bottom: ${c===0?"0.5rem":"0"};
          ">
            <span style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size: 1.2rem;">${a.emoji}</span>
              <span>${a.title}</span>
              <span style="
                font-size: 0.7rem;
                background: rgba(0,0,0,0.35);
                padding: 0.1rem 0.5rem;
                border-radius: 8px;
                font-weight: 600;
              ">${a.items.length}</span>
            </span>
            <span class="menu-cat-chevron" data-idx="${c}" style="
              font-size: 0.9rem;
              transition: transform 0.2s ease;
              display: inline-block;
            ">▾</span>
          </button>
          <div class="menu-cat-body" data-idx="${c}" style="
            padding-top: 0.4rem;
            max-height: ${c===0?"2000px":"0"};
            overflow: hidden;
            transition: max-height 0.3s ease;
          ">
            ${l}
          </div>
        </div>
      `}).join(""),i=`
      <div style="
        margin-top: 0.6rem;
        padding-top: 0.7rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        font-size: 0.7rem;
        color: #666;
        text-align: center;
      ">
        Precios referenciales en pesos uruguayos ($U) · Demo para inversores<br/>
        Las imágenes son referenciales y pueden no coincidir con el producto real.
      </div>
    `;this.card.innerHTML=e+t+i,this.card.querySelector("#menu-close-btn")?.addEventListener("click",()=>this.hide()),this.card.querySelectorAll(".menu-cat-header").forEach(a=>{a.addEventListener("click",c=>{const h=c.currentTarget.dataset.idx;h!==void 0&&this.toggleCategory(parseInt(h,10))})}),this.card.querySelectorAll(".menu-item-img-wrap").forEach(a=>{const c=()=>{if(a.getAttribute("data-fallback")==="1"){const l=a.querySelector(".menu-item-emoji");l&&(l.style.display="block")}};setTimeout(c,50),setTimeout(c,800)})}toggleCategory(e){const t=this.card.querySelector(`.menu-cat-body[data-idx="${e}"]`),i=this.card.querySelector(`.menu-cat-chevron[data-idx="${e}"]`);if(!t)return;t.style.maxHeight!=="0px"&&t.style.maxHeight!==""?(t.style.maxHeight="0px",i&&(i.style.transform="rotate(-90deg)")):(t.style.maxHeight="2000px",i&&(i.style.transform="rotate(0deg)"))}}class F3{constructor(e,t){oe(this,"scene");oe(this,"ui");oe(this,"popupActive",!1);oe(this,"touchHandler");this.scene=e,this.ui=t,this.touchHandler=i=>this.onTap(i),window.addEventListener("touchend",this.touchHandler,{passive:!0}),window.addEventListener("click",this.touchHandler)}onTap(e){if(this.popupActive||e.target instanceof HTMLElement&&e.target.closest("button, .popup-card, #instructions"))return;if(this.scene.isLookingAtDoor())this.showExitPopup();else{const i=this.scene.getLookedObject();if(i){const s=i.name||i.type||"objeto";this.ui.showToast(`No es la puerta (${s})`)}else this.ui.showToast("No hay nada allí")}}showExitPopup(){this.popupActive=!0,this.ui.showExitPopup();const e=document.getElementById("exit-yes"),t=document.getElementById("exit-no");if(!e||!t)return;const i=()=>{r(),this.ui.hideExitPopup(),this.ui.showEndScreen()},s=()=>{r(),this.ui.hideExitPopup(),this.popupActive=!1},r=()=>{e.removeEventListener("click",i),t.removeEventListener("click",s)};e.addEventListener("click",i),t.addEventListener("click",s)}resetFromEnd(){this.popupActive=!1}dispose(){window.removeEventListener("touchend",this.touchHandler),window.removeEventListener("click",this.touchHandler)}}class O3{constructor(){oe(this,"loader");oe(this,"startScreen");oe(this,"instructions");oe(this,"camDot");oe(this,"camLabel");oe(this,"calibrateBtn");oe(this,"toast");oe(this,"exitPopup");oe(this,"endScreen");oe(this,"camPreview");oe(this,"toastTimer",null);oe(this,"instructionsTimer",null);oe(this,"calibrateHandler");oe(this,"endRestartHandler");this.loader=document.getElementById("loader"),this.startScreen=document.getElementById("start-screen"),this.instructions=document.getElementById("instructions"),this.camDot=document.getElementById("cam-dot"),this.camLabel=document.getElementById("cam-label"),this.calibrateBtn=document.getElementById("calibrate-btn"),this.toast=document.getElementById("toast"),this.exitPopup=document.getElementById("exit-popup"),this.endScreen=document.getElementById("end-screen"),this.camPreview=document.getElementById("cam-preview"),this.calibrateHandler=()=>{},this.endRestartHandler=()=>{}}hideLoader(){this.loader.classList.add("hide"),setTimeout(()=>{this.loader.style.display="none"},700)}setLoaderText(e){const t=document.getElementById("loader-text");t&&(t.textContent=e)}showStartScreen(){this.startScreen.classList.remove("hide")}hideStartScreen(){this.startScreen.classList.add("hide")}onStart(e){const t=document.getElementById("start-btn"),i=()=>e();t.addEventListener("click",i,{once:!0})}showInstructions(){this.instructions.classList.remove("hide"),this.instructionsTimer!==null&&clearTimeout(this.instructionsTimer),this.instructionsTimer=window.setTimeout(()=>{this.instructions.classList.add("hide")},5e3)}hideInstructions(){this.instructions.classList.add("hide")}setCameraActive(e){e?(this.camDot.classList.add("active"),this.camLabel.textContent="CAM"):(this.camDot.classList.remove("active"),this.camLabel.textContent="OFF")}setCameraLabel(e){this.camLabel.textContent=e}onCalibrate(e){this.calibrateHandler=e,this.calibrateBtn.addEventListener("click",this.calibrateHandler)}showToast(e,t=1800){this.toast.textContent=e,this.toast.classList.add("visible"),this.toastTimer!==null&&clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toast.classList.remove("visible")},t)}showExitPopup(){this.exitPopup.classList.add("visible")}hideExitPopup(){this.exitPopup.classList.remove("visible")}showEndScreen(){this.endScreen.classList.add("visible")}hideEndScreen(){this.endScreen.classList.remove("visible")}onEndRestart(e){this.endRestartHandler=e,document.getElementById("end-restart").addEventListener("click",this.endRestartHandler)}showCamPreview(){this.camPreview.classList.add("visible")}hideCamPreview(){this.camPreview.classList.remove("visible")}dispose(){this.calibrateBtn.removeEventListener("click",this.calibrateHandler),this.toastTimer!==null&&clearTimeout(this.toastTimer),this.instructionsTimer!==null&&clearTimeout(this.instructionsTimer)}}function B3(){if(!("serviceWorker"in navigator)){console.warn("[PWA] Service Worker no soportado en este navegador.");return}const n="/mcdonalds-3d/sw.js",e="/mcdonalds-3d/";window.addEventListener("load",()=>{navigator.serviceWorker.controller||navigator.serviceWorker.register(n,{scope:e}).then(t=>{console.log("[PWA] Service Worker registrado:",t.scope)}).catch(t=>{console.warn("[PWA] Error registrando SW:",t)})})}const vl={low:{tier:"low",antialias:!1,pixelRatioMax:1,shadowsEnabled:!1,shadowMapSize:512,powerPreference:"low-power",numPointLights:0,numDirectionalLights:1,hemisphereLight:!0,videoWidth:240,videoHeight:180,faceThrottleMs:66,faceUseGpu:!1,handThrottleMs:100,handNumHands:1,handUseGpu:!1,minAcceptableFps:20},medium:{tier:"medium",antialias:!1,pixelRatioMax:1.5,shadowsEnabled:!0,shadowMapSize:1024,powerPreference:"high-performance",numPointLights:2,numDirectionalLights:2,hemisphereLight:!0,videoWidth:320,videoHeight:240,faceThrottleMs:50,faceUseGpu:!0,handThrottleMs:66,handNumHands:2,handUseGpu:!0,minAcceptableFps:25},high:{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:50,handNumHands:2,handUseGpu:!0,minAcceptableFps:30}};function k3(){const n=navigator.hardwareConcurrency??4,e=navigator.deviceMemory??8;let t="";try{const a=document.createElement("canvas"),c=a.getContext("webgl2")||a.getContext("webgl");if(c){const l=c.getExtension("WEBGL_debug_renderer_info");l&&(t=(c.getParameter(l.UNMASKED_RENDERER_WEBGL)||"").toLowerCase())}}catch{}const i=/intel.*hd graphics.*[12345]\d{3}/.test(t)||/intel.*hd graphics 4\d{3}/.test(t)||/intel.*hd graphics 5\d{3}/.test(t),s=/intel.*uhd|intel.*iris|intel.*arc/.test(t),r=/nvidia|radeon|amd|geforce|rtx|gtx|rx [0-9]/.test(t),o=/mali|adreno|powervr|apple gpu/.test(t);return i||n<4||e<4?"low":(r||s)&&n>=8&&e>=16?"high":o?"low":"medium"}function H3(){const e=new URLSearchParams(window.location.search).get("perf")?.toLowerCase();if(e==="low"||e==="medium"||e==="high")return console.log(`⚡ Performance override por URL: ${e}`),vl[e];try{const i=localStorage.getItem("mcdonalds-perf");if(i==="low"||i==="medium"||i==="high")return console.log(`⚡ Performance override por localStorage: ${i}`),vl[i]}catch{}const t=k3();return console.log(`⚡ Performance detectado: ${t} (cores=${navigator.hardwareConcurrency}, mem=${navigator.deviceMemory??"?"}GB, gpu="${z3()}"}`),vl[t]}let tr=null;function z3(){if(tr!==null)return tr;try{const n=document.createElement("canvas"),e=n.getContext("webgl2")||n.getContext("webgl");if(e){const t=e.getExtension("WEBGL_debug_renderer_info");if(t){const i=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return tr=(i?String(i):"").toLowerCase(),tr}}}catch{}return tr="unknown",tr}function G3(n){try{localStorage.setItem("mcdonalds-perf",n)}catch{}}function V3(){try{localStorage.removeItem("mcdonalds-perf")}catch{}}function Mp(){B3();const n=H3();console.log(`⚡ Performance inicial: ${n.tier.toUpperCase()}`);const e=new O3,t=document.getElementById("scene-canvas");let i;try{i=new _S({canvas:t,performance:n}),i.start()}catch(b){console.error("Error inicializando escena:",b),e.setLoaderText("Error: WebGL no disponible");return}const s=document.createElement("pre");s.id="debug-info",s.style.cssText=["position: fixed","top: max(12px, env(safe-area-inset-top))","left: max(12px, env(safe-area-inset-left))","padding: 8px 12px","background: rgba(0,0,0,0.7)","backdrop-filter: blur(6px)","-webkit-backdrop-filter: blur(6px)","border-radius: 10px","border: 1px solid rgba(255,199,44,0.4)","color: #FFC72C",'font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace',"font-size: 11px","line-height: 1.5","margin: 0","z-index: 850","pointer-events: none","white-space: pre","text-shadow: 0 1px 2px rgba(0,0,0,0.8)"].join(";"),document.body.appendChild(s);const r=document.createElement("div");r.id="head-indicator",r.style.cssText=["position: fixed","top: max(12px, env(safe-area-inset-top))","left: 50%","transform: translateX(-50%)","width: 80px","height: 80px","z-index: 860","pointer-events: none","display: flex","align-items: center","justify-content: center"].join(";"),r.innerHTML=`
    <div style="
      position: absolute;
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(128, 128, 128, 0.25);
      border: 1px solid rgba(128, 128, 128, 0.4);
      box-sizing: border-box;
    "></div>
    <div style="
      position: absolute;
      width: 24px; height: 24px;
      border-radius: 50%;
      background: rgba(128, 128, 128, 0.55);
      border: 1px solid rgba(80, 80, 80, 0.6);
      box-sizing: border-box;
    "></div>
    <div id="head-indicator-dot" style="
      position: absolute;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: #ff2222;
      box-shadow: 0 0 6px rgba(255, 0, 0, 0.7);
      transform: translate(0, 0);
      transition: transform 0.05s linear;
    "></div>
  `,document.body.appendChild(r);const o=document.getElementById("head-indicator-dot"),a=400,c=35;let l=null,h=null,u=null;const d=new C3,p=new D3,g=new N3;let _={detected:!1,isActive:!1,cursorX:.5,cursorY:.5,confirm:!1,handedness:""},m=0,f=!1,E={x:.5,y:.5,detected:!1};const M={x:.5,y:.5},T={DEAD_ZONE:.03,ACTIVATION_THRESHOLD_DEG:5,MAX_YAW_SPEED:2.5,MAX_WALK_SPEED:3,SMOOTHING:.15,DEG_FACTOR:90,EXCESS_NORM:45};window.__controlsConfig=T;let N=0,R=0;const w={forward:0,strafe:0},U=new Set;function S(){let b=0,ie=0;(U.has("KeyW")||U.has("ArrowUp"))&&(b+=1),(U.has("KeyS")||U.has("ArrowDown"))&&(b-=1),(U.has("KeyD")||U.has("ArrowRight"))&&(ie+=1),(U.has("KeyA")||U.has("ArrowLeft"))&&(ie-=1),w.forward=b,w.strafe=ie}window.addEventListener("keydown",b=>{if(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(b.code)&&(U.add(b.code),S(),b.preventDefault()),b.code==="Equal"||b.code==="NumpadAdd"){const ie=b.shiftKey?1:.3;i.adjustCameraHeight(ie),b.preventDefault()}else if(b.code==="Minus"||b.code==="NumpadSubtract"){const ie=b.shiftKey?1:.3;i.adjustCameraHeight(-ie),b.preventDefault()}else if(b.code==="KeyP"){const ie=i.getCameraInfo(),ge=`[PUNTO CAMARA] x=${ie.x.toFixed(3)}, y=${ie.y.toFixed(3)}, z=${ie.z.toFixed(3)}, yaw=${ie.yawDeg.toFixed(1)}°, pitch=${ie.pitchDeg.toFixed(1)}°`;console.log("%c"+ge,"color: #FFC72C; font-weight: bold; font-size: 14px;"),e.showToast(`📍 X=${ie.x.toFixed(2)} Y=${ie.y.toFixed(2)} Z=${ie.z.toFixed(2)} | Yaw=${ie.yawDeg.toFixed(0)}°`,4e3),b.preventDefault()}else b.code==="KeyT"&&(i.resetPosition(),i.applyRotation(0,0,1),e.showToast("🔄 Posición reseteada al centro del modelo",2e3),b.preventDefault())}),window.addEventListener("keyup",b=>{U.delete(b.code),S()}),window.addEventListener("blur",()=>{U.clear(),S()});const y=document.getElementById("joystick"),L=document.getElementById("joystick-knob");let z=!1,k={x:0,y:0};const j=50;if(y&&L){const b=(ae,Me)=>{L.style.transform=`translate(calc(-50% + ${ae}px), calc(-50% + ${Me}px))`},ie=()=>{b(0,0),k.x=0,k.y=0},ge=(ae,Me)=>{const we=y.getBoundingClientRect(),ft=we.left+we.width/2,A=we.top+we.height/2;let v=ae-ft,B=Me-A;const K=Math.hypot(v,B);K>j&&(v=v/K*j,B=B/K*j),b(v,B),k.x=v/j,k.y=-B/j};y.addEventListener("touchstart",ae=>{ae.preventDefault(),z=!0;const Me=ae.touches[0];ge(Me.clientX,Me.clientY)},{passive:!1}),y.addEventListener("touchmove",ae=>{if(!z)return;ae.preventDefault();const Me=ae.touches[0];ge(Me.clientX,Me.clientY)},{passive:!1});const be=()=>{z=!1,ie()};y.addEventListener("touchend",be),y.addEventListener("touchcancel",be);let te=!1;y.addEventListener("mousedown",ae=>{te=!0,z=!0,ge(ae.clientX,ae.clientY)}),window.addEventListener("mousemove",ae=>{te&&ge(ae.clientX,ae.clientY)}),window.addEventListener("mouseup",()=>{te&&(te=!1,z=!1,ie())})}const X=document.getElementById("height-up"),V=document.getElementById("height-down"),Y=.3,H=.15;if(X&&V){let b=null,ie=null;const ge=te=>{i.adjustCameraHeight(te),b=window.setTimeout(()=>{ie=window.setInterval(()=>{i.adjustCameraHeight(te>0?H:-H)},80)},400)},be=()=>{b!==null&&(clearTimeout(b),b=null),ie!==null&&(clearInterval(ie),ie=null)};X.addEventListener("touchstart",te=>{te.preventDefault(),ge(Y)},{passive:!1}),X.addEventListener("touchend",be),X.addEventListener("touchcancel",be),V.addEventListener("touchstart",te=>{te.preventDefault(),ge(-Y)},{passive:!1}),V.addEventListener("touchend",be),V.addEventListener("touchcancel",be),X.addEventListener("mousedown",te=>{te.preventDefault(),ge(Y)}),V.addEventListener("mousedown",te=>{te.preventDefault(),ge(-Y)}),window.addEventListener("mouseup",be)}let pe=performance.now();function ve(){const b=performance.now(),ie=Math.min((b-pe)/1e3,.1);pe=b;const ge=g.isOpen()||p.isOpen();if(!ge&&E.detected){let be=E.x-M.x,te=E.y-M.y;Math.abs(be)<T.DEAD_ZONE&&(be=0),Math.abs(te)<T.DEAD_ZONE&&(te=0);const ae=be*T.DEG_FACTOR,Me=te*T.DEG_FACTOR;let we=0;if(Math.abs(ae)>T.ACTIVATION_THRESHOLD_DEG){const A=(Math.abs(ae)-T.ACTIVATION_THRESHOLD_DEG)/T.EXCESS_NORM;we=Math.sign(be)*Math.min(A,1)*T.MAX_YAW_SPEED}let ft=0;if(Math.abs(Me)>T.ACTIVATION_THRESHOLD_DEG){const A=(Math.abs(Me)-T.ACTIVATION_THRESHOLD_DEG)/T.EXCESS_NORM;ft=Math.sign(te)*Math.min(A,1)*T.MAX_WALK_SPEED}N=N+(we-N)*T.SMOOTHING,R=R+(ft-R)*T.SMOOTHING,Math.abs(N)<.005&&(N=0),Math.abs(R)<.005&&(R=0),i.setControls(N,R,ie)}if(!ge){const be=w.forward+k.y,te=w.strafe+k.x;if(Math.abs(be)>.01||Math.abs(te)>.01){const ae=Math.max(-1,Math.min(1,be)),Me=Math.max(-1,Math.min(1,te));i.moveRelative(ae,Me,ie)}}if(s){const be=i.getCameraInfo();s.textContent=`X: ${be.x.toFixed(2)}  Y: ${be.y.toFixed(2)}  Z: ${be.z.toFixed(2)}
Yaw: ${be.yawDeg.toFixed(0)}°  Pitch: ${be.pitchDeg.toFixed(0)}°`}if(o){let be=E.detected?E.x-M.x:0,te=E.detected?E.y-M.y:0,ae=be*a,Me=te*a;const we=Math.hypot(ae,Me);we>c&&(ae=ae/we*c,Me=Me/we*c),o.style.transform=`translate(${ae}px, ${Me}px)`}if(u)if(d.setVisible(_.isActive),_.isActive){const be=_.cursorX*window.innerWidth,te=_.cursorY*window.innerHeight;d.setPosition(be,te);const ae=_.cursorX*2-1,Me=-(_.cursorY*2-1),we=i.getObjectAtScreenPoint(ae,Me),A=(we?I3(we):null)!==null;if(A!==f&&(d.setHovering(A),f=A),_.confirm){d.pulse();const v=performance.now();v>m&&(g.isOpen()?(g.hide(),m=v+400):p.isOpen()?(p.hide(),m=v+400):(g.show(),e.showToast("🍔 Menú abierto — tocá una categoría para expandir",2500),m=v+800))}}else f&&(d.setHovering(!1),f=!1);requestAnimationFrame(ve)}ve(),e.hideLoader(),e.showStartScreen(),e.onCalibrate(()=>{E.detected?(M.x=E.x,M.y=E.y,e.showToast("Centro recalibrado")):e.showToast("No se detecta tu rostro")}),e.onEndRestart(()=>{e.hideEndScreen(),h?.resetFromEnd?.(),i.applyRotation(0,0,1),i.resetPosition()}),e.onStart(async()=>{e.hideStartScreen(),e.setCameraActive(!1),e.setCameraLabel("INI...");const b="ontouchstart"in window||navigator.maxTouchPoints>0,ie=document.getElementById("joystick"),ge=document.getElementById("key-hint");b&&ie?.classList.add("visible"),ge?.classList.add("visible");const be=document.getElementById("cam-video"),te=document.getElementById("cam-overlay");te.width=n.videoWidth,te.height=n.videoHeight,l=new g3({video:be,overlayCanvas:te,showOverlay:!1,performance:n,onFrame:ae=>{E=ae},onReady:()=>{e.setCameraActive(!0),e.showInstructions(),e.showToast(`Cámara activa · Modo ${n.tier.toUpperCase()}`,2200)},onError:ae=>{console.error("FaceTracker error:",ae),e.setCameraActive(!1),e.setCameraLabel("ERR"),e.showToast("Error de cámara: "+ae.message,4e3)}});try{await l.init(),l.start(),h=new F3(i,e);try{u=new R3({video:be,performance:n,onFrame:ae=>{_=ae},onReady:()=>{console.log("✋ Hand tracker listo (mano derecha + 2 dedos → cursor)")},onError:ae=>{console.warn("⚠️ Hand tracker error:",ae.message)}}),await u.init(),u.start()}catch(ae){console.warn("⚠️ No se pudo iniciar hand tracking:",ae)}}catch(ae){console.error("Error iniciando tracker:",ae),e.showToast("No se pudo iniciar la cámara",3e3)}});const _e=document.getElementById("fps-badge"),Be=document.getElementById("perf-btn"),Je=document.getElementById("perf-popup");let G=0,J=performance.now(),ue=0;function re(){G++;const b=performance.now(),ie=b-J;if(ie>=500&&(ue=Math.round(G*1e3/ie),G=0,J=b,_e)){_e.textContent=`${ue} FPS`;const ge=n.minAcceptableFps;ue<ge-10?_e.className="bad":ue<ge?_e.className="warn":_e.className=""}requestAnimationFrame(re)}re();function Ve(){if(!Be)return;const b=new URLSearchParams(window.location.search).get("perf"),ie=(()=>{try{return localStorage.getItem("mcdonalds-perf")}catch{return null}})(),ge=b||ie;ge?(Be.textContent=`⚙️ MODO: ${ge.toUpperCase()}`,Be.className=`perf-btn ${ge}`):(Be.textContent=`⚙️ MODO: AUTO (${n.tier.toUpperCase()})`,Be.className="perf-btn")}Ve(),Be?.addEventListener("click",()=>{Je?.classList.add("visible");const b=new URLSearchParams(window.location.search).get("perf"),ie=(()=>{try{return localStorage.getItem("mcdonalds-perf")}catch{return null}})(),ge=b||ie||"auto";document.querySelectorAll(".perf-option").forEach(be=>{const te=be.getAttribute("data-tier");be.classList.toggle("active",te===ge)})}),Je?.addEventListener("click",b=>{b.target===Je&&Je.classList.remove("visible")}),document.querySelectorAll(".perf-option").forEach(b=>{b.addEventListener("click",()=>{const ie=b.getAttribute("data-tier");if(ie==="auto"){if(V3(),new URLSearchParams(window.location.search).has("perf")){const ge=new URL(window.location.href);ge.searchParams.delete("perf"),window.location.href=ge.toString();return}}else G3(ie);window.location.reload()})});let Oe=0,qe=!1;setInterval(()=>{ue>0&&ue<n.minAcceptableFps?(Oe++,Oe>=3&&!qe&&(qe=!0,e.showToast(`⚠️ FPS bajo (${ue}). Tocá "MODO" arriba a la derecha y probá "Rendimiento"`,6e3))):Oe=0},2e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mp):Mp();
