<!--  -->
<template>
  <div>
    <el-card class="box-card">
        <span>开始时间</span>
          <el-date-picker
            v-model="applyStartDate"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd hh:mm:ss"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
 <span>结束时间</span>
          <el-date-picker
            v-model="applyEndDate"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd hh:mm:ss"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
      <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
    </el-card>
    <el-card>  <el-button style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload">
        Export Excel
      </el-button><el-table
      :data="tableData1"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table></el-card>
      <el-card><upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
          <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
              <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
          </el-table></el-card>
    <!-- <pdf :src="src" >
    </pdf>
    <el-button @click="down">点击下载图片</el-button> -->
  </div>
</template>

<script>
//  import pdf from 'vue-pdf'
import countTo from 'vue-count-to';
 import UploadExcelComponent from '../components/UploadExcel/index.vue'
export default {
  components: {UploadExcelComponent,countTo},
  data() {
    return {
      startVal: 0,
      endVal: 78787,
        tableData: [],
        tableHeader: [],
      src:'https://qa-ytt.baiwang.com/title/saomakaipiao/previewInvoice.html?param=76E8875DB4C12E2CB75E5E7B7790689C867CF10BD383CBFD9D8AE6427092116D',
       tableData1: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
         // 审清开始结束时间
      applyStartDate: '',
      applyEndDate: '',
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  watch: {
    applyStartDate (val) {
      if (val) {
        let start = new Date(val).getTime()
        if (!this.applyEndDate) return;
        let end = new Date(this.applyEndDate).getTime()
        if (start > end) {
          this.$message.warning('请注意:开始时间<结束时间')
          this.applyStartDate = ''
        }
      }
    },
    applyEndDate (val) {
      if (val) {
        let end = new Date(val).getTime()
        if (!this.applyEndDate) return;
        let start = new Date(this.applyStartDate).getTime()
        if (start > end) {
          this.$message.warning('请注意:开始时间<结束时间')
          this.applyEndDate = ''
        }
      }
    }
  },
  methods:{
    down(){
      console.log(1)
      window.location.href = this.src
    },
    handleDownload() {
       console.log(navigator.userAgent)
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['日期', '姓名', '地址']
        const filterVal = ['date', 'name', 'address']
        const list = this.tableData1
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
      beforeUpload(file) {
          const isLt1M = file.size / 1024 / 1024 < 1

          if (isLt1M) {
              return true
          }

          this.$message({
              message: 'Please do not upload files larger than 1m in size.',
              type: 'warning'
          })
          return false
      },
      handleSuccess({ results, header }) {
          this.tableData = results
          console.log(this.tableData, header)
          this.tableHeader = header
      }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
