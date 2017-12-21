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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _EventBase2 = __webpack_require__(6);

var _EventBase3 = _interopRequireDefault(_EventBase2);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

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
            var html = this.getTemplate().call(this, this.getData());
            // generate virtual dom tree
            var tree = _index2.default.parse(html);
            var lastRender = this._lastRender;
            // update component
            if (lastRender) {
                // diff two trees: last and current 
                var patches = _index2.default.diff(lastRender.tree, tree);
                if (!this._isEmptyObject(patches)) {
                    // patch last dom tree
                    _index2.default.patch(lastRender.root, patches);
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

            this.show();
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
            this._visible = true;
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
            this._visible = false;
        }

        /**
         * Check component whether is visible
         *
         * @returns {boolean}
         */

    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !!this._visible;
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ = {};

_.type = function (obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
};

_.isArray = function isArray(list) {
  return _.type(list) === 'Array';
};

_.slice = function slice(arrayLike, index) {
  return Array.prototype.slice.call(arrayLike, index);
};

_.truthy = function truthy(value) {
  return !!value;
};

_.isString = function isString(list) {
  return _.type(list) === 'String';
};

_.each = function each(array, fn) {
  for (var i = 0, len = array.length; i < len; i++) {
    fn(array[i], i);
  }
};

_.toArray = function toArray(listLike) {
  if (!listLike) {
    return [];
  }

  var list = [];

  for (var i = 0, len = listLike.length; i < len; i++) {
    list.push(listLike[i]);
  }

  return list;
};

_.setAttr = function setAttr(node, key, value) {
  switch (key) {
    case 'style':
      node.style.cssText = value;
      break;
    case 'value':
      var tagName = node.tagName || '';
      tagName = tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea') {
        node.value = value;
      } else {
        // if it is not a input or textarea, use `setAttribute` to set
        node.setAttribute(key, value);
      }
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
};

exports.default = _;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REPLACE = 0;
var REORDER = 1;
var PROPS = 2;
var TEXT = 3;

function patch(node, patches) {
  var walker = { index: 0 };
  dfsWalk(node, walker, patches);
}

function dfsWalk(node, walker, patches) {
  var currentPatches = patches[walker.index];

  var len = node.childNodes ? node.childNodes.length : 0;
  for (var i = 0; i < len; i++) {
    var child = node.childNodes[i];
    walker.index++;
    dfsWalk(child, walker, patches);
  }

  if (currentPatches) {
    applyPatches(node, currentPatches);
  }
}

function applyPatches(node, currentPatches) {
  _util2.default.each(currentPatches, function (currentPatch) {
    switch (currentPatch.type) {
      case REPLACE:
        var newNode = typeof currentPatch.node === 'string' ? document.createTextNode(currentPatch.node) : currentPatch.node.render();
        node.parentNode.replaceChild(newNode, node);
        break;
      case REORDER:
        reorderChildren(node, currentPatch.moves);
        break;
      case PROPS:
        setProps(node, currentPatch.props);
        break;
      case TEXT:
        if (node.textContent) {
          node.textContent = currentPatch.content;
        } else {
          // old ie
          node.nodeValue = currentPatch.content;
        }
        break;
      default:
        throw new Error('Unknown patch type ' + currentPatch.type);
    }
  });
}

function setProps(node, props) {
  for (var key in props) {
    if (props[key] === void 666) {
      node.removeAttribute(key);
    } else {
      var value = props[key];
      _util2.default.setAttr(node, key, value);
    }
  }
}

function reorderChildren(node, moves) {
  var staticNodeList = _util2.default.toArray(node.childNodes);
  var maps = {};

  _util2.default.each(staticNodeList, function (node) {
    if (node.nodeType === 1) {
      var key = node.getAttribute('key');
      if (key) {
        maps[key] = node;
      }
    }
  });

  _util2.default.each(moves, function (move) {
    var index = move.index;
    if (move.type === 0) {
      // remove item
      if (staticNodeList[index] && staticNodeList[index] === node.childNodes[index]) {
        // maybe have been removed for inserting
        node.removeChild(node.childNodes[index]);
      }
      staticNodeList.splice(index, 1);
    } else if (move.type === 1) {
      // insert item
      var insertNode = maps[move.item.key] ? maps[move.item.key].cloneNode(true) // reuse old item
      : _typeof(move.item) === 'object' ? move.item.render() : document.createTextNode(move.item);
      staticNodeList.splice(index, 0, insertNode);
      node.insertBefore(insertNode, node.childNodes[index] || null);
    }
  });
}

// patch types
patch.REPLACE = REPLACE;
patch.REORDER = REORDER;
patch.PROPS = PROPS;
patch.TEXT = TEXT;

exports.default = patch;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TestContainer = __webpack_require__(4);

var _TestContainer2 = _interopRequireDefault(_TestContainer);

var _TestComponent = __webpack_require__(13);

var _TestComponent2 = _interopRequireDefault(_TestComponent);

var _LazyImage = __webpack_require__(14);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIContainer2 = __webpack_require__(5);

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
/* 5 */
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
            this._components.forEach(function (component) {
                component.update(forceUpdate);
            });
        }

        /**
         * Render component by calling template function
         *
         * Note: concrete container can implement special render logic
         */

    }, {
        key: 'render',
        value: function render() {
            //render container firstly (setup entry point)
            _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), 'render', this).call(this);

            // render children
            if (this._components.length > 0) {
                this.willRenderChildren();
                this._components.forEach(function (component) {
                    component.render();
                });
                this.didRenderChildren();
            }
        }

        /**
         * This method will be invoked before render children components
         *
         * Concrete container can implement this method to setup children entry points etc.
         */

    }, {
        key: 'willRenderChildren',
        value: function willRenderChildren() {}

        /**
         * This method will be invoked after render children components
         */

    }, {
        key: 'didRenderChildren',
        value: function didRenderChildren() {}

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parse = __webpack_require__(8);

var _parse2 = _interopRequireDefault(_parse);

var _diff = __webpack_require__(10);

var _diff2 = _interopRequireDefault(_diff);

var _patch = __webpack_require__(2);

var _patch2 = _interopRequireDefault(_patch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// vdom main functions
exports.default = {
    parse: _parse2.default,
    diff: _diff2.default,
    patch: _patch2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _element = __webpack_require__(9);

var _element2 = _interopRequireDefault(_element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// regex to match element
var tagRE = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
// regex to match dom attribute
var attrRE = /([\w-]+)|['"]{1}([^'"]*)['"]{1}/g;

// re-used obj for quick lookups of components
var empty = Object.create ? Object.create(null) : {};

// create optimized lookup object for
// void elements as listed here: 
// http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
var lookup = Object.create ? Object.create(null) : {};
lookup.area = true;
lookup.base = true;
lookup.br = true;
lookup.col = true;
lookup.embed = true;
lookup.hr = true;
lookup.img = true;
lookup.input = true;
lookup.keygen = true;
lookup.link = true;
lookup.menuitem = true;
lookup.meta = true;
lookup.param = true;
lookup.source = true;
lookup.track = true;
lookup.wbr = true;

/**
 * Parse html fragement and return vitrual dom tree
 * 
 * Note: html must have one root element and all tags must be closed or self-closing.
 */
function parse(html) {
    var result = [];
    var current;
    var level = -1;
    var arr = [];
    var byTag = {};

    html.replace(tagRE, function (tag, index) {
        var isOpen = tag.charAt(1) !== '/';
        var start = index + tag.length;
        var nextChar = html.charAt(start);
        var parent;

        if (isOpen) {
            level++;

            current = parseTag(tag);

            if (!current.voidElement && nextChar && nextChar !== '<') {
                current.children.push({
                    type: 'text',
                    content: html.slice(start, html.indexOf('<', start))
                });
            }

            byTag[current.tagName] = current;

            // if we're at root, push new base node
            if (level === 0) {
                result.push(current);
            }

            parent = arr[level - 1];

            if (parent) {
                parent.children.push(current);
            }

            arr[level] = current;
        }

        if (!isOpen || current.voidElement) {
            level--;
            if (nextChar !== '<' && nextChar) {
                // trailing text node
                arr[level].children.push({
                    type: 'text',
                    content: html.slice(start, html.indexOf('<', start))
                });
            }
        }
    });

    if (result.length !== 1) {
        throw new Error('Must have one root container');
    }

    return toElement(result[0]);
};

function parseTag(tag) {
    var i = 0;
    var key;
    var res = {
        type: 'tag',
        name: '',
        voidElement: false,
        attrs: {},
        children: []
    };

    tag.replace(attrRE, function (match) {
        if (i % 2) {
            key = match;
        } else {
            if (i === 0) {
                if (lookup[match] || tag.charAt(tag.length - 2) === '/') {
                    res.voidElement = true;
                }
                res.name = match;
            } else {
                res.attrs[key] = match.replace(/['"]/g, '');
            }
        }
        i++;
    });

    return res;
};

// to vdom element
function toElement(el) {
    var children = [];
    el.children.forEach(function (child) {
        if (child.type == 'text') {
            children.push(child.content);
        } else {
            children.push(toElement(child));
        }
    });

    return (0, _element2.default)(el.name, el.attrs, children);
}

exports.default = parse;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Virtual-dom Element.
 * @param {String} tagName
 * @param {Object} props - Element's properties,
 *                       - using object to store key-value pair
 * @param {Array<Element|String>} - This element's children elements.
 *                                - Can be Element instance or just a piece plain text.
 */
function Element(tagName, props, children) {
  if (!(this instanceof Element)) {
    if (!_util2.default.isArray(children) && children != null) {
      children = _util2.default.slice(arguments, 2).filter(_util2.default.truthy);
    }
    return new Element(tagName, props, children);
  }

  if (_util2.default.isArray(props)) {
    children = props;
    props = {};
  }

  this.tagName = tagName;
  this.props = props || {};
  this.children = children || [];
  this.key = props ? props.key : void 666;

  var count = 0;

  _util2.default.each(this.children, function (child, i) {
    if (child instanceof Element) {
      count += child.count;
    } else {
      children[i] = '' + child;
    }
    count++;
  });

  this.count = count;
}

/**
 * Render the hold element tree.
 */
Element.prototype.render = function () {
  var el = document.createElement(this.tagName);
  var props = this.props;

  for (var propName in props) {
    var propValue = props[propName];
    _util2.default.setAttr(el, propName, propValue);
  }

  _util2.default.each(this.children, function (child) {
    var childEl = child instanceof Element ? child.render() : document.createTextNode(child);
    el.appendChild(childEl);
  });

  return el;
};

module.exports = Element;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listDiff = __webpack_require__(11);

var _listDiff2 = _interopRequireDefault(_listDiff);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _patch = __webpack_require__(2);

var _patch2 = _interopRequireDefault(_patch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function diff(oldTree, newTree) {
  var index = 0;
  var patches = {};
  dfsWalk(oldTree, newTree, index, patches);
  return patches;
}

function dfsWalk(oldNode, newNode, index, patches) {
  var currentPatch = [];

  // Node is removed.
  if (newNode === null) {
    // Real DOM node will be removed when perform reordering, so has no needs to do anthings in here
    // TextNode content replacing
  } else if (_util2.default.isString(oldNode) && _util2.default.isString(newNode)) {
    if (newNode !== oldNode) {
      currentPatch.push({ type: _patch2.default.TEXT, content: newNode });
    }
    // Nodes are the same, diff old node's props and children
  } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    // Diff props
    var propsPatches = diffProps(oldNode, newNode);
    if (propsPatches) {
      currentPatch.push({ type: _patch2.default.PROPS, props: propsPatches });
    }
    // Diff children. If the node has a `ignore` property, do not diff children
    if (!isIgnoreChildren(newNode)) {
      diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);
    }
    // Nodes are not the same, replace the old node with new node
  } else {
    currentPatch.push({ type: _patch2.default.REPLACE, node: newNode });
  }

  if (currentPatch.length) {
    patches[index] = currentPatch;
  }
}

function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
  var diffs = (0, _listDiff2.default)(oldChildren, newChildren, 'key');
  newChildren = diffs.children;

  if (diffs.moves.length) {
    var reorderPatch = { type: _patch2.default.REORDER, moves: diffs.moves };
    currentPatch.push(reorderPatch);
  }

  var leftNode = null;
  var currentNodeIndex = index;
  _util2.default.each(oldChildren, function (child, i) {
    var newChild = newChildren[i];
    currentNodeIndex = leftNode && leftNode.count ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1;
    dfsWalk(child, newChild, currentNodeIndex, patches);
    leftNode = child;
  });
}

function diffProps(oldNode, newNode) {
  var count = 0;
  var oldProps = oldNode.props;
  var newProps = newNode.props;

  var key, value;
  var propsPatches = {};

  // Find out different properties
  for (key in oldProps) {
    value = oldProps[key];
    if (newProps[key] !== value) {
      count++;
      propsPatches[key] = newProps[key];
    }
  }

  // Find out new property
  for (key in newProps) {
    value = newProps[key];
    if (!oldProps.hasOwnProperty(key)) {
      count++;
      propsPatches[key] = newProps[key];
    }
  }

  // If properties all are identical
  if (count === 0) {
    return null;
  }

  return propsPatches;
}

function isIgnoreChildren(node) {
  return node.props && node.props.hasOwnProperty('ignore');
}

exports.default = diff;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12).diff


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Diff two list in O(N).
 * @param {Array} oldList - Original List
 * @param {Array} newList - List After certain insertions, removes, or moves
 * @return {Object} - {moves: <Array>}
 *                  - moves is a list of actions that telling how to remove and insert
 */
function diff (oldList, newList, key) {
  var oldMap = makeKeyIndexAndFree(oldList, key)
  var newMap = makeKeyIndexAndFree(newList, key)

  var newFree = newMap.free

  var oldKeyIndex = oldMap.keyIndex
  var newKeyIndex = newMap.keyIndex

  var moves = []

  // a simulate list to manipulate
  var children = []
  var i = 0
  var item
  var itemKey
  var freeIndex = 0

  // fist pass to check item in old list: if it's removed or not
  while (i < oldList.length) {
    item = oldList[i]
    itemKey = getItemKey(item, key)
    if (itemKey) {
      if (!newKeyIndex.hasOwnProperty(itemKey)) {
        children.push(null)
      } else {
        var newItemIndex = newKeyIndex[itemKey]
        children.push(newList[newItemIndex])
      }
    } else {
      var freeItem = newFree[freeIndex++]
      children.push(freeItem || null)
    }
    i++
  }

  var simulateList = children.slice(0)

  // remove items no longer exist
  i = 0
  while (i < simulateList.length) {
    if (simulateList[i] === null) {
      remove(i)
      removeSimulate(i)
    } else {
      i++
    }
  }

  // i is cursor pointing to a item in new list
  // j is cursor pointing to a item in simulateList
  var j = i = 0
  while (i < newList.length) {
    item = newList[i]
    itemKey = getItemKey(item, key)

    var simulateItem = simulateList[j]
    var simulateItemKey = getItemKey(simulateItem, key)

    if (simulateItem) {
      if (itemKey === simulateItemKey) {
        j++
      } else {
        // new item, just inesrt it
        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
          insert(i, item)
        } else {
          // if remove current simulateItem make item in right place
          // then just remove it
          var nextItemKey = getItemKey(simulateList[j + 1], key)
          if (nextItemKey === itemKey) {
            remove(i)
            removeSimulate(j)
            j++ // after removing, current j is right, just jump to next one
          } else {
            // else insert item
            insert(i, item)
          }
        }
      }
    } else {
      insert(i, item)
    }

    i++
  }

  function remove (index) {
    var move = {index: index, type: 0}
    moves.push(move)
  }

  function insert (index, item) {
    var move = {index: index, item: item, type: 1}
    moves.push(move)
  }

  function removeSimulate (index) {
    simulateList.splice(index, 1)
  }

  return {
    moves: moves,
    children: children
  }
}

/**
 * Convert list to key-item keyIndex object.
 * @param {Array} list
 * @param {String|Function} key
 */
function makeKeyIndexAndFree (list, key) {
  var keyIndex = {}
  var free = []
  for (var i = 0, len = list.length; i < len; i++) {
    var item = list[i]
    var itemKey = getItemKey(item, key)
    if (itemKey) {
      keyIndex[itemKey] = i
    } else {
      free.push(item)
    }
  }
  return {
    keyIndex: keyIndex,
    free: free
  }
}

function getItemKey (item, key) {
  if (!item || !key) return void 666
  return typeof key === 'string'
    ? item[key]
    : key(item)
}

exports.makeKeyIndexAndFree = makeKeyIndexAndFree // exports for test
exports.diff = diff


/***/ }),
/* 13 */
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
/* 14 */
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