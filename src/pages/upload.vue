<template>
  <div>
    <el-upload
      action="http://10.0.1.171:8303/srmApi/qualityInspectionFile/upload"
      :multiple="true"
      
      list-type="picture-card"
      :data="{
        fileType: 8,
        materialCode: '6970713165539'
      }"
      :file-list="fileList"
      :before-upload="handleBeforeUpload"
      :on-preview="handlePictureCardPreview"
      :on-success="uploadSuccess"
      :on-remove="handleRemove"
    >
      <i slot="default" class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-dialog append-to-body :visible.sync="dialogVisible">
      <el-image width="100%" :src="dialogImageUrl" alt="" :preview-src-list="[dialogImageUrl]"/>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      dialogVisible: false,
      files: [],
      dialogImageUrl: ''
    };
  },
  methods: {
    handleDownload(file) {
    window.location.href = `http://10.0.1.171:8303/srmApi/qualityInspectionFile/download?id=${file.id}`
    },
    handleBeforeUpload(file, fileList) {
      const isLt2M = file.size < 1024 * 1024 * 100;
      if (!isLt2M) {
        this.$message.error("上传文件大小不能超过 100MB!");
      }
      this.disabled = true;
      return isLt2M;
    },
    handlePictureCardPreview(file) {
      if (file.isImg === false) {
        this.handleDownload(file);
        return;
      }
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadSuccess(response, file, fileList) {
      if (response && response.code === 200) {
        this.files.push(response.data);
        let file1 = file.raw;
        const isImage =
          file1.type === "image/png" ||
          file1.type === "image/gif" ||
          file1.type === "image/jpg" ||
          file1.type === "image/jpeg" ||
          file1.type === "image/bmp" ||
          file1.type === "image/webp";
        if (!isImage) {
          file.isImg = false;
          file.url =
            "http://baho-file.oss-cn-hangzhou.aliyuncs.com/baho/hekk/2021-07/2021-07-29/20210730145411117.png?Expires=1942988051&OSSAccessKeyId=LTAI4FyW52rsc8qoQKmccwEH&Signature=QgkReX%2FtjKXmXU9gwXR%2FA4xMf64%3D";
        }
      }
      fileList.map(item => {
        if (
          item.response &&
          item.response.code === 200 &&
          item.response.data.id
        ) {
          item.id = item.response.data.id;
        }
        return item;
      });
    },
    async handleRemove(file, inx) {
      if (file.status === 'ready') {
        return
      }
      if (file.response) {
        file = file.response.data
      }
      const params = {
        id: file.id
      }
      let res = await planService.deleteFileItem(params)
      if (!res) {
        return
      }
      let index = this.files.map(item => item.id).indexOf(file.id)
      // 删除 文件
      index !== -1 && this.files.splice(index, 1)

      this.$refs.upload[inx].clearFiles()
      // this.setBottomFile(this.files)
      // this.bottomFile['filelist' + (inx + 1)] = this.files.filter(item => {
      //   item.url = item.previewUrl
      //   return item.fileType === inx + 1
      // })
      let fileTypeArr = ['jpg', 'png', 'jpeg', 'gif', 'webp', 'bmp']
      this.$refs.upload[inx].fileList = this.files.filter(item => {
        let a = item.fileName.split('.')
        let fileType = a[a.length - 1]
        if (!fileTypeArr.includes(fileType)) {
          item.url =
            'http://baho-file.oss-cn-hangzhou.aliyuncs.com/baho/hekk/2021-07/2021-07-29/20210730145411117.png?Expires=1942988051&OSSAccessKeyId=LTAI4FyW52rsc8qoQKmccwEH&Signature=QgkReX%2FtjKXmXU9gwXR%2FA4xMf64%3D'
        } else {
          item.url = item.previewUrl
        }
        return item.fileType === inx + 1
      })
    },
  }
};
</script>
<style>
.el-upload-list{
    display: flex;
    flex-wrap: wrap;
}
.el-upload-list--picture .el-upload-list__item {
 width: 150px;
 padding: 10px;
 display: flex;
 flex-direction: column;
 height: auto;
}
.el-upload-list--picture .el-upload-list__item-thumbnail {
    margin-left: 0;
    width: 100px;
    height: 100px;
}
.el-upload-list--picture .el-upload-list__item.is-success .el-upload-list__item-name {
  line-height: 20px;
  font-size: 12px;
}
.el-upload-list__item-name {
    margin-right: 0;
}
.el-image-viewer__wrapper {
    z-index: 3000!important;
}
</style>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
