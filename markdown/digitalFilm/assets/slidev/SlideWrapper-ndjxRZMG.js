import{r as P,z as b,C,a0 as se,Y as ft,aG as ne,y as re,P as Bt,p as ie,E as ae,d as St,f as Q,i as bt,o as V,aH as oe,a3 as le,aI as F,k as nt,g as T,j as $t,F as ue,L as he,n as Gt,e as mt,ad as kt,t as pt,h as ce,af as de,b as fe,av as pe}from"../modules/vue-CivN7B38.js";import{S as Ht,a as qt,v as yt,a3 as gt,a4 as Ct,a2 as ge,a5 as ve,a6 as B,a7 as me,a8 as ye,a9 as Lt,K as Dt,V as It,W as Nt,b as _e,T as xe,aa as we,_ as Yt,ab as Se,ac as be,ad as Pe,ae as Ee,af as Me,ag as $e,ah as ke}from"../index-DOv5eRLL.js";import{d as Ce}from"../modules/unplugin-icons-CVPuqnTt.js";import{u as Le}from"./context-CHZsFnoD.js";function De(t){var e;return{info:P(((e=Ht(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const vt={};function Ds(t){function e(s){return vt[s]??(vt[s]=De(s))}return{info:b({get(){return e(C(t)).info.value},set(s){e(C(t)).info.value=s}}),update:async(s,n)=>{const r=e(n??C(t)),i=await r.update(s);return i&&(r.info.value=i),i}}}var Ie=Object.defineProperty,At=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,Ft=(t,e,s)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,_t=(t,e)=>{for(var s in e||(e={}))Ne.call(e,s)&&Ft(t,s,e[s]);if(At)for(var s of At(e))Ae.call(e,s)&&Ft(t,s,e[s]);return t},Fe=()=>({emit(t,...e){for(let s=this.events[t]||[],n=0,r=s.length;n<r;n++)s[n](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}});function rt(t,e){return t-e}function Te(t){return t<0?-1:1}function it(t){return[Math.abs(t),Te(t)]}function Xt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Ke=2,L=Ke;function Zt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),s.appendChild(n),s}function ze(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function je(t,e,s){let n=e.x,r=e.y,i=s.x-n,o=s.y-r;if(i!==0||o!==0){const a=((t.x-n)*i+(t.y-r)*o)/(i*i+o*o);a>1?(n=s.x,r=s.y):a>0&&(n+=i*a,r+=o*a)}return i=t.x-n,o=t.y-r,i*i+o*o}function Re(t,e){let s=t[0];const n=[s];let r;for(let i=1,o=t.length;i<o;i++)r=t[i],ze(r,s)>e&&(n.push(r),s=r);return s!==r&&r&&n.push(r),n}function xt(t,e,s,n,r){let i=n,o=0;for(let a=e+1;a<s;a++){const l=je(t[a],t[e],t[s]);l>i&&(o=a,i=l)}i>n&&(o-e>1&&xt(t,e,o,n,r),r.push(t[o]),s-o>1&&xt(t,o,s,n,r))}function Oe(t,e){const s=t.length-1,n=[t[0]];return xt(t,0,s,e,n),n.push(t[s]),n}function Tt(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Re(t,n),t=Oe(t,n),t}var G=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const r=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*i,y:(t.pageY-a.top+o.y)*i,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((n=r.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),r=e?_t(_t({},this.brush),e):this.brush;return n.setAttribute("fill",(s=r.fill)!=null?s:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(L))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ue=class R extends G{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Xt();const s=Zt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Tt(this.points,1,!0),this.count=0),this.attr("d",R.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",R.toSvgData(Tt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:n}=this.points[0],r=this.brush.size/2;e.setAttribute("d",`M ${s-r} ${n} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 ${-r*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const n=s.x-e.x,r=s.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}static controlPoint(e,s,n,r){const i=s||e,o=n||e,a=.2,l=R.line(i,o),d=l.angle+(r?Math.PI:0),v=l.length*a,m=e.x+Math.cos(d)*v,_=e.y+Math.sin(d)*v;return{x:m,y:_}}static bezierCommand(e,s,n){const r=R.controlPoint(n[s-1],n[s-2],e),i=R.controlPoint(e,n[s-1],n[s+1],!0);return`C ${r.x.toFixed(L)},${r.y.toFixed(L)} ${i.x.toFixed(L)},${i.y.toFixed(L)} ${e.x.toFixed(L)},${e.y.toFixed(L)}`}static toSvgData(e){return e.reduce((s,n,r,i)=>r===0?`M ${n.x.toFixed(L)},${n.y.toFixed(L)}`:`${s} ${R.bezierCommand(n,r,i)}`,"")}},Ve=class extends G{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=it(t.x-this.start.x),[n,r]=it(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(rt),[a,l]=[this.start.y,this.start.y+n*r].sort(rt);this.attr("cx",(i+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-i)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}},Be=class extends G{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const o=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=i.getPointAtLength(o*a/this.pathSubFactor),d=i.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:d.x,y1:l.y,y2:d.y,segment:a,element:n||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t];if(this.svgPointPrevious&&this.svgPointCurrent){const s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,r=e.x1,i=e.x2,o=t.y1,a=t.y2,l=e.y1,d=e.y2,v=(s-n)*(l-d)-(o-a)*(r-i),m=(s*a-o*n)*(r-i)-(s-n)*(r*d-l*i),_=(s*a-o*n)*(l-d)-(o-a)*(r*d-l*i),f=(p,c,M)=>p>=c&&p<=M?!0:p>=M&&p<=c;if(v===0)return!1;{const p={x:m/v,y:_/v};return f(p.x,s,n)&&f(p.y,o,a)&&f(p.x,r,i)&&f(p.y,l,d)}}},Ge=class extends G{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Xt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Zt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=n/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(t.getTotalLength()<5)return!1}catch{return!1}return!0}},He=class extends G{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=it(t.x-this.start.x),[n,r]=it(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(rt),[a,l]=[this.start.y,this.start.y+n*r].sort(rt);this.attr("x",i),this.attr("y",a),this.attr("width",o-i),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}};function Kt(t,e,s,n=r=>r){return t*n(.5-e*(.5-s))}function qe(t){return[-t[0],-t[1]]}function k(t,e){return[t[0]+e[0],t[1]+e[1]]}function E(t,e){return[t[0]-e[0],t[1]-e[1]]}function $(t,e){return[t[0]*e,t[1]*e]}function Ye(t,e){return[t[0]/e,t[1]/e]}function Y(t){return[t[1],-t[0]]}function zt(t,e){return t[0]*e[0]+t[1]*e[1]}function Xe(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ze(t){return Math.hypot(t[0],t[1])}function Qe(t){return t[0]*t[0]+t[1]*t[1]}function jt(t,e){return Qe(E(t,e))}function Qt(t){return Ye(t,Ze(t))}function Je(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function X(t,e,s){let n=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],o=t[1]-e[1],a=i*r-o*n,l=i*n+o*r;return[a+e[0],l+e[1]]}function wt(t,e,s){return k(t,$(E(e,t),s))}function Rt(t,e,s){return k(t,$(e,s))}var{min:U,PI:We}=Math,Ot=.275,Z=We+1e-4;function ts(t,e={}){let{size:s=16,smoothing:n=.5,thinning:r=.5,simulatePressure:i=!0,easing:o=h=>h,start:a={},end:l={},last:d=!1}=e,{cap:v=!0,easing:m=h=>h*(2-h)}=a,{cap:_=!0,easing:f=h=>--h*h*h+1}=l;if(t.length===0||s<=0)return[];let p=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,p):a.taper,M=l.taper===!1?0:l.taper===!0?Math.max(s,p):l.taper,O=Math.pow(s*n,2),D=[],u=[],x=t.slice(0,10).reduce((h,S)=>{let g=S.pressure;if(i){let y=U(1,S.distance/s),ht=U(1,1-y);g=U(1,h+(ht-h)*(y*Ot))}return(h+g)/2},t[0].pressure),w=Kt(s,r,t[t.length-1].pressure,o),at,ot=t[0].vector,H=t[0].point,J=H,z=H,j=J,lt=!1;for(let h=0;h<t.length;h++){let{pressure:S}=t[h],{point:g,vector:y,distance:ht,runningLength:q}=t[h];if(h<t.length-1&&p-q<3)continue;if(r){if(i){let A=U(1,ht/s),dt=U(1,1-A);S=U(1,x+(dt-x)*(A*Ot))}w=Kt(s,r,S,o)}else w=s/2;at===void 0&&(at=w);let Wt=q<c?m(q/c):1,te=p-q<M?f((p-q)/M):1;w=Math.max(.01,w*Math.min(Wt,te));let Pt=(h<t.length-1?t[h+1]:t[h]).vector,ct=h<t.length-1?zt(y,Pt):1,ee=zt(y,ot)<0&&!lt,Et=ct!==null&&ct<0;if(ee||Et){let A=$(Y(ot),w);for(let dt=1/13,tt=0;tt<=1;tt+=dt)z=X(E(g,A),g,Z*tt),D.push(z),j=X(k(g,A),g,Z*-tt),u.push(j);H=z,J=j,Et&&(lt=!0);continue}if(lt=!1,h===t.length-1){let A=$(Y(y),w);D.push(E(g,A)),u.push(k(g,A));continue}let Mt=$(Y(wt(Pt,y,ct)),w);z=E(g,Mt),(h<=1||jt(H,z)>O)&&(D.push(z),H=z),j=k(g,Mt),(h<=1||jt(J,j)>O)&&(u.push(j),J=j),x=S,ot=y}let I=t[0].point.slice(0,2),N=t.length>1?t[t.length-1].point.slice(0,2):k(t[0].point,[1,1]),ut=[],W=[];if(t.length===1){if(!(c||M)||d){let h=Rt(I,Qt(Y(E(I,N))),-(at||w)),S=[];for(let g=1/13,y=g;y<=1;y+=g)S.push(X(h,I,Z*2*y));return S}}else{if(!(c||M&&t.length===1))if(v)for(let S=1/13,g=S;g<=1;g+=S){let y=X(u[0],I,Z*g);ut.push(y)}else{let S=E(D[0],u[0]),g=$(S,.5),y=$(S,.51);ut.push(E(I,g),E(I,y),k(I,y),k(I,g))}let h=Y(qe(t[t.length-1].vector));if(M||c&&t.length===1)W.push(N);else if(_){let S=Rt(N,h,w);for(let g=1/29,y=g;y<1;y+=g)W.push(X(S,N,Z*3*y))}else W.push(k(N,$(h,w)),k(N,$(h,w*.99)),E(N,$(h,w*.99)),E(N,$(h,w)))}return D.concat(W,u.reverse(),ut)}function es(t,e={}){var s;let{streamline:n=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:p,pressure:c=.5})=>[f,p,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let p=1;p<5;p++)a.push(wt(a[0],f,p/4))}a.length===1&&(a=[...a,[...k(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,v=0,m=l[0],_=a.length-1;for(let f=1;f<a.length;f++){let p=i&&f===_?a[f].slice(0,2):wt(m.point,a[f],o);if(Xe(m.point,p))continue;let c=Je(p,m.point);if(v+=c,f<_&&!d){if(v<r)continue;d=!0}m={point:p,pressure:a[f][2]>=0?a[f][2]:.5,vector:Qt(E(m.point,p)),distance:c,runningLength:v},l.push(m)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function ss(t,e={}){return ts(es(t,e),e)}var ns=class Jt extends G{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Jt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=ss(e,_t({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const r=n.reduce((i,[o,a],l,d)=>{const[v,m]=d[(l+1)%d.length];return i.push(o,a,(o+v)/2,(a+m)/2),i},["M",...n[0],"Q"]);return r.push("Z"),r.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}};function rs(t){return{draw:new Ue(t),stylus:new ns(t),line:new Ge(t),rectangle:new He(t),ellipse:new Ve(t),eraseLine:new Be(t)}}var is=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Fe(),this._originalPointerId=null,this._models=rs(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,r=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;s&&(this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)}))}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function as(t){return new is(t)}const os=se(()=>{const{currentSlideNo:t,isPresenter:e}=qt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ft("slidev-drawing-enabled",!1),r=ft("slidev-drawing-pinned",!1),i=ne(ft("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=P(!1),a=P(!1),l=P(!1),d=P(!1),v=P("stylus"),m=b(()=>yt.drawings.syncAll||e.value);let _=!1;const f=b({get(){return v.value},set(u){v.value=u,u==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=u,i.arrowEnd=!1)}}),p=Bt({brush:i,acceptsInputTypes:b(()=>n.value&&(!yt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=re(as(p));function M(){c.clear(),m.value&&Ct(t.value,"")}function O(){var u;l.value=c.canRedo(),a.value=c.canUndo(),d.value=!!((u=c.el)!=null&&u.children.length)}function D(u){_=!0;const x=gt[u||t.value];x!=null?c.load(x):c.clear(),O(),_=!1}return c.on("changed",()=>{if(O(),!_){const u=c.dump(),x=t.value;(gt[x]||"")!==u&&m.value&&Ct(x,c.dump())}}),ve(u=>{_=!0,u[t.value]!=null&&c.load(u[t.value]||""),_=!1,O()}),ie(()=>{ae(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",u=>{if(!n.value||ge.value)return;const x=!u.ctrlKey&&!u.altKey&&!u.shiftKey&&!u.metaKey;let w=!0;u.code==="KeyZ"&&(u.ctrlKey||u.metaKey)?u.shiftKey?c.redo():c.undo():u.code==="Escape"?n.value=!1:u.code==="KeyL"&&x?f.value="line":u.code==="KeyA"&&x?f.value="arrow":u.code==="KeyS"&&x?f.value="stylus":u.code==="KeyR"&&x?f.value="rectangle":u.code==="KeyE"&&x?f.value="ellipse":u.code==="KeyC"&&x?M():u.code.startsWith("Digit")&&x&&+u.code[5]<=s.length?i.color=s[+u.code[5]-1]:w=!1,w&&(u.preventDefault(),u.stopPropagation())},!1),{brush:i,brushColors:s,canClear:d,canRedo:l,canUndo:a,clear:M,drauu:c,drauuOptions:p,drawingEnabled:n,drawingMode:f,drawingPinned:r,drawingState:gt,isDrawing:o,loadCanvas:D}}),ls=["innerHTML"],Is=St({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=os();return(s,n)=>C(e)[s.page]?(V(),Q("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(e)[s.page]},null,8,ls)):bt("v-if",!0)}}),K=Bt({});let us=[],hs=[];B(K,"$syncUp",!0);B(K,"$syncDown",!0);B(K,"$paused",!1);B(K,"$onSet",t=>us.push(t));B(K,"$onPatch",t=>hs.push(t));me();B(K,"$patch",async()=>!1);const cs=ye(K,K,!0);var Ut;(Ut=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||Ut[1];var Vt;(Vt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||Vt[1];class ds{constructor(){this._screenshotSession=null}getSnapshot(e,s){const n=e+(s?"-dark":"-light"),r=cs.state[n];if(!r)return;const i=Ht(e);if(i&&(r==null?void 0:r.revision)===(i==null?void 0:i.meta.slide.revision))return r.image}async saveSnapshot(e,s,n){return!1}async startCapturing(e){return!1}}const fs=new ds,ps=["id"],gs=["id"],vs={class:"slidev-slide-container w-full h-full relative"},ms=["src"],ys=St({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1},contentStyle:{type:Object,default:()=>({})}},setup(t){const e=t,{isPrintMode:s}=qt(),n=P(null),r=oe(n),i=P(null),o=b(()=>e.width??r.width.value),a=b(()=>e.width?e.width/Lt.value:r.height.value),l=b(()=>Dt.value&&!s.value?+Dt.value:Math.min(o.value/It.value,a.value/Nt.value)),d=b(()=>({...e.contentStyle,height:`${Nt.value}px`,width:`${It.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),v=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/Lt.value}px`}:{});e.isMain&&le(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),F(xe,l),F(we,i);const m=b(()=>{if(!(e.no==null||!e.useSnapshot))return fs.getSnapshot(e.no,_e.value)});return(_,f)=>m.value?(V(),Q(ue,{key:1},[bt(" Image Snapshot "),T("div",vs,[T("img",{src:m.value,class:"w-full h-full object-cover",style:nt(v.value)},null,12,ms),f[0]||(f[0]=T("div",{absolute:"","bottom-1":"","right-1":"","p0.5":"","text-cyan:75":"","bg-cyan:10":"",rounded:"",title:"Snapshot"},[T("div",{class:"i-carbon-camera"})],-1))])],2112)):(V(),Q("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:nt(v.value)},[T("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:nt(d.value)},[$t(_.$slots,"default",{},void 0,!0)],12,gs),$t(_.$slots,"controls",{},void 0,!0)],12,ps))}}),Ns=Yt(ys,[["__scopeId","data-v-2485b8b1"]]),_s={key:0,class:"absolute bottom-1 right-1 left-0 p-2 pr-3 full-width z-10"},xs={class:"absolute bottom-0 right-0 p-2 pr-2"},ws={class:"fw-bold"},et="text-neutral-800",st="bg-neutral-100",Ss={__name:"slide-bottom",setup(t){const{$slidev:e,$frontmatter:s}=Le(),n=P(""),r=P(et),i=P(st);function o(){if(s.color)if(s.color=="black")r.value="text-gray-600",i.value="bg-gray-100";else if(s.color=="white")r.value=et,i.value=st;else if(s.color=="dark")r.value="text-gray-100",i.value="bg-gray-500";else if(s.color=="navy")r.value="text-gray-300",i.value="bg-gray-600";else if(s.color=="light")r.value="text-neutral-600",i.value="bg-neutral-300";else if(s.color.includes("-light")){const d=s.color.split("-");r.value=`text-${d[0]}-100`,i.value=`bg-${d[0]}-500`}else r.value=`text-${s.color}-500`,i.value=`bg-${s.color}-100`}function a(){if(s.slide_info_color===void 0&&(r.value=et,i.value=st),s.slide_info_color&&s.slide_info_color.includes(",")){const d=s.slide_info.split(",");r.value=d[0],i.value=d[1]}else s.layout=="end"?(r.value="text-neutral-100",i.value="bg-neutral-800"):s.layout=="side-title"?s.side&&(s.side=="right"||s.side=="r")?o():(r.value=et,i.value=st):(s.layout=="cover"||s.layout=="intro"||s.layout=="default"||s.layout=="section"||s.layout=="credits"||s.layout=="full")&&o()}function l(){s.neversink_slug?n.value=s.neversink_slug:e.configs.neversink_slug?n.value=e.configs.neversink_slug:n.value=""}return he(()=>{l(),a()}),(d,v)=>{const m=Ce;return C(s).slide_info!==!1?(V(),Q("footer",_s,[T("div",xs,[T("span",{class:Gt(["pl-3 pr-3 p-2 font-mono font-size-2",r.value+" "+i.value])},[mt(m),v[0]||(v[0]=kt(" ")),T("span",ws,pt(n.value),1),kt(" | "+pt(C(e).nav.currentPage)+" of "+pt(C(e).nav.total),1)],2)])])):bt("v-if",!0)}}},As={render:()=>[]},Fs={render:()=>[]},bs={render:()=>[]},Ps={render:()=>[ce(Ss)]},Es=["data-slidev-no","lang"],Ms=St({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var i,o;return((o=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:o.frontmatter.zoom)??1});F(Se,e.route),F(be,e.route.meta.slide.frontmatter),F(Pe,P(e.route.no)),F(Ee,P(e.renderContext)),F(Me,de(e,"clicksContext")),F($e,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),r=b(()=>({...n.value,"user-select":yt.selectable?void 0:"none"}));return(i,o)=>(V(),Q("div",{"data-slidev-no":e.route.no,class:Gt(C(ke)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:nt(r.value),lang:e.route.meta.slide.frontmatter.lang},[mt(C(Ps)),(V(),fe(pe(e.route.component))),mt(C(bs))],14,Es))}}),Ts=Yt(Ms,[["__scopeId","data-v-5ab92b3a"]]);export{Fs as G,Ts as S,Is as _,Ns as a,De as b,os as c,As as d,Ds as u};
