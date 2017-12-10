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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TestContainer = __webpack_require__(4);

var _TestContainer2 = _interopRequireDefault(_TestContainer);

var _TestComponent = __webpack_require__(1);

var _TestComponent2 = _interopRequireDefault(_TestComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = { msg: 'hello bruce' };
var comp = new _TestComponent2.default();
comp.setData(data);
// comp.mount();

var con = new _TestContainer2.default('#container');
con.addComponent(comp);
con.mount();

setTimeout(function () {
    data.msg = 'hello, linda';
    con.update();
}, 2000);

console.log('index');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UIComponent2 = __webpack_require__(2);

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
            console.log(this);
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
                return '<span>get data: ' + data.msg + '</span>';
            };
        }
    }]);

    return TestComponent;
}(_UIComponent3.default);

exports.default = TestComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventBase2 = __webpack_require__(3);

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

    _this.setMountPoint(mountPoint);
    _this.setOptions(options);
    return _this;
  }

  /**
   * Get component name
   *
   * Note: concrete component should override this value
   */


  _createClass(UIComponent, [{
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
     */

  }, {
    key: 'update',
    value: function update() {
      this.willUpdate();
      this.render();
      this.didUpdate();
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
      this._$mountPoint.empty().html(html);
      this.show();
    }

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
      if (removeMountPoint) {
        this._$mountPoint.remove();
      } else {
        this._$mountPoint.empty();
      }
    }
  }]);

  return UIComponent;
}(_EventBase3.default);

exports.default = UIComponent;

/***/ }),
/* 3 */
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

// export default EventBase;


exports.default = EventBase;

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
                console.log(component);
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

var _UIComponent2 = __webpack_require__(2);

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
         * Render component by calling template function
         *
         * Note: concrete container can implement special render logic
         */

    }, {
        key: 'render',
        value: function render() {
            //render container firstly (setup entry point)
            _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), 'render', this).call(this);

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
         * Destroy component from document and clean related global resources
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            //distroy children firstly
            this._destroyChildrenComponents();
            _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), 'destroy', this).call(this);
        }

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
         * @param index
         */

    }, {
        key: 'removeComponent',
        value: function removeComponent(index) {
            if (index < this.getComponentCount()) {
                var component = this._components.splice(index, 1)[0];
                // let component clean its resources
                if (component.destroy) {
                    component.destroy();
                }
                return component;
            }
        }

        /**
         * Remove all children components in this container
         */

    }, {
        key: 'removeAllComponents',
        value: function removeAllComponents() {
            // let all children components clean their resources
            this._destroyChildrenComponents();
            this._components = [];
        }
    }, {
        key: '_destroyChildrenComponents',
        value: function _destroyChildrenComponents() {
            this._components.forEach(function (component) {
                component.destroy();
            });
        }
    }]);

    return UIContainer;
}(_UIComponent3.default);

exports.default = UIContainer;

/***/ })
/******/ ]);