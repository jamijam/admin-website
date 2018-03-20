module.exports=__NEXT_REGISTER_PAGE("/admin",function(){var e=webpackJsonp([3],{339:function(e,t,r){e.exports=r(340)},340:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var a=r.n(n);var o=r(172);var s=r.n(o);var i=r(177);var l=r(255);var c=r(143);var u=r.n(c);var p=r(6);var f=r.n(p);var d=r(80);var h=r(122);var b=r.n(h);function y(e){return e.type&&"Tab"===e.type.tabsRole}function m(e){return e.type&&"TabPanel"===e.type.tabsRole}function v(e){return e.type&&"TabList"===e.type.tabsRole}function T(){T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n))e[n]=r[n]}return e};return T.apply(this,arguments)}function g(e){if("function"===typeof Symbol&&"symbol"===typeof Symbol.iterator)g=function e(t){return typeof t};else g=function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return g(e)}function w(e){return y(e)||v(e)||m(e)}function C(e,t){return n["Children"].map(e,function(e){if(null===e)return null;if(w(e))return t(e);if(e.props&&e.props.children&&"object"===g(e.props.children))return Object(n["cloneElement"])(e,T({},e.props,{children:C(e.props.children,t)}));return e})}function k(e,t){return n["Children"].forEach(e,function(e){if(null===e)return;if(y(e)||m(e))t(e);else if(e.props&&e.props.children&&"object"===g(e.props.children)){if(v(e))t(e);k(e.props.children,t)}})}function O(e){if("function"===typeof Symbol&&"symbol"===typeof Symbol.iterator)O=function e(t){return typeof t};else O=function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return O(e)}function P(e,t,r){var n;var a=0;var o=0;var s=false;var i=[];var l=e[t];k(l,function(e){if(v(e)){if(e.props&&e.props.children&&"object"===O(e.props.children))k(e.props.children,function(e){return i.push(e)});if(s)n=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");s=true}if(y(e)){if(!s||-1===i.indexOf(e))n=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.");a++}else if(m(e))o++});if(!n&&a!==o)n=new Error("There should be an equal number of 'Tab' and 'TabPanel' in `"+r+"`."+"Received "+a+" 'Tab' and "+o+" 'TabPanel'.");return n}function E(e,t,r,n,a){var o=e[t];var s=a||t;var i=null;if(o&&"function"!==typeof o)i=new Error("Invalid "+n+" `"+s+"` of type `"+O(o)+"` supplied to `"+r+"`, expected `function`.");else if(null!=e.selectedIndex&&null==o)i=new Error("The "+n+" `"+s+"` is marked as required in `"+r+"`, but its value is `undefined` or `null`.\n`onSelect` is required when `selectedIndex` is also set. Not doing so will make the tabs not do anything, as `selectedIndex` indicates that you want to handle the selected tab yourself.\nIf you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.");return i}function x(e,t,r,n,a){var o=e[t];var s=a||t;var i=null;if(null!=o&&"number"!==typeof o)i=new Error("Invalid "+n+" `"+s+"` of type `"+O(o)+"` supplied to `"+r+"`, expected `number`.");else if(null!=e.defaultIndex&&null!=o)return new Error("The "+n+" `"+s+"` cannot be used together with `defaultIndex` in `"+r+"`.\nEither remove `"+s+"` to let `"+r+"` handle the selected tab internally or remove `defaultIndex` to handle it yourself.");return i}var j=r(96);var N=r.n(j);var I=0;function _(){return"react-tabs-"+I++}function S(){I=0}function A(e){var t=0;k(e,function(e){if(y(e))t++});return t}function R(e){var t=0;k(e,function(e){if(m(e))t++});return t}function H(){H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n))e[n]=r[n]}return e};return H.apply(this,arguments)}function D(e,t){if(null==e)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++){a=s[o];if(t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;r[a]=e[a]}}return r}function F(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}function M(e){return"getAttribute"in e&&"tab"===e.getAttribute("role")}function z(e){return"true"===e.getAttribute("aria-disabled")}var L;try{L=!!("undefined"!==typeof window&&window.document&&window.document.activeElement)}catch(e){L=false}var q=function(e){F(t,e);function t(){var t,r;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=r=e.call.apply(e,[this].concat(a))||this,r.tabNodes=[],r.handleKeyDown=function(e){if(r.isTabFromContainer(e.target)){var t=r.props.selectedIndex;var n=false;var a=false;if(32===e.keyCode||13===e.keyCode){n=true;a=false;r.handleClick(e)}if(37===e.keyCode||38===e.keyCode){t=r.getPrevTab(t);n=true;a=true}else if(39===e.keyCode||40===e.keyCode){t=r.getNextTab(t);n=true;a=true}if(n)e.preventDefault();if(a)r.setSelected(t,e)}},r.handleClick=function(e){var t=e.target;do{if(r.isTabFromContainer(t)){if(z(t))return;var n=[].slice.call(t.parentNode.children).filter(M).indexOf(t);r.setSelected(n,e);return}}while(null!==(t=t.parentNode))},t)||r}var r=t.prototype;r.setSelected=function e(t,r){if(t<0||t>=this.getTabsCount())return;this.props.onSelect(t,this.props.selectedIndex,r)};r.getNextTab=function e(t){var r=this.getTabsCount();for(var n=t+1;n<r;n++)if(!z(this.getTab(n)))return n;for(var a=0;a<t;a++)if(!z(this.getTab(a)))return a;return t};r.getPrevTab=function e(t){var r=t;while(r--)if(!z(this.getTab(r)))return r;r=this.getTabsCount();while(r-- >t)if(!z(this.getTab(r)))return r;return t};r.getTabsCount=function e(){return A(this.props.children)};r.getPanelsCount=function e(){return R(this.props.children)};r.getTab=function e(t){return this.tabNodes["tabs-"+t]};r.getChildren=function e(){var t=this;var r=0;var o=this.props,s=o.children,i=o.disabledTabClassName,l=o.focus,c=o.forceRenderTabPanel,u=o.selectedIndex,p=o.selectedTabClassName,f=o.selectedTabPanelClassName;this.tabIds=this.tabIds||[];this.panelIds=this.panelIds||[];var d=this.tabIds.length-this.getTabsCount();while(d++<0){this.tabIds.push(_());this.panelIds.push(_())}return C(s,function(e){var o=e;if(v(e)){var s=0;var d=false;if(L)d=a.a.Children.toArray(e.props.children).filter(y).some(function(e,r){return document.activeElement===t.getTab(r)});o=Object(n["cloneElement"])(e,{children:C(e.props.children,function(e){var r="tabs-"+s;var a=u===s;var o={tabRef:function e(n){t.tabNodes[r]=n},id:t.tabIds[s],panelId:t.panelIds[s],selected:a,focus:a&&(l||d)};if(p)o.selectedClassName=p;if(i)o.disabledClassName=i;s++;return Object(n["cloneElement"])(e,o)})})}else if(m(e)){var h={id:t.panelIds[r],tabId:t.tabIds[r],selected:u===r};if(c)h.forceRender=c;if(f)h.selectedClassName=f;r++;o=Object(n["cloneElement"])(e,h)}return o})};r.isTabFromContainer=function e(t){if(!M(t))return false;var r=t.parentElement;do{if(r===this.node)return true;else if(r.getAttribute("data-tabs"))break;r=r.parentElement}while(r);return false};r.render=function e(){var t=this;var r=this.props,n=r.children,o=r.className,s=r.disabledTabClassName,i=r.domRef,l=r.focus,c=r.forceRenderTabPanel,u=r.onSelect,p=r.selectedIndex,f=r.selectedTabClassName,d=r.selectedTabPanelClassName,h=D(r,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]);return a.a.createElement("div",H({},h,{className:N()(o),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function e(r){t.node=r;if(i)i(r)},"data-tabs":true}),this.getChildren())};return t}(n["Component"]);q.defaultProps={className:"react-tabs",focus:false};q.propTypes=false?{children:childrenPropType,className:PropTypes.oneOfType([PropTypes.string,PropTypes.array,PropTypes.object]),disabledTabClassName:PropTypes.string,domRef:PropTypes.func,focus:PropTypes.bool,forceRenderTabPanel:PropTypes.bool,onSelect:PropTypes.func.isRequired,selectedIndex:PropTypes.number.isRequired,selectedTabClassName:PropTypes.string,selectedTabPanelClassName:PropTypes.string}:{};function Z(e,t){if(null==e)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++){a=s[o];if(t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;r[a]=e[a]}}return r}function U(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var K=function(e){U(t,e);function t(r){var n;n=e.call(this,r)||this;n.handleSelected=function(e,r,a){if("function"===typeof n.props.onSelect)if(false===n.props.onSelect(e,r,a))return;var o={focus:"keydown"===a.type};if(t.inUncontrolledMode(n.props))o.selectedIndex=e;n.setState(o)};n.state=t.copyPropsToState(n.props,{},n.props.defaultFocus);return n}var r=t.prototype;r.componentWillReceiveProps=function e(r){if(false)throw new Error("Switching between controlled mode (by using `selectedIndex`) and uncontrolled mode is not supported in `Tabs`.\nFor more information about controlled and uncontrolled mode of react-tabs see the README.");this.setState(function(e){return t.copyPropsToState(r,e)})};t.inUncontrolledMode=function e(t){return null===t.selectedIndex};t.copyPropsToState=function e(r,n,a){if(void 0===a)a=false;var o={focus:a};if(t.inUncontrolledMode(r)){var s=A(r.children)-1;var i=null;if(null!=n.selectedIndex)i=Math.min(n.selectedIndex,s);else i=r.defaultIndex||0;o.selectedIndex=i}return o};r.render=function e(){var t=this.props,r=t.children,n=t.defaultIndex,o=t.defaultFocus,s=Z(t,["children","defaultIndex","defaultFocus"]);s.focus=this.state.focus;s.onSelect=this.handleSelected;if(null!=this.state.selectedIndex)s.selectedIndex=this.state.selectedIndex;return a.a.createElement(q,s,r)};return t}(n["Component"]);K.defaultProps={defaultFocus:false,forceRenderTabPanel:false,selectedIndex:null,defaultIndex:null};K.propTypes=false?{children:childrenPropType,className:PropTypes.oneOfType([PropTypes.string,PropTypes.array,PropTypes.object]),defaultFocus:PropTypes.bool,defaultIndex:PropTypes.number,disabledTabClassName:PropTypes.string,domRef:PropTypes.func,forceRenderTabPanel:PropTypes.bool,onSelect:onSelectPropType,selectedIndex:selectedIndexPropType,selectedTabClassName:PropTypes.string,selectedTabPanelClassName:PropTypes.string}:{};K.tabsRole="Tabs";function B(){B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n))e[n]=r[n]}return e};return B.apply(this,arguments)}function G(e,t){if(null==e)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++){a=s[o];if(t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;r[a]=e[a]}}return r}function W(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var J=function(e){W(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.render=function e(){var t=this.props,r=t.children,n=t.className,o=G(t,["children","className"]);return a.a.createElement("ul",B({},o,{className:N()(n),role:"tablist"}),r)};return t}(n["Component"]);J.defaultProps={className:"react-tabs__tab-list"};J.propTypes=false?{children:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),className:PropTypes.oneOfType([PropTypes.string,PropTypes.array,PropTypes.object])}:{};J.tabsRole="TabList";function X(){X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n))e[n]=r[n]}return e};return X.apply(this,arguments)}function $(e,t){if(null==e)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++){a=s[o];if(t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;r[a]=e[a]}}return r}function Q(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var V="react-tabs__tab";var Y=function(e){Q(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.componentDidMount=function e(){this.checkFocus()};r.componentDidUpdate=function e(){this.checkFocus()};r.checkFocus=function e(){if(this.props.selected&&this.props.focus)this.node.focus()};r.render=function e(){var t,r=this;var n=this.props,o=n.children,s=n.className,i=n.disabled,l=n.disabledClassName,c=n.focus,u=n.id,p=n.panelId,f=n.selected,d=n.selectedClassName,h=n.tabIndex,b=n.tabRef,y=$(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return a.a.createElement("li",X({},y,{className:N()(s,(t={},t[d]=f,t[l]=i,t)),ref:function e(t){r.node=t;if(b)b(t)},role:"tab",id:u,"aria-selected":f?"true":"false","aria-disabled":i?"true":"false","aria-controls":p,tabIndex:h||(f?"0":null)}),o)};return t}(n["Component"]);Y.defaultProps={className:V,disabledClassName:V+"--disabled",focus:false,id:null,panelId:null,selected:false,selectedClassName:V+"--selected"};Y.propTypes=false?{children:PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.string]),className:PropTypes.oneOfType([PropTypes.string,PropTypes.array,PropTypes.object]),disabled:PropTypes.bool,tabIndex:PropTypes.string,disabledClassName:PropTypes.string,focus:PropTypes.bool,id:PropTypes.string,panelId:PropTypes.string,selected:PropTypes.bool,selectedClassName:PropTypes.string,tabRef:PropTypes.func}:{};Y.tabsRole="Tab";function ee(){ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n))e[n]=r[n]}return e};return ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++){a=s[o];if(t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;r[a]=e[a]}}return r}function re(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var ne="react-tabs__tab-panel";var ae=function(e){re(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.render=function e(){var t;var r=this.props,n=r.children,o=r.className,s=r.forceRender,i=r.id,l=r.selected,c=r.selectedClassName,u=r.tabId,p=te(r,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return a.a.createElement("div",ee({},p,{className:N()(o,(t={},t[c]=l,t)),role:"tabpanel",id:i,"aria-labelledby":u}),s||l?n:null)};return t}(n["Component"]);ae.defaultProps={className:ne,forceRender:false,selectedClassName:ne+"--selected"};ae.propTypes=false?{children:PropTypes.node,className:PropTypes.oneOfType([PropTypes.string,PropTypes.array,PropTypes.object]),forceRender:PropTypes.bool,id:PropTypes.string,selected:PropTypes.bool,selectedClassName:PropTypes.string,tabId:PropTypes.string}:{};ae.tabsRole="TabPanel";var oe=r(95);var se=r(41);var ie=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function le(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function ue(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var pe=function(e){ue(t,e);function t(e){le(this,t);var r=ce(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={issuerName:""};r.onNameChange=r.onNameChange.bind(r);r.onDeployClick=r.onDeployClick.bind(r);return r}ie(t,[{key:"onNameChange",value:function e(t){this.setState({issuerName:t.target.value})}},{key:"onDeployClick",value:function e(){var t=this.props,r=t.adminAddress,n=t.handleStoreDeploy;n({fromAddress:r,name:this.state.issuerName})}},{key:"render",value:function e(){return a.a.createElement("div",{className:"w-100"},a.a.createElement("div",{className:"mb4"},a.a.createElement("div",null,"Issuer Name",a.a.createElement("br",null),a.a.createElement("input",{type:"text",onChange:this.onNameChange,value:this.state.issuerName,size:50,required:true}))),a.a.createElement("button",{onClick:this.onDeployClick},"Deploy"))}}]);return t}(n["Component"]);var fe=pe;var de=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function he(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function ye(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var me=function(e){ye(t,e);function t(){he(this,t);return be(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}de(t,[{key:"render",value:function e(){var r=this;if(null==this.props.hashee){if(null==this.props.children)return n["createElement"]("div",null,"Unknown");return this.props.children}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99999;if(!e)return[];if(1===e.length)return[e];var r=new RegExp(".{1,"+t+"}","g");return e.match(r)}var o=Math.floor(this.props.hashee.length/this.props.lines);var s=a(this.props.hashee,o);return n["createElement"]("div",{style:{color:this.props.color?t.color(this.props.hashee):"inherit",wordBreak:"break-all"},onClick:this.props.clickable?function(){t.viewOnEtherscan(r.props.hashee,r.props.networkId,r.props.isTx);if(r.props.children)r.children.focus()}:null,title:this.props.clickable?"Click to copy":"",className:"jsx-616797058"+" "+(["__hashcolor",this.props.clickable?"copy":""].join(" ")||"")},this.props.children?this.props.children:s.map(function(e){return n["createElement"]("div",{key:e,className:"jsx-616797058"},e)}),n["createElement"](u.a,{styleId:"616797058",css:[".__hashcolor.jsx-616797058{font-family:var(--font-monospace);font-size:var(--font-monospace-size);-webkit-transition:color 0.1s ease-in;transition:color 0.1s ease-in;}",".copy.jsx-616797058{cursor:pointer;}",".copy.jsx-616797058:hover{text-decoration:underline;}",".copy.jsx-616797058:active{-webkit-filter:brightness(150%);filter:brightness(150%);}"]}))}}],[{key:"copyToClipboard",value:function e(t){var r=document.createElement("textarea");r.innerText=t;document.body.appendChild(r);r.select();document.execCommand("copy");r.remove()}},{key:"viewOnEtherscan",value:function e(r,n,a){var o=void 0;switch(n){case 4:o=a?"https://rinkeby.etherscan.io/tx/"+r:"https://rinkeby.etherscan.io/address/"+r;break;case 3:o=a?"https://ropsten.etherscan.io/tx/"+r:"https://ropsten.etherscan.io/address/"+r;break;case 42:o=a?"https://kovan.etherscan.io/tx/"+r:"https://kovan.etherscan.io/address/"+r;break;default:t.copyToClipboard(r);return}var s=window.open(o,"_blank");s.focus()}},{key:"color",value:function e(r){return"hsl("+Math.abs(t.toHashCode(r)%360)+", 90%, 35%)"}},{key:"toHashCode",value:function e(t){var r=0;for(var n=0;n<t.length;n+=1){r+=Math.pow(31*t.charCodeAt(n),t.length-n);r&=r}return r}}]);return t}(n["Component"]);var ve=me;me.defaultProps={clickable:true,color:true,lines:1};var Te={address:{size:42,maxLength:50,validityFn:b.a.utils.isAddress},hash:{size:66,maxLength:80,validityFn:function e(t){return/^(0x){1}[0-9a-fA-F]{64}$/i.test(t)}},none:{size:70,maxLength:99999,validityFn:function e(){return true}}};var ge=function e(t){var r=Te[t.type],n=r.size,o=r.maxLength,s=r.validityFn;var i=s(t.value);return a.a.createElement(ve,{hashee:t.value,clickable:false,color:i},a.a.createElement("input",{type:"text",onChange:t.onChange,size:n,value:t.value,spellCheck:"false",style:{color:"inherit",fontFamily:"var(--font-monospace) monospace",fontSize:"var(--font-monospace-size)",border:i?"solid 1px black":"solid 1px #e7040f"},maxLength:o,placeholder:t.placeholder}))};ge.defaultProps={type:"none"};var we=ge;var Ce=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function Pe(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Ee=function(e){Pe(t,e);function t(e){ke(this,t);var r=Oe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={certificateHash:""};r.onHashChange=r.onHashChange.bind(r);r.onIssueClick=r.onIssueClick.bind(r);return r}Ce(t,[{key:"onHashChange",value:function e(t){this.setState({certificateHash:t.target.value})}},{key:"onIssueClick",value:function e(){var t=this.props,r=t.adminAddress,n=t.storeAddress,a=t.handleCertificateIssue;a({storeAddress:n,fromAddress:r,certificateHash:this.state.certificateHash})}},{key:"render",value:function e(){return a.a.createElement("div",null,a.a.createElement("div",null,"Issue certificates with the Merkle root hash",a.a.createElement(we,{type:"hash",hashee:this.state.certificateHash,onChange:this.onHashChange,value:this.state.certificateHash,placeholder:"0x…"})),a.a.createElement("button",{className:"mt4",onClick:this.onIssueClick},"Issue"),this.props.issuedTx?a.a.createElement("div",{className:"mt5"},a.a.createElement("p",null,"Batch has been issued."),a.a.createElement("div",null,"Transaction ID"," ",a.a.createElement(ve,{hashee:this.props.issuedTx,networkId:this.props.networkId,isTx:true}))):null)}}]);return t}(n["Component"]);var xe=Ee;var je=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function Ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ie(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _e(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Se=function(e){_e(t,e);function t(e){Ne(this,t);var r=Ie(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={certificateHash:""};r.onHashChange=r.onHashChange.bind(r);r.onRevokeClick=r.onRevokeClick.bind(r);return r}je(t,[{key:"onHashChange",value:function e(t){this.setState({certificateHash:t.target.value})}},{key:"onRevokeClick",value:function e(){var t=this.props,r=t.adminAddress,n=t.storeAddress,a=t.handleCertificateRevoke;var o=window.confirm("Are you sure you want to revoke this hash?");if(o)a({storeAddress:n,fromAddress:r,certificateHash:this.state.certificateHash})}},{key:"render",value:function e(){var t=this.props,r=t.revokedTx,n=t.networkId;return a.a.createElement("div",null,a.a.createElement("div",null,"Certificate hash to revoke",a.a.createElement(we,{type:"hash",hashee:this.state.certificateHash,onChange:this.onHashChange,value:this.state.certificateHash,placeholder:"0x…"})),a.a.createElement("button",{className:"mt4 danger",onClick:this.onRevokeClick},a.a.createElement("i",{className:"fas fa-exclamation-triangle"})," Revoke"),r?a.a.createElement("div",{className:"mt5"},a.a.createElement("p",null,"Revoked certificates."),a.a.createElement("div",null,"Transaction ID",a.a.createElement(ve,{hashee:r,networkId:n,isTx:true}))):null)}}]);return t}(n["Component"]);var Ae=Se;var Re=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function He(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function De(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function Fe(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Me=a.a.createElement("style",{jsx:true},'\n      .tab {\n        cursor: pointer;\n      }\n\n      .tab:hover {\n        background-color: gold;\n      }\n\n      .tab[aria-selected="true"] {\n        color: white;\n        background-color: black;\n      }\n    ');var ze=function(e){Fe(t,e);function t(e){He(this,t);var r=De(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.refreshCurrentAddress=r.refreshCurrentAddress.bind(r);r.handleStoreDeploy=r.handleStoreDeploy.bind(r);r.storeAddressOnChange=r.storeAddressOnChange.bind(r);r.handleCertificateIssue=r.handleCertificateIssue.bind(r);r.handleCertificateRevoke=r.handleCertificateRevoke.bind(r);r.state={localStoreAddress:""};return r}Re(t,[{key:"componentWillMount",value:function e(){this.props.loadAdminAddress()}},{key:"storeAddressOnChange",value:function e(t){var r=t.target.value;this.setState({localStoreAddress:r});if(b.a.utils.isAddress(r))this.props.updateStoreAddress(r)}},{key:"handleStoreDeploy",value:function e(t){this.props.deployStore(t)}},{key:"handleCertificateIssue",value:function e(t){this.props.issueCertificate(t)}},{key:"handleCertificateRevoke",value:function e(t){this.props.revokeCertificate(t)}},{key:"refreshCurrentAddress",value:function e(){this.props.loadAdminAddress()}},{key:"render",value:function e(){var t=this.props,r=t.adminAddress,n=t.storeAddress,o=t.issuedTx,s=t.revokedTx,i=t.networkId;return a.a.createElement("div",null,a.a.createElement("h1",null,"Admin"),a.a.createElement("div",{className:"flex bb pb3"},a.a.createElement("div",{className:"w-50"},a.a.createElement("h3",null,"Current account"," ",a.a.createElement("div",{style:{cursor:"pointer"},onClick:this.refreshCurrentAddress,title:"Try to grab current account",tabIndex:1,className:"jsx-2113266829"+" "+"dib click-to-refresh"},a.a.createElement("i",{className:"jsx-2113266829"+" "+"fas fa-sync-alt"}),a.a.createElement(u.a,{styleId:"2113266829",css:[".click-to-refresh.jsx-2113266829{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);-webkit-transition:-webkit-transform 1.5s ease-in;-webkit-transition:transform 1.5s ease-in;transition:transform 1.5s ease-in;}",".click-to-refresh.jsx-2113266829:hover{color:#e7040f;}",".click-to-refresh.jsx-2113266829:active{-webkit-transform:rotateZ(-360deg);-ms-transform:rotateZ(-360deg);transform:rotateZ(-360deg);-webkit-transition:-webkit-transform 0s;-webkit-transition:transform 0s;transition:transform 0s;}",".click-to-refresh.jsx-2113266829:focus{outline:none;}"]}))),a.a.createElement("div",{className:"pa2"},a.a.createElement(ve,{hashee:r,networkId:i}))),a.a.createElement("div",{className:"w-50"},a.a.createElement("h3",null,"Store address"),a.a.createElement(we,{type:"address",value:this.state.localStoreAddress,onChange:this.storeAddressOnChange,placeholder:"Enter existing (0x…), or deploy new instance"}))),a.a.createElement(K,{className:"flex flex-row w-100"},a.a.createElement(J,{className:"flex flex-column w-30 list pa0"},a.a.createElement(Y,{className:"tab pl3"},a.a.createElement("h3",null,"Deploy new instance"),Me),a.a.createElement(Y,{className:"tab pl3"},a.a.createElement("h3",null,"Issue certificate batch")),a.a.createElement(Y,{className:"tab pl3"},a.a.createElement("h3",null,"Revoke certificate"))),a.a.createElement("div",{className:"w-70 pa4 pl5"},a.a.createElement(ae,null,a.a.createElement(fe,{adminAddress:r,handleStoreDeploy:this.handleStoreDeploy})),a.a.createElement(ae,null,n?a.a.createElement(xe,{networkId:i,issuedTx:o,adminAddress:r,storeAddress:n,handleCertificateIssue:this.handleCertificateIssue}):a.a.createElement("div",{className:"red"},"Enter a store address first.")),a.a.createElement(ae,null,n?a.a.createElement(Ae,{networkId:i,revokedTx:s,adminAddress:r,storeAddress:n,handleCertificateRevoke:this.handleCertificateRevoke}):a.a.createElement("div",{className:"red"},"Enter a store address first.")))))}}]);return t}(n["Component"]);var Le=function e(t){return{adminAddress:Object(oe["c"])(t),storeAddress:Object(oe["f"])(t),issuedTx:Object(oe["d"])(t),revokedTx:Object(oe["e"])(t),networkId:Object(se["d"])(t)}};var qe=function e(t){return{loadAdminAddress:function e(r){return t(Object(oe["h"])(r))},deployStore:function e(r){return t(Object(oe["b"])(r))},issueCertificate:function e(r){return t(Object(oe["g"])(r))},revokeCertificate:function e(r){return t(Object(oe["i"])(r))},updateStoreAddress:function e(r){return t(Object(oe["k"])(r))}}};var Ze=Object(d["connect"])(Le,qe)(ze);var Ue=r(258);var Ke=function e(t){return a.a.createElement("div",{className:"min-vh-100 pv5"},a.a.createElement(l["a"],null),a.a.createElement("div",{className:"mw9 mw8-ns center bg-white pa4 ph5-ns br3 pv5"},a.a.createElement(Ue["a"],null),a.a.createElement(Ze,t)))};var Be=t["default"]=s()(i["a"])(Ke)},96:function(e,t,r){var n,a;(function(){"use strict";var r={}.hasOwnProperty;function o(){var e=[];for(var t=0;t<arguments.length;t++){var n=arguments[t];if(!n)continue;var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n))e.push(o.apply(null,n));else if("object"===a)for(var s in n)if(r.call(n,s)&&n[s])e.push(s)}return e.join(" ")}if("undefined"!==typeof e&&e.exports)e.exports=o;else if(true)!(n=[],a=function(){return o}.apply(t,n),void 0!==a&&(e.exports=a));else window.classNames=o})()}},[339]);return{page:e.default}});