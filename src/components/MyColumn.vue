<template>
  <el-table-column
    :prop="col.prop"
    :label="col.label"
    :width="col.label.length*35"
    align="center">
    <template v-for="(item, index) in col.children" >
      <my-column
        v-if="item.children && item.children.length"
        :key="index"
        :col="item"></my-column>
      <el-table-column v-else :key="index" :label="item.label" :prop="item.prop" :width="item.label.length*35" align="center">
        <template slot-scope="scope">
          <el-input  v-if="item.isinput" :placeholder="item.label" clearable v-model="scope.row[item.prop]"></el-input>
          <span v-else>{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'MyColumn',
  props: {
    col: {
      type: Object
    }
  }
}
</script>
<style scoped>
</style>