define(function(require, exports, module) {
  'use strict';

  var $ = require('jquery');
  var nodetpl = require('nodetpl');
  var vDialog = require('vDialog');

  $('#btn-01').on('click', function() {
    var data = {
      "title": "个人爱好",
      "favor": ["足球", "篮球", "乒乓球", "琉璃球"]
    };
    nodetpl.get('/cn/demo/tpls/1.js', data, function(d) {
      vDialog({
        title: '运行结果',
        content: d,
        width: 400,
        ok: true
      }).showModal();
    });
  });

  $('#btn-02').on('click', function() {
    var data = {
      "title": "个人爱好",
      "favor": ["足球", "篮球", "乒乓球", "琉璃球"]
    };
    nodetpl.get('http://www.nodetpl.com/cn/demo/tpls/1.tpl', data, function(d) {
      vDialog({
        title: '运行结果',
        content: d,
        width: 400,
        ok: true
      }).showModal();
    });
  });

  $('#btn-03').on('click', function() {
    var data = {
      "title": "个人爱好",
      "favor": ["足球", "篮球", "乒乓球", "琉璃球"]
    };
    var content = document.getElementById('favor-tpl').innerHTML;
    nodetpl.render(content, data, function(d) {
      vDialog({
        title: '运行结果',
        content: d,
        width: 400,
        ok: true
      }).showModal();
    });
  });
});