import UIComponent from './UIComponent';
/**
 * LazyImage
 * 
 * new LazyImage('#img1', {
 *   'src': './sample.png',
 *   'retry': 2  [optional]
 * })
 */
export default class LazyImage extends UIComponent {
    constructor(mountPoint, options) {
        super(mountPoint, options);
        this._src = options.src;
        this._retry = options.retry || 2;
    }

    getName() {
        return 'LazyImage';
    }

    getTemplate() {
        return function (data) {
            return `<img class="lazy-image" id="${this.getCid()}"></img>`;
        }
    }

    didMount() {
        $(window).on('scroll resize', () => {
            console.log('scroll ....');
            this.requestScroll();
        });
    }

    // location helper

    getLoc() {
        return window.scrollY || window.pageYOffset
    }

    // debounce helpers

    requestScroll() {
        this._prevLoc = this.getLoc()
        this.requestFrame()
    }

    requestFrame() {
        if (!this._ticking) {
            window.requestAnimationFrame(() => {
                const node = document.getElementById(this.getCid());
                if (this.inViewport(node)) {
                    console.log('set src');
                    node.setAttribute('src', this._src);
                    this._ticking = true
                }
            })
            
        }
    }   

    // offset helper

    getOffset(node) {
        return node.getBoundingClientRect().top + this._prevLoc
    }

    // in viewport helper

    inViewport(node) {
        const windowHeight = window.innerHeight
        const viewTop = this._prevLoc
        const viewBot = viewTop + windowHeight

        const nodeTop = this.getOffset(node)
        const nodeBot = nodeTop + node.offsetHeight

        const offset = (20 / 100) * windowHeight

        return (nodeBot >= viewTop - offset) && (nodeTop <= viewBot + offset)
    }

}