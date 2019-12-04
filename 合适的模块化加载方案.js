commonJS
//引入
var store = require("store")
//输出
exports = function () {
    return store.get('customers')
}


//nodeJS module
var store = require('store')

function customers () {
    return store.get("customers")
}
module.exports = customers

//requireJS
<script data-main="scripts/main" src="scripts/require.js"></script>

//seaJS
define(function(require, exports, module) {

})
或者
define ('module',['module1','module2'], function(require,exports,module) {

})


AMD




CMD

ES6 import

//square.js
export function square(x) {
    return x*x
}

//main.js
import {square} from 'square'
console.log(square(10))
