import UIContainer from "./UIContainer";

export default class TestContainer extends UIContainer {
    getName() {
        return 'TestContainer';
    }

    getTemplate() {
        return function () {
            var len = this.getComponentCount();
            var str = '';
            for (var i = 0; i < len; i++) {
                str += `<li id="con-${i}"></li>`;
                
            }

            return `<ul>${str}</ul>`;
        }
    }

    willRenderChildren() {
        console.log('willRenderChildren');
        for (var i = 0; i < this.getComponentCount(); i++) {
            var component = this.getComponent(i);
            component.setMountPoint('#con-' + i);
            component.setContainer(this);
            console.log(component)
        }
    }
}