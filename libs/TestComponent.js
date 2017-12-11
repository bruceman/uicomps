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
            return `<span>get data: ${data.msg}</span>`;
        }
    }
}