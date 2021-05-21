<template>
  <div class="FileUploadComp" v-loading="loading21">
    <div>{{getClipBackVal?'':''}}</div>
    <form class="FileCompForm" :id="lalala" enctype="multipart/form-data">
      <div class="FileCompFormIcon" v-on:click="Ttest">
        <img src="../../assets/img/fujian.png" alt />
      </div>
      <div class="FileCompIptWrap">
        {{buttonStr}}
        <input type="file" class="aaa" :disabled="commentDis" name="file" ref="referenceUpload" :id="lalala + '_myfile2'" @change="getFileName" />
      </div>
      <div style="margin-top: 6px; margin-left: 6px;" v-if="clipboard">
        <div style="width: 110px; height: 26px; overflow: hidden; border: 1px solid #99D3F5; border-radius: 4px; padding-left: 2px;">
          <textarea style="border: none; width: 105px; height: 100%; line-height: 24px; resize: none; font-size: 12px;" :id="slipTextareaId" placeholder="此处粘贴截图"
            v-bind:value="textareaVal" @keydown="slipKeydown" @paste="pasting"></textarea>
        </div>
      </div>
    </form>
    <div style="font-size: 12px; text-align: left;margin-top: 5px">
      <span style="color: #f00" v-if="fileListComment.length === 5">
        最多选择
        <span style="font-size: 16px;font-weight: bold;">{{fileListComment.length}}</span>
        个{{selectType}}:
      </span>
      <span v-if="fileListComment.length < 5">已选<span style="color: #409EFF;font-size: 16px;font-weight: bold;">{{fileListComment.length}}</span>个{{selectType}}:</span>
      <span style="color: #409EFF" v-if="fileListComment.length > 0" v-for="(file, index) in fileListComment" v-bind:key="index">
        <span style="color: #333" @click="FilePreEmitFuc(file.previewUrl, file.fileName, file.attachmentId)">{{index+1}}、{{file.fileName}}</span>
        <div style="color: #409EFF;display: inline-block;cursor: pointer;" class="el-icon-close" @click="delUploadFileComment(file.attachmentId)"></div>&nbsp;&nbsp;
      </span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// import { apiHost } from '../../config'
// import otherService from '../../client/other.service'
export default {
  name: 'FileUploadCompPms',
  props: {
    clearInfo: {
      type: Boolean,
      default: false
    },
    /** 是否支持截图上传 由父组件传值设定 商品档案暂不支持 */
    clipboard: {
      type: Boolean,
      default: true
    },
    /** 商品档案截图上传 父组件传值'1', 非商品档案可不传 */
    goodsFlag: {
      type: String,
      default: '0'
    },
    fileFormId: {
      type: String,
      default: '选择文件'
    },
    FileDataList: {
      // type: Array,
      // default: []
    },
    buttonStr: {
      type: String,
      default: '选择文件'
    },
    selectType: {
      type: String,
      default: '附件'
    },
    filUrl: {
      type: String,
      default: '/file/uploadFile'
    },
    cutUrl: {
      type: String,
      default: '/refundBillImg/uploadBase64ForRefund'
    },
    limtImg: {
      type: Boolean,
      default: false
    },
    // 区分不同表单上传
    mType: {
      type: String,
      default: ''
    },
    // 区分一个表单多个上传
    billType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      lalala: '',
      textareaVal: '',
      loading21: false,
      uploadFileName: '',
      uploadFileRe: '',
      commentDis: false,
      fileListComment: [],
      fileListCommentLen: 0,
      slipKK: false,
      hhhh: '',
      slipPreSrc: '',
      base64Data: '',
      slipTextareaId: '',
      callUploadBoo: false,
      imgId: '' // 删除文件的id
    }
  },
  created () {
    // var that = this
    // this.$store.state.uploadCount = this.$store.state.uploadCount + 1
    // this.lalala = 'lala_' + this.$store.state.uploadCount
    // this.slipTextareaId = 'slipTextareaId_' + this.$store.state.uploadCount
  },
  mounted: function () {
    // this.$nextTick(() => {
    //   var that = this
    //   if (this.clipboard) {
    //     var slipTextarea = document.getElementById(that.slipTextareaId)
    //     console.log(slipTextarea)
    //     slipTextarea.addEventListener('paste', function (event) {
    //       event.preventDefault()
    //       var data = event.clipboardData || window.clipboardData
    //       if (data.items[0].getAsFile()) {
    //       } else {
    //         that.$message.warning('此处只可粘贴截图内容')
    //         that.textareaVal = ''
    //       }
    //       var blob = data.items[0].getAsFile()
    //       // 判断是不是图片，最好通过文件类型判断
    //       if (blob && !that.commentDis) {
    //         var reader = new FileReader()
    //         // 将文件读取为 DataURL
    //         reader.readAsDataURL(blob)
    //         // 文件读取完成时触发
    //         reader.onload = function (event) {
    //           // 获取base64流
    //           that.slipPreSrc = event.target.result
    //           that.$store.state.slipPreSrc = event.target.result
    //           that.$store.state.slipTextareaId = that.slipTextareaId
    //           that.$store.state.slipPreShow = true
    //           that.base64Data = event.target.result
    //           // that.slipImgUpload(event.target.result)
    //         }
    //       }
    //     }, false)
    //   }
    // })
  },
  watch: {
    textareaVal (val, old) {
      if (val) {
        this.textareaVal = ''
      }
    },
    tableDateGoods: {
      deep: true,
      handler: function (newV, oldV) {
        if (oldV.length > 0 && newV) {
          var totleRefundVal = 0
          for (var i = 0; i < newV.length; i++) {
            if (newV[i].refundAmount && parseFloat(newV[i].refundAmount)) {
              totleRefundVal = totleRefundVal + parseFloat(newV[i].refundAmount)
            }
          }
          this.refundAmount = totleRefundVal > 0 ? totleRefundVal : ''
        }
      }
    },
    FileDataList: {
      deep: true,
      handler: function (val, old) {
        if (val) {
          if (val.length > 0 && val[0].id) {
            for (var k = 0; k < val.length; k++) {
              val[k].attachmentId = val[k].id
            }
          }
          this.fileListComment = val
          if (val.length >= 5) {
            this.commentDis = true
          }
        }
      }
    },
    clearInfo (val, old) {
      var that = this
      if (val) {
        that.fileListComment = []
        $('#' + that.lalala + '_myfile2').val('')
        that.uploadFileName = ''
      }
    },
    fileListCommentLen: function (val, oVal) {
      if (val >= 5) {
        this.commentDis = true
      } else if (val < 5) {
        this.commentDis = false
      }
    }
  },
  computed: {
    getClipBackVal: function () {
      var that = this
      that.callUploadBoo = this.$store.state.clipBackVal
      if (that.$store.state.clipBackVal) {
        if (that.$store.state.slipTextareaId === that.slipTextareaId) {
          that.slipImgUpload(that.base64Data)
        }
      } else {
        that.$store.state.slipPreShow = false
      }
      return this.$store.state.clipBackVal
    }
  },
  methods: {
    pasting (event) {
      var that = this
      if (this.clipboard) {
        // var slipTextarea = document.getElementById(that.slipTextareaId)
        event.preventDefault()
        var data = event.clipboardData || window.clipboardData
        if (data.items[0].getAsFile()) {
        } else {
          that.$message.warning('此处只可粘贴截图内容')
          that.textareaVal = ''
        }
        var blob = data.items[0].getAsFile()
        // 判断是不是图片，最好通过文件类型判断
        if (blob && !that.commentDis) {
          var reader = new FileReader()
          // 将文件读取为 DataURL
          reader.readAsDataURL(blob)
          // 文件读取完成时触发
          reader.onload = function (event) {
            // 获取base64流
            that.slipPreSrc = event.target.result
            that.$store.state.slipPreSrc = event.target.result
            that.$store.state.slipTextareaId = that.slipTextareaId
            that.$store.state.slipPreShow = true
            that.base64Data = event.target.result
            // that.slipImgUpload(event.target.result)
          }
        }
      }
    },
    Ttest: function () {
      // this.log('Ttest:===>:', this.fileListComment)
    },
    ttttest: function () {
      var that = this
      if (that.FileDataList) {
        this.fileListComment = that.FileDataList
        if (that.FileDataList.length >= 5) {
          this.commentDis = true
        }
      }
    },
    slipKeydown: function (e) {
      // var that = this
      if (e.keyCode === 86) {
      }
    },
    async slipImgUpload (baseData) {
      var that = this
      // let res = await otherService.uploadFile({baseImg: baseData})
      // if (res) {
      //   that.$store.state.clipBackVal = false
      //   that.$store.state.slipPreShow = false
      //   var testArr = []
      //   that.loading21 = false
      //   var obj = {
      //     attachmentId: res.id,
      //     fileName: res.fileName,
      //     previewUrl: res.previewUrl
      //   }
      //   for (var u = 0; u < that.fileListComment.length; u++) {
      //     var oobj = {
      //       attachmentId: that.fileListComment[u].attachmentId,
      //       fileName: that.fileListComment[u].fileName,
      //       previewUrl: that.fileListComment[u].previewUrl
      //     }
      //     testArr.push(oobj)
      //   }
      //   testArr.push(obj)
      //   that.fileListComment = testArr
      //   that.fileListCommentLen = that.fileListComment.length
      //   that.$message({
      //     type: 'success',
      //     message: '文件上传成功'
      //   })
      //   that.$emit('FileDataEmit', that.fileListComment)
      // } else {
      //   that.loading21 = false
      // }
    },
    FilePreEmitFuc: function (previewUrl, fileName, attachmentId) {
      var that = this
      // this.log('previewUrl:', previewUrl)
      // this.log('fileName:', fileName)
      if (that.isImage(fileName)) {
        that.$store.state.imgPreviewSrc = previewUrl
        that.$store.state.imgPreviewShow = true
      } else {
        this.$message({
          message: '文件非图片，不能在线查看，请下载',
          type: 'warning'
        })
      }
      // this.imgPreview(previewUrl, fileName)
    },
    getFileName: function (filename) {
      var that = this
      var filePath = $('#' + that.lalala + '_myfile2').val()
      var arr = filePath.split('\\')
      var fileName = arr[arr.length - 1]
      if (filePath) {
        if (that.limtImg) {
          if (that.isImage(fileName)) {
            this.uploadFileName = fileName
            that.addMarkInfo4(filename)
          } else {
            this.$message.warning('请上传图片')
            this.uploadFileName = ''
          }
        } else {
          that.addMarkInfo4(filename)
          this.uploadFileName = fileName
        }
        // that.addMarkInfo4()
      }
    },
    delUploadFileComment (id) {
      var that = this
      that.imgId = id
      that.$confirm('确认删除此附件，确定删除？', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await otherService.deleteFile({id: that.imgId})
        if (res) {
          that.$message.success('删除成功！')
          for (var i = 0; i < that.fileListComment.length; i++) {
            if (id === that.fileListComment[i].attachmentId) {
              that.fileListComment.splice(i, 1)
            }
          }
          that.$emit('FileDataEmit', that.fileListComment)
          that.fileListCommentLen = that.fileListComment.length
          $('#myfile2').val('')
        }
        // that.ajax(apiHost + '/file/deleteFile', JSON.stringify({ id: id })).then(res => {
        //   // this.log('选择所属项目:', res)
        //   if (res.code === 200) {
        //     that.$message.success('删除成功！')
        //     for (var i = 0; i < that.fileListComment.length; i++) {
        //       if (id === that.fileListComment[i].attachmentId) {
        //         that.fileListComment.splice(i, 1)
        //       }
        //     }
        //     that.$emit('FileDataEmit', that.fileListComment)
        //     that.fileListCommentLen = that.fileListComment.length
        //     $('#myfile2').val('')
        //   }
        // })
      }).catch(() => {
        return false
      })
    },
    addMarkInfo4 (filename) {
      var that = this
      that.loading21 = true
      var url = apiHost
      var formData = new FormData($('#' + that.lalala)[0])
      // formData.append('mType', that.mType)
      // formData.append('billType', that.billType)
      if (formData) {
        $.ajax({
          type: 'post',
          url: url + this.filUrl,
          data: formData,
          // beforeSend: function (XMLHttpRequest) {
          //   XMLHttpRequest.setRequestHeader('token', sessionStorage.getItem('token'))
          // },
          headers: {
            'Access-Token': sessionStorage.getItem('token')
          },
          cache: false,
          processData: false,
          contentType: false,
          crossDomain: true,
          xhrFields: {
            withCredentials: true
          }
        }).then(function (data) {
          console.log(data)
          if (data.code === 200) {
            filename.target.value = ''
            if (data.data) {
              var testArr = []
              var obj = {
                attachmentId: data.data.id,
                fileName: data.data.fileName,
                previewUrl: data.data.previewUrl
              }
              for (var u = 0; u < that.fileListComment.length; u++) {
                var oobj = {
                  attachmentId: that.fileListComment[u].attachmentId,
                  fileName: that.fileListComment[u].fileName,
                  previewUrl: that.fileListComment[u].previewUrl
                }
                testArr.push(oobj)
              }
              testArr.push(obj)
              that.fileListComment = testArr
              that.fileListCommentLen = that.fileListComment.length
            }
            that.loading21 = false
            that.$message({
              type: 'success',
              message: '文件' + data.msg
            })
            that.$emit('FileDataEmit', that.fileListComment)
          } else if (data.code === 300) {
            that.$message({
              type: 'error',
              message: data.msg
            })
            that.loading21 = false
          } else {
            that.$message({
              type: 'error',
              message: data.msg
            })
          }
        })
      } else {
        that.$message({
          type: 'error',
          message: '内容不能为空'
        })
        that.loading21 = false
      }
    }
  }
}
</script>

<style scoped>
div img {
  width: 100%;
}
.FileUploadComp {
}
.FileCompForm {
  display: flex;
}
.FileCompFormIcon {
  box-sizing: border-box;
  width: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
}
.FileCompFormIcon img {
  width: 15px;
  height: 15px;
}
.FileCompIptWrap {
  position: relative;
  width: 85px;
  white-space: nowrap;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 0px 12px;
  overflow: hidden;
  color: #1e88c7;
  line-height: 20px;
  margin-top: 6px;
  line-height: 24px;
}
.FileCompIptWrap input {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.FileCompIptWrap:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
}
.FileCompIptText {
  padding-top: 10px;
  margin-left: 10px;
}
</style>
