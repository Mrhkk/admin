<!--  -->
<template>
  <div class="kaiTest">
    <div class="contain">
      <img :src="changeSize ? imgSrc : imgSrc1" alt="" />
    </div>
    <el-button type="primary" @click="addS">vueX计算属性</el-button>
    {{ getToDo }}
    <el-button type="primary" @click="addC">组件内计算属性</el-button>
    {{ addCount }}
    <slider :min="0" :max="100" v-model="per" />
    <el-button type="primary" @click="exportExcel">学而思</el-button>
  </div>
</template>

<script>
import imgSrc from "../assets/activity.png";
import imgSrc1 from "../assets/activity-active.png";
import { mapGetters } from "vuex";
import slider from "@/components/UploadExcel/slider.vue";
import axios from "axios";
import $ from 'jquery'
export default {
  components: {
    slider
  },
  data() {
    return {
      per: 0,
      imgSrc,
      imgSrc1,
      timer: null,
      changeSize: false,
      count: 1
    };
  },
  computed: {
    ...mapGetters([
      //此处的 count 与以下 store.js 文件中 getters 内的 count 相对应
      "getToDo"
    ]),
    addCount() {
      return this.count + 2;
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.getToDo)
    this.timer = setInterval(() => {
      this.changeSize = !this.changeSize;
    }, 600);
  },
  methods: {
    exportExcel: function() {
      $.ajax({
          url: "/api/v1/admin/report/export/orange/pool/20210501/20210520",
          type: 'GET',
          responseType: "blob",
          success: function (data) {
            // 创建下载的链接
        const url = window.URL.createObjectURL(
          new Blob(
            [data.data],
            // 设置该文件的mime类型，这里对应的mime类型对应为.xlsx格式
            {
              type:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }
          )
        );
        const link = document.createElement("a");
        link.href = url;
        // 从header中获取服务端命名的文件名
        link.setAttribute("download", "ee.xlsx");
        document.body.appendChild(link);
        link.click();
      },
      error: function (data) {
        console.log('ajax请求错误', data)
        if (window.location.href.indexOf('FileLinkList') >= 0) {
          // j
        } else {
          router.push('/Login')
        }
      }
      })
    //   axios({
    //     url: "/api/v1/admin/report/export/orange/pool/20210501/20210520",
    //     method: "get",
    //     responseType: "blob",
    //     headers: {
    //       Authorization:
    //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NDk4MzJqbmNhc2JpZGhxd2V5OThxM2hvbmhkZm9pYXN1MjMiLCJpYXQiOjE2MjE1MDM3NDAsImV4cCI6MTYyMTU5MDE0MCwianRpIjoiMSJ9.L40vGNbPpaJx3Tezb4cDsF7WMC20f4SQCUF0I8HeOCk"
    //     }
    //   }).then(res => {
    //     // 创建下载的链接
    //     const url = window.URL.createObjectURL(
    //       new Blob(
    //         [res.data],
    //         // 设置该文件的mime类型，这里对应的mime类型对应为.xlsx格式
    //         {
    //           type:
    //             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    //         }
    //       )
    //     );
    //     const link = document.createElement("a");
    //     link.href = url;
    //     // 从header中获取服务端命名的文件名
    //     link.setAttribute("download", "ee.xlsx");
    //     document.body.appendChild(link);
    //     link.click();
    //   });
    },
    addS() {
      this.$store.dispatch("addAsync").then(() => {
        console.log(this.getToDo, this.$store.state.Number);
      });
    },
    addC() {
      this.count += 1;
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.kaiTest {
  width: 100%;
  height: calc(100% - 32px);
  display: flex;
  align-items: center;
}
.contain {
  width: 100%;
  text-align: center;
}
</style>
