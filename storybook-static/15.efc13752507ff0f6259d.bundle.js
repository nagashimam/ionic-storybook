(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_nav",(function(){return Nav})),__webpack_require__.d(__webpack_exports__,"ion_nav_link",(function(){return NavLink}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59),_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(65),_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73),_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(97),_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(400),_framework_delegate_4584ab5a_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1257),ViewController=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var t,n;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(_framework_delegate_4584ab5a_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),matches=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0},convertToView=function(e,t){return e?e instanceof ViewController?e:new ViewController(e,t):null},Nav=function(){function e(e){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionNavWillLoad=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);this.swipeGesture=_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,__webpack_require__.e(0).then(__webpack_require__.bind(null,1260))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.disconnectedCallback=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.h)(n.element,_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.e),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n,i){var s,r=this,o=this.getActiveSync();if(matches(o,e,t))return Promise.resolve({changed:!1,element:o.element});var u,a=new Promise((function(e){return s=e})),c={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return s({changed:!0,element:e,markVisible:function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(r,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(e){switch(e.label){case 0:return t(),[4,u];case 1:return e.sent(),[2]}}))}))}}),n}};if("root"===n)u=this.setRoot(e,t,c);else{var f=this.views.find((function(n){return matches(n,e,t)}));f?u=this.popTo(f,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:i})):"forward"===n?u=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:i})):"back"===n&&(u=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:i})))}return a},e.prototype.getRouteId=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var n,i,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(o){switch(o.label){case 0:return this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy?[2,Promise.resolve(!1)]:(n=new Promise((function(t,n){e.resolve=t,e.reject=n})),e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter&&(i=document.querySelector("ion-router"))?[4,i.canTransition()]:[3,2]);case 1:if(!1===(r=o.sent()))return[2,Promise.resolve(!1)];if("string"==typeof r)return i.push(r,e.opts.direction||"back"),[2,Promise.resolve(!1)];o.label=2;case 2:return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),[2,n]}}))}))},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var t,n,i,o,s,a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(u){switch(u.label){case 0:if(u.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:u.sent(),u.label=2;case 2:return this.postViewInit(n,t,e),(i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t)&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||n&&n.animationBuilder),t.animationBuilder=e.opts.animationBuilder),i?[4,this.transition(n,t,e)]:[3,4];case 3:return s=u.sent(),[3,5];case 4:s={hasCompleted:!0,requiresTransition:!1},u.label=5;case 5:return o=s,this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return a=u.sent(),this.failed(a,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(void 0!==e.removeStart,"removeView needs removeStart"),Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(i.length>0,"length can not be zero");var r=function(e){return e.map((function(e){return e instanceof ViewController?e:"component"in e?convertToView(e.component,null===e.componentProps?void 0:e.componentProps):convertToView(e,void 0)})).filter((function(e){return null!==e}))}(i);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,s=r;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var u=a.nav;if(u&&u!==this)throw new Error("inserted view was already inserted");if(3===a.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(t||e,"Both leavingView and enteringView are null"),Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(n.resolve,"resolve must be valid"),Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(n.reject,"reject must be valid");var a,i=n.opts,r=n.insertViews,o=n.removeStart,s=n.removeCount;if(void 0!==o&&void 0!==s){Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(o>=0,"removeStart can not be negative"),Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(s>=0,"removeCount can not be negative"),a=[];for(var u=0;u<s;u++){(c=this.views[u+o])&&c!==e&&c!==t&&a.push(c)}i.direction=i.direction||"back"}var f=this.views.length+(void 0!==r?r.length:0)-(void 0!==s?s:0);if(Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(f>=0,"final balance can not be negative"),0===f)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){for(var l=n.insertStart,h=0,v=r;h<v.length;h++){var c=v[h];this.insertViewAt(c,l),l++}n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(a&&a.length>0){for(var d=0,p=a;d<p.length;d++){c=p[d];Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.h)(c.element,_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.c),Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.h)(c.element,_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.d),Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.h)(c.element,_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.e)}for(var m=0,g=a;m<g.length;m++){c=g[m];this.destroyView(c)}}},e.prototype.transition=function(e,t,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var i,r,o,s,a,u,c,f=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(l){switch(l.label){case 0:return i=n.opts,r=i.progressAnimation?function(e){return f.sbAni=e}:void 0,o=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.b)(this),s=e.element,a=t&&t.element,u=Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.c.get("navAnimation"),progressCallback:r,animated:this.animated&&_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("animated",!0),enteringEl:s,leavingEl:a},i),[4,Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.j)(u)];case 1:return c=l.sent().hasCompleted,[2,this.transitionFinish(c,e,t,i)]}}))}))},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.k)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;o&&(i>n?(Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.h)(o,_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.e),this.destroyView(r)):i<n&&Object(_index_1eeeab2e_js__WEBPACK_IMPORTED_MODULE_4__.i)(o,!0))}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_5__.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_5__.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,r,n)}},e.prototype.render=function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!1,configurable:!0}),e}();Nav.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var NavLink=function(){function e(e){var t=this;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.routerDirection="forward",this.onClick=function(){return function(e,t,n,i,r){var o=e.closest("ion-nav");if(o)if("forward"===t){if(void 0!==n)return o.push(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("root"===t){if(void 0!==n)return o.setRoot(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("back"===t)return o.pop({skipIfBusy:!0,animationBuilder:r});return Promise.resolve(!1)}(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}return e.prototype.render=function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.c,{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),e}()},1257:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return attachComponent})),__webpack_require__.d(__webpack_exports__,"b",(function(){return detachComponent}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),attachComponent=function(e,t,n,r,o){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach((function(e){return a.classList.add(e)})),o&&Object.assign(a,o),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}}))}))},detachComponent=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=15.efc13752507ff0f6259d.bundle.js.map