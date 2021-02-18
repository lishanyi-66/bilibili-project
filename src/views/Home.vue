<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" animated>
      <van-tab
        v-for="(item, index) in category"
        :title="item.title"
        :key="index"
      >
        <div class="detailparent">
          <detail
            class="detailitem"
            :detailitem="categoryitem"
            v-for="(categoryitem, categoryindex) in item.list"
            :key="categoryindex"
          ></detail>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Detail from "./Detail.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: { NavBar, Detail },
  methods: {
    async SelectCategory() {
      const res = await this.$http.get("/category");
      //   console.log(res);
      this.changeCategry(res.data);
    },
    // 处理数据
    changeCategry(data) {
      const category1 = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        return item;
      });
      //   console.log(category1);
      this.category = category1;
      //   console.log(this.category);
      //   处理数据时调用获取首页内容
      this.selectArticle();
    },
    // 获取首页内容的方法
    async selectArticle() {
      const numId = this.categoryItem();
      //   console.log(numId);
      const res = await this.$http.get("/detail/" + numId._id, {
        params: {
          page: numId.page,
          pagesize: numId.pagesize,
        },
      });
      numId.list = res.data;
    },
    // 获取文件内容下标的方法
    categoryItem() {
      const categoryItem = this.category[this.active];
      //   console.log(categoryItem);
      return categoryItem;
    },
  },
  watch: {
    active() {
      //   this.categoryItem();
      this.selectArticle();
    },
  },
  created() {
    this.SelectCategory();
  },
};
</script>

<style lang='less' scope>
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
  //   padding: 10px;
  .detailitem {
    width: 48%;
    margin-top: 20px;
    font-size: 14px;
    // height: 120px;
    // background-color: tomato;
  }
}
</style>