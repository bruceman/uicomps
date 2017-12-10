import TestContainer from "./libs/TestContainer";
import TestComponent from "./libs/TestComponent";

var data = {msg: 'hello bruce'};
var comp = new TestComponent();
comp.setData(data);
// comp.mount();

var con = new TestContainer('#container');
con.addComponent(comp);
con.mount();

setTimeout(function () {
    data.msg = 'hello, linda';
    con.update();
}, 2000);

console.log('index');