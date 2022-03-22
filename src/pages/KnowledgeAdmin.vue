<!--  -->
<template>
<div>
    <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
></el-autocomplete>
</div>
</template>

<script>
export default {
data() {
return {
    restaurants: [],
    state: '',
    timeout:  null
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
    querySearchAsync(queryString, cb) {
		axios.get('url').then(res => {
			var restaurants = res.data; // 获取全部信息
			// 自带过滤器匹配（输入）信息
			var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
			  cb(results);
			}, 3000 * Math.random());
		})
      },
	  // 查询输入字符是否存在
      createStateFilter(queryString) {
        return (state) => {
		//这里和elementui组件不一样
		//value可以换成从后端传回的data数组中的键，
		//queryString.toLowerCase()输入的字符在所有返回信息中存在，!==-1代表匹配到了搜索的字符，
		//官方的==0是搜索的字符在第一个字才会匹配，！=-1指的是只要是内容中只要有搜索的字符就会返回匹配**
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
        };
      },
      handleSelect(item) {
	  //返回的意见点击选择触发事件
        console.log(item);
      }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>