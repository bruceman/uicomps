var parse = require('./parse');

var tree = parse('<div class="cls" id="id100">123123<span>aaa<h1>ddd</h1></span><br></div>');

console.dir(tree, { depth: 10});