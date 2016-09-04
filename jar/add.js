/**
 * Created by Administrator on 2016/9/3.
 */
/**
 * 定义模块
 */
define(function(require,exports,module){
      //加载模块
      var $ = require('./jquery');
      //将方法暴露出去
      exports.add = function(){
          return parseInt($('#v1').val())+parseInt($('#v2').val());
      }
})