(self.webpackChunkmy_profile=self.webpackChunkmy_profile||[]).push([[682],{4078:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return kt}});var r=e(1413),n=e(8687),i=e(5861),a=e(885),l=e(7757),c=e.n(l),s=e(8063),u=e(2791),d=e(2817),f=e(5987),m=e(8024),p=e(4942),h=e(4164),x=function(){var t=(0,u.useState)(!1),o=(0,a.Z)(t,2),e=o[0],r=o[1];return(0,u.useEffect)((function(){r(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement))}),[]),{isBrowser:e,isServer:!e}},g=e(8331),v=function(t){var o=document.createElement("div");return o.setAttribute("id",t),o},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.zv)(),o=arguments.length>1?arguments[1]:void 0,e="nextui-".concat(t),r=x(),n=r.isBrowser,i=(0,u.useState)(n?v(e):null),l=(0,a.Z)(i,2),c=l[0],s=l[1];return(0,u.useEffect)((function(){var t=(o?o():null)||document.body,r=t.querySelector("#".concat(e)),n=r||v(e);r||t.appendChild(n),s(n)}),[]),c},b=e(3140),w=e(7504),y=["children","childrenRef","className","visible","enterTime","leaveTime","clearTime","name","onExited","onEntered"],C=(0,m.Z)((function(t){var o=t.children,e=t.childrenRef,n=t.className,i=t.visible,l=t.enterTime,c=t.leaveTime,s=t.clearTime,d=t.name,m=t.onExited,p=t.onEntered,h=(0,f.Z)(t,y),x=(0,u.useState)(""),g=(0,a.Z)(x,2),v=g[0],$=g[1],b=(0,u.useState)(i),C=(0,a.Z)(b,2),Z=C[0],j=C[1];return(0,u.useEffect)((function(){var t=i?"enter":"leave",o=i?l:c;i&&!Z&&j(!0),$("".concat(d,"-").concat(t));var e=setTimeout((function(){$("".concat(d,"-").concat(t," ").concat(d,"-").concat(t,"-active")),"leave"===t?null==m||m():null==p||p(),clearTimeout(e)}),o),r=setTimeout((function(){i||($(""),j(!1)),clearTimeout(r)}),o+s);return function(){clearTimeout(e),clearTimeout(r)}}),[i,Z]),(0,u.useEffect)((function(){if(null!=e&&e.current){var t=v.split(" "),o=e.current.className.split(" ").filter((function(t){return!t.includes(d)}));e.current.className=(0,w.Z)(o,t)}}),[e,v]),u.isValidElement(o)&&Z?u.cloneElement(o,(0,r.Z)((0,r.Z)({},h),{},{className:(0,w.Z)(o.props.className,n,null!=e&&e.current?"":v)})):null}),{visible:!1,enterTime:60,leaveTime:60,clearTime:60,className:"",name:"transition"}),Z=function(t){(0,u.useEffect)((function(){var o=function(o){return t(o)};return document.addEventListener("click",o),function(){return document.removeEventListener("click",o)}}),[t])},j={top:-1e3,left:-1e3,right:-1e3,bottom:-1e3,width:0,height:0},k=function(t){if(!t||!t.current)return j;var o=t.current.getBoundingClientRect();return(0,r.Z)((0,r.Z)({},o),{},{width:o.width||o.right-o.left,height:o.height||o.bottom-o.top,top:o.top+document.documentElement.scrollTop,bottom:o.bottom+document.documentElement.scrollTop,left:o.left+document.documentElement.scrollLeft,right:o.right+document.documentElement.scrollLeft})},T={top:"-1000px",left:"-1000px",transform:"none"},N=e(4984),E=(0,N.zo)("div",{width:"max-content",display:"inherit"}),S=(0,N.zo)("span",{display:"none",content:"",size:"$5",zIndex:"-2",background:"$$tooltipColor",br:"0px 0px 2px 0px",position:"absolute"}),z=(0,N.zo)("div",{position:"relative",fs:"$xs",padding:0,variants:{hideArrow:{false:(0,p.Z)({},"& ".concat(S),{display:"block"})}}}),_=(0,N.zo)("div",{position:"absolute",width:"auto",padding:"$3 $sm",opacity:0,zIndex:"$10",br:"$lg","@motion":{transition:"none"},variants:{color:{default:{$$tooltipColor:"$colors$background",bg:"$$tooltipColor"},primary:{$$tooltipColor:"$colors$primary",bg:"$$tooltipColor"},secondary:{$$tooltipColor:"$colors$secondary",bg:"$$tooltipColor"},success:{$$tooltipColor:"$colors$success",bg:"$$tooltipColor"},warning:{$$tooltipColor:"$colors$warning",bg:"$$tooltipColor"},error:{$$tooltipColor:"$colors$error",bg:"$$tooltipColor"},invert:{$$tooltipColor:"$colors$foreground",bg:"$$tooltipColor"}},contentColor:{default:{$$tooltipTextColor:"$colors$text",color:"$$tooltipTextColor"},primary:{$$tooltipTextColor:"$colors$primary",color:"$$tooltipTextColor"},secondary:{$$tooltipTextColor:"$colors$secondary",color:"$$tooltipTextColor"},success:{$$tooltipTextColor:"$colors$success",color:"$$tooltipTextColor"},warning:{$$tooltipTextColor:"$colors$warning",color:"$$tooltipTextColor"},error:{$$tooltipTextColor:"$colors$error",color:"$$tooltipTextColor"},invert:{$$tooltipTextColor:"$colors$invert",color:"$$tooltipTextColor"}},rounded:{true:{br:"$pill"}},shadow:{true:{bs:"$md"}},animated:{true:{transition:"opacity 0.25s ease 0s, top 0.25s ease 0s"},false:{transition:"none"}}},compoundVariants:[{color:"primary",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"secondary",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"success",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"error",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"invert",contentColor:"default",css:{$$tooltipTextColor:"$colors$background"}}],defaultVariants:{color:"default",contentColor:"default"}}),P=e(184),L=["children","parent","visible","offset","placement","rounded","animated","className","hideArrow","css"],I="nextui-tooltip",M=function(t){var o=t.children,e=t.parent,n=t.visible,i=t.offset,l=t.placement,c=(t.rounded,t.animated),s=t.className,d=t.hideArrow,m=t.css,x=(0,f.Z)(t,L),g=$("tooltip"),v=(0,u.useRef)(null),y=(0,u.useState)(T),j=(0,a.Z)(y,2),N=j[0],E=j[1];if(!e)return null;var M=function(){var t=function(t,o,e){var r={top:{top:o.top-e+"px",left:"".concat(o.left+o.width/2,"px"),transform:"translate(-50%, -100%)"},topStart:{top:o.top-e+"px",left:"".concat(o.left,"px"),transform:"translate(0, -100%)"},topEnd:{top:o.top-e+"px",left:"".concat(o.left+o.width,"px"),transform:"translate(-100%, -100%)"},bottom:{top:"".concat(o.bottom+e,"px"),left:"".concat(o.left+o.width/2,"px"),transform:"translate(-50%, 0)"},bottomStart:{top:"".concat(o.bottom+e,"px"),left:"".concat(o.left,"px"),transform:"translate(0, 0)"},bottomEnd:{top:"".concat(o.bottom+e,"px"),left:"".concat(o.left+o.width,"px"),transform:"translate(-100%, 0)"},left:{top:"".concat(o.top+o.height/2,"px"),left:o.left-e+"px",transform:"translate(-100%, -50%)"},leftStart:{top:"".concat(o.top,"px"),left:o.left-e+"px",transform:"translate(-100%, 0)"},leftEnd:{top:"".concat(o.top+o.height,"px"),left:o.left-e+"px",transform:"translate(-100%, -100%)"},right:{top:"".concat(o.top+o.height/2,"px"),left:"".concat(o.right+e,"px"),transform:"translate(0, -50%)"},rightStart:{top:"".concat(o.top,"px"),left:"".concat(o.right+e,"px"),transform:"translate(0, 0)"},rightEnd:{top:"".concat(o.top+o.height,"px"),left:"".concat(o.right+e,"px"),transform:"translate(0, -100%)"}};return r[t]||r.top}(l,k(e),i);E(t)},R=(0,u.useMemo)((function(){return function(t,o){var e={top:{top:"auto",right:"auto",left:"50%",bottom:"0px",transform:"translate(-50%, 100%) rotate(45deg)"},topStart:{top:"auto",right:"auto",left:"8%",bottom:"0px",transform:"translate(8%, 100%) rotate(45deg)"},topEnd:{top:"auto",right:"8%",left:"auto",bottom:"0px",transform:"translate(8%, 100%) rotate(45deg)"},bottom:{top:"0px",right:"auto",left:"50%",bottom:"auto",transform:"translate(-50%, -100%) rotate(225deg)"},bottomStart:{top:"0px",right:"auto",left:"8%",bottom:"auto",transform:"translate(8%, -100%) rotate(225deg)"},bottomEnd:{top:"0px",right:"8%",left:"auto",bottom:"auto",transform:"translate(8%, -100%) rotate(225deg)"},left:{top:"50%",right:"-".concat(o-1,"px"),left:"auto",bottom:"auto",transform:"translate(100%, -50%) rotate(-45deg)"},leftStart:{top:"calc(15% + 1px)",right:"-".concat(o-1,"px"),left:"auto",bottom:"auto",transform:"translate(100%, 0) rotate(-45deg)"},leftEnd:{top:"auto",right:"-".concat(o-1,"px"),left:"auto",bottom:"calc(15% + 1px)",transform:"translate(100%, 0) rotate(-45deg)"},right:{top:"50%",right:"auto",left:"-".concat(o-1,"px"),bottom:"auto",transform:"translate(-100%, -50%) rotate(135deg)"},rightStart:{top:"calc(15% + 1px)",right:"auto",left:"-".concat(o-1,"px"),bottom:"auto",transform:"translate(-100%, 0) rotate(135deg)"},rightEnd:{top:"auto",right:"auto",left:"-".concat(o-1,"px"),bottom:"calc(15% + 1px)",transform:"translate(-100%, 0) rotate(135deg)"}};return e[t]||e.top}(l,5)}),[l]),V=R.transform,A=R.top,W=R.left,B=R.right,D=R.bottom;(0,b.Z)(M),Z((function(){return M()})),(0,u.useEffect)((function(){M()}),[n]);var U=(0,u.useMemo)((function(){return n?"open":"closed"}),[n]);return g?(0,h.createPortal)((0,P.jsx)(C,{name:"".concat(I,"-wrapper"),visible:n,enterTime:20,leaveTime:20,children:(0,P.jsx)(_,(0,r.Z)((0,r.Z)({className:(0,w.Z)("".concat(I,"-content"),"".concat(I,"--").concat(U),s),"data-state":U,ref:v,onClick:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation()},animated:c,css:(0,r.Z)((0,p.Z)({left:N.left,top:"calc(".concat(N.top," + 6px)"),transform:N.transform},"&.".concat(I,"-wrapper-enter-active"),{opacity:1,top:N.top}),m)},x),{},{children:(0,P.jsxs)(z,{role:"tooltip","data-state":U,hideArrow:d,className:(0,w.Z)(I,(0,p.Z)({},"".concat(I,"--with-arrow"),!d)),children:[(0,P.jsx)(S,{className:"".concat(I,"-arrow"),css:{left:W,top:A,right:B,bottom:D,transform:V}}),o]})}))}),g):null};M.toString=function(){return".nextui-tooltip-content"};var R=(0,m.Z)(M,{placement:"top",offset:12,className:""}),V=function(t,o){(0,u.useEffect)((function(){var e=function(e){var r=t.current;e&&r&&!r.contains(e.target)&&o(e)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[t,o])},A=["children","initialVisible","content","offset","placement","portalClassName","enterDelay","leaveDelay","trigger","rounded","animated","shadow","className","color","contentColor","onVisibleChange","hideArrow","css","triggerCss","onClick","keepMounted","visible"],W=function(t){var o=t.children,e=t.initialVisible,n=t.content,i=t.offset,l=t.placement,c=t.portalClassName,s=t.enterDelay,d=t.leaveDelay,m=t.trigger,p=t.rounded,h=t.animated,x=t.shadow,g=t.className,v=t.color,$=t.contentColor,b=t.onVisibleChange,w=t.hideArrow,y=t.css,C=t.triggerCss,Z=t.onClick,j=t.keepMounted,k=t.visible,T=(0,f.Z)(t,A),N=(0,u.useRef)(),S=(0,u.useRef)(null),z=(0,u.useState)(e),_=(0,a.Z)(z,2),L=_[0],I=_[1],M={animated:h,visible:L,css:y,shadow:x,offset:i,placement:l,rounded:p,color:v,contentColor:$,hideArrow:w,parent:S,className:c},W=function(t){var o=function(){clearTimeout(N.current),N.current=void 0},e=function(t){I(t),b(t),o()};o(),N.current=t?window.setTimeout((function(){return e(!0)}),s):window.setTimeout((function(){return e(!1)}),d)},B=function(t){"hover"===m&&W(t)};return V(S,(function(){return"click"===m&&!j&&W(!1)})),(0,u.useEffect)((function(){void 0!==k&&W(k)}),[k]),(0,P.jsxs)(E,(0,r.Z)((0,r.Z)({ref:S,role:"button",tabIndex:-1,className:"nextui-tooltip-button ".concat(g),onClick:function(){"click"===m&&W(!L),null==Z||Z()},onKeyUp:function(){return B(!0)},onMouseEnter:function(){return B(!0)},onMouseLeave:function(){return B(!1)},onFocus:function(){return B(!0)},onBlur:function(){return B(!1)},css:(0,r.Z)({},C)},T),{},{children:[o,n&&(0,P.jsx)(R,(0,r.Z)((0,r.Z)({},M),{},{children:n}))]}))};W.toString=function(){return".nextui-tooltip"};var B=(0,m.Z)(W,{initialVisible:!1,hideArrow:!1,animated:!0,shadow:!0,rounded:!1,keepMounted:!1,trigger:"hover",enterDelay:0,leaveDelay:0,className:"",portalClassName:"",onVisibleChange:function(){}}),D=e(3564),U=e(7291),F=e(470),q=e(2129),G=function(t){if("undefined"!=typeof document||!t){var o=H(t)?t.replace("var(","").replace(")",""):"--".concat(t);return getComputedStyle(document.documentElement).getPropertyValue(o)}return""},H=function(t){return!(!t||0!==(null==t?void 0:t.indexOf("var(")))},O=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=0,r=0,n=0;return 4==t.length?(e="0x"+t[1]+t[1],r="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7==t.length&&(e="0x"+t[1]+t[2],r="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"rgba(".concat(+e,", ").concat(+r,",").concat(+n,",").concat(o,")")},K=function(t){var o=H(t)?G(t):t;if("#"===o.charAt(0))return function(t){var o=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,o,e,r){return"".concat(o).concat(o).concat(e).concat(e).concat(r).concat(r)})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);if(!e)throw new Error("Next UI: Unsupported ".concat(t," color."));return[Number.parseInt(e[1],16),Number.parseInt(e[2],16),Number.parseInt(e[3],16)]}(o);var e=o.replace(/ /g,""),r=o.substr(0,4),n=e.match(/\((.+)\)/);if(!r.startsWith("rgb")||!n)throw new Error('Next UI: Only support ["RGB", "RGBA", "HEX"] color.');return n[1].split(",").map((function(t){return Number.parseFloat(t)}))};var X=(0,N.zo)("p",{variants:{weight:{hairline:{fontWeight:"$hairline"},thin:{fontWeight:"$thin"},light:{fontWeight:"$light"},normal:{fontWeight:"$normal"},medium:{fontWeight:"$medium"},semibold:{fontWeight:"$semibold"},bold:{fontWeight:"$bold"},extrabold:{fontWeight:"$extrabold"},black:{fontWeight:"$black"}}}}),J=["children","tag","color","transform","margin","size","css"],Q=u.forwardRef((function(t,o){var e=t.children,n=t.tag,i=t.color,a=t.transform,l=t.margin,c=t.size,s=t.css,d=(0,f.Z)(t,J),m=(0,U.gy)(o),p=(0,u.useMemo)((function(){return function(t){var o=q.Vh.find((function(o){return o===t}));return null!=o}(i)?"default"===i?"$text":"$".concat(i):i}),[i]),h=(0,u.useMemo)((function(){return c?"number"==typeof c?"".concat(c,"px"):c:"inherit"}),[c]),x=(0,u.useMemo)((function(){return l?"number"==typeof l?"".concat(c,"px"):l:"inherit"}),[l]);return(0,P.jsx)(X,(0,r.Z)((0,r.Z)({ref:m,as:n,css:(0,r.Z)({color:p,fontSize:c?h:"",margin:x,tt:a},s)},d),{},{children:e}))}));F.Ts&&(Q.displayName="NextUI.TextChild"),Q.toString=function(){return".nextui-text-child"};var Y=u.memo(Q),tt=(0,m.Z)(Y,{color:"default"}),ot=["h1","h2","h3","h4","h5","h6","b","small","i","span","del","em","blockquote","transform","size","margin","children"],et=function t(o,e,r,n){if(!o.length)return e;var i=o.slice(1,o.length);return(0,P.jsx)(tt,{tag:o[0],size:r,transform:n,children:t(i,e,r)})},rt=u.forwardRef((function(t,o){var e=t.h1,n=t.h2,i=t.h3,a=t.h4,l=t.h5,c=t.h6,s=t.b,d=t.small,m=t.i,p=t.span,h=t.del,x=t.em,g=t.blockquote,v=t.transform,$=t.size,b=t.margin,w=t.children,y=(0,f.Z)(t,ot),C=(0,U.gy)(o),Z={h1:e,h2:n,h3:i,h4:a,h5:l,h6:c,blockquote:g},j={span:p,small:d,b:s,em:x,i:m,del:h},k=Object.keys(Z).filter((function(t){return Z[t]})),T=Object.keys(j).filter((function(t){return j[t]})),N=(0,u.useMemo)((function(){return k[0]?k[0]:T[0]?T[0]:"p"}),[k,T]),E=T.filter((function(t){return t!==N})),S=(0,u.useMemo)((function(){return E.length?et(E,w,$,v):w}),[E,w,$,v]);return(0,P.jsx)(tt,(0,r.Z)((0,r.Z)({ref:C,transform:v,tag:N,margin:b,size:$},y),{},{children:S}))}));F.Ts&&(rt.displayName="NextUI.Text"),rt.toString=function(){return".nextui-text"};var nt,it,at=u.memo(rt),lt=(0,m.Z)(at,{h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,b:!1,small:!1,transform:"none",i:!1,span:!1,del:!1,em:!1,blockquote:!1,color:"default"}),ct=e(6346),st=e(4049),ut=e(7592),dt=(0,N.zo)("svg",{ml:"$1",as:"center",display:"inline-flex",color:"currentColor"}),ft=(0,N.zo)("a",{display:"inline-flex",alignItems:"baseline",lineHeight:"inherit",textDecoration:"none",width:"fitContent","&:hover":{opacity:.8},"@motion":{transition:"none"},variants:{color:{default:{color:"$link"},text:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}},underline:{true:{"&:hover, &:active, &:focus":{textDecoration:"underline"}}},block:{true:{padding:"$2 $4",borderRadius:"$base"}},animated:{true:{transition:"$link"}}},compoundVariants:[{color:"default",block:!0,css:{"&:hover":{backgroundColor:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!t)return"";var e=H(t)?G(t):t;if(/#[a-fA-F0-9]{3,6}/g.test(e))return O(e,o);if(!/^#|rgb|RGB/.test(e))return e;var r=K(e),n=(0,a.Z)(r,3),i=n[0],l=n[1],c=n[2];return"rgba(".concat(i,", ").concat(l,", ").concat(c,", ").concat(o>1?1:o<0?0:o,")")}(null==(nt=N.rS.colors)||null==(it=nt.link)?void 0:it.value,.2)}}},{color:"primary",block:!0,css:{"&:hover":{backgroundColor:"$primaryLight"}}},{color:"secondary",block:!0,css:{"&:hover":{backgroundColor:"$secondaryLight"}}},{color:"success",block:!0,css:{"&:hover":{backgroundColor:"$successLight"}}},{color:"warning",block:!0,css:{"&:hover":{backgroundColor:"$warningLight"}}},{color:"error",block:!0,css:{"&:hover":{backgroundColor:"$errorLight"}}}],defaultVariants:{color:"default",animated:!0}}),mt=ft,pt=function(){return(0,P.jsxs)(dt,{viewBox:"0 0 24 24",width:"1em",height:"1em",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",className:"nextui-link-icon",children:[(0,P.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,P.jsx)("path",{d:"M15 3h6v6"}),(0,P.jsx)("path",{d:"M10 14L21 3"})]})};pt.toString=function(){return".nextui-link-icon"};var ht=u.memo(pt),xt=["children","icon"],gt=u.forwardRef((function(t,o){var e=t.children,n=t.icon,i=(0,f.Z)(t,xt);return(0,P.jsxs)(mt,(0,r.Z)((0,r.Z)({},i),{},{ref:o,children:[e,n&&(0,P.jsx)(ht,{})]}))}));F.Ts&&(gt.displayName="NextUI.Link"),gt.toString=function(){return".nextui-link"};var vt=(0,m.Z)(gt,{icon:!1}),$t=e(4536),bt=e(4852),wt=["info","avatarUrl","avatarProps","css","onClick"],yt=function(t){var o=t.info,e=(t.avatarUrl,t.avatarProps),n=t.css,i=t.onClick,l=(0,f.Z)(t,wt),c=u.useState(!1),d=(0,a.Z)(c,2),m=d[0],p=d[1];return(0,P.jsxs)(s.ZP.Container,(0,r.Z)((0,r.Z)({className:"user-twitter-card__container",css:(0,r.Z)({mw:"260px",borderRadius:"$lg",padding:"$sm"},n),onClick:i},l),{},{children:[(0,P.jsxs)($t.Z,{justify:"space-between",align:"center",children:[(0,P.jsx)(bt.Z,{span:3,children:(0,P.jsx)(D.ZP,(0,r.Z)({size:"lg",src:null===o||void 0===o?void 0:o.avatar_url,color:"gradient",bordered:!0},e))}),(0,P.jsx)(bt.Z,{span:9,children:(0,P.jsxs)($t.Z,{children:[(0,P.jsxs)(s.ZP,{xs:12,direction:"column",children:[(0,P.jsx)(lt,{className:"user-twitter-card__text",b:!0,size:15,style:{marginBottom:6},children:null===o||void 0===o?void 0:o.name}),(0,P.jsx)(lt,{className:"user-twitter-card__text",size:14,css:{mt:"-$3"},color:"#888888",children:null===o||void 0===o?void 0:o.twitter_username})]}),(0,P.jsx)(ct.ZP,{auto:!0,rounded:!0,onClick:function(){return p(!m)},css:{maxHeight:"$space$12",fs:"$tiny",fontWeight:"$semibold",borderColor:m?"$foreground":"$primary",color:m?"$foreground":"$white"},color:"primary",bordered:m,children:m?"Unfollow":"Follow"})]})})]}),(0,P.jsx)(st.Z,{y:.3}),(0,P.jsx)(s.ZP.Container,{className:"user-twitter-card__username-container",children:(0,P.jsx)(s.ZP,{xs:12,children:(0,P.jsx)(lt,{className:"user-twitter-card__text",size:14,css:{mt:"$1"},color:"#888888",children:"".concat(null===o||void 0===o?void 0:o.bio," \ud83c\udf89")})})}),(0,P.jsx)(st.Z,{y:.5}),(0,P.jsxs)(s.ZP.Container,{className:"user-twitter-card__metrics-container",justify:"flex-start",alignContent:"center",children:[(0,P.jsxs)(lt,{className:"user-twitter-card__text",size:14,color:"#888888",children:[(0,P.jsx)(lt,{b:!0,color:"foreground",className:"user-twitter-card__text",size:14,children:null===o||void 0===o?void 0:o.following}),"\xa0Following"]}),(0,P.jsx)(st.Z,{inline:!0,x:.5}),(0,P.jsxs)(lt,{className:"user-twitter-card__text",size:14,color:"#888888",children:[(0,P.jsx)(lt,{b:!0,color:"foreground",className:"user-twitter-card__text",size:14,children:null===o||void 0===o?void 0:o.followers}),"\xa0Followers"]})]})]}))},Ct=function(t){var o=t.info,e=(0,ut.a)(960);return(0,u.useEffect)((function(){o&&(document.title="".concat(null===o||void 0===o?void 0:o.name))}),[o]),(0,P.jsx)(s.ZP,{xs:12,sm:8,md:7,lg:6,xl:5,children:(0,P.jsxs)(d.ZP,{hoverable:!0,style:{minWidth:"100%",display:"flex",flexDirection:"column",height:e?450:""},children:[(0,P.jsxs)(d.ZP.Body,{style:{position:e?"":"relative"},children:[e?"":(0,P.jsx)(d.ZP.Image,{crossOrigin:"anonymous",src:"/github.logo.png",height:"200px",width:"100%",alt:"Card background",style:{opacity:.1}}),(0,P.jsxs)("div",{style:{width:e?"97%":"",display:"flex",flexDirection:e?"column":"row",padding:e?"0":15,alignItems:e?"center":"",borderBottom:"1px solid #eaeaea",position:e?"":"absolute"},children:[(0,P.jsx)(s.ZP,{children:(0,P.jsx)(B,{placement:e?"bottomStart":"leftStart",content:(0,P.jsx)(yt,{info:o}),children:(0,P.jsx)(D.ZP,{css:{size:"$40"},zoomed:!0,src:null===o||void 0===o?void 0:o.avatar_url,color:"gradient",bordered:!0})})}),o?(0,P.jsxs)(s.ZP,{style:{marginLeft:e?10:30,padding:10},children:[(0,P.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center",margin:1},children:[e?(0,P.jsx)(lt,{h2:!0,css:{m:0},children:null===o||void 0===o?void 0:o.name}):(0,P.jsx)(lt,{h1:!0,css:{m:0},children:null===o||void 0===o?void 0:o.name}),(0,P.jsx)(vt,{href:"/",children:(0,P.jsx)(ct.ZP,{auto:!0,bordered:!0,rounded:!0,color:"secondary",css:{ml:100},children:(0,P.jsx)(B,{content:"Contact to me",children:(0,P.jsx)(lt,{css:{color:"inherit"},size:12,weight:"bold",transform:"uppercase",children:"Notify Me"})})})})]}),(0,P.jsx)(st.Z,{y:.5}),(0,P.jsx)("div",{style:{color:"rgba(var(--f52,142,142,142),1)",backgroundImage:'url("/github.logo.png")'},children:o?"Software Developer":""}),(0,P.jsx)(st.Z,{y:.3}),(0,P.jsx)("span",{children:(0,P.jsx)("small",{children:null===o||void 0===o?void 0:o.location})}),(0,P.jsx)(st.Z,{y:.3}),(0,P.jsx)("div",{children:(0,P.jsx)("strong",{href:null===o||void 0===o?void 0:o.blog,children:null===o||void 0===o?void 0:o.company})}),(0,P.jsx)(st.Z,{y:.3}),(0,P.jsx)("div",{children:(0,P.jsx)("a",{href:null===o||void 0===o?void 0:o.blog,children:null===o||void 0===o?void 0:o.blog})})]}):""]})]}),o?(0,P.jsx)(d.ZP.Footer,{children:(0,P.jsx)(vt,{color:"primary",target:"_blank",href:null===o||void 0===o?void 0:o.html_url,children:"Visit my profile on GitHub."})}):""]})})},Zt=e(712),jt=function(){var t=(0,u.useState)(null),o=(0,a.Z)(t,2),e=o[0],r=o[1];return(0,u.useEffect)((function(){var t=new Zt.vd({auth:""});function o(){return(o=(0,i.Z)(c().mark((function o(){var e;return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.request("GET /users/".concat("hieufix1710"));case 2:null!==(e=o.sent)&&void 0!==e&&e.data&&r(e.data);case 4:case"end":return o.stop()}}),o)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[]),(0,P.jsx)(s.ZP.Container,{justify:"center",children:(0,P.jsx)(Ct,{info:e})})},kt=(0,n.$j)((function(t){return(0,r.Z)({},t)}),{})(jt)},7592:function(t,o,e){"use strict";e.d(o,{a:function(){return i}});var r=e(885),n=e(2791),i=function(t){var o=n.useState(!1),e=(0,r.Z)(o,2),i=e[0],a=e[1],l=n.useCallback((function(t){t.matches?a(!0):a(!1)}),[]);return n.useEffect((function(){var o=window.matchMedia("(max-width: ".concat(t,"px)"));return o.addListener(l),o.matches&&a(!0),function(){return o.removeListener(l)}}),[l,t]),i}},5696:function(){}}]);
//# sourceMappingURL=682.e9219545.chunk.js.map