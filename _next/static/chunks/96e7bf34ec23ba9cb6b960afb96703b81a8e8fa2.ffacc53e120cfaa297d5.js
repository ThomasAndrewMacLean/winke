(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+/fp":function(e,t){e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(s.default.useContext(i.AmpStateContext))};var r,s=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,i=e.hasQuery;return n||s&&(void 0!==i&&i)}},"4MG8":function(e,t,n){const r=n("T9Ld"),s=n("66f7"),i=n("SbYC"),l=n("+/fp"),o=n("hyX7"),a=n("J7Ao"),{merge:c,checkSanitizeDeprecation:u,escape:h}=n("rUJ1"),{getDefaults:p,changeDefaults:f,defaults:d}=n("vbtb");function g(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),t=c({},g.defaults,t||{}),u(t);const l=t.highlight;let o,a,h=0;try{o=r.lex(e,t)}catch(i){return n(i)}a=o.length;const p=function(e){if(e)return t.highlight=l,n(e);let r;try{r=s.parse(o,t)}catch(i){e=i}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return p();if(delete t.highlight,!a)return p();for(;h<o.length;h++)!function(e){"code"!==e.type?--a||p():l(e.text,e.lang,(function(t,n){return t?p(t):null==n||n===e.text?--a||p():(e.text=n,e.escaped=!0,void(--a||p()))}))}(o[h])}else try{return t=c({},g.defaults,t||{}),u(t),s.parse(r.lex(e,t),t)}catch(i){if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||g.defaults).silent)return"<p>An error occurred:</p><pre>"+h(i.message+"",!0)+"</pre>";throw i}}g.options=g.setOptions=function(e){return c(g.defaults,e),f(g.defaults),g},g.getDefaults=p,g.defaults=d,g.Parser=s,g.parser=s.parse,g.Renderer=i,g.TextRenderer=l,g.Lexer=r,g.lexer=r.lex,g.InlineLexer=o,g.inlineLexer=o.output,g.Slugger=a,g.parse=g,e.exports=g},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"66f7":function(e,t,n){const r=n("SbYC"),s=n("J7Ao"),i=n("hyX7"),l=n("+/fp"),{defaults:o}=n("vbtb"),{merge:a,unescape:c}=n("rUJ1");e.exports=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||o,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new s}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,a({},this.options,{renderer:new l})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,r=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,r,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=a(n("q1tI")),s=a(n("Xuae")),i=n("lwAK"),l=n("FYa8"),o=n("/0+H");function a(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var i=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var l=s.key.slice(s.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var o=0,a=h.length;o<a;o++){var c=h[o];if(s.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var u=s.props[c],p=r[c]||new Set;p.has(u)?i=!1:(p.add(u),r[c]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var f=(0,s.default)();function d(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,o.isInAmpMode)(e)},t)}))})))}d.rewind=f.rewind;var g=d;t.default=g},J7Ao:function(e,t){e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},SbYC:function(e,t,n){const{defaults:r}=n("vbtb"),{cleanUrl:s,escape:i}=n("rUJ1");e.exports=class{constructor(e){this.options=e||r}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+i(r,!0)+'">'+(n?e:i(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=s(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+i(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=s(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}},T9Ld:function(e,t,n){const{defaults:r}=n("vbtb"),{block:s}=n("e56X"),{rtrim:i,splitCells:l,escape:o}=n("rUJ1");e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.rules=s.normal,this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.rules=s.gfm)}static get rules(){return s}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,r,a,c,u,h,p,f,d,g,m,b,k,x,y,v;for(e=e.replace(/^ +$/gm,"");e;)if((a=this.rules.newline.exec(e))&&(e=e.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(a[0].length),t&&"paragraph"===t.type?t.text+="\n"+a[0].trimRight():(a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?a:i(a,"\n")}))}else if(a=this.rules.fences.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"code",lang:a[2]?a[2].trim():a[2],text:a[3]||""});else if(a=this.rules.heading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]});else if((a=this.rules.nptable.exec(e))&&(h={type:"table",header:l(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]},h.header.length===h.align.length)){for(e=e.substring(a[0].length),m=0;m<h.align.length;m++)/^ *-+: *$/.test(h.align[m])?h.align[m]="right":/^ *:-+: *$/.test(h.align[m])?h.align[m]="center":/^ *:-+ *$/.test(h.align[m])?h.align[m]="left":h.align[m]=null;for(m=0;m<h.cells.length;m++)h.cells[m]=l(h.cells[m],h.header.length);this.tokens.push(h)}else if(a=this.rules.hr.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"hr"});else if(a=this.rules.blockquote.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,t),this.tokens.push({type:"blockquote_end"});else if(a=this.rules.list.exec(e)){for(e=e.substring(a[0].length),c=a[2],x=c.length>1,p={type:"list_start",ordered:x,start:x?+c:"",loose:!1},this.tokens.push(p),a=a[0].match(this.rules.item),f=[],n=!1,k=a.length,m=0;m<k;m++)h=a[m],g=h.length,h=h.replace(/^ *([*+-]|\d+\.) */,""),~h.indexOf("\n ")&&(g-=h.length,h=this.options.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+g+"}","gm"),"")),m!==k-1&&(u=s.bullet.exec(a[m+1])[0],(c.length>1?1===u.length:u.length>1||this.options.smartLists&&u!==c)&&(e=a.slice(m+1).join("\n")+e,m=k-1)),r=n||/\n\n(?!\s*$)/.test(h),m!==k-1&&(n="\n"===h.charAt(h.length-1),r||(r=n)),r&&(p.loose=!0),y=/^\[[ xX]\] /.test(h),v=void 0,y&&(v=" "!==h[1],h=h.replace(/^\[[ xX]\] +/,"")),d={type:"list_item_start",task:y,checked:v,loose:r},f.push(d),this.tokens.push(d),this.token(h,!1),this.tokens.push({type:"list_item_end"});if(p.loose)for(k=f.length,m=0;m<k;m++)f[m].loose=!0;this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(e))e=e.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]});else if(t&&(a=this.rules.def.exec(e)))e=e.substring(a[0].length),a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),b=a[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[b]||(this.tokens.links[b]={href:a[2],title:a[3]});else if((a=this.rules.table.exec(e))&&(h={type:"table",header:l(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]},h.header.length===h.align.length)){for(e=e.substring(a[0].length),m=0;m<h.align.length;m++)/^ *-+: *$/.test(h.align[m])?h.align[m]="right":/^ *:-+: *$/.test(h.align[m])?h.align[m]="center":/^ *:-+ *$/.test(h.align[m])?h.align[m]="left":h.align[m]=null;for(m=0;m<h.cells.length;m++)h.cells[m]=l(h.cells[m].replace(/^ *\| *| *\| *$/g,""),h.header.length);this.tokens.push(h)}else if(a=this.rules.lheading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2].charAt(0)?1:2,text:a[1]});else if(t&&(a=this.rules.paragraph.exec(e)))e=e.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]});else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"text",text:a[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),s=n("qXWd"),i=n("i2R6"),l=n("48fX"),o=n("tCBg"),a=n("T0f4"),c=n("mPvQ");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}t.__esModule=!0,t.default=void 0;var h=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){l(d,c);var h,f=(h=d,function(){var e,t=a(h);if(u()){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function d(e){var i;return r(this,d),i=f.call(this,e),p&&(t.add(s(i)),n(s(i))),i}return i(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(h.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),s=n("i2R6"),i=n("48fX"),l=n("tCBg"),o=n("T0f4");function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var h,p=u(n("q1tI")),f=n("QmWs"),d=n("g/15"),g=c(n("nOHt")),m=n("elyg");function b(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var k=new Map,x=window.IntersectionObserver,y={};function v(){return h||(x?h=new x((function(e){e.forEach((function(e){if(k.has(e.target)){var t=k.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(h.unobserve(e.target),k.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){i(u,e);var t,c=(t=u,function(){var e,n=o(t);if(a()){var r=o(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function u(e){var t;return r(this,u),(t=c.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(s,i){if(r&&s===t&&i===n)return r;var l=e(s,i);return t=s,n=i,r=l,l}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,s=n.target;if("A"!==r||!(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),l=i.href,o=i.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var a=window.location.pathname;l=(0,f.resolve)(a,l),o=o?(0,f.resolve)(a,o):l,e.preventDefault();var c=t.props.scroll;null==c&&(c=o.indexOf("#")<0),g.default[t.props.replace?"replace":"push"](l,o,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return s(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,s=(0,f.resolve)(e,n);return[s,r?(0,f.resolve)(e,r):s]}},{key:"handleRef",value:function(e){var t=this;this.p&&x&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=v();return n?(n.observe(e),k.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}k.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),s=r.href,i=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var l=p.Children.only(t),o={ref:function(t){e.handleRef(t),l&&"object"===typeof l&&l.ref&&("function"===typeof l.ref?l.ref(t):"object"===typeof l.ref&&(l.ref.current=t))},onMouseEnter:function(t){l.props&&"function"===typeof l.props.onMouseEnter&&l.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=i||s);var a=n("P5f7").rewriteUrlForNextExport;return o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=a(o.href)),p.default.cloneElement(l,o)}}]),u}(p.Component);t.default=_},"e+cM":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return $}));var r=n("q1tI"),s=n.n(r),i=n("4MG8"),l=n.n(i),o=n("kGD9"),a=s.a.createElement,c=function(e){var t=e.translationKey,n=Object(r.useState)(!1),s=n[0],i=n[1];Object(r.useEffect)((function(){document.location.search.includes("showKeys")&&i(!0)}),[]);var c=(Object(r.useContext)(o.b)||[]).find((function(e){return e.id===t}));return a("span",{className:s?"showKeys":"",dangerouslySetInnerHTML:{__html:l()(c&&!s?c.NL:t)}})},u=n("vOnD"),h=n("YFqc"),p=n.n(h);const f="undefined"===typeof window?r.useEffect:r.useLayoutEffect;var d,g,m=function(e){let t,n=new Set;const s=e=>{const r="function"===typeof e?e(t):e;r!==t&&(t=Object.assign({},t,r),n.forEach(e=>e()))},i=()=>t,l=(e,n=i,r=Object.is)=>({currentSlice:n(t),equalityFn:r,errored:!1,listener:e,selector:n,unsubscribe:()=>{}}),o=e=>{function r(){try{const n=e.selector(t);e.equalityFn(e.currentSlice,n)||e.listener(e.currentSlice=n)}catch(n){e.errored=!0,e.listener(null,n)}}return n.add(r),()=>{n.delete(r)}},a={setState:s,getState:i,subscribe:(e,t,n)=>o(l(e,t,n)),destroy:()=>n.clear()};return t=e(s,i,a),[(e=i,n=Object.is)=>{const s=Object(r.useReducer)(e=>e+1,0)[1],a=Object(r.useRef)();a.current||(a.current=l(s,e,n),a.current.unsubscribe=o(a.current));const c=a.current;let u,h=!1;return(c.selector!==e||c.equalityFn!==n||c.errored)&&(u=e(t),h=!n(c.currentSlice,u)),f(()=>{h&&(c.currentSlice=u),c.selector=e,c.equalityFn=n,c.errored=!1}),f(()=>c.unsubscribe,[]),h?u:c.currentSlice},a]}((function(e,t){return{count:0,countPlusOne:function(){var n=t().count;return e((function(){return{count:n+1}}))},currentNavLink:"/",setCurrentNavLink:function(t){return e((function(){return{currentNavLink:t}}))}}})),b=(g=1,function(e){if(Array.isArray(e))return e}(d=m)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,s=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(a){s=!0,i=a}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}return n}}(d,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}())[0],k=s.a.createElement,x=u.b.nav.withConfig({displayName:"Menu__Nav",componentId:"sc-6hdnj9-0"})(["width:",";height:100vh;padding-top:30vh;position:fixed;ul{list-style:none;}"],(function(e){return e.theme.menuWidth})),y=u.b.li.withConfig({displayName:"Menu__NavLink",componentId:"sc-6hdnj9-1"})(["text-align:right;font-size:14px;cursor:pointer;transition:padding-left 500ms ease-in-out;padding-left:",";color:",";a{text-decoration:none;color:",";&:hover{color:",";}}"],(function(e){return e.activeLink&&"100%"}),(function(e){return e.activeLink?"#444":"var(--light)"}),(function(e){return e.activeLink?"#444":"var(--light)"}),(function(e){return e.activeLink?"#444":" #666"})),v=function(){var e=b(),t=e.currentNavLink,n=e.setCurrentNavLink;return k(x,null,k("ul",null,k(y,{onClick:function(){return n("/about")},activeLink:"/about"===t},k(p.a,{href:"/about"},k("a",null,"About"))),k(y,{onClick:function(){return n("/work")},activeLink:"/work"===t},k(p.a,{href:"/work"},k("a",null,"Work"))),k(y,{onClick:function(){return n("/expo")},activeLink:"/expo"===t},k(p.a,{href:"/expo"},k("a",null,"Expo"))),k(y,{onClick:function(){return n("/contact")},activeLink:"/contact"===t},k(p.a,{href:"/contact"},k("a",null,"Contact")))))},_=s.a.createElement,w=u.b.main.withConfig({displayName:"Layout__Main",componentId:"zop69z-0"})(["width:",";margin-left:",";padding:5rem 8rem;"],(function(e){return"calc(100vw -  ".concat(e.theme.menuWidth,")")}),(function(e){return e.theme.menuWidth})),S=u.b.div.withConfig({displayName:"Layout__Title",componentId:"zop69z-1"})(["position:fixed;right:0;top:0;h1{font-weight:100;}"]),A=u.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"zop69z-2"})(["display:flex;"]),$=function(e){var t=e.children;return _(A,null,_("header",null,_(v,null),_(S,null,_(c,{translationKey:"title"}))),_(w,null,t))}},e56X:function(e,t,n){const{noopTest:r,edit:s,merge:i}=n("rUJ1"),l={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:r,table:r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};l.def=s(l.def).replace("label",l._label).replace("title",l._title).getRegex(),l.bullet=/(?:[*+-]|\d{1,9}\.)/,l.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,l.item=s(l.item,"gm").replace(/bull/g,l.bullet).getRegex(),l.list=s(l.list).replace(/bull/g,l.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+l.def.source+")").getRegex(),l._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l._comment=/<!--(?!-?>)[\s\S]*?-->/,l.html=s(l.html,"i").replace("comment",l._comment).replace("tag",l._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),l.paragraph=s(l._paragraph).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.blockquote=s(l.blockquote).replace("paragraph",l.paragraph).getRegex(),l.normal=i({},l),l.gfm=i({},l.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),l.gfm.nptable=s(l.gfm.nptable).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.gfm.table=s(l.gfm.table).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.pedantic=i({},l.normal,{html:s("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",l._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:r,paragraph:s(l.normal._paragraph).replace("hr",l.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",l.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:r,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};o.em=s(o.em).replace(/punctuation/g,o._punctuation).getRegex(),o._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,o.autolink=s(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex(),o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,o.tag=s(o.tag).replace("comment",l._comment).replace("attribute",o._attribute).getRegex(),o._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,o._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,o.link=s(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex(),o.reflink=s(o.reflink).replace("label",o._label).getRegex(),o.normal=i({},o),o.pedantic=i({},o.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:s(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:s(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()}),o.gfm=i({},o.normal,{escape:s(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),o.gfm.url=s(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex(),o.breaks=i({},o.gfm,{br:s(o.br).replace("{2,}","*").getRegex(),text:s(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:l,inline:o}},hyX7:function(e,t,n){const r=n("SbYC"),{defaults:s}=n("vbtb"),{inline:i}=n("e56X"),{findClosingBracket:l,escape:o}=n("rUJ1");e.exports=class e{constructor(e,t){if(this.options=t||s,this.links=e,this.rules=i.normal,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.options.breaks?this.rules=i.breaks:this.rules=i.gfm)}static get rules(){return i}static output(t,n,r){return new e(n,r).output(t)}output(t){let n,r,s,i,a,c,u="";for(;t;)if(a=this.rules.escape.exec(t))t=t.substring(a[0].length),u+=o(a[1]);else if(a=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),t=t.substring(a[0].length),u+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]);else if(a=this.rules.link.exec(t)){const r=l(a[2],"()");if(r>-1){const e=(0===a[0].indexOf("!")?5:4)+a[1].length+r;a[2]=a[2].substring(0,r),a[0]=a[0].substring(0,e).trim(),a[3]=""}t=t.substring(a[0].length),this.inLink=!0,s=a[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),n?(s=n[1],i=n[3]):i=""):i=a[3]?a[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),u+=this.outputLink(a,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((a=this.rules.reflink.exec(t))||(a=this.rules.nolink.exec(t))){if(t=t.substring(a[0].length),n=(a[2]||a[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){u+=a[0].charAt(0),t=a[0].substring(1)+t;continue}this.inLink=!0,u+=this.outputLink(a,n),this.inLink=!1}else if(a=this.rules.strong.exec(t))t=t.substring(a[0].length),u+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(t))t=t.substring(a[0].length),u+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(t))t=t.substring(a[0].length),u+=this.renderer.codespan(o(a[2].trim(),!0));else if(a=this.rules.br.exec(t))t=t.substring(a[0].length),u+=this.renderer.br();else if(a=this.rules.del.exec(t))t=t.substring(a[0].length),u+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(t))t=t.substring(a[0].length),"@"===a[2]?(r=o(this.mangle(a[1])),s="mailto:"+r):(r=o(a[1]),s=r),u+=this.renderer.link(s,null,r);else if(this.inLink||!(a=this.rules.url.exec(t))){if(a=this.rules.text.exec(t))t=t.substring(a[0].length),this.inRawBlock?u+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]):u+=this.renderer.text(o(this.smartypants(a[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===a[2])r=o(a[0]),s="mailto:"+r;else{do{c=a[0],a[0]=this.rules._backpedal.exec(a[0])[0]}while(c!==a[0]);r=o(a[0]),s="www."===a[1]?"http://"+r:r}t=t.substring(a[0].length),u+=this.renderer.link(s,null,r)}return u}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,r=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,o(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,r="",s=0;for(;s<t;s++)n=e.charCodeAt(s),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kGD9:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n("q1tI"),s=Object(r.createContext)([]),i=Object(r.createContext)([])},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=s},mPvQ:function(e,t,n){var r=n("5fIB"),s=n("rlHP"),i=n("KckH"),l=n("kG2m");e.exports=function(e){return r(e)||s(e)||i(e)||l()}},rUJ1:function(e,t){const n=/[&<>"']/,r=/[&<>"']/g,s=/[<>"']|&(?!#?\w+;)/,i=/[<>"']|&(?!#?\w+;)/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},o=e=>l[e];const a=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(a,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const u=/(^|[^\[])\^/g;const h=/[^\w:]/g,p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const f={},d=/^[^:]+:\/*[^/]*$/,g=/^([^:]+:)[\s\S]*$/,m=/^([^:]+:\/*[^/]*)[\s\S]*$/;function b(e,t){f[" "+e]||(d.test(e)?f[" "+e]=e+"/":f[" "+e]=k(e,"/",!0));const n=-1===(e=f[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(g,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(m,"$1")+t:e+t}function k(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}e.exports={escape:function(e,t){if(t){if(n.test(e))return e.replace(r,o)}else if(s.test(e))return e.replace(i,o);return e},unescape:c,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(u,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(c(n)).replace(h,"").toLowerCase()}catch(r){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!p.test(n)&&(n=b(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n},resolveUrl:b,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:k,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vbtb:function(e,t){function n(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:n,changeDefaults:function(t){e.exports.defaults=t}}}}]);