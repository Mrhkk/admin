<!--  -->
<template>
  <div class="homePage">
    <div>
      <template
        ><el-radio-group v-model="radio">
          <el-radio :label="v.id" v-for="(v, i) in arr1" :key="i">
            {{ v.name }}
          </el-radio>
        </el-radio-group></template
      >
      <el-button type="success" @click="radio='1'">点击</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" @row-click="rowClick">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
    </el-table>
    <el-table
      ref="dragTable"
      :data="list"
      row-key="sort"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="order" width="65">
        <template slot-scope="{ row }">
          <span>{{ row.sort }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{ row }">
          {{ row.status }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Drag" width="80">
        <template slot-scope="{}">
          <span class="drag-handler"><i class="el-icon-rank font"></i></span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="测试拖拽"
      v-el-drag-dialog
      :visible.sync="dialog"
      width="30%"
      @close="closed"
    >
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
import dtime from "time-formater";
// 拖动组件
import elDragDialog from "../el-dragDialog";
import Sortable from "sortablejs";
export default {
  directives: { elDragDialog },
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],
      dialog: false,
      list: [
        {
          sort: 1,
          status: "adc"
        },
        {
          sort: 2,
          status: "a"
        },
        {
          sort: 3,
          status: "ad"
        },
        {
          sort: 4,
          status: "adc"
        },
        {
          sort: 5,
          status: "a"
        },
        {
          sort: 6,
          status: "ad"
        }
      ],
      radio: "",
      arr1: [
        { id: "1", name: 'a' },
        { id: "2", name: 'b' },
        { id: "3", name: 'c' }
      ]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.$nextTick(() => {
      this.setSort();
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    rowClick(row, c, e) {
      if (row.id === "12987122") {
        this.dialog = true;
        console.log(this.dialog);
      }
    },
    closed() {
      this.dialog = false;
    },
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost", // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData("Text", "");
        },
        onEnd: evt => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0];
          this.list.splice(evt.newIndex, 0, targetRow);
        }
      });
    }
  }
};
</script>
<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
thead {
  font-size: 14px;
  color: #333333 !important;
  font-weight: bold;
}
thead > tr {
  background-color: olivedrab !important;
}
</style>
<style scoped>
/* @import url(); 引入css类 */
.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.font {
  font-size: 28px;
  font-weight: 800;
}
</style>
