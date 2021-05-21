
<template>
  <div class="app-container">
    <div>
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              class="table-in-table"
              :data="props.row.datas"
              style="width: 100%;"
              row-key="id"
              border
            >
              <el-table-column prop="date" label="下单日期" width="180"></el-table-column>
              <el-table-column prop="type" label="单据类型" width="180"></el-table-column>
              <el-table-column prop="status" label="状态"></el-table-column>
              <el-table-column label="操作" width="120">
                <template slot-scope="props">
                  <el-button type="text" size="small">移除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
         </el-table-column>
        <el-table-column prop="applyNo" label="申请单号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="props">
            <el-button type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "name1",
  components: {},
  data() {
    return {
      tableData: [
        {
          id: 1,
          applyNo: "202004291234",
          name: "李四",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          applyNo: "202004291235",
          name: "张三",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          applyNo: "202004291236,202004291237",
          name: "王五",
          address: "上海市普陀区金沙江路 1519 弄",
          datas: [
            {
              id: 31,
              applyNo: "202004291236",
              name: "王五",
              address: "上海市普陀区金沙江路 1519 弄"
            },
            {
              id: 32,
              applyNo: "202004291237",
              name: "王五",
              address: "上海市普陀区金沙江路 1519 弄"
            }
          ]
        },
        {
          id: 4,
          applyNo: "202004291238",
          name: "赵6六",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (!row.datas) {
    //     if (columnIndex === 0) {
    //       return [0, 0];
    //     } else if (columnIndex === 1) {
    //       return [1, 2];
    //     }
    //   }
    // }
  }
};
</script>
<style scoped>
.app-container .table-in-table {
    border-top: 0px;
  }
 .app-container .el-table__expanded-cell {
      border-bottom: 0px;
      border-right: 0px;
      padding: 0px 0px 0px 47px;
    }
    .app-container .el-table th {
      background: #ddeeff;
    }
</style>