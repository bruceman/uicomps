import TestContainer from "./libs/TestContainer";
import TestComponent from "./libs/TestComponent";

var data = {msg: 'hello bruce', count: 1};
var comp = new TestComponent();
comp.setData(data);

var comp2 = new TestComponent();
comp2.setData({msg: 'no changes text'});

// comp.mount();

var con = new TestContainer('#container');
con.addComponent(comp);
con.addComponent(comp2);
con.mount();

setInterval(function () {
    data.msg = 'hello-' + data.count++;
    con.update();
}, 1000);

console.log('index');