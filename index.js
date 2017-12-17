import TestContainer from "./libs/TestContainer";
import TestComponent from "./libs/TestComponent";

import LazyImage from './libs/LazyImage';

var data = {msg: 'hello bruce', count: 1};
var comp = new TestComponent();
comp.setData(data);

var comp2 = new TestComponent();
comp2.setData({msg: 'no changes text'});

var comp3 = new TestComponent();
comp3.setData({ msg: '123123123' });

// comp.mount();

var con = new TestContainer('#container');
con.addComponent(comp);
con.addComponent(comp2);
con.addComponent(comp3);

con.mount();

setInterval(function () {
    data.msg = 'hello-' + data.count++;
    con.update();
}, 1000);

setTimeout(function() {
    //remove last
    console.log('remove comp:')
    con.removeComponent(con.getComponentCount() - 1, true);
}, 3000);

$('.img').each(function (index, img) {
    var img = new LazyImage(img, {
        src: 'http://www.2cto.com/uploadfile/Collfiles/20160922/2016092209185687.png'
    })
    img.mount();
})

// var img = new LazyImage('#img', {
//     src: 'http://www.2cto.com/uploadfile/Collfiles/20160922/2016092209185687.png'
// })

// img.mount();

console.log('index');