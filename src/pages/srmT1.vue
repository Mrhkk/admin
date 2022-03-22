<template>
<div class="charts" id="myChart" >
   <!-- <div id="container" style="min-width:400px;height:400px"></div> -->
    <x-chart ></x-chart>
  </div>
  <!-- <div class="reportTable"> -->
    <!-- <el-table
      :data="tableData"
      border
      highlight-current-row
      :summary-method="getSummaries"
      show-summary
    >
      <el-table-column
        prop="fname_l2"
        label="公司名称"
        :show-overflow-tooltip="true"
        width="120"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="fname"
        label="店铺名称"
        :show-overflow-tooltip="true"
        width="120"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="occfaccountPeriod"
        label="期间"
        :show-overflow-tooltip="true"
        min-width="200"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="sumoutboundGoods"
        :show-overflow-tooltip="true"
        label="发出商品"
        min-width="200"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.sumoutboundGoods | NumFormat }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="期初">
        <el-table-column
          :show-overflow-tooltip="true"
          prop="totalVerifygoodamt"
          label="已核销"
          min-width="200"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.totalVerifygoodamt | NumFormat }}
          </template>
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          prop="totalVerifyAmt"
          label="已核销应收金额"
          min-width="200"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.totalVerifyAmt | NumFormat }}
          </template>
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          prop="beginningNotVerifgoodyamt"
          label="未核销"
          min-width="100"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.beginningNotVerifgoodyamt | NumFormat }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="本期发生">
        <el-table-column
          prop="currentPeriodVerifyGood"
          label="当期核销"
          min-width="150"
          :show-overflow-tooltip="true"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.currentPeriodVerifyGood | NumFormat }}
          </template>
        </el-table-column>
        <el-table-column
          prop="currentPeriodVerifyamt"
          :show-overflow-tooltip="true"
          label="当期核销收入"
          min-width="150"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.currentPeriodVerifyamt | NumFormat }}
          </template>
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          prop="verifyDisAmt"
          label="收入确认差额"
          min-width="100"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.verifyDisAmt | NumFormat }}
          </template>
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          prop="businessserial"
          label="当期毛利"
          min-width="210"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.businessserial | NumFormat }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="期末">
        <el-table-column
          :show-overflow-tooltip="true"
          prop="endNotVerifyamt"
          label="期末余额"
          min-width="100"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.endNotVerifyamt | NumFormat }}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table> -->
    <!-- <button @click="add">增加表头</button>
     <el-table
      :data="tableData"
      border
      highlight-current-row
      show-summary
    >
      <el-table-column
      v-for="(v, i) in tableProp" :key="i"
        :prop="v.prop"
        :label="v.label"
        :show-overflow-tooltip="true"
        :width="v.width"
        align="center"
      ></el-table-column>
   </el-table> -->
    <!-- <div class="parent">
      <el-input
        style="width: 400%"
        placeholder="选择用户"
        v-model="formInline.member"
        :suffix-icon="showTree ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
        @click.native="deptogglePanel($event)"
        size="medium"
        readonly="readonly"
      ></el-input>
      <div v-if="showTree" class="treeDiv" ref="tableList">
        <el-table
          @row-click="handleRegionNodeClick"
          ref="moviesTable"
          :data="memberList"
          border
          :cell-style="getCellStyle"
          :header-cell-style="getHeaderCellStyle"
        >
          <el-table-column
            v-for="(item, index) in Columns"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div> -->
</template>
<script>
// 引入highCharts模块
import HighCharts from 'highcharts'
// 导入chart.vue子组件
import XChart from '@/components/chart.vue'
export default {
  name: "receiveManage",
  components: {
  XChart
 },
  data() {
    return {
      formInline: {
        member: "",
      },
      memberList: [], // 用户list
      showTree: false,
      selectTableId: "", //  table选中行id
      Columns: [
        {
          prop: "memberName",
          label: "用户名",
        },
        {
          prop: "tel",
          label: "手机号码",
        },
        {
          prop: "code",
          label: "编码",
        },
      ],
      // 获取row的key值
      getRowKeys(row) {
        return row.fid;
      },
      tableData: [],
      tableProp: [
        {
          prop: "fname_l2",
          label: "公司名称",
          width: "120",
        },
      ],
    };
  },
  created() {
    // this.getTableData();
  },
  mounted() {
    console.log(666, HighCharts)
    // this.run(this.func)
    // this.getMemberList();
//   HighCharts.chart('container', {
// 	chart: {
// 		type: 'bubble',
// 		plotBorderWidth: 1,
// 		zoomType: 'xy'
// 	},
// 	title: {
// 		text: 'Highcharts 3D气泡图'
// 	},
// 	xAxis: {
// 		gridLineWidth: 1
// 	},
// 	yAxis: {
// 		startOnTick: false,
// 		endOnTick: false
// 	},
// 	series: [{
// 		name:'气泡1',
// 		data: [
// 			[9, 81, 63],
// 			[98, 5, 89],
// 			[51, 50, 73],
// 			[41, 22, 14],
// 			[58, 24, 20],
// 			[78, 37, 34],
// 			[55, 56, 53],
// 			[18, 45, 70],
// 			[42, 44, 28],
// 			[3, 52, 59],
// 			[31, 18, 97],
// 			[79, 91, 63],
// 			[93, 23, 23],
// 			[44, 83, 22]
// 		],
// 		marker: {
// 			fillColor: {
// 				radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
// 				stops: [
// 					[0, 'rgba(255,255,255,0.5)'],
// 					[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
// 				]
// 			}
// 		}
// 	}, {
// 		name:'气泡2',
// 		data: [
// 			[42, 38, 20],
// 			[6, 18, 1],
// 			[1, 93, 55],
// 			[57, 2, 90],
// 			[80, 76, 22],
// 			[11, 74, 96],
// 			[88, 56, 10],
// 			[30, 47, 49],
// 			[57, 62, 98],
// 			[4, 16, 16],
// 			[46, 10, 11],
// 			[22, 87, 89],
// 			[57, 91, 82],
// 			[45, 15, 98]
// 		],
// 		marker: {
// 			fillColor: {
// 				radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
// 				stops: [
// 					[0, 'rgba(255,255,255,0.5)'],
// 					[1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
// 				]
// 			}
// 		}
// 	}]
// });
  },
  methods: {
    * func() {
       let res = yield setTimeout(() => {console.log(500)}, 500)
       console.log(5, res)
       let res2 = yield setTimeout(() => {console.log(100)}, 100)
       console.log(1, res)
       let res3 = yield setTimeout(() => {console.log(300)}, 300)
       console.log(3, res)
    },
    run(generatorFunc){
      let it = generatorFunc()
      let result = it.next()
      return new Promise((resolve, reject) => {
        const next = function(result) {
          if(result.done){
             resolve(result.value)
          }
          result.value = Promise.resolve(result.value)
          result.value.then(res => {
            let result = it.next(res)
            next(result)
          }).catch(err => {
            reject(err)
          })
        }
        next(result)
      })
    },
    // 用户
    getMemberList() {
      this.memberList = [
        {
          memberName: "memberName",
          label: "公司名称",
          width: "120",
        },
        {
          tel: "tel",
          label: "店铺名称",
          width: "120",
        },
        {
          code: "code",
          label: "编码",
          width: "120",
        },
      ];
    },
    // 表格css
    getCellStyle() {
      return "text-align:center; ";
    },
    getHeaderCellStyle() {
      return "background: rgba(9, 37, 56,0.1);text-align:center; background: linear-gradient(to bottom,#ffffff 0,#eeeeee 100%);padding: 4px 5px;";
    },
    // 点击input 阻止冒泡 控制table显示隐藏
    deptogglePanel(event) {
      event || (event = window.event);
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
      this.showTree ? this.tableHide() : this.tableShow();
    },
    tableShow() {
      this.showTree = true;
      document.addEventListener("click", this.tableHideList, false);
    },
    tableHide() {
      this.showTree = false;
      document.addEventListener("click", this.tableHideList, false);
    },
    tableHideList(e) {
      if (this.$refs.tableList && !this.$refs.tableList.contains(e.target)) {
        this.tableHide();
      }
    },
    // 点击table节点
    handleRegionNodeClick(data) {
      this.selectTableId = data.id;
      this.formInline.member = data.memberName; // 用户名字
      this.showTree = false;
    },
    add() {
      this.tableProp = [
        {
          prop: "fname_l2",
          label: "公司名称",
          width: "120",
        },
        {
          prop: "fname",
          label: "店铺名称",
          width: "120",
        },
      ];
    },
    // accDiv(arg1, arg2) {
    //   var t1 = 0,
    //     t2 = 0,
    //     r1,
    //     r2;
    //   try {
    //     t1 = arg1.toString().split(".")[1].length;
    //   } catch (e) {}
    //   try {
    //     t2 = arg2.toString().split(".")[1].length;
    //   } catch (e) {}
    //   with (Math) {
    //     r1 = Number(arg1.toString().replace(".", ""));
    //     r2 = Number(arg2.toString().replace(".", ""));
    //     return accMul(r1 / r2, pow(10, t2 - t1));
    //   }
    // },
    //乘法
    accMul(arg1, arg2) {
      var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) {}
      try {
        m += s2.split(".")[1].length;
      } catch (e) {}
      return (
        (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
        Math.pow(10, m)
      );
    },
    //加法
    accAdd(arg1, arg2) {
      var r1, r2, m;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      return (arg1 * m + arg2 * m) / m;
    },
    //减法
    Subtr(arg1, arg2) {
      var r1, r2, m, n;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      n = r1 >= r2 ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
/* .parent {
  position: relative;
}
.treeDiv {
  position: absolute;
  top: 40px;
  left: -1px;
  z-index: 1000;
  width: 868px;
  overflow: auto;
  max-height: 400px;
}
.el-table {
  border: 1px solid #ccc;
  border-radius: 6px;
}
.el-table /deep/ td {
  padding: 4px 0;
} */
</style>
