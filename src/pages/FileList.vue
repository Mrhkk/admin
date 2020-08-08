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
    </el-card>
    <el-card> </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
