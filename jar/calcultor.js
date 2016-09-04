/**
 * Created by Administrator on 2016/9/3.
 */
/**
 * exports  是module.exports的别名。
 *
 */
define(function(require,exports,module){
      exports.add = require('./add').add;
})