<!--  -->
<template>
  <div>
    <!-- excelb表格 -->
    <div class="datatable-box" id="sprintReport">
      <table border="1" style="width: 1000px" id="datatable" cellspacing="0" cellpadding="0">
        <tbody>
         <tr>
            <td class="t_align">第一部分</td>
            <td class="t_align" colspan="12">供应商简介</td>
          </tr>
          <tr>
            <td class="t_align">1.1</td>
            <td class="t_align" colspan="12">基本信息</td>
          </tr>
          <tr>
            <td class="t_align">1.1.1</td>
            <td class="t_align" colspan="3">供应商名称</td>
            <td class="t_align" colspan="3">晋江市劲宝婴儿用品有限公司</td>
            <td class="t_align" colspan="3">供应商地址</td>
            <td class="t_align" colspan="3">福建省晋江市安海镇前埔工业区</td>
          </tr>
          <tr>
            <td class="t_align">1.1.2</td>
            <td class="t_align" colspan="3">联系人</td>
            <td class="t_align" colspan="3">林永柱</td>
            <td class="t_align" colspan="3">职位</td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align">1.1.3</td>
            <td class="t_align" colspan="3">电话</td>
            <td class="t_align" colspan="3">13506942110</td>
            <td class="t_align" colspan="3">邮箱</td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" rowspan="2">1.2</td>
            <td class="t_align" colspan="12">工厂与供应商从属关系</td>
          </tr>
          <tr>
            <td class="t_align" colspan="12">
              <el-radio v-model="radio" label="1">自有工厂</el-radio>
              <el-radio v-model="radio" label="2">合作工厂</el-radio>
            </td>
          </tr>
           <tr>
            <td class="t_align">第二部分</td>
            <td class="t_align" colspan="12">工厂概况</td>
          </tr>
          <tr>
            <td class="t_align">2.1</td>
            <td class="t_align" colspan="12">基本信息</td>
          </tr>
          <tr>
            <td class="t_align">2.1.1</td>
            <td class="t_align" colspan="3">工厂名称</td>
            <td class="t_align" colspan="3">晋江市劲宝婴儿用品有限公司</td>
            <td class="t_align" colspan="3">工厂地址</td>
            <td class="t_align" colspan="3">福建省晋江市安海镇前埔工业区</td>
          </tr>
          <tr>
            <td class="t_align">2.1.2</td>
            <td class="t_align" colspan="3">联系人</td>
            <td class="t_align" colspan="3">林永柱</td>
            <td class="t_align" colspan="3">职位</td>
            <td class="t_align" colspan="3">主管</td>
          </tr>
          <tr>
            <td class="t_align">2.1.3</td>
            <td class="t_align" colspan="3">电话</td>
            <td class="t_align" colspan="3">13506942110</td>
            <td class="t_align" colspan="3">邮箱</td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" rowspan="2">2.1.4</td>
            <td class="t_align" colspan="12">工厂所有权</td>
          </tr>
          <tr>
            <td class="t_align" colspan="12">
              <el-radio v-model="radio" label="1">私营</el-radio>
              <el-radio v-model="radio" label="2">中外合资</el-radio>
               <el-radio v-model="radio" label="3">外商独资</el-radio>
              <el-radio v-model="radio" label="4">公众企业（上市）</el-radio>
            </td>
          </tr>
           <tr>
            <td class="t_align">2.1.5</td>
            <td class="t_align" colspan="3">厂里年份</td>
            <td class="t_align" colspan="3">2013年9月2日</td>
            <td class="t_align" colspan="3">营业执照号：</td>
            <td class="t_align" colspan="3">91350582774158450</td>
          </tr>
           <tr>
            <td class="t_align">2.1.6</td>
            <td class="t_align" colspan="3">厂区面积</td>
            <td class="t_align" colspan="3">3000平方米</td>
            <td class="t_align" colspan="3">生产车间面积</td>
            <td class="t_align" colspan="3">1500平方米</td>
          </tr>
           <tr>
            <td class="t_align">2.1.7</td>
            <td class="t_align" colspan="3">产能（/月）</td>
            <td class="t_align" colspan="3">3000个</td>
            <td class="t_align" colspan="3">雇员数：</td>
            <td class="t_align" colspan="3">98</td>
          </tr>
          <tr>
            <td class="t_align" rowspan="2">2.1.8</td>
            <td class="t_align" colspan="12">产品类别和资质文件：（<span class="setClass">资质文件需要最新有效的电子版文件</span>）</td>
          </tr>
          <tr>
            <td class="t_align" colspan="12">
              <div>
                <el-radio v-model="radio" label="1">营业执照</el-radio>
                <el-radio v-model="radio" label="2">专利证书</el-radio>
                <el-radio v-model="radio" label="3">体系认证证书（如有）</el-radio>
              </div>
              <div>
                <el-radio v-model="radio" label="4">化妆品（化妆品生产许可证）</el-radio>
                <el-radio v-model="radio" label="5">食品洗涤剂（生产许可证）</el-radio>
                <el-radio v-model="radio" label="6">消毒产品（消毒产品卫生许可证）</el-radio>
                <el-radio v-model="radio" label="7">电器（3c认证证书）</el-radio>
              </div>
              <div>
                <el-radio v-model="radio" label="8">食品用塑料包装容器工具等制品（生产许可证）</el-radio>
                <el-radio v-model="radio" label="9">塑胶、金属、弹射、娃娃、电玩具（3C认证证书</el-radio>
                <el-radio v-model="radio" label="10">童车（3C认证证书</el-radio>
                <el-radio v-model="radio" label="11">其他类</el-radio>
              </div>
            </td>
          </tr>
          <tr>
            <td class="t_align" rowspan="5">2.2</td>
            <td class="t_align" colspan="12">擅长产品类型：</td>
          </tr>
          <tr>
            <td class="t_align" colspan="2">产品类型</td>
            <td class="t_align" colspan="2">生产线个数</td>
            <td class="t_align" colspan="2">每条生产线日产量</td>
            <td class="t_align" colspan="2">产品类型</td>
            <td class="t_align" colspan="2">生产线个数</td>
            <td class="t_align" colspan="2">每条生产线日产量</td>
          </tr>
          <tr>
            <td class="t_align" colspan="2">背带腰凳</td>
            <td class="t_align" colspan="2">2</td>
            <td class="t_align" colspan="2">500</td>
            <td class="t_align" colspan="2"><img style="width: 100px!important" :src="url" alt=""></td>
            <td class="t_align" colspan="2"></td>
            <td class="t_align" colspan="2"></td>
          </tr>
          <tr>
            <td class="t_align" colspan="2">产品类型</td>
            <td class="t_align" colspan="2">生产线个数</td>
            <td class="t_align" colspan="2">每条生产线日产量</td>
            <td class="t_align" colspan="2">产品类型</td>
            <td class="t_align" colspan="2">生产线个数</td>
            <td class="t_align" colspan="2">每条生产线日产量</td>
          </tr>
          <tr>
            <td class="t_align" colspan="2"><span style="visibility: hidden;">1</span></td>
            <td class="t_align" colspan="2"></td>
            <td class="t_align" colspan="2"></td>
            <td class="t_align" colspan="2"></td>
            <td class="t_align" colspan="2"></td>
            <td class="t_align" colspan="2"></td>
          </tr>
           <tr>
            <td class="t_align" rowspan="7">2.3</td>
            <td class="t_align" colspan="12">主要客户</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">排名前5的客户及产量占比%</td>
            <td class="t_align" colspan="3">客户名称</td>
            <td class="t_align" colspan="3">产量</td>
            <td class="t_align" colspan="3">占比%</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">1</td>
            <td class="t_align" colspan="3">巴布豆</td>
            <td class="t_align" colspan="3"></td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">2</td>
            <td class="t_align" colspan="3">礼仪久久</td>
            <td class="t_align" colspan="3"></td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">3</td>
            <td class="t_align" colspan="3">好孩子</td>
            <td class="t_align" colspan="3"></td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">4</td>
            <td class="t_align" colspan="3">bebebus</td>
            <td class="t_align" colspan="3"></td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">5</td>
            <td class="t_align" colspan="3">爱贝迪拉</td>
            <td class="t_align" colspan="3"></td>
            <td class="t_align" colspan="3"></td>
          </tr>
          <tr>
            <td class="t_align" rowspan="6">2.4</td>
            <td class="t_align" colspan="12">车间概况</td>
          </tr>
           <tr>
            <td class="t_align">车间/仓库名</td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
          </tr>
           <tr>
            <td class="t_align">人数</td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
          </tr>
           <tr>
            <td class="t_align">人数</td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
            <td class="t_align"></td>
          </tr>
           <tr>
            <td class="t_align">设备类型</td>
            <td class="t_align">杰克电脑缝纫机</td>
            <td class="t_align">电脑花样机</td>
            <td class="t_align">打枣机</td>
            <td class="t_align">自动折边机</td>
            <td class="t_align">半自动纽扣机</td>
            <td class="t_align">验布机</td>
            <td class="t_align">验针机</td>
            <td class="t_align">自动化流水线设备</td>
            <td class="t_align">切边机</td>
            <td class="t_align"></td>
            <td class="t_align"></td>
          </tr>
           <tr>
            <td class="t_align">设备数量</td>
            <td class="t_align">70</td>
            <td class="t_align">6</td>
            <td class="t_align">3</td>
            <td class="t_align">1</td>
            <td class="t_align">2</td>
            <td class="t_align">1</td>
            <td class="t_align">1</td>
            <td class="t_align">2</td>
            <td class="t_align">4</td>
            <td class="t_align"></td>
            <td class="t_align"></td>
          </tr>
           <tr>
            <td class="t_align">第三部分</td>
            <td class="t_align" colspan="12">质量管理体系</td>
          </tr>
           <tr>
            <td class="t_align">3.1</td>
            <td class="t_align" colspan="12">工厂质量部门架构</td>
          </tr>
           <tr>
            <td class="t_align">3.1.1</td>
            <td class="t_align" colspan="6">工厂质量部门架构<span class="setClass">岗位职责书</span></td>
            <td  colspan="6"></td>
          </tr>
           <tr>
            <td class="t_align" rowspan="7">3.1.2</td>
            <td class="t_align" colspan="12">质量部门人员配备</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">部门</td>
            <td class="t_align" colspan="3">1</td>
            <td class="t_align" colspan="3">林志强</td>
            <td class="t_align" colspan="3">管理</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">管理人员</td>
            <td class="t_align" colspan="3">1</td>
            <td class="t_align" colspan="3">余宝珍</td>
            <td class="t_align" colspan="3">车间管理</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">部门</td>
            <td class="t_align" colspan="3">1</td>
            <td class="t_align" colspan="3">林文丰</td>
            <td class="t_align" colspan="3">辅料检验收货</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">部门</td>
            <td class="t_align" colspan="3">2</td>
            <td class="t_align" colspan="3">许淑敏 许纯纯</td>
            <td class="t_align" colspan="3">检验</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">部门</td>
            <td class="t_align" colspan="3">2</td>
            <td class="t_align" colspan="3">许淑敏 许纯纯</td>
            <td class="t_align" colspan="3">检验</td>
          </tr>
          <tr>
            <td class="t_align" colspan="3">部门</td>
            <td class="t_align" colspan="3">1</td>
            <td class="t_align" colspan="3">郑锦飞</td>
            <td class="t_align" colspan="3">检测</td>
          </tr>
           <tr>
            <td class="t_align">3.2</td>
            <td class="t_align" colspan="12">质量管理制度</td>
          </tr>
           <tr>
            <td class="t_align">3.2.1</td>
            <td class="t_align" colspan="6">是否建立与生产规模和产品结构相适应的质量管理体系？如有，请出示<span class="setClass">体系证明</span></td>
            <td  colspan="6"></td>
          </tr>
          <tr>
            <td class="t_align">3.2.2</td>
            <td class="t_align" colspan="6">工厂是否制定完善的<span class="setClass">质量手册或质量管理制度</span>并有效执行？</td>
            <td  colspan="6">有</td>
          </tr>
           <tr>
            <td class="t_align">3.2.3</td>
            <td class="t_align" colspan="6">是否订立<span class="setClass">品控目标</span>（成品率，次品率等）？若有，请具体描述（包括本年度，次年度目标，是否达到目标），是否有改进计划并制定改进时间表？</td>
            <td  colspan="6"></td>
          </tr>
           <tr>
            <td class="t_align">3.2.4</td>
            <td class="t_align" colspan="6">品控制度是否展开推广，所有工人都清楚品控制度？工厂是否进行人员质量和技术培训，如有，请出示<span class="setClass">培训记录。</span></td>
            <td  colspan="6"></td>
          </tr>
           <tr>
            <td class="t_align">3.2.5</td>
            <td class="t_align" colspan="6">工厂是否建立有标准操作流程，是否所有工序都配有<span class="setClass">标准作业程序</span>SOP)说明？</td>
            <td  colspan="6"></td>
          </tr>
           <tr>
            <td class="t_align">3.2.6</td>
            <td class="t_align" colspan="6">是否为客户建档，并且所有的文档归档管理，确保所使用的<span class="setClass">客户文档</span>都是最新版本？</td>
            <td  colspan="6"></td>
          </tr>
          <tr>
            <td class="t_align">3.2.7</td>
            <td class="t_align" colspan="6">是否制定有<span class="setClass">生产计划表</span>，具体到日常生产的每个班次每条生产线？</td>
            <td  colspan="6">有</td>
          </tr>
          <tr>
            <td class="t_align">3.2.8</td>
            <td class="t_align" colspan="6">工厂是否保存所有<span class="setClass">生产记录及全流程质量记录</span>？请出示<span class="setClass">近两个月的记录</span></td>
            <td  colspan="6">有</td>
          </tr>
          <tr>
            <td class="t_align">3.2.9</td>
            <td class="t_align" colspan="6">对于来料和外包产品是否有现场检验流程? <span class="setClass">检验报告</span>应至少包括进出时间，进出数量和质量检查记录。</td>
            <td  colspan="6"></td>
          </tr>
          <tr>
            <td class="t_align">3.2.10</td>
            <td class="t_align" colspan="6">工厂是否有原材料追溯规则？请出示<span class="setClass">原材料记录和相关证明</span></td>
            <td  colspan="6"></td>
          </tr>
          <tr>
            <td class="t_align">3.2.11</td>
            <td class="t_align" colspan="6">工厂是否制定<span class="setClass">内审制度</span>？是否定期进行系统、全面的内部检查，并有<span class="setClass">内审报告</span></td>
            <td  colspan="6"></td>
          </tr>
          <tr>
            <td class="t_align">3.2.12</td>
            <td class="t_align" colspan="6">工厂是否有原辅料<span class="setClass">供应商评估制度和名录，</span>且有效管理？</td>
            <td  colspan="6"></td>
          </tr>
          <tr>
            <td class="t_align">3.2.13</td>
            <td class="t_align" colspan="6">工厂是否有<span class="setClass">不合格产品召回，追溯和管控制度</span>？</td>
            <td  colspan="6">有</td>
          </tr>
          <tr>
            <td class="t_align">3.2.14</td>
            <td class="t_align" colspan="6">是否建立人员健康档案？请提供员工<span class="setClass">健康证</span>。（如需）</td>
            <td  colspan="6"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-button @click="html2pdfs">导出pdf</el-button>
  </div>
</template>

<script>
import {getPdf} from '../../static/js/html2pdf';
export default {
  data() {
    return {
      weekday: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      radio: '1',
      url: ''
    };
  },
  methods: {
      html2pdfs() {
          getPdf('#sprintReport', '测试号')
        },
        getBase64Image (url, ref) {
      // var _this = this
      var image = new Image()
      image.src = url + '?v=' + Math.random() // 处理缓存
      image.crossOrigin = '*' // 支持跨域图片
      image.onload = () => {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        var context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        var quality = 0.8
        let dataurl = canvas.toDataURL('image/jpeg', quality)
        this.url = dataurl
        console.log(this.url)
      }
    }
  },
  created () {
    let url = 'http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg'
    // this.url = url
    // 调用图片转换base64的方法
    this.getBase64Image(url)
  },
  mounted() {
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.t_align {
  text-align: center;
}
td {
    padding: 5px;
    font-size: 14px;
}
.setClass {
    color: #409EFF;
}
</style>
