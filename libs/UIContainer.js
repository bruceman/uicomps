/**
 * Created by bruce.li on 12/07/2017.
 */

import UIComponent from './UIComponent';


/**
 * The UIContainer object is a special UI component that can contain other UI components.
 * Container component should inherit this class.
 *
 * @see UIComponent
 */
export default class UIContainer extends UIComponent {
    /**
     * Init container
     *
     * when mountPoint is omitted, should set a value by invoking setMountPoint manually.
     *
     * @param mountPoint {string|object} - the mount point for this ui component (may be CSS selector or jQuery Object) [optional]
     * @param options {any} - the component options [optional]
     */
    constructor(mountPoint, options) {
        super(mountPoint, options);
        this._components = [];
    }

    /**
     * Get container name
     *
     * Note: concrete container should override this value
     */
    getName() {
        return 'UIContainer';
    }

    /**
     * Render component by calling template function
     *
     * Note: concrete container can implement special render logic
     */
    render() {
        //render container firstly (setup entry point)
        super.render();

        if (this._components.length > 0) {
            this.willRenderChildren();
            this._components.forEach((component) => {
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
    willRenderChildren() {
    }

    /**
     * This method will be invoked after render children components
     */
    didRenderChildren() {
    }

    /**
     * Destroy component from document and clean related global resources
     */
    destroy() {
        //distroy children firstly
        this._destroyChildrenComponents();
        super.destroy();
    }

    /**
     * Add component to this container
     *
     * The new added component will not render on document util call render method of the container.
     *
     * @param component {UIComponent} - component
     * @param index {number} - which position to add, add to the end of container if omit this parameter.
     */
    addComponent(component, index) {
        if (!component) {
            throw new Error(`[${this.getName()}]: 'component' is required`);
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
    getComponent(index) {
        return this._components[index];
    }

    /**
     * Get all children components in this container
     *
     * @returns {Array}
     */
    getAllComponents() {
        return this._components;
    }

    /**
     * Get all children component count in this container
     */
    getComponentCount() {
        return this._components.length;
    }

    /**
     * Remove component at given position
     *
     * @param index
     */
    removeComponent(index) {
        if (index < this.getComponentCount()) {
            let component = this._components.splice(index,1)[0];
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
    removeAllComponents() {
        // let all children components clean their resources
        this._destroyChildrenComponents();
        this._components = [];
    }

    _destroyChildrenComponents() {
        this._components.forEach((component) => {
            component.destroy();
        });
    }

}