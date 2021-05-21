<!--  -->
<template>
  <div class="table">
    <el-table
      :data="JZPFData"
      ref="JZPFData"
      border
      :span-method="objectJBXXMethod"
      height="calc(90vh - 140px)"
      :header-cell-style="{ background: '#deebff', color: '#606266' }"
      highlight-current-row
    >
      <el-table-column prop="projectStage" label="项目阶段" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.projectStage }}
        </template>
      </el-table-column>
      <el-table-column prop="implementation" label="实施阶段" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.implementation }}
        </template>
      </el-table-column>
      <el-table-column prop="content" label="建设内容" min-width="180">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序"
        min-width="60"
        align="center"
      ></el-table-column>
      <el-table-column prop="begintime" label="开始/申报时间" min-width="120">
        <template>
          <div>66666</div>
        </template></el-table-column
      >
      <el-table-column prop="endtime" label="结束/批复时间" min-width="120">
        <template>
          <div>8888</div>
        </template></el-table-column
      >
      <el-table-column prop="title" label="批复标题" min-width="120">
        <template slot-scope="scope">
          <div>{{ scope.row.title }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="documentNum" label="批复文号" min-width="120">
        <template slot-scope="scope">
          <div>{{ scope.row.documentNum }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="unit" label="批复单位" min-width="120">
        <template slot-scope="scope">
          <div>{{ scope.row.unit }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="summary" label="内容摘要" min-width="120">
        <template slot-scope="scope">
          <div>{{ scope.row.summary }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="value1" label="上传/查看" min-width="150">
        <template>
          <el-button type="primary" plain size="mini">上传</el-button>
          <el-button type="primary" plain size="mini">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanArr: [],
      JZPFData: [
        {
          id: 1,
          itemStage: "审批",
          implementStage: "*规划",
          content: "abc",
          endtime: "2020",
          projectStage: 1111,
        },
        {
          id: 2,
          itemStage: "审批",
          implementStage: "*规划",
          content: "abc",
          endtime: "2020",
          projectStage: 222,
        },
        {
          id: 3,
          itemStage: "审批",
          implementStage: "*规划",
          content: "abc",
          endtime: "2020",
          projectStage: 1111,
        },
        {
          id: 3,
          itemStage: "审批",
          implementStage: "*建议书",
          content: "abc",
          begintime: "2019",
          endtime: "2020",
          projectStage: 1111,
        },
        {
          id: 3,
          itemStage: "审批",
          implementStage: "*规模",
          content: "abc",
          begintime: "2019",
          endtime: "2020",
          projectStage: 1111,
        },
        {
          id: 5,
          itemStage: "abc",
          implementStage: "*报告",
          content: "***",
          begintime: "2019",
          endtime: "2020",
          projectStage: 1111,
        },
        {
          id: 6,
          itemStage: "审批",
          implementStage: "*报告",
          content: "***",
          begintime: "2019",
          endtime: "2020",
          projectStage: 3333,
        },
      ],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.rowspan();
  },
  methods: {
    //  getJBXXTableData() {
    //     let spanOneArr = [],
    //       spanTwoArr = [],
    //       concatOne = 0,
    //       concatTwo = 0;
    //     this.JZPFData.forEach((item, index) => {
    //       if (index === 0) {
    //         spanOneArr.push(1);
    //         spanTwoArr.push(1);
    //       } else {
    //         if (item.projectStage === this.JZPFData[index - 1].projectStage) { //第一列需合并相同内容的判断条件
    //           spanOneArr[concatOne] += 1;
    //           spanOneArr.push(0);
    //         } else {
    //           spanOneArr.push(1);
    //           concatOne = index;
    //         };
    //         if (item.implementStage === this.JZPFData[index - 1].implementStage) { //第二列和第16列需合并相同内容的判断条件
    //           spanTwoArr[concatTwo] += 1;
    //           spanTwoArr.push(0);
    //         } else {
    //           spanTwoArr.push(1);
    //           concatTwo = index;
    //         };
    //       }
    //     });
    //     return {
    //       one: spanOneArr,
    //       two: spanTwoArr
    //     }
    //   },
    // get () {
    //   let aa = {
    //       itemStage: "审批",
    //       implementStage: "*报告",
    //       projectStage: 3333
    //     }
    //     for (let key in aa) {
    //     this.getJBXXTableData(key)
    //   }
    // },
    // getJBXXTableData(v) {
    //     let spanOneArr = [],
    //       concatOne = 0
    //     this.JZPFData.forEach((item, index) => {
    //       if (index === 0) {
    //         spanOneArr.push(1);
    //       } else {
    //         if (item[v] === this.JZPFData[index - 1][v]) { //第一列需合并相同内容的判断条件
    //           spanOneArr[concatOne] += 1;
    //           spanOneArr.push(0);
    //         } else {
    //           spanOneArr.push(1);
    //           concatOne = index;
    //         }
    //       }
    //     });
    //     return {
    //       v: spanOneArr
    //     }
    //   },
    //   objectJBXXMethod({
    //     row,
    //     column,
    //     rowIndex,
    //     columnIndex
    //   }) {
    //     if (columnIndex === 0) {
    //       const _row = (this.getJBXXTableData().one)[rowIndex];
    //       const _col = _row > 0 ? 1 : 0;
    //       return {
    //         rowspan: _row,
    //         colspan: _col
    //       };
    //     }
    //     if (columnIndex === 1 || columnIndex === 15) {
    //       const _row = (this.getJBXXTableData().two)[rowIndex];
    //       const _col = _row > 0 ? 1 : 0;
    //       return {
    //         rowspan: _row,
    //         colspan: _col
    //       };
    //     }
    //   }
    //获得数据相同的行数
    rowspan() {
      //每次调用清空数据
      this.spanArr = [];
      this.position = 0;
      this.JZPFData.forEach((item, index) => {
        if (index === 0) {
          this.spanArr.push(1);
          this.position = 0;
        } else {
          if (this.JZPFData[index].id === this.JZPFData[index - 1].id) {
            this.spanArr[this.position] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.position = index;
          }
        }
      });
    },
    //合并
    objectJBXXMethod({ row, column, rowIndex, columnIndex }) {
      console.log(this.spanArr);
      //表格合并行
      for (let i = 0; i < 3; i++) {
        if (columnIndex === i) {
          const _row = this.spanArr[rowIndex];
          const _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col,
          };
        }
      }
      // if (columnIndex === 1) {
      //       const _row = this.spanArr[rowIndex];
      //       const _col = _row > 0 ? 1 : 0;
      //       return {
      //         rowspan: _row,
      //         colspan: _col,
      //       };
      //     }
      //     console.log(this.spanArr)
      //     if (columnIndex === 2) {
      //       const _row = this.spanArr[rowIndex];
      //       const _col = _row > 0 ? 1 : 0;
      //       return {
      //         rowspan: _row,
      //         colspan: _col,
      //       };
      //     }
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
