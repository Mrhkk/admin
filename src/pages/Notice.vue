<!--  -->
<template>
<div class="dayRecords"> 
<div class="search"><div><span style="marginRight: 20px;">质检负责人：</span><el-input v-model="input" style="width: 220px;" placeholder="请输入内容"></el-input> </div> <el-button type="primary" @click="searchFun(true)">搜索</el-button></div>
<el-calendar v-model="value" id="calendar">
     <template
         slot="dateCell"
         slot-scope="{date, data}">
            <div class="calendar-day">{{ data.day.split('-').slice(1).join('-') }}</div>
            <div v-if="data.day.split('-').slice(1)[0] == month" > 
               <div class="row-content-1" v-if="handleSelected(data.day) == 0 || 1"><span>已分配</span><span style="marginLeft: 20px">188</span> </div>
               <div class="row-content-2" v-if="handleSelected(data.day) == 2 || 1"><span>未分配</span><span style="marginLeft: 20px">888</span></div>
             </div>
      </template>
</el-calendar>
</div>
</template>

<script>
export default {
  data() {
    return {
        input: '',
        attendanceDetailsData:[
                {time:"2021-06-20",number: 2},
                 {time:"2021-06-25",number: 2},
                 {time:"2021-06-28",number: 2},
            ],
             value: new Date(),
             month: new Date().getMonth()+1
    };
  },
  watch: {
      value ( newval, oldval) {
          if (oldval.getMonth() !== newval.getMonth()) {
            console.log(newval.getFullYear()+'-'+(newval.getMonth()+1))
            this.month = newval.getMonth()+1
          }
      }
  },
  //生命周期 - 创建完成（访问当前this实例）{{ data.day.split('-').slice(2).join('-') }}
  created() {
      console.log(55,new Date().getMonth()+1)
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      this.$nextTick(() => {
          // 点击前一个月
          let prevBtn = document.querySelector('.el-calendar__button-group .el-button-group>button:nth-child(1)');
          prevBtn.addEventListener('click',() => {
            console.log(111,this.value);
          })
          //点击下一个月
   let nextBtn = document.querySelector(
    ".el-calendar__button-group .el-button-group>button:nth-child(3)"
   );
   nextBtn.addEventListener("click", () => {
    console.log(222);
   });
  
   //点击今天
   let todayBtn = document.querySelector(
    ".el-calendar__button-group .el-button-group>button:nth-child(2)"
   );
   todayBtn.addEventListener("click", () => {
     console.log(333);
   });
        })
  },
  methods: {
   handleSelected(day) {
  let flag = 0; //默认显示为0
  this.attendanceDetailsData.forEach(item => { //this.attendanceDetailsData是后台返回的数据
　　if (item.time== day) {  //判断显示数据
　　　　flag = item.number;
　　　　　　return 
　　　　} 
　　})
　　 return flag 
}
  }
};
</script>
<style>
.el-calendar-table .el-calendar-day {
  height: auto;
}
.div-Calendar {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.calendar-day {
  text-align: center;
  color: #202535;
  line-height: 30px;
  font-size: 12px;
}

.is-selected {
  color: #F8A535;
  font-size: 10px;
  margin-top: 5px;
}

#calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after {
  content: '当月';
}
</style>
<style scoped>
.dayRecords {
  padding: 20px;
}
.search {
  display: flex;
  justify-content: space-between;
}
.row-content-1 {
   text-align: center;
   color: #67C23A;
}
.row-content-2 {
   text-align: center;
   color: #F56C6C;
   margin-top: 10px;
}
</style>
