<template>
  <div>
    <nav-bar></nav-bar>
    <div class="videobox">
      <div class="video">
        <video :src="model.content" controls="controls"></video>
      </div>
    </div>
    <!-- 打开app 按钮 -->
    <div>
      <div class="btnapp">
        <span>打开app,流畅又高清</span>
      </div>
    </div>
    <div class="detailinfo">
      <div class="hotbtn">
        <span>
          <van-icon name="fire" class="vanicon" size="14" />
          <i>热门</i>
        </span>
        <!-- 标题 -->
        <div class="titlename">{{ model.name }}</div>
      </div>

      <van-icon name="arrow-down" />
    </div>
    <!-- 个人信息实时模块 -->
    <div class="userinfo">
      <div class="userimg">
        <div class="headpor">
          <img :src="imgUrl" alt="" @click="$router.push('/edit')" />
        </div>
        <span>{{ nameUrl }}</span>
      </div>
      <!-- 信息模块 -->
      <div class="info">
        <div class="like">
          <van-icon name="good-job" size="22" color="#757575" />
          <i>52万</i>
        </div>
        <div class="star">
          <van-icon name="star" size="22" color="#757575" />
          <i>10.4万</i>
        </div>
        <div class="cache">
          <van-icon name="send-gift" size="22" color="#757575" />
          <i>缓存</i>
        </div>
      </div>
    </div>
    <!-- 推荐模块和评论模块 -->
    <div>
      <!-- 导航栏 -->
      <van-tabs v-model="active" sticky>
        <van-tab title="相关推荐">
          <div class="detailparent">
            <detail
              class="detailitem"
              :detailitem="item"
              v-for="(item, index) in commendList"
              :key="index"
            >
            </detail>
            <div class="lineapp">
              <span>还看不够？App内尽情探索吧 > </span>
            </div>
          </div>
        </van-tab>
        <!-- 评论栏 -->
        <van-tab title='评论'>
            <comment></comment>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue';
import NavBar from "../components/NavBar.vue";
import Detail from "./Detail.vue";
export default {
  components: { NavBar, Detail, Comment },
  data() {
    return {
      model: {},
      imgUrl: "",
      nameUrl: "",
      active: "",
      commendList: null,
    };
  },
  methods: {
    async articleitemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      // console.log(res);
      this.model = res.data[0];
    },
    // 获取相关推荐的数据
    async commendData() {
      const res = await this.$http.get("/commend");
      // console.log(res);
      this.commendList = res.data;
      // console.log(this.commendList);
    },
  },
  async mounted() {
    const res = await this.$http.get("/user/" + localStorage.getItem("id"));
    this.imgUrl = res.data[0].user_img;
    this.nameUrl = res.data[0].name;
  },
  created() {
    this.articleitemData();
    this.commendData();
  },
  watch: {
    $route() {
      this.articleitemData();
      this.commendData();
    },
  },
};
</script>

<style lang='less' scope>
.videobox {
  // width: 100%;
  .video {
    width: 100%;
    video {
      width: 100%;
    }
  }
}
.detailinfo {
  padding: 15px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btnapp {
  width: 94%;
  background-color: #fb7299;
  padding: 10px;
  // scale: 50%;
  border-radius: 30px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  span {
    color: white;
    font-size: 14px;
  }
}
.hotbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  span {
    padding: 4px;
    background-color: #eee;
    border-radius: 30px;
    font-size: 12px;
    color: #fb7299;
    .vanicon {
      vertical-align: sub;
    }
    // vertical-align: top;

    i {
      margin-left: 0px;
    }
  }
}
.titlename {
  margin-left: 4px;
}
.userinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  .userimg {
    flex: 1;
    display: flex;
    margin-left: 10px;
    // justify-content: center;
    align-items: center;
    .headpor img {
      width: 20px;
      height: 20px;
      background-color: turquoise;
      border-radius: 100%;
    }
    span {
      margin-left: 4px;
      font-size: 10px;
    }
  }
  .info {
    margin-right: 5px;
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      vertical-align: bottom;
      margin-left: 4px;
      font-size: 13px;
      color: #999;
    }
  }
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  //   padding: 10px;
  .detailitem {
    width: 49%;
    margin-top: 10px;
    font-size: 13px;
    // height: 120px;
    // background-color: tomato;
  }
}
.lineapp {
  width: 98%;
  background-color: #f4f4f4;
  margin: auto;
  padding: 8px;
  border-radius: 30px;
  text-align: center;
  margin-top: 20px;
  span {
    // text-align: center;
    font-size: 12px;
  }
}
</style>