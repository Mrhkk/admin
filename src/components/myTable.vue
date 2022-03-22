<template>
  <div class="my-table">
    <el-table :data="data">
      <template v-for="(item,index) in col">
          <my-column v-if="item.children && item.children.length" :key="index" :col="item"></my-column>
         <el-table-column v-else :key="index" :label="item.label" :prop="item.prop" :width="150"
          align="center">
          <template slot-scope="scope">
            <el-input  v-if="item.isinput" :placeholder="item.label" clearable v-model="scope.row[item.prop]"></el-input>
            <span v-else>{{scope.row[item.prop]}}</span>
          </template>
          </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import MyColumn from './MyColumn'
export default {
  components: {
    MyColumn
  },
  props: {
    col: {
      type: Array
    },
    data: {
      type: Array
    }
  }
}
</script>
<style scoped>
</style>