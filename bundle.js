/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tvdom = __webpack_require__(4);

var _tvdom2 = _interopRequireDefault(_tvdom);

var _EventBase2 = __webpack_require__(5);

var _EventBase3 = _interopRequireDefault(_EventBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by bruce.li on 12/07/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * The UIComponent class is the superclass of special UI component.
 * This class define some common interface which concrete UI component should be implement.
 *
 * @see EventBase
 */
var UIComponent = function (_EventBase) {
    _inherits(UIComponent, _EventBase);

    /**
     * Init component
     *
     * when mountPoint is omitted, should set a value by invoking setMountPoint manually.
     *
     * @param mountPoint {string|object} - the mount point for this ui component (may be CSS selector or jQuery Object) [optional]
     * @param options {any} - the component options [optional]
     */
    function UIComponent(mountPoint, options) {
        _classCallCheck(this, UIComponent);

        var _this = _possibleConstructorReturn(this, (UIComponent.__proto__ || Object.getPrototypeOf(UIComponent)).call(this));

        _this._cid = _this.generateCid();
        _this.setMountPoint(mountPoint);
        _this.setOptions(options);
        return _this;
    }

    /**
     * Get component id
     */


    _createClass(UIComponent, [{
        key: 'getCid',
        value: function getCid() {
            return this._cid;
        }

        /**
         * Generate an unique component id
         *
         * Sample: cid_yny9090snab_5307670
         */

    }, {
        key: 'generateCid',
        value: function generateCid() {
            // random number + last 7 numbers of current time
            return 'cid_' + Math.random().toString(36).substr(2) + '_' + new Date().getTime().toString().substr(-7);
        }

        /**
         * Get component name
         *
         * Note: concrete component should override this value
         */

    }, {
        key: 'getName',
        value: function getName() {
            return 'UIComponent';
        }

        /**
         * Get the mount point of this component
         * The container can be dom selector ('#id', '.clazz-name') or Jquery object ($('#id'))
         */

    }, {
        key: 'getMountPoint',
        value: function getMountPoint() {
            return this._mountPoint;
        }

        /**
         * Set the mount point of this component
         *
         * Invoke this method will not re-render the component.
         *
         * @param mountPoint {string|object} - the mount point for this ui component (may be CSS selector or jQuery Object)
         */

    }, {
        key: 'setMountPoint',
        value: function setMountPoint(mountPoint) {
            this._mountPoint = mountPoint;
            this._$mountPoint = $(mountPoint);
        }

        /**
         * Get passed options when init component
         *
         * @returns {any|object}
         */

    }, {
        key: 'getOptions',
        value: function getOptions() {
            return this._options;
        }

        /**
         * Set a new options of this component
         *
         * @param options
         */

    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            this._options = options || {};
        }

        /**
         * Get the parent of this component
         *
         * @see UIContainer
         */

    }, {
        key: 'getContainer',
        value: function getContainer() {
            return this._container;
        }

        /**
         * Set the parent of this component
         *
         * @param {UIContainer} container
         *
         * Note: the container shuold involke this method when add a new component
         */

    }, {
        key: 'setContainer',
        value: function setContainer(container) {
            this._container = container;
        }

        /**
         * Get template function of this component
         *
         * Note: concrete component should implement this method
         */

    }, {
        key: 'getTemplate',
        value: function getTemplate() {
            throw new Error('[' + this.getName() + ']: need implement this method');
        }

        /**
         * Get the data that used to render component
         *
         * Note: concrete component should override this value
         */

    }, {
        key: 'getData',
        value: function getData() {
            return {};
        }

        /**
         * Append the component to the document and show the component
         */

    }, {
        key: 'mount',
        value: function mount() {
            this.willMount();
            this.render();
            this.didMount();
        }

        /**
         * Do something before component mount to the document
         */

    }, {
        key: 'willMount',
        value: function willMount() {}

        /**
         * Do something after component mounted to the document
         */

    }, {
        key: 'didMount',
        value: function didMount() {}

        /**
         * Update the component changes to the document
         *
         * @param forceUpdate {boolean} - whether force update even if UI have no changes [optional], default is false.
         */

    }, {
        key: 'update',
        value: function update(forceUpdate) {
            if (forceUpdate || this.shouldUpdate()) {
                this.willUpdate();
                this.render();
                this.didUpdate();
            }
        }

        /**
         * Check whether need re-render UI (for saving un-neccessary re-render action)
         * Now just compare mount point and generated html to identify whether we should update UI.
         * So it will not re-render when component have no changes, but it will re-render container when add/remove children.
         */

    }, {
        key: 'shouldUpdate',
        value: function shouldUpdate() {
            //should update if not render before
            if (!this._lastRender) {
                return true;
            }
            // make sure this have no side effect to this component
            var html = this.getTemplate().call(this, this.getData());
            return html != this._lastRender.html || !this._isSameMountPoint(this.getMountPoint(), this._lastRender.mountPoint);
        }

        /**
         * Do something before component update
         */

    }, {
        key: 'willUpdate',
        value: function willUpdate() {}

        /**
         * Do something after component updated
         */

    }, {
        key: 'didUpdate',
        value: function didUpdate() {}

        /**
         * Render or re-render component by calling template function
         */

    }, {
        key: 'render',
        value: function render() {
            //using template function to render component
            var html = this.getTemplate().call(this, this.getData()).trim();
            // generate virtual dom tree
            var tree = _tvdom2.default.parse(html);
            var lastRender = this._lastRender;
            // update component
            if (lastRender) {
                // diff two trees: last and current
                var patches = _tvdom2.default.diff(lastRender.tree, tree);
                if (!this._isEmptyObject(patches)) {
                    // patch last dom tree
                    _tvdom2.default.patch(lastRender.root, patches);
                    // save changes
                    lastRender.html = html;
                    lastRender.tree = tree;
                }
            } else {
                // first time render dom tree
                var root = tree.render();
                this._$mountPoint.empty().html(root);
                // save render states
                this._lastRender = { mountPoint: this.getMountPoint(), html: html, tree: tree, root: root };
            }
        }

        /**
         * Will be invoked before container relayout the component
         *
         * The container decide when to invoke this method, the component can save states before reflow.
         */

    }, {
        key: 'willReflow',
        value: function willReflow() {}

        /**
         * Will be invoked after container relayout the component
         *
         * The container decide when to invoke this method, the component can update UI after reflow.
         *
         */

    }, {
        key: 'didReflow',
        value: function didReflow() {}

        /**
         * Show component (commonly only set css display value)
         *
         * Note: this function never re-render component
         */

    }, {
        key: 'show',
        value: function show() {
            this._$mountPoint.show();
        }

        /**
         * Hide component (commonly only set css display value)
         *
         * Note: this function never re-render component
         */

    }, {
        key: 'hide',
        value: function hide() {
            this._$mountPoint.hide();
        }

        /**
         * Check component whether is visible or hidden
         *
         * @returns {boolean}
         */

    }, {
        key: 'isVisible',
        value: function isVisible() {
            var display = this._$mountPoint.css('display');
            var visibility = this._$mountPoint.css('visibility');
            return visibility !== 'hidden' && display !== 'none';
        }

        /**
         * Get component width (px value)
         */

    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this._$mountPoint.width();
        }

        /**
         * Get component height (px value)
         */

    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this._$mountPoint.height();
        }

        /**
         * Destroy component from document and clean related global resources
         *
         * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only, default is false.
         *
         * Note: concrete component can override this method
         */

    }, {
        key: 'destroy',
        value: function destroy(removeMountPoint) {
            this.willDestroy();

            if (removeMountPoint) {
                this._$mountPoint.remove();
            } else {
                this._$mountPoint.empty();
            }

            // remove exists handler
            if (this._scrollHandler) {
                $(window).off('scroll', this._scrollHandler);
                this._scrollHandler = null;
            }
            // remove cache
            this._lastRender = null;
            this.didDestroy();
        }

        /**
         * Do something before component destroy
         */

    }, {
        key: 'willDestroy',
        value: function willDestroy() {}

        /**
         * Do someting after component destroy
         */

    }, {
        key: 'didDestroy',
        value: function didDestroy() {}

        /**
         * find child elements by selector
         *
         * @param selector
         */

    }, {
        key: 'findChildren',
        value: function findChildren(selector) {
            return $(this.getMountPoint()).find(selector);
        }

        /**
         * Enable trigger expression event when customer see this component
         *
         * Note: should invoke this function manually
         */

    }, {
        key: 'enableExpressionEvent',
        value: function enableExpressionEvent() {
            if (this._scrollHandler) {
                return;
            }
            // hold function ref
            this._scrollHandler = this._throttle(this._scrollEventHandler.bind(this), 200);
            $(window).on('scroll', this._scrollHandler);
        }
    }, {
        key: '_scrollEventHandler',
        value: function _scrollEventHandler() {
            if (!this.isVisible()) {
                return;
            }

            console.log('scroll check....');

            if (this._checkComponentInView()) {
                this.emit('expression', { name: this.getName() });
                console.log('expression event fired: ', this.getName());
                // remove un-used handler to avoid performance issue
                $(window).off('scroll', this._scrollHandler);
                this._scrollHandler = null;
            }
        }

        // check the component is in view or upper the view

    }, {
        key: '_checkComponentInView',
        value: function _checkComponentInView() {
            var $window = $(window);
            var componentOffsetTop = this._$mountPoint.offset().top;
            var windowScrollTop = $window.scrollTop();
            var windowHeight = $window.height();
            // the component is in view or upper than current view (throttle time)
            return windowScrollTop > componentOffsetTop - windowHeight;
        }

        // wait a function execution

    }, {
        key: '_throttle',
        value: function _throttle(callback, limit) {
            var inThrottle = false;
            return function () {
                var args = arguments;
                var context = this;
                if (!inThrottle) {
                    callback.apply(context, args);
                    inThrottle = true;
                    setTimeout(function () {
                        return inThrottle = false;
                    }, limit);
                }
            };
        }

        // compare two mount point

    }, {
        key: '_isSameMountPoint',
        value: function _isSameMountPoint(mp1, mp2) {
            if (!mp1 || !mp2) {
                return false;
            }

            // compare raw object if there are jquery object wrapper
            if (mp1 instanceof jQuery) {
                mp1 = mp1[0];
            }

            if (mp2 instanceof jQuery) {
                mp2 == mp2[0];
            }

            return mp1 == mp2;
        }
    }, {
        key: '_isEmptyObject',
        value: function _isEmptyObject(obj) {
            if (obj == null || obj == undefined) {
                return true;
            }

            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    return false;
                }
            }

            return true;
        }
    }]);

    return UIComponent;
}(_EventBase3.default);

exports.default = UIComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TestContainer = __webpack_require__(2);

var _TestContainer2 = _interopRequireDefault(_TestContainer);

var _TestComponent = __webpack_require__(6);

var _TestComponent2 = _interopRequireDefault(_TestComponent);

var _LazyImage = __webpack_require__(7);

var _LazyImage2 = _interopRequireDefault(_LazyImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = { msg: 'hello bruce', count: 1 };
var comp = new _TestComponent2.default();
comp.setData(data);

var comp2 = new _TestComponent2.default();
comp2.setData({ msg: 'no changes text' });

var comp3 = new _TestComponent2.default();
comp3.setData({ msg: '123123123' });

// comp.mount();

var con = new _TestContainer2.default('#container');
con.addComponent(comp);
con.addComponent(comp2);
con.addComponent(comp3);

con.mount();

setInterval(function () {
    data.msg = 'hello-' + data.count++;
    con.update();
}, 1000);

// error
setTimeout(function () {
    //remove last
    console.log('remove comp:');
    con.removeComponent(con.getComponentCount() - 1, true);
}, 3000);

$('.img').each(function (index, img) {
    var img = new _LazyImage2.default(img, {
        src: 'http://www.2cto.com/uploadfile/Collfiles/20160922/2016092209185687.png'
    });
    img.mount();
});

// var img = new LazyImage('#img', {
//     src: 'http://www.2cto.com/uploadfile/Collfiles/20160922/2016092209185687.png'
// })

// img.mount();

console.log('index');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIContainer2 = __webpack_require__(3);

var _UIContainer3 = _interopRequireDefault(_UIContainer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestContainer = function (_UIContainer) {
    _inherits(TestContainer, _UIContainer);

    function TestContainer() {
        _classCallCheck(this, TestContainer);

        return _possibleConstructorReturn(this, (TestContainer.__proto__ || Object.getPrototypeOf(TestContainer)).apply(this, arguments));
    }

    _createClass(TestContainer, [{
        key: 'getName',
        value: function getName() {
            return 'TestContainer';
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate() {
            return function () {
                var len = this.getComponentCount();
                var str = '';
                for (var i = 0; i < len; i++) {
                    str += '<li id="con-' + i + '"></li>';
                }

                return '<ul>' + str + '</ul>';
            };
        }
    }, {
        key: 'willRenderChildren',
        value: function willRenderChildren() {
            console.log('willRenderChildren');
            for (var i = 0; i < this.getComponentCount(); i++) {
                var component = this.getComponent(i);
                component.setMountPoint('#con-' + i);
                component.setContainer(this);
            }
        }
    }]);

    return TestContainer;
}(_UIContainer3.default);

exports.default = TestContainer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UIComponent2 = __webpack_require__(0);

var _UIComponent3 = _interopRequireDefault(_UIComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by bruce.li on 12/07/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * The UIContainer object is a special UI component that can contain other UI components.
 * Container component should inherit this class.
 *
 * @see UIComponent
 */
var UIContainer = function (_UIComponent) {
    _inherits(UIContainer, _UIComponent);

    /**
     * Init container
     *
     * when mountPoint is omitted, should set a value by invoking setMountPoint manually.
     *
     * @param mountPoint {string|object} - the mount point for this ui component (may be CSS selector or jQuery Object) [optional]
     * @param options {any} - the component options [optional]
     */
    function UIContainer(mountPoint, options) {
        _classCallCheck(this, UIContainer);

        var _this = _possibleConstructorReturn(this, (UIContainer.__proto__ || Object.getPrototypeOf(UIContainer)).call(this, mountPoint, options));

        _this._components = [];
        return _this;
    }

    /**
     * Get container name
     *
     * Note: concrete container should override this value
     */


    _createClass(UIContainer, [{
        key: 'getName',
        value: function getName() {
            return 'UIContainer';
        }

        /**
         * Append the component to the document and show the component
         */

    }, {
        key: 'mount',
        value: function mount() {
            // container mount
            _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), 'mount', this).call(this);

            // children mount
            this.willMountChildren();
            this._components.forEach(function (component) {
                component.mount();
            });
            this.didMountChildren();
        }

        /**
         * This method will be invoked before mount children components
         *
         * Concrete container can implement this method to setup children entry points etc.
         */

    }, {
        key: 'willMountChildren',
        value: function willMountChildren() {}

        /**
         * This method will be invoked after mount children components
         */

    }, {
        key: 'didMountChildren',
        value: function didMountChildren() {}

        /**
         * Update the container and children changes to the document
         *
         * @param forceUpdate {boolean} - whether force update even if UI have no changes , default is false. [optional]
         */

    }, {
        key: 'update',
        value: function update(forceUpdate) {
            // container update
            _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), 'update', this).call(this, forceUpdate);

            // children update
            this.willUpdateChildren(forceUpdate);
            this._components.forEach(function (component) {
                component.update(forceUpdate);
            });
            this.didUpdateChildren(forceUpdate);
        }

        /**
         * This method will be invoked before update children components
         *
         * @param forceUpdate {boolean} - whether force update even if UI have no changes , default is false. [optional]
         */

    }, {
        key: 'willUpdateChildren',
        value: function willUpdateChildren(forceUpdate) {}

        /**
         * This method will be invoked after update children components
         *
         * @param forceUpdate {boolean} - whether force update even if UI have no changes , default is false. [optional]
         */

    }, {
        key: 'didUpdateChildren',
        value: function didUpdateChildren(forceUpdate) {}

        /**
         * Add component to this container
         *
         * The new added component will not render on document util call render method of the container.
         *
         * @param component {UIComponent} - component
         * @param index {number} - which position to add, add to the end of container if omit this parameter.
         */

    }, {
        key: 'addComponent',
        value: function addComponent(component, index) {
            if (!component) {
                throw new Error('[' + this.getName() + ']: \'component\' is required');
            }

            if (index >= 0 && index < this.getComponentCount()) {
                this._components.splice(index, 0, component);
            } else {
                this._components.push(component);
            }
        }

        /**
         * Get the component at given position
         *
         * @param index
         */

    }, {
        key: 'getComponent',
        value: function getComponent(index) {
            return this._components[index];
        }

        /**
         * Get all children components in this container
         *
         * @returns {Array}
         */

    }, {
        key: 'getAllComponents',
        value: function getAllComponents() {
            return this._components;
        }

        /**
         * Get all children component count in this container
         */

    }, {
        key: 'getComponentCount',
        value: function getComponentCount() {
            return this._components.length;
        }

        /**
         * Remove component at given position
         *
         * @param index {integer} - component index position
         * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only
         */

    }, {
        key: 'removeComponent',
        value: function removeComponent(index, removeMountPoint) {
            if (index < this.getComponentCount()) {
                var component = this._components.splice(index, 1)[0];
                // let component clean its resources firstly
                component.destroy(removeMountPoint);

                return component;
            }
        }

        /**
         * Remove all children components in this container
         *
         * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only
         */

    }, {
        key: 'removeAllComponents',
        value: function removeAllComponents(removeMountPoint) {
            // let all children components clean their resources
            this._destroyChildrenComponents(removeMountPoint);
            this._components = [];
        }

        /**
         * Destroy component from document and clean related global resources
         *
         * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only
         */

    }, {
        key: 'destroy',
        value: function destroy(removeMountPoint) {
            //distroy children firstly
            this._destroyChildrenComponents(removeMountPoint);
            _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), 'destroy', this).call(this, removeMountPoint);
        }
    }, {
        key: '_destroyChildrenComponents',
        value: function _destroyChildrenComponents(removeMountPoint) {
            this._components.forEach(function (component) {
                component.destroy(removeMountPoint);
            });
        }
    }]);

    return UIContainer;
}(_UIComponent3.default);

exports.default = UIContainer;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function Element(e,t,n){if(!(this instanceof Element))return _.isArray(n)||null==n||(n=_.slice(arguments,2).filter(_.truthy)),new Element(e,t,n);_.isArray(t)&&(n=t,t={}),this.tagName=e,this.props=t||{},this.children=n||[],this.key=t?t.key:void 0;var r=0;_.each(this.children,function(e,t){e instanceof Element?r+=e.count:n[t]=""+e,r++}),this.count=r}function parse(e){var t,n=[],r=-1,o=[],i={};if(e.replace(tagRE,function(a,l){var c,s="/"!==a.charAt(1),f=l+a.length,u=e.charAt(f);s&&(r++,!(t=parseTag(a)).voidElement&&u&&"<"!==u&&t.children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}),i[t.tagName]=t,0===r&&n.push(t),(c=o[r-1])&&c.children.push(t),o[r]=t),s&&!t.voidElement||(r--,"<"!==u&&u&&o[r].children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}))}),1!==n.length)throw new Error("Must have one root container");return toElement(n[0])}function parseTag(e){var t,n=0,r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(attrRE,function(o){n%2?t=o:0===n?((lookup[o]||"/"===e.charAt(e.length-2))&&(r.voidElement=!0),r.name=o):r.attrs[t]=o.replace(/['"]/g,""),n++}),r}function toElement(e){var t=[];return e.children.forEach(function(e){"text"==e.type?t.push(e.content):t.push(toElement(e))}),Element(e.name,e.attrs,t)}function diff$2(e,t,n){function r(e){var t={index:e,type:0};d.push(t)}function o(e,t){var n={index:e,item:t,type:1};d.push(n)}function i(e){E.splice(e,1)}for(var a,l,c=makeKeyIndexAndFree(e,n),s=makeKeyIndexAndFree(t,n),f=s.free,u=c.keyIndex,p=s.keyIndex,d=[],h=[],y=0,m=0;y<e.length;){if(a=e[y],l=getItemKey(a,n))if(p.hasOwnProperty(l)){var v=p[l];h.push(t[v])}else h.push(null);else{var k=f[m++];h.push(k||null)}y++}var E=h.slice(0);for(y=0;y<E.length;)null===E[y]?(r(y),i(y)):y++;for(var g=y=0;y<t.length;){l=getItemKey(a=t[y],n);var _=E[g],x=getItemKey(_,n);if(_)if(l===x)g++;else if(u.hasOwnProperty(l)){getItemKey(E[g+1],n)===l?(r(y),i(g),g++):o(y,a)}else o(y,a);else o(y,a);y++}return{moves:d,children:h}}function makeKeyIndexAndFree(e,t){for(var n={},r=[],o=0,i=e.length;o<i;o++){var a=e[o],l=getItemKey(a,t);l?n[l]=o:r.push(a)}return{keyIndex:n,free:r}}function getItemKey(e,t){if(e&&t)return"string"==typeof t?e[t]:t(e)}function patch(e,t){dfsWalk$1(e,{index:0},t)}function dfsWalk$1(e,t,n){for(var r=n[t.index],o=e.childNodes?e.childNodes.length:0,i=0;i<o;i++){var a=e.childNodes[i];t.index++,dfsWalk$1(a,t,n)}r&&applyPatches(e,r)}function applyPatches(e,t){_.each(t,function(t){switch(t.type){case REPLACE:var n="string"==typeof t.node?document.createTextNode(t.node):t.node.render();e.parentNode.replaceChild(n,e);break;case REORDER:reorderChildren(e,t.moves);break;case PROPS:setProps(e,t.props);break;case TEXT:e.textContent?e.textContent=t.content:e.nodeValue=t.content;break;default:throw new Error("Unknown patch type "+t.type)}})}function setProps(e,t){for(var n in t)if(void 0===t[n])e.removeAttribute(n);else{var r=t[n];_.setAttr(e,n,r)}}function reorderChildren(e,t){var n=_.toArray(e.childNodes),r={};_.each(n,function(e){if(1===e.nodeType){var t=e.getAttribute("key");t&&(r[t]=e)}}),_.each(t,function(t){var o=t.index;if(0===t.type)n[o]&&n[o]===e.childNodes[o]&&e.removeChild(e.childNodes[o]),n.splice(o,1);else if(1===t.type){var i=r[t.item.key]?r[t.item.key].cloneNode(!0):"object"===_typeof(t.item)?t.item.render():document.createTextNode(t.item);n.splice(o,0,i),e.insertBefore(i,e.childNodes[o]||null)}})}function diff(e,t){var n={};return dfsWalk(e,t,0,n),n}function dfsWalk(e,t,n,r){var o=[];if(null===t);else if(_.isString(e)&&_.isString(t))t!==e&&o.push({type:patch.TEXT,content:t});else if(e.tagName===t.tagName&&e.key===t.key){var i=diffProps(e,t);i&&o.push({type:patch.PROPS,props:i}),isIgnoreChildren(t)||diffChildren(e.children,t.children,n,r,o)}else o.push({type:patch.REPLACE,node:t});o.length&&(r[n]=o)}function diffChildren(e,t,n,r,o){var i=listDiff2(e,t,"key");if(t=i.children,i.moves.length){var a={type:patch.REORDER,moves:i.moves};o.push(a)}var l=null,c=n;_.each(e,function(e,n){dfsWalk(e,t[n],c=l&&l.count?c+l.count+1:c+1,r),l=e})}function diffProps(e,t){var n,r,o=0,i=e.props,a=t.props,l={};for(n in i)r=i[n],a[n]!==r&&(o++,l[n]=a[n]);for(n in a)r=a[n],i.hasOwnProperty(n)||(o++,l[n]=a[n]);return 0===o?null:l}function isIgnoreChildren(e){return e.props&&e.props.hasOwnProperty("ignore")}var _={};_.type=function(e){return Object.prototype.toString.call(e).replace(/\[object\s|\]/g,"")},_.isArray=function(e){return"Array"===_.type(e)},_.slice=function(e,t){return Array.prototype.slice.call(e,t)},_.truthy=function(e){return!!e},_.isString=function(e){return"String"===_.type(e)},_.each=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},_.toArray=function(e){if(!e)return[];for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n]);return t},_.setAttr=function(e,t,n){switch(t){case"style":e.style.cssText=n;break;case"value":var r=e.tagName||"";"input"===(r=r.toLowerCase())||"textarea"===r?e.value=n:e.setAttribute(t,n);break;default:e.setAttribute(t,n)}},Element.prototype.render=function(){var e=document.createElement(this.tagName),t=this.props;for(var n in t){var r=t[n];_.setAttr(e,n,r)}return _.each(this.children,function(t){var n=t instanceof Element?t.render():document.createTextNode(t);e.appendChild(n)}),e};var tagRE=/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,attrRE=/([\w-]+)|['"]{1}([^'"]*)['"]{1}/g,lookup=Object.create?Object.create(null):{};lookup.area=!0,lookup.base=!0,lookup.br=!0,lookup.col=!0,lookup.embed=!0,lookup.hr=!0,lookup.img=!0,lookup.input=!0,lookup.keygen=!0,lookup.link=!0,lookup.menuitem=!0,lookup.meta=!0,lookup.param=!0,lookup.source=!0,lookup.track=!0,lookup.wbr=!0;var makeKeyIndexAndFree_1=makeKeyIndexAndFree,diff_2=diff$2,diff_1={makeKeyIndexAndFree:makeKeyIndexAndFree_1,diff:diff_2},listDiff2=diff_1.diff,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},REPLACE=0,REORDER=1,PROPS=2,TEXT=3;patch.REPLACE=REPLACE,patch.REORDER=REORDER,patch.PROPS=PROPS,patch.TEXT=TEXT;var main={parse:parse,diff:diff,patch:patch};/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by bruce.li on 11/28/2017.
 */

/**
 * Implement base event functions
 */
var EventBase = function () {
    function EventBase() {
        _classCallCheck(this, EventBase);
    }

    _createClass(EventBase, [{
        key: 'getListeners',


        /**
         * Get all listeners of given event
         *
         * @param name {string} - event name
         * @returns {array} - return all registered listeners of event
         */
        value: function getListeners(name) {
            if (!name) {
                throw new Error('[EventBase.getListeners] "name" is required');
            }

            var events = this._getEvents();
            var listeners = events[name];

            if (!listeners) {
                events[name] = listeners = [];
            }

            return listeners;
        }

        /**
         * Emit/Fire event
         *
         * @param name {string} - event name
         * @param data {*} - event data [optional]
         * @returns {EventBase}
         */

    }, {
        key: 'emit',
        value: function emit(name, data) {
            var _this = this;

            if (!name) {
                throw new Error('[EventBase.emit] "name" is required');
            }

            var listeners = this.getListeners(name);
            // keep running order consistent with register order
            listeners.forEach(function (listener) {
                try {
                    listener.callback.call(_this, data);
                } catch (err) {
                    _this._log(err);
                }
            });

            var j = listeners.length;
            // remove once listeners
            while (--j >= 0) {
                if (listeners[j].once) {
                    listeners.splice(j, 1);
                }
            }

            return this;
        }

        /**
         * Register a listener on given event
         *
         * @param name {string} - event name
         * @param listener {function} - listener
         * @returns {EventBase}
         */

    }, {
        key: 'on',
        value: function on(name, listener) {
            if (!name || !listener) {
                throw new Error('[EventBase.on] "name" and "listener" are required');
            }

            if (typeof listener != 'function') {
                throw new Error('[EventBase.on] "listener" must be a function');
            }

            var listeners = this.getListeners(name);

            if (this._indexOfListener(listeners, listener) >= 0) {
                this._log('Warning: register listener multiple times on same event "' + name + '"');
            }

            listeners.push({ callback: listener, once: false });

            return this;
        }

        /**
         * Register a listener on given event, the listener will be removed after run once.
         *
         * @param name {string} - event name
         * @param listener {function} - listener
         * @returns {EventBase}
         */

    }, {
        key: 'once',
        value: function once(name, listener) {
            if (!name || !listener) {
                throw new Error('[EventBase.on] "name" and "listener" are required');
            }

            if (typeof listener != 'function') {
                throw new Error('[EventBase.on] "listener" must be a function');
            }

            var listeners = this.getListeners(name);

            if (this._indexOfListener(listeners, listener) >= 0) {
                this._log('Warning: register listener multiple times on same event "' + name + '"');
            }

            listeners.push({ callback: listener, once: true });

            return this;
        }

        /**
         * Remove a registered listener on given event
         *
         * @param name {string} - event name
         * @param listener {function} - listener
         * @returns {EventBase}
         */

    }, {
        key: 'off',
        value: function off(name, listener) {
            if (!name || !listener) {
                throw new Error('[EventBase.off] "name" and "listener" are required');
            }

            var listeners = this.getListeners(name);
            var ind = this._indexOfListener(listeners, listener);

            if (ind >= 0) {
                listeners.splice(ind, 1);
            }

            return this;
        }

        /**
         * Remove all registered listeners of given event
         *
         * @param name {string} - event name
         * @returns {EventBase}
         */

    }, {
        key: 'removeAllListeners',
        value: function removeAllListeners(name) {
            if (!name) {
                throw new Error('EventBase.removeAllListeners] "name" is required');
            }

            var events = this._getEvents();

            if (events.hasOwnProperty(name)) {
                delete events[name];
            }

            return this;
        }

        /**
         * Print all event and related listeners information, it is a helpful method for debugging.
         */

    }, {
        key: 'stats',
        value: function stats() {
            var events = this._getEvents();

            for (var name in events) {
                var listeners = events[name];
                this._log("==================================================");
                this._log('Event:' + name + ', Listeners: ' + listeners.length);
                this._log("--------------------------------------------------");
                // print all listeners info
                for (var i = 0; i < listeners.length; i++) {
                    this._log(listeners[i]);
                }

                if (listeners.length === 0) {
                    this._log('No Listeners');
                }
            }
        }

        // events contain all registered listeners info

    }, {
        key: '_getEvents',
        value: function _getEvents() {
            return this._events || (this._events = {});
        }
    }, {
        key: '_indexOfListener',


        // find callback function index
        value: function _indexOfListener(listeners, callback) {
            var i = listeners.length;

            while (i--) {
                if (listeners[i].callback === callback) {
                    return i;
                }
            }

            return -1;
        }
    }, {
        key: '_log',
        value: function _log(data) {
            if (console && console.log) {
                console.log(data);
            }
        }
    }]);

    return EventBase;
}();

exports.default = EventBase;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UIComponent2 = __webpack_require__(0);

var _UIComponent3 = _interopRequireDefault(_UIComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestComponent = function (_UIComponent) {
    _inherits(TestComponent, _UIComponent);

    function TestComponent() {
        _classCallCheck(this, TestComponent);

        return _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).apply(this, arguments));
    }

    _createClass(TestComponent, [{
        key: 'getName',
        value: function getName() {
            return 'TestComponent';
        }
    }, {
        key: 'getData',
        value: function getData() {
            return this._data;
        }
    }, {
        key: 'render',
        value: function render() {
            _get(TestComponent.prototype.__proto__ || Object.getPrototypeOf(TestComponent.prototype), 'render', this).call(this);
        }
    }, {
        key: 'setData',
        value: function setData(data) {
            this._data = data;
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate() {
            return function (data) {
                return '<div><h2>my title</h2><span>get data: ' + data.msg + '</span></div>';
            };
        }
    }]);

    return TestComponent;
}(_UIComponent3.default);

exports.default = TestComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIComponent2 = __webpack_require__(0);

var _UIComponent3 = _interopRequireDefault(_UIComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * LazyImage
 * 
 * new LazyImage('#img1', {
 *   'src': './sample.png',
 *   'retry': 2  [optional]
 * })
 */
var LazyImage = function (_UIComponent) {
    _inherits(LazyImage, _UIComponent);

    function LazyImage(mountPoint, options) {
        _classCallCheck(this, LazyImage);

        var _this = _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, mountPoint, options));

        _this._src = options.src;
        _this._retry = options.retry || 2;
        return _this;
    }

    _createClass(LazyImage, [{
        key: 'getName',
        value: function getName() {
            return 'LazyImage';
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate() {
            return function (data) {
                return '<img class="lazy-image" id="' + this.getCid() + '"></img>';
            };
        }
    }, {
        key: 'didMount',
        value: function didMount() {
            var _this2 = this;

            $(window).on('scroll resize', function () {
                console.log('scroll ....');
                _this2.requestScroll();
            });
        }

        // location helper

    }, {
        key: 'getLoc',
        value: function getLoc() {
            return window.scrollY || window.pageYOffset;
        }

        // debounce helpers

    }, {
        key: 'requestScroll',
        value: function requestScroll() {
            this._prevLoc = this.getLoc();
            this.requestFrame();
        }
    }, {
        key: 'requestFrame',
        value: function requestFrame() {
            var _this3 = this;

            if (!this._ticking) {
                window.requestAnimationFrame(function () {
                    var node = document.getElementById(_this3.getCid());
                    if (_this3.inViewport(node)) {
                        console.log('set src');
                        node.setAttribute('src', _this3._src);
                        _this3._ticking = true;
                    }
                });
            }
        }

        // offset helper

    }, {
        key: 'getOffset',
        value: function getOffset(node) {
            return node.getBoundingClientRect().top + this._prevLoc;
        }

        // in viewport helper

    }, {
        key: 'inViewport',
        value: function inViewport(node) {
            var windowHeight = window.innerHeight;
            var viewTop = this._prevLoc;
            var viewBot = viewTop + windowHeight;

            var nodeTop = this.getOffset(node);
            var nodeBot = nodeTop + node.offsetHeight;

            var offset = 20 / 100 * windowHeight;

            return nodeBot >= viewTop - offset && nodeTop <= viewBot + offset;
        }
    }]);

    return LazyImage;
}(_UIComponent3.default);

exports.default = LazyImage;

/***/ })
/******/ ]);