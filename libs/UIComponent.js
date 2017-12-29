/**
 * Created by bruce.li on 12/07/2017.
 */

import tvdom from 'tvdom';
import EventBase from './EventBase';


/**
 * The UIComponent class is the superclass of special UI component.
 * This class define some common interface which concrete UI component should be implement.
 *
 * @see EventBase
 */
export default class UIComponent extends EventBase {
    /**
     * Init component
     *
     * when mountPoint is omitted, should set a value by invoking setMountPoint manually.
     *
     * @param mountPoint {string|object} - the mount point for this ui component (may be CSS selector or jQuery Object) [optional]
     * @param options {any} - the component options [optional]
     */
    constructor(mountPoint, options) {
        super();
        this._cid = this.generateCid();
        this.setMountPoint(mountPoint);
        this.setOptions(options);
    }

    /**
     * Get component id
     */
    getCid() {
        return this._cid;
    }

    /**
     * Generate an unique component id
     *
     * Sample: cid_yny9090snab_5307670
     */
    generateCid() {
        // random number + last 7 numbers of current time
        return 'cid_' + Math.random().toString(36).substr(2) + '_' + new Date().getTime().toString().substr(-7);
    }

    /**
     * Get component name
     *
     * Note: concrete component should override this value
     */
    getName() {
        return 'UIComponent';
    }

    /**
     * Get the mount point of this component
     * The container can be dom selector ('#id', '.clazz-name') or Jquery object ($('#id'))
     */
    getMountPoint() {
        return this._mountPoint;
    }

    /**
     * Set the mount point of this component
     *
     * Invoke this method will not re-render the component.
     *
     * @param mountPoint {string|object} - the mount point for this ui component (may be CSS selector or jQuery Object)
     */
    setMountPoint(mountPoint) {
        this._mountPoint = mountPoint;
        this._$mountPoint = $(mountPoint);
    }

    /**
     * Get passed options when init component
     *
     * @returns {any|object}
     */
    getOptions() {
        return this._options;
    }

    /**
     * Set a new options of this component
     *
     * @param options
     */
    setOptions(options) {
        this._options = options || {};
    }

    /**
     * Get the parent of this component
     *
     * @see UIContainer
     */
    getContainer() {
        return this._container;
    }

    /**
     * Set the parent of this component
     *
     * @param {UIContainer} container
     *
     * Note: the container shuold involke this method when add a new component
     */
    setContainer(container) {
        this._container = container;
    }

    /**
     * Get template function of this component
     *
     * Note: concrete component should implement this method
     */
    getTemplate() {
        throw new Error(`[${this.getName()}]: need implement this method`);
    }

    /**
     * Get the data that used to render component
     *
     * Note: concrete component should override this value
     */
    getData() {
        return {};
    }

    /**
     * Append the component to the document and show the component
     */
    mount() {
        this.willMount();
        this.render();
        this.didMount();
    }

    /**
     * Do something before component mount to the document
     */
    willMount() {
    }

    /**
     * Do something after component mounted to the document
     */
    didMount() {
    }

    /**
     * Update the component changes to the document
     *
     * @param forceUpdate {boolean} - whether force update even if UI have no changes [optional], default is false.
     */
    update(forceUpdate) {
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
    shouldUpdate() {
        //should update if not render before
        if (!this._lastRender) {
            return true;
        }
        // make sure this have no side effect to this component
        const html = this.getTemplate().call(this, (this.getData()));
        return (html != this._lastRender.html) || !this._isSameMountPoint(this.getMountPoint(), this._lastRender.mountPoint);
    }

    /**
     * Do something before component update
     */
    willUpdate() {
    }

    /**
     * Do something after component updated
     */
    didUpdate() {
    }

    /**
     * Render or re-render component by calling template function
     */
    render() {
        //using template function to render component
        const html = this.getTemplate().call(this, (this.getData())).trim();
        // generate virtual dom tree
        const tree = tvdom.parse(html);
        const lastRender = this._lastRender;
        // update component
        if (lastRender) {
            // diff two trees: last and current
            const patches = tvdom.diff(lastRender.tree, tree);
            if (!this._isEmptyObject(patches)) {
                // patch last dom tree
                tvdom.patch(lastRender.root, patches);
                // save changes
                lastRender.html = html;
                lastRender.tree = tree;
            }
        } else {
            // first time render dom tree
            const root = tree.render();
            this._$mountPoint.empty().html(root);
            // save render states
            this._lastRender = { mountPoint: this.getMountPoint(), html, tree, root}
        }
    }

    /**
     * Will be invoked before container relayout the component
     *
     * The container decide when to invoke this method, the component can save states before reflow.
     */
    willReflow() {
    }

    /**
     * Will be invoked after container relayout the component
     *
     * The container decide when to invoke this method, the component can update UI after reflow.
     *
     */
    didReflow() {
    }

    /**
     * Show component (commonly only set css display value)
     *
     * Note: this function never re-render component
     */
    show() {
        this._$mountPoint.show();
    }

    /**
     * Hide component (commonly only set css display value)
     *
     * Note: this function never re-render component
     */
    hide() {
        this._$mountPoint.hide();
    }

    /**
     * Check component whether is visible or hidden
     *
     * @returns {boolean}
     */
    isVisible() {
        const display = this._$mountPoint.css('display');
        const visibility = this._$mountPoint.css('visibility');
        return (visibility !== 'hidden' && display !== 'none');
    }

    /**
     * Get component width (px value)
     */
    getWidth() {
        return this._$mountPoint.width();
    }

    /**
     * Get component height (px value)
     */
    getHeight() {
        return this._$mountPoint.height();
    }

    /**
     * Destroy component from document and clean related global resources
     *
     * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only, default is false.
     *
     * Note: concrete component can override this method
     */
    destroy(removeMountPoint) {
        this.willDestroy();

        if (removeMountPoint) {
            this._$mountPoint.remove()
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
    willDestroy() {
    }

    /**
     * Do someting after component destroy
     */
    didDestroy() {
    }

    /**
     * find child elements by selector
     *
     * @param selector
     */
    findChildren(selector) {
        return $(this.getMountPoint()).find(selector);
    }

    /**
     * Enable trigger expression event when customer see this component
     *
     * Note: should invoke this function manually
     */
    enableExpressionEvent() {
        if (this._scrollHandler) {
            return;
        }
        // hold function ref
        this._scrollHandler = this._throttle(this._scrollEventHandler.bind(this), 200);
        $(window).on('scroll', this._scrollHandler);
    }

    _scrollEventHandler() {
        if (!this.isVisible()) {
            return;
        }

        console.log('scroll check....');

        if (this._checkComponentInView()) {
            this.emit('expression', {name: this.getName()});
            console.log('expression event fired: ', this.getName());
            // remove un-used handler to avoid performance issue
            $(window).off('scroll', this._scrollHandler);
            this._scrollHandler = null;
        }

    }

    // check the component is in view or upper the view
    _checkComponentInView() {
        const $window = $(window);
        const componentOffsetTop = this._$mountPoint.offset().top;
        const windowScrollTop = $window.scrollTop();
        const windowHeight = $window.height();
        // the component is in view or upper than current view (throttle time)
       return (windowScrollTop > (componentOffsetTop - windowHeight));
    }

    // wait a function execution
    _throttle (callback, limit) {
        let inThrottle = false;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                callback.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // compare two mount point
    _isSameMountPoint(mp1, mp2) {
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

    _isEmptyObject(obj) {
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
}
