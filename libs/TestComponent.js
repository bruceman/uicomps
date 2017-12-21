import UIComponent from './UIComponent';

export default class TestComponent extends UIComponent {
    getName() {
        return 'TestComponent';
    }

    getData() {
        return this._data;
    }

    render() {
        super.render();
    }

    setData(data) {
        this._data = data;
    }

    getTemplate() {
        return function (data) {
            return `<div><h2>my title</h2><span>get data: ${data.msg}</span></div>`;
        }
    }
}