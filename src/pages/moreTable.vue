<template>
  <div class="content">
    {{ selectedList }}
    <hr />
    {{ selectedList.length }}
    <hr />
    {{ selectedList.map((ele) => ele.key) }}

    <div class="is-distribute">
      <el-table
        ref="jojoTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        :key="1"
        row-key="key"
        @select-all="handleAllSelection"
        @select="(selection, row) => handleSelectionChange(selection, row)"
        :tree-props="{ children: 'children' }"
      >
        <!-- :selectable="(row) => getDisable(row, 'unpub')" -->
        <el-table-column
          align="center"
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="version"
          width="155"
          label="篇名"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="name"
          width="130"
          label="人物名"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="skill"
          width="130"
          label="技能/替身"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TaskManage",
  data() {
    return {
      selectedList: [],
      tableData: [
        {
          version: "幻影之血",
          isChild: false,
          isSel: false,
          key: 1,
          children: [
            {
              version: "幻影之血",
              name: "齐贝林",
              skill: "欧巴多啦A梦",
              key: 2,
              isChild: true,
              isSel: false,
            },
            {
              version: "幻影之血",
              name: "乔纳森·乔斯达",
              skill: "欧巴多啦A梦",
              key: 3,
              isChild: true,
              isSel: false,
            },
            {
              version: "幻影之血",
              name: "屌·布兰度",
              skill: "jojo 我不做人啦",
              key: 4,
              isChild: true,
              isSel: false,
            },
          ],
        },
        {
          version: "战斗潮流",
          isChild: false,
          isSel: false,
          key: 5,
          children: [
            {
              version: "战斗潮流",
              name: "西撒",
              skill: "泡沫阵",
              key: 6,
              isChild: true,
              isSel: false,
            },
            {
              version: "战斗潮流",
              name: "乔瑟夫·乔斯达",
              skill: "欧巴哆啦A梦",
              key: 7,
              isChild: true,
              isSel: false,
            },
            {
              version: "战斗潮流",
              name: "丽莎丽莎",
              skill: "围巾",
              key: 8,
              isChild: true,
              isSel: false,
            },
            {
              version: "战斗潮流",
              name: "瓦乌姆",
              skill: "浑楔飒",
              key: 9,
              isChild: true,
              isSel: false,
            },
          ],
        },
        {
          version: "星辰斗士",
          isChild: false,
          isSel: false,
          key: 10,
          children: [
            {
              version: "星辰斗士",
              name: "空调·承太郎",
              skill: "欧拉欧拉拳",
              key: 11,
              isChild: true,
              isSel: false,
            },
            {
              version: "星辰斗士",
              name: "卡Q因",
              skill: "绿宝石水花",
              key: 12,
              isChild: true,
              isSel: false,
            },
            {
              version: "星辰斗士",
              name: "二乔",
              skill: "你给路达哟",
              key: 13,
              isChild: true,
              isSel: false,
            },
            {
              version: "星辰斗士",
              name: "阿布嘟嘟",
              skill: "红色魔术师",
              key: 14,
              isChild: true,
              isSel: false,
            },
            {
              version: "星辰斗士",
              name: "波鲁那雷夫",
              skill: "银色战车",
              key: 15,
              isChild: true,
              isSel: false,
            },
            {
              version: "星辰斗士",
              name: "伊奇",
              skill: "愚者",
              key: 16,
              isChild: true,
              isSel: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleAllSelection(a, b, c) {
      console.log(a, b, c);
    },
    handleSelectionChange(val, row) {
      let selectedList = this.selectedList,
        tableData = this.tableData;
      // 如果点击的子节点
      if (row.isChild) {
        if (row.isSel) {
        let indexFlag = selectedList.findIndex(ele => ele.key === row.key)
        //   console.log(selectedList.findIndex(ele => ele.key === row.key))
          selectedList.splice(indexFlag,1);
        } else {
          selectedList.push(row);
        }
        // 判断多少条是被选中的
        let cLength = selectedList.filter((ele) => ele.key == row.key).length;
        // 查找当前子节点的父节点
        let pNode = tableData.find((ele) => ele.version == row.version);
        console.log(pNode);
        // 如果长度相同那就打钩，不同则取消
        this.$refs.jojoTable.toggleRowSelection(
          pNode,
          cLength === pNode.children.length
        );
        pNode.isSel = cLength === pNode.children.length;
      } else {
        // 点击父节点
        //  数据操作  如果是已被勾选那么删除此列所有数据
        if (row.isSel) {
          for (const item of row.children) {
            item.isSel = false;
            let indexFlag = selectedList.findIndex(ele => ele.key === item.key)
            selectedList.splice(indexFlag,1);
          }
          // console.log("remove");
        } else {
          // console.log("push");
          // 否则是新增
          for (const item of row.children) {
            if (selectedList.indexOf(item) == -1) {
              item.isSel = true;
              selectedList.push(item);
            }
          }
        }
        row.children.forEach((ele2) => {
          this.$refs.jojoTable.toggleRowSelection(ele2, !row.isSel);
        });
      }
      row.isSel = !row.isSel;
    },
  },
};
</script>
<style>
.has-gutter .el-table-column--selection div {
  display: none;
}
.el-checkbox__inner:before {
    content: "";
    position: absolute;
    display: block;
    background-color: #fff;
    height: 2px;
    transform: scale(.5);
    left: 0;
    right: 0;
    top: 5px;
}

</style>