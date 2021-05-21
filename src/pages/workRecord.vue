<!--  -->
<template>
  <div class="workRecord">
    <el-button type="primary" @click="bingbingbang">发射</el-button>
    <div :class="{ qiu: flag }">
      <div :class="{ qiu2: flag }"></div>
    </div>
    <el-radio-group v-model="radio2">
      <el-radio @click.native.prevent="clickitem(3)" :label="3">
        备选项</el-radio
      >
      <el-radio @click.native.prevent="clickitem(6)" :label="6">
        备选项</el-radio
      >
      <el-radio @click.native.prevent="clickitem(9)" :label="9">
        备选项</el-radio
      >
    </el-radio-group>
    <div class="box">
  <div id="preview" v-on:paste="handlePaste">
      <span>将图片按Ctrl+V 粘贴至此处</span>
  </div>
  <el-button
        v-on:click="uploadPlans"
      >上传文件</el-button>
</div>  
  </div>
</template>

<script>
import fileUpload from '../components/fileList/FileUpload'
export default {
  components: {
    fileUpload
  },
  data() {
    return {
      flag: false,
      radio2: "",
      available: true,
      comment: ''
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  watch: {
    radio2(val) {
      console.log(val);
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    // 监听粘贴操作
    handlePaste(event) {
      const items = (event.clipboardData || window.clipboardData).items;
      let file = null;

      if (!items || items.length === 0) {
        this.$message.error("当前浏览器不支持本地");
        return;
      }
      // 搜索剪切板items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          file = items[i].getAsFile();
          break;
        }
      }
      if (!file) {
        this.$message.error("粘贴内容非图片");
        return;
      }
      // 此时file就是我们的剪切板中的图片对象
      // 如果需要预览，可以执行下面代码
      const reader = new FileReader();
      reader.onload = event => {
        preview.innerHTML = `<img src="${event.target.result}">`;
      };
      reader.readAsDataURL(file);
      this.file = file;
    },
    //上传文件成功后回调
     uploadPlans() {
      let file = this.file;
      if (!file) {
        this.$message.error("请粘贴图片后上传");
        return;
      }
      this.loading = true;
      let form = new FormData();
      form.append("file", file);
      form.append("type", this.type);
    //uploadCertificate是封装的axios请求，自己根据需求传参
      uploadCertificate(form)
        .then(data => {
          if (data.data && data.data.success) {
            this.certificate_pic = data.data.data.source;
            this.$message.success(this.name + "上传成功！");
          } else {
            this.$message.error(this.name + "上传失败！");
          }
        }).catch(() => {});
    },
    clickitem(e) {
      e === this.radio2 ? (this.radio2 = "") : (this.radio2 = e);
    },
    bingbingbang() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 2000);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.qiu {
  /* background-color: red; */
  width: 50px;
  height: 50px;
  animation: da 2s 0s cubic-bezier(0, 0.43, 0, 0.9) forwards;
}
.qiu2 {
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 50%;
  animation: da2 2s 0s linear forwards;
}
@keyframes da {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(500px);
  }
}
@keyframes da2 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(600px);
  }
}
</style>
