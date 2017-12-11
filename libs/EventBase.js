/**
 * Created by bruce.li on 11/28/2017.
 */

/**
 * Implement base event functions
 */
export default class EventBase {

    /**
     * Get all listeners of given event
     *
     * @param name {string} - event name
     * @returns {array} - return all registered listeners of event
     */
    getListeners(name) {
        if (!name) {
            throw new Error('[EventBase.getListeners] "name" is required');
        }

        let events = this._getEvents();
        let listeners = events[name];

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
    emit(name, data) {
        if (!name) {
            throw new Error('[EventBase.emit] "name" is required');
        }

        let listeners = this.getListeners(name);
        // keep running order consistent with register order
        listeners.forEach((listener) => {
            try {
                listener.callback.call(this, data);
            } catch (err) {
                this._log(err);
            }
        });

        let j = listeners.length;
        // remove once listeners
        while(--j >= 0) {
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
    on(name, listener) {
        if (!name || !listener) {
            throw new Error('[EventBase.on] "name" and "listener" are required');
        }

        if (typeof listener != 'function') {
            throw new Error('[EventBase.on] "listener" must be a function');
        }

        let listeners = this.getListeners(name);

        if (this._indexOfListener(listeners, listener) >= 0) {
            this._log(`Warning: register listener multiple times on same event "${name}"`);
        }

        listeners.push({callback:listener, once:false});

        return this;
    }

    /**
     * Register a listener on given event, the listener will be removed after run once.
     *
     * @param name {string} - event name
     * @param listener {function} - listener
     * @returns {EventBase}
     */
    once(name, listener) {
        if (!name || !listener) {
            throw new Error('[EventBase.on] "name" and "listener" are required');
        }

        if (typeof listener != 'function') {
            throw new Error('[EventBase.on] "listener" must be a function');
        }

        let listeners = this.getListeners(name);

        if (this._indexOfListener(listeners, listener) >= 0) {
            this._log(`Warning: register listener multiple times on same event "${name}"`);
        }

        listeners.push({callback:listener, once:true});

        return this;
    }


    /**
     * Remove a registered listener on given event
     *
     * @param name {string} - event name
     * @param listener {function} - listener
     * @returns {EventBase}
     */
    off(name, listener) {
        if (!name || !listener) {
            throw new Error('[EventBase.off] "name" and "listener" are required');
        }

        let listeners = this.getListeners(name);
        let ind = this._indexOfListener(listeners, listener);

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
    removeAllListeners(name) {
        if (!name) {
            throw new Error('EventBase.removeAllListeners] "name" is required');
        }

        let events = this._getEvents();

        if (events.hasOwnProperty(name)) {
            delete events[name];
        }

        return this;
    }

    /**
     * Print all event and related listeners information, it is a helpful method for debugging.
     */
    stats() {
        let events = this._getEvents();

        for(let name in events) {
            let listeners = events[name];
            this._log("==================================================");
            this._log('Event:' + name + ', Listeners: ' + listeners.length);
            this._log("--------------------------------------------------");
            // print all listeners info
            for(let i=0; i<listeners.length; i++) {
                this._log(listeners[i]);
            }

            if (listeners.length === 0) {
                this._log('No Listeners');
            }
        }
    }

    // events contain all registered listeners info
    _getEvents() {
        return this._events || (this._events = {});
    };

    // find callback function index
    _indexOfListener(listeners, callback) {
        let i = listeners.length;

        while (i--) {
            if (listeners[i].callback === callback) {
                return i;
            }
        }

        return -1;
    }

    _log(data) {
        if (console && console.log) {
            console.log(data);
        }
    }

}
