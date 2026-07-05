var S0=Object.defineProperty;var E0=(n,e,t)=>e in n?S0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Q=(n,e,t)=>E0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="165",b0=0,Tu=1,T0=2,A0=0,Rp=1,Cp=2,Ci=3,Bi=0,hn=1,ai=2,tr=0,ss=1,Au=2,wu=3,Ru=4,w0=5,Ar=100,R0=101,C0=102,L0=103,P0=104,I0=200,D0=201,U0=202,N0=203,El=204,bl=205,F0=206,O0=207,B0=208,k0=209,z0=210,H0=211,G0=212,V0=213,W0=214,X0=0,j0=1,q0=2,Ao=3,Y0=4,$0=5,K0=6,Z0=7,Lp=0,J0=1,Q0=2,nr=0,e_=1,t_=2,n_=3,Pp=4,i_=5,r_=6,s_=7,Cu="attached",a_="detached",Ip=300,hs=301,us=302,Tl=303,Al=304,jo=306,ds=1e3,Ji=1001,wo=1002,ln=1003,Dp=1004,ta=1005,bn=1006,go=1007,Ii=1008,rr=1009,o_=1010,c_=1011,Ro=1012,Up=1013,fs=1014,li=1015,qo=1016,Np=1017,Fp=1018,ps=1020,l_=35902,h_=1021,u_=1022,qn=1023,d_=1024,f_=1025,as=1026,ms=1027,Op=1028,Bp=1029,p_=1030,kp=1031,zp=1033,Ec=33776,bc=33777,Tc=33778,Ac=33779,Lu=35840,Pu=35841,Iu=35842,Du=35843,Uu=36196,Nu=37492,Fu=37496,Ou=37808,Bu=37809,ku=37810,zu=37811,Hu=37812,Gu=37813,Vu=37814,Wu=37815,Xu=37816,ju=37817,qu=37818,Yu=37819,$u=37820,Ku=37821,wc=36492,Zu=36494,Ju=36495,m_=36283,Qu=36284,ed=36285,td=36286,fa=2300,pa=2301,Rc=2302,nd=2400,id=2401,rd=2402,g_=2500,__=0,Hp=1,wl=2,v_=3200,x_=3201,Gp=0,y_=1,Ki="",Yt="srgb",Kt="srgb-linear",sh="display-p3",Yo="display-p3-linear",Co="linear",gt="srgb",Lo="rec709",Po="p3",Or=7680,sd=519,M_=512,S_=513,E_=514,Vp=515,b_=516,T_=517,A_=518,w_=519,Rl=35044,ad="300 es",Di=2e3,Io=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let od=1234567;const sa=Math.PI/180,gs=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function ah(n,e){return(n%e+e)%e}function R_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function C_(n,e,t){return n!==e?(t-n)/(e-n):0}function aa(n,e,t){return(1-t)*n+t*e}function L_(n,e,t,i){return aa(n,e,1-Math.exp(-t*i))}function P_(n,e=1){return e-Math.abs(ah(n,e*2)-e)}function I_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function D_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function U_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function N_(n,e){return n+Math.random()*(e-n)}function F_(n){return n*(.5-Math.random())}function O_(n){n!==void 0&&(od=n);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B_(n){return n*sa}function k_(n){return n*gs}function z_(n){return(n&n-1)===0&&n!==0}function H_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function G_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function V_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:sa,RAD2DEG:gs,generateUUID:Yn,clamp:en,euclideanModulo:ah,mapLinear:R_,inverseLerp:C_,lerp:aa,damp:L_,pingpong:P_,smoothstep:I_,smootherstep:D_,randInt:U_,randFloat:N_,randFloatSpread:F_,seededRandom:O_,degToRad:B_,radToDeg:k_,isPowerOfTwo:z_,ceilPowerOfTwo:H_,floorPowerOfTwo:G_,setQuaternionFromProperEuler:V_,normalize:at,denormalize:jn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],E=r[1],M=r[4],T=r[7],F=r[2],w=r[5],A=r[8];return s[0]=a*_+o*E+c*F,s[3]=a*m+o*M+c*w,s[6]=a*f+o*T+c*A,s[1]=l*_+h*E+u*F,s[4]=l*m+h*M+u*w,s[7]=l*f+h*T+u*A,s[2]=d*_+p*E+g*F,s[5]=d*m+p*M+g*w,s[8]=d*f+p*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new He;function Wp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function W_(){const n=ma("canvas");return n.style.display="block",n}const cd={};function oh(n){n in cd||(cd[n]=!0,console.warn(n))}function X_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ld=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hd=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ua={[Kt]:{transfer:Co,primaries:Lo,toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:gt,primaries:Lo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Yo]:{transfer:Co,primaries:Po,toReference:n=>n.applyMatrix3(hd),fromReference:n=>n.applyMatrix3(ld)},[sh]:{transfer:gt,primaries:Po,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hd),fromReference:n=>n.applyMatrix3(ld).convertLinearToSRGB()}},j_=new Set([Kt,Yo]),nt={enabled:!0,_workingColorSpace:Kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!j_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ua[e].toReference,r=Ua[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ua[n].primaries},getTransfer:function(n){return n===Ki?Co:Ua[n].transfer}};function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Br;class q_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=ma("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=os(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(os(t[i]/255)*255):t[i]=os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y_=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pc(r[a].image)):s.push(Pc(r[a]))}else s=Pc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class $t extends Ps{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Ji,r=Ji,s=bn,a=Ii,o=qn,c=rr,l=$t.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Yn(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Ip;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,T=(p+1)/2,F=(f+1)/2,w=(h+d)/4,A=(u+_)/4,D=(g+m)/4;return M>T&&M>F?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=A/i):T>F?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=w/r,s=D/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=A/s,r=D/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends Ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends K_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jp extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z_ extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-o;const f=c*d+l*p+h*g+u*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const F=Math.sqrt(M),w=Math.atan2(F,f*E);m=Math.sin(m*w)/F,o=Math.sin(o*w)/F}const T=o*E;if(c=c*m+d*T,l=l*m+p*T,h=h*m+g*T,u=u*m+_*T,m===1-o){const F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ud.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new P,ud=new ur;class On{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Fa.subVectors(this.max,Vs),kr.subVectors(e.a,Vs),zr.subVectors(e.b,Vs),Hr.subVectors(e.c,Vs),Hi.subVectors(zr,kr),Gi.subVectors(Hr,zr),gr.subVectors(kr,Hr);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-gr.z,gr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,gr.z,0,-gr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-gr.y,gr.x,0];return!Dc(t,kr,zr,Hr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,kr,zr,Hr,Fa))?!1:(Oa.crossVectors(Hi,Gi),t=[Oa.x,Oa.y,Oa.z],Dc(t,kr,zr,Hr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,Na=new On,kr=new P,zr=new P,Hr=new P,Hi=new P,Gi=new P,gr=new P,Vs=new P,Fa=new P,Oa=new P,_r=new P;function Dc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_r.fromArray(n,s);const o=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),c=e.dot(_r),l=t.dot(_r),h=i.dot(_r);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const J_=new On,Ws=new P,Uc=new P;class mi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):J_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Uc)),this.expandByPoint(Ws.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new P,Nc=new P,Ba=new P,Vi=new P,Fc=new P,ka=new P,Oc=new P;class xa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Nc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=Vi.dot(this.direction),c=-Vi.dot(Ba),l=Vi.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nc).addScaledVector(Ba,d),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){Fc.subVectors(t,e),ka.subVectors(i,e),Oc.crossVectors(Fc,ka);let a=this.direction.dot(Oc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vi.subVectors(this.origin,e);const c=o*this.direction.dot(ka.crossVectors(Vi,ka));if(c<0)return null;const l=o*this.direction.dot(Fc.cross(Vi));if(l<0||c+l>a)return null;const h=-o*Vi.dot(Oc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,r,s,a,o,c,l,h,u,d,p,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,u,d,p,g,_,m)}set(e,t,i,r,s,a,o,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,e1)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Wi.crossVectors(i,xn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Wi.crossVectors(i,xn)),Wi.normalize(),za.crossVectors(xn,Wi),r[0]=Wi.x,r[4]=za.x,r[8]=xn.x,r[1]=Wi.y,r[5]=za.y,r[9]=xn.y,r[2]=Wi.z,r[6]=za.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],M=i[7],T=i[11],F=i[15],w=r[0],A=r[4],D=r[8],b=r[12],x=r[1],L=r[5],G=r[9],k=r[13],Y=r[2],$=r[6],X=r[10],Z=r[14],W=r[3],ue=r[7],fe=r[11],me=r[15];return s[0]=a*w+o*x+c*Y+l*W,s[4]=a*A+o*L+c*$+l*ue,s[8]=a*D+o*G+c*X+l*fe,s[12]=a*b+o*k+c*Z+l*me,s[1]=h*w+u*x+d*Y+p*W,s[5]=h*A+u*L+d*$+p*ue,s[9]=h*D+u*G+d*X+p*fe,s[13]=h*b+u*k+d*Z+p*me,s[2]=g*w+_*x+m*Y+f*W,s[6]=g*A+_*L+m*$+f*ue,s[10]=g*D+_*G+m*X+f*fe,s[14]=g*b+_*k+m*Z+f*me,s[3]=E*w+M*x+T*Y+F*W,s[7]=E*A+M*L+T*$+F*ue,s[11]=E*D+M*G+T*X+F*fe,s[15]=E*b+M*k+T*Z+F*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*u-r*l*u-s*o*d+i*l*d+r*o*p-i*c*p)+_*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+m*(+t*l*u-t*o*p-s*a*u+i*a*p+s*o*h-i*l*h)+f*(-r*o*h-t*c*u+t*o*d+r*a*u-i*a*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,M=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,T=h*_*l-g*u*l+g*o*p-a*_*p-h*o*f+a*u*f,F=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,w=t*E+i*M+r*T+s*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(_*d*s-u*m*s-_*r*p+i*m*p+u*r*f-i*d*f)*A,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*f+i*c*f)*A,e[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*p-i*c*p)*A,e[4]=M*A,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*A,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*f-t*c*f)*A,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*A,e[8]=T*A,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*f-t*u*f)*A,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*f+t*o*f)*A,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*p-t*o*p)*A,e[12]=F*A,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*m+t*u*m)*A,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*A,e[15]=(a*u*r-h*o*r+h*i*c-t*u*c-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,E=c*l,M=c*h,T=c*u,F=i.x,w=i.y,A=i.z;return r[0]=(1-(_+f))*F,r[1]=(p+T)*F,r[2]=(g-M)*F,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(d+f))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(m-E)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const a=Gr.set(r[4],r[5],r[6]).length(),o=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const l=1/s,h=1/a,u=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Di){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(o===Di)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Io)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Di){const c=this.elements,l=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*l,p=(i+r)*h;let g,_;if(o===Di)g=(a+s)*u,_=-2*u;else if(o===Io)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gr=new P,Wn=new Be,Q_=new P(0,0,0),e1=new P(1,1,1),Wi=new P,za=new P,xn=new P,dd=new Be,fd=new ur;class Bn{constructor(e=0,t=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t1=0;const pd=new P,Vr=new ur,Ti=new Be,Ha=new P,Xs=new P,n1=new P,i1=new ur,md=new P(1,0,0),gd=new P(0,1,0),_d=new P(0,0,1),vd={type:"added"},r1={type:"removed"},Wr={type:"childadded",child:null},Bc={type:"childremoved",child:null};class St extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new P,t=new Bn,i=new ur,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new He}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(gd,e)}rotateZ(e){return this.rotateOnAxis(_d,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(gd,e)}translateZ(e){return this.translateOnAxis(_d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ha.copy(e):Ha.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Xs,Ha,this.up):Ti.lookAt(Ha,Xs,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r1),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,n1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,i1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new P,Ai=new P,kc=new P,wi=new P,Xr=new P,jr=new P,xd=new P,zc=new P,Hc=new P,Gc=new P;class oi{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Ai.subVectors(i,t),kc.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(Ai),c=Xn.dot(kc),l=Ai.dot(Ai),h=Ai.dot(kc),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Ai.subVectors(e,t),Xn.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Xn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),jr.subVectors(s,i),zc.subVectors(e,i);const c=Xr.dot(zc),l=jr.dot(zc);if(c<=0&&l<=0)return t.copy(i);Hc.subVectors(e,r);const h=Xr.dot(Hc),u=jr.dot(Hc);if(h>=0&&u<=h)return t.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Xr,a);Gc.subVectors(e,s);const p=Xr.dot(Gc),g=jr.dot(Gc);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(jr,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xd.subVectors(s,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(xd,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(Xr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Vc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ah(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vc(a,s,e+1/3),this.g=Vc(a,s,e),this.b=Vc(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=qp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return nt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(en(Jt.r*255,0,255))*65536+Math.round(en(Jt.g*255,0,255))*256+Math.round(en(Jt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Yt){nt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Ga);const i=aa(Xi.h,Ga.h,t),r=aa(Xi.s,Ga.s,t),s=aa(Xi.l,Ga.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Pe;Pe.NAMES=qp;let s1=0;class hi extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=ss,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=bl,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==El&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new P,Va=new Oe;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}}class Yp extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $p extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ui extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let a1=0;const Ln=new Be,Wc=new St,qr=new P,yn=new On,js=new On,Xt=new P;class gi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?$p:Yp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(yn.min,js.min),yn.expandByPoint(Xt),Xt.addVectors(yn.max,js.max),yn.expandByPoint(Xt)):(yn.expandByPoint(js.min),yn.expandByPoint(js.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Xt.fromBufferAttribute(o,l),c&&(qr.fromBufferAttribute(e,l),Xt.add(qr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new P,c[D]=new P;const l=new P,h=new P,u=new P,d=new Oe,p=new Oe,g=new Oe,_=new P,m=new P;function f(D,b,x){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(_),o[b].add(_),o[x].add(_),c[D].add(m),c[b].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,b=E.length;D<b;++D){const x=E[D],L=x.start,G=x.count;for(let k=L,Y=L+G;k<Y;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new P,T=new P,F=new P,w=new P;function A(D){F.fromBufferAttribute(r,D),w.copy(F);const b=o[D];M.copy(b),M.sub(F.multiplyScalar(F.dot(b))).normalize(),T.crossVectors(w,b);const L=T.dot(c[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,b=E.length;D<b;++D){const x=E[D],L=x.start,G=x.count;for(let k=L,Y=L+G;k<Y;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new un(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yd=new Be,vr=new xa,Wa=new mi,Md=new P,Yr=new P,$r=new P,Kr=new P,Xc=new P,Xa=new P,ja=new Oe,qa=new Oe,Ya=new Oe,Sd=new P,Ed=new P,bd=new P,$a=new P,Ka=new P;class Rt extends St{constructor(e=new gi,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Xc.fromBufferAttribute(u,e),a?Xa.addScaledVector(Xc,h):Xa.addScaledVector(Xc.sub(t),h))}t.add(Xa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Wa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Wa,Md)===null||vr.origin.distanceToSquared(Md)>(e.far-e.near)**2))&&(yd.copy(s).invert(),vr.copy(e.ray).applyMatrix4(yd),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,F=M;T<F;T+=3){const w=o.getX(T),A=o.getX(T+1),D=o.getX(T+2);r=Za(this,f,e,i,l,h,u,w,A,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),M=o.getX(m+1),T=o.getX(m+2);r=Za(this,a,e,i,l,h,u,E,M,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,F=M;T<F;T+=3){const w=T,A=T+1,D=T+2;r=Za(this,f,e,i,l,h,u,w,A,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,M=m+1,T=m+2;r=Za(this,a,e,i,l,h,u,E,M,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function o1(n,e,t,i,r,s,a,o){let c;if(e.side===hn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Bi,o),c===null)return null;Ka.copy(o),Ka.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ka);return l<t.near||l>t.far?null:{distance:l,point:Ka.clone(),object:n}}function Za(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Yr),n.getVertexPosition(c,$r),n.getVertexPosition(l,Kr);const h=o1(n,e,t,i,Yr,$r,Kr,$a);if(h){r&&(ja.fromBufferAttribute(r,o),qa.fromBufferAttribute(r,c),Ya.fromBufferAttribute(r,l),h.uv=oi.getInterpolation($a,Yr,$r,Kr,ja,qa,Ya,new Oe)),s&&(ja.fromBufferAttribute(s,o),qa.fromBufferAttribute(s,c),Ya.fromBufferAttribute(s,l),h.uv1=oi.getInterpolation($a,Yr,$r,Kr,ja,qa,Ya,new Oe)),a&&(Sd.fromBufferAttribute(a,o),Ed.fromBufferAttribute(a,c),bd.fromBufferAttribute(a,l),h.normal=oi.getInterpolation($a,Yr,$r,Kr,Sd,Ed,bd,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};oi.getNormal(Yr,$r,Kr,u.normal),h.face=u}return h}class ci extends gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ui(l,3)),this.setAttribute("normal",new Ui(h,3)),this.setAttribute("uv",new Ui(u,2));function g(_,m,f,E,M,T,F,w,A,D,b){const x=T/A,L=F/D,G=T/2,k=F/2,Y=w/2,$=A+1,X=D+1;let Z=0,W=0;const ue=new P;for(let fe=0;fe<X;fe++){const me=fe*L-k;for(let ke=0;ke<$;ke++){const Je=ke*x-G;ue[_]=Je*E,ue[m]=me*M,ue[f]=Y,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[f]=w>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ke/A),u.push(1-fe/D),Z+=1}}for(let fe=0;fe<D;fe++)for(let me=0;me<A;me++){const ke=d+me+$*fe,Je=d+me+$*(fe+1),j=d+(me+1)+$*(fe+1),ee=d+(me+1)+$*fe;c.push(ke,Je,ee),c.push(Je,j,ee),W+=6}o.addGroup(p,W,b),p+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const r in i)e[r]=i[r]}return e}function c1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const l1={clone:_s,merge:an};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=c1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zp extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new P,Td=new Oe,Ad=new Oe;class cn extends Zp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Td,Ad),t.subVectors(Ad,Td)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Jr=1;class d1 extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new cn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const a=new cn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new cn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const c=new cn(Zr,Jr,e,t);c.layers=this.layers,this.add(c);const l=new cn(Zr,Jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jp extends $t{constructor(e,t,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f1 extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ci(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:tr});s.uniforms.tEquirect.value=t;const a=new Rt(r,s),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=bn),new d1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const jc=new P,p1=new P,m1=new He;class br{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jc.subVectors(i,t).cross(p1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||m1.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new mi,Ja=new P;class lh{constructor(e=new br,t=new br,i=new br,r=new br,s=new br,a=new br){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],E=r[13],M=r[14],T=r[15];if(i[0].setComponents(c-s,d-l,m-p,T-f).normalize(),i[1].setComponents(c+s,d+l,m+p,T+f).normalize(),i[2].setComponents(c+a,d+h,m+g,T+E).normalize(),i[3].setComponents(c-a,d-h,m-g,T-E).normalize(),i[4].setComponents(c-o,d-u,m-_,T-M).normalize(),t===Di)i[5].setComponents(c+o,d+u,m+_,T+M).normalize();else if(t===Io)i[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function g1(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,o),u.count===-1&&d.length===0&&n.bufferSubData(l,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class vs extends gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-a;for(let M=0;M<l;M++){const T=M*u-s;g.push(T,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const M=E+l*f,T=E+l*(f+1),F=E+1+l*(f+1),w=E+1+l*f;p.push(M,T,w),p.push(T,F,w)}this.setIndex(p),this.setAttribute("position",new Ui(g,3)),this.setAttribute("normal",new Ui(_,3)),this.setAttribute("uv",new Ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var _1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
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
#endif`,x1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
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
#endif`,b1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
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
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L1=`#ifdef USE_IRIDESCENCE
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
#endif`,P1=`#ifdef USE_BUMPMAP
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z1=`#define PI 3.141592653589793
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
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`
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
}`,$1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rv=`#ifdef USE_GRADIENTMAP
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
}`,sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cv=`uniform bool receiveShadow;
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
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pv=`PhysicalMaterial material;
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
#endif`,mv=`struct PhysicalMaterial {
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
}`,gv=`
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Av=`#if defined( USE_POINTS_UV )
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
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tx=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,Ex=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Ux=`#define MATCAP
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
}`,Nx=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,Gx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Wx=`uniform float size;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,qx=`uniform vec3 color;
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
}`,Yx=`uniform float rotation;
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
}`,$x=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:_1,alphahash_pars_fragment:v1,alphamap_fragment:x1,alphamap_pars_fragment:y1,alphatest_fragment:M1,alphatest_pars_fragment:S1,aomap_fragment:E1,aomap_pars_fragment:b1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:w1,beginnormal_vertex:R1,bsdfs:C1,iridescence_fragment:L1,bumpmap_pars_fragment:P1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:D1,clipping_planes_pars_vertex:U1,clipping_planes_vertex:N1,color_fragment:F1,color_pars_fragment:O1,color_pars_vertex:B1,color_vertex:k1,common:z1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:G1,displacementmap_pars_vertex:V1,displacementmap_vertex:W1,emissivemap_fragment:X1,emissivemap_pars_fragment:j1,colorspace_fragment:q1,colorspace_pars_fragment:Y1,envmap_fragment:$1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Z1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:lv,envmap_vertex:Q1,fog_vertex:ev,fog_pars_vertex:tv,fog_fragment:nv,fog_pars_fragment:iv,gradientmap_pars_fragment:rv,lightmap_pars_fragment:sv,lights_lambert_fragment:av,lights_lambert_pars_fragment:ov,lights_pars_begin:cv,lights_toon_fragment:hv,lights_toon_pars_fragment:uv,lights_phong_fragment:dv,lights_phong_pars_fragment:fv,lights_physical_fragment:pv,lights_physical_pars_fragment:mv,lights_fragment_begin:gv,lights_fragment_maps:_v,lights_fragment_end:vv,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Sv,map_fragment:Ev,map_pars_fragment:bv,map_particle_fragment:Tv,map_particle_pars_fragment:Av,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Rv,morphinstance_vertex:Cv,morphcolor_vertex:Lv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Dv,normal_fragment_begin:Uv,normal_fragment_maps:Nv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:Bv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Vv,opaque_fragment:Wv,packing:Xv,premultiplied_alpha_fragment:jv,project_vertex:qv,dithering_fragment:Yv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:rx,skinnormal_vertex:sx,specularmap_fragment:ax,specularmap_pars_fragment:ox,tonemapping_fragment:cx,tonemapping_pars_fragment:lx,transmission_fragment:hx,transmission_pars_fragment:ux,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:_x,backgroundCube_vert:vx,backgroundCube_frag:xx,cube_vert:yx,cube_frag:Mx,depth_vert:Sx,depth_frag:Ex,distanceRGBA_vert:bx,distanceRGBA_frag:Tx,equirect_vert:Ax,equirect_frag:wx,linedashed_vert:Rx,linedashed_frag:Cx,meshbasic_vert:Lx,meshbasic_frag:Px,meshlambert_vert:Ix,meshlambert_frag:Dx,meshmatcap_vert:Ux,meshmatcap_frag:Nx,meshnormal_vert:Fx,meshnormal_frag:Ox,meshphong_vert:Bx,meshphong_frag:kx,meshphysical_vert:zx,meshphysical_frag:Hx,meshtoon_vert:Gx,meshtoon_frag:Vx,points_vert:Wx,points_frag:Xx,shadow_vert:jx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:$x},ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ri={basic:{uniforms:an([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:an([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:an([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:an([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:an([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:an([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:an([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:an([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:an([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:an([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:an([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:an([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:an([ae.lights,ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ri.physical={uniforms:an([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Qa={r:0,b:0,g:0},yr=new Bn,Kx=new Be;function Zx(n,e,t,i,r,s,a){const o=new Pe(0);let c=s===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function _(E){let M=!1;const T=g(E);T===null?f(o,c):T&&T.isColor&&(f(T,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===jo)?(h===void 0&&(h=new Rt(new ci(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:_s(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),yr.copy(M.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(yr)),h.material.toneMapped=nt.getTransfer(T.colorSpace)!==gt,(u!==T||d!==T.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Rt(new vs(2,2),new sr({name:"BackgroundMaterial",uniforms:_s(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(T.colorSpace)!==gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,M){E.getRGB(Qa,Kp(n)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m}}function Jx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,L,G,k,Y){let $=!1;const X=u(k,G,L);s!==X&&(s=X,l(s.object)),$=p(x,k,G,Y),$&&g(x,k,G,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(x,L,G,k),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,L,G){const k=G.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let $=Y[L.id];$===void 0&&($={},Y[L.id]=$);let X=$[k];return X===void 0&&(X=d(c()),$[k]=X),X}function d(x){const L=[],G=[],k=[];for(let Y=0;Y<t;Y++)L[Y]=0,G[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,L,G,k){const Y=s.attributes,$=L.attributes;let X=0;const Z=G.getAttributes();for(const W in Z)if(Z[W].location>=0){const fe=Y[W];let me=$[W];if(me===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function g(x,L,G,k){const Y={},$=L.attributes;let X=0;const Z=G.getAttributes();for(const W in Z)if(Z[W].location>=0){let fe=$[W];fe===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),Y[W]=me,X++}s.attributes=Y,s.attributesNum=X,s.index=k}function _(){const x=s.newAttributes;for(let L=0,G=x.length;L<G;L++)x[L]=0}function m(x){f(x,0)}function f(x,L){const G=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;G[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),Y[x]!==L&&(n.vertexAttribDivisor(x,L),Y[x]=L)}function E(){const x=s.newAttributes,L=s.enabledAttributes;for(let G=0,k=L.length;G<k;G++)L[G]!==x[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function M(x,L,G,k,Y,$,X){X===!0?n.vertexAttribIPointer(x,L,G,Y,$):n.vertexAttribPointer(x,L,G,k,Y,$)}function T(x,L,G,k){_();const Y=k.attributes,$=G.getAttributes(),X=L.defaultAttributeValues;for(const Z in $){const W=$[Z];if(W.location>=0){let ue=Y[Z];if(ue===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){const fe=ue.normalized,me=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;const Je=ke.buffer,j=ke.type,ee=ke.bytesPerElement,ge=j===n.INT||j===n.UNSIGNED_INT||ue.gpuType===Up;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Ne=oe.stride,Fe=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<W.locationSize;Ge++)f(W.location+Ge,oe.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ge=0;Ge<W.locationSize;Ge++)m(W.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ge=0;Ge<W.locationSize;Ge++)M(W.location+Ge,me/W.locationSize,j,fe,Ne*ee,(Fe+me/W.locationSize*Ge)*ee,ge)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)f(W.location+oe,ue.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let oe=0;oe<W.locationSize;oe++)M(W.location+oe,me/W.locationSize,j,fe,me*ee,me/W.locationSize*oe*ee,ge)}}else if(X!==void 0){const fe=X[Z];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}E()}function F(){D();for(const x in i){const L=i[x];for(const G in L){const k=L[G];for(const Y in k)h(k[Y].object),delete k[Y];delete L[G]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const G in L){const k=L[G];for(const Y in k)h(k[Y].object),delete k[Y];delete L[G]}delete i[x.id]}function A(x){for(const L in i){const G=i[L];if(G[x.id]===void 0)continue;const k=G[x.id];for(const Y in k)h(k[Y].object),delete k[Y];delete G[x.id]}}function D(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Qx(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(l[p],h[p]);else{d.multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function e2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==li&&!A)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:T,maxSamples:F}}function t2(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new br,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const E=s?0:i,M=E*4;let T=f.clippingState||null;c.value=T,T=h(g,d,M,p);for(let F=0;F!==M;++F)T[F]=t[F];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,T=p;M!==_;++M,T+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function n2(n){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=hs:o===Al&&(a.mapping=us),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tl||o===Al)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new f1(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hh extends Zp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,wd=[.125,.215,.35,.446,.526,.582],wr=20,qc=new hh,Rd=new Pe;let Yc=null,$c=0,Kc=0,Zc=!1;const Tr=(1+Math.sqrt(5))/2,Qr=1/Tr,Cd=[new P(-Tr,Qr,0),new P(Tr,Qr,0),new P(-Qr,0,Tr),new P(Qr,0,Tr),new P(0,Tr,-Qr),new P(0,Tr,Qr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,$c,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:qo,format:qn,colorSpace:Kt,depthBuffer:!1},r=Pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i2(s)),this._blurMaterial=r2(s,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,qc)}_sceneToCubeUV(e,t,i,r){const o=new cn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rd),h.toneMapping=nr,h.autoClear=!1;const p=new Qi({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Rt(new ci,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Rd),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const M=this._cubeSize;eo(r,E*M,f>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===hs||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;eo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,qc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cd[(r-s-1)%Cd.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Rt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const f=[];let E=0;for(let A=0;A<wr;++A){const D=A/_,b=Math.exp(-D*D/2);f.push(b),A===0?E+=b:A<m&&(E+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const T=this._sizeLods[r],F=3*T*(r>M-is?r-M+is:0),w=4*(this._cubeSize-T);eo(t,F,w,3*T,2*T),c.setRenderTarget(t),c.render(u,qc)}}function i2(n){const e=[],t=[],i=[];let r=n;const s=n-is+1+wd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-is?c=wd[a-n+is-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,D=w>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];E.set(b,_*g*w),M.set(d,m*g*w);const x=[w,w,w,w,w,w];T.set(x,f*g*w)}const F=new gi;F.setAttribute("position",new un(E,_)),F.setAttribute("uv",new un(M,m)),F.setAttribute("faceIndex",new un(T,f)),e.push(F),r>is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pd(n,e,t){const i=new Ur(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function r2(n,e,t){const i=new Float32Array(wr),r=new P(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uh(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Id(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Dd(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function s2(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Tl||c===Al,h=c===hs||c===us;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ld(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Ld(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function a2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&oh("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function o2(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let M=0,T=E.length;M<T;M+=3){const F=E[M+0],w=E[M+1],A=E[M+2];d.push(F,w,w,A,A,F)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const F=M+0,w=M+1,A=M+2;d.push(F,w,w,A,A,F)}}else return;const m=new(Wp(d)?$p:Yp)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function c2(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)t.update(f,i,_[E])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function l2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function h2(n,e,t){const i=new WeakMap,r=new dt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let F=o.attributes.position.count*T,w=1;F>e.maxTextureSize&&(w=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const A=new Float32Array(F*w*4*u),D=new jp(A,F,w,u);D.type=li,D.needsUpdate=!0;const b=T*4;for(let L=0;L<u;L++){const G=f[L],k=E[L],Y=M[L],$=F*w*4*L;for(let X=0;X<G.count;X++){const Z=X*b;g===!0&&(r.fromBufferAttribute(G,X),A[$+Z+0]=r.x,A[$+Z+1]=r.y,A[$+Z+2]=r.z,A[$+Z+3]=0),_===!0&&(r.fromBufferAttribute(k,X),A[$+Z+4]=r.x,A[$+Z+5]=r.y,A[$+Z+6]=r.z,A[$+Z+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),A[$+Z+8]=r.x,A[$+Z+9]=r.y,A[$+Z+10]=r.z,A[$+Z+11]=Y.itemSize===4?r.w:1)}}d={count:u,texture:D,size:new Oe(F,w)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function u2(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class em extends $t{constructor(e,t,i,r,s,a,o,c,l,h=as){if(h!==as&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=fs),i===void 0&&h===ms&&(i=ps),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tm=new $t,nm=new em(1,1);nm.compareFunction=Vp;const im=new jp,rm=new Z_,sm=new Jp,Ud=[],Nd=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ud[r];if(s===void 0&&(s=new Float32Array(r),Ud[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=Nd[e];t===void 0&&(t=new Int32Array(e),Nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function p2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function m2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function g2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),Ht(t,i)}}function _2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Od.set(i),n.uniformMatrix3fv(this.addr,!1,Od),Ht(t,i)}}function v2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Fd.set(i),n.uniformMatrix4fv(this.addr,!1,Fd),Ht(t,i)}}function x2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function M2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function E2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function w2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?nm:tm;t.setTexture2D(e||s,r)}function R2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rm,r)}function C2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sm,r)}function L2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||im,r)}function P2(n){switch(n){case 5126:return d2;case 35664:return f2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return _2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return y2;case 35668:case 35672:return M2;case 35669:case 35673:return S2;case 5125:return E2;case 36294:return b2;case 36295:return T2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return C2;case 36289:case 36303:case 36311:case 36292:return L2}}function I2(n,e){n.uniform1fv(this.addr,e)}function D2(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function U2(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function N2(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function F2(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O2(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B2(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k2(n,e){n.uniform1iv(this.addr,e)}function z2(n,e){n.uniform2iv(this.addr,e)}function H2(n,e){n.uniform3iv(this.addr,e)}function G2(n,e){n.uniform4iv(this.addr,e)}function V2(n,e){n.uniform1uiv(this.addr,e)}function W2(n,e){n.uniform2uiv(this.addr,e)}function X2(n,e){n.uniform3uiv(this.addr,e)}function j2(n,e){n.uniform4uiv(this.addr,e)}function q2(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||tm,s[a])}function Y2(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||rm,s[a])}function $2(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||sm,s[a])}function K2(n,e,t){const i=this.cache,r=e.length,s=$o(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||im,s[a])}function Z2(n){switch(n){case 5126:return I2;case 35664:return D2;case 35665:return U2;case 35666:return N2;case 35674:return F2;case 35675:return O2;case 35676:return B2;case 5124:case 35670:return k2;case 35667:case 35671:return z2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return W2;case 36295:return X2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return K2}}class J2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P2(t.type)}}class Q2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z2(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function kd(n,e){n.seq.push(e),n.map[e.id]=e}function ty(n,e,t){const i=n.name,r=i.length;for(Jc.lastIndex=0;;){const s=Jc.exec(i),a=Jc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){kd(t,l===void 0?new J2(o,n,e):new Q2(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new ey(o),kd(t,u)),t=u}}}class _o{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ty(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function zd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ny=37297;let iy=0;function ry(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function sy(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Po&&t===Lo?i="LinearDisplayP3ToLinearSRGB":e===Lo&&t===Po&&(i="LinearSRGBToLinearDisplayP3"),n){case Kt:case Yo:return[i,"LinearTransferOETF"];case Yt:case sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ry(n.getShaderSource(e),a)}else return r}function ay(n,e){const t=sy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oy(n,e){let t;switch(e){case e_:t="Linear";break;case t_:t="Reinhard";break;case n_:t="OptimizedCineon";break;case Pp:t="ACESFilmic";break;case r_:t="AgX";break;case s_:t="Neutral";break;case i_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function ly(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function na(n){return n!==""}function Gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(n){return n.replace(uy,fy)}const dy=new Map;function fy(n,e){let t=ze[e];if(t===void 0){const i=dy.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(n){return n.replace(py,my)}function my(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function gy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function _y(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case us:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function xy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lp:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case Q0:e="ENVMAP_BLENDING_ADD";break}return e}function yy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function My(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=gy(t),l=_y(t),h=vy(t),u=xy(t),d=yy(t),p=cy(t),g=ly(s),_=r.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),f.length>0&&(f+=`
`)):(m=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),f=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?ze.tonemapping_pars_fragment:"",t.toneMapping!==nr?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),a=Cl(a),a=Gd(a,t),a=Vd(a,t),o=Cl(o),o=Gd(o,t),o=Vd(o,t),a=Wd(a),o=Wd(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+m+a,T=E+f+o,F=zd(r,r.VERTEX_SHADER,M),w=zd(r,r.FRAGMENT_SHADER,T);r.attachShader(_,F),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(F).trim(),Y=r.getShaderInfoLog(w).trim();let $=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,F,w);else{const Z=Hd(r,F,"vertex"),W=Hd(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Z+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||Y==="")&&(X=!1);X&&(L.diagnostics={runnable:$,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(F),r.deleteShader(w),D=new _o(r,_),b=hy(r,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,ny)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=w,this}let Sy=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new by(e),t.set(e,i)),i}}class by{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function Ty(n,e,t,i,r,s,a){const o=new ch,c=new Ey,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,L,G,k){const Y=G.fog,$=k.geometry,X=b.isMeshStandardMaterial?G.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),W=Z&&Z.mapping===jo?Z.image.height:null,ue=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=fe!==void 0?fe.length:0;let ke=0;$.morphAttributes.position!==void 0&&(ke=1),$.morphAttributes.normal!==void 0&&(ke=2),$.morphAttributes.color!==void 0&&(ke=3);let Je,j,ee,ge;if(ue){const ct=ri[ue];Je=ct.vertexShader,j=ct.fragmentShader}else Je=b.vertexShader,j=b.fragmentShader,c.update(b),ee=c.getVertexShaderID(b),ge=c.getFragmentShaderID(b);const oe=n.getRenderTarget(),Ne=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,Ge=!!b.map,R=!!b.matcap,Ve=!!Z,We=!!b.aoMap,ft=!!b.lightMap,Se=!!b.bumpMap,$e=!!b.normalMap,Xe=!!b.displacementMap,Ue=!!b.emissiveMap,Tt=!!b.metalnessMap,S=!!b.roughnessMap,v=b.anisotropy>0,U=b.clearcoat>0,z=b.dispersion>0,V=b.iridescence>0,H=b.sheen>0,ne=b.transmission>0,te=v&&!!b.anisotropyMap,ie=U&&!!b.clearcoatMap,Te=U&&!!b.clearcoatNormalMap,J=U&&!!b.clearcoatRoughnessMap,pe=V&&!!b.iridescenceMap,Ce=V&&!!b.iridescenceThicknessMap,Ie=H&&!!b.sheenColorMap,ce=H&&!!b.sheenRoughnessMap,je=!!b.specularMap,Ke=!!b.specularColorMap,It=!!b.specularIntensityMap,C=ne&&!!b.transmissionMap,le=ne&&!!b.thicknessMap,q=!!b.gradientMap,K=!!b.alphaMap,se=b.alphaTest>0,De=!!b.alphaHash,tt=!!b.extensions;let Dt=nr;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const Vt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:j,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Kt,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:R,envMap:Ve,envMapMode:Ve&&Z.mapping,envMapCubeUVHeight:W,aoMap:We,lightMap:ft,bumpMap:Se,normalMap:$e,displacementMap:d&&Xe,emissiveMap:Ue,normalMapObjectSpace:$e&&b.normalMapType===y_,normalMapTangentSpace:$e&&b.normalMapType===Gp,metalnessMap:Tt,roughnessMap:S,anisotropy:v,anisotropyMap:te,clearcoat:U,clearcoatMap:ie,clearcoatNormalMap:Te,clearcoatRoughnessMap:J,dispersion:z,iridescence:V,iridescenceMap:pe,iridescenceThicknessMap:Ce,sheen:H,sheenColorMap:Ie,sheenRoughnessMap:ce,specularMap:je,specularColorMap:Ke,specularIntensityMap:It,transmission:ne,transmissionMap:C,thicknessMap:le,gradientMap:q,opaque:b.transparent===!1&&b.blending===ss&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:se,alphaHash:De,combine:b.combine,mapUv:Ge&&_(b.map.channel),aoMapUv:We&&_(b.aoMap.channel),lightMapUv:ft&&_(b.lightMap.channel),bumpMapUv:Se&&_(b.bumpMap.channel),normalMapUv:$e&&_(b.normalMap.channel),displacementMapUv:Xe&&_(b.displacementMap.channel),emissiveMapUv:Ue&&_(b.emissiveMap.channel),metalnessMapUv:Tt&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:te&&_(b.anisotropyMap.channel),clearcoatMapUv:ie&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(b.sheenRoughnessMap.channel),specularMapUv:je&&_(b.specularMap.channel),specularColorMapUv:Ke&&_(b.specularColorMap.channel),specularIntensityMapUv:It&&_(b.specularIntensityMap.channel),transmissionMapUv:C&&_(b.transmissionMap.channel),thicknessMapUv:le&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&($e||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Ge||K),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ai,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function f(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)x.push(L),x.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(E(x,b),M(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function E(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function M(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),b.push(o.mask)}function T(b){const x=g[b.type];let L;if(x){const G=ri[x];L=l1.clone(G.uniforms)}else L=b.uniforms;return L}function F(b,x){let L;for(let G=0,k=h.length;G<k;G++){const Y=h[G];if(Y.cacheKey===x){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new My(n,x,b,s),h.push(L)),L}function w(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:F,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:D}}function Ay(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||wy),i.length>1&&i.sort(d||jd),r.length>1&&r.sort(d||jd)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Ry(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new qd,n.set(i,[a])):r>=s.length?(a=new qd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Pe};break;case"SpotLight":t={position:new P,direction:new P,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Ly(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Py=0;function Iy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dy(n){const e=new Cy,t=Ly(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const r=new P,s=new Be,a=new Be;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,M=0,T=0,F=0,w=0,A=0;l.sort(Iy);for(let b=0,x=l.length;b<x;b++){const L=l[b],G=L.color,k=L.intensity,Y=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*k,u+=G.g*k,d+=G.b*k;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],k);A++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,W=t.get(L);W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,E++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(G).multiplyScalar(k),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const Z=L.shadow;if(L.map&&(i.spotLightMap[F]=L.map,F++,Z.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=Z.matrix,L.castShadow){const W=t.get(L);W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=$,T++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(G).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Z=L.shadow,W=t.get(L);W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(k),X.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==T||D.numSpotMaps!==F||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+F-w,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=T,D.numSpotMaps=F,D.numLightProbes=A,i.version=Py++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const M=l[f];if(M.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),u++}else if(M.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Yd(n){const e=new Dy(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Uy(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yd(n),e.set(r,[o])):s>=a.length?(o=new Yd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Ny extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
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
}`;function ky(n,e,t){let i=new lh;const r=new Oe,s=new Oe,a=new dt,o=new Ny({depthPacking:x_}),c=new Fy,l={},h=t.maxTextureSize,u={[Bi]:hn,[hn]:Bi,[ai]:ai},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Oy,fragmentShader:By}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new gi;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp;let f=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),G=n.state;G.setBlending(tr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==Ci&&this.type===Ci,Y=f===Ci&&this.type!==Ci;for(let $=0,X=w.length;$<X;$++){const Z=w[$],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ue=W.getFrameExtents();if(r.multiply(ue),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ue.x),r.x=s.x*ue.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ue.y),r.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null||k===!0||Y===!0){const me=this.type!==Ci?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new Ur(r.x,r.y,me),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const fe=W.getViewportCount();for(let me=0;me<fe;me++){const ke=W.getViewport(me);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),G.viewport(a),W.updateMatrices(Z,me),i=W.getFrustum(),T(A,D,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Ci&&E(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,L)};function E(w,A){const D=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ur(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,D,p,_,null)}function M(w,A,D,b){let x=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=D.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=x.uuid,k=A.uuid;let Y=l[G];Y===void 0&&(Y={},l[G]=Y);let $=Y[k];$===void 0&&($=x.clone(),Y[k]=$,A.addEventListener("dispose",F)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,b===Ci?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=n.properties.get(x);G.light=D}return x}function T(w,A,D,b,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ci)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const k=e.update(w),Y=w.material;if(Array.isArray(Y)){const $=k.groups;for(let X=0,Z=$.length;X<Z;X++){const W=$[X],ue=Y[W.materialIndex];if(ue&&ue.visible){const fe=M(w,ue,b,x);w.onBeforeShadow(n,w,A,D,k,fe,W),n.renderBufferDirect(D,null,k,fe,w,W),w.onAfterShadow(n,w,A,D,k,fe,W)}}}else if(Y.visible){const $=M(w,Y,b,x);w.onBeforeShadow(n,w,A,D,k,$,null),n.renderBufferDirect(D,null,k,$,w,null),w.onAfterShadow(n,w,A,D,k,$,null)}}const G=w.children;for(let k=0,Y=G.length;k<Y;k++)T(G[k],A,D,b,x)}function F(w){w.target.removeEventListener("dispose",F);for(const D in l){const b=l[D],x=w.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function zy(n){function e(){let C=!1;const le=new dt;let q=null;const K=new dt(0,0,0,0);return{setMask:function(se){q!==se&&!C&&(n.colorMask(se,se,se,se),q=se)},setLocked:function(se){C=se},setClear:function(se,De,tt,Dt,Vt){Vt===!0&&(se*=Dt,De*=Dt,tt*=Dt),le.set(se,De,tt,Dt),K.equals(le)===!1&&(n.clearColor(se,De,tt,Dt),K.copy(le))},reset:function(){C=!1,q=null,K.set(-1,0,0,0)}}}function t(){let C=!1,le=null,q=null,K=null;return{setTest:function(se){se?ge(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(se){le!==se&&!C&&(n.depthMask(se),le=se)},setFunc:function(se){if(q!==se){switch(se){case X0:n.depthFunc(n.NEVER);break;case j0:n.depthFunc(n.ALWAYS);break;case q0:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case Y0:n.depthFunc(n.EQUAL);break;case $0:n.depthFunc(n.GEQUAL);break;case K0:n.depthFunc(n.GREATER);break;case Z0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=se}},setLocked:function(se){C=se},setClear:function(se){K!==se&&(n.clearDepth(se),K=se)},reset:function(){C=!1,le=null,q=null,K=null}}}function i(){let C=!1,le=null,q=null,K=null,se=null,De=null,tt=null,Dt=null,Vt=null;return{setTest:function(ct){C||(ct?ge(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(ct){le!==ct&&!C&&(n.stencilMask(ct),le=ct)},setFunc:function(ct,Qn,ei){(q!==ct||K!==Qn||se!==ei)&&(n.stencilFunc(ct,Qn,ei),q=ct,K=Qn,se=ei)},setOp:function(ct,Qn,ei){(De!==ct||tt!==Qn||Dt!==ei)&&(n.stencilOp(ct,Qn,ei),De=ct,tt=Qn,Dt=ei)},setLocked:function(ct){C=ct},setClear:function(ct){Vt!==ct&&(n.clearStencil(ct),Vt=ct)},reset:function(){C=!1,le=null,q=null,K=null,se=null,De=null,tt=null,Dt=null,Vt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,T=null,F=null,w=new Pe(0,0,0),A=0,D=!1,b=null,x=null,L=null,G=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=X>=2);let W=null,ue={};const fe=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ke=new dt().fromArray(fe),Je=new dt().fromArray(me);function j(C,le,q,K){const se=new Uint8Array(4),De=n.createTexture();n.bindTexture(C,De),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<q;tt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(le+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return De}const ee={};ee[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Ao),Se(!1),$e(Tu),ge(n.CULL_FACE),We(tr);function ge(C){l[C]!==!0&&(n.enable(C),l[C]=!0)}function oe(C){l[C]!==!1&&(n.disable(C),l[C]=!1)}function Ne(C,le){return h[C]!==le?(n.bindFramebuffer(C,le),h[C]=le,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Fe(C,le){let q=d,K=!1;if(C){q=u.get(le),q===void 0&&(q=[],u.set(le,q));const se=C.textures;if(q.length!==se.length||q[0]!==n.COLOR_ATTACHMENT0){for(let De=0,tt=se.length;De<tt;De++)q[De]=n.COLOR_ATTACHMENT0+De;q.length=se.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function Ge(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const R={[Ar]:n.FUNC_ADD,[R0]:n.FUNC_SUBTRACT,[C0]:n.FUNC_REVERSE_SUBTRACT};R[L0]=n.MIN,R[P0]=n.MAX;const Ve={[I0]:n.ZERO,[D0]:n.ONE,[U0]:n.SRC_COLOR,[El]:n.SRC_ALPHA,[z0]:n.SRC_ALPHA_SATURATE,[B0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[N0]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[k0]:n.ONE_MINUS_DST_COLOR,[O0]:n.ONE_MINUS_DST_ALPHA,[H0]:n.CONSTANT_COLOR,[G0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[W0]:n.ONE_MINUS_CONSTANT_ALPHA};function We(C,le,q,K,se,De,tt,Dt,Vt,ct){if(C===tr){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),C!==w0){if(C!==_||ct!==D){if((m!==Ar||M!==Ar)&&(n.blendEquation(n.FUNC_ADD),m=Ar,M=Ar),ct)switch(C){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Au:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Au:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,E=null,T=null,F=null,w.set(0,0,0),A=0,_=C,D=ct}return}se=se||le,De=De||q,tt=tt||K,(le!==m||se!==M)&&(n.blendEquationSeparate(R[le],R[se]),m=le,M=se),(q!==f||K!==E||De!==T||tt!==F)&&(n.blendFuncSeparate(Ve[q],Ve[K],Ve[De],Ve[tt]),f=q,E=K,T=De,F=tt),(Dt.equals(w)===!1||Vt!==A)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Vt),w.copy(Dt),A=Vt),_=C,D=!1}function ft(C,le){C.side===ai?oe(n.CULL_FACE):ge(n.CULL_FACE);let q=C.side===hn;le&&(q=!q),Se(q),C.blending===ss&&C.transparent===!1?We(tr):We(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const K=C.stencilWrite;a.setTest(K),K&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(C){b!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),b=C)}function $e(C){C!==b0?(ge(n.CULL_FACE),C!==x&&(C===Tu?n.cullFace(n.BACK):C===T0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),x=C}function Xe(C){C!==L&&($&&n.lineWidth(C),L=C)}function Ue(C,le,q){C?(ge(n.POLYGON_OFFSET_FILL),(G!==le||k!==q)&&(n.polygonOffset(le,q),G=le,k=q)):oe(n.POLYGON_OFFSET_FILL)}function Tt(C){C?ge(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function S(C){C===void 0&&(C=n.TEXTURE0+Y-1),W!==C&&(n.activeTexture(C),W=C)}function v(C,le,q){q===void 0&&(W===null?q=n.TEXTURE0+Y-1:q=W);let K=ue[q];K===void 0&&(K={type:void 0,texture:void 0},ue[q]=K),(K.type!==C||K.texture!==le)&&(W!==q&&(n.activeTexture(q),W=q),n.bindTexture(C,le||ee[C]),K.type=C,K.texture=le)}function U(){const C=ue[W];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(C){ke.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ke.copy(C))}function ce(C){Je.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Je.copy(C))}function je(C,le){let q=c.get(le);q===void 0&&(q=new WeakMap,c.set(le,q));let K=q.get(C);K===void 0&&(K=n.getUniformBlockIndex(le,C.name),q.set(C,K))}function Ke(C,le){const K=c.get(le).get(C);o.get(le)!==K&&(n.uniformBlockBinding(le,K,C.__bindingPointIndex),o.set(le,K))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},W=null,ue={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,T=null,F=null,w=new Pe(0,0,0),A=0,D=!1,b=null,x=null,L=null,G=null,k=null,ke.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:oe,bindFramebuffer:Ne,drawBuffers:Fe,useProgram:Ge,setBlending:We,setMaterial:ft,setFlipSided:Se,setCullFace:$e,setLineWidth:Xe,setPolygonOffset:Ue,setScissorTest:Tt,activeTexture:S,bindTexture:v,unbindTexture:U,compressedTexImage2D:z,compressedTexImage3D:V,texImage2D:pe,texImage3D:Ce,updateUBOMapping:je,uniformBlockBinding:Ke,texStorage2D:Te,texStorage3D:J,texSubImage2D:H,texSubImage3D:ne,compressedTexSubImage2D:te,compressedTexSubImage3D:ie,scissor:Ie,viewport:ce,reset:It}}function Hy(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):ma("canvas")}function _(S,v,U){let z=1;const V=Tt(S);if((V.width>U||V.height>U)&&(z=U/Math.max(V.width,V.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(z*V.width),ne=Math.floor(z*V.height);u===void 0&&(u=g(H,ne));const te=v?g(H,ne):u;return te.width=H,te.height=ne,te.getContext("2d").drawImage(S,0,0,H,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+H+"x"+ne+")."),te}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==ln&&S.minFilter!==bn}function f(S){n.generateMipmap(S)}function E(S,v,U,z,V=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=v;if(v===n.RED&&(U===n.FLOAT&&(H=n.R32F),U===n.HALF_FLOAT&&(H=n.R16F),U===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.R8UI),U===n.UNSIGNED_SHORT&&(H=n.R16UI),U===n.UNSIGNED_INT&&(H=n.R32UI),U===n.BYTE&&(H=n.R8I),U===n.SHORT&&(H=n.R16I),U===n.INT&&(H=n.R32I)),v===n.RG&&(U===n.FLOAT&&(H=n.RG32F),U===n.HALF_FLOAT&&(H=n.RG16F),U===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RG8UI),U===n.UNSIGNED_SHORT&&(H=n.RG16UI),U===n.UNSIGNED_INT&&(H=n.RG32UI),U===n.BYTE&&(H=n.RG8I),U===n.SHORT&&(H=n.RG16I),U===n.INT&&(H=n.RG32I)),v===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const ne=V?Co:nt.getTransfer(z);U===n.FLOAT&&(H=n.RGBA32F),U===n.HALF_FLOAT&&(H=n.RGBA16F),U===n.UNSIGNED_BYTE&&(H=ne===gt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function M(S,v){let U;return S?v===null||v===fs||v===ps?U=n.DEPTH24_STENCIL8:v===li?U=n.DEPTH32F_STENCIL8:v===Ro&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fs||v===ps?U=n.DEPTH_COMPONENT24:v===li?U=n.DEPTH_COMPONENT32F:v===Ro&&(U=n.DEPTH_COMPONENT16),U}function T(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==ln&&S.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function F(S){const v=S.target;v.removeEventListener("dispose",F),A(v),v.isVideoTexture&&h.delete(v)}function w(S){const v=S.target;v.removeEventListener("dispose",w),b(v)}function A(S){const v=i.get(S);if(v.__webglInit===void 0)return;const U=S.source,z=d.get(U);if(z){const V=z[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&D(S),Object.keys(z).length===0&&d.delete(U)}i.remove(S)}function D(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const U=S.source,z=d.get(U);delete z[v.__cacheKey],a.memory.textures--}function b(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let V=0;V<v.__webglFramebuffer[z].length;V++)n.deleteFramebuffer(v.__webglFramebuffer[z][V]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=S.textures;for(let z=0,V=U.length;z<V;z++){const H=i.get(U[z]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(U[z])}i.remove(S)}let x=0;function L(){x=0}function G(){const S=x;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),x+=1,S}function k(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){const U=i.get(S);if(S.isVideoTexture&&Xe(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(U,S,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function $(S,v){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Je(U,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function X(S,v){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Je(U,S,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function Z(S,v){const U=i.get(S);if(S.version>0&&U.__version!==S.version){j(U,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const W={[ds]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},ue={[ln]:n.NEAREST,[Dp]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},fe={[M_]:n.NEVER,[w_]:n.ALWAYS,[S_]:n.LESS,[Vp]:n.LEQUAL,[E_]:n.EQUAL,[A_]:n.GEQUAL,[b_]:n.GREATER,[T_]:n.NOTEQUAL};function me(S,v){if(v.type===li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===go||v.magFilter===ta||v.magFilter===Ii||v.minFilter===bn||v.minFilter===go||v.minFilter===ta||v.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,W[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,W[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,W[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==ta&&v.minFilter!==Ii||v.type===li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ke(S,v){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",F));const z=v.source;let V=d.get(z);V===void 0&&(V={},d.set(z,V));const H=k(v);if(H!==S.__cacheKey){V[H]===void 0&&(V[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),V[H].usedTimes++;const ne=V[S.__cacheKey];ne!==void 0&&(V[S.__cacheKey].usedTimes--,ne.usedTimes===0&&D(v)),S.__cacheKey=H,S.__webglTexture=V[H].texture}return U}function Je(S,v,U){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const V=ke(S,v),H=v.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+U);const ne=i.get(H);if(H.version!==ne.__version||V===!0){t.activeTexture(n.TEXTURE0+U);const te=nt.getPrimaries(nt.workingColorSpace),ie=v.colorSpace===Ki?null:nt.getPrimaries(v.colorSpace),Te=v.colorSpace===Ki||te===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let J=_(v.image,!1,r.maxTextureSize);J=Ue(v,J);const pe=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Ie=E(v.internalFormat,pe,Ce,v.colorSpace,v.isVideoTexture);me(z,v);let ce;const je=v.mipmaps,Ke=v.isVideoTexture!==!0,It=ne.__version===void 0||V===!0,C=H.dataReady,le=T(v,J);if(v.isDepthTexture)Ie=M(v.format===ms,v.type),It&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ie,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ie,J.width,J.height,0,pe,Ce,null));else if(v.isDataTexture)if(je.length>0){Ke&&It&&t.texStorage2D(n.TEXTURE_2D,le,Ie,je[0].width,je[0].height);for(let q=0,K=je.length;q<K;q++)ce=je[q],Ke?C&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ce.width,ce.height,pe,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,q,Ie,ce.width,ce.height,0,pe,Ce,ce.data);v.generateMipmaps=!1}else Ke?(It&&t.texStorage2D(n.TEXTURE_2D,le,Ie,J.width,J.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,pe,Ce,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,J.width,J.height,0,pe,Ce,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ie,je[0].width,je[0].height,J.depth);for(let q=0,K=je.length;q<K;q++)if(ce=je[q],v.format!==qn)if(pe!==null)if(Ke){if(C)if(v.layerUpdates.size>0){for(const se of v.layerUpdates){const De=ce.width*ce.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,se,ce.width,ce.height,1,pe,ce.data.slice(De*se,De*(se+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,J.depth,pe,ce.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ie,ce.width,ce.height,J.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,J.depth,pe,Ce,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ie,ce.width,ce.height,J.depth,0,pe,Ce,ce.data)}else{Ke&&It&&t.texStorage2D(n.TEXTURE_2D,le,Ie,je[0].width,je[0].height);for(let q=0,K=je.length;q<K;q++)ce=je[q],v.format!==qn?pe!==null?Ke?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ce.width,ce.height,pe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ie,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?C&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ce.width,ce.height,pe,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,q,Ie,ce.width,ce.height,0,pe,Ce,ce.data)}else if(v.isDataArrayTexture)if(Ke){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ie,J.width,J.height,J.depth),C)if(v.layerUpdates.size>0){let q;switch(Ce){case n.UNSIGNED_BYTE:switch(pe){case n.ALPHA:q=1;break;case n.LUMINANCE:q=1;break;case n.LUMINANCE_ALPHA:q=2;break;case n.RGB:q=3;break;case n.RGBA:q=4;break;default:throw new Error(`Unknown texel size for format ${pe}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:q=1;break;default:throw new Error(`Unknown texel size for type ${Ce}.`)}const K=J.width*J.height*q;for(const se of v.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,J.width,J.height,1,pe,Ce,J.data.slice(K*se,K*(se+1)));v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,Ce,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,J.width,J.height,J.depth,0,pe,Ce,J.data);else if(v.isData3DTexture)Ke?(It&&t.texStorage3D(n.TEXTURE_3D,le,Ie,J.width,J.height,J.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,Ce,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,J.width,J.height,J.depth,0,pe,Ce,J.data);else if(v.isFramebufferTexture){if(It)if(Ke)t.texStorage2D(n.TEXTURE_2D,le,Ie,J.width,J.height);else{let q=J.width,K=J.height;for(let se=0;se<le;se++)t.texImage2D(n.TEXTURE_2D,se,Ie,q,K,0,pe,Ce,null),q>>=1,K>>=1}}else if(je.length>0){if(Ke&&It){const q=Tt(je[0]);t.texStorage2D(n.TEXTURE_2D,le,Ie,q.width,q.height)}for(let q=0,K=je.length;q<K;q++)ce=je[q],Ke?C&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,pe,Ce,ce):t.texImage2D(n.TEXTURE_2D,q,Ie,pe,Ce,ce);v.generateMipmaps=!1}else if(Ke){if(It){const q=Tt(J);t.texStorage2D(n.TEXTURE_2D,le,Ie,q.width,q.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ce,J)}else t.texImage2D(n.TEXTURE_2D,0,Ie,pe,Ce,J);m(v)&&f(z),ne.__version=H.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function j(S,v,U){if(v.image.length!==6)return;const z=ke(S,v),V=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const H=i.get(V);if(V.version!==H.__version||z===!0){t.activeTexture(n.TEXTURE0+U);const ne=nt.getPrimaries(nt.workingColorSpace),te=v.colorSpace===Ki?null:nt.getPrimaries(v.colorSpace),ie=v.colorSpace===Ki||ne===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!Te&&!J?pe[K]=_(v.image[K],!0,r.maxCubemapSize):pe[K]=J?v.image[K].image:v.image[K],pe[K]=Ue(v,pe[K]);const Ce=pe[0],Ie=s.convert(v.format,v.colorSpace),ce=s.convert(v.type),je=E(v.internalFormat,Ie,ce,v.colorSpace),Ke=v.isVideoTexture!==!0,It=H.__version===void 0||z===!0,C=V.dataReady;let le=T(v,Ce);me(n.TEXTURE_CUBE_MAP,v);let q;if(Te){Ke&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,je,Ce.width,Ce.height);for(let K=0;K<6;K++){q=pe[K].mipmaps;for(let se=0;se<q.length;se++){const De=q[se];v.format!==qn?Ie!==null?Ke?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,je,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,De.width,De.height,Ie,ce,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,je,De.width,De.height,0,Ie,ce,De.data)}}}else{if(q=v.mipmaps,Ke&&It){q.length>0&&le++;const K=Tt(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,je,K.width,K.height)}for(let K=0;K<6;K++)if(J){Ke?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Ie,ce,pe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,pe[K].width,pe[K].height,0,Ie,ce,pe[K].data);for(let se=0;se<q.length;se++){const tt=q[se].image[K].image;Ke?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,tt.width,tt.height,Ie,ce,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,je,tt.width,tt.height,0,Ie,ce,tt.data)}}else{Ke?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ie,ce,pe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,Ie,ce,pe[K]);for(let se=0;se<q.length;se++){const De=q[se];Ke?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Ie,ce,De.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,je,Ie,ce,De.image[K])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),H.__version=V.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ee(S,v,U,z,V,H){const ne=s.convert(U.format,U.colorSpace),te=s.convert(U.type),ie=E(U.internalFormat,ne,te,U.colorSpace);if(!i.get(v).__hasExternalTextures){const J=Math.max(1,v.width>>H),pe=Math.max(1,v.height>>H);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,H,ie,J,pe,v.depth,0,ne,te,null):t.texImage2D(V,H,ie,J,pe,0,ne,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,V,i.get(U).__webglTexture,0,Se(v)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,V,i.get(U).__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(S,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const z=v.depthTexture,V=z&&z.isDepthTexture?z.type:null,H=M(v.stencilBuffer,V),ne=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=Se(v);$e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,H,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,S)}else{const z=v.textures;for(let V=0;V<z.length;V++){const H=z[V],ne=s.convert(H.format,H.colorSpace),te=s.convert(H.type),ie=E(H.internalFormat,ne,te,H.colorSpace),Te=Se(v);U&&$e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ie,v.width,v.height):$e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const z=i.get(v.depthTexture).__webglTexture,V=Se(v);if(v.depthTexture.format===as)$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(v.depthTexture.format===ms)$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ne(S){const v=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");oe(v.__webglFramebuffer,S)}else if(U){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]=n.createRenderbuffer(),ge(v.__webglDepthbuffer[z],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ge(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(S,v,U){const z=i.get(S);v!==void 0&&ee(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ne(S)}function Ge(S){const v=S.texture,U=i.get(S),z=i.get(v);S.addEventListener("dispose",w);const V=S.textures,H=S.isWebGLCubeRenderTarget===!0,ne=V.length>1;if(ne||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,a.memory.textures++),H){U.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[te]=[];for(let ie=0;ie<v.mipmaps.length;ie++)U.__webglFramebuffer[te][ie]=n.createFramebuffer()}else U.__webglFramebuffer[te]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)U.__webglFramebuffer[te]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ne)for(let te=0,ie=V.length;te<ie;te++){const Te=i.get(V[te]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&$e(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let te=0;te<V.length;te++){const ie=V[te];U.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[te]);const Te=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),pe=E(ie.internalFormat,Te,J,ie.colorSpace,S.isXRRenderTarget===!0),Ce=Se(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,pe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,U.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),me(n.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)ee(U.__webglFramebuffer[te][ie],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else ee(U.__webglFramebuffer[te],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let te=0,ie=V.length;te<ie;te++){const Te=V[te],J=i.get(Te);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),me(n.TEXTURE_2D,Te),ee(U.__webglFramebuffer,S,Te,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,0),m(Te)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(te=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,z.__webglTexture),me(te,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)ee(U.__webglFramebuffer[ie],S,v,n.COLOR_ATTACHMENT0,te,ie);else ee(U.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,te,0);m(v)&&f(te),t.unbindTexture()}S.depthBuffer&&Ne(S)}function R(S){const v=S.textures;for(let U=0,z=v.length;U<z;U++){const V=v[U];if(m(V)){const H=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ne=i.get(V).__webglTexture;t.bindTexture(H,ne),f(H),t.unbindTexture()}}}const Ve=[],We=[];function ft(S){if(S.samples>0){if($e(S)===!1){const v=S.textures,U=S.width,z=S.height;let V=n.COLOR_BUFFER_BIT;const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=i.get(S),te=v.length>1;if(te)for(let ie=0;ie<v.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ie=0;ie<v.length;ie++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ie]);const Te=i.get(v[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,V,n.NEAREST),c===!0&&(Ve.length=0,We.length=0,Ve.push(n.COLOR_ATTACHMENT0+ie),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ve.push(H),We.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let ie=0;ie<v.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ie]);const Te=i.get(v[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Se(S){return Math.min(r.maxSamples,S.samples)}function $e(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xe(S){const v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Ue(S,v){const U=S.colorSpace,z=S.format,V=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==Kt&&U!==Ki&&(nt.getTransfer(U)===gt?(z!==qn||V!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Tt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Fe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=$e}function Gy(n,e){function t(i,r=Ki){let s;const a=nt.getTransfer(r);if(i===rr)return n.UNSIGNED_BYTE;if(i===Np)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===l_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===o_)return n.BYTE;if(i===c_)return n.SHORT;if(i===Ro)return n.UNSIGNED_SHORT;if(i===Up)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===qo)return n.HALF_FLOAT;if(i===h_)return n.ALPHA;if(i===u_)return n.RGB;if(i===qn)return n.RGBA;if(i===d_)return n.LUMINANCE;if(i===f_)return n.LUMINANCE_ALPHA;if(i===as)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===Op)return n.RED;if(i===Bp)return n.RED_INTEGER;if(i===p_)return n.RG;if(i===kp)return n.RG_INTEGER;if(i===zp)return n.RGBA_INTEGER;if(i===Ec||i===bc||i===Tc||i===Ac)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lu||i===Pu||i===Iu||i===Du)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uu||i===Nu||i===Fu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uu||i===Nu)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===Bu||i===ku||i===zu||i===Hu||i===Gu||i===Vu||i===Wu||i===Xu||i===ju||i===qu||i===Yu||i===$u||i===Ku)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ou)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ku)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ju)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ku)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Zu||i===Ju)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===m_||i===Qu||i===ed||i===td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Vy extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
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

}`;class qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sr({vertexShader:Xy,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Yy extends Ps{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new qy,m=t.getContextAttributes();let f=null,E=null;const M=[],T=[],F=new Oe;let w=null;const A=new cn;A.layers.enable(1),A.viewport=new dt;const D=new cn;D.layers.enable(2),D.viewport=new dt;const b=[A,D],x=new Vy;x.layers.enable(1),x.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=M[j];return ee===void 0&&(ee=new Qc,M[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=M[j];return ee===void 0&&(ee=new Qc,M[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=M[j];return ee===void 0&&(ee=new Qc,M[j]=ee),ee.getHandSpace()};function k(j){const ee=T.indexOf(j.inputSource);if(ee===-1)return;const ge=M[ee];ge!==void 0&&(ge.update(j.inputSource,j.frame,l||a),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let j=0;j<M.length;j++){const ee=T[j];ee!==null&&(T[j]=null,M[j].disconnect(ee))}L=null,G=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,E=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ur(p.framebufferWidth,p.framebufferHeight,{format:qn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ge=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?ms:as,ge=m.stencil?ps:fs);const Ne={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ur(d.textureWidth,d.textureHeight,{format:qn,type:rr,depthTexture:new em(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(j){for(let ee=0;ee<j.removed.length;ee++){const ge=j.removed[ee],oe=T.indexOf(ge);oe>=0&&(T[oe]=null,M[oe].disconnect(ge))}for(let ee=0;ee<j.added.length;ee++){const ge=j.added[ee];let oe=T.indexOf(ge);if(oe===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=T.length){T.push(ge),oe=Fe;break}else if(T[Fe]===null){T[Fe]=ge,oe=Fe;break}if(oe===-1)break}const Ne=M[oe];Ne&&Ne.connect(ge)}}const X=new P,Z=new P;function W(j,ee,ge){X.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const oe=X.distanceTo(Z),Ne=ee.projectionMatrix.elements,Fe=ge.projectionMatrix.elements,Ge=Ne[14]/(Ne[10]-1),R=Ne[14]/(Ne[10]+1),Ve=(Ne[9]+1)/Ne[5],We=(Ne[9]-1)/Ne[5],ft=(Ne[8]-1)/Ne[0],Se=(Fe[8]+1)/Fe[0],$e=Ge*ft,Xe=Ge*Se,Ue=oe/(-ft+Se),Tt=Ue*-ft;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Tt),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const S=Ge+Ue,v=R+Ue,U=$e-Tt,z=Xe+(oe-Tt),V=Ve*R/v*S,H=We*R/v*S;j.projectionMatrix.makePerspective(U,z,V,H,S,v),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ue(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),x.near=D.near=A.near=j.near,x.far=D.far=A.far=j.far,(L!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,G=x.far,A.near=L,A.far=G,D.near=L,D.far=G,A.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());const ee=j.parent,ge=x.cameras;ue(x,ee);for(let oe=0;oe<ge.length;oe++)ue(ge[oe],ee);ge.length===2?W(x,A,D):x.projectionMatrix.copy(A.projectionMatrix),fe(j,x,ee)};function fe(j,ee,ge){ge===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let me=null;function ke(j,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let oe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Fe=0;Fe<ge.length;Fe++){const Ge=ge[Fe];let R=null;if(p!==null)R=p.getViewport(Ge);else{const We=u.getViewSubImage(d,Ge);R=We.viewport,Fe===0&&(e.setRenderTargetTextures(E,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(E))}let Ve=b[Fe];Ve===void 0&&(Ve=new cn,Ve.layers.enable(Fe),Ve.viewport=new dt,b[Fe]=Ve),Ve.matrix.fromArray(Ge.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ge.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(R.x,R.y,R.width,R.height),Fe===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Ve)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Fe=u.getDepthInformation(ge[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let ge=0;ge<M.length;ge++){const oe=T[ge],Ne=M[ge];oe!==null&&Ne!==void 0&&Ne.update(oe,ee,l||a)}me&&me(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Je=new Qp;Je.setAnimationLoop(ke),this.setAnimationLoop=function(j){me=j},this.dispose=function(){}}}const Mr=new Bn,$y=new Be;function Ky(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Kp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,M,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),M=E.envMap,T=E.envMapRotation;M&&(m.envMap.value=M,Mr.copy(T),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(Mr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zy(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const T=M.program;i.uniformBlockBinding(E,T)}function l(E,M){let T=r[E.id];T===void 0&&(g(E),T=h(E),r[E.id]=T,E.addEventListener("dispose",m));const F=M.program;i.updateUBOMapping(E,F);const w=e.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function h(E){const M=u();E.__bindingPointIndex=M;const T=n.createBuffer(),F=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,F,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=r[E.id],T=E.uniforms,F=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,A=T.length;w<A;w++){const D=Array.isArray(T[w])?T[w]:[T[w]];for(let b=0,x=D.length;b<x;b++){const L=D[b];if(p(L,w,b,F)===!0){const G=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let $=0;$<k.length;$++){const X=k[$],Z=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+Y,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,T,F){const w=E.value,A=M+"_"+T;if(F[A]===void 0)return typeof w=="number"||typeof w=="boolean"?F[A]=w:F[A]=w.clone(),!0;{const D=F[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return F[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(E){const M=E.uniforms;let T=0;const F=16;for(let A=0,D=M.length;A<D;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,L=b.length;x<L;x++){const G=b[x],k=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,$=k.length;Y<$;Y++){const X=k[Y],Z=_(X),W=T%F;W!==0&&F-W<Z.boundary&&(T+=F-W),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Z.storage}}}const w=T%F;return w>0&&(T+=F-w),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Jy{constructor(e={}){const{canvas:t=W_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=nr,this.toneMappingExposure=1;const M=this;let T=!1,F=0,w=0,A=null,D=-1,b=null;const x=new dt,L=new dt;let G=null;const k=new Pe(0);let Y=0,$=t.width,X=t.height,Z=1,W=null,ue=null;const fe=new dt(0,0,$,X),me=new dt(0,0,$,X);let ke=!1;const Je=new lh;let j=!1,ee=!1;const ge=new Be,oe=new P,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ge(){return A===null?Z:1}let R=i;function Ve(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",K,!1),R===null){const I="webgl2";if(R=Ve(I,y),R===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let We,ft,Se,$e,Xe,Ue,Tt,S,v,U,z,V,H,ne,te,ie,Te,J,pe,Ce,Ie,ce,je,Ke;function It(){We=new a2(R),We.init(),ce=new Gy(R,We),ft=new e2(R,We,e,ce),Se=new zy(R),$e=new l2(R),Xe=new Ay,Ue=new Hy(R,We,Se,Xe,ft,ce,$e),Tt=new n2(M),S=new s2(M),v=new g1(R),je=new Jx(R,v),U=new o2(R,v,$e,je),z=new u2(R,U,v,$e),pe=new h2(R,ft,Ue),ie=new t2(Xe),V=new Ty(M,Tt,S,We,ft,je,ie),H=new Ky(M,Xe),ne=new Ry,te=new Uy(We),J=new Zx(M,Tt,S,Se,z,d,c),Te=new ky(M,z,ft),Ke=new Zy(R,$e,ft,Se),Ce=new Qx(R,We,$e),Ie=new c2(R,We,$e),$e.programs=V.programs,M.capabilities=ft,M.extensions=We,M.properties=Xe,M.renderLists=ne,M.shadowMap=Te,M.state=Se,M.info=$e}It();const C=new Yy(M,R);this.xr=C,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=We.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=We.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize($,X,!1))},this.getSize=function(y){return y.set($,X)},this.setSize=function(y,I,O=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,X=I,t.width=Math.floor(y*Z),t.height=Math.floor(I*Z),O===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set($*Z,X*Z).floor()},this.setDrawingBufferSize=function(y,I,O){$=y,X=I,Z=O,t.width=Math.floor(y*O),t.height=Math.floor(I*O),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(x)},this.getViewport=function(y){return y.copy(fe)},this.setViewport=function(y,I,O,B){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,I,O,B),Se.viewport(x.copy(fe).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(me)},this.setScissor=function(y,I,O,B){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,I,O,B),Se.scissor(L.copy(me).multiplyScalar(Z).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(y){Se.setScissorTest(ke=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(y=!0,I=!0,O=!0){let B=0;if(y){let N=!1;if(A!==null){const re=A.texture.format;N=re===zp||re===kp||re===Bp}if(N){const re=A.texture.type,he=re===rr||re===fs||re===Ro||re===ps||re===Np||re===Fp,_e=J.getClearColor(),ye=J.getClearAlpha(),Re=_e.r,Le=_e.g,Ae=_e.b;he?(p[0]=Re,p[1]=Le,p[2]=Ae,p[3]=ye,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=Re,g[1]=Le,g[2]=Ae,g[3]=ye,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}I&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ne.dispose(),te.dispose(),Xe.dispose(),Tt.dispose(),S.dispose(),z.dispose(),je.dispose(),Ke.dispose(),V.dispose(),C.dispose(),C.removeEventListener("sessionstart",Qn),C.removeEventListener("sessionend",ei),pr.stop()};function le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=$e.autoReset,I=Te.enabled,O=Te.autoUpdate,B=Te.needsUpdate,N=Te.type;It(),$e.autoReset=y,Te.enabled=I,Te.autoUpdate=O,Te.needsUpdate=B,Te.type=N}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){const I=y.target;I.removeEventListener("dispose",se),De(I)}function De(y){tt(y),Xe.remove(y)}function tt(y){const I=Xe.get(y).programs;I!==void 0&&(I.forEach(function(O){V.releaseProgram(O)}),y.isShaderMaterial&&V.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,O,B,N,re){I===null&&(I=Ne);const he=N.isMesh&&N.matrixWorld.determinant()<0,_e=v0(y,I,O,B,N);Se.setMaterial(B,he);let ye=O.index,Re=1;if(B.wireframe===!0){if(ye=U.getWireframeAttribute(O),ye===void 0)return;Re=2}const Le=O.drawRange,Ae=O.attributes.position;let it=Le.start*Re,At=(Le.start+Le.count)*Re;re!==null&&(it=Math.max(it,re.start*Re),At=Math.min(At,(re.start+re.count)*Re)),ye!==null?(it=Math.max(it,0),At=Math.min(At,ye.count)):Ae!=null&&(it=Math.max(it,0),At=Math.min(At,Ae.count));const wt=At-it;if(wt<0||wt===1/0)return;je.setup(N,B,_e,O,ye);let vn,st=Ce;if(ye!==null&&(vn=v.get(ye),st=Ie,st.setIndex(vn)),N.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*Ge()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(N.isLine){let be=B.linewidth;be===void 0&&(be=1),Se.setLineWidth(be*Ge()),N.isLineSegments?st.setMode(R.LINES):N.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else N.isPoints?st.setMode(R.POINTS):N.isSprite&&st.setMode(R.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)st.renderInstances(it,wt,N.count);else if(O.isInstancedBufferGeometry){const be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,rn=Math.min(O.instanceCount,be);st.renderInstances(it,wt,rn)}else st.render(it,wt)};function Dt(y,I,O){y.transparent===!0&&y.side===ai&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,Ia(y,I,O),y.side=Bi,y.needsUpdate=!0,Ia(y,I,O),y.side=ai):Ia(y,I,O)}this.compile=function(y,I,O=null){O===null&&(O=y),m=te.get(O),m.init(I),E.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return y.traverse(function(N){const re=N.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const _e=re[he];Dt(_e,O,N),B.add(_e)}else Dt(re,O,N),B.add(re)}),E.pop(),m=null,B},this.compileAsync=function(y,I,O=null){const B=this.compile(y,I,O);return new Promise(N=>{function re(){if(B.forEach(function(he){Xe.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){N(y);return}setTimeout(re,10)}We.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Vt=null;function ct(y){Vt&&Vt(y)}function Qn(){pr.stop()}function ei(){pr.start()}const pr=new Qp;pr.setAnimationLoop(ct),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(y){Vt=y,C.setAnimationLoop(y),y===null?pr.stop():pr.start()},C.addEventListener("sessionstart",Qn),C.addEventListener("sessionend",ei),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(I),I=C.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,A),m=te.get(y,E.length),m.init(I),E.push(m),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Je.setFromProjectionMatrix(ge),ee=this.localClippingEnabled,j=ie.init(this.clippingPlanes,ee),_=ne.get(y,f.length),_.init(),f.push(_),C.enabled===!0&&C.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&xc(re,I,-1/0,M.sortObjects)}xc(y,I,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(W,ue),Fe=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Fe&&J.addToRenderList(_,y),this.info.render.frame++,j===!0&&ie.beginShadows();const O=m.state.shadowsArray;Te.render(O,y,I),j===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(m.setupLights(),I.isArrayCamera){const re=I.cameras;if(N.length>0)for(let he=0,_e=re.length;he<_e;he++){const ye=re[he];yu(B,N,y,ye)}Fe&&J.render(y);for(let he=0,_e=re.length;he<_e;he++){const ye=re[he];xu(_,y,ye,ye.viewport)}}else N.length>0&&yu(B,N,y,I),Fe&&J.render(y),xu(_,y,I);A!==null&&(Ue.updateMultisampleRenderTarget(A),Ue.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(M,y,I),je.resetDefaultState(),D=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],j===!0&&ie.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function xc(y,I,O,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Je.intersectsSprite(y)){B&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ge);const he=z.update(y),_e=y.material;_e.visible&&_.push(y,he,_e,O,oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Je.intersectsObject(y))){const he=z.update(y),_e=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),oe.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),oe.copy(he.boundingSphere.center)),oe.applyMatrix4(y.matrixWorld).applyMatrix4(ge)),Array.isArray(_e)){const ye=he.groups;for(let Re=0,Le=ye.length;Re<Le;Re++){const Ae=ye[Re],it=_e[Ae.materialIndex];it&&it.visible&&_.push(y,he,it,O,oe.z,Ae)}}else _e.visible&&_.push(y,he,_e,O,oe.z,null)}}const re=y.children;for(let he=0,_e=re.length;he<_e;he++)xc(re[he],I,O,B)}function xu(y,I,O,B){const N=y.opaque,re=y.transmissive,he=y.transparent;m.setupLightsView(O),j===!0&&ie.setGlobalState(M.clippingPlanes,O),B&&Se.viewport(x.copy(B)),N.length>0&&Pa(N,I,O),re.length>0&&Pa(re,I,O),he.length>0&&Pa(he,I,O),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function yu(y,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Ur(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?qo:rr,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const re=m.state.transmissionRenderTarget[B.id],he=B.viewport||x;re.setSize(he.z,he.w);const _e=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(k),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),Fe?J.render(O):M.clear();const ye=M.toneMapping;M.toneMapping=nr;const Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),j===!0&&ie.setGlobalState(M.clippingPlanes,B),Pa(y,O,B),Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re),We.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ae=0,it=I.length;Ae<it;Ae++){const At=I[Ae],wt=At.object,vn=At.geometry,st=At.material,be=At.group;if(st.side===ai&&wt.layers.test(B.layers)){const rn=st.side;st.side=hn,st.needsUpdate=!0,Mu(wt,O,B,vn,st,be),st.side=rn,st.needsUpdate=!0,Le=!0}}Le===!0&&(Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re))}M.setRenderTarget(_e),M.setClearColor(k,Y),Re!==void 0&&(B.viewport=Re),M.toneMapping=ye}function Pa(y,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,re=y.length;N<re;N++){const he=y[N],_e=he.object,ye=he.geometry,Re=B===null?he.material:B,Le=he.group;_e.layers.test(O.layers)&&Mu(_e,I,O,ye,Re,Le)}}function Mu(y,I,O,B,N,re){y.onBeforeRender(M,I,O,B,N,re),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,I,O,B,y,re),N.transparent===!0&&N.side===ai&&N.forceSinglePass===!1?(N.side=hn,N.needsUpdate=!0,M.renderBufferDirect(O,I,B,N,y,re),N.side=Bi,N.needsUpdate=!0,M.renderBufferDirect(O,I,B,N,y,re),N.side=ai):M.renderBufferDirect(O,I,B,N,y,re),y.onAfterRender(M,I,O,B,N,re)}function Ia(y,I,O){I.isScene!==!0&&(I=Ne);const B=Xe.get(y),N=m.state.lights,re=m.state.shadowsArray,he=N.state.version,_e=V.getParameters(y,N.state,re,I,O),ye=V.getProgramCacheKey(_e);let Re=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?S:Tt).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",se),Re=new Map,B.programs=Re);let Le=Re.get(ye);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===he)return Eu(y,_e),Le}else _e.uniforms=V.getUniforms(y),y.onBuild(O,_e,M),y.onBeforeCompile(_e,M),Le=V.acquireProgram(_e,ye),Re.set(ye,Le),B.uniforms=_e.uniforms;const Ae=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),Eu(y,_e),B.needsLights=y0(y),B.lightsStateVersion=he,B.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function Su(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=_o.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Eu(y,I){const O=Xe.get(y);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function v0(y,I,O,B,N){I.isScene!==!0&&(I=Ne),Ue.resetTextureUnits();const re=I.fog,he=B.isMeshStandardMaterial?I.environment:null,_e=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kt,ye=(B.isMeshStandardMaterial?S:Tt).get(B.envMap||he),Re=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!O.morphAttributes.position,it=!!O.morphAttributes.normal,At=!!O.morphAttributes.color;let wt=nr;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=M.toneMapping);const vn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,st=vn!==void 0?vn.length:0,be=Xe.get(B),rn=m.state.lights;if(j===!0&&(ee===!0||y!==b)){const Cn=y===b&&B.id===D;ie.setState(B,y,Cn)}let lt=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==rn.state.version||be.outputColorSpace!==_e||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==ye||B.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==Le||be.morphTargets!==Ae||be.morphNormals!==it||be.morphColors!==At||be.toneMapping!==wt||be.morphTargetsCount!==st)&&(lt=!0):(lt=!0,be.__version=B.version);let Si=be.currentProgram;lt===!0&&(Si=Ia(B,I,N));let Da=!1,mr=!1,yc=!1;const Wt=Si.getUniforms(),zi=be.uniforms;if(Se.useProgram(Si.program)&&(Da=!0,mr=!0,yc=!0),B.id!==D&&(D=B.id,mr=!0),Da||b!==y){Wt.setValue(R,"projectionMatrix",y.projectionMatrix),Wt.setValue(R,"viewMatrix",y.matrixWorldInverse);const Cn=Wt.map.cameraPosition;Cn!==void 0&&Cn.setValue(R,oe.setFromMatrixPosition(y.matrixWorld)),ft.logarithmicDepthBuffer&&Wt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Wt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,mr=!0,yc=!0)}if(N.isSkinnedMesh){Wt.setOptional(R,N,"bindMatrix"),Wt.setOptional(R,N,"bindMatrixInverse");const Cn=N.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Wt.setValue(R,"boneTexture",Cn.boneTexture,Ue))}N.isBatchedMesh&&(Wt.setOptional(R,N,"batchingTexture"),Wt.setValue(R,"batchingTexture",N._matricesTexture,Ue),Wt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&Wt.setValue(R,"batchingColorTexture",N._colorsTexture,Ue));const Mc=O.morphAttributes;if((Mc.position!==void 0||Mc.normal!==void 0||Mc.color!==void 0)&&pe.update(N,O,Si),(mr||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,Wt.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(zi.envMap.value=ye,zi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(zi.envMapIntensity.value=I.environmentIntensity),mr&&(Wt.setValue(R,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&x0(zi,yc),re&&B.fog===!0&&H.refreshFogUniforms(zi,re),H.refreshMaterialUniforms(zi,B,Z,X,m.state.transmissionRenderTarget[y.id]),_o.upload(R,Su(be),zi,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(_o.upload(R,Su(be),zi,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Wt.setValue(R,"center",N.center),Wt.setValue(R,"modelViewMatrix",N.modelViewMatrix),Wt.setValue(R,"normalMatrix",N.normalMatrix),Wt.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Cn=B.uniformsGroups;for(let Sc=0,M0=Cn.length;Sc<M0;Sc++){const bu=Cn[Sc];Ke.update(bu,Si),Ke.bind(bu,Si)}}return Si}function x0(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function y0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,I,O){Xe.get(y.texture).__webglTexture=I,Xe.get(y.depthTexture).__webglTexture=O;const B=Xe.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const O=Xe.get(y);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,O=0){A=y,F=I,w=O;let B=!0,N=null,re=!1,he=!1;if(y){const ye=Xe.get(y);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(R.FRAMEBUFFER,null),B=!1):ye.__webglFramebuffer===void 0?Ue.setupRenderTarget(y):ye.__hasExternalTextures&&Ue.rebindTextures(y,Xe.get(y.texture).__webglTexture,Xe.get(y.depthTexture).__webglTexture);const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Le=Xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?N=Le[I][O]:N=Le[I],re=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?N=Xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[O]:N=Le,x.copy(y.viewport),L.copy(y.scissor),G=y.scissorTest}else x.copy(fe).multiplyScalar(Z).floor(),L.copy(me).multiplyScalar(Z).floor(),G=ke;if(Se.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&Se.drawBuffers(y,N),Se.viewport(x),Se.scissor(L),Se.setScissorTest(G),re){const ye=Xe.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,O)}else if(he){const ye=Xe.get(y.texture),Re=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Re)}D=-1},this.readRenderTargetPixels=function(y,I,O,B,N,re,he){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Se.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ye=y.texture,Re=ye.format,Le=ye.type;if(!ft.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&O>=0&&O<=y.height-N&&R.readPixels(I,O,B,N,ce.convert(Re),ce.convert(Le),re)}finally{const ye=A!==null?Xe.get(A).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(y,I,O,B,N,re,he){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Se.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ye=y.texture,Re=ye.format,Le=ye.type;if(!ft.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-B&&O>=0&&O<=y.height-N){const Ae=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ae),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),R.readPixels(I,O,B,N,ce.convert(Re),ce.convert(Le),0),R.flush();const it=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await X_(R,it,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Ae),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re)}finally{R.deleteBuffer(Ae),R.deleteSync(it)}return re}}finally{const ye=A!==null?Xe.get(A).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(y,I=null,O=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(y.image.width*B),re=Math.floor(y.image.height*B),he=I!==null?I.x:0,_e=I!==null?I.y:0;Ue.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,he,_e,N,re),Se.unbindTexture()},this.copyTextureToTexture=function(y,I,O=null,B=null,N=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],I=arguments[2],N=arguments[3]||0,O=null);let re,he,_e,ye,Re,Le;O!==null?(re=O.max.x-O.min.x,he=O.max.y-O.min.y,_e=O.min.x,ye=O.min.y):(re=y.image.width,he=y.image.height,_e=0,ye=0),B!==null?(Re=B.x,Le=B.y):(Re=0,Le=0);const Ae=ce.convert(I.format),it=ce.convert(I.type);Ue.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const At=R.getParameter(R.UNPACK_ROW_LENGTH),wt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),vn=R.getParameter(R.UNPACK_SKIP_PIXELS),st=R.getParameter(R.UNPACK_SKIP_ROWS),be=R.getParameter(R.UNPACK_SKIP_IMAGES),rn=y.isCompressedTexture?y.mipmaps[N]:y.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,rn.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rn.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_e),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Re,Le,re,he,Ae,it,rn.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Re,Le,rn.width,rn.height,Ae,rn.data):R.texSubImage2D(R.TEXTURE_2D,N,Re,Le,Ae,it,rn),R.pixelStorei(R.UNPACK_ROW_LENGTH,At),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,wt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,vn),R.pixelStorei(R.UNPACK_SKIP_ROWS,st),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be),N===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,I,O=null,B=null,N=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],I=arguments[3],N=arguments[4]||0);let re,he,_e,ye,Re,Le,Ae,it,At;const wt=y.isCompressedTexture?y.mipmaps[N]:y.image;O!==null?(re=O.max.x-O.min.x,he=O.max.y-O.min.y,_e=O.max.z-O.min.z,ye=O.min.x,Re=O.min.y,Le=O.min.z):(re=wt.width,he=wt.height,_e=wt.depth,ye=0,Re=0,Le=0),B!==null?(Ae=B.x,it=B.y,At=B.z):(Ae=0,it=0,At=0);const vn=ce.convert(I.format),st=ce.convert(I.type);let be;if(I.isData3DTexture)Ue.setTexture3D(I,0),be=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ue.setTexture2DArray(I,0),be=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const rn=R.getParameter(R.UNPACK_ROW_LENGTH),lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Si=R.getParameter(R.UNPACK_SKIP_PIXELS),Da=R.getParameter(R.UNPACK_SKIP_ROWS),mr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,wt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,wt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le),y.isDataTexture||y.isData3DTexture?R.texSubImage3D(be,N,Ae,it,At,re,he,_e,vn,st,wt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(be,N,Ae,it,At,re,he,_e,vn,wt.data):R.texSubImage3D(be,N,Ae,it,At,re,he,_e,vn,st,wt),R.pixelStorei(R.UNPACK_ROW_LENGTH,rn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Da),R.pixelStorei(R.UNPACK_SKIP_IMAGES,mr),N===0&&I.generateMipmaps&&R.generateMipmap(be),Se.unbindTexture()},this.initRenderTarget=function(y){Xe.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){F=0,w=0,A=null,Se.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sh?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Yo?"display-p3":"srgb"}}class dh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qy extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new P;class fh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $d=new P,Kd=new dt,Zd=new dt,tM=new P,Jd=new Be,to=new P,el=new mi,Qd=new Be,tl=new xa;class nM extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(r),e.ray.intersectsSphere(el)!==!1&&(Qd.copy(r).invert(),tl.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===a_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Kd.fromBufferAttribute(r.attributes.skinIndex,e),Zd.fromBufferAttribute(r.attributes.skinWeight,e),$d.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Zd.getComponent(s);if(a!==0){const o=Kd.getComponent(s);Jd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(tM.copy($d).applyMatrix4(Jd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class am extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class om extends $t{constructor(e=null,t=1,i=1,r,s,a,o,c,l=ln,h=ln,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=new Be,iM=new Be;class ph{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:iM;ef.multiplyMatrices(o,t[s]),ef.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new om(t,e,e,qn,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new am),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Ll extends un{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Be,tf=new Be,no=[],nf=new On,rM=new Be,qs=new Rt,Ys=new mi;class sM extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,rM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),nf.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),Ys.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,es),tf.multiplyMatrices(i,es),qs.matrixWorld=tf,qs.raycast(e,no);for(let a=0,o=no.length;a<o;a++){const c=no[a];c.instanceId=s,c.object=this,t.push(c)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new om(new Float32Array(r*this.count),r,this.count,Op,li));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cm extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Do=new P,Uo=new P,rf=new Be,$s=new xa,io=new mi,nl=new P,sf=new P;class mh extends St{constructor(e=new gi,t=new cm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Do.fromBufferAttribute(t,r-1),Uo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Do.distanceTo(Uo);e.setAttribute("lineDistance",new Ui(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;rf.copy(r).invert(),$s.copy(e.ray).applyMatrix4(rf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),E=h.getX(_+1),M=ro(this,e,$s,c,f,E);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ro(this,e,$s,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=ro(this,e,$s,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=ro(this,e,$s,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ro(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Do.fromBufferAttribute(a,r),Uo.fromBufferAttribute(a,s),t.distanceSqToSegment(Do,Uo,nl,sf)>i)return;nl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(nl);if(!(c<e.near||c>e.far))return{distance:c,point:sf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const af=new P,of=new P;class aM extends mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)af.fromBufferAttribute(t,r),of.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+af.distanceTo(of);e.setAttribute("lineDistance",new Ui(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oM extends mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lm extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new Be,Pl=new xa,so=new mi,ao=new P;class cM extends St{constructor(e=new gi,t=new lm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;cf.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(cf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);ao.fromBufferAttribute(u,m),lf(ao,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)ao.fromBufferAttribute(u,g),lf(ao,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lf(n,e,t,i,r,s,a){const o=Pl.distanceSqToPoint(n);if(o<t){const c=new P;Pl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Cr extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gp,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _i extends Cr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function oo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hM(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function hf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=n[o+c]}return r}function hm(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class ya{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uM extends ya{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case id:s=e,o=2*t-i;break;case rd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case id:a=e,c=2*i-t;break;case rd:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let F=0;F!==o;++F)s[F]=f*a[h+F]+E*a[l+F]+M*a[c+F]+T*a[u+F];return s}}class dM extends ya{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class fM extends ya{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class vi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case pa:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&lM(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Rc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{const u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=pa;class Ds extends vi{constructor(e,t,i){super(e,t,i)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=fa;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class um extends vi{}um.prototype.ValueTypeName="color";class xs extends vi{}xs.prototype.ValueTypeName="number";class pM extends ya{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t);let l=e*o;for(let h=l+o;l!==h;l+=4)ur.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ys extends vi{InterpolantFactoryMethodLinear(e){return new pM(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends vi{constructor(e,t,i){super(e,t,i)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=fa;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends vi{}Ms.prototype.ValueTypeName="vector";class mM{constructor(e="",t=-1,i=[],r=g_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(_M(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(vi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=hM(c);c=hf(c,1,h),l=hf(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];hm(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const M=d[g];m.push(M.time),f.push(M.morphTarget===_?1:0)}r.push(new xs(".morphTargetInfluence["+_+"]",m,f))}c=p.length*a}else{const p=".bones["+t[u].name+"]";i(Ms,p+".position",d,"pos",r),i(ys,p+".quaternion",d,"rot",r),i(Ms,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return um;case"quaternion":return ys;case"bool":case"boolean":return Ds;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function _M(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gM(n.type);if(n.times===void 0){const t=[],i=[];hm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const er={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const xM=new vM;class Ns{constructor(e){this.manager=e!==void 0?e:xM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class yM extends Error{constructor(e,t){super(e),this.response=t}}class dm extends Ns{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:i,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ri[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){E();function E(){u.read().then(({done:M,value:T})=>{if(M)f.close();else{_+=T.byteLength;const F=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,A=h.length;w<A;w++){const D=h[w];D.onProgress&&D.onProgress(F)}f.enqueue(T),E()}},M=>{f.error(M)})}}});return new Response(m)}else throw new yM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{er.add(e,l);const h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ri[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class MM extends Ns{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=er.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ma("img");function c(){h(),er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class SM extends Ns{constructor(e){super(e)}load(e,t,i,r){const s=new $t,a=new MM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ma extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class EM extends Ma{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const il=new Be,uf=new P,df=new P;class gh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bM extends gh{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TM extends Ma{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new bM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ff=new Be,Ks=new P,rl=new P;class AM extends gh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),rl.copy(i.position),rl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rl),i.updateMatrixWorld(),r.makeTranslation(-Ks.x,-Ks.y,-Ks.z),ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}}class Il extends Ma{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new AM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wM extends gh{constructor(){super(new hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends Ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new wM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RM extends Ma{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class CM extends Ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=er.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return er.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),er.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});er.add(e,c),s.manager.itemStart(e)}}const _h="\\[\\]\\.:\\/",LM=new RegExp("["+_h+"]","g"),vh="[^"+_h+"]",PM="[^"+_h.replace("\\.","")+"]",IM=/((?:WC+[\/:])*)/.source.replace("WC",vh),DM=/(WCOD+)?/.source.replace("WCOD",PM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),NM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),FM=new RegExp("^"+IM+DM+UM+NM+"$"),OM=["material","materials","bones","map"];class BM{constructor(e,t,i){const r=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LM,"")}static parseTrackName(e){const t=FM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);OM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=BM;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const pf=new Be;class co{constructor(e,t,i=0,r=1/0){this.ray=new xa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(e,t=!0,i=[]){return Ul(e,this,i,t),i.sort(mf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ul(e[r],this,i,t);return i.sort(mf),i}}function mf(n,e){return n.distance-e.distance}function Ul(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ul(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function gf(n,e){if(e===__)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wl||e===Hp){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===wl)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class kM extends Ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new WM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new rS(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=oa.extractUrlBase(e);a=oa.resolveURL(l,this.path)}else a=oa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new dm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fm){try{a[qe.KHR_BINARY_GLTF]=new sS(e)}catch(u){r&&r(u);return}s=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new vS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new GM;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new aS(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new oS;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new cS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function zM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HM{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Dl(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Il(h),l.distance=u;break;case"spot":l=new TM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class GM{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Qi}extendParams(e,t,i){const r=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(r)}}class VM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class WM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}}class XM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class jM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class qM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Yt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class YM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class $M{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],Kt),Promise.all(s)}}class KM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ZM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],Kt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Yt)),Promise.all(s)}}class JM{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class QM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:_i}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class eS{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class tS{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nS{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iS{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}}class rS{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new Be,m=new P,f=new ur,E=new P(1,1,1),M=new sM(g.geometry,g.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,T),c.SCALE&&E.fromBufferAttribute(c.SCALE,T),M.setMatrixAt(T,_.compose(m,f,E));for(const T in c)if(T==="_COLOR_0"){const F=c[T];M.instanceColor=new Ll(F.array,F.itemSize,F.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,c[T]);St.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const fm="glTF",Zs=12,_f={JSON:1313821514,BIN:5130562};class sS{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Zs,s=new DataView(e,Zs);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===_f.JSON){const l=new Uint8Array(e,Zs+a,o);this.content=i.decode(l)}else if(c===_f.BIN){const l=Zs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Nl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Nl[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],p=cs[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},o,l,Kt,d)})})}}class oS{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cS{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class pm extends ya{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=r-t,u=(i-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,E=1-m,M=f-d+u;for(let T=0;T!==o;T++){const F=a[_+T+o],w=a[_+T+c]*h,A=a[g+T+o],D=a[g+T]*h;s[T]=E*F+M*w+m*A+f*D}return s}}const lS=new ur;class hS extends pm{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return lS.fromArray(s).normalize().toArray(s),s}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vf={9728:ln,9729:bn,9984:Dp,9985:go,9986:ta,9987:Ii},xf={33071:Ji,33648:wo,10497:ds},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uS={CUBICSPLINE:void 0,LINEAR:pa,STEP:fa},al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Cr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),n.DefaultMaterial}function Sr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Li(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fS(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function pS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mS(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=n.indices+":"+ol(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ol(n.targets[i]);return e}function ol(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _S=new Be;class vS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new SM(this.options.manager):this.textureLoader=new CM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Sr(s,o,r),Li(o,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(oa.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=sl[r.type],o=cs[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new un(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=sl[r.type],l=cs[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let M=t.cache.get(E);M||(_=new l(o,f*p,r.count*p/h),M=new eM(_,p/h),t.cache.add(E,M)),m=new fh(M,c,d%p/h,g)}else o===null?_=new l(r.count*c):_=new l(o,d,r.count*c),m=new un(_,c,g);if(r.sparse!==void 0){const f=sl.SCALAR,E=cs[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,F=new E(a[1],M,r.sparse.count*f),w=new l(a[2],T,r.sparse.count*c);o!==null&&(m=new un(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=F.length;A<D;A++){const b=F[A];if(m.setX(b,w[A*c]),c>=2&&m.setY(b,w[A*c+1]),c>=3&&m.setZ(b,w[A*c+2]),c>=4&&m.setW(b,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=vf[d.magFilter]||bn,h.minFilter=vf[d.minFilter]||Ii,h.wrapS=xf[d.wrapS]||ds,h.wrapT=xf[d.wrapT]||ds,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new $t(_);m.needsUpdate=!0,d(m)}),t.load(oa.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Li(u,a),u.userData.mimeType=a.mimeType||gS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new lm,hi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new cm,hi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Cr}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=r[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ai);const h=s.alphaMode||al.OPAQUE;if(h===al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===al.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qi&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Qi&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qi){const u=s.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],Kt)}return s.emissiveTexture!==void 0&&a!==Qi&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Li(u,s),t.associations.set(u,{materials:e}),s.extensions&&Sr(r,u,s),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return yf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=mS(l),u=r[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=yf(new gi,l,t),r[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?dS(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=a[p];let f;const E=l[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new nM(_,E):new Rt(_,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?f.geometry=gf(f.geometry,Hp):m.mode===Un.TRIANGLE_FAN&&(f.geometry=gf(f.geometry,wl));else if(m.mode===Un.LINES)f=new aM(_,E);else if(m.mode===Un.LINE_STRIP)f=new mh(_,E);else if(m.mode===Un.LINE_LOOP)f=new oM(_,E);else if(m.mode===Un.POINTS)f=new cM(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&pS(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Li(f,s),m.extensions&&Sr(r,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Sr(r,u[0],s),u[0];const d=new Rr;s.extensions&&Sr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new cn(pn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new hh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Li(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Be;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ph(o,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){const p=r.channels[u],g=r.samplers[p.sampler],_=p.target,m=_.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,E=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",E)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let E=0,M=d.length;E<M;E++){const T=d[E],F=p[E],w=g[E],A=_[E],D=m[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const b=i._createAnimationTracks(T,F,w,A,D);if(b)for(let x=0;x<b.length;x++)f.push(b[x])}return new mM(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,_S)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new am:l.length>1?h=new Rr:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Li(h,s),s.extensions&&Sr(i,h,s),s.matrix!==void 0){const u=new Be;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Rr;i.name&&(s.name=r.createUniqueName(i.name)),Li(s,i),i.extensions&&Sr(t,s,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of r.associations)(d instanceof hi||d instanceof $t)&&u.set(d,p);return h.traverse(d=>{const p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];qi[s.path]===qi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(qi[s.path]){case qi.weights:l=xs;break;case qi.rotation:l=ys;break;case qi.position:case qi.scale:l=Ms;break;default:switch(i.itemSize){case 1:l=xs;break;case 2:case 3:default:l=Ms;break}break}const h=r.interpolation!==void 0?uS[r.interpolation]:pa,u=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+qi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Fl(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ys?hS:pm;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xS(n,e,t){const i=e.attributes,r=new On;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const h=Fl(cs[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,c=new P;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Fl(cs[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new mi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function yf(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(const a in i){const o=Nl[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return nt.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Li(n,e),xS(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?fS(n,e.targets,t):n})}const yS=1.65,MS=pn.degToRad(-45),SS=pn.degToRad(45),cl="door_exit",Mf=3.5,lo=.4,Sf=2.2,Js={x:-2.63,y:.75,z:-.13,yawDeg:-4796};class ES{constructor(e){Q(this,"scene");Q(this,"camera");Q(this,"renderer");Q(this,"doorObject",null);Q(this,"modelLoaded",!1);Q(this,"perf");Q(this,"modelBounds",null);Q(this,"CAMERA_HEIGHT",yS);Q(this,"YAW_LIMITS",{min:-1/0,max:1/0});Q(this,"PITCH_LIMITS",{min:-45,max:45});Q(this,"yaw",0);Q(this,"pitch",0);Q(this,"currentYaw",0);Q(this,"currentPitch",0);Q(this,"animationId",null);Q(this,"resizeHandler");Q(this,"canvas");this.canvas=e.canvas,this.perf=e.performance??{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:50,handNumHands:2,handUseGpu:!0,minAcceptableFps:30},console.log(`🎨 SceneManager inicializando con preset: ${this.perf.tier}`),this.scene=new Qy,this.scene.background=new Pe(10406376),this.scene.fog=new dh(10406376,30,100);const t=window.innerWidth/window.innerHeight;this.camera=new cn(75,t,.05,300),this.camera.position.set(0,this.CAMERA_HEIGHT,0),this.camera.rotation.order="YXZ",this.renderer=new Jy({canvas:this.canvas,antialias:this.perf.antialias,powerPreference:this.perf.powerPreference,stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.perf.pixelRatioMax)),this.renderer.shadowMap.enabled=this.perf.shadowsEnabled,this.perf.shadowsEnabled&&(this.renderer.shadowMap.type=this.perf.tier==="high"?Cp:A0),this.renderer.toneMapping=Pp,this.renderer.toneMappingExposure=1.5,this.renderer.outputColorSpace=Yt,this.setupLighting(),this.loadModel(),this.resizeHandler=this.resize.bind(this),window.addEventListener("resize",this.resizeHandler)}setupLighting(){const e=this.perf.tier==="low"?1.6:1.2,t=new RM(16777215,e);this.scene.add(t);const i=new Dl(16772829,1.8);if(i.position.set(2,5,3),this.perf.shadowsEnabled&&(i.castShadow=!0,i.shadow.mapSize.set(this.perf.shadowMapSize,this.perf.shadowMapSize),i.shadow.camera.near=.5,i.shadow.camera.far=30,i.shadow.camera.left=-10,i.shadow.camera.right=10,i.shadow.camera.top=10,i.shadow.camera.bottom=-10,i.shadow.bias=-5e-4),this.scene.add(i),this.scene.add(i.target),this.perf.numDirectionalLights>=2){const r=new Dl(16777215,.8);r.position.set(-3,2,-2),this.scene.add(r)}if(this.perf.numPointLights>0){const r=[[-3,-3],[3,-3],[-3,3],[3,3]],s=Math.min(r.length,this.perf.numPointLights);for(let a=0;a<s;a++){const[o,c]=r[a],l=new Il(16769200,1,12,1.5);l.position.set(o,3,c),this.scene.add(l)}}if(this.perf.tier==="high"){const r=new Il(16764074,1.2,12);r.position.set(0,3.5,0),this.scene.add(r)}if(this.perf.hemisphereLight){const r=new EM(16771248,4202512,.7);r.position.set(0,5,0),this.scene.add(r)}}loadModel(){new kM().load("/mcdonalds-3d/model/mcdonald/scene.gltf",i=>{const r=i.scene,s=new On().setFromObject(r),a=new P,o=new P;s.getSize(a),s.getCenter(o),console.log(`📦 Modelo - size original: [${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}]`),console.log(`📦 Modelo - center original: [${o.x.toFixed(2)}, ${o.y.toFixed(2)}, ${o.z.toFixed(2)}]`);const c=Mf/a.y;r.scale.setScalar(c);const l=new On().setFromObject(r),h=new P,u=new P;l.getSize(h),l.getCenter(u),r.position.x-=u.x,r.position.z-=u.z,r.position.y-=l.min.y,r.updateMatrixWorld(!0);const d=new On().setFromObject(r);console.log(`📐 Modelo escalado a ${c.toFixed(4)}x (altura objetivo: ${Mf}m)`),console.log(`📐 Nuevo tamaño: [${h.x.toFixed(2)}, ${h.y.toFixed(2)}, ${h.z.toFixed(2)}] m`),console.log(`📐 Bounding box final: min=[${d.min.x.toFixed(2)}, ${d.min.y.toFixed(2)}, ${d.min.z.toFixed(2)}] max=[${d.max.x.toFixed(2)}, ${d.max.y.toFixed(2)}, ${d.max.z.toFixed(2)}]`),this.modelBounds={minX:d.min.x+lo,maxX:d.max.x-lo,minZ:d.min.z+lo,maxZ:d.max.z-lo},console.log(`🚶 Límites de caminata: X[${this.modelBounds.minX.toFixed(2)}, ${this.modelBounds.maxX.toFixed(2)}] Z[${this.modelBounds.minZ.toFixed(2)}, ${this.modelBounds.maxZ.toFixed(2)}]`),this.applyStartPosition(),console.log(`📷 Cámara inicial (START_POSITION): x=${this.camera.position.x.toFixed(2)}, y=${this.camera.position.y.toFixed(2)}, z=${this.camera.position.z.toFixed(2)}, yaw=${Js.yawDeg}°`),r.traverse(p=>{if(p instanceof Rt){p.castShadow=!0,p.receiveShadow=!0;const g=p.material;Array.isArray(g)?g.forEach(_=>this.fixMaterialSRGB(_)):g&&this.fixMaterialSRGB(g)}}),this.scene.add(r),this.modelLoaded=!0,this.doorObject=r.getObjectByName("door_exit")??null,this.doorObject||(console.warn('⚠️ No se encontró "door_exit" en el modelo. Buscando por "door"...'),this.doorObject=r.getObjectByName("door")??null),this.doorObject?(this.doorObject.userData.isDoor=!0,this.doorObject.name=cl,console.log("✅ Puerta detectada y etiquetada")):(console.warn("⚠️ No se encontró ningún objeto de puerta. Creando fallback..."),this.createDoorFallback(d)),console.log("✅ Modelo cargado correctamente")},i=>{if(i.total){const r=i.loaded/i.total*100;console.log(`Cargando modelo: ${Math.round(r)}%`)}},i=>{console.error("❌ Error al cargar el modelo:",i),this.buildProceduralScene()})}fixMaterialSRGB(e){const t=e;t.map&&(t.map.colorSpace=Yt),t.emissiveMap&&(t.emissiveMap.colorSpace=Yt),t.opacity=1,t.transparent=!1,t.color&&typeof t.color.a=="number"&&(t.color.a=1),t.depthWrite=!0}buildProceduralScene(){console.warn("🔄 Usando escena procedural (fallback)");const e=new Rt(new vs(20,20),new Cr({color:14210248,roughness:.85}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.scene.add(e);const t=new Rt(new ci(14,4,12),new Cr({color:15921128,roughness:.9,side:hn}));t.position.y=2,t.receiveShadow=!0,this.scene.add(t),this.createDoorFallback()}createDoorFallback(e){const t=e?e.min.z+.2:-4.8,i=0,r=1.2,s=new Rt(new ci(1.6,2.4,.4),new Qi({color:16762668,transparent:!0,opacity:0,depthWrite:!1}));s.position.set(i,r,t),s.userData.isDoor=!0,s.name=cl,this.doorObject=s,this.scene.add(s),console.log(`✅ Collider de puerta creado en posición: (${i}, ${r}, ${t})`);const a=new Rt(new vs(.6,.3),new Cr({color:43588,emissive:65382,emissiveIntensity:.8}));a.position.set(0,r+1.4,t+.21),this.scene.add(a);const o=new Cr({color:14297372,roughness:.5}),c=new Rt(new ci(1.8,.1,.1),o);c.position.set(0,r+1.25,t),this.scene.add(c);const l=new Rt(new ci(.1,2.5,.1),o);l.position.set(-.85,r,t),this.scene.add(l);const h=new Rt(new ci(.1,2.5,.1),o);h.position.set(.85,r,t),this.scene.add(h)}setRotation(e,t){const i=pn.clamp(t,pn.degToRad(this.PITCH_LIMITS.min),pn.degToRad(this.PITCH_LIMITS.max));this.currentYaw=e,this.currentPitch=i,this.yaw=e,this.pitch=i,this.camera.rotation.y=this.currentYaw,this.camera.rotation.x=this.currentPitch}applyRotation(e,t,i=.15){const r=e-this.yaw,s=Math.atan2(Math.sin(r),Math.cos(r));this.yaw=this.yaw+s*i;const a=pn.clamp(t,MS,SS);this.pitch=pn.lerp(this.pitch,a,i),this.currentYaw=this.yaw,this.currentPitch=this.pitch,this.camera.rotation.y=this.currentYaw,this.camera.rotation.x=this.currentPitch}setYawAbsolute(e){this.yaw=e,this.currentYaw=e,this.camera.rotation.y=e}setControls(e,t,i){if(this.yaw+=e*i,this.currentYaw=this.yaw,this.camera.rotation.y=this.currentYaw,t!==0){const r=new P(0,0,-1);r.applyEuler(new Bn(0,this.yaw,0,"YXZ")),r.y=0,r.normalize();const s=r.multiplyScalar(t*i);this.camera.position.add(s),this.clampPosition()}}moveRelative(e,t,i){if(e===0&&t===0)return;const r=new P(0,0,-1);r.applyEuler(new Bn(0,this.yaw,0,"YXZ")),r.y=0,r.normalize();const s=new P().crossVectors(r,new P(0,1,0)).normalize(),a=new P;a.addScaledVector(r,e*Sf*i),a.addScaledVector(s,t*Sf*i),this.camera.position.add(a),this.clampPosition()}clampPosition(){if(!this.modelBounds)return;const e=this.camera.position;e.x=pn.clamp(e.x,this.modelBounds.minX,this.modelBounds.maxX),e.z=pn.clamp(e.z,this.modelBounds.minZ,this.modelBounds.maxZ)}adjustCameraHeight(e){this.camera.position.y+=e,this.camera.position.y=pn.clamp(this.camera.position.y,-5,10)}getCameraInfo(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yawDeg:pn.radToDeg(this.yaw),pitchDeg:pn.radToDeg(this.pitch)}}setCameraPosition(e,t,i){this.camera.position.set(e,t,i)}applyStartPosition(){this.camera.position.set(Js.x,Js.y,Js.z);const e=pn.degToRad(Js.yawDeg);this.yaw=e,this.currentYaw=e,this.pitch=0,this.currentPitch=0,this.camera.rotation.set(0,e,0,"YXZ")}resetPosition(){this.applyStartPosition()}getYaw(){return this.yaw}getPitch(){return this.pitch}setCameraRotation(e,t){this.yaw=e,this.currentYaw=e,this.pitch=t,this.currentPitch=t,this.camera.rotation.set(t,e,0,"YXZ")}checkDoorHit(){if(!this.doorObject)return!1;const e=new co,t=new Oe(0,0);return e.setFromCamera(t,this.camera),e.far=20,e.intersectObject(this.doorObject,!0).length>0}isLookingAtDoor(){if(this.checkDoorHit())return!0;const e=new co;e.setFromCamera(new Oe(0,0),this.camera),e.far=20;const t=e.intersectObjects(this.scene.children,!0);for(const i of t){let r=i.object;for(;r;){if(r.name===cl||r.userData?.isDoor===!0)return!0;r=r.parent}}return!1}getLookedObject(){const e=new co;e.setFromCamera(new Oe(0,0),this.camera),e.far=20;const t=e.intersectObjects(this.scene.children,!0);return t.length===0?null:t[0].object}getObjectAtScreenPoint(e,t){const i=new co;i.setFromCamera(new Oe(e,t),this.camera),i.far=25;const r=i.intersectObjects(this.scene.children,!0);return r.length===0?null:r[0].object}render(){this.renderer.render(this.scene,this.camera)}start(){const e=()=>{this.animationId=requestAnimationFrame(e),this.render()};e()}getPerformancePreset(){return this.perf}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}dispose(){this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.resizeHandler),this.scene.traverse(e=>{if(e instanceof Rt){e.geometry?.dispose?.();const t=e.material;Array.isArray(t)?t.forEach(i=>i.dispose()):t&&t.dispose()}}),this.renderer.dispose()}}var Sa=typeof self<"u"?self:{};function mm(n){e:{for(var e=["CLOSURE_FLAGS"],t=Sa,i=0;i<e.length;i++)if((t=t[e[i]])==null){e=null;break e}e=t}return(n=e&&e[n])!=null&&n}function Er(){throw Error("Invalid UTF8")}function Ef(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let ho,ll;const bS=typeof TextDecoder<"u";let TS;const AS=typeof TextEncoder<"u";function gm(n){if(AS)n=(TS||(TS=new TextEncoder)).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var e=n.charCodeAt(r);if(128>e)i[t++]=e;else{if(2048>e)i[t++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<n.length){const s=n.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}r--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}var ga,_m=mm(610401301),wS=mm(188588736);const bf=Sa.navigator;function Ol(n){return!!_m&&!!ga&&ga.brands.some(({brand:e})=>e&&e.indexOf(n)!=-1)}function Nn(n){var e;return(e=Sa.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(n)!=-1}function Zi(){return!!_m&&!!ga&&0<ga.brands.length}function hl(){return Zi()?Ol("Chromium"):(Nn("Chrome")||Nn("CriOS"))&&!(!Zi()&&Nn("Edge"))||Nn("Silk")}function xh(n){return xh[" "](n),n}ga=bf&&bf.userAgentData||null,xh[" "]=function(){};var RS=!Zi()&&(Nn("Trident")||Nn("MSIE"));!Nn("Android")||hl(),hl(),Nn("Safari")&&(hl()||!Zi()&&Nn("Coast")||!Zi()&&Nn("Opera")||!Zi()&&Nn("Edge")||(Zi()?Ol("Microsoft Edge"):Nn("Edg/"))||Zi()&&Ol("Opera"));var vm={},ia=null;function CS(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),r=0;return function(s,a){function o(p){for(;c<s.length;){var g=s.charAt(c++),_=ia[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}xm();for(var c=0;;){var l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}}(n,function(s){i[r++]=s}),r!==t?i.subarray(0,r):i}function xm(){if(!ia){ia={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],t=0;5>t;t++){var i=n.concat(e[t].split(""));vm[t]=i;for(var r=0;r<i.length;r++){var s=i[r];ia[s]===void 0&&(ia[s]=r)}}}}var ym=typeof Uint8Array<"u",Mm=!RS&&typeof btoa=="function";function Tf(n){if(!Mm){var e;e===void 0&&(e=0),xm(),e=vm[e];var t=Array(Math.floor(n.length/3)),i=e[64]||"";let c=0,l=0;for(;c<n.length-2;c+=3){var r=n[c],s=n[c+1],a=n[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],t[l++]=o+r+s+a}switch(o=0,a=i,n.length-c){case 2:a=e[(15&(o=n[c+1]))<<2]||i;case 1:n=n[c],t[l]=e[n>>2]+e[(3&n)<<4|o>>4]+a+i}return t.join("")}for(e="",t=0,i=n.length-10240;t<i;)e+=String.fromCharCode.apply(null,n.subarray(t,t+=10240));return e+=String.fromCharCode.apply(null,t?n.subarray(t):n),btoa(e)}const Af=/[-_.]/g,LS={"-":"+",_:"/",".":"="};function PS(n){return LS[n]||""}function Sm(n){if(!Mm)return CS(n);Af.test(n)&&(n=n.replace(Af,PS)),n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Ea(n){return ym&&n!=null&&n instanceof Uint8Array}let IS;function Ko(){return IS||(IS=new Uint8Array(0))}var Ss={};let DS;function Em(n){if(n!==Ss)throw Error("illegal external caller")}function Nr(){return DS||(DS=new Ni(null,Ss))}function yh(n){Em(Ss);var e=n.g;return(e=e==null||Ea(e)?e:typeof e=="string"?Sm(e):null)==null?e:n.g=e}var Ni=class{constructor(n,e){if(Em(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const n=yh(this);return n?new Uint8Array(n):Ko()}};function bm(n,e){return Error(`Invalid wire type: ${n} (at position ${e})`)}function Mh(){return Error("Failed to read varint, encoding is invalid.")}function Tm(n,e){return Error(`Tried to read past the end of the data ${e} > ${n}`)}function Sh(n){if(typeof n=="string")return{buffer:Sm(n),P:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Uint8Array)return{buffer:n,P:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Ni)return{buffer:yh(n)||Ko(),P:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Eh(){return typeof BigInt=="function"}const US=typeof Uint8Array.prototype.slice=="function";let Am,_t=0,Bt=0;function Lr(n){const e=0>n;let t=(n=Math.abs(n))>>>0;if(n=Math.floor((n-t)/4294967296),e){const[i,r]=Ah(t,n);n=r,t=i}_t=t>>>0,Bt=n>>>0}function bh(n){const e=Am||(Am=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),Bt=0,_t=e.getUint32(0,!0)}function Bl(n,e){return 4294967296*e+(n>>>0)}function Th(n,e){const t=2147483648&e;return t&&(e=~e>>>0,(n=1+~n>>>0)==0&&(e=e+1>>>0)),n=Bl(n,e),t?-n:n}function No(n,e){if(n>>>=0,2097151>=(e>>>=0))var t=""+(4294967296*e+n);else Eh()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,1e7<=n&&(t+=Math.floor(n/1e7),n%=1e7),1e7<=t&&(e+=Math.floor(t/1e7),t%=1e7),t=e+wf(t)+wf(n));return t}function wf(n){return n=String(n),"0000000".slice(n.length)+n}function wm(){var n=_t,e=Bt;if(2147483648&e)if(Eh())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=Ah(n,e);n="-"+No(t,i)}else n=No(n,e);return n}function Zo(n){if(16>n.length)Lr(Number(n));else if(Eh())n=BigInt(n),_t=Number(n&BigInt(4294967295))>>>0,Bt=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");Bt=_t=0;const t=n.length;for(let i=e,r=(t-e)%6+e;r<=t;i=r,r+=6){const s=Number(n.slice(i,r));Bt*=1e6,_t=1e6*_t+s,4294967296<=_t&&(Bt+=Math.trunc(_t/4294967296),Bt>>>=0,_t>>>=0)}if(e){const[i,r]=Ah(_t,Bt);_t=i,Bt=r}}}function Ah(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function wh(n,e){let t,i=0,r=0,s=0;const a=n.h;let o=n.g;do t=a[o++],i|=(127&t)<<s,s+=7;while(32>s&&128&t);for(32<s&&(r|=(127&t)>>4),s=3;32>s&&128&t;s+=7)t=a[o++],r|=(127&t)<<s;if(Pr(n,o),128>t)return e(i>>>0,r>>>0);throw Mh()}function Rh(n){let e=0,t=n.g;const i=t+10,r=n.h;for(;t<i;){const s=r[t++];if(e|=s,(128&s)==0)return Pr(n,t),!!(127&e)}throw Mh()}function ar(n){const e=n.h;let t=n.g,i=e[t++],r=127&i;if(128&i&&(i=e[t++],r|=(127&i)<<7,128&i&&(i=e[t++],r|=(127&i)<<14,128&i&&(i=e[t++],r|=(127&i)<<21,128&i&&(i=e[t++],r|=i<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Mh();return Pr(n,t),r}function or(n){return ar(n)>>>0}function kl(n){var e=n.h;const t=n.g,i=e[t],r=e[t+1],s=e[t+2];return e=e[t+3],Pr(n,n.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function zl(n){var e=kl(n);n=2*(e>>31)+1;const t=e>>>23&255;return e&=8388607,t==255?e?NaN:1/0*n:t==0?n*Math.pow(2,-149)*e:n*Math.pow(2,t-150)*(e+Math.pow(2,23))}function NS(n){return ar(n)}function ul(n,e,{ca:t=!1}={}){n.ca=t,e&&(e=Sh(e),n.h=e.buffer,n.m=e.P,n.j=0,n.l=n.h.length,n.g=n.j)}function Pr(n,e){if(n.g=e,e>n.l)throw Tm(n.l,e)}function Rm(n,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const t=n.g,i=t+e;if(i>n.l)throw Tm(e,n.l-t);return n.g=i,t}function Cm(n,e){if(e==0)return Nr();var t=Rm(n,e);return n.ca&&n.m?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?Ko():US?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?Nr():new Ni(t,Ss)}var Rf=[];function Lm(n){var e=n.g;if(e.g==e.l)return!1;n.l=n.g.g;var t=or(n.g);if(e=t>>>3,!(0<=(t&=7)&&5>=t))throw bm(t,n.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${n.l})`);return n.m=e,n.h=t,!0}function vo(n){switch(n.h){case 0:n.h!=0?vo(n):Rh(n.g);break;case 1:Pr(n=n.g,n.g+8);break;case 2:if(n.h!=2)vo(n);else{var e=or(n.g);Pr(n=n.g,n.g+e)}break;case 5:Pr(n=n.g,n.g+4);break;case 3:for(e=n.m;;){if(!Lm(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=e)throw Error("Unmatched end-group tag");break}vo(n)}break;default:throw bm(n.h,n.l)}}function ba(n,e,t){const i=n.g.l,r=or(n.g),s=n.g.g+r;let a=s-i;if(0>=a&&(n.g.l=s,t(e,n,void 0,void 0,void 0),a=s-n.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,e}function Ch(n){var e=or(n.g),t=Rm(n=n.g,e);if(n=n.h,bS){var i,r=n;(i=ll)||(i=ll=new TextDecoder("utf-8",{fatal:!0})),e=t+e,r=t===0&&e===r.length?r:r.subarray(t,e);try{var s=i.decode(r)}catch(o){if(ho===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ho=!0}catch{ho=!1}}throw!ho&&(ll=void 0),o}}else{e=(s=t)+e,t=[];let o,c=null;for(;s<e;){var a=n[s++];128>a?t.push(a):224>a?s>=e?Er():(o=n[s++],194>a||(192&o)!=128?(s--,Er()):t.push((31&a)<<6|63&o)):240>a?s>=e-1?Er():(o=n[s++],(192&o)!=128||a===224&&160>o||a===237&&160<=o||(192&(i=n[s++]))!=128?(s--,Er()):t.push((15&a)<<12|(63&o)<<6|63&i)):244>=a?s>=e-2?Er():(o=n[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=n[s++]))!=128||(192&(r=n[s++]))!=128?(s--,Er()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,t.push(55296+(a>>10&1023),56320+(1023&a)))):Er(),8192<=t.length&&(c=Ef(c,t),t.length=0)}s=Ef(c,t)}return s}function Pm(n){const e=or(n.g);return Cm(n.g,e)}function Jo(n,e,t){var i=or(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var uo=[];function Cf(n){return n?/^\d+$/.test(n)?(Zo(n),new Lf(_t,Bt)):null:FS||(FS=new Lf(0,0))}var Lf=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let FS;function Pf(n){return n?/^-?\d+$/.test(n)?(Zo(n),new If(_t,Bt)):null:OS||(OS=new If(0,0))}var If=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let OS;function Fo(n,e,t){for(;0<t||127<e;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function Ta(n,e){for(;127<e;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Qo(n,e){if(0<=e)Ta(n,e);else{for(let t=0;9>t;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function _a(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function Es(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function zn(n,e,t){Ta(n.g,8*e+t)}function Lh(n,e){return zn(n,e,2),e=n.g.end(),Es(n,e),e.push(n.h),e}function Ph(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;127<t;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function ec(n,e,t){zn(n,e,2),Ta(n.g,t.length),Es(n,n.g.end()),Es(n,t)}function Hl(n,e,t,i){t!=null&&(e=Lh(n,e),i(t,n),Ph(n,e))}class Fs{constructor(e,t,i,r){this.g=e,this.h=t,this.l=i,this.pa=r}}function Tn(n){return Array.prototype.slice.call(n)}function Ih(n){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():n}var ui=Ih(),Df=Ih("0di"),dl=Ih("2ex"),Dh=ui?(n,e)=>{n[ui]|=e}:(n,e)=>{n.g!==void 0?n.g|=e:Object.defineProperties(n,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},Oo=ui?(n,e)=>{n[ui]&=~e}:(n,e)=>{n.g!==void 0&&(n.g&=~e)};function Qt(n,e,t){return t?n|e:n&~e}var Lt=ui?n=>0|n[ui]:n=>0|n.g,rt=ui?n=>n[ui]:n=>n.g,Ct=ui?(n,e)=>(n[ui]=e,n):(n,e)=>(n.g!==void 0?n.g=e:Object.defineProperties(n,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),n);function Os(n){return Dh(n,34),n}function BS(n,e){Ct(e,-14591&(0|n))}function Gl(n,e){Ct(e,-14557&(34|n))}function Im(n){return(n=n>>14&1023)===0?536870912:n}var Uh,Aa={},Dm={};function Uf(n){return!(!n||typeof n!="object"||n.Ja!==Dm)}function Nh(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function Fh(n,e,t){if(n!=null){if(typeof n=="string")n=n?new Ni(n,Ss):Nr();else if(n.constructor!==Ni)if(Ea(n))n=n.length?new Ni(t?n:new Uint8Array(n),Ss):Nr();else{if(!e)throw Error();n=void 0}}return n}function Bo(n,e,t){if(!Array.isArray(n)||n.length)return!1;const i=Lt(n);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(t):e.has(t)))&&(Ct(n,1|i),!0)}const Nf=[];function xi(n){if(2&n)throw Error()}Ct(Nf,55),Uh=Object.freeze(Nf);class ko{constructor(e,t,i){this.l=0,this.g=e,this.h=t,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new ko(this.g,this.h,this.m)}}let ir,kS,zS;function Um(n,e){(e=ir?e[ir]:void 0)&&(n[ir]=Tn(e))}function Nm(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}function HS(){const n=Error();Nm(n,"incident"),function(e){Sa.setTimeout(()=>{throw e},0)}(n)}function Vl(n){return Nm(n=Error(n),"warning"),n}function dr(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Fm(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}Object.freeze(new class{}),Object.freeze(new class{});const GS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function tc(n){const e=typeof n;return e==="number"?Number.isFinite(n):e==="string"&&GS.test(n)}function Bs(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?0|n:void 0}function VS(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?n>>>0:void 0}function Ff(n){return n[0]!=="-"&&(20>n.length||n.length===20&&184467>Number(n.substring(0,6)))}function Om(n){return n[0]==="-"?20>n.length||n.length===20&&-922337<Number(n.substring(0,7)):19>n.length||n.length===19&&922337>Number(n.substring(0,6))}function Oh(n){return n=Math.trunc(n),Number.isSafeInteger(n)||(Lr(n),n=Th(_t,Bt)),n}function Bh(n){var e=Math.trunc(Number(n));return Number.isSafeInteger(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Om(n)||(Zo(n),n=wm()),n)}function zo(n){return n==null?n:tc(n)?typeof n=="number"?Oh(n):Bh(n):void 0}function wa(n){if(typeof n!="string")throw Error();return n}function ks(n){if(n!=null&&typeof n!="string")throw Error();return n}function Ir(n){return n==null||typeof n=="string"?n:void 0}function kh(n,e,t,i){if(n!=null&&typeof n=="object"&&n.X===Aa)return n;if(!Array.isArray(n))return t?2&i?(n=e[Df])?e=n:(Os((n=new e).s),e=e[Df]=n):e=new e:e=void 0,e;let r=t=Lt(n);return r===0&&(r|=32&i),r|=2&i,r!==t&&Ct(n,r),new e(n)}function WS(n,e,t){if(e){var i=!!i;if(!tc(e=n))throw Vl("int64");typeof e=="string"?i=Bh(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):Om(e=String(i))?i=e:(Lr(i),i=wm())):i=Oh(e)}else i=zo(n);return typeof(t=(n=i)==null?t?0:void 0:n)=="string"&&(i=+t,Number.isSafeInteger(i))?i:t}let Ho,zh,XS;function Go(n){switch(typeof n){case"boolean":return zh||(zh=[0,void 0,!0]);case"number":return 0<n?void 0:n===0?XS||(XS=[0,void 0]):[-n,void 0];case"string":return[0,n];case"object":return n}}function Dr(n,e){return Bm(n,e[0],e[1])}function Bm(n,e,t){if(n==null&&(n=Ho),Ho=void 0,n==null){var i=96;t?(n=[t],i|=512):n=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(i=Lt(n)))throw Error("farr");if(64&i)return n;if(i|=64,t&&(i|=512,t!==n[0]))throw Error("mid");e:{const r=(t=n).length;if(r){const s=r-1;if(Nh(t[s])){if(1024<=(e=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return Ct(n,i),n}const jS={};let qS=function(){try{return xh(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class fl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const YS=qS?(Object.setPrototypeOf(fl.prototype,Map.prototype),Object.defineProperties(fl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),fl):class extends Map{constructor(){super()}};function Of(n){return n}function pl(n){if(2&n.N)throw Error("Cannot mutate an immutable Map")}var kn=class extends YS{constructor(n,e,t=Of,i=Of){super();let r=Lt(n);r|=64,Ct(n,r),this.N=r,this.U=e,this.S=t,this.Z=this.U?$S:i;for(let s=0;s<n.length;s++){const a=n[s],o=t(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}oa(n=Bf){if(this.size!==0)return this.Y(n)}Y(n=Bf){const e=[],t=super.entries();for(var i;!(i=t.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),e.push(i);return e}clear(){pl(this),super.clear()}delete(n){return pl(this),super.delete(this.S(n,!0,!1))}entries(){var n=this.na();return new ko(n,KS,this)}keys(){return this.Ia()}values(){var n=this.na();return new ko(n,kn.prototype.get,this)}forEach(n,e){super.forEach((t,i)=>{n.call(e,this.get(i),i,this)})}set(n,e){return pl(this),(n=this.S(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(n){const e=this.S(n[0],!1,!0);n=n[1],n=this.U?n===void 0?null:n:this.Z(n,!1,!0,void 0,!1,this.N),super.set(e,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.U;return t?((t=this.Z(e,!1,!0,t,this.ta,this.N))!==e&&super.set(n,t),t):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function $S(n,e,t,i,r,s){return n=kh(n,i,t,s),r&&(n=ic(n)),n}function Bf(n){return n}function KS(n){return[n,this.get(n)]}let ZS;function kf(){return ZS||(ZS=new kn(Os([]),void 0,void 0,void 0,jS))}function Hh(n,e,t,i,r){if(n!=null){if(Array.isArray(n))n=Bo(n,void 0,0)?void 0:r&&2&Lt(n)?n:nc(n,e,t,i!==void 0,r);else if(Nh(n)){const s={};for(let a in n)s[a]=Hh(n[a],e,t,i,r);n=s}else n=e(n,i);return n}}function nc(n,e,t,i,r){const s=i||t?Lt(n):0;i=i?!!(32&s):void 0;const a=Tn(n);for(let o=0;o<a.length;o++)a[o]=Hh(a[o],e,t,i,r);return t&&(Um(a,n),t(s,a)),a}function JS(n){return Hh(n,Gh,void 0,void 0,!1)}function Gh(n){return n.X===Aa?n.toJSON():n instanceof kn?n.oa(JS):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(Bo(e,void 0,0))return}else{if(Ea(e))return Tf(e);if(e instanceof Ni){const t=e.g;return t==null?"":typeof t=="string"?t:e.g=Tf(t)}if(e instanceof kn)return e.oa()}}return e}(n)}function Wl(n,e,t=Gl){if(n!=null){if(ym&&n instanceof Uint8Array)return e?n:new Uint8Array(n);if(Array.isArray(n)){var i=Lt(n);return 2&i||(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),n=e?Ct(n,-12293&(34|i)):nc(n,Wl,4&i?Gl:t,!0,!0)),n}return n.X===Aa?(t=n.s,n=2&(i=rt(t))?n:Vh(n,t,i,!0)):n instanceof kn&&!(2&n.N)&&(t=Os(n.Y(Wl)),n=new kn(t,n.U,n.S,n.Z)),n}}function Vh(n,e,t,i){return n=n.constructor,Ho=e=km(e,t,i),e=new n(e),Ho=void 0,e}function km(n,e,t){const i=t||2&e?Gl:BS,r=!!(32&e);return n=function(s,a,o){const c=Tn(s);var l=c.length;const h=256&a?c[l-1]:void 0;for(l+=h?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(h){a=c[a]={};for(const u in h)a[u]=o(h[u])}return Um(c,s),c}(n,e,s=>Wl(s,r,i)),Dh(n,32|(t?2:0)),n}function ic(n){const e=n.s,t=rt(e);return 2&t?Vh(n,e,t,!1):n}function zm(n,e,t,i){return!(4&e)||t!=null}function cr(n,e){return yi(n=n.s,rt(n),e)}function zf(n,e,t,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=n.length||e>=t))return n[e]}function yi(n,e,t,i){if(t===-1)return null;const r=Im(e);if(!(t>=r)){var s=n.length;return i&&256&e&&(i=n[s-1][t])!=null?(zf(n,e,r,t)&&dl!=null&&(4<=(e=(n=zS??(zS={}))[dl]||0)||(n[dl]=e+1,HS())),i):zf(n,e,r,t)}return 256&e?n[n.length-1][t]:void 0}function pt(n,e,t,i){const r=n.s;let s=rt(r);return xi(s),vt(r,s,e,t,i),n}function vt(n,e,t,i,r){const s=Im(e);if(t>=s||r){let a=e;if(256&e)r=n[n.length-1];else{if(i==null)return a;r=n[s+(+!!(512&e)-1)]={},a|=256}return r[t]=i,t<s&&(n[t+(+!!(512&e)-1)]=void 0),a!==e&&Ct(n,a),a}return n[t+(+!!(512&e)-1)]=i,256&e&&t in(n=n[n.length-1])&&delete n[t],e}function zs(n,e,t,i,r){var s=2&e;let a=yi(n,e,t,r);Array.isArray(a)||(a=Uh);const o=!(2&i);i=!(1&i);const c=!!(32&e);let l=Lt(a);return l!==0||!c||s||o?1&l||(l|=1,Ct(a,l)):(l|=33,Ct(a,l)),s?(n=!1,2&l||(Os(a),n=!!(4&l)),(i||n)&&Object.freeze(a)):(s=!!(2&l)||!!(2048&l),i&&s?(a=Tn(a),i=1,c&&!o&&(i|=32),Ct(a,i),vt(n,e,t,a,r)):o&&32&l&&!s&&Oo(a,32)),a}function xo(n,e){n=n.s;let t=rt(n);const i=yi(n,t,e),r=dr(i);return r!=null&&r!==i&&vt(n,t,e,r),r}function Hm(n){n=n.s;let e=rt(n);const t=yi(n,e,1),i=Fh(t,!0,!!(34&e));return i!=null&&i!==t&&vt(n,e,1,i),i}function rs(n,e,t){const i=n.s;let r=rt(i);const s=2&r?1:2;let a=Gm(i,r,e);var o=Lt(a);if(zm(n,o,void 0)){(4&o||Object.isFrozen(a))&&(a=Tn(a),o=Fr(o,r),r=vt(i,r,e,a));let c=n=0;for(;n<a.length;n++){const l=t(a[n]);l!=null&&(a[c++]=l)}c<n&&(a.length=c),o=Qt(o=Vm(o,r),20,!0),o=Qt(o,4096,!1),o=Qt(o,8192,!1),Ct(a,o),2&o&&Object.freeze(a)}return ca(o)||(t=o,(o=(n=s===1||s===4&&!!(32&o))?Qt(o,2,!0):bs(o,r,!1))!==t&&Ct(a,o),n&&Object.freeze(a)),s===2&&ca(o)&&(a=Tn(a),o=bs(o=Fr(o,r),r,!1),Ct(a,o),vt(i,r,e,a)),a}function Gm(n,e,t){return n=yi(n,e,t),Array.isArray(n)?n:Uh}function Vm(n,e){return n===0&&(n=Fr(n,e)),Qt(n,1,!0)}function ca(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function Wm(n){n=Tn(n);for(let e=0;e<n.length;e++){const t=n[e]=Tn(n[e]);Array.isArray(t[1])&&(t[1]=Os(t[1]))}return n}function Vo(n,e,t){{const o=n.s;let c=rt(o);if(xi(c),t==null)vt(o,c,e);else{var i,r=Lt(t),s=r,a=!!(2&r)||Object.isFrozen(t);if((i=!a)&&(i=!1),zm(n,r))for(r=21,a&&(t=Tn(t),s=0,r=bs(r=Fr(r,c),c,!0)),n=0;n<t.length;n++)t[n]=wa(t[n]);i&&(t=Tn(t),s=0,r=bs(r=Fr(r,c),c,!0)),r!==s&&Ct(t,r),vt(o,c,e,t)}}}function Xl(n,e,t,i){n=n.s;let r=rt(n);xi(r),vt(n,r,e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function Ra(n,e,t,i){const r=rt(n);xi(r),n=zs(n,r,e,2),i=t(i,!!(4&(e=Lt(n)))&&!!(4096&e)),n.push(i)}function QS(n){return n}function ml(n,e){return Wh(n=n.s,rt(n),Rg)===e?e:-1}function Wh(n,e,t){let i=0;for(let r=0;r<t.length;r++){const s=t[r];yi(n,e,s)!=null&&(i!==0&&(e=vt(n,e,i)),i=s)}return i}function Xh(n,e,t,i){let r=rt(n);xi(r);const s=yi(n,r,t,i);let a;if(s!=null&&s.X===Aa)return(e=ic(s))!==s&&vt(n,r,t,e,i),e.s;if(Array.isArray(s)){const o=Lt(s);a=2&o?km(s,o,!1):s,a=Dr(a,e)}else a=Dr(void 0,e);return a!==s&&vt(n,r,t,a,i),a}function Xm(n,e,t,i){n=n.s;let r=rt(n);const s=yi(n,r,t,i);return(e=kh(s,e,!1,r))!==s&&e!=null&&vt(n,r,t,e,i),e}function Qe(n,e,t,i=!1){if((e=Xm(n,e,t,i))==null)return e;n=n.s;let r=rt(n);if(!(2&r)){const s=ic(e);s!==e&&vt(n,r,t,e=s,i)}return e}function jm(n,e,t,i,r,s){var a=2,o=!!(2&e);a=o?1:a,r=!!r,s&&(s=!o),o=Gm(n,e,i);var c=Lt(o);const l=!!(4&c);if(!l){var h=o,u=e;const d=!!(2&(c=Vm(c,e)));d&&(u=Qt(u,2,!0));let p=!d,g=!0,_=0,m=0;for(;_<h.length;_++){const f=kh(h[_],t,!1,u);if(f instanceof t){if(!d){const E=!!(2&Lt(f.s));p&&(p=!E),g&&(g=E)}h[m++]=f}}m<_&&(h.length=m),c=Qt(c,4,!0),c=Qt(c,16,g),c=Qt(c,8,p),Ct(h,c),d&&Object.freeze(h)}if(s&&!(8&c||!o.length&&(a===1||a===4&&32&c))){for(ca(c)&&(o=Tn(o),c=Fr(c,e),e=vt(n,e,i,o)),t=o,s=c,h=0;h<t.length;h++)(c=t[h])!==(u=ic(c))&&(t[h]=u);s=Qt(s,8,!0),s=Qt(s,16,!t.length),Ct(t,s),c=s}return ca(c)||(t=c,(c=(s=a===1||a===4&&!!(32&c))?Qt(c,!o.length||16&c&&(!l||32&c)?2:2048,!0):bs(c,e,r))!==t&&Ct(o,c),s&&Object.freeze(o)),a===2&&ca(c)&&(o=Tn(o),c=bs(c=Fr(c,e),e,r),Ct(o,c),vt(n,e,i,o)),o}function ki(n,e,t){n=n.s;const i=rt(n);return jm(n,i,e,t,!1,!(2&i))}function Ee(n,e,t,i,r){return i==null&&(i=void 0),pt(n,t,i,r)}function la(n,e,t,i){i==null&&(i=void 0),n=n.s;let r=rt(n);xi(r),(t=Wh(n,r,t))&&t!==e&&i!=null&&(r=vt(n,r,t)),vt(n,r,e,i)}function Fr(n,e){return n=Qt(n,2,!!(2&e)),n=Qt(n,32,!0),Qt(n,2048,!1)}function bs(n,e,t){return 32&e&&t||(n=Qt(n,32,!1)),n}function Wo(n,e,t,i){n=n.s;const r=rt(n);xi(r),e=jm(n,r,t,e,!0),t=i??new t,e.push(t),2&Lt(t.s)?Oo(e,8):Oo(e,16)}function Fn(n,e){return Bs(cr(n,e))}function $n(n,e){return n??e}function Ut(n,e){return $n(xo(n,e),0)}function di(n,e){return $n(Ir(cr(n,e)),"")}function va(n,e,t){if(t!=null&&typeof t!="boolean")throw n=typeof t,Error(`Expected boolean but got ${n!="object"?n:t?Array.isArray(t)?"array":n:"null"}: ${t}`);pt(n,e,t)}function fi(n,e,t){if(t!=null){if(typeof t!="number"||!Number.isFinite(t))throw Vl("int32");t|=0}pt(n,e,t)}function xe(n,e,t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);pt(n,e,t)}function Kn(n,e,t){e.g?e.m(n,e.g,e.h,t,!0):e.m(n,e.h,t,!0)}kn.prototype.toJSON=void 0,kn.prototype.Ja=Dm;var ve=class{constructor(n,e){this.s=Bm(n,e)}toJSON(){return qm(this,nc(this.s,Gh,void 0,void 0,!1),!0)}l(){var n=s3;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.s;return Vh(this,n,rt(n),!1)}P(){return!!(2&Lt(this.s))}};function qm(n,e,t){var i=wS?void 0:n.constructor.B;const r=rt(t?n.s:e);if(!(n=e.length))return e;let s,a;if(Nh(t=e[n-1])){e:{var o=t;let h={},u=!1;for(var c in o){let d=o[c];if(Array.isArray(d)){let p=d;(Bo(d,i,+c)||Uf(d)&&d.size===0)&&(d=null),d!=p&&(u=!0)}d!=null?h[c]=d:u=!0}if(u){for(var l in h){o=h;break e}o=null}}o!=t&&(s=!0),n--}for(c=+!!(512&r)-1;0<n&&(t=e[l=n-1],l-=c,t==null||Bo(t,i,l)||Uf(t)&&t.size===0);n--)a=!0;return(s||a)&&(e=Array.prototype.slice.call(e,0,n),o&&e.push(o)),e}function Ym(n){return Array.isArray(n)?n[0]instanceof Fs?n:[hE,n]:[n,void 0]}function Hs(n,e){if(Array.isArray(e)){var t=Lt(e);if(4&t)return e;for(var i=0,r=0;i<e.length;i++){const s=n(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Ct(e,-12289&(5|t)),2&t&&Object.freeze(e),e}}ve.prototype.X=Aa,ve.prototype.toString=function(){return qm(this,this.s,!1).toString()};const Hf=Symbol();function jh(n){let e=n[Hf];if(!e){const t=Km(n),i=Yh(n),r=i.l;e=r?(s,a)=>r(s,a,i):(s,a)=>{for(;Lm(a)&&a.h!=4;){var o=a.m,c=i[o];if(!c){var l=i.ea;l&&(l=l[o])&&(c=i[o]=eE(l))}c&&c(a,s,o)||(o=(c=a).l,vo(c),c.ia?c=void 0:(l=c.g.g-o,c.g.g=o,c=Cm(c.g,l)),o=s,c&&(ir||(ir=Symbol()),(l=o[ir])?l.push(c):o[ir]=[c]))}t===$m||t===yo||t.j||(s[kS||(kS=Symbol())]=t)},n[Hf]=e}return e}function eE(n){const e=(n=Ym(n))[0].g;if(n=n[1]){const t=jh(n),i=Yh(n).T;return(r,s,a)=>e(r,s,a,i,t)}return e}class gl{}let $m,yo;const ha=Symbol();function tE(n,e,t){const i=t[1];let r;if(i){const s=i[ha];r=s?s.T:Go(i[0]),n[e]=s??i}r&&r===zh?(n.g||(n.g=new Set)).add(e):t[0]&&(n.h||(n.h=new Set)).add(e)}function Gf(n,e){return[n.l,!e||0<e[0]?void 0:e]}function Km(n){var e=n[ha];if(e)return e;if(!(e=qh(n,n[ha]=new gl,Gf,Gf,tE)).ea&&!e.h&&!e.g){let t=!0;for(let i in e)isNaN(i)||(t=!1);t?(Go(n[0])===zh?yo?e=yo:((e=new gl).T=Go(!0),e=yo=e):e=$m||($m=new gl),e=n[ha]=e):e.j=!0}return e}function nE(n,e,t){n[e]=t}function qh(n,e,t,i,r=nE){e.T=Go(n[0]);let s=0;var a=n[++s];a&&a.constructor===Object&&(e.ea=a,typeof(a=n[++s])=="function"&&(e.l=a,e.m=n[++s],a=n[++s]));const o={};for(;Array.isArray(a)&&typeof a[0]=="number"&&0<a[0];){for(var c=0;c<a.length;c++)o[a[c]]=a;a=n[++s]}for(c=1;a!==void 0;){let u;typeof a=="number"&&(c+=a,a=n[++s]);var l=void 0;if(a instanceof Fs?u=a:(u=uE,s--),u.pa){a=n[++s],l=n;var h=s;typeof a=="function"&&(a=a(),l[h]=a),l=a}for(h=c+1,typeof(a=n[++s])=="number"&&0>a&&(h-=a,a=n[++s]);c<h;c++){const d=o[c];r(e,c,l?i(u,l,d):t(u,d))}}return e}const Vf=Symbol();function Zm(n){let e=n[Vf];if(!e){const t=rc(n);e=(i,r)=>Qm(i,r,t),n[Vf]=e}return e}const jl=Symbol();function iE(n){return n.h}function rE(n,e){let t,i;const r=n.h;return(s,a,o)=>r(s,a,o,i||(i=rc(e).T),t||(t=Zm(e)))}function rc(n){let e=n[jl];return e||(e=qh(n,n[jl]={},iE,rE),Jm(n),e)}const ql=Symbol();function sE(n,e){const t=n.g;return e?(i,r,s)=>t(i,r,s,e):t}function aE(n,e,t){const i=n.g;let r,s;return(a,o,c)=>i(a,o,c,s||(s=Yh(e).T),r||(r=jh(e)),t)}function Yh(n){let e=n[ql];return e||(Km(n),e=qh(n,n[ql]={},sE,aE),Jm(n),e)}function Jm(n){ql in n&&ha in n&&jl in n&&(n.length=0)}function Wf(n,e){var t=n[e];if(t)return t;if((t=n.ea)&&(t=t[e])){var i=(t=Ym(t))[0].h;if(t=t[1]){const r=Zm(t),s=rc(t).T;t=(t=n.m)?t(s,r):(a,o,c)=>i(a,o,c,s,r)}else t=i;return n[e]=t}}function Qm(n,e,t){for(var i=rt(n),r=+!!(512&i)-1,s=n.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const c=n[a];if(c==null)continue;const l=a-r,h=Wf(t,l);h&&h(e,c,l)}if(256&i){i=n[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(o=Wf(t,r))&&o(e,s,r)}if(n=ir?n[ir]:void 0)for(Es(e,e.g.end()),t=0;t<n.length;t++)Es(e,yh(n[t])||Ko())}function gn(n,e){return new Fs(n,e,!1,!1)}function Gs(n,e){return new Fs(n,e,!0,!1)}function sc(n,e){return new Fs(n,e,!1,!0)}function _n(n,e,t){vt(n,rt(n),e,t)}var oE=sc(function(n,e,t,i,r){return n.h===2&&(n=ba(n,Dr([void 0,void 0],i),r),xi(i=rt(e)),(r=yi(e,i,t))instanceof kn?2&r.N?((r=r.Y()).push(n),vt(e,i,t,r)):r.Oa(n):Array.isArray(r)?(2&Lt(r)&&vt(e,i,t,r=Wm(r)),r.push(n)):vt(e,i,t,[n]),!0)},function(n,e,t,i,r){if(e instanceof kn)e.forEach((s,a)=>{Hl(n,t,Dr([a,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Hl(n,t,Dr(a,i),r)}});function eg(n,e,t){e:if(e!=null){if(tc(e)){if(typeof e=="string"){e=Bh(e);break e}if(typeof e=="number"){e=Oh(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&Pf(e),e!=null&&(zn(n,t,0),typeof e=="number"?(n=n.g,Lr(e),Fo(n,_t,Bt)):(t=Pf(e),Fo(n.g,t.h,t.g))))}function tg(n,e,t){(e=Bs(e))!=null&&e!=null&&(zn(n,t,0),Qo(n.g,e))}function ng(n,e,t){(e=Fm(e))!=null&&(zn(n,t,0),n.g.g.push(e?1:0))}function ig(n,e,t){(e=Ir(e))!=null&&ec(n,t,gm(e))}function ac(n,e,t,i,r){Hl(n,t,e instanceof ve?e.s:Array.isArray(e)?Dr(e,i):void 0,r)}function rg(n,e,t){(e=e==null||typeof e=="string"||Ea(e)||e instanceof Ni?e:void 0)!=null&&ec(n,t,Sh(e).buffer)}function sg(n,e,t){return(n.h===5||n.h===2)&&(e=zs(e,rt(e),t,2,!1),n.h==2?Jo(n,zl,e):e.push(zl(n.g)),!0)}var kt,Fi=gn(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=kl(i);const r=kl(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,_n(e,t,s==2047?n?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=dr(e))!=null&&(zn(n,t,1),n=n.g,(t=Am||(Am=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),_t=t.getUint32(0,!0),Bt=t.getUint32(4,!0),_a(n,_t),_a(n,Bt))}),Gt=gn(function(n,e,t){return n.h===5&&(_n(e,t,zl(n.g)),!0)},function(n,e,t){(e=dr(e))!=null&&(zn(n,t,5),n=n.g,bh(e),_a(n,_t))}),cE=Gs(sg,function(n,e,t){if((e=Hs(dr,e))!=null)for(let a=0;a<e.length;a++){var i=n,r=t,s=e[a];s!=null&&(zn(i,r,5),i=i.g,bh(s),_a(i,_t))}}),$h=Gs(sg,function(n,e,t){if((e=Hs(dr,e))!=null&&e.length){zn(n,t,2),Ta(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,bh(e[i]),_a(t,_t)}}),lr=gn(function(n,e,t){return n.h===0&&(_n(e,t,wh(n.g,Th)),!0)},eg),_l=gn(function(n,e,t){return n.h===0&&(_n(e,t,(n=wh(n.g,Th))===0?void 0:n),!0)},eg),lE=gn(function(n,e,t){return n.h===0&&(_n(e,t,wh(n.g,Bl)),!0)},function(n,e,t){e:if(e!=null){if(tc(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),Ff(e)||(Zo(e),e=No(_t,Bt)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(r){if(0>r){Lr(r);const s=No(_t,Bt);return r=Number(s),Number.isSafeInteger(r)?r:s}return Ff(String(r))?r:(Lr(r),Bl(_t,Bt))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&Cf(e),e!=null&&(zn(n,t,0),typeof e=="number"?(n=n.g,Lr(e),Fo(n,_t,Bt)):(t=Cf(e),Fo(n.g,t.h,t.g))))}),Pt=gn(function(n,e,t){return n.h===0&&(_n(e,t,ar(n.g)),!0)},tg),oc=Gs(function(n,e,t){return(n.h===0||n.h===2)&&(e=zs(e,rt(e),t,2,!1),n.h==2?Jo(n,ar,e):e.push(ar(n.g)),!0)},function(n,e,t){if((e=Hs(Bs,e))!=null&&e.length){t=Lh(n,t);for(let i=0;i<e.length;i++)Qo(n.g,e[i]);Ph(n,t)}}),Ts=gn(function(n,e,t){return n.h===0&&(_n(e,t,(n=ar(n.g))===0?void 0:n),!0)},tg),Nt=gn(function(n,e,t){return n.h===0&&(_n(e,t,Rh(n.g)),!0)},ng),ua=gn(function(n,e,t){return n.h===0&&(_n(e,t,(n=Rh(n.g))===!1?void 0:n),!0)},ng),tn=Gs(function(n,e,t){return n.h===2&&(Ra(e,t,QS,n=Ch(n)),!0)},function(n,e,t){if((e=Hs(Ir,e))!=null)for(let a=0;a<e.length;a++){var i=n,r=t,s=e[a];s!=null&&ec(i,r,gm(s))}}),hr=gn(function(n,e,t){return n.h===2&&(_n(e,t,(n=Ch(n))===""?void 0:n),!0)},ig),ht=gn(function(n,e,t){return n.h===2&&(_n(e,t,Ch(n)),!0)},ig),hE=sc(function(n,e,t,i,r){return n.h===2&&(ba(n,Xh(e,i,t,!0),r),!0)},ac),uE=sc(function(n,e,t,i,r){return n.h===2&&(ba(n,Xh(e,i,t),r),!0)},ac);kt=new Fs(function(n,e,t,i,r){if(n.h!==2)return!1;i=Dr(void 0,i);let s=rt(e);xi(s);let a=zs(e,s,t,3);return s=rt(e),4&Lt(a)&&(a=Tn(a),Ct(a,-2079&(1|Lt(a))),vt(e,s,t,a)),a.push(i),ba(n,i,r),!0},function(n,e,t,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)ac(n,e[s],t,i,r)},!0,!0);var ut=sc(function(n,e,t,i,r,s){if(n.h!==2)return!1;let a=rt(e);return xi(a),(s=Wh(e,a,s))&&t!==s&&vt(e,a,s),ba(n,e=Xh(e,i,t),r),!0},ac),ag=gn(function(n,e,t){return n.h===2&&(_n(e,t,Pm(n)),!0)},rg),dE=Gs(function(n,e,t){return(n.h===0||n.h===2)&&(e=zs(e,rt(e),t,2,!1),n.h==2?Jo(n,or,e):e.push(or(n.g)),!0)},function(n,e,t){if((e=Hs(VS,e))!=null)for(let a=0;a<e.length;a++){var i=n,r=t,s=e[a];s!=null&&(zn(i,r,0),Ta(i.g,s))}}),pi=gn(function(n,e,t){return n.h===0&&(_n(e,t,ar(n.g)),!0)},function(n,e,t){(e=Bs(e))!=null&&(e=parseInt(e,10),zn(n,t,0),Qo(n.g,e))}),fE=Gs(function(n,e,t){return(n.h===0||n.h===2)&&(e=zs(e,rt(e),t,2,!1),n.h==2?Jo(n,NS,e):e.push(ar(n.g)),!0)},function(n,e,t){if((e=Hs(Bs,e))!=null&&e.length){t=Lh(n,t);for(let i=0;i<e.length;i++)Qo(n.g,e[i]);Ph(n,t)}});class pE{constructor(e,t){this.h=e,this.g=t,this.l=Qe,this.m=Ee,this.defaultValue=void 0}}function Zn(n,e){return new pE(n,e)}function fr(n,e){return(t,i)=>{if(uo.length){const s=uo.pop();s.o(i),ul(s.g,t,i),t=s}else t=new class{constructor(s,a){if(Rf.length){const o=Rf.pop();ul(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,ul(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({ia:s=!1}={}){this.ia=s}}(t,i);try{const s=new n,a=s.s;jh(e)(a,t);var r=s}finally{t.g.clear(),t.m=-1,t.h=-1,100>uo.length&&uo.push(t)}return r}}function cc(n){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Qm(this.s,e,rc(n)),Es(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];t.set(o,s),s+=o.length}return e.l=[t],t}}var Xf=class extends ve{constructor(n){super(n)}},og=[0,hr,gn(function(n,e,t){return n.h===2&&(_n(e,t,(n=Pm(n))===Nr()?void 0:n),!0)},function(n,e,t){if(e!=null){if(e instanceof ve){const i=e.Qa;return void(i&&(e=i(e),e!=null&&ec(n,t,Sh(e).buffer)))}if(Array.isArray(e))return}rg(n,e,t)})],mE=[0,ht],cg=[0,Pt,pi,Nt,-1,oc,pi,-1],gE=[0,Nt,-1],lg=class extends ve{constructor(){super()}};lg.B=[6];var hg=[0,Nt,ht,Nt,pi,-1,fE,ht,-1,gE,pi],ug=[0,ht,-2],jf=class extends ve{constructor(){super()}},dg=[0],fg=[0,Pt,Nt,-4],An=class extends ve{constructor(n){super(n,2)}},Et={},_E=[-2,Et,Nt];Et[336783863]=[0,ht,Nt,-1,Pt,[0,[1,2,3,4,5,6],ut,dg,ut,hg,ut,ug,ut,fg,ut,cg,ut,[0,ht]],mE,Nt,[0,[1,3],[2,4],ut,[0,oc],-1,ut,[0,tn],-1,kt,[0,ht,-1]],ht];var vE=[0,hr,ua],pg=[0,_l,-1,ua,-3,_l,oc,hr,Ts,_l,-1,ua,Ts,ua,-2,hr],Ca=[-1,{}],mg=[0,ht,1,Ca],gg=[0,ht,tn,Ca];function wn(n,e){Xl(n,2,ks(e),"")}function mt(n,e){Ra(n.s,3,wa,e)}function Ze(n,e){Ra(n.s,4,wa,e)}var nn=class extends ve{constructor(n){super(n,500)}o(n){return Ee(this,0,7,n)}};nn.B=[3,4,5,6,8,13,17,1005];var xE=[-500,hr,-1,tn,-3,_E,kt,og,Ts,-1,mg,gg,kt,vE,hr,pg,Ts,tn,987,tn],yE=[0,hr,-1,Ca],ME=[-500,ht,-1,[-1,{}],998,ht],SE=[-500,ht,tn,-1,[-2,{},Nt],997,tn,-1],EE=[-500,ht,tn,Ca,998,tn];function Rn(n,e){Wo(n,1,nn,e)}function xt(n,e){Ra(n.s,10,wa,e)}function et(n,e){Ra(n.s,15,wa,e)}var dn=class extends ve{constructor(n){super(n,500)}o(n){return Ee(this,0,1001,n)}};dn.B=[1,6,7,9,10,15,16,17,14,1002];var _g=[-500,kt,xE,4,kt,ME,kt,SE,Ts,kt,EE,tn,Ts,mg,gg,kt,yE,tn,-2,pg,hr,-1,ua,979,Ca,kt,og],bE=fr(dn,_g);dn.prototype.g=cc(_g);var TE=[0,kt,[0,Pt,-2]],AE=class extends ve{constructor(n){super(n)}},wE=[0,Pt,Gt,ht,-1],Kh=class extends ve{constructor(n){super(n)}g(){return ki(this,AE,1)}};Kh.B=[1];var vg=[0,kt,wE],lc=fr(Kh,vg),RE=[0,Pt,Gt],CE=[0,Pt,-1,TE],LE=class extends ve{constructor(n){super(n)}},PE=[0,Pt,-3],IE=[0,Gt,-3],DE=class extends ve{constructor(n){super(n)}},UE=[0,Gt,-1,ht,Gt],Mo=class extends ve{constructor(n){super(n)}h(){return Qe(this,LE,2)}g(){return ki(this,DE,5)}};Mo.B=[5];var NE=[0,pi,PE,IE,CE,kt,UE],xg=class extends ve{constructor(n){super(n)}};xg.B=[1,2,3,8,9];var yg=fr(xg,[0,tn,oc,$h,NE,ht,-1,lr,kt,RE,tn,lr]),Mg=class extends ve{constructor(n){super(n)}},FE=[0,Gt,-4],Sg=class extends ve{constructor(n){super(n)}};Sg.B=[1];var ls=fr(Sg,[0,kt,FE]),Eg=class extends ve{constructor(n){super(n)}},OE=[0,Gt,-4],bg=class extends ve{constructor(n){super(n)}};bg.B=[1];var La=fr(bg,[0,kt,OE]),Tg=class extends ve{constructor(n){super(n)}};Tg.B=[3];var BE=[0,Pt,-1,$h,pi],Ag=class extends ve{constructor(){super()}};Ag.prototype.g=cc([0,Gt,-4,lr]);var kE=class extends ve{constructor(n){super(n)}},zE=[0,1,Pt,ht,vg],wg=class extends ve{constructor(n){super(n)}};wg.B=[1];var HE=fr(wg,[0,kt,zE,lr]),Yl=class extends ve{constructor(n){super(n)}};Yl.B=[1];var GE=class extends ve{constructor(n){super(n)}qa(){const n=Hm(this);return n??Nr()}},VE=class extends ve{constructor(n){super(n)}},Rg=[1,2],WE=[0,Rg,ut,[0,$h],ut,[0,ag],Pt,ht],Cg=class extends ve{constructor(n){super(n)}};Cg.B=[1];var XE=fr(Cg,[0,kt,WE,lr]),hc=class extends ve{constructor(n){super(n)}};hc.B=[4,5];var Lg=[0,ht,Pt,Gt,tn,-1],qf=class extends ve{constructor(n){super(n)}},jE=[0,Nt,-1],Yf=class extends ve{constructor(n){super(n)}},So=[1,2,3,4,5],Xo=class extends ve{constructor(n){super(n)}g(){return Hm(this)!=null}h(){return Ir(cr(this,2))!=null}},Pg=[0,ag,ht,[0,Pt,lr,-1],[0,lE,lr]],bt=class extends ve{constructor(n){super(n)}g(){return Fm(cr(this,2))??!1}},Ft=[0,Pg,Nt,[0,So,ut,fg,ut,hg,ut,cg,ut,dg,ut,ug],pi],uc=class extends ve{constructor(n){super(n)}},Zh=[0,Ft,Gt,-1,Pt],qE=Zn(502141897,uc);Et[502141897]=Zh;var Ig=[0,Pg];Et[512499200]=Ig;var Dg=[0,Ig];Et[515723506]=Dg;var YE=fr(class extends ve{constructor(n){super(n)}},[0,[0,pi,-1,cE,dE],BE]),Ug=[0,Ft];Et[508981768]=Ug;var Ng=class extends ve{constructor(n){super(n)}},Jh=[0,Ft,Gt,Ug,Nt],Fg=class extends ve{constructor(n){super(n)}},Og=[0,Ft,Zh,Jh,Gt,Dg];Et[508968149]=Jh;var $E=Zn(508968150,Fg);Et[508968150]=Og;var Bg=class extends ve{constructor(n){super(n)}},KE=Zn(513916220,Bg);Et[513916220]=[0,Ft,Og,Pt];var ts=class extends ve{constructor(n){super(n)}h(){return Qe(this,hc,2)}g(){pt(this,2)}},kg=[0,Ft,Lg];Et[478825465]=kg;var zg=[0,Ft];Et[478825422]=zg;var ZE=class extends ve{constructor(n){super(n)}},Hg=[0,Ft,zg,kg,-1],Gg=class extends ve{constructor(n){super(n)}},Vg=[0,Ft,Gt,Pt],Qh=class extends ve{constructor(n){super(n)}},eu=[0,Ft,Gt],tu=class extends ve{constructor(n){super(n)}},Wg=[0,Ft,Vg,eu,Gt],Xg=class extends ve{constructor(n){super(n)}},JE=[0,Ft,Wg,Hg];Et[463370452]=Hg,Et[464864288]=Vg,Et[474472470]=eu;var QE=Zn(462713202,tu);Et[462713202]=Wg;var e3=Zn(479097054,Xg);Et[479097054]=JE;var t3=class extends ve{constructor(n){super(n)}},n3=[0,Ft],jg=class extends ve{constructor(n){super(n)}},nu=[0,Ft,Gt,-1,Pt];Et[514774813]=nu;var qg=class extends ve{constructor(n){super(n)}},iu=[0,Ft,Gt,Nt];Et[518928384]=iu;var Yg=class extends ve{constructor(){super()}};Yg.prototype.g=cc([0,Ft,eu,n3,Zh,Jh,nu,iu]);var $g=class extends ve{constructor(n){super(n)}},i3=Zn(456383383,$g);Et[456383383]=[0,Ft,Lg];var Kg=class extends ve{constructor(n){super(n)}},r3=Zn(476348187,Kg);Et[476348187]=[0,Ft,jE];var Zg=class extends ve{constructor(n){super(n)}},Jg=[0,pi,-1],$l=class extends ve{constructor(n){super(n)}};$l.B=[3];var s3=Zn(458105876,class extends ve{constructor(n){super(n)}g(){var n=this.s;const e=rt(n);var t=2&e;return n=function(i,r,s){var a=$l;const o=2&r;let c=!1;if(s==null){if(o)return kf();s=[]}else if(s.constructor===kn){if(!(2&s.N)||o)return s;s=s.Y()}else Array.isArray(s)?c=!!(2&Lt(s)):s=[];if(o){if(!s.length)return kf();c||(c=!0,Os(s))}else c&&(c=!1,s=Wm(s));return c||(64&Lt(s)?Oo(s,32):32&r&&Dh(s,32)),vt(i,r,2,a=new kn(s,a,WS,void 0),!1),a}(n,e,yi(n,e,2)),n==null||!t&&$l&&(n.ta=!0),t=n}});Et[458105876]=[0,Jg,oE,[!0,lr,[0,ht,-1,tn]]];var ru=class extends ve{constructor(n){super(n)}},Qg=Zn(458105758,ru);Et[458105758]=[0,Ft,ht,Jg];var su=class extends ve{constructor(n){super(n)}};su.B=[5,6];var a3=Zn(443442058,su);Et[443442058]=[0,Ft,ht,Pt,Gt,tn,-1];var e0=class extends ve{constructor(n){super(n)}},o3=Zn(516587230,e0);function Kl(n,e){return e=e?e.clone():new hc,n.displayNamesLocale!==void 0?pt(e,1,ks(n.displayNamesLocale)):n.displayNamesLocale===void 0&&pt(e,1),n.maxResults!==void 0?fi(e,2,n.maxResults):"maxResults"in n&&pt(e,2),n.scoreThreshold!==void 0?xe(e,3,n.scoreThreshold):"scoreThreshold"in n&&pt(e,3),n.categoryAllowlist!==void 0?Vo(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&pt(e,4),n.categoryDenylist!==void 0?Vo(e,5,n.categoryDenylist):"categoryDenylist"in n&&pt(e,5),e}function au(n,e=-1,t=""){return{categories:n.map(i=>({index:$n(Fn(i,1),0)??-1,score:Ut(i,2)??0,categoryName:di(i,3)??"",displayName:di(i,4)??""})),headIndex:e,headName:t}}function t0(n){var e=rs(n,3,dr),t=rs(n,2,Bs),i=rs(n,1,Ir),r=rs(n,9,Ir);const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:t[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=Qe(n,Mo,4)?.h())&&(s.boundingBox={originX:Fn(e,1)??0,originY:Fn(e,2)??0,width:Fn(e,3)??0,height:Fn(e,4)??0,angle:0}),Qe(n,Mo,4)?.g().length)for(const a of Qe(n,Mo,4).g())s.keypoints.push({x:xo(a,1)??0,y:xo(a,2)??0,score:xo(a,4)??0,label:Ir(cr(a,3))??""});return s}function dc(n){const e=[];for(const t of ki(n,Eg,1))e.push({x:Ut(t,1)??0,y:Ut(t,2)??0,z:Ut(t,3)??0,visibility:Ut(t,4)??0});return e}function da(n){const e=[];for(const t of ki(n,Mg,1))e.push({x:Ut(t,1)??0,y:Ut(t,2)??0,z:Ut(t,3)??0,visibility:Ut(t,4)??0});return e}function $f(n){return Array.from(n,e=>127<e?e-256:e)}function Kf(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,r=0;for(let s=0;s<n.length;s++)t+=n[s]*e[s],i+=n[s]*n[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*r)}let fo;Et[516587230]=[0,Ft,nu,iu,Gt];const c3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function n0(){if(fo===void 0)try{await WebAssembly.instantiate(c3),fo=!0}catch{fo=!1}return fo}async function Qs(n,e=""){const t=await n0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${n}_${t}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var $i=class{};function i0(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=n.length&&17<=Number(n[1])))}async function Zf(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(n.toString())}function r0(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Me(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function Jf(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=r0(e);return!n.l||i===n.i.canvas.width&&r===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=r),[i,r]}function Qf(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=n.i.stringToNewUTF8(e[r]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const r of i)n.i._free(r);n.i._free(e)}function ti(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function Yi(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(r,s,a)=>{s?(t(i,a),i=[]):i.push(r)}}$i.forVisionTasks=function(n){return Qs("vision",n)},$i.forTextTasks=function(n){return Qs("text",n)},$i.forGenAiExperimentalTasks=function(n){return Qs("genai_experimental",n)},$i.forGenAiTasks=function(n){return Qs("genai",n)},$i.forAudioTasks=function(n){return Qs("audio",n)},$i.isSimdSupported=function(){return n0()};async function l3(n,e,t,i){return n=await(async(r,s,a,o,c)=>{if(s&&await Zf(s),!self.ModuleFactory||a&&(await Zf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&r.endsWith(".data")?t.assetBinaryPath.toString():r}),await n.o(i),n}function vl(n,e){const t=Qe(n.baseOptions,Xo,1)||new Xo;typeof e=="string"?(pt(t,2,ks(e)),pt(t,1)):e instanceof Uint8Array&&(pt(t,1,Fh(e,!1,!1)),pt(t,2)),Ee(n.baseOptions,0,1,t)}function ep(n){try{const e=n.K.length;if(e===1)throw Error(n.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+n.K.map(t=>t.message).join(", "))}finally{n.K=[]}}function de(n,e){n.J=Math.max(n.J,e)}function fc(n,e){n.C=new nn,wn(n.C,"PassThroughCalculator"),mt(n.C,"free_memory"),Ze(n.C,"free_memory_unused_out"),xt(e,"free_memory"),Rn(e,n.C)}function As(n,e){mt(n.C,e),Ze(n.C,e+"_unused_out")}function pc(n){n.g.addBoolToStream(!0,"free_memory",n.J)}var Eo=class{constructor(n){this.g=n,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){if(e){const t=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Qe(this.baseOptions,Xo,1)?.g()||Qe(this.baseOptions,Xo,1)?.h()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,r){let s=Qe(i.baseOptions,Yf,3);if(!s){var a=s=new Yf,o=new jf;la(a,4,So,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new lg,la(r,2,So,a)):(r=s,a=new jf,la(r,4,So,a))),Ee(i.baseOptions,0,3,s)}(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),vl(this,"/model.dat"),this.m(),this.L()});if(t.modelAssetBuffer instanceof Uint8Array)vl(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i}(t.modelAssetBuffer).then(i=>{vl(this,i),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let n;if(this.g.fa(e=>{n=bE(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(n,e),this.C=void 0,ep(this)}finishProcessing(){this.g.finishProcessing(),ep(this)}close(){this.C=void 0,this.g.closeGraph()}};function Oi(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Eo.prototype.close=Eo.prototype.close,function(n,e){n=n.split(".");var t,i=Sa;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}("TaskRunner",Eo);class h3{constructor(e,t,i,r){this.g=e,this.h=t,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function tp(n,e,t){const i=n.g;if(t=Oi(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function np(n,e){const t=n.g,i=Oi(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const r=Oi(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.K),t.vertexAttribPointer(n.K,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const s=Oi(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.J),t.vertexAttribPointer(n.J,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new h3(t,i,r,s)}function ou(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function cu(n,e,t,i){return ou(n,e),n.h||(n.m(),n.D()),t?(n.v||(n.v=np(n,!0)),t=n.v):(n.A||(n.A=np(n,!1)),t=n.A),e.useProgram(n.h),t.bind(),n.l(),n=i(),t.g.bindVertexArray(null),n}function mc(n,e,t){return ou(n,e),n=Oi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function gc(n,e,t){ou(n,e),n.u||(n.u=Oi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function lu(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var hu=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=Oi(n.createProgram(),"Failed to create WebGL program"),this.ba=tp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=tp(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.K=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.ba),n.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function Pi(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Zl(n){var e=Pi(n,1);if(!e){if(e=Pi(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);const i=ws(n);var t=uu(n);if(gc(t,i,s0(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=t[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function s0(n){let e=Pi(n,2);if(!e){const t=ws(n);e=o0(n);const i=Zl(n),r=a0(n);t.texImage2D(t.TEXTURE_2D,0,r,n.width,n.height,0,t.RED,t.FLOAT,i),Jl(n)}return e}function ws(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Oi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function a0(n){if(n=ws(n),!po)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))po=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");po=n.R16F}return po}function uu(n){return n.l||(n.l=new hu),n.l}function o0(n){const e=ws(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Pi(n,2);return t||(t=mc(uu(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.j=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Jl(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var po,jt=class{constructor(n,e,t,i,r,s,a){this.g=n,this.m=e,this.j=t,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--ip===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Pi(this,0)}la(){return!!Pi(this,1)}R(){return!!Pi(this,2)}ka(){return(e=Pi(n=this,0))||(e=Zl(n),e=new Uint8Array(e.map(t=>255*t)),n.g.push(e)),e;var n,e}ja(){return Zl(this)}O(){return s0(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=ws(this),r=uu(this);i.activeTexture(i.TEXTURE1),t=mc(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);const s=a0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),gc(r,i,t),cu(r,i,!1,()=>{o0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Jl(this)}),lu(r),Jl(this)}}n.push(t)}return new jt(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ws(this).deleteTexture(Pi(this,2)),ip=-1}};jt.prototype.close=jt.prototype.close,jt.prototype.clone=jt.prototype.clone,jt.prototype.getAsWebGLTexture=jt.prototype.O,jt.prototype.getAsFloat32Array=jt.prototype.ja,jt.prototype.getAsUint8Array=jt.prototype.ka,jt.prototype.hasWebGLTexture=jt.prototype.R,jt.prototype.hasFloat32Array=jt.prototype.la,jt.prototype.hasUint8Array=jt.prototype.Ha;var ip=250;function si(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function c0(n){var e=si(n,0);if(!e){e=Rs(n);const t=_c(n),i=new Uint8Array(n.width*n.height*4);gc(t,e,bo(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),lu(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function bo(n){let e=si(n,2);if(!e){const t=Rs(n);e=To(n);const i=si(n,1)||c0(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),ra(n)}return e}function Rs(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=Oi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function _c(n){return n.l||(n.l=new hu),n.l}function To(n){const e=Rs(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=si(n,2);return t||(t=mc(_c(n),e),n.g.push(t),n.m=!0),e.bindTexture(e.TEXTURE_2D,t),t}function ra(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function rp(n){const e=Rs(n);return cu(_c(n),e,!0,()=>function(t,i){const r=t.canvas;if(r.width===t.width&&r.height===t.height)return i();const s=r.width,a=r.height;return r.width=t.width,r.height=t.height,t=i(),r.width=s,r.height=a,t}(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}var qt=class{constructor(n,e,t,i,r,s,a){this.g=n,this.j=e,this.m=t,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--sp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!si(this,0)}ma(){return!!si(this,1)}R(){return!!si(this,2)}Ea(){return c0(this)}Da(){var n=si(this,1);return n||(bo(this),To(this),n=rp(this),ra(this),this.g.push(n),this.j=!0),n}O(){return bo(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Rs(this),r=_c(this);i.activeTexture(i.TEXTURE1),t=mc(r,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),gc(r,i,t),cu(r,i,!1,()=>{To(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ra(this)}),lu(r),ra(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);bo(this),To(this),t=rp(this),ra(this)}n.push(t)}return new qt(n,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&si(this,1).close(),this.m&&Rs(this).deleteTexture(si(this,2)),sp=-1}};qt.prototype.close=qt.prototype.close,qt.prototype.clone=qt.prototype.clone,qt.prototype.getAsWebGLTexture=qt.prototype.O,qt.prototype.getAsImageBitmap=qt.prototype.Da,qt.prototype.getAsImageData=qt.prototype.Ea,qt.prototype.hasWebGLTexture=qt.prototype.R,qt.prototype.hasImageBitmap=qt.prototype.ma,qt.prototype.hasImageData=qt.prototype.Ga;var sp=250;function Jn(...n){return n.map(([e,t])=>({start:e,end:t}))}const u3=function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}}((ap=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:i0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Me(this,i||"input_audio",s=>{Me(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,n,e,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}fa(n){ti(this,"__graph_config__",e=>{n(e)}),Me(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),Me(this,i,a=>{this.i._addAudioToInputStream(this.g,e,t,a,r)})}addGpuBufferToStream(n,e,t){Me(this,e,i=>{const[r,s]=Jf(this,n,i);this.i._addBoundTextureToStream(i,r,s,t)})}addBoolToStream(n,e,t){Me(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Me(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Me(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Me(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Me(this,e,i=>{this.i._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Me(this,e,i=>{Me(this,n,r=>{this.i._addStringToInputStream(r,i,t)})})}addStringRecordToStream(n,e,t){Me(this,e,i=>{Qf(this,Object.keys(n),r=>{Qf(this,Object.values(n),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Me(this,t,r=>{Me(this,e,s=>{const a=this.i._malloc(n.length);this.i.HEAPU8.set(n,a),this.i._addProtoToInputStream(a,n.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(n,e){Me(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Me(this,e,i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,t)})}addDoubleVectorToStream(n,e,t){Me(this,e,i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,t)})}addFloatVectorToStream(n,e,t){Me(this,e,i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,t)})}addIntVectorToStream(n,e,t){Me(this,e,i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,t)})}addUintVectorToStream(n,e,t){Me(this,e,i=>{const r=this.i._allocateUintVector(n.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,t)})}addStringVectorToStream(n,e,t){Me(this,e,i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Me(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,t)})}addBoolToInputSidePacket(n,e){Me(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Me(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Me(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Me(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Me(this,e,t=>{this.i._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Me(this,e,t=>{Me(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Me(this,t,i=>{Me(this,e,r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(n,e){Me(this,e,t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Me(this,e,t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Me(this,e,t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Me(this,e,t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Me(this,e,t=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Me(this,e,t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Me(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){ti(this,n,e),Me(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){Yi(this,n,e),Me(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){ti(this,n,e),Me(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){Yi(this,n,e),Me(this,n,t=>{this.i._attachIntVectorListener(t)})}attachUintListener(n,e){ti(this,n,e),Me(this,n,t=>{this.i._attachUintListener(t)})}attachUintVectorListener(n,e){Yi(this,n,e),Me(this,n,t=>{this.i._attachUintVectorListener(t)})}attachDoubleListener(n,e){ti(this,n,e),Me(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){Yi(this,n,e),Me(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){ti(this,n,e),Me(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){Yi(this,n,e),Me(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){ti(this,n,e),Me(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){Yi(this,n,e),Me(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){ti(this,n,e),Me(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){Yi(this,n,e),Me(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ti(this,n,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Me(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends ap{get ha(){return this.i}sa(n,e,t){Me(this,e,i=>{const[r,s]=Jf(this,n,i);this.ha._addBoundTextureAsImageToStream(i,r,s,t)})}W(n,e){ti(this,n,e),Me(this,n,t=>{this.ha._attachImageListener(t)})}da(n,e){Yi(this,n,e),Me(this,n,t=>{this.ha._attachImageVectorListener(t)})}}));var ap,Hn=class extends u3{};async function Ye(n,e,t){return async function(i,r,s,a){return l3(i,r,s,a)}(n,t.canvas??(i0()?void 0:document.createElement("canvas")),e,t)}function l0(n,e,t,i){if(n.V){const s=new Ag;if(t?.regionOfInterest){if(!n.ra)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");xe(s,1,(r.left+r.right)/2),xe(s,2,(r.top+r.bottom)/2),xe(s,4,r.right-r.left),xe(s,3,r.bottom-r.top)}else xe(s,1,.5),xe(s,2,.5),xe(s,4,1),xe(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(xe(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){const[a,o]=r0(e);t=Ut(s,3)*o/a,r=Ut(s,4)*a/o,xe(s,4,t),xe(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.V,i)}n.g.sa(e,n.ba,i??performance.now()),n.finishProcessing()}function Gn(n,e,t){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");l0(n,e,t,n.J+1)}function Mi(n,e,t,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");l0(n,e,t,i)}function Cs(n,e,t,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return n=new jt([r],t,!1,n.g.i.canvas,n.M,s,e),i?n.clone():n}var mn=class extends Eo{constructor(n,e,t,i){super(n),this.g=n,this.ba=e,this.V=t,this.ra=i,this.M=new hu}l(n,e=!0){if("runningMode"in n&&va(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.M.close(),super.close()}};mn.prototype.close=mn.prototype.close;var Pn=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ee(n=this.h=new uc,0,1,e=new bt),xe(this.h,2,.5),xe(this.h,3,.3)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&xe(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&xe(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,e){return this.j={detections:[]},Gn(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Mi(this,n,t,e),this.j}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect_in"),et(n,"detections");const e=new An;Kn(e,qE,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect_in"),Ze(t,"DETECTIONS:detections"),t.o(e),Rn(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=yg(s),this.j.detections.push(t0(i));de(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pn.prototype.detectForVideo=Pn.prototype.G,Pn.prototype.detect=Pn.prototype.F,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=async function(n,e){return Ye(Pn,n,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(n,e){return Ye(Pn,n,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(n,e){return Ye(Pn,n,e)};var du=Jn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),fu=Jn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),pu=Jn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),h0=Jn([474,475],[475,476],[476,477],[477,474]),mu=Jn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),gu=Jn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),u0=Jn([469,470],[470,471],[471,472],[472,469]),_u=Jn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),d0=[...du,...fu,...pu,...mu,...gu,..._u],f0=Jn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function op(n){n.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Mt=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ee(n=this.h=new Fg,0,1,e=new bt),this.H=new Ng,Ee(this.h,0,3,this.H),this.j=new uc,Ee(this.h,0,2,this.j),fi(this.j,4,1),xe(this.j,2,.5),xe(this.H,2,.5),xe(this.h,4,.5)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return"numFaces"in n&&fi(this.j,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&xe(this.j,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&xe(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&xe(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,e){return op(this),Gn(this,n,e),this.u}G(n,e,t){return op(this),Mi(this,n,t,e),this.u}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"face_landmarks");const e=new An;Kn(e,$E,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),Rn(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=La(s),this.u.faceLandmarks.push(dc(i));de(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{de(this,i)}),this.outputFaceBlendshapes&&(et(n,"blendshapes"),Ze(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=lc(s),this.u.faceBlendshapes.push(au(i.g()??[]));de(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{de(this,i)})),this.outputFacialTransformationMatrixes&&(et(n,"face_geometry"),Ze(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Qe(YE(s),Tg,2))&&this.u.facialTransformationMatrixes.push({rows:$n(Fn(i,1),0)??0,columns:$n(Fn(i,2),0)??0,data:rs(i,3,dr).slice()??[]});de(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{de(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Mt.prototype.detectForVideo=Mt.prototype.G,Mt.prototype.detect=Mt.prototype.F,Mt.prototype.setOptions=Mt.prototype.o,Mt.createFromModelPath=function(n,e){return Ye(Mt,n,{baseOptions:{modelAssetPath:e}})},Mt.createFromModelBuffer=function(n,e){return Ye(Mt,n,{baseOptions:{modelAssetBuffer:e}})},Mt.createFromOptions=function(n,e){return Ye(Mt,n,e)},Mt.FACE_LANDMARKS_LIPS=du,Mt.FACE_LANDMARKS_LEFT_EYE=fu,Mt.FACE_LANDMARKS_LEFT_EYEBROW=pu,Mt.FACE_LANDMARKS_LEFT_IRIS=h0,Mt.FACE_LANDMARKS_RIGHT_EYE=mu,Mt.FACE_LANDMARKS_RIGHT_EYEBROW=gu,Mt.FACE_LANDMARKS_RIGHT_IRIS=u0,Mt.FACE_LANDMARKS_FACE_OVAL=_u,Mt.FACE_LANDMARKS_CONTOURS=d0,Mt.FACE_LANDMARKS_TESSELATION=f0;var ni=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!0),Ee(n=this.j=new Bg,0,1,e=new bt)}get baseOptions(){return Qe(this.j,bt,1)}set baseOptions(n){Ee(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,e,t){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:t,Gn(this,n,i??{}),!this.h)return this.u}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"stylized_image");const e=new An;Kn(e,KE,this.j);const t=new nn;wn(t,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"STYLIZED_IMAGE:stylized_image"),t.o(e),Rn(n,t),this.g.W("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=a[3*h],l[4*h+1]=a[3*h+1],l[4*h+2]=a[3*h+2],l[4*h+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new qt([a],!1,!1,this.g.i.canvas,this.M,o,i),this.u=s=s?o.clone():o,this.h&&this.h(s),de(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ni.prototype.stylize=ni.prototype.Pa,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(n,e){return Ye(ni,n,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(n,e){return Ye(ni,n,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(n,e){return Ye(ni,n,e)};var vu=Jn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function cp(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function lp(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function hp(n,e=!0){const t=[];for(const r of n){var i=lc(r);n=[];for(const s of i.g())i=e&&Fn(s,1)!=null?$n(Fn(s,1),0):-1,n.push({score:Ut(s,2)??0,index:i,categoryName:di(s,3)??"",displayName:di(s,4)??""});t.push(n)}return t}var Mn=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ee(n=this.v=new Xg,0,1,e=new bt),this.A=new tu,Ee(this.v,0,2,this.A),this.u=new Qh,Ee(this.A,0,3,this.u),this.h=new Gg,Ee(this.A,0,2,this.h),this.j=new ZE,Ee(this.v,0,3,this.j),xe(this.h,2,.5),xe(this.A,4,.5),xe(this.u,2,.5)}get baseOptions(){return Qe(this.v,bt,1)}set baseOptions(n){Ee(this.v,0,1,n)}o(n){if(fi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&xe(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&xe(this.A,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&xe(this.u,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new ts,t=e,i=Kl(n.cannedGesturesClassifierOptions,Qe(this.j,ts,3)?.h());Ee(t,0,2,i),Ee(this.j,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&Qe(this.j,ts,3)?.g();return n.customGesturesClassifierOptions?(Ee(t=e=new ts,0,2,i=Kl(n.customGesturesClassifierOptions,Qe(this.j,ts,4)?.h())),Ee(this.j,0,4,e)):n.customGesturesClassifierOptions===void 0&&Qe(this.j,ts,4)?.g(),this.l(n)}Ka(n,e){return cp(this),Gn(this,n,e),lp(this)}La(n,e,t){return cp(this),Mi(this,n,t,e),lp(this)}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"hand_gestures"),et(n,"hand_landmarks"),et(n,"world_hand_landmarks"),et(n,"handedness");const e=new An;Kn(e,e3,this.v);const t=new nn;wn(t,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"HAND_GESTURES:hand_gestures"),Ze(t,"LANDMARKS:hand_landmarks"),Ze(t,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(t,"HANDEDNESS:handedness"),t.o(e),Rn(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=La(s);const a=[];for(const o of ki(i,Eg,1))a.push({x:Ut(o,1)??0,y:Ut(o,2)??0,z:Ut(o,3)??0,visibility:Ut(o,4)??0});this.landmarks.push(a)}de(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=ls(s);const a=[];for(const o of ki(i,Mg,1))a.push({x:Ut(o,1)??0,y:Ut(o,2)??0,z:Ut(o,3)??0,visibility:Ut(o,4)??0});this.worldLandmarks.push(a)}de(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...hp(i,!1)),de(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{de(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...hp(i)),de(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function up(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Mn.prototype.recognizeForVideo=Mn.prototype.La,Mn.prototype.recognize=Mn.prototype.Ka,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(n,e){return Ye(Mn,n,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(n,e){return Ye(Mn,n,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(n,e){return Ye(Mn,n,e)},Mn.HAND_CONNECTIONS=vu;var on=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ee(n=this.j=new tu,0,1,e=new bt),this.u=new Qh,Ee(this.j,0,3,this.u),this.h=new Gg,Ee(this.j,0,2,this.h),fi(this.h,3,1),xe(this.h,2,.5),xe(this.u,2,.5),xe(this.j,4,.5)}get baseOptions(){return Qe(this.j,bt,1)}set baseOptions(n){Ee(this.j,0,1,n)}o(n){return"numHands"in n&&fi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&xe(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&xe(this.j,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&xe(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Gn(this,n,e),up(this)}G(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Mi(this,n,t,e),up(this)}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"hand_landmarks"),et(n,"world_hand_landmarks"),et(n,"handedness");const e=new An;Kn(e,QE,this.j);const t=new nn;wn(t,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"LANDMARKS:hand_landmarks"),Ze(t,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(t,"HANDEDNESS:handedness"),t.o(e),Rn(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=La(s),this.landmarks.push(dc(i));de(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=ls(s),this.worldLandmarks.push(da(i));de(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=lc(c);const l=[];for(const h of i.g())l.push({score:Ut(h,2)??0,index:$n(Fn(h,1),0)??-1,categoryName:di(h,3)??"",displayName:di(h,4)??""});o.push(l)}a.call(s,...o),de(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};on.prototype.detectForVideo=on.prototype.G,on.prototype.detect=on.prototype.F,on.prototype.setOptions=on.prototype.o,on.createFromModelPath=function(n,e){return Ye(on,n,{baseOptions:{modelAssetPath:e}})},on.createFromModelBuffer=function(n,e){return Ye(on,n,{baseOptions:{modelAssetBuffer:e}})},on.createFromOptions=function(n,e){return Ye(on,n,e)},on.HAND_CONNECTIONS=vu;var p0=Jn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function dp(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function fp(n){try{if(!n.I)return n.h;n.I(n.h)}finally{pc(n)}}function mo(n,e){n=La(n),e.push(dc(n))}var yt=class extends mn{constructor(n,e){super(new Hn(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ee(n=this.A=new Yg,0,1,e=new bt),this.u=new Qh,Ee(this.A,0,2,this.u),this.aa=new t3,Ee(this.A,0,3,this.aa),this.j=new uc,Ee(this.A,0,4,this.j),this.H=new Ng,Ee(this.A,0,5,this.H),this.v=new jg,Ee(this.A,0,6,this.v),this.D=new qg,Ee(this.A,0,7,this.D),xe(this.j,2,.5),xe(this.j,3,.3),xe(this.H,2,.5),xe(this.v,2,.5),xe(this.v,3,.3),xe(this.D,2,.5),xe(this.u,2,.5)}get baseOptions(){return Qe(this.A,bt,1)}set baseOptions(n){Ee(this.A,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&xe(this.j,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&xe(this.j,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&xe(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&xe(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&xe(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&xe(this.D,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&xe(this.u,2,n.minHandLandmarksConfidence??.5),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:t,dp(this),Gn(this,n,i),fp(this)}G(n,e,t,i){const r=typeof t!="function"?t:{};return this.I=typeof t=="function"?t:i,dp(this),Mi(this,n,r,e),fp(this)}m(){var n=new dn;xt(n,"input_frames_image"),et(n,"pose_landmarks"),et(n,"pose_world_landmarks"),et(n,"face_landmarks"),et(n,"left_hand_landmarks"),et(n,"left_hand_world_landmarks"),et(n,"right_hand_landmarks"),et(n,"right_hand_world_landmarks");const e=new An,t=new Xf;Xl(t,1,ks("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))pt(r,2,nc(s,Gh,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Ni||Ea(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Xl(r,2,Fh(s,!1,!1),Nr())}}(t,this.A.g());const i=new nn;wn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Wo(i,8,Xf,t),mt(i,"IMAGE:input_frames_image"),Ze(i,"POSE_LANDMARKS:pose_landmarks"),Ze(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Ze(i,"FACE_LANDMARKS:face_landmarks"),Ze(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Ze(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Ze(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Ze(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Rn(n,i),fc(this,n),this.g.attachProtoListener("pose_landmarks",(r,s)=>{mo(r,this.h.poseLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=ls(r),a.push(da(r)),de(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{de(this,r)}),this.outputPoseSegmentationMasks&&(Ze(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),As(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Cs(this,r,!0,!this.I)],de(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],de(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{mo(r,this.h.faceLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{de(this,r)}),this.outputFaceBlendshapes&&(et(n,"extra_blendshapes"),Ze(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=lc(r),a.push(au(r.g()??[]))),de(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{de(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{mo(r,this.h.leftHandLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=ls(r),a.push(da(r)),de(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{mo(r,this.h.rightHandLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=ls(r),a.push(da(r)),de(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{de(this,r)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};yt.prototype.detectForVideo=yt.prototype.G,yt.prototype.detect=yt.prototype.F,yt.prototype.setOptions=yt.prototype.o,yt.createFromModelPath=function(n,e){return Ye(yt,n,{baseOptions:{modelAssetPath:e}})},yt.createFromModelBuffer=function(n,e){return Ye(yt,n,{baseOptions:{modelAssetBuffer:e}})},yt.createFromOptions=function(n,e){return Ye(yt,n,e)},yt.HAND_CONNECTIONS=vu,yt.POSE_CONNECTIONS=p0,yt.FACE_LANDMARKS_LIPS=du,yt.FACE_LANDMARKS_LEFT_EYE=fu,yt.FACE_LANDMARKS_LEFT_EYEBROW=pu,yt.FACE_LANDMARKS_LEFT_IRIS=h0,yt.FACE_LANDMARKS_RIGHT_EYE=mu,yt.FACE_LANDMARKS_RIGHT_EYEBROW=gu,yt.FACE_LANDMARKS_RIGHT_IRIS=u0,yt.FACE_LANDMARKS_FACE_OVAL=_u,yt.FACE_LANDMARKS_CONTOURS=d0,yt.FACE_LANDMARKS_TESSELATION=f0;var In=class extends mn{constructor(n,e){super(new Hn(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ee(n=this.h=new $g,0,1,e=new bt)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return Ee(this.h,0,2,Kl(n,Qe(this.h,hc,2))),this.l(n)}ua(n,e){return this.j={classifications:[]},Gn(this,n,e),this.j}va(n,e,t){return this.j={classifications:[]},Mi(this,n,t,e),this.j}m(){var n=new dn;xt(n,"input_image"),xt(n,"norm_rect"),et(n,"classifications");const e=new An;Kn(e,i3,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),mt(t,"IMAGE:input_image"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"CLASSIFICATIONS:classifications"),t.o(e),Rn(n,t),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:ki(s,kE,1).map(o=>au(Qe(o,Kh,4)?.g()??[],$n(Fn(o,2),0),di(o,3)))};return zo(cr(s,2))!=null&&(a.timestampMs=$n(zo(cr(s,2)),0)),a}(HE(i)),de(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};In.prototype.classifyForVideo=In.prototype.va,In.prototype.classify=In.prototype.ua,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(n,e){return Ye(In,n,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(n,e){return Ye(In,n,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(n,e){return Ye(In,n,e)};var Sn=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!0),this.h=new Kg,this.embeddings={embeddings:[]},Ee(n=this.h,0,1,e=new bt)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){var e=this.h,t=Qe(this.h,qf,2);return t=t?t.clone():new qf,n.l2Normalize!==void 0?va(t,1,n.l2Normalize):"l2Normalize"in n&&pt(t,1),n.quantize!==void 0?va(t,2,n.quantize):"quantize"in n&&pt(t,2),Ee(e,0,2,t),this.l(n)}Ba(n,e){return Gn(this,n,e),this.embeddings}Ca(n,e,t){return Mi(this,n,t,e),this.embeddings}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"embeddings_out");const e=new An;Kn(e,r3,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"EMBEDDINGS:embeddings_out"),t.o(e),Rn(n,t),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=XE(i),this.embeddings=function(s){return{embeddings:ki(s,VE,1).map(a=>{const o={headIndex:$n(Fn(a,3),0)??-1,headName:di(a,4)??""};if(Xm(a,Yl,ml(a,1))!==void 0)a=rs(a=Qe(a,Yl,ml(a,1)),1,dr),o.floatEmbedding=a.slice();else{const c=new Uint8Array(0);o.quantizedEmbedding=Qe(a,GE,ml(a,2))?.qa()?.h()??c}return o}),timestampMs:$n(zo(cr(s,2)),0)}}(i),de(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Sn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=Kf(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=Kf($f(n.quantizedEmbedding),$f(e.quantizedEmbedding))}return n},Sn.prototype.embedForVideo=Sn.prototype.Ca,Sn.prototype.embed=Sn.prototype.Ba,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(n,e){return Ye(Sn,n,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(n,e){return Ye(Sn,n,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(n,e){return Ye(Sn,n,e)};var Ql=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function pp(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function mp(n){try{const e=new Ql(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{pc(n)}}Ql.prototype.close=Ql.prototype.close;var fn=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ru,this.v=new Zg,Ee(this.h,0,3,this.v),Ee(n=this.h,0,1,e=new bt)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,ks(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}L(){(function(n){const e=ki(n.fa(),nn,1).filter(t=>di(t,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(Qe(e[0],An,7)?.l()?.g()??new Map).forEach((t,i)=>{n.u[Number(i)]=di(t,1)})})(this)}ga(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,pp(this),Gn(this,n,i),mp(this)}Na(n,e,t,i){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,pp(this),Mi(this,n,r,e),mp(this)}Fa(){return this.u}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect");const e=new An;Kn(e,Qg,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),t.o(e),Rn(n,t),fc(this,n),this.outputConfidenceMasks&&(et(n,"confidence_masks"),Ze(t,"CONFIDENCE_MASKS:confidence_masks"),As(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Cs(this,s,!0,!this.j)),de(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],de(this,i)})),this.outputCategoryMask&&(et(n,"category_mask"),Ze(t,"CATEGORY_MASK:category_mask"),As(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=Cs(this,i,!1,!this.j),de(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,de(this,i)})),et(n,"quality_scores"),Ze(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,de(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};fn.prototype.getLabels=fn.prototype.Fa,fn.prototype.segmentForVideo=fn.prototype.Na,fn.prototype.segment=fn.prototype.ga,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(n,e){return Ye(fn,n,{baseOptions:{modelAssetPath:e}})},fn.createFromModelBuffer=function(n,e){return Ye(fn,n,{baseOptions:{modelAssetBuffer:e}})},fn.createFromOptions=function(n,e){return Ye(fn,n,e)};var eh=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};eh.prototype.close=eh.prototype.close;var d3=class extends ve{constructor(n){super(n)}},Ls=[0,Pt,-2],f3=[0,Fi,-3,Nt],vc=[0,Fi,-3,Nt,Fi,-1],m0=[0,vc],p3=[0,m0,Ls],m3=[0,vc,Ls],g0=[0,vc,Pt,-1],g3=[0,g0,Ls],_3=[0,Fi,-3,Nt,Ls,-1],v3=[0,Fi,-3,Nt,pi],xl=class extends ve{constructor(n){super(n)}},gp=[0,Fi,-1,Nt],_0=class extends ve{constructor(){super()}};_0.B=[1];var _p=class extends ve{constructor(n){super(n)}},th=[1,2,3,4,5,6,7,8,9,10,14,15],x3=[0,th,ut,vc,ut,m3,ut,m0,ut,p3,ut,gp,ut,v3,ut,f3,ut,[0,ht,Fi,-2,Nt,Pt,Nt,-1,2,Fi,Ls],ut,g0,ut,g3,Fi,Ls,ht,ut,_3,ut,[0,kt,gp]],y3=[0,ht,Pt,-1,Nt],nh=class extends ve{constructor(){super()}};nh.B=[1],nh.prototype.g=cc([0,kt,x3,ht,y3]);var ii=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ru,this.v=new Zg,Ee(this.h,0,3,this.v),Ee(n=this.h,0,1,e=new bt)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ga(n,e,t,i){const r=typeof t!="function"?t:{};this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.J+1,i=new nh;const s=new _p;var a=new d3;if(fi(a,1,255),Ee(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new xl;va(o,3,!0),xe(o,1,e.keypoint.x),xe(o,2,e.keypoint.y),la(s,5,th,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new _0,e.scribble))va(e=new xl,3,!0),xe(e,1,o.x),xe(e,2,o.y),Wo(a,1,xl,e);la(s,15,th,a)}Wo(i,1,_p,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",t),Gn(this,n,r);e:{try{const l=new eh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{pc(this)}c=void 0}return c}m(){var n=new dn;xt(n,"image_in"),xt(n,"roi_in"),xt(n,"norm_rect_in");const e=new An;Kn(e,Qg,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),mt(t,"IMAGE:image_in"),mt(t,"ROI:roi_in"),mt(t,"NORM_RECT:norm_rect_in"),t.o(e),Rn(n,t),fc(this,n),this.outputConfidenceMasks&&(et(n,"confidence_masks"),Ze(t,"CONFIDENCE_MASKS:confidence_masks"),As(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Cs(this,s,!0,!this.j)),de(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],de(this,i)})),this.outputCategoryMask&&(et(n,"category_mask"),Ze(t,"CATEGORY_MASK:category_mask"),As(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=Cs(this,i,!1,!this.j),de(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,de(this,i)})),et(n,"quality_scores"),Ze(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,de(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ii.prototype.segment=ii.prototype.ga,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(n,e){return Ye(ii,n,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(n,e){return Ye(ii,n,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(n,e){return Ye(ii,n,e)};var Dn=class extends mn{constructor(n,e){super(new Hn(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ee(n=this.h=new su,0,1,e=new bt)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,ks(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),n.maxResults!==void 0?fi(this.h,3,n.maxResults):"maxResults"in n&&pt(this.h,3),n.scoreThreshold!==void 0?xe(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&pt(this.h,4),n.categoryAllowlist!==void 0?Vo(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&pt(this.h,5),n.categoryDenylist!==void 0?Vo(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&pt(this.h,6),this.l(n)}F(n,e){return this.j={detections:[]},Gn(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Mi(this,n,t,e),this.j}m(){var n=new dn;xt(n,"input_frame_gpu"),xt(n,"norm_rect"),et(n,"detections");const e=new An;Kn(e,a3,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.ObjectDetectorGraph"),mt(t,"IMAGE:input_frame_gpu"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"DETECTIONS:detections"),t.o(e),Rn(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=yg(s),this.j.detections.push(t0(i));de(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{de(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Dn.prototype.detectForVideo=Dn.prototype.G,Dn.prototype.detect=Dn.prototype.F,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=async function(n,e){return Ye(Dn,n,{baseOptions:{modelAssetPath:e}})},Dn.createFromModelBuffer=function(n,e){return Ye(Dn,n,{baseOptions:{modelAssetBuffer:e}})},Dn.createFromOptions=function(n,e){return Ye(Dn,n,e)};var ih=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function vp(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function xp(n){try{const e=new ih(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.j)return e;n.j(e)}finally{pc(n)}}ih.prototype.close=ih.prototype.close;var En=class extends mn{constructor(n,e){super(new Hn(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ee(n=this.h=new e0,0,1,e=new bt),this.D=new qg,Ee(this.h,0,3,this.D),this.v=new jg,Ee(this.h,0,2,this.v),fi(this.v,4,1),xe(this.v,2,.5),xe(this.D,2,.5),xe(this.h,4,.5)}get baseOptions(){return Qe(this.h,bt,1)}set baseOptions(n){Ee(this.h,0,1,n)}o(n){return"numPoses"in n&&fi(this.v,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&xe(this.v,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&xe(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&xe(this.D,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,vp(this),Gn(this,n,i),xp(this)}G(n,e,t,i){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,vp(this),Mi(this,n,r,e),xp(this)}m(){var n=new dn;xt(n,"image_in"),xt(n,"norm_rect"),et(n,"normalized_landmarks"),et(n,"world_landmarks"),et(n,"segmentation_masks");const e=new An;Kn(e,o3,this.h);const t=new nn;wn(t,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),mt(t,"IMAGE:image_in"),mt(t,"NORM_RECT:norm_rect"),Ze(t,"NORM_LANDMARKS:normalized_landmarks"),Ze(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),Rn(n,t),fc(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=La(s),this.landmarks.push(dc(i));de(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],de(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=ls(s),this.worldLandmarks.push(da(i));de(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],de(this,i)}),this.outputSegmentationMasks&&(Ze(t,"SEGMENTATION_MASK:segmentation_masks"),As(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Cs(this,s,!0,!this.j)),de(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],de(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};En.prototype.detectForVideo=En.prototype.G,En.prototype.detect=En.prototype.F,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(n,e){return Ye(En,n,{baseOptions:{modelAssetPath:e}})},En.createFromModelBuffer=function(n,e){return Ye(En,n,{baseOptions:{modelAssetBuffer:e}})},En.createFromOptions=function(n,e){return Ye(En,n,e)},En.POSE_CONNECTIONS=p0;const yp=1,M3="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",Mp="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";class S3{constructor(e){Q(this,"faceLandmarker",null);Q(this,"video");Q(this,"overlay");Q(this,"overlayCtx");Q(this,"showOverlay");Q(this,"onFrame");Q(this,"onReady");Q(this,"onError");Q(this,"running",!1);Q(this,"rafId",null);Q(this,"stream",null);Q(this,"lastVideoTime",-1);Q(this,"perf");Q(this,"lastSendTime",0);Q(this,"loop",()=>{if(!this.running||!this.faceLandmarker){this.rafId=requestAnimationFrame(this.loop);return}if(this.video.readyState>=2&&this.video.videoWidth>0){const e=performance.now(),t=e-this.lastSendTime,i=this.perf.faceThrottleMs;if(t>=i&&this.video.currentTime!==this.lastVideoTime){this.lastSendTime=e,this.lastVideoTime=this.video.currentTime;try{const r=this.faceLandmarker.detectForVideo(this.video,e);this.onResults(r)}catch{}}}this.rafId=requestAnimationFrame(this.loop)});this.video=e.video,this.overlay=e.overlayCanvas,this.showOverlay=!!e.showOverlay,this.onFrame=e.onFrame,this.onReady=e.onReady,this.onError=e.onError,this.perf=e.performance??{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:50,handNumHands:2,handUseGpu:!0,minAcceptableFps:30},this.overlay&&(this.overlayCtx=this.overlay.getContext("2d")??void 0)}async init(){try{const e=await $i.forVisionTasks(M3),t=this.perf.faceUseGpu?"GPU":"CPU";console.log(`📷 FaceTracker: delegate inicial=${t}, video=${this.perf.videoWidth}x${this.perf.videoHeight}, throttle=${this.perf.faceThrottleMs}ms`);try{this.faceLandmarker=await Mt.createFromOptions(e,{baseOptions:{modelAssetPath:Mp,delegate:t},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1})}catch(i){console.warn("⚠️ FaceTracker GPU delegate falló, reintentando con CPU:",i),this.faceLandmarker=await Mt.createFromOptions(e,{baseOptions:{modelAssetPath:Mp,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1})}this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:this.perf.videoWidth},height:{ideal:this.perf.videoHeight}},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.onReady?.()}catch(e){this.onError?.(e instanceof Error?e:new Error(String(e)))}}onResults(e){if(!e.faceLandmarks||e.faceLandmarks.length===0){this.onFrame?.({x:.5,y:.5,detected:!1}),this.clearOverlay();return}const t=e.faceLandmarks[0],i=t[yp];if(!i){this.onFrame?.({x:.5,y:.5,detected:!1}),this.clearOverlay();return}this.onFrame?.({x:i.x,y:i.y,detected:!0}),this.showOverlay&&this.drawOverlay(t)}drawOverlay(e){if(!this.overlay||!this.overlayCtx)return;const t=this.overlay.width,i=this.overlay.height;this.overlayCtx.clearRect(0,0,t,i),this.overlayCtx.fillStyle="#FFC72C";for(const s of e)this.overlayCtx.beginPath(),this.overlayCtx.arc(s.x*t,s.y*i,1.2,0,Math.PI*2),this.overlayCtx.fill();const r=e[yp];r&&(this.overlayCtx.fillStyle="#DA291C",this.overlayCtx.beginPath(),this.overlayCtx.arc(r.x*t,r.y*i,5,0,Math.PI*2),this.overlayCtx.fill())}clearOverlay(){!this.overlay||!this.overlayCtx||this.overlayCtx.clearRect(0,0,this.overlay.width,this.overlay.height)}start(){this.running=!0,this.rafId===null&&(this.rafId=requestAnimationFrame(this.loop))}stop(){if(this.running=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.faceLandmarker){try{this.faceLandmarker.close()}catch{}this.faceLandmarker=null}}setShowOverlay(e){this.showOverlay=e,e||this.clearOverlay()}}const Sp=4,E3=8,b3=6,Ep=5,T3=12,A3=10,w3=16,R3=14,C3=20,L3=18,bp=0,yl=9,P3=.7,I3=30,D3="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",Tp="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";class U3{constructor(e){Q(this,"handLandmarker",null);Q(this,"video");Q(this,"onFrame");Q(this,"onReady");Q(this,"onError");Q(this,"running",!1);Q(this,"rafId",null);Q(this,"perf");Q(this,"confirmWasActive",!1);Q(this,"lastSendTime",0);Q(this,"lastVideoTime",-1);Q(this,"loop",()=>{if(!this.running){this.rafId=requestAnimationFrame(this.loop);return}const e=performance.now(),t=Math.max(I3,this.perf.handThrottleMs);if(this.handLandmarker&&e-this.lastSendTime>=t&&this.video.readyState>=2&&this.video.videoWidth>0&&this.video.currentTime!==this.lastVideoTime){this.lastSendTime=e,this.lastVideoTime=this.video.currentTime;try{const i=this.handLandmarker.detectForVideo(this.video,e);this.onResults(i)}catch{}}this.rafId=requestAnimationFrame(this.loop)});this.video=e.video,this.onFrame=e.onFrame,this.onReady=e.onReady,this.onError=e.onError,this.perf=e.performance??{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:33,handNumHands:2,handUseGpu:!0,minAcceptableFps:30}}async init(){try{const e=await $i.forVisionTasks(D3),t=this.perf.handUseGpu?"GPU":"CPU",i=this.perf.handNumHands;console.log(`✋ HandTracker: delegate inicial=${t}, numHands=${i}, throttle=${this.perf.handThrottleMs}ms`);try{this.handLandmarker=await on.createFromOptions(e,{baseOptions:{modelAssetPath:Tp,delegate:t},runningMode:"VIDEO",numHands:i,minHandDetectionConfidence:.6,minHandPresenceConfidence:.5,minTrackingConfidence:.5})}catch(r){console.warn("⚠️ HandTracker GPU delegate falló, reintentando con CPU:",r),this.handLandmarker=await on.createFromOptions(e,{baseOptions:{modelAssetPath:Tp,delegate:"CPU"},runningMode:"VIDEO",numHands:i,minHandDetectionConfidence:.6,minHandPresenceConfidence:.5,minTrackingConfidence:.5})}this.onReady?.()}catch(e){this.onError?.(e instanceof Error?e:new Error(String(e)))}}start(){this.running=!0,this.rafId===null&&(this.rafId=requestAnimationFrame(this.loop))}stop(){if(this.running=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.handLandmarker){try{this.handLandmarker.close()}catch{}this.handLandmarker=null}}onResults(e){if(!e.landmarks||e.landmarks.length===0){this.onFrame?.({detected:!1,isActive:!1,cursorX:.5,cursorY:.5,confirm:!1,handedness:""}),this.confirmWasActive=!1;return}let t=0,i="Right";if(e.handednesses&&e.handednesses.length>1){let f=!1;for(let E=0;E<e.handednesses.length;E++){const M=e.handednesses[E];if(M&&M.length>0&&M[0].categoryName==="Right"){t=E,i="Right",f=!0;break}}if(!f){t=0;const E=e.handednesses[0];i=E&&E[0]?E[0].categoryName:"Right"}}else if(e.handednesses&&e.handednesses.length===1){const f=e.handednesses[0];i=f&&f[0]?f[0].categoryName:"Right"}const r=e.landmarks[t],s=r[E3].y<r[b3].y+.005,a=r[T3].y<r[A3].y+.005;r[w3].y<r[R3].y-.01,r[C3].y<r[L3].y-.01;const o=Math.hypot(r[yl].x-r[bp].x,r[yl].y-r[bp].y)||1e-4,h=Math.hypot(r[Sp].x-r[Ep].x,r[Sp].y-r[Ep].y)/o>P3,u=s&&a,d=u&&h,p=r[yl],g=1-p.x,_=p.y;let m=!1;d&&!this.confirmWasActive&&(m=!0),this.confirmWasActive=d,this.onFrame?.({detected:!0,isActive:u,cursorX:g,cursorY:_,confirm:m,handedness:i})}}const N3=1500;class F3{constructor(){Q(this,"el");Q(this,"ringEl");Q(this,"ringCircle");Q(this,"visible",!1);Q(this,"hovering",!1);Q(this,"dwelling",!1);Q(this,"currentX",0);Q(this,"currentY",0);this.el=document.createElement("div"),this.el.id="gesture-cursor",this.el.style.cssText=["position: fixed","top: 0","left: 0","width: 24px","height: 24px","border-radius: 50%","background: rgba(255, 34, 34, 0.85)","border: 2px solid #fff","box-shadow: 0 0 12px rgba(255, 0, 0, 0.8), 0 0 4px rgba(0,0,0,0.5)","pointer-events: none","z-index: 870","transform: translate(-50%, -50%)","opacity: 0","transition: opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease","will-change: transform, opacity"].join(";"),this.ringEl=document.createElement("div"),this.ringEl.id="gesture-cursor-ring",this.ringEl.style.cssText=["position: fixed","top: 0","left: 0","width: 60px","height: 60px","pointer-events: none","z-index: 869","transform: translate(-50%, -50%)","opacity: 0","transition: opacity 0.2s ease","will-change: transform, opacity"].join(";");const e=26,t=2*Math.PI*e;this.ringEl.innerHTML=`
      <svg width="60" height="60" viewBox="0 0 60 60" style="overflow: visible;">
        <circle cx="30" cy="30" r="${e}" fill="none"
                stroke="rgba(255,255,255,0.25)" stroke-width="3" />
        <circle id="gesture-cursor-progress" cx="30" cy="30" r="${e}" fill="none"
                stroke="#FFC72C" stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="${t}"
                stroke-dashoffset="${t}"
                transform="rotate(-90 30 30)"
                style="transition: stroke-dashoffset 0.05s linear;" />
      </svg>
    `,this.ringCircle=this.ringEl.querySelector("#gesture-cursor-progress"),this.ringCircle.dataset.circumference=String(t),document.body.appendChild(this.ringEl),document.body.appendChild(this.el)}setVisible(e){e!==this.visible&&(this.visible=e,this.el.style.opacity=e?"1":"0",e||(this.ringEl.style.opacity="0",this.setDwellProgress(0)))}setHovering(e){e!==this.hovering&&(this.hovering=e,e?(this.el.style.background="rgba(52, 199, 89, 0.9)",this.el.style.width="28px",this.el.style.height="28px",this.el.style.boxShadow="0 0 14px rgba(52, 199, 89, 0.9), 0 0 4px rgba(0,0,0,0.5)"):(this.el.style.background="rgba(255, 34, 34, 0.85)",this.el.style.width="24px",this.el.style.height="24px",this.el.style.boxShadow="0 0 12px rgba(255, 0, 0, 0.8), 0 0 4px rgba(0,0,0,0.5)",this.cancelDwell()))}setPosition(e,t){this.currentX=e,this.currentY=t,this.el.style.transform=`translate(${e}px, ${t}px) translate(-50%, -50%)`,this.ringEl.style.transform=`translate(${e}px, ${t}px) translate(-50%, -50%)`}startDwell(){this.dwelling||(this.dwelling=!0,this.ringEl.style.opacity="1",this.setDwellProgress(0))}setDwellProgress(e){const t=Math.max(0,Math.min(1,e)),r=parseFloat(this.ringCircle.dataset.circumference||"163.36")*(1-t);this.ringCircle.style.strokeDashoffset=String(r)}cancelDwell(){this.dwelling&&(this.dwelling=!1,this.ringEl.style.opacity="0",this.setDwellProgress(0))}completeDwell(){this.setDwellProgress(1),this.dwelling=!1,this.pulse(),setTimeout(()=>{this.ringEl.style.opacity="0",this.setDwellProgress(0)},200)}pulse(){this.el.style.transition="transform 0.1s ease-out, opacity 0.15s ease",this.el.style.transform=`translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%) scale(1.6)`,setTimeout(()=>{this.el.style.transition="opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease",this.el.style.transform=`translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`},180)}}const O3=[{emoji:"💰",title:"Mostrador",description:"Hacé tu pedido aquí. Atención al cliente y cajas para pagar.",keywords:["mostrador","counter","caja","cashier","tilde","checkout","register"]},{emoji:"🖥️",title:"Kiosk",description:"Pedidos self-service. Tocá la pantalla para armar tu pedido.",keywords:["kiosk","kiosco","pantalla","screen","touchscreen","totem","tótem"]},{emoji:"🪑",title:"Mesa",description:"Comedor principal. Sentate y disfrutá tu pedido.",keywords:["mesa","table","chair","silla","banqueta","asiento","seat","booth"]},{emoji:"👨‍🍳",title:"Cocina",description:"Preparación de pedidos. Zona restringida al personal.",keywords:["cocina","kitchen","grill","parrilla","freidora","fryer","horno","oven"]},{emoji:"🚻",title:"Baños",description:"Zona de servicios. WC para clientes.",keywords:["baño","bano","bathroom","toilet","wc","restroom","lavabo"]},{emoji:"🚪",title:"Puerta",description:"Salida del local. Mirala para salir de la experiencia.",keywords:["puerta","door","exit","salida","entrance","entrada"]},{emoji:"🍔",title:"Menú",description:"Cartel con el menú del local. Burgers, papas, postres y más.",keywords:["menu","menú","cartel","sign","board","carta","mccafe"]},{emoji:"🚗",title:"Drive-Thru",description:"Pedidos desde el auto. Zona exterior.",keywords:["drive","drivethru","auto","car"]},{emoji:"🧒",title:"Zona infantil",description:"Espacio para los más chicos. Juegos y diversión.",keywords:["play","playground","infantil","kids","niños","ninos","mccafe"]}];function B3(n){const e=n.toLowerCase();for(const t of O3)for(const i of t.keywords)if(e.includes(i))return t;return null}function k3(n){let e=n,t=0;for(;e&&t<10;){if(e.name){const i=B3(e.name);if(i)return i}e=e.parent,t++}return null}class z3{constructor(){Q(this,"overlay");Q(this,"card");Q(this,"onClose");this.overlay=document.createElement("div"),this.overlay.id="object-info-popup",this.overlay.style.cssText=["position: fixed","inset: 0","background: rgba(0,0,0,0.65)","backdrop-filter: blur(6px)","-webkit-backdrop-filter: blur(6px)","display: flex","align-items: center","justify-content: center","z-index: 960","opacity: 0","pointer-events: none","transition: opacity 0.2s ease"].join(";"),this.card=document.createElement("div"),this.card.style.cssText=["background: linear-gradient(180deg, #1f1f1f 0%, #2a2a2a 100%)","border: 1px solid rgba(255,199,44,0.4)","border-radius: 18px","padding: 1.6rem 1.4rem","max-width: 340px","width: 86%","text-align: center","box-shadow: 0 20px 60px rgba(0,0,0,0.6)","transform: scale(0.9)","transition: transform 0.2s ease","font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif","color: #fff"].join(";"),this.overlay.appendChild(this.card),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay)}show(e,t,i,r){this.card.innerHTML=`
      <div style="font-size: 2.4rem; margin-bottom: 0.5rem;">${e}</div>
      <div style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; color: #FFC72C;">${t}</div>
      <div style="font-size: 0.88rem; color: #ccc; line-height: 1.5; margin-bottom: 1rem;">${i}</div>
      ${r?`<div style="font-size: 0.7rem; color: #666; font-family: monospace; margin-bottom: 0.8rem;">${r}</div>`:""}
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
    `,this.card.querySelector("#obj-info-close")?.addEventListener("click",()=>this.hide()),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",this.card.style.transform="scale(1)"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",this.card.style.transform="scale(0.9)",this.onClose?.()}isOpen(){return this.overlay.style.pointerEvents==="auto"}setOnClose(e){this.onClose=e}}const H3="/mcdonalds-3d/products/",we=n=>`${H3}${n}.png`,ea=[{emoji:"🍔",title:"Hamburguesas",items:[{emoji:"🍔",name:"Big Mac",description:"Doble carne, queso, lechuga, pepino, salsa Big Mac",price:"$U 590",image:we("big-mac")},{emoji:"🍔",name:"Cuarto de Libra",description:"Carne 113g, queso cheddar, cebolla, pepinillos, ketchup",price:"$U 650",image:we("quarter-pounder")},{emoji:"🍔",name:"Doble Cuarto de Libra",description:"Doble carne 226g, doble queso, mostaza, cebolla, pepinillos",price:"$U 790",image:we("quarter-pounder")},{emoji:"🍔",name:"Cheeseburger",description:"Carne, queso cheddar, cebolla, pepinillos, mostaza, ketchup",price:"$U 290",image:we("cheeseburger")},{emoji:"🍔",name:"McDouble",description:"Doble carne, queso, cebolla, pepinillos, mostaza, ketchup",price:"$U 390",image:we("cheeseburger")},{emoji:"🍔",name:"Hamburguesa Simple",description:"Carne, cebolla, pepinillos, mostaza, ketchup",price:"$U 240",image:we("cheeseburger")},{emoji:"🐷",name:"McPork Deluxe",description:"Cerdo grillado, queso, lechuga, mayonesa",price:"$U 590",image:we("quarter-pounder")}]},{emoji:"🐔",title:"Pollo",items:[{emoji:"🐔",name:"McChicken",description:"Pollo crujiente, lechuga, mayonesa",price:"$U 540",image:we("mcchicken")},{emoji:"🐟",name:"Filete-O-Fish",description:"Pescado rebozado, queso, salsa tártara",price:"$U 520",image:we("filet-o-fish")},{emoji:"🍗",name:"McNuggets (6u)",description:"6 nuggets de pollo crujientes con salsa a elección",price:"$U 390",image:we("mcnuggets")},{emoji:"🍗",name:"McNuggets (10u)",description:"10 nuggets de pollo crujientes con salsa a elección",price:"$U 590",image:we("mcnuggets")},{emoji:"🥪",name:"Crispy Chicken Deluxe",description:"Pollo crujiente, tomate, lechuga, queso, mayonesa",price:"$U 690",image:we("mcchicken")}]},{emoji:"🍟",title:"Acompañamientos",items:[{emoji:"🍟",name:"Papas Fritas Medianas",description:"Las clásicas papas crujientes doradas",price:"$U 220",image:we("fries")},{emoji:"🍟",name:"Papas Fritas Grandes",description:"Porción grande de las clásicas papas crujientes",price:"$U 290",image:we("fries")},{emoji:"🧀",name:"Papas con Cheddar",description:"Papas fritas con salsa de queso cheddar",price:"$U 320",image:we("fries")},{emoji:"🥗",name:"Ensalada César",description:"Lechuga, pollo grillado, croutones, parmesano, salsa césar",price:"$U 490"},{emoji:"🧅",name:"Aros de Cebolla (6u)",description:"6 aros de cebolla rebozados, crujientes",price:"$U 290",image:we("fries")}]},{emoji:"🥤",title:"Bebidas",items:[{emoji:"🥤",name:"Coca-Cola",description:"Refresco de cola. Tamaños: chico / mediano / grande",price:"$U 220",image:we("cola")},{emoji:"🥤",name:"Sprite",description:"Refresco de limón-lima. Sin cafeína",price:"$U 220",image:we("cola")},{emoji:"🥤",name:"Fanta Naranja",description:"Refresco de naranja. Sabor cítrico",price:"$U 220",image:we("cola")},{emoji:"💧",name:"Agua Mineral",description:"Agua sin gas. Botella 500ml",price:"$U 180"},{emoji:"🧊",name:"Limonada Frozen",description:"Limonada frappeada con hielo. Sabores: clásica / frutilla",price:"$U 320",image:we("cola")}]},{emoji:"☕",title:"McCafé",items:[{emoji:"☕",name:"Café Americano",description:"Café caliente, intenso. Tamaño mediano",price:"$U 240",image:we("latte")},{emoji:"🥛",name:"McCafé Latte",description:"Espresso con leche vaporizada. Varios sabores",price:"$U 380",image:we("latte")},{emoji:"🍫",name:"McCafé Mocha",description:"Espresso, leche, chocolate vaporizado. Crema de leche",price:"$U 410",image:we("latte")},{emoji:"☕",name:"Capuchino",description:"Espresso con espuma de leche cremosa",price:"$U 360",image:we("latte")}]},{emoji:"🍦",title:"Postres",items:[{emoji:"🍦",name:"Helado de Vainilla",description:"Cono de helado cremoso de vainilla",price:"$U 150",image:we("vanilla-cone")},{emoji:"🍦",name:"Sundae Chocolate",description:"Helado de vainilla con salsa de chocolate",price:"$U 240",image:we("sundae-chocolate")},{emoji:"🍦",name:"Sundae Fresa",description:"Helado de vainilla con salsa de frutilla",price:"$U 240",image:we("sundae-chocolate")},{emoji:"🥧",name:"Tarta de Manzana",description:"Tarta caliente de manzana con canela",price:"$U 190",image:we("apple-pie")},{emoji:"🍫",name:"Brownie MCFlurry",description:"Helado de vainilla con trozos de brownie y salsa de chocolate",price:"$U 340",image:we("mcflurry")}]},{emoji:"🍳",title:"Desayunos",items:[{emoji:"🥚",name:"McMuffin de Huevo",description:"Huevo, queso cheddar, jamón, pan inglés tostado",price:"$U 320",image:we("egg-mcmuffin")},{emoji:"🥞",name:"Hotcakes",description:"3 panqueques con miel y manteca",price:"$U 290",image:we("hotcakes")},{emoji:"🥐",name:"Medialuna",description:"Medialuna de manteca caliente",price:"$U 120",image:we("egg-mcmuffin")}]},{emoji:"📦",title:"Combos",items:[{emoji:"🍔",name:"Combo Big Mac",description:"Big Mac + papas medianas + bebida mediana",price:"$U 890",image:we("big-mac"),components:[{emoji:"🍔",name:"Big Mac",image:we("big-mac")},{emoji:"🍟",name:"Papas Medianas",image:we("fries")},{emoji:"🥤",name:"Bebida Mediana",image:we("cola")}]},{emoji:"🍔",name:"Combo Cuarto de Libra",description:"Cuarto de Libra + papas medianas + bebida mediana",price:"$U 950",image:we("quarter-pounder"),components:[{emoji:"🍔",name:"Cuarto de Libra",image:we("quarter-pounder")},{emoji:"🍟",name:"Papas Medianas",image:we("fries")},{emoji:"🥤",name:"Bebida Mediana",image:we("cola")}]},{emoji:"🐔",name:"Combo McChicken",description:"McChicken + papas medianas + bebida mediana",price:"$U 840",image:we("mcchicken"),components:[{emoji:"🐔",name:"McChicken",image:we("mcchicken")},{emoji:"🍟",name:"Papas Medianas",image:we("fries")},{emoji:"🥤",name:"Bebida Mediana",image:we("cola")}]},{emoji:"🍗",name:"Combo McNuggets 6u",description:"6 McNuggets + papas medianas + bebida mediana",price:"$U 690",image:we("mcnuggets"),components:[{emoji:"🍗",name:"McNuggets 6u",image:we("mcnuggets")},{emoji:"🍟",name:"Papas Medianas",image:we("fries")},{emoji:"🥤",name:"Bebida Mediana",image:we("cola")}]}]}];class G3{constructor(){Q(this,"overlay");Q(this,"card");Q(this,"onClose");this.overlay=document.createElement("div"),this.overlay.id="menu-popup",this.overlay.style.cssText=["position: fixed","inset: 0","background: rgba(0,0,0,0.78)","backdrop-filter: blur(8px)","-webkit-backdrop-filter: blur(8px)","display: flex","align-items: center","justify-content: center","z-index: 970","opacity: 0","pointer-events: none","transition: opacity 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"].join(";"),this.card=document.createElement("div"),this.card.style.cssText=["background: linear-gradient(180deg, #1f1f1f 0%, #2a2a2a 100%)","border: 1px solid rgba(255,199,44,0.5)","border-radius: 18px","padding: 1.2rem 1rem 1rem","max-width: 460px","width: 92%","max-height: 85vh","overflow-y: auto","box-shadow: 0 20px 60px rgba(0,0,0,0.7)","transform: scale(0.9) translateY(20px)","transition: transform 0.25s ease","color: #fff","-webkit-overflow-scrolling: touch"].join(";"),this.overlay.appendChild(this.card),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay)}show(){this.render(),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",this.card.style.transform="scale(1) translateY(0)"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",this.card.style.transform="scale(0.9) translateY(20px)",this.onClose?.()}isOpen(){return this.overlay.style.pointerEvents==="auto"}setOnClose(e){this.onClose=e}render(){const e=`
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
    `,t=ea.map((c,l)=>{const h=c.items.map((u,d)=>{const p=u.components?`<button class="combo-explode-btn" data-cat="${l}" data-item="${d}" style="
                  margin-top: 0.4rem;
                  background: linear-gradient(90deg, rgba(218,41,28,0.85), rgba(255,199,44,0.85));
                  color: #fff;
                  border: none;
                  border-radius: 6px;
                  padding: 0.3rem 0.7rem;
                  font-size: 0.72rem;
                  font-weight: 700;
                  cursor: pointer;
                  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
                ">✨ Ver componentes</button>`:"",g=u.components?`<div class="combo-explode-panel" data-cat="${l}" data-item="${d}" style="
                  display: none;
                  margin-top: 0.5rem;
                  padding: 0.6rem;
                  background: rgba(0,0,0,0.4);
                  border-radius: 8px;
                  border: 1px dashed rgba(255,199,44,0.4);
                "></div>`:"";return`
        <div style="
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          padding: 0.6rem 0.5rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
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
            ${u.image?`<img src="${u.image}" alt="${u.name}" loading="lazy" style="
                  width: 100%; height: 100%; object-fit: cover;
                  display: block;
                  position: absolute; inset: 0;
                " onerror="this.style.display='none'; this.parentElement.setAttribute('data-fallback','1');" />`:""}
            <span class="menu-item-emoji" style="font-size: 1.8rem; ${u.image?"display:none;":""}">${u.emoji}</span>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              gap: 0.5rem;
            ">
              <span style="font-weight: 700; font-size: 0.92rem; color: #fff;">${u.name}</span>
              <span style="font-weight: 800; color: #FFC72C; font-size: 0.95rem; flex-shrink: 0;">${u.price}</span>
            </div>
            <div style="font-size: 0.74rem; color: #aaa; line-height: 1.4; margin-top: 0.15rem;">
              ${u.description}
            </div>
            ${p}
          </div>
          ${g}
        </div>
      `}).join("");return`
        <div class="menu-category" data-idx="${l}" style="margin-bottom: 0.8rem;">
          <button class="menu-cat-header" data-idx="${l}" style="
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
            margin-bottom: ${l===0?"0.5rem":"0"};
          ">
            <span style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size: 1.2rem;">${c.emoji}</span>
              <span>${c.title}</span>
              <span style="
                font-size: 0.7rem;
                background: rgba(0,0,0,0.35);
                padding: 0.1rem 0.5rem;
                border-radius: 8px;
                font-weight: 600;
              ">${c.items.length}</span>
            </span>
            <span class="menu-cat-chevron" data-idx="${l}" style="
              font-size: 0.9rem;
              transition: transform 0.2s ease;
              display: inline-block;
            ">▾</span>
          </button>
          <div class="menu-cat-body" data-idx="${l}" style="
            padding-top: 0.4rem;
            max-height: ${l===0?"2000px":"0"};
            overflow: hidden;
            transition: max-height 0.3s ease;
          ">
            ${h}
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
    `;this.card.innerHTML=e+t+i,this.card.querySelector("#menu-close-btn")?.addEventListener("click",()=>this.hide()),this.card.querySelectorAll(".menu-cat-header").forEach(c=>{c.addEventListener("click",l=>{const u=l.currentTarget.dataset.idx;u!==void 0&&this.toggleCategory(parseInt(u,10))})}),this.card.querySelectorAll(".menu-item-img-wrap").forEach(c=>{const l=()=>{if(c.getAttribute("data-fallback")==="1"){const h=c.querySelector(".menu-item-emoji");h&&(h.style.display="block")}};setTimeout(l,50),setTimeout(l,800)}),this.card.querySelectorAll(".combo-explode-btn").forEach(c=>{c.addEventListener("click",l=>{const h=l.currentTarget,u=parseInt(h.dataset.cat||"0",10),d=parseInt(h.dataset.item||"0",10);this.toggleExplode(u,d)})})}toggleExplode(e,t){const i=this.card.querySelector(`.combo-explode-panel[data-cat="${e}"][data-item="${t}"]`);if(!i)return;const r=ea[e];if(!r)return;const s=r.items[t];if(!s||!s.components)return;if(i.style.display!=="none"){i.style.display="none",i.innerHTML="";return}const a=s.components.map((o,c)=>`
        <div class="combo-component" style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          flex: 1;
          min-width: 70px;
          opacity: 0;
          transform: scale(0.3) translateY(20px);
          animation: comboExplodeIn 0.5s ease-out ${c*120}ms forwards;
        ">
          <div style="
            width: 52px; height: 52px;
            border-radius: 10px;
            overflow: hidden;
            background: rgba(255,199,44,0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            border: 1px solid rgba(255,199,44,0.3);
            position: relative;
          ">
            ${o.image?`<img src="${o.image}" alt="${o.name}" style="
                  width: 100%; height: 100%; object-fit: cover;
                  position: absolute; inset: 0;
                " onerror="this.style.display='none';" />`:""}
            <span style="font-size: 1.6rem; ${o.image?"position: relative; z-index: 1;":""}">${o.emoji}</span>
          </div>
          <span style="font-size: 0.68rem; color: #ddd; text-align: center; line-height: 1.2;">${o.name}</span>
        </div>
      `).join("");i.innerHTML=`
      <div style="
        display: flex;
        align-items: center;
        gap: 0.4rem;
        justify-content: center;
        flex-wrap: wrap;
      ">
        ${a}
      </div>
      <div style="
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: #FFC72C;
        text-align: center;
        font-weight: 600;
      ">✨ Combo desarmado en sus componentes</div>
    `,i.style.display="block"}expandCategory(e){const t=this.card.querySelector(`.menu-cat-body[data-idx="${e}"]`);if(!t)return;t.style.maxHeight="2000px";const i=this.card.querySelector(`.menu-cat-chevron[data-idx="${e}"]`);i&&(i.style.transform="rotate(0deg)")}scrollToProduct(e){const t=e.toLowerCase().trim();for(let i=0;i<ea.length;i++)for(let r=0;r<ea[i].items.length;r++){const s=ea[i].items[r].name.toLowerCase();if(s.includes(t)||t.includes(s)){this.expandCategory(i);const a=this.card.querySelector(`.combo-explode-panel[data-cat="${i}"][data-item="${r}"]`)?.parentElement;if(a){a.scrollIntoView({behavior:"smooth",block:"center"}),a.style.transition="background 0.3s ease";const o=a.style.background;a.style.background="rgba(255,199,44,0.25)",setTimeout(()=>{a.style.background=o},1200)}return!0}}return!1}toggleCategory(e){const t=this.card.querySelector(`.menu-cat-body[data-idx="${e}"]`),i=this.card.querySelector(`.menu-cat-chevron[data-idx="${e}"]`);if(!t)return;t.style.maxHeight!=="0px"&&t.style.maxHeight!==""?(t.style.maxHeight="0px",i&&(i.style.transform="rotate(-90deg)")):(t.style.maxHeight="2000px",i&&(i.style.transform="rotate(0deg)"))}}class V3{constructor(e,t){Q(this,"scene");Q(this,"ui");Q(this,"popupActive",!1);Q(this,"touchHandler");this.scene=e,this.ui=t,this.touchHandler=i=>this.onTap(i),window.addEventListener("touchend",this.touchHandler,{passive:!0}),window.addEventListener("click",this.touchHandler)}onTap(e){if(this.popupActive||e.target instanceof HTMLElement&&e.target.closest("button, .popup-card, #instructions"))return;if(this.scene.isLookingAtDoor())this.showExitPopup();else{const i=this.scene.getLookedObject();if(i){const r=i.name||i.type||"objeto";this.ui.showToast(`No es la puerta (${r})`)}else this.ui.showToast("No hay nada allí")}}showExitPopup(){this.popupActive=!0,this.ui.showExitPopup();const e=document.getElementById("exit-yes"),t=document.getElementById("exit-no");if(!e||!t)return;const i=()=>{s(),this.ui.hideExitPopup(),this.ui.showEndScreen()},r=()=>{s(),this.ui.hideExitPopup(),this.popupActive=!1},s=()=>{e.removeEventListener("click",i),t.removeEventListener("click",r)};e.addEventListener("click",i),t.addEventListener("click",r)}resetFromEnd(){this.popupActive=!1}dispose(){window.removeEventListener("touchend",this.touchHandler),window.removeEventListener("click",this.touchHandler)}}class W3{constructor(){Q(this,"loader");Q(this,"startScreen");Q(this,"instructions");Q(this,"camDot");Q(this,"camLabel");Q(this,"calibrateBtn");Q(this,"toast");Q(this,"exitPopup");Q(this,"endScreen");Q(this,"camPreview");Q(this,"toastTimer",null);Q(this,"instructionsTimer",null);Q(this,"calibrateHandler");Q(this,"endRestartHandler");this.loader=document.getElementById("loader"),this.startScreen=document.getElementById("start-screen"),this.instructions=document.getElementById("instructions"),this.camDot=document.getElementById("cam-dot"),this.camLabel=document.getElementById("cam-label"),this.calibrateBtn=document.getElementById("calibrate-btn"),this.toast=document.getElementById("toast"),this.exitPopup=document.getElementById("exit-popup"),this.endScreen=document.getElementById("end-screen"),this.camPreview=document.getElementById("cam-preview"),this.calibrateHandler=()=>{},this.endRestartHandler=()=>{}}hideLoader(){this.loader.classList.add("hide"),setTimeout(()=>{this.loader.style.display="none"},700)}setLoaderText(e){const t=document.getElementById("loader-text");t&&(t.textContent=e)}showStartScreen(){this.startScreen.classList.remove("hide")}hideStartScreen(){this.startScreen.classList.add("hide")}onStart(e){const t=document.getElementById("start-btn"),i=()=>e();t.addEventListener("click",i,{once:!0})}showInstructions(){this.instructions.classList.remove("hide"),this.instructionsTimer!==null&&clearTimeout(this.instructionsTimer),this.instructionsTimer=window.setTimeout(()=>{this.instructions.classList.add("hide")},5e3)}hideInstructions(){this.instructions.classList.add("hide")}setCameraActive(e){e?(this.camDot.classList.add("active"),this.camLabel.textContent="CAM"):(this.camDot.classList.remove("active"),this.camLabel.textContent="OFF")}setCameraLabel(e){this.camLabel.textContent=e}onCalibrate(e){this.calibrateHandler=e,this.calibrateBtn.addEventListener("click",this.calibrateHandler)}showToast(e,t=1800){this.toast.textContent=e,this.toast.classList.add("visible"),this.toastTimer!==null&&clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toast.classList.remove("visible")},t)}showExitPopup(){this.exitPopup.classList.add("visible")}hideExitPopup(){this.exitPopup.classList.remove("visible")}showEndScreen(){this.endScreen.classList.add("visible")}hideEndScreen(){this.endScreen.classList.remove("visible")}onEndRestart(e){this.endRestartHandler=e,document.getElementById("end-restart").addEventListener("click",this.endRestartHandler)}showCamPreview(){this.camPreview.classList.add("visible")}hideCamPreview(){this.camPreview.classList.remove("visible")}dispose(){this.calibrateBtn.removeEventListener("click",this.calibrateHandler),this.toastTimer!==null&&clearTimeout(this.toastTimer),this.instructionsTimer!==null&&clearTimeout(this.instructionsTimer)}}function X3(){if(!("serviceWorker"in navigator)){console.warn("[PWA] Service Worker no soportado en este navegador.");return}const n="/mcdonalds-3d/sw.js",e="/mcdonalds-3d/";window.addEventListener("load",()=>{navigator.serviceWorker.controller||navigator.serviceWorker.register(n,{scope:e}).then(t=>{console.log("[PWA] Service Worker registrado:",t.scope)}).catch(t=>{console.warn("[PWA] Error registrando SW:",t)})})}const Ap=[[["big mac","bigmac","big mac"],"Big Mac"],[["cuarto de libra","cuarto","quarter pounder"],"Cuarto de Libra"],[["doble cuarto","doble cuarto de libra"],"Doble Cuarto de Libra"],[["cheeseburger","chesburguer","cheese","chesborger"],"Cheeseburger"],[["mcdouble","mac double","doble"],"McDouble"],[["mcchicken","mac chicken","pollo"],"McChicken"],[["filet o fish","filete o fish","filete","pescado"],"Filete-O-Fish"],[["mcnuggets","mac nuggets","nuggets","nuguet"],"McNuggets (6u)"],[["papas","papas fritas","fries"],"Papas Fritas Medianas"],[["coca","coca cola","cola"],"Coca-Cola"],[["sprite"],"Sprite"],[["fanta"],"Fanta Naranja"],[["agua"],"Agua Mineral"],[["cafe","café","latte","latte cafe"],"Café Americano"],[["capuchino","cappuccino"],"Capuchino"],[["mocha"],"McCafé Mocha"],[["helado","cono","vainilla"],"Helado de Vainilla"],[["sundae","sunday","sundae de chocolate"],"Sundae Chocolate"],[["tarta de manzana","apple pie","pay de manzana"],"Tarta de Manzana"],[["mcflurry","mac flurry","flurry"],"Brownie MCFlurry"],[["mcmuffin","mac muffin","muffin"],"McMuffin de Huevo"],[["hotcakes","panqueques","panqueque"],"Hotcakes"],[["medialuna","medialunas"],"Medialuna"],[["combo big mac","combo"],"Combo Big Mac"]];class j3{constructor(e){Q(this,"recognition",null);Q(this,"listening",!1);Q(this,"shouldRestart",!0);Q(this,"opts");Q(this,"micIndicator");this.opts=e,this.micIndicator=document.createElement("div"),this.micIndicator.id="voice-mic",this.micIndicator.style.cssText=["position: fixed","top: 12px","right: 12px","width: 44px","height: 44px","border-radius: 50%","background: rgba(0,0,0,0.6)","border: 2px solid rgba(255,255,255,0.3)","display: flex","align-items: center","justify-content: center","font-size: 22px","z-index: 950","opacity: 0.4","transition: opacity 0.2s ease, background 0.2s ease, border 0.2s ease","cursor: pointer","user-select: none"].join(";"),this.micIndicator.innerHTML="🎤",this.micIndicator.title="Voz: click para activar/desactivar",this.micIndicator.addEventListener("click",()=>{this.listening?this.stop():this.start()}),document.body.appendChild(this.micIndicator)}init(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;return e?(this.recognition=new e,this.recognition.lang="es-ES",this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.maxAlternatives=3,this.recognition.onstart=()=>{this.listening=!0,this.micIndicator.style.opacity="1",this.micIndicator.style.background="rgba(218,41,28,0.85)",this.micIndicator.style.border="2px solid #FFC72C",this.opts.onListeningChange?.(!0)},this.recognition.onend=()=>{this.listening=!1,this.micIndicator.style.opacity="0.4",this.micIndicator.style.background="rgba(0,0,0,0.6)",this.micIndicator.style.border="2px solid rgba(255,255,255,0.3)",this.opts.onListeningChange?.(!1),this.shouldRestart&&setTimeout(()=>{try{this.recognition?.start()}catch{}},300)},this.recognition.onerror=t=>{const i=t?.error||"unknown";i!=="no-speech"&&i!=="aborted"&&this.opts.onError?.(i)},this.recognition.onresult=t=>{if(!t.results||t.results.length===0)return;const i=t.results[t.results.length-1];if(!i||!i[0])return;const r=(i[0].transcript||"").trim().toLowerCase();if(!r)return;console.log("🎤 Voz:",r);const s=this.parseCommand(r);s.type!=="unknown"&&this.opts.onCommand(s)},!0):(console.warn("⚠️ VoiceController: SpeechRecognition no soportado en este navegador"),this.micIndicator.style.display="none",!1)}start(){if(!(!this.recognition||this.listening)){this.shouldRestart=!0;try{this.recognition.start()}catch{}}}stop(){this.shouldRestart=!1;try{this.recognition?.stop()}catch{}}parseCommand(e){const t=e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();if(/\b(cerrar|cierra|cerrá|close|salir|ocultar)\b/.test(t)||/cerrar menu|cerrar el menu/.test(t))return{type:"close-menu",raw:e};if(/^(menu|menú|abrir menu|abrir el menu|open menu|ver menu)$/.test(t)||/\babrir\b\s*\b(menu|menú)\b/.test(t))return{type:"open-menu",raw:e};if(/\b(tour|presentacion|presentación|recorrido|demo|autoplay)\b/.test(t))return{type:"start-tour",raw:e};if(/\b(parar|detener|deten|stop|cancelar|salir)\b.*\b(tour|presentacion|recorrido)\b/.test(t)||/\b(parar tour|detener tour|parar presentacion|detener presentacion)\b/.test(t))return{type:"stop-tour",raw:e};const i=t.match(/\b(abrir|ver|buscar|quiero|dame|mostrar)\b\s+(.+)/),r=i?i[2]:t;for(const[s,a]of Ap)for(const o of s){const c=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();if(new RegExp(`\\b${c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\b`,"i").test(r))return{type:"goto-product",product:a,raw:e}}for(const[s,a]of Ap)for(const o of s){const c=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();if(new RegExp(`\\b${c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\b`,"i").test(t))return{type:"goto-product",product:a,raw:e}}return{type:"unknown",raw:e}}}const Ml=[{x:0,y:1.7,z:6,yawDeg:180,pitchDeg:0,durationMs:4e3,label:"🍔 Bienvenido al McDonald's 3D — Tour automático"},{x:0,y:1.7,z:2,yawDeg:180,pitchDeg:-5,durationMs:3500,label:"Entrando al local — zona de caja y mostrador"},{x:-3,y:1.7,z:0,yawDeg:90,pitchDeg:0,durationMs:4e3,label:"Mostrador de pedidos — izquierda"},{x:0,y:1.7,z:-2,yawDeg:0,pitchDeg:0,durationMs:4e3,label:"Zona de mesas — centro del local"},{x:3,y:1.7,z:-3,yawDeg:-45,pitchDeg:0,durationMs:3500,label:"McCafé y zona de estar"},{x:0,y:2.5,z:0,yawDeg:180,pitchDeg:-25,durationMs:4e3,label:"Vista cenital del local"},{x:0,y:1.7,z:6,yawDeg:180,pitchDeg:0,durationMs:3e3,label:"Fin del tour — volviendo a la entrada"}];class q3{constructor(e){Q(this,"scene");Q(this,"active",!1);Q(this,"currentIndex",0);Q(this,"segmentStartTime",0);Q(this,"startPos",{x:0,y:0,z:0,yaw:0,pitch:0});Q(this,"targetPos",{x:0,y:0,z:0,yaw:0,pitch:0});Q(this,"rafId",null);Q(this,"overlay");Q(this,"labelEl");Q(this,"exitBtn");Q(this,"onActivateCb");Q(this,"onDeactivateCb");Q(this,"loop",()=>{if(!this.active)return;const e=performance.now(),t=Ml[this.currentIndex];if(!t){this.deactivate();return}const i=e-this.segmentStartTime,r=Math.min(1,i/t.durationMs),s=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,a=this.startPos.x+(this.targetPos.x-this.startPos.x)*s,o=this.startPos.y+(this.targetPos.y-this.startPos.y)*s,c=this.startPos.z+(this.targetPos.z-this.startPos.z)*s;this.scene.setCameraPosition(a,o,c);let l=this.targetPos.yaw-this.startPos.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;const h=this.startPos.yaw+l*s,u=this.startPos.pitch+(this.targetPos.pitch-this.startPos.pitch)*s;if(this.scene.setCameraRotation(h,u),r>=1){if(this.currentIndex++,this.currentIndex>=Ml.length){setTimeout(()=>this.deactivate(),500);return}this.startSegment(this.currentIndex)}this.rafId=requestAnimationFrame(this.loop)});this.scene=e,this.overlay=document.createElement("div"),this.overlay.id="tour-overlay",this.overlay.style.cssText=["position: fixed","bottom: 24px","left: 50%","transform: translateX(-50%)","display: none","align-items: center","gap: 1rem","background: rgba(0,0,0,0.85)","border: 1px solid rgba(255,199,44,0.5)","border-radius: 14px","padding: 0.8rem 1.2rem","box-shadow: 0 8px 32px rgba(0,0,0,0.6)","z-index: 960","color: #fff","font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif","max-width: 90vw","backdrop-filter: blur(8px)","-webkit-backdrop-filter: blur(8px)"].join(";"),this.labelEl=document.createElement("div"),this.labelEl.style.cssText=["font-size: 0.95rem","font-weight: 600","color: #FFC72C","text-shadow: 0 1px 2px rgba(0,0,0,0.5)","max-width: 60vw","overflow: hidden","text-overflow: ellipsis","white-space: nowrap"].join(";"),this.labelEl.textContent="Tour en curso...",this.exitBtn=document.createElement("button"),this.exitBtn.textContent="✕ Salir",this.exitBtn.style.cssText=["background: rgba(218,41,28,0.9)","color: #fff","border: none","border-radius: 8px","padding: 0.4rem 0.9rem","font-size: 0.85rem","font-weight: 700","cursor: pointer","white-space: nowrap"].join(";"),this.exitBtn.addEventListener("click",()=>this.deactivate()),this.overlay.appendChild(this.labelEl),this.overlay.appendChild(this.exitBtn),document.body.appendChild(this.overlay)}isActive(){return this.active}onActivate(e){this.onActivateCb=e}onDeactivate(e){this.onDeactivateCb=e}activate(){this.active||(this.active=!0,this.currentIndex=0,this.overlay.style.display="flex",this.startSegment(0),this.onActivateCb?.())}deactivate(){this.active&&(this.active=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.overlay.style.display="none",this.onDeactivateCb?.())}startSegment(e){const t=Ml[e];if(!t){this.deactivate();return}const i=this.scene.getCameraInfo();this.startPos={x:i.x,y:i.y,z:i.z,yaw:this.scene.getYaw(),pitch:this.scene.getPitch()},this.targetPos={x:t.x,y:t.y,z:t.z,yaw:t.yawDeg*Math.PI/180,pitch:(t.pitchDeg??0)*Math.PI/180},this.segmentStartTime=performance.now(),this.labelEl.textContent=t.label}tick(){this.active&&this.rafId===null?this.rafId=requestAnimationFrame(this.loop):!this.active&&this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}}const Sl={low:{tier:"low",antialias:!1,pixelRatioMax:1,shadowsEnabled:!1,shadowMapSize:512,powerPreference:"low-power",numPointLights:0,numDirectionalLights:1,hemisphereLight:!0,videoWidth:240,videoHeight:180,faceThrottleMs:66,faceUseGpu:!1,handThrottleMs:50,handNumHands:1,handUseGpu:!1,minAcceptableFps:20},medium:{tier:"medium",antialias:!1,pixelRatioMax:1.5,shadowsEnabled:!0,shadowMapSize:1024,powerPreference:"high-performance",numPointLights:2,numDirectionalLights:2,hemisphereLight:!0,videoWidth:320,videoHeight:240,faceThrottleMs:50,faceUseGpu:!0,handThrottleMs:40,handNumHands:2,handUseGpu:!0,minAcceptableFps:25},high:{tier:"high",antialias:!0,pixelRatioMax:2,shadowsEnabled:!0,shadowMapSize:2048,powerPreference:"high-performance",numPointLights:4,numDirectionalLights:2,hemisphereLight:!0,videoWidth:480,videoHeight:360,faceThrottleMs:33,faceUseGpu:!0,handThrottleMs:33,handNumHands:2,handUseGpu:!0,minAcceptableFps:30}};function Y3(){const n=navigator.hardwareConcurrency??4,e=navigator.deviceMemory??8;let t="";try{const c=document.createElement("canvas"),l=c.getContext("webgl2")||c.getContext("webgl");if(l){const h=l.getExtension("WEBGL_debug_renderer_info");h&&(t=(l.getParameter(h.UNMASKED_RENDERER_WEBGL)||"").toLowerCase())}}catch{}const i=/intel.*hd graphics.*[12345]\d{3}/.test(t)||/intel.*hd graphics 4\d{3}/.test(t)||/intel.*hd graphics 5\d{3}/.test(t),r=/intel.*uhd|intel.*iris|intel.*arc/.test(t),s=/nvidia|radeon|amd|geforce|rtx|gtx|rx [0-9]/.test(t),a=/mali|adreno|powervr|apple gpu/.test(t),o=/apple gpu/.test(t)||/adreno [6789]/.test(t)||/mali-g[6789]/.test(t)||/mali-g7[0-9]/.test(t);return i||n<4||e<4?"low":(s||r)&&n>=8&&e>=16?"high":o?"medium":a?"low":"medium"}function $3(){const e=new URLSearchParams(window.location.search).get("perf")?.toLowerCase();if(e==="low"||e==="medium"||e==="high")return console.log(`⚡ Performance override por URL: ${e}`),Sl[e];try{const i=localStorage.getItem("mcdonalds-perf");if(i==="low"||i==="medium"||i==="high")return console.log(`⚡ Performance override por localStorage: ${i}`),Sl[i]}catch{}const t=Y3();return console.log(`⚡ Performance detectado: ${t} (cores=${navigator.hardwareConcurrency}, mem=${navigator.deviceMemory??"?"}GB, gpu="${K3()}"}`),Sl[t]}let ns=null;function K3(){if(ns!==null)return ns;try{const n=document.createElement("canvas"),e=n.getContext("webgl2")||n.getContext("webgl");if(e){const t=e.getExtension("WEBGL_debug_renderer_info");if(t){const i=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return ns=(i?String(i):"").toLowerCase(),ns}}}catch{}return ns="unknown",ns}function Z3(n){try{localStorage.setItem("mcdonalds-perf",n)}catch{}}function J3(){try{localStorage.removeItem("mcdonalds-perf")}catch{}}function wp(){X3();const n=$3();console.log(`⚡ Performance inicial: ${n.tier.toUpperCase()}`);const e=new W3,t=document.getElementById("scene-canvas");let i;try{i=new ES({canvas:t,performance:n}),i.start()}catch(S){console.error("Error inicializando escena:",S),e.setLoaderText("Error: WebGL no disponible");return}const r=document.createElement("pre");r.id="debug-info",r.style.cssText=["position: fixed","top: max(12px, env(safe-area-inset-top))","left: max(12px, env(safe-area-inset-left))","padding: 8px 12px","background: rgba(0,0,0,0.7)","backdrop-filter: blur(6px)","-webkit-backdrop-filter: blur(6px)","border-radius: 10px","border: 1px solid rgba(255,199,44,0.4)","color: #FFC72C",'font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace',"font-size: 11px","line-height: 1.5","margin: 0","z-index: 850","pointer-events: none","white-space: pre","text-shadow: 0 1px 2px rgba(0,0,0,0.8)"].join(";"),document.body.appendChild(r);const s=document.createElement("div");s.id="head-indicator",s.style.cssText=["position: fixed","top: max(12px, env(safe-area-inset-top))","left: 50%","transform: translateX(-50%)","width: 80px","height: 80px","z-index: 860","pointer-events: none","display: flex","align-items: center","justify-content: center"].join(";"),s.innerHTML=`
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
  `,document.body.appendChild(s);const a=document.getElementById("head-indicator-dot"),o=400,c=35;let l=null,h=null,u=null;const d=new F3,p=new z3,g=new G3;let _={detected:!1,isActive:!1,cursorX:.5,cursorY:.5,confirm:!1,handedness:""},m=0,f=!1,E=0,M=null,T=!1,F=0;const w=.2,A=3e3;let D=null,b=null,x={x:.5,y:.5,detected:!1};const L={x:.5,y:.5},G={DEAD_ZONE:.03,ACTIVATION_THRESHOLD_DEG:5,MAX_YAW_SPEED:2.5,MAX_WALK_SPEED:3,SMOOTHING:.15,DEG_FACTOR:90,EXCESS_NORM:45};window.__controlsConfig=G;let k=0,Y=0;const $={forward:0,strafe:0},X=new Set;function Z(){let S=0,v=0;(X.has("KeyW")||X.has("ArrowUp"))&&(S+=1),(X.has("KeyS")||X.has("ArrowDown"))&&(S-=1),(X.has("KeyD")||X.has("ArrowRight"))&&(v+=1),(X.has("KeyA")||X.has("ArrowLeft"))&&(v-=1),$.forward=S,$.strafe=v}window.addEventListener("keydown",S=>{if(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(S.code)&&(X.add(S.code),Z(),S.preventDefault()),S.code==="Equal"||S.code==="NumpadAdd"){const v=S.shiftKey?1:.3;i.adjustCameraHeight(v),S.preventDefault()}else if(S.code==="Minus"||S.code==="NumpadSubtract"){const v=S.shiftKey?1:.3;i.adjustCameraHeight(-v),S.preventDefault()}else if(S.code==="KeyP"){const v=i.getCameraInfo(),U=`[PUNTO CAMARA] x=${v.x.toFixed(3)}, y=${v.y.toFixed(3)}, z=${v.z.toFixed(3)}, yaw=${v.yawDeg.toFixed(1)}°, pitch=${v.pitchDeg.toFixed(1)}°`;console.log("%c"+U,"color: #FFC72C; font-weight: bold; font-size: 14px;"),e.showToast(`📍 X=${v.x.toFixed(2)} Y=${v.y.toFixed(2)} Z=${v.z.toFixed(2)} | Yaw=${v.yawDeg.toFixed(0)}°`,4e3),S.preventDefault()}else S.code==="KeyT"&&(i.resetPosition(),i.applyRotation(0,0,1),e.showToast("🔄 Posición reseteada al centro del modelo",2e3),S.preventDefault())}),window.addEventListener("keyup",S=>{X.delete(S.code),Z()}),window.addEventListener("blur",()=>{X.clear(),Z()});const W=document.getElementById("joystick"),ue=document.getElementById("joystick-knob");let fe=!1,me={x:0,y:0};const ke=50;if(W&&ue){const S=(H,ne)=>{ue.style.transform=`translate(calc(-50% + ${H}px), calc(-50% + ${ne}px))`},v=()=>{S(0,0),me.x=0,me.y=0},U=(H,ne)=>{const te=W.getBoundingClientRect(),ie=te.left+te.width/2,Te=te.top+te.height/2;let J=H-ie,pe=ne-Te;const Ce=Math.hypot(J,pe);Ce>ke&&(J=J/Ce*ke,pe=pe/Ce*ke),S(J,pe),me.x=J/ke,me.y=-pe/ke};W.addEventListener("touchstart",H=>{H.preventDefault(),fe=!0;const ne=H.touches[0];U(ne.clientX,ne.clientY)},{passive:!1}),W.addEventListener("touchmove",H=>{if(!fe)return;H.preventDefault();const ne=H.touches[0];U(ne.clientX,ne.clientY)},{passive:!1});const z=()=>{fe=!1,v()};W.addEventListener("touchend",z),W.addEventListener("touchcancel",z);let V=!1;W.addEventListener("mousedown",H=>{V=!0,fe=!0,U(H.clientX,H.clientY)}),window.addEventListener("mousemove",H=>{V&&U(H.clientX,H.clientY)}),window.addEventListener("mouseup",()=>{V&&(V=!1,fe=!1,v())})}const Je=document.getElementById("height-up"),j=document.getElementById("height-down"),ee=.3,ge=.15;if(Je&&j){let S=null,v=null;const U=V=>{i.adjustCameraHeight(V),S=window.setTimeout(()=>{v=window.setInterval(()=>{i.adjustCameraHeight(V>0?ge:-ge)},80)},400)},z=()=>{S!==null&&(clearTimeout(S),S=null),v!==null&&(clearInterval(v),v=null)};Je.addEventListener("touchstart",V=>{V.preventDefault(),U(ee)},{passive:!1}),Je.addEventListener("touchend",z),Je.addEventListener("touchcancel",z),j.addEventListener("touchstart",V=>{V.preventDefault(),U(-ee)},{passive:!1}),j.addEventListener("touchend",z),j.addEventListener("touchcancel",z),Je.addEventListener("mousedown",V=>{V.preventDefault(),U(ee)}),j.addEventListener("mousedown",V=>{V.preventDefault(),U(-ee)}),window.addEventListener("mouseup",z)}let oe=performance.now();function Ne(){const S=performance.now(),v=Math.min((S-oe)/1e3,.1);oe=S;const U=g.isOpen()||p.isOpen();if(!U&&x.detected){let z=x.x-L.x,V=x.y-L.y;Math.abs(z)<G.DEAD_ZONE&&(z=0),Math.abs(V)<G.DEAD_ZONE&&(V=0);const H=z*G.DEG_FACTOR,ne=V*G.DEG_FACTOR;let te=0;if(Math.abs(H)>G.ACTIVATION_THRESHOLD_DEG){const Te=(Math.abs(H)-G.ACTIVATION_THRESHOLD_DEG)/G.EXCESS_NORM;te=Math.sign(z)*Math.min(Te,1)*G.MAX_YAW_SPEED}let ie=0;if(Math.abs(ne)>G.ACTIVATION_THRESHOLD_DEG){const Te=(Math.abs(ne)-G.ACTIVATION_THRESHOLD_DEG)/G.EXCESS_NORM;ie=Math.sign(V)*Math.min(Te,1)*G.MAX_WALK_SPEED}k=k+(te-k)*G.SMOOTHING,Y=Y+(ie-Y)*G.SMOOTHING,Math.abs(k)<.005&&(k=0),Math.abs(Y)<.005&&(Y=0),i.setControls(k,Y,v)}if(!U){const z=$.forward+me.y,V=$.strafe+me.x;if(Math.abs(z)>.01||Math.abs(V)>.01){const H=Math.max(-1,Math.min(1,z)),ne=Math.max(-1,Math.min(1,V));i.moveRelative(H,ne,v)}}if(r){const z=i.getCameraInfo();r.textContent=`X: ${z.x.toFixed(2)}  Y: ${z.y.toFixed(2)}  Z: ${z.z.toFixed(2)}
Yaw: ${z.yawDeg.toFixed(0)}°  Pitch: ${z.pitchDeg.toFixed(0)}°`}if(a){let z=x.detected?x.x-L.x:0,V=x.detected?x.y-L.y:0,H=z*o,ne=V*o;const te=Math.hypot(H,ne);te>c&&(H=H/te*c,ne=ne/te*c),a.style.transform=`translate(${H}px, ${ne}px)`}if(u){if(d.setVisible(_.isActive),D&&(D.tick(),D.isActive()))if(_.isActive)D.deactivate();else{requestAnimationFrame(Ne);return}if(_.isActive){const z=_.cursorX*window.innerWidth,V=_.cursorY*window.innerHeight;d.setPosition(z,V);const H=_.cursorX*2-1,ne=-(_.cursorY*2-1),te=i.getObjectAtScreenPoint(H,ne),ie=te?k3(te):null,Te=ie!==null;if(Te!==f&&(d.setHovering(Te),f=Te),_.confirm){d.pulse(),d.cancelDwell(),E=0,M=null,T=!1;const J=performance.now();J>m&&(g.isOpen()?(g.hide(),m=J+400):p.isOpen()?(p.hide(),m=J+400):(g.show(),e.showToast("🍔 Menú abierto — tocá una categoría para expandir",2500),m=J+800))}if(Te&&te){if(M!==te)M=te,E=performance.now(),T=!1,d.startDwell();else if(!T){const J=performance.now()-E,pe=Math.min(1,J/N3);if(d.setDwellProgress(pe),pe>=1){T=!0,d.completeDwell();const Ce=performance.now();Ce>m&&(g.isOpen()?(g.hide(),m=Ce+400):p.isOpen()?(p.hide(),m=Ce+400):ie?(p.show(ie.emoji,ie.title,ie.description),m=Ce+400):(g.show(),e.showToast("🍔 Menú abierto (dwell)",1800),m=Ce+800))}}}else E!==0&&(d.cancelDwell(),E=0,M=null,T=!1);_.cursorY<w&&!_.confirm?F===0?F=performance.now():performance.now()-F>=A&&(D&&!D.isActive()&&D.activate(),F=0):F!==0&&(F=0)}else f&&(d.setHovering(!1),f=!1),E!==0&&(d.cancelDwell(),E=0,M=null,T=!1),F=0}requestAnimationFrame(Ne)}Ne(),e.hideLoader(),e.showStartScreen(),e.onCalibrate(()=>{x.detected?(L.x=x.x,L.y=x.y,e.showToast("Centro recalibrado")):e.showToast("No se detecta tu rostro")}),e.onEndRestart(()=>{e.hideEndScreen(),h?.resetFromEnd?.(),i.applyRotation(0,0,1),i.resetPosition()}),e.onStart(async()=>{e.hideStartScreen(),e.setCameraActive(!1),e.setCameraLabel("INI...");const S="ontouchstart"in window||navigator.maxTouchPoints>0,v=document.getElementById("joystick"),U=document.getElementById("key-hint");S&&v?.classList.add("visible"),U?.classList.add("visible");const z=document.getElementById("cam-video"),V=document.getElementById("cam-overlay");V.width=n.videoWidth,V.height=n.videoHeight,l=new S3({video:z,overlayCanvas:V,showOverlay:!1,performance:n,onFrame:H=>{x=H},onReady:()=>{e.setCameraActive(!0),e.showInstructions(),e.showToast(`Cámara activa · Modo ${n.tier.toUpperCase()}`,2200)},onError:H=>{console.error("FaceTracker error:",H),e.setCameraActive(!1),e.setCameraLabel("ERR"),e.showToast("Error de cámara: "+H.message,4e3)}});try{await l.init(),l.start(),h=new V3(i,e);try{u=new U3({video:z,performance:n,onFrame:ne=>{_=ne},onReady:()=>{console.log("✋ Hand tracker listo (mano derecha + 2 dedos → cursor)")},onError:ne=>{console.warn("⚠️ Hand tracker error:",ne.message)}}),await u.init(),u.start()}catch(ne){console.warn("⚠️ No se pudo iniciar hand tracking:",ne)}D=new q3(i),D.onActivate(()=>{e.showToast("🎬 Tour iniciado — disfrutá el recorrido",2500)}),D.onDeactivate(()=>{e.showToast("🛑 Tour finalizado — control manual restaurado",2e3)}),b=new j3({onCommand:ne=>{Fe(ne)},onError:ne=>{console.warn("🎤 Voice error:",ne)}}),b.init()&&(setTimeout(()=>b?.start(),1e3),e.showToast('🎤 Voz activa — probá decir "menú" o "abrir Big Mac"',3500))}catch(H){console.error("Error iniciando tracker:",H),e.showToast("No se pudo iniciar la cámara",3e3)}});function Fe(S){switch(S.type){case"open-menu":g.isOpen()||(g.show(),e.showToast("🍔 Menú abierto por voz",1500));break;case"close-menu":g.isOpen()&&(g.hide(),e.showToast("✕ Menú cerrado por voz",1200));break;case"goto-product":g.isOpen()||g.show(),setTimeout(()=>{S.product&&g.scrollToProduct(S.product)?e.showToast(`👉 ${S.product}`,1800):e.showToast(`❌ No encontré "${S.raw}"`,2e3)},300);break;case"start-tour":D&&!D.isActive()&&D.activate();break;case"stop-tour":D&&D.isActive()&&D.deactivate();break}}const Ge=document.getElementById("fps-badge"),R=document.getElementById("perf-btn"),Ve=document.getElementById("perf-popup");let We=0,ft=performance.now(),Se=0;function $e(){We++;const S=performance.now(),v=S-ft;if(v>=500&&(Se=Math.round(We*1e3/v),We=0,ft=S,Ge)){Ge.textContent=`${Se} FPS`;const U=n.minAcceptableFps;Se<U-10?Ge.className="bad":Se<U?Ge.className="warn":Ge.className=""}requestAnimationFrame($e)}$e();function Xe(){if(!R)return;const S=new URLSearchParams(window.location.search).get("perf"),v=(()=>{try{return localStorage.getItem("mcdonalds-perf")}catch{return null}})(),U=S||v;U?(R.textContent=`⚙️ MODO: ${U.toUpperCase()}`,R.className=`perf-btn ${U}`):(R.textContent=`⚙️ MODO: AUTO (${n.tier.toUpperCase()})`,R.className="perf-btn")}Xe(),R?.addEventListener("click",()=>{Ve?.classList.add("visible");const S=new URLSearchParams(window.location.search).get("perf"),v=(()=>{try{return localStorage.getItem("mcdonalds-perf")}catch{return null}})(),U=S||v||"auto";document.querySelectorAll(".perf-option").forEach(z=>{const V=z.getAttribute("data-tier");z.classList.toggle("active",V===U)})}),Ve?.addEventListener("click",S=>{S.target===Ve&&Ve.classList.remove("visible")}),document.querySelectorAll(".perf-option").forEach(S=>{S.addEventListener("click",()=>{const v=S.getAttribute("data-tier");if(v==="auto"){if(J3(),new URLSearchParams(window.location.search).has("perf")){const U=new URL(window.location.href);U.searchParams.delete("perf"),window.location.href=U.toString();return}}else Z3(v);window.location.reload()})});let Ue=0,Tt=!1;setInterval(()=>{Se>0&&Se<n.minAcceptableFps?(Ue++,Ue>=3&&!Tt&&(Tt=!0,e.showToast(`⚠️ FPS bajo (${Se}). Tocá "MODO" arriba a la derecha y probá "Rendimiento"`,6e3))):Ue=0},2e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wp):wp();
