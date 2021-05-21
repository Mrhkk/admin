(function () {
  var newRem = function () {
    // 返回文档根节点
    var html = document.documentElement
    // html.getBoundingClientRect()返回值是一个 DOMRect 对象DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
    var lw = html.getBoundingClientRect().width
    // lw>375?lw=375:lw=lw;
    html.style.fontSize = lw / 10 + 'px'
  }
  window.addEventListener('resize', newRem, false)
  newRem()
})()
