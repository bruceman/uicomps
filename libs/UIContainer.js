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
     * Append the component to the document and show the component
     */
    mount() {
        // container mount
        super.mount();

        // children mount
        this.willMountChildren();
        this._components.forEach((component) => {
            component.mount();
        });
        this.didMountChildren();
    }

    /**
     * This method will be invoked before mount children components
     *
     * Concrete container can implement this method to setup children entry points etc.
     */
    willMountChildren() {
    }

    /**
     * This method will be invoked after mount children components
     */
    didMountChildren() {
    }

    /**
     * Update the container and children changes to the document
     *
     * @param forceUpdate {boolean} - whether force update even if UI have no changes , default is false. [optional]
     */
    update(forceUpdate) {
        // container update
        super.update(forceUpdate);

        // children update
        this.willUpdateChildren(forceUpdate);
        this._components.forEach((component) => {
            component.update(forceUpdate);
        });
        this.didUpdateChildren(forceUpdate);
    }

    /**
     * This method will be invoked before update children components
     *
     * @param forceUpdate {boolean} - whether force update even if UI have no changes , default is false. [optional]
     */
    willUpdateChildren(forceUpdate) {
    }

    /**
     * This method will be invoked after update children components
     *
     * @param forceUpdate {boolean} - whether force update even if UI have no changes , default is false. [optional]
     */
    didUpdateChildren(forceUpdate) {
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
     * @param index {integer} - component index position
     * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only
     */
    removeComponent(index, removeMountPoint) {
        if (index < this.getComponentCount()) {
            const component = this._components.splice(index, 1)[0];
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
    removeAllComponents(removeMountPoint) {
        // let all children components clean their resources
        this._destroyChildrenComponents(removeMountPoint);
        this._components = [];
    }

    /**
     * Destroy component from document and clean related global resources
     *
     * @param removeMountPoint {boolean} - remove mount point if true otherwise remove component dom only
     */
    destroy(removeMountPoint) {
        //distroy children firstly
        this._destroyChildrenComponents(removeMountPoint);
        super.destroy(removeMountPoint);
    }

    _destroyChildrenComponents(removeMountPoint) {
        this._components.forEach((component) => {
            component.destroy(removeMountPoint);
        });
    }

}
