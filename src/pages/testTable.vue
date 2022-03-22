<template>
  <div class="my-table">
    <my-table  v-if="tableShow" :col="col" :data="data"></my-table>
    <el-button @click="consonant">打印</el-button>
  </div>
</template>

<script>
import MyTable from '../components/MyTable'
// import { getBt } from '../common/api/system_userApi'
export default {
  components: {
    MyTable
  },
  data() {
    return {
      tableShow:true,// 使组件重新渲染变量
      col: [
        {
          prop: 'date',
          label: '日期',
          isinput: true
        },
        {
          label: '配送信息',
          children: [
            {
              prop: 'name',
              label: '姓名',
              isinput: true
            },
            {
              label: '地址',
              children: [
                {
                  prop: 'province',
                  label: '省份',
                },
                {
                  prop: 'city',
                  label: '市区'
                },
                {
                  prop: 'address',
                  label: '地址'
                }
              ]
            }
          ]
        }
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  created() {
    this.init();
  },
  methods:{
    consonant(){
      console.log('data', this.data)
    },
    //调接口从后台获取表头数据
    init(){
        this.tableShow = false// 设置tableShow为false，使组件重新渲染
        this.col=[
        {
          prop: 'name',
          label: '事业部',
          isinput: true
        },
        {
          prop: 'name',
          label: '运营',
          isinput: true
        },
        {
          prop: 'date',
          label: 'SPU名称'
        },
          {
          prop: 'date',
          label: 'SKU条码'
        },
        {
          prop: 'date',
          label: 'SKU品名'
        },{
          prop: 'date',
          label: '产品状态'
        },
        {
          label: '实际销售',
          children: [
            {
              label: '8月',
               children: [
            {
              prop: 'name',
              label: '三级八月',
              isinput: true
            }]
            },
            {
              prop: 'name',
              label: '9月',
              isinput: true
            },
            {
              prop: 'name',
              label: '10月'
            },
            {
              prop: 'name',
              label: '11月'
            },
            {
              prop: 'name',
              label: '4月'
            },
            {
              prop: 'name',
              label: '5月'
            },
            {
              prop: 'name',
              label: '6月'
            },
            {
              prop: 'name',
              label: '7月'
            }
          ]
        },
        {
          label: '销售数据',
          children: [
            {
              prop: 'name',
              label: '8月'
            },
            {
              prop: 'name',
              label: '9月'
            },
            {
              prop: 'name',
              label: '10月'
            },
            {
              prop: 'name',
              label: '11月'
            }
          ]
        },
        {
          label: '8月问题',
          children: [
            {
              prop: 'name',
              label: '天猫旗舰店8.1-8.17销售'
            },
            {
              prop: 'name',
              label: '当月进度（本月销量/上版本月预测）'
            },
            {
              prop: 'name',
              label: '8月预测调整'
            },
            {
              prop: 'name',
              label: 'SPU同比（确认后台取数）'
            },
            {
              prop: 'name',
              label: 'SPU环比'
            }
          ]
        },
        {
          label: '9月预测数量对比',
          children: [
            {
              prop: 'name',
              label: '环比'
            },
            {
              prop: 'name',
              label: '同比'
            },
            {
              prop: 'name',
              label: '9月问题'
            },
            {
              prop: 'name',
              label: 'SPU同比（确认后台取数）'
            },
            {
              prop: 'name',
              label: 'SPU环比'
            }
          ]
        },
         {
          label: '10月预测数量对比',
          children: [
            {
              prop: 'name',
              label: '环比'
            },
            {
              prop: 'name',
              label: '同比'
            },
            {
              prop: 'name',
              label: '10月问题'
            },
            {
              prop: 'name',
              label: 'SPU同比（确认后台取数）'
            },
            {
              prop: 'name',
              label: 'SPU环比'
            }
          ]
        }, {
          label: '11月预测数量对比',
          children: [
            {
              prop: 'name',
              label: '环比'
            },
            {
              prop: 'name',
              label: '同比'
            },
            {
              prop: 'name',
              label: '11月问题'
            },
            {
              prop: 'name',
              label: 'SPU同比（确认后台取数）'
            },
            {
              prop: 'name',
              label: 'SPU环比'
            }
          ]
        },
      ]
        this.$nextTick(() => {// DOM 更新了
          this.tableShow = true
        })
        // getBt({}).then(res => {
        //   this.tableShow = false// 设置tableShow为false，使组件重新渲染
        //   this.col=res.tbCsBts
        //   this.$nextTick(() => {// DOM 更新了
        //     this.tableShow = true
        //   })
        // });
    }
  }
}
</script>
<style scoped>
</style>