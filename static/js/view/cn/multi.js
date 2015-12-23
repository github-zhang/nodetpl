define(function(require, exports, module) {
  'use strict';

  var $ = require('jquery');
  var nodetpl = require('nodetpl');
  var vDialog = require('vDialog');

  $('#btn-01').on('click', function() {
    var data = {
      "name": "张三丰",
      "gender": "男",
      "age": 108
    };
    nodetpl.get('/cn/demo/tpls/2.js', data, function(d) {
      vDialog({
        title: '运行结果',
        content: d,
        width: 400,
        ok: true
      }).showModal();
    });
  });
});