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
      <el-button v-on:click="uploadPlans">上传文件</el-button>
    </div>
    <div>
      <template>
        <el-select
          collapse-tags
          multiple
          v-model="value"
          filterable
          placeholder="请选择"
          @change="selectAll"
          clearable
        >
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
    </div>
  </div>
</template>

<script>
import fileUpload from "../components/fileList/FileUpload";
export default {
  components: {
    fileUpload
  },
  data() {
    return {
      flag: false,
      radio2: "",
      available: true,
      comment: "",
      cities: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: [],
      oldOptions: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    const allSelect = {
      value: "allSelect",
      label: "全选"
    };
    this.cities.unshift(allSelect);
  },
  watch: {
    radio2(val) {
      console.log(val);
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    selectAll(valArr) {
      const allIdArr = [];
      // 保存所有选项的id
      for (const argumentId of this.cities) {
        allIdArr.push(argumentId.value);
      }
      const oldVal = this.oldOptions.length === 1 ? this.oldOptions[0] : [];
      // 当前选中的有'全选'
      if (valArr.includes("allSelect")) {
        this.value = allIdArr;
      }
      // 旧数据包含'全选'，当前选中数据不包含全选
      if (oldVal.includes("allSelect") && !valArr.includes("allSelect")) {
        this.value = [];
      }
      // 旧数据包含'全选'，当前选中数据包含全选
      if (oldVal.includes("allSelect") && valArr.includes("allSelect")) {
        const index = valArr.indexOf("allSelect");
        valArr.splice(index, 1); // 排除全选选项
        this.value = valArr;
      }
      // 旧数据不包含'全选'，当前选中数据不包含'全选'
      if (!oldVal.includes("allSelect") && !valArr.includes("allSelect")) {
        console.log(11);
        // 除了全选外 其他全部选中时
        if (valArr.length === allIdArr.length - 1) {
          this.value = ["allSelect"].concat(valArr);
        }
      }
      // 数据发生变化时保存数据，作为下次对比的旧数据
      this.oldOptions[0] = this.value;
    },
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
        })
        .catch(() => {});
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
