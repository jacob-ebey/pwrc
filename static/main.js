(()=>{var ae={299:function(l,E,D){(function(c,g){g(E,D(473),D(792))})(this,function(c,g,_){"use strict";let C=0;function O(N,y,q){let T,H,G=C;const J=y&&y.ssr===!1,X=y&&y.route,I=Z=>{if(typeof window=="undefined"&&J)return null;C!==G&&(G=C,T=void 0,H=void 0),T||(T=N().then(B=>{const a=H=B&&B.default||B;return q&&q(a)||a}));const[,ee]=_.useState(0),te=_.useRef(T);if((!te.current||!X)&&(te.current=T.then(()=>ee(1))),typeof H=="undefined")throw T;return g.h(H,Z)};return X?I:Z=>g.h(h,{},g.h(I,Z))}O.rewind=()=>{C=C+1};class h extends g.Component{componentDidCatch(y){y&&y.then?this.__d=!0:this.props.onError?this.props.onError(y):console.error(y)}render(){return this.props.children}}c.ErrorBoundary=h,c.lazy=O,Object.defineProperty(c,"__esModule",{value:!0})})},305:(l,E,D)=>{"use strict";D.d(E,{Jr:()=>H,jq:()=>I,ZQ:()=>Z,je:()=>ee});var c=D(792),g=typeof document=="undefined",_="M",C="T",O="L",h="P",N=function(a,S){return a&&S?S.replace(/%s/g,a):a},y=function(a){var S=document.head.querySelectorAll(a.charset?"meta["+a.keyword+"]":"meta["+a.keyword+'="'+a[a.keyword]+'"]');if(S[0])a.charset?S[0].setAttribute(a.keyword,a.charset):S[0].setAttribute("content",a.content);else{var d=document.createElement("meta");a.charset?d.setAttribute(a.keyword,a.charset):(d.setAttribute(a.keyword,a[a.keyword]),d.setAttribute("content",a.content)),document.head.appendChild(d)}},q=function(){var a,S=[],d=[],v=[],k=[],m=0,F=0,W=0,$=function(){var Q;return function(){clearTimeout(Q),Q=setTimeout(function(){Q=null;var o=new Set;document.title=N(d[0],v[0]),k.forEach(function(r){o.has(r.charset?r.keyword:r[r.keyword])||(o.add(r.charset?r.keyword:r[r.keyword]),y(r))}),m=F=W=0},1e3/60)}}();return{_setLang:function(o){a=o},_addToQueue:function(o,r){g||$(),o===C?d.splice(m++,0,r):o===h?v.splice(F++,0,r):o===_?k.splice(W++,0,r):S.push(r)},_removeFromQueue:function(o,r){if(o===C||o===h){var f=o===h?v:d,w=f.indexOf(r);f.splice(w,1),w===0&&(document.title=N(d[0]||"",v[0]))}else{var L=k[k.indexOf(r)];if(L){k.splice(k.indexOf(r),1);var j=k.find(function(oe){return oe.keyword===L.keyword&&(oe.charset||oe[oe.keyword]===L[oe.keyword])});if(j)y(j);else{var ue=document.head.querySelectorAll(L.charset?"meta["+L.keyword+"]":"meta["+L.keyword+'="'+L[L.keyword]+'"]');document.head.removeChild(ue[0])}}}},_change:function(o,r,f){if(o===C||o===h){var w=o===h?v:d;w[w.indexOf(r)]=f,w.indexOf(f)===0&&(document.title=N(w[w.indexOf(f)],v[0]))}else y(k[k.indexOf(r)]=f)},_reset:void 0,_static:function(){var o=N(d[d.length-1],v[v.length-1]),r=new Set,f=[].concat(S);k.reverse();var w=[].concat(k).filter(function(L){if(!r.has(L.charset?L.keyword:L[L.keyword]))return r.add(L.charset?L.keyword:L[L.keyword]),!0});return d=[],v=[],k=[],S=[],m=F=W=0,{lang:a,title:o,links:f,metas:w.map(function(L){var j;return L.keyword==="charset"?{charset:L[L.keyword]}:(j={},j[L.keyword]=L[L.keyword],j.content=L.content,j)})}}}},T=q(),H=function(a){g&&T._setLang(a),(0,c.useEffect)(function(){document.getElementsByTagName("html")[0].setAttribute("lang",a)},[a])},G=function(a){var S=useRef(!1),d=useRef(),v=useRef();g&&!S.current&&T._addToQueue(O,a),useEffect(function(){S.current&&Object.keys(a).forEach(function(k){d.current.setAttribute(k,a[k])})},[a.href,a.media,a.as,a.rel,a.crossorigin,a.type]),useEffect(function(){S.current=!0;var k=document.querySelectorAll('link[rel="'+a.rel+'"]');return k.forEach(function(m){var F=!0;Object.keys(a).forEach(function(W){m.getAttribute(W)!==a[W]&&(F=!1)}),F&&(d.current=m)}),d.current?v.current=Object.keys(a).reduce(function(m,F){return m[F]=d.current.getAttribute(F),m},{}):(d.current=document.createElement("link"),Object.keys(a).forEach(function(m){d.current.setAttribute(m,a[m])}),document.head.appendChild(d.current)),function(){S.current=!1,v.current?Object.keys(v.current).forEach(function(m){d.current.setAttribute(m,v.current[m])}):document.head.removeChild(d.current)}},[])};function J(B){return B.charset?"charset":B.name?"name":B.property?"property":"http-equiv"}var X=function(a){var S=a.title,d=a.metas,v=a.language,k=useRef(!1),m=useRef(),F=useRef(),W=useRef(),$=useMemo(function(){var Q=(d||[]).map(function(o){var r=J(o);if(F.current){var f=F.current.find(function(w){return w.keyword===r&&w.name===o.name&&w.charset===o.charset&&w["http-equiv"]===o.httpEquiv&&w.property===o.property&&w.content===o.content});if(f)return f}return{keyword:r,name:o.name,charset:o.charset,"http-equiv":o.httpEquiv,property:o.property,content:o.content}});return Q},[d]);g&&!k.current&&(S&&T._addToQueue(C,S),v&&T._setLang(v),$.forEach(function(Q){T._addToQueue(_,Q)})),useEffect(function(){if(F.current){var Q=[].concat(F.current),o=[];$.forEach(function(r){if(o.push(r),Q.includes(r))Q.splice(Q.indexOf(r),1);else{var f=Q.find(function(w){return w.keyword===r.keyword&&r[r.keyword]===w[r.keyword]});f?T._change(_,f,r):T._addToQueue(_,r)}}),Q.length&&Q.forEach(function(r){T._removeFromQueue(_,r)}),W.current=o,F.current=$}},[$]),useEffect(function(){return $.forEach(function(Q){T._addToQueue(_,Q)}),F.current=W.current=$,function(){(W.current||[]).forEach(function(Q){T._removeFromQueue(_,Q)})}},[]),useEffect(function(){k.current&&S?m.current!=null?T._change(C,m.current,m.current=S):T._addToQueue(C,m.current=S):k.current&&m.current&&(T._removeFromQueue(C,m.current),m.current=void 0)},[S]),useEffect(function(){return k.current=!0,T._addToQueue(C,m.current=S),function(){k.current=!1,m.current!=null&&T._removeFromQueue(C,m.current)}},[]),useEffect(function(){v&&document.getElementsByTagName("html")[0].setAttribute("lang",v)},[v])},I=function(a){var S=(0,c.useRef)(!1),d=(0,c.useRef)(),v=(0,c.useRef)({keyword:d.current=J(a),name:a.name,charset:a.charset,"http-equiv":a.httpEquiv,property:a.property,content:a.content});g&&!S.current&&T._addToQueue(_,v.current),(0,c.useEffect)(function(){S.current&&T._change(_,v.current,v.current={keyword:d.current,name:a.name,charset:a.charset,"http-equiv":a.httpEquiv,property:a.property,content:a.content})},[a.content]),(0,c.useEffect)(function(){return T._addToQueue(_,v.current),S.current=!0,function(){S.current=!1,T._removeFromQueue(_,v.current)}},[])},Z=function(a,S){var d=(0,c.useRef)(!1),v=(0,c.useRef)();g&&!d.current&&T._addToQueue(S?h:C,a),(0,c.useEffect)(function(){d.current&&T._change(S?h:C,v.current,v.current=a)},[a,S]),(0,c.useEffect)(function(){return d.current=!0,T._addToQueue(S?h:C,v.current=a),function(){d.current=!1,T._removeFromQueue(S?h:C,v.current)}},[S])},ee=function(a){Z(a,!0)},te=T._static},473:(l,E,D)=>{"use strict";D.r(E),D.d(E,{render:()=>oe,hydrate:()=>se,createElement:()=>J,h:()=>J,Fragment:()=>Z,createRef:()=>I,isValidElement:()=>g,Component:()=>ee,cloneElement:()=>le,createContext:()=>fe,toChildArray:()=>v,__u:()=>j,options:()=>c});var c,g,_,C,O,h,N,y={},q=[],T=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function H(t,e){for(var n in e)t[n]=e[n];return t}function G(t){var e=t.parentNode;e&&e.removeChild(t)}function J(t,e,n){var s,p,i,b=arguments,P={};for(i in e)i=="key"?s=e[i]:i=="ref"?p=e[i]:P[i]=e[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(b[i]);if(n!=null&&(P.children=n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)P[i]===void 0&&(P[i]=t.defaultProps[i]);return X(t,P,s,p,null)}function X(t,e,n,s,p){var i={type:t,props:e,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:p==null?++c.__v:p};return c.vnode!=null&&c.vnode(i),i}function I(){return{current:null}}function Z(t){return t.children}function ee(t,e){this.props=t,this.context=e}function te(t,e){if(e==null)return t.__?te(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?te(t):null}function B(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return B(t)}}function a(t){(!t.__d&&(t.__d=!0)&&_.push(t)&&!S.__r++||O!==c.debounceRendering)&&((O=c.debounceRendering)||C)(S)}function S(){for(var t;S.__r=_.length;)t=_.sort(function(e,n){return e.__v.__b-n.__v.__b}),_=[],t.some(function(e){var n,s,p,i,b,P,x;e.__d&&(P=(b=(n=e).__v).__e,(x=n.__P)&&(s=[],(p=H({},b)).__v=b.__v+1,i=r(x,b,p,n.__n,x.ownerSVGElement!==void 0,b.__h!=null?[P]:null,s,P==null?te(b):P,b.__h),f(s,b),i!=P&&B(b)))})}function d(t,e,n,s,p,i,b,P,x,M){var u,V,U,R,z,ie,K,Y=s&&s.__k||q,ne=Y.length;for(x==y&&(x=b!=null?b[0]:ne?te(s,0):null),n.__k=[],u=0;u<e.length;u++)if((R=n.__k[u]=(R=e[u])==null||typeof R=="boolean"?null:typeof R=="string"||typeof R=="number"?X(null,R,null,null,R):Array.isArray(R)?X(Z,{children:R},null,null,null):R.__e!=null||R.__c!=null?X(R.type,R.props,R.key,null,R.__v):R)!=null){if(R.__=n,R.__b=n.__b+1,(U=Y[u])===null||U&&R.key==U.key&&R.type===U.type)Y[u]=void 0;else for(V=0;V<ne;V++){if((U=Y[V])&&R.key==U.key&&R.type===U.type){Y[V]=void 0;break}U=null}z=r(t,R,U=U||y,p,i,b,P,x,M),(V=R.ref)&&U.ref!=V&&(K||(K=[]),U.ref&&K.push(U.ref,null,R),K.push(V,R.__c||z,R)),z!=null?(ie==null&&(ie=z),x=k(t,R,U,Y,b,z,x),M||n.type!="option"?typeof n.type=="function"&&(n.__d=x):t.value=""):x&&U.__e==x&&x.parentNode!=t&&(x=te(U))}if(n.__e=ie,b!=null&&typeof n.type!="function")for(u=b.length;u--;)b[u]!=null&&G(b[u]);for(u=ne;u--;)Y[u]!=null&&j(Y[u],Y[u]);if(K)for(u=0;u<K.length;u++)L(K[u],K[++u],K[++u])}function v(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){v(n,e)}):e.push(t)),e}function k(t,e,n,s,p,i,b){var P,x,M;if(e.__d!==void 0)P=e.__d,e.__d=void 0;else if(p==n||i!=b||i.parentNode==null)e:if(b==null||b.parentNode!==t)t.appendChild(i),P=null;else{for(x=b,M=0;(x=x.nextSibling)&&M<s.length;M+=2)if(x==i)break e;t.insertBefore(i,b),P=b}return P!==void 0?P:i.nextSibling}function m(t,e,n,s,p){var i;for(i in n)i==="children"||i==="key"||i in e||W(t,i,null,n[i],s);for(i in e)p&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||W(t,i,e[i],n[i],s)}function F(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||T.test(e)?n:n+"px"}function W(t,e,n,s,p){var i,b,P;if(p&&e=="className"&&(e="class"),e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)n&&e in n||F(t.style,e,"");if(n)for(e in n)s&&n[e]===s[e]||F(t.style,e,n[e])}else e[0]==="o"&&e[1]==="n"?(i=e!==(e=e.replace(/Capture$/,"")),(b=e.toLowerCase())in t&&(e=b),e=e.slice(2),t.l||(t.l={}),t.l[e+i]=n,P=i?Q:$,n?s||t.addEventListener(e,P,i):t.removeEventListener(e,P,i)):e!=="list"&&e!=="tagName"&&e!=="form"&&e!=="type"&&e!=="size"&&e!=="download"&&e!=="href"&&!p&&e in t?t[e]=n==null?"":n:typeof n!="function"&&e!=="dangerouslySetInnerHTML"&&(e!==(e=e.replace(/xlink:?/,""))?n==null||n===!1?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function $(t){this.l[t.type+!1](c.event?c.event(t):t)}function Q(t){this.l[t.type+!0](c.event?c.event(t):t)}function o(t,e,n){var s,p;for(s=0;s<t.__k.length;s++)(p=t.__k[s])&&(p.__=t,p.__e&&(typeof p.type=="function"&&p.__k.length>1&&o(p,e,n),e=k(n,p,p,t.__k,null,p.__e,e),typeof t.type=="function"&&(t.__d=e)))}function r(t,e,n,s,p,i,b,P,x){var M,u,V,U,R,z,ie,K,Y,ne,ce,re=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(x=n.__h,P=e.__e=n.__e,e.__h=null,i=[P]),(M=c.__b)&&M(e);try{e:if(typeof re=="function"){if(K=e.props,Y=(M=re.contextType)&&s[M.__c],ne=M?Y?Y.props.value:M.__:s,n.__c?ie=(u=e.__c=n.__c).__=u.__E:("prototype"in re&&re.prototype.render?e.__c=u=new re(K,ne):(e.__c=u=new ee(K,ne),u.constructor=re,u.render=ue),Y&&Y.sub(u),u.props=K,u.state||(u.state={}),u.context=ne,u.__n=s,V=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),re.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=H({},u.__s)),H(u.__s,re.getDerivedStateFromProps(K,u.__s))),U=u.props,R=u.state,V)re.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(re.getDerivedStateFromProps==null&&K!==U&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(K,ne),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(K,u.__s,ne)===!1||e.__v===n.__v){u.props=K,u.state=u.__s,e.__v!==n.__v&&(u.__d=!1),u.__v=e,e.__e=n.__e,e.__k=n.__k,u.__h.length&&b.push(u),o(e,P,t);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(K,u.__s,ne),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(U,R,z)})}u.context=ne,u.props=K,u.state=u.__s,(M=c.__r)&&M(e),u.__d=!1,u.__v=e,u.__P=t,M=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(s=H(H({},s),u.getChildContext())),V||u.getSnapshotBeforeUpdate==null||(z=u.getSnapshotBeforeUpdate(U,R)),ce=M!=null&&M.type==Z&&M.key==null?M.props.children:M,d(t,Array.isArray(ce)?ce:[ce],e,n,s,p,i,b,P,x),u.base=e.__e,e.__h=null,u.__h.length&&b.push(u),ie&&(u.__E=u.__=null),u.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=w(n.__e,e,n,s,p,i,b,x);(M=c.diffed)&&M(e)}catch(de){e.__v=null,(x||i!=null)&&(e.__e=P,e.__h=!!x,i[i.indexOf(P)]=null),c.__e(de,e,n)}return e.__e}function f(t,e){c.__c&&c.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(s){s.call(n)})}catch(s){c.__e(s,n.__v)}})}function w(t,e,n,s,p,i,b,P){var x,M,u,V,U,R=n.props,z=e.props;if(p=e.type==="svg"||p,i!=null){for(x=0;x<i.length;x++)if((M=i[x])!=null&&((e.type===null?M.nodeType===3:M.localName===e.type)||t==M)){t=M,i[x]=null;break}}if(t==null){if(e.type===null)return document.createTextNode(z);t=p?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,z.is&&{is:z.is}),i=null,P=!1}if(e.type===null)R===z||P&&t.data===z||(t.data=z);else{if(i!=null&&(i=q.slice.call(t.childNodes)),u=(R=n.props||y).dangerouslySetInnerHTML,V=z.dangerouslySetInnerHTML,!P){if(i!=null)for(R={},U=0;U<t.attributes.length;U++)R[t.attributes[U].name]=t.attributes[U].value;(V||u)&&(V&&(u&&V.__html==u.__html||V.__html===t.innerHTML)||(t.innerHTML=V&&V.__html||""))}m(t,z,R,p,P),V?e.__k=[]:(x=e.props.children,d(t,Array.isArray(x)?x:[x],e,n,s,e.type!=="foreignObject"&&p,i,b,y,P)),P||("value"in z&&(x=z.value)!==void 0&&(x!==t.value||e.type==="progress"&&!x)&&W(t,"value",x,R.value,!1),"checked"in z&&(x=z.checked)!==void 0&&x!==t.checked&&W(t,"checked",x,R.checked,!1))}return t}function L(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(s){c.__e(s,n)}}function j(t,e,n){var s,p,i;if(c.unmount&&c.unmount(t),(s=t.ref)&&(s.current&&s.current!==t.__e||L(s,null,e)),n||typeof t.type=="function"||(n=(p=t.__e)!=null),t.__e=t.__d=void 0,(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(b){c.__e(b,e)}s.base=s.__P=null}if(s=t.__k)for(i=0;i<s.length;i++)s[i]&&j(s[i],e,n);p!=null&&G(p)}function ue(t,e,n){return this.constructor(t,n)}function oe(t,e,n){var s,p,i;c.__&&c.__(t,e),p=(s=n===h)?null:n&&n.__k||e.__k,t=J(Z,null,[t]),i=[],r(e,(s?e:n||e).__k=t,p||y,y,e.ownerSVGElement!==void 0,n&&!s?[n]:p?null:e.childNodes.length?q.slice.call(e.childNodes):null,i,n||y,s),f(i,t)}function se(t,e){oe(t,e,h)}function le(t,e,n){var s,p,i,b=arguments,P=H({},t.props);for(i in e)i=="key"?s=e[i]:i=="ref"?p=e[i]:P[i]=e[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(b[i]);return n!=null&&(P.children=n),X(t.type,P,s||t.key,p||t.ref,null)}function fe(t,e){var n={__c:e="__cC"+N++,__:t,Consumer:function(s,p){return s.children(p)},Provider:function(s,p,i){return this.getChildContext||(p=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(b){this.props.value!==b.value&&p.some(a)},this.sub=function(b){p.push(b);var P=b.componentWillUnmount;b.componentWillUnmount=function(){p.splice(p.indexOf(b),1),P&&P.call(b)}}),s.children}};return n.Provider.__=n.Consumer.contextType=n}c={__e:function(t,e){for(var n,s,p,i=e.__h;e=e.__;)if((n=e.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(t)),p=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),p=n.__d),p)return e.__h=i,n.__E=n}catch(b){t=b}throw t},__v:0},g=function(t){return t!=null&&t.constructor===void 0},ee.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},n),this.props)),t&&H(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),a(this))},ee.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),a(this))},ee.prototype.render=Z,_=[],C=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,S.__r=0,h=y,N=0},792:(l,E,D)=>{"use strict";D.r(E),D.d(E,{useState:()=>J,useReducer:()=>X,useEffect:()=>I,useLayoutEffect:()=>Z,useRef:()=>ee,useImperativeHandle:()=>te,useMemo:()=>B,useCallback:()=>a,useContext:()=>S,useDebugValue:()=>d,useErrorBoundary:()=>v});var c=D(473),g,_,C,O=0,h=[],N=c.options.__b,y=c.options.__r,q=c.options.diffed,T=c.options.__c,H=c.options.unmount;function G(o,r){c.options.__h&&c.options.__h(_,o,O||r),O=0;var f=_.__H||(_.__H={__:[],__h:[]});return o>=f.__.length&&f.__.push({}),f.__[o]}function J(o){return O=1,X(Q,o)}function X(o,r,f){var w=G(g++,2);return w.t=o,w.__c||(w.__=[f?f(r):Q(void 0,r),function(L){var j=w.t(w.__[0],L);w.__[0]!==j&&(w.__=[j,w.__[1]],w.__c.setState({}))}],w.__c=_),w.__}function I(o,r){var f=G(g++,3);!c.options.__s&&$(f.__H,r)&&(f.__=o,f.__H=r,_.__H.__h.push(f))}function Z(o,r){var f=G(g++,4);!c.options.__s&&$(f.__H,r)&&(f.__=o,f.__H=r,_.__h.push(f))}function ee(o){return O=5,B(function(){return{current:o}},[])}function te(o,r,f){O=6,Z(function(){typeof o=="function"?o(r()):o&&(o.current=r())},f==null?f:f.concat(o))}function B(o,r){var f=G(g++,7);return $(f.__H,r)&&(f.__=o(),f.__H=r,f.__h=o),f.__}function a(o,r){return O=8,B(function(){return o},r)}function S(o){var r=_.context[o.__c],f=G(g++,9);return f.__c=o,r?(f.__==null&&(f.__=!0,r.sub(_)),r.props.value):o.__}function d(o,r){c.options.useDebugValue&&c.options.useDebugValue(r?r(o):o)}function v(o){var r=G(g++,10),f=J();return r.__=o,_.componentDidCatch||(_.componentDidCatch=function(w){r.__&&r.__(w),f[1](w)}),[f[0],function(){f[1](void 0)}]}function k(){h.forEach(function(o){if(o.__P)try{o.__H.__h.forEach(F),o.__H.__h.forEach(W),o.__H.__h=[]}catch(r){o.__H.__h=[],c.options.__e(r,o.__v)}}),h=[]}c.options.__b=function(o){_=null,N&&N(o)},c.options.__r=function(o){y&&y(o),g=0;var r=(_=o.__c).__H;r&&(r.__h.forEach(F),r.__h.forEach(W),r.__h=[])},c.options.diffed=function(o){q&&q(o);var r=o.__c;r&&r.__H&&r.__H.__h.length&&(h.push(r)!==1&&C===c.options.requestAnimationFrame||((C=c.options.requestAnimationFrame)||function(f){var w,L=function(){clearTimeout(j),m&&cancelAnimationFrame(w),setTimeout(f)},j=setTimeout(L,100);m&&(w=requestAnimationFrame(L))})(k)),_=void 0},c.options.__c=function(o,r){r.some(function(f){try{f.__h.forEach(F),f.__h=f.__h.filter(function(w){return!w.__||W(w)})}catch(w){r.some(function(L){L.__h&&(L.__h=[])}),r=[],c.options.__e(w,f.__v)}}),T&&T(o,r)},c.options.unmount=function(o){H&&H(o);var r=o.__c;if(r&&r.__H)try{r.__H.__.forEach(F)}catch(f){c.options.__e(f,r.__v)}};var m=typeof requestAnimationFrame=="function";function F(o){var r=_;typeof o.__c=="function"&&o.__c(),_=r}function W(o){var r=_;o.__c=o.__(),_=r}function $(o,r){return!o||o.length!==r.length||r.some(function(f,w){return f!==o[w]})}function Q(o,r){return typeof r=="function"?r(o):r}}},_e={};function A(l){if(_e[l])return _e[l].exports;var E=_e[l]={exports:{}};return ae[l].call(E.exports,E,E.exports,A),E.exports}A.m=ae,(()=>{A.n=l=>{var E=l&&l.__esModule?()=>l.default:()=>l;return A.d(E,{a:E}),E}})(),(()=>{A.d=(l,E)=>{for(var D in E)A.o(E,D)&&!A.o(l,D)&&Object.defineProperty(l,D,{enumerable:!0,get:E[D]})}})(),(()=>{A.f={},A.e=l=>Promise.all(Object.keys(A.f).reduce((E,D)=>(A.f[D](l,E),E),[]))})(),(()=>{A.u=l=>""+l+".js"})(),(()=>{A.miniCssF=l=>""+(l===179?"main":l)+".css"})(),(()=>{A.o=(l,E)=>Object.prototype.hasOwnProperty.call(l,E)})(),(()=>{var l={},E="@pwrc/example:";A.l=(D,c,g)=>{if(l[D]){l[D].push(c);return}var _,C;if(g!==void 0)for(var O=document.getElementsByTagName("script"),h=0;h<O.length;h++){var N=O[h];if(N.getAttribute("src")==D||N.getAttribute("data-webpack")==E+g){_=N;break}}_||(C=!0,_=document.createElement("script"),_.charset="utf-8",_.timeout=120,A.nc&&_.setAttribute("nonce",A.nc),_.setAttribute("data-webpack",E+g),_.src=D),l[D]=[c];var y=(T,H)=>{_.onerror=_.onload=null,clearTimeout(q);var G=l[D];if(delete l[D],_.parentNode&&_.parentNode.removeChild(_),G&&G.forEach(J=>J(H)),T)return T(H)},q=setTimeout(y.bind(null,void 0,{type:"timeout",target:_}),12e4);_.onerror=y.bind(null,_.onerror),_.onload=y.bind(null,_.onload),C&&document.head.appendChild(_)}})(),(()=>{A.r=l=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})}})(),(()=>{A.p="/pwrc/static/"})(),(()=>{var l=(g,_,C,O)=>{var h=document.createElement("link");h.rel="stylesheet",h.type="text/css";var N=y=>{if(h.onerror=h.onload=null,y.type==="load")C();else{var q=y&&(y.type==="load"?"missing":y.type),T=y&&y.target&&y.target.href||_,H=new Error("Loading CSS chunk "+g+` failed.
(`+T+")");H.code="CSS_CHUNK_LOAD_FAILED",H.type=q,H.request=T,h.parentNode.removeChild(h),O(H)}};return h.onerror=h.onload=N,h.href=_,document.head.appendChild(h),h},E=(g,_)=>{for(var C=document.getElementsByTagName("link"),O=0;O<C.length;O++){var h=C[O],N=h.getAttribute("data-href")||h.getAttribute("href");if(h.rel==="stylesheet"&&(N===g||N===_))return h}for(var y=document.getElementsByTagName("style"),O=0;O<y.length;O++){var h=y[O],N=h.getAttribute("data-href");if(N===g||N===_)return h}},D=g=>new Promise((_,C)=>{var O=A.miniCssF(g),h=A.p+O;if(E(O,h))return _();l(g,h,_,C)}),c={179:0};A.f.miniCss=(g,_)=>{var C={"669":1};c[g]?_.push(c[g]):c[g]!==0&&C[g]&&_.push(c[g]=D(g).then(()=>{c[g]=0},O=>{throw delete c[g],O}))}})(),(()=>{var l={179:0};A.f.j=(c,g)=>{var _=A.o(l,c)?l[c]:void 0;if(_!==0)if(_)g.push(_[2]);else{var C=new Promise((y,q)=>{_=l[c]=[y,q]});g.push(_[2]=C);var O=A.p+A.u(c),h=new Error,N=y=>{if(A.o(l,c)&&(_=l[c],_!==0&&(l[c]=void 0),_)){var q=y&&(y.type==="load"?"missing":y.type),T=y&&y.target&&y.target.src;h.message="Loading chunk "+c+` failed.
(`+q+": "+T+")",h.name="ChunkLoadError",h.type=q,h.request=T,_[1](h)}};A.l(O,N,"chunk-"+c)}};var E=(c,g)=>{for(var[_,C,O]=g,h,N,y=0,q=[];y<_.length;y++)N=_[y],A.o(l,N)&&l[N]&&q.push(l[N][0]),l[N]=0;for(h in C)A.o(C,h)&&(A.m[h]=C[h]);for(O&&O(A),c&&c(g);q.length;)q.shift()()},D=self.webpackChunk_pwrc_example=self.webpackChunk_pwrc_example||[];D.forEach(E.bind(null,0)),D.push=E.bind(null,D.push.bind(D))})(),(()=>{"use strict";var l=A(473);typeof window!="undefined"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.5.7",l.options,{Fragment:l.Fragment,Component:l.Component});var E=A(792);const D=(d,v,k)=>{if(v&&v.type==="click"){const m=v.target.closest("a[href]");if(!m||m.origin!=location.origin)return d;v.preventDefault(),k=!0,v=m.href.replace(location.origin,"")}else typeof v!="string"&&(v=location.pathname+location.search);return k===!0?history.pushState(null,"",v):k===!1&&history.replaceState(null,"",v),v};function c(d){const[v,k]=(0,E.useReducer)(D,location.pathname+location.search),m=(0,E.useMemo)(()=>{const F=new URL(v,location.origin),W=F.pathname.replace(/(.)\/$/g,"$1");return{url:v,path:W,query:Object.fromEntries(F.searchParams),route:k}},[v]);return(0,E.useEffect)(()=>(addEventListener("click",k),addEventListener("popstate",k),()=>{removeEventListener("click",k),removeEventListener("popstate",k)})),(0,l.h)(c.ctx.Provider,{value:m},d.children)}function g(d){const[,v]=(0,E.useReducer)(j=>j+1,0),k=_(),{url:m,path:F,query:W}=k,$=(0,E.useRef)(k),Q=(0,E.useRef)(),o=(0,E.useRef)(),r=(0,E.useRef)(),f=(0,E.useRef)();m!==$.current.url&&(f.current=null,Q.current=$.current,r.current=o.current,$.current=k),this.componentDidCatch=j=>{j&&j.then&&(f.current=j)},(0,E.useEffect)(()=>{let j=f.current;const ue=()=>{if($.current.url!==m||f.current!==j)return;d.onLoadEnd&&d.onLoadEnd(m),Q.current=r.current=null,v(0)};j?(d.onLoadStart&&d.onLoadStart(m),j.then(ue)):ue()},[m]);const w=[].concat(...d.children);let L=w.filter(j=>j.props.path===F);return L.length==0&&(L=w.filter(j=>j.props.default)),o.current=L.map((j,ue)=>(0,l.cloneElement)(j,{path:F,query:W})),o.current.concat(r.current||[])}g.Provider=c,c.ctx=(0,l.createContext)({});const _=()=>(0,E.useContext)(c.ctx);var C=A(299),O=A(305),h=Object.prototype.hasOwnProperty,N=Object.getOwnPropertySymbols,y=Object.prototype.propertyIsEnumerable,q=Object.assign,T=(d,v)=>{var k={};for(var m in d)h.call(d,m)&&v.indexOf(m)<0&&(k[m]=d[m]);if(d!=null&&N)for(var m of N(d))v.indexOf(m)<0&&y.call(d,m)&&(k[m]=d[m]);return k};const H="/pwrc/";function G(d){var{as:v="a",href:k}=d,m=T(d,["as","href"]);const F=(0,E.useMemo)(()=>H?(H.endsWith("/")?H.slice(0,-1):H)+k:k,[k]),W=v;return(0,l.h)(W,q({href:F},m))}const J={wrapper:"_1DrieJlUqckF-ga9nnSv5f",list:"NaohKNVLPhc3S6Vj92jZE",content:"_2FKBGOWixN09YFZGHeIqHn"};function X({children:d}){return(0,O.jq)({name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.h)("div",{className:J.wrapper},(0,l.h)("nav",null,(0,l.h)("ul",{className:J.list},(0,l.h)("li",null,(0,l.h)(G,{href:"/"},"Home")),(0,l.h)("li",null,(0,l.h)(G,{href:"/about"},"About")))),(0,l.h)("main",{className:J.content},d))}const I="/pwrc/",Z=(0,C.lazy)(()=>A.e(669).then(A.bind(A,669)),{route:!0}),ee=(0,C.lazy)(()=>A.e(732).then(A.bind(A,732)),{route:!0}),te=(0,C.lazy)(()=>A.e(475).then(A.bind(A,475)),{route:!0});function B(d){return typeof window=="undefined"||!I?d:(I.endsWith("/")?I.slice(0,-1):I)+d}function a(){return(0,O.Jr)("en-us"),(0,O.je)("%s | Example"),(0,l.h)(X,null,(0,l.h)(C.ErrorBoundary,null,(0,l.h)(g,null,(0,l.h)(Z,{path:B("/")}),(0,l.h)(ee,{path:B("/about")}),(0,l.h)(te,{default:!0}))))}function S(){return(0,l.h)(c,null,(0,l.h)(a,null))}(0,l.hydrate)((0,l.h)(S,null),document.body)})()})();

//# sourceMappingURL=main.js.map