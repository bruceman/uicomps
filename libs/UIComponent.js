/**
 * Created by bruce.li on 12/07/2017.
 */

import  EventBase from './EventBase'


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
        this.setMountPoint(mountPoint);
        this.setOptions(options);
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
     */
    update(){
        this.willUpdate();
        this.render();
        this.didUpdate();
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
        let html = this.getTemplate().call(this, (this.getData()));
        this._$mountPoint.empty().html(html);
        this.show();
    }

    /**
     * Show component (commonly only set css display value)
     *
     * Note: this function never re-render component
     */
    show() {
        this._$mountPoint.show();
        this._visible = true;
    }

    /**
     * Hide component (commonly only set css display value)
     *
     * Note: this function never re-render component
     */
    hide() {
        this._$mountPoint.hide();
        this._visible = false;
    }

    /**
     * Check component whether is visible
     *
     * @returns {boolean}
     */
    isVisible() {
        return !!this._visible;
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
        if (removeMountPoint) {
            this._$mountPoint.remove()
        } else {
            this._$mountPoint.empty();
        }
    }
}