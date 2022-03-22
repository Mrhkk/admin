// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export const getPdf = (id, title) => {
  // 特别重要：当页面超过一页，出现滚动条，滚动的部分生成的图片为空白
  window.pageYoffset = 0
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
 
  let url = html2Canvas(document.querySelector(id), {
    //允许跨域图片的加载
    
    // allowTaint: true,
    logging: true,
    useCORS: true,
    
    }).then(function (canvas) {
    var contentWidth = canvas.width
    var contentHeight = canvas.height
 
    // 一页pdf显示html页面生成的canvas高度;
    var pageHeight = contentWidth / 592.28 * 841.89
    // 未生成pdf的html页面高度
    var leftHeight = contentHeight
    // 页面偏移
    var position = 0
    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    var imgWidth = 595.28
    var imgHeight = 592.28 / contentWidth * contentHeight
 
    var pageData = canvas.toDataURL('image/jpeg', 1.0)
 
    var pdf = new JsPDF('', 'pt', 'a4')
 
    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    // 当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        // 避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage()
        }
      }
    }
    // 下载pdf
    pdf.save(title + '.pdf')
    // 输出base64字符串
    return pdf.output('datauristring')
  }
  )
  return url
}