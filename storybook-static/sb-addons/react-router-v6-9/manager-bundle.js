try{
var r=__REACT__,{Children:Q,Component:ft,Fragment:ee,Profiler:Lt,PureComponent:St,StrictMode:bt,Suspense:yt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:It,cloneElement:gt,createContext:h,createElement:Dt,createFactory:ht,createRef:vt,forwardRef:Bt,isValidElement:Mt,lazy:Pt,memo:g,useCallback:f,useContext:v,useDebugValue:xt,useEffect:te,useImperativeHandle:Ut,useLayoutEffect:re,useMemo:oe,useReducer:Ht,useRef:ne,useState:C,version:wt}=__REACT__;var jt=__STORYBOOKAPI__,{ActiveTabs:Yt,Consumer:Wt,ManagerContext:Jt,Provider:$t,addons:w,combineParameters:Kt,controlOrMetaKey:Xt,controlOrMetaSymbol:Zt,eventMatchesShortcut:zt,eventToShortcut:qt,isMacLike:Qt,isShortcutTaken:er,keyToSymbol:tr,merge:rr,mockChannel:or,optionOrAltSymbol:nr,shortcutMatchesShortcut:ar,shortcutToHumanString:lr,types:ae,useAddonState:sr,useArgTypes:cr,useArgs:Er,useChannel:le,useGlobalTypes:ir,useGlobals:_r,useParameter:Or,useSharedState:Tr,useStoryPrepared:ur,useStorybookApi:pr,useStorybookState:Rr}=__STORYBOOKAPI__;var Cr=__STORYBOOKCOMPONENTS__,{A:fr,ActionBar:se,AddonPanel:ce,Badge:Lr,Bar:Sr,Blockquote:br,Button:yr,Code:Ir,DL:gr,Div:Dr,DocumentWrapper:hr,ErrorFormatter:vr,FlexBar:Br,Form:Mr,H1:Pr,H2:xr,H3:Ur,H4:Hr,H5:wr,H6:Vr,HR:kr,IconButton:Gr,IconButtonSkeleton:Fr,Icons:jr,Img:Yr,LI:Wr,Link:Jr,ListItem:$r,Loader:Kr,OL:Xr,P:Zr,Placeholder:zr,Pre:qr,ResetWrapper:Qr,ScrollArea:Ee,Separator:eo,Spaced:to,Span:ro,StorybookIcon:oo,StorybookLogo:no,Symbols:ao,SyntaxHighlighter:lo,TT:so,TabBar:co,TabButton:Eo,TabWrapper:io,Table:_o,Tabs:Oo,TabsState:To,TooltipLinkList:uo,TooltipMessage:po,TooltipNote:Ro,UL:mo,WithTooltip:Ao,WithTooltipPure:No,Zoom:Co,codeCommon:fo,components:Lo,createCopyToClipboardFunction:So,getStoryHref:bo,icons:yo,interleaveSeparators:Io,nameSpaceClassNames:go,resetComponents:Do,withReset:ho}=__STORYBOOKCOMPONENTS__;var xo=__STORYBOOKTHEMING__,{CacheProvider:Uo,ClassNames:Ho,Global:wo,ThemeProvider:Vo,background:ko,color:Go,convert:Fo,create:jo,createCache:Yo,createGlobal:Wo,createReset:Jo,css:$o,darken:Ko,ensure:Xo,ignoreSsrWarning:Zo,isPropValid:zo,jsx:qo,keyframes:Qo,lighten:en,styled:B,themes:tn,typography:rn,useTheme:on,withTheme:ie}=__STORYBOOKTHEMING__;var Ie=Object.create,j=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyNames,De=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty,Y=(e,t)=>function(){return t||(0,e[pe(e)[0]])((t={exports:{}}).exports,t),t.exports},ve=(e,t)=>{for(var n in t)j(e,n,{get:t[n],enumerable:!0})},Be=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of pe(t))!he.call(e,l)&&l!==n&&j(e,l,{get:()=>t[l],enumerable:!(o=ge(t,l))||o.enumerable});return e},Me=(e,t,n)=>(n=e!=null?Ie(De(e)):{},Be(t||!e||!e.__esModule?j(n,"default",{value:e,enumerable:!0}):n,e)),Pe=Y({"node_modules/is-object/index.js"(e,t){"use strict";t.exports=function(o){return typeof o=="object"&&o!==null}}}),xe=Y({"node_modules/is-window/index.js"(e,t){"use strict";t.exports=function(n){if(n==null)return!1;var o=Object(n);return o===o.window}}}),Ue=Y({"node_modules/is-dom/index.js"(e,t){var n=Pe(),o=xe();function l(a){return!n(a)||!o(window)||typeof window.Node!="function"?!1:typeof a.nodeType=="number"&&typeof a.nodeName=="string"}t.exports=l}}),x={};ve(x,{chromeDark:()=>He,chromeLight:()=>we});var He={BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"11px",BASE_LINE_HEIGHT:1.2,BASE_BACKGROUND_COLOR:"rgb(36, 36, 36)",BASE_COLOR:"rgb(213, 213, 213)",OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES:10,OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES:5,OBJECT_NAME_COLOR:"rgb(227, 110, 236)",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_STRING_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_SYMBOL_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_PREFIX_COLOR:"rgb(85, 106, 242)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:12,ARROW_ANIMATION_DURATION:"0",TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"11px",TREENODE_LINE_HEIGHT:1.2,TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"},we={BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"11px",BASE_LINE_HEIGHT:1.2,BASE_BACKGROUND_COLOR:"white",BASE_COLOR:"black",OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES:10,OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES:5,OBJECT_NAME_COLOR:"rgb(136, 19, 145)",OBJECT_VALUE_NULL_COLOR:"rgb(128, 128, 128)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(128, 128, 128)",OBJECT_VALUE_REGEXP_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_STRING_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_SYMBOL_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_NUMBER_COLOR:"rgb(28, 0, 207)",OBJECT_VALUE_BOOLEAN_COLOR:"rgb(28, 0, 207)",OBJECT_VALUE_FUNCTION_PREFIX_COLOR:"rgb(13, 34, 170)",HTML_TAG_COLOR:"rgb(168, 148, 166)",HTML_TAGNAME_COLOR:"rgb(136, 18, 128)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(153, 69, 0)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(26, 26, 166)",HTML_COMMENT_COLOR:"rgb(35, 110, 37)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"#6e6e6e",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:12,ARROW_ANIMATION_DURATION:"0",TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"11px",TREENODE_LINE_HEIGHT:1.2,TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"#aaa",TABLE_TH_BACKGROUND_COLOR:"#eee",TABLE_TH_HOVER_COLOR:"hsla(0, 0%, 90%, 1)",TABLE_SORT_ICON_COLOR:"#6e6e6e",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"},Re=h([{},()=>{}]),V={WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",OUserSelect:"none",userSelect:"none"},M=e=>({DOMNodePreview:{htmlOpenTag:{base:{color:e.HTML_TAG_COLOR},tagName:{color:e.HTML_TAGNAME_COLOR,textTransform:e.HTML_TAGNAME_TEXT_TRANSFORM},htmlAttributeName:{color:e.HTML_ATTRIBUTE_NAME_COLOR},htmlAttributeValue:{color:e.HTML_ATTRIBUTE_VALUE_COLOR}},htmlCloseTag:{base:{color:e.HTML_TAG_COLOR},offsetLeft:{marginLeft:-e.TREENODE_PADDING_LEFT},tagName:{color:e.HTML_TAGNAME_COLOR,textTransform:e.HTML_TAGNAME_TEXT_TRANSFORM}},htmlComment:{color:e.HTML_COMMENT_COLOR},htmlDoctype:{color:e.HTML_DOCTYPE_COLOR}},ObjectPreview:{objectDescription:{fontStyle:"italic"},preview:{fontStyle:"italic"},arrayMaxProperties:e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,objectMaxProperties:e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES},ObjectName:{base:{color:e.OBJECT_NAME_COLOR},dimmed:{opacity:.6}},ObjectValue:{objectValueNull:{color:e.OBJECT_VALUE_NULL_COLOR},objectValueUndefined:{color:e.OBJECT_VALUE_UNDEFINED_COLOR},objectValueRegExp:{color:e.OBJECT_VALUE_REGEXP_COLOR},objectValueString:{color:e.OBJECT_VALUE_STRING_COLOR},objectValueSymbol:{color:e.OBJECT_VALUE_SYMBOL_COLOR},objectValueNumber:{color:e.OBJECT_VALUE_NUMBER_COLOR},objectValueBoolean:{color:e.OBJECT_VALUE_BOOLEAN_COLOR},objectValueFunctionPrefix:{color:e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,fontStyle:"italic"},objectValueFunctionName:{fontStyle:"italic"}},TreeView:{treeViewOutline:{padding:0,margin:0,listStyleType:"none"}},TreeNode:{treeNodeBase:{color:e.BASE_COLOR,backgroundColor:e.BASE_BACKGROUND_COLOR,lineHeight:e.TREENODE_LINE_HEIGHT,cursor:"default",boxSizing:"border-box",listStyle:"none",fontFamily:e.TREENODE_FONT_FAMILY,fontSize:e.TREENODE_FONT_SIZE},treeNodePreviewContainer:{},treeNodePlaceholder:{whiteSpace:"pre",fontSize:e.ARROW_FONT_SIZE,marginRight:e.ARROW_MARGIN_RIGHT,...V},treeNodeArrow:{base:{color:e.ARROW_COLOR,display:"inline-block",fontSize:e.ARROW_FONT_SIZE,marginRight:e.ARROW_MARGIN_RIGHT,...parseFloat(e.ARROW_ANIMATION_DURATION)>0?{transition:`transform ${e.ARROW_ANIMATION_DURATION} ease 0s`}:{},...V},expanded:{WebkitTransform:"rotateZ(90deg)",MozTransform:"rotateZ(90deg)",transform:"rotateZ(90deg)"},collapsed:{WebkitTransform:"rotateZ(0deg)",MozTransform:"rotateZ(0deg)",transform:"rotateZ(0deg)"}},treeNodeChildNodesContainer:{margin:0,paddingLeft:e.TREENODE_PADDING_LEFT}},TableInspector:{base:{color:e.BASE_COLOR,position:"relative",border:`1px solid ${e.TABLE_BORDER_COLOR}`,fontFamily:e.BASE_FONT_FAMILY,fontSize:e.BASE_FONT_SIZE,lineHeight:"120%",boxSizing:"border-box",cursor:"default"}},TableInspectorHeaderContainer:{base:{top:0,height:"17px",left:0,right:0,overflowX:"hidden"},table:{tableLayout:"fixed",borderSpacing:0,borderCollapse:"separate",height:"100%",width:"100%",margin:0}},TableInspectorDataContainer:{tr:{display:"table-row"},td:{boxSizing:"border-box",border:"none",height:"16px",verticalAlign:"top",padding:"1px 4px",WebkitUserSelect:"text",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",lineHeight:"14px"},div:{position:"static",top:"17px",bottom:0,overflowY:"overlay",transform:"translateZ(0)",left:0,right:0,overflowX:"hidden"},table:{positon:"static",left:0,top:0,right:0,bottom:0,borderTop:"0 none transparent",margin:0,backgroundImage:e.TABLE_DATA_BACKGROUND_IMAGE,backgroundSize:e.TABLE_DATA_BACKGROUND_SIZE,tableLayout:"fixed",borderSpacing:0,borderCollapse:"separate",width:"100%",fontSize:e.BASE_FONT_SIZE,lineHeight:"120%"}},TableInspectorTH:{base:{position:"relative",height:"auto",textAlign:"left",backgroundColor:e.TABLE_TH_BACKGROUND_COLOR,borderBottom:`1px solid ${e.TABLE_BORDER_COLOR}`,fontWeight:"normal",verticalAlign:"middle",padding:"0 4px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",lineHeight:"14px",":hover":{backgroundColor:e.TABLE_TH_HOVER_COLOR}},div:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:e.BASE_FONT_SIZE,lineHeight:"120%"}},TableInspectorLeftBorder:{none:{borderLeft:"none"},solid:{borderLeft:`1px solid ${e.TABLE_BORDER_COLOR}`}},TableInspectorSortIcon:{display:"block",marginRight:3,width:8,height:7,marginTop:-7,color:e.TABLE_SORT_ICON_COLOR,fontSize:12,...V}}),k="chromeLight",de=h(M(x[k])),m=e=>v(de)[e],W=e=>({theme:n=k,...o})=>{let l=oe(()=>{switch(Object.prototype.toString.call(n)){case"[object String]":return M(x[n]);case"[object Object]":return M(n);default:return M(x[k])}},[n]);return r.createElement(de.Provider,{value:l},r.createElement(e,{...o}))},Ve=({expanded:e,styles:t})=>r.createElement("span",{style:{...t.base,...e?t.expanded:t.collapsed}},"\u25B6"),ke=g(e=>{e={expanded:!0,nodeRenderer:({name:O})=>r.createElement("span",null,O),onClick:()=>{},shouldShowArrow:!1,shouldShowPlaceholder:!0,...e};let{expanded:t,onClick:n,children:o,nodeRenderer:l,title:a,shouldShowArrow:s,shouldShowPlaceholder:c}=e,E=m("TreeNode"),_=l;return r.createElement("li",{"aria-expanded":t,role:"treeitem",style:E.treeNodeBase,title:a},r.createElement("div",{style:E.treeNodePreviewContainer,onClick:n},s||Q.count(o)>0?r.createElement(Ve,{expanded:t,styles:E.treeNodeArrow}):c&&r.createElement("span",{style:E.treeNodePlaceholder},"\xA0"),r.createElement(_,{...e})),r.createElement("ol",{role:"group",style:E.treeNodeChildNodesContainer},t?o:void 0))}),U="$",_e="*";function P(e,t){return!t(e).next().done}var Ge=e=>Array.from({length:e},(t,n)=>[U].concat(Array.from({length:n},()=>"*")).join(".")),Fe=(e,t,n,o,l)=>{let a=[].concat(Ge(o)).concat(n).filter(c=>typeof c=="string"),s=[];return a.forEach(c=>{let E=c.split("."),_=(O,R,d)=>{if(d===E.length){s.push(R);return}let A=E[d];if(d===0)P(O,t)&&(A===U||A===_e)&&_(O,U,d+1);else if(A===_e)for(let{name:T,data:u}of t(O))P(u,t)&&_(u,`${R}.${T}`,d+1);else{let T=O[A];P(T,t)&&_(T,`${R}.${A}`,d+1)}};_(e,"",0)}),s.reduce((c,E)=>(c[E]=!0,c),{...l})},me=g(e=>{let{data:t,dataIterator:n,path:o,depth:l,nodeRenderer:a}=e,[s,c]=v(Re),E=P(t,n),_=!!s[o],O=f(()=>E&&c(R=>({...R,[o]:!_})),[E,c,o,_]);return r.createElement(ke,{expanded:_,onClick:O,shouldShowArrow:E,shouldShowPlaceholder:l>0,nodeRenderer:a,...e},_?[...n(t)].map(({name:R,data:d,...A})=>r.createElement(me,{name:R,data:d,depth:l+1,path:`${o}.${R}`,key:R,dataIterator:n,nodeRenderer:a,...A})):null)}),Ae=g(({name:e,data:t,dataIterator:n,nodeRenderer:o,expandPaths:l,expandLevel:a})=>{let s=m("TreeView"),c=C({}),[,E]=c;return re(()=>E(_=>Fe(t,n,l,a,_)),[t,n,l,a]),r.createElement(Re.Provider,{value:c},r.createElement("ol",{role:"tree",style:s.treeViewOutline},r.createElement(me,{name:e,data:t,dataIterator:n,depth:0,path:U,nodeRenderer:o})))}),J=({name:e,dimmed:t=!1,styles:n={}})=>{let o=m("ObjectName"),l={...o.base,...t?o.dimmed:{},...n};return r.createElement("span",{style:l},e)},D=({object:e,styles:t})=>{let n=m("ObjectValue"),o=l=>({...n[l],...t});switch(typeof e){case"bigint":return r.createElement("span",{style:o("objectValueNumber")},String(e),"n");case"number":return r.createElement("span",{style:o("objectValueNumber")},String(e));case"string":return r.createElement("span",{style:o("objectValueString")},'"',e,'"');case"boolean":return r.createElement("span",{style:o("objectValueBoolean")},String(e));case"undefined":return r.createElement("span",{style:o("objectValueUndefined")},"undefined");case"object":return e===null?r.createElement("span",{style:o("objectValueNull")},"null"):e instanceof Date?r.createElement("span",null,e.toString()):e instanceof RegExp?r.createElement("span",{style:o("objectValueRegExp")},e.toString()):Array.isArray(e)?r.createElement("span",null,`Array(${e.length})`):e.constructor?typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)?r.createElement("span",null,`Buffer[${e.length}]`):r.createElement("span",null,e.constructor.name):r.createElement("span",null,"Object");case"function":return r.createElement("span",null,r.createElement("span",{style:o("objectValueFunctionPrefix")},"\u0192\xA0"),r.createElement("span",{style:o("objectValueFunctionName")},e.name,"()"));case"symbol":return r.createElement("span",{style:o("objectValueSymbol")},e.toString());default:return r.createElement("span",null)}},Ne=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;function G(e,t){let n=Object.getOwnPropertyDescriptor(e,t);if(n.get)try{return n.get()}catch{return n.get}return e[t]}function Oe(e,t){return e.length===0?[]:e.slice(1).reduce((n,o)=>n.concat([t,o]),[e[0]])}var F=({data:e})=>{let t=m("ObjectPreview"),n=e;if(typeof n!="object"||n===null||n instanceof Date||n instanceof RegExp)return r.createElement(D,{object:n});if(Array.isArray(n)){let o=t.arrayMaxProperties,l=n.slice(0,o).map((s,c)=>r.createElement(D,{key:c,object:s}));n.length>o&&l.push(r.createElement("span",{key:"ellipsis"},"\u2026"));let a=n.length;return r.createElement(r.Fragment,null,r.createElement("span",{style:t.objectDescription},a===0?"":`(${a})\xA0`),r.createElement("span",{style:t.preview},"[",Oe(l,", "),"]"))}else{let o=t.objectMaxProperties,l=[];for(let s in n)if(Ne.call(n,s)){let c;l.length===o-1&&Object.keys(n).length>o&&(c=r.createElement("span",{key:"ellipsis"},"\u2026"));let E=G(n,s);if(l.push(r.createElement("span",{key:s},r.createElement(J,{name:s||'""'}),":\xA0",r.createElement(D,{object:E}),c)),c)break}let a=n.constructor?n.constructor.name:"Object";return r.createElement(r.Fragment,null,r.createElement("span",{style:t.objectDescription},a==="Object"?"":`${a} `),r.createElement("span",{style:t.preview},"{",Oe(l,", "),"}"))}},Ye=({name:e,data:t})=>typeof e=="string"?r.createElement("span",null,r.createElement(J,{name:e}),r.createElement("span",null,": "),r.createElement(F,{data:t})):r.createElement(F,{data:t}),We=({name:e,data:t,isNonenumerable:n=!1})=>{let o=t;return r.createElement("span",null,typeof e=="string"?r.createElement(J,{name:e,dimmed:n}):r.createElement(F,{data:e}),r.createElement("span",null,": "),r.createElement(D,{object:o}))},Je=(e,t)=>function*(o){if(!(typeof o=="object"&&o!==null||typeof o=="function"))return;let a=Array.isArray(o);if(!a&&o[Symbol.iterator]){let s=0;for(let c of o){if(Array.isArray(c)&&c.length===2){let[E,_]=c;yield{name:E,data:_}}else yield{name:s.toString(),data:c};s++}}else{let s=Object.getOwnPropertyNames(o);t===!0&&!a?s.sort():typeof t=="function"&&s.sort(t);for(let c of s)if(je.call(o,c)){let E=G(o,c);yield{name:c||'""',data:E}}else if(e){let E;try{E=G(o,c)}catch{}E!==void 0&&(yield{name:c,data:E,isNonenumerable:!0})}e&&o!==Object.prototype&&(yield{name:"__proto__",data:Object.getPrototypeOf(o),isNonenumerable:!0})}},$e=({depth:e,name:t,data:n,isNonenumerable:o})=>e===0?r.createElement(Ye,{name:t,data:n}):r.createElement(We,{name:t,data:n,isNonenumerable:o}),Ke=({showNonenumerable:e=!1,sortObjectKeys:t,nodeRenderer:n,...o})=>{let l=Je(e,t),a=n||$e;return r.createElement(Ae,{nodeRenderer:a,dataIterator:l,...o})},Ce=W(Ke);function Xe(e){if(typeof e=="object"){let t=[];if(Array.isArray(e)){let o=e.length;t=[...Array(o).keys()]}else e!==null&&(t=Object.keys(e));let n=t.reduce((o,l)=>{let a=e[l];return typeof a=="object"&&a!==null&&Object.keys(a).reduce((c,E)=>(c.includes(E)||c.push(E),c),o),o},[]);return{rowHeaders:t,colHeaders:n}}}var Ze=({rows:e,columns:t,rowsData:n})=>{let o=m("TableInspectorDataContainer"),l=m("TableInspectorLeftBorder");return r.createElement("div",{style:o.div},r.createElement("table",{style:o.table},r.createElement("colgroup",null),r.createElement("tbody",null,e.map((a,s)=>r.createElement("tr",{key:a,style:o.tr},r.createElement("td",{style:{...o.td,...l.none}},a),t.map(c=>{let E=n[s];return typeof E=="object"&&E!==null&&Ne.call(E,c)?r.createElement("td",{key:c,style:{...o.td,...l.solid}},r.createElement(D,{object:E[c]})):r.createElement("td",{key:c,style:{...o.td,...l.solid}})}))))))},ze=e=>r.createElement("div",{style:{position:"absolute",top:1,right:0,bottom:1,display:"flex",alignItems:"center"}},e.children),qe=({sortAscending:e})=>{let t=m("TableInspectorSortIcon"),n=e?"\u25B2":"\u25BC";return r.createElement("div",{style:t},n)},Te=({sortAscending:e=!1,sorted:t=!1,onClick:n=void 0,borderStyle:o={},children:l,...a})=>{let s=m("TableInspectorTH"),[c,E]=C(!1),_=f(()=>E(!0),[]),O=f(()=>E(!1),[]);return r.createElement("th",{...a,style:{...s.base,...o,...c?s.base[":hover"]:{}},onMouseEnter:_,onMouseLeave:O,onClick:n},r.createElement("div",{style:s.div},l),t&&r.createElement(ze,null,r.createElement(qe,{sortAscending:e})))},Qe=({indexColumnText:e="(index)",columns:t=[],sorted:n,sortIndexColumn:o,sortColumn:l,sortAscending:a,onTHClick:s,onIndexTHClick:c})=>{let E=m("TableInspectorHeaderContainer"),_=m("TableInspectorLeftBorder");return r.createElement("div",{style:E.base},r.createElement("table",{style:E.table},r.createElement("tbody",null,r.createElement("tr",null,r.createElement(Te,{borderStyle:_.none,sorted:n&&o,sortAscending:a,onClick:c},e),t.map(O=>r.createElement(Te,{borderStyle:_.solid,key:O,sorted:n&&l===O,sortAscending:a,onClick:s.bind(null,O)},O))))))},et=({data:e,columns:t})=>{let n=m("TableInspector"),[{sorted:o,sortIndexColumn:l,sortColumn:a,sortAscending:s},c]=C({sorted:!1,sortIndexColumn:!1,sortColumn:void 0,sortAscending:!1}),E=f(()=>{c(({sortIndexColumn:T,sortAscending:u})=>({sorted:!0,sortIndexColumn:!0,sortColumn:void 0,sortAscending:T?!u:!0}))},[]),_=f(T=>{c(({sortColumn:u,sortAscending:p})=>({sorted:!0,sortIndexColumn:!1,sortColumn:T,sortAscending:T===u?!p:!0}))},[]);if(typeof e!="object"||e===null)return r.createElement("div",null);let{rowHeaders:O,colHeaders:R}=Xe(e);t!==void 0&&(R=t);let d=O.map(T=>e[T]),A;if(a!==void 0?A=d.map((T,u)=>typeof T=="object"&&T!==null?[T[a],u]:[void 0,u]):l&&(A=O.map((T,u)=>[O[u],u])),A!==void 0){let T=(p,Se)=>(be,ye)=>{let $=p(be),K=p(ye),X=typeof $,Z=typeof K,z=(I,q)=>I<q?-1:I>q?1:0,y;if(X===Z)y=z($,K);else{let I={string:0,number:1,object:2,symbol:3,boolean:4,undefined:5,function:6};y=z(I[X],I[Z])}return Se||(y=-y),y},u=A.sort(T(p=>p[0],s)).map(p=>p[1]);O=u.map(p=>O[p]),d=u.map(p=>d[p])}return r.createElement("div",{style:n.base},r.createElement(Qe,{columns:R,sorted:o,sortIndexColumn:l,sortColumn:a,sortAscending:s,onTHClick:_,onIndexTHClick:E}),r.createElement(Ze,{rows:O,columns:R,rowsData:d}))},Ln=W(et),tt=80,fe=e=>e.childNodes.length===0||e.childNodes.length===1&&e.childNodes[0].nodeType===Node.TEXT_NODE&&e.textContent.length<tt,rt=({tagName:e,attributes:t,styles:n})=>r.createElement("span",{style:n.base},"<",r.createElement("span",{style:n.tagName},e),(()=>{if(t){let o=[];for(let l=0;l<t.length;l++){let a=t[l];o.push(r.createElement("span",{key:l}," ",r.createElement("span",{style:n.htmlAttributeName},a.name),'="',r.createElement("span",{style:n.htmlAttributeValue},a.value),'"'))}return o}})(),">"),ue=({tagName:e,isChildNode:t=!1,styles:n})=>r.createElement("span",{style:Object.assign({},n.base,t&&n.offsetLeft)},"</",r.createElement("span",{style:n.tagName},e),">"),ot={1:"ELEMENT_NODE",3:"TEXT_NODE",7:"PROCESSING_INSTRUCTION_NODE",8:"COMMENT_NODE",9:"DOCUMENT_NODE",10:"DOCUMENT_TYPE_NODE",11:"DOCUMENT_FRAGMENT_NODE"},nt=({isCloseTag:e,data:t,expanded:n})=>{let o=m("DOMNodePreview");if(e)return r.createElement(ue,{styles:o.htmlCloseTag,isChildNode:!0,tagName:t.tagName});switch(t.nodeType){case Node.ELEMENT_NODE:return r.createElement("span",null,r.createElement(rt,{tagName:t.tagName,attributes:t.attributes,styles:o.htmlOpenTag}),fe(t)?t.textContent:!n&&"\u2026",!n&&r.createElement(ue,{tagName:t.tagName,styles:o.htmlCloseTag}));case Node.TEXT_NODE:return r.createElement("span",null,t.textContent);case Node.CDATA_SECTION_NODE:return r.createElement("span",null,"<![CDATA["+t.textContent+"]]>");case Node.COMMENT_NODE:return r.createElement("span",{style:o.htmlComment},"<!--",t.textContent,"-->");case Node.PROCESSING_INSTRUCTION_NODE:return r.createElement("span",null,t.nodeName);case Node.DOCUMENT_TYPE_NODE:return r.createElement("span",{style:o.htmlDoctype},"<!DOCTYPE ",t.name,t.publicId?` PUBLIC "${t.publicId}"`:"",!t.publicId&&t.systemId?" SYSTEM":"",t.systemId?` "${t.systemId}"`:"",">");case Node.DOCUMENT_NODE:return r.createElement("span",null,t.nodeName);case Node.DOCUMENT_FRAGMENT_NODE:return r.createElement("span",null,t.nodeName);default:return r.createElement("span",null,ot[t.nodeType])}},at=function*(e){if(e&&e.childNodes){if(fe(e))return;for(let n=0;n<e.childNodes.length;n++){let o=e.childNodes[n];o.nodeType===Node.TEXT_NODE&&o.textContent.trim().length===0||(yield{name:`${o.tagName}[${n}]`,data:o})}e.tagName&&(yield{name:"CLOSE_TAG",data:{tagName:e.tagName},isCloseTag:!0})}},lt=e=>r.createElement(Ae,{nodeRenderer:nt,dataIterator:at,...e}),yn=W(lt),In=Me(Ue());var Mn=__STORYBOOKCOREEVENTS__,{CHANNEL_CREATED:Pn,CONFIG_ERROR:xn,CURRENT_STORY_WAS_SET:Un,DOCS_PREPARED:Hn,DOCS_RENDERED:wn,FORCE_REMOUNT:Vn,FORCE_RE_RENDER:kn,GLOBALS_UPDATED:Gn,IGNORED_EXCEPTION:Fn,NAVIGATE_URL:jn,PLAY_FUNCTION_THREW_EXCEPTION:Yn,PRELOAD_ENTRIES:Wn,PREVIEW_BUILDER_PROGRESS:Jn,PREVIEW_KEYDOWN:$n,REGISTER_SUBSCRIPTION:Kn,RESET_STORY_ARGS:Xn,SELECT_STORY:Zn,SET_CONFIG:zn,SET_CURRENT_STORY:qn,SET_GLOBALS:Qn,SET_INDEX:ea,SET_STORIES:ta,SHARED_STATE_CHANGED:ra,SHARED_STATE_SET:oa,STORIES_COLLAPSE_ALL:na,STORIES_EXPAND_ALL:aa,STORY_ARGS_UPDATED:la,STORY_CHANGED:H,STORY_ERRORED:sa,STORY_INDEX_INVALIDATED:ca,STORY_MISSING:Ea,STORY_PREPARED:ia,STORY_RENDERED:_a,STORY_RENDER_PHASE_CHANGED:Oa,STORY_SPECIFIED:Ta,STORY_THREW_EXCEPTION:ua,STORY_UNCHANGED:pa,UPDATE_GLOBALS:Ra,UPDATE_QUERY_PARAMS:da,UPDATE_STORY_ARGS:ma}=__STORYBOOKCOREEVENTS__;var N="storybook/react-router-v6",st=`${N}/panel`,ct="reactRouter",i={CLEAR:`${N}/clear`,NAVIGATION:`${N}/navigation`,STORY_LOADED:`${N}/story-loaded`,ROUTE_MATCHES:`${N}/route-matches`,ACTION_INVOKED:`${N}/action_invoked`,ACTION_SETTLED:`${N}/action_settled`,LOADER_INVOKED:`${N}/loader_invoked`,LOADER_SETTLED:`${N}/loader_settled`},Et=B.div({display:"flex",padding:0,borderLeft:"5px solid transparent",borderBottom:"1px solid transparent",transition:"all 0.1s",alignItems:"flex-start",whiteSpace:"pre"}),it=ie(({theme:e,...t})=>r.createElement(Ce,{theme:e.addonActionsTheme||"chromeLight",...t})),_t=B.div({flex:1,padding:"0 0 0 5px"}),Ot=Ee,Tt=({navigationEvents:e,onClear:t})=>r.createElement(ee,null,r.createElement(Le,{title:"reactRouterLogger"},e.map(n=>r.createElement(Et,{key:n.key},r.createElement(_t,null,r.createElement(it,{name:ut[n.type],data:n.data,showNonenumerable:!1,sortObjectKeys:!1,expandPaths:["$.routeParams","$.searchParams","$.routeMatches.*","$.routeMatches.*.*","$.matches","$.matches.*","$.matches.*.*"]}))))),r.createElement(se,{actionItems:[{title:"Clear",onClick:t}]})),ut={[i.NAVIGATION]:"Navigate",[i.STORY_LOADED]:"Story rendered",[i.ROUTE_MATCHES]:"New route matches",[i.ACTION_INVOKED]:"Action invoked",[i.ACTION_SETTLED]:"Action settled",[i.LOADER_INVOKED]:"Loader invoked",[i.LOADER_SETTLED]:"Loader settled"},Le=B(({children:e,title:t})=>r.createElement(Ot,{horizontal:!0,vertical:!0,title:t},e))({margin:0,padding:"10px 5px 20px"});Le.displayName="Wrapper";var pt=e=>{let t=ne(0),[n,o]=C([]);le({[i.ROUTE_MATCHES]:a=>{o(s=>[...s,{...a,key:t.current++}])},[i.NAVIGATION]:a=>{o(s=>[...s,{...a,key:t.current++}])},[i.STORY_LOADED]:a=>{o(s=>[...s,{...a,key:t.current++}])},[i.ACTION_INVOKED]:a=>{o(s=>[...s,{...a,key:t.current++}])},[i.ACTION_SETTLED]:a=>{o(s=>[...s,{...a,key:t.current++}])},[i.LOADER_INVOKED]:a=>{o(s=>[...s,{...a,key:t.current++}])},[i.LOADER_SETTLED]:a=>{o(s=>[...s,{...a,key:t.current++}])},[H]:()=>{o([])}});let l=()=>{e.api.emit(i.CLEAR),o([])};return r.createElement(ce,{...e},r.createElement(Tt,{navigationEvents:n,onClear:l}))};w.register(N,e=>{w.add(st,{type:ae.PANEL,paramKey:ct,title:()=>{let[t,n]=C(0),o=()=>n(a=>a+1),l=()=>n(0);return te(()=>(e.on(H,l),e.on(i.ROUTE_MATCHES,o),e.on(i.NAVIGATION,o),e.on(i.ACTION_INVOKED,o),e.on(i.ACTION_SETTLED,o),e.on(i.LOADER_INVOKED,o),e.on(i.LOADER_SETTLED,o),e.on(i.CLEAR,l),()=>{e.off(H,l),e.off(i.ROUTE_MATCHES,o),e.off(i.NAVIGATION,o),e.off(i.ACTION_INVOKED,o),e.off(i.ACTION_SETTLED,o),e.off(i.LOADER_INVOKED,o),e.off(i.LOADER_SETTLED,o),e.off(i.CLEAR,l)})),`React Router${t===0?"":` (${t})`}`},match:({viewMode:t})=>t==="story",render:({active:t,key:n})=>r.createElement(pt,{active:t||!1,key:n,api:e})})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map