<template>
  <div>
    <div class="commentparent">
      <div class="headimg">
        <img src="" alt="" />
      </div>
      <div class="content">
        <div class="headinfo">
          <div>
            <div class="headname">
              <p>昵称</p>
              <div class="headtime">2-22</div>
            </div>
          </div>

          <div class="like">
            <van-icon name="good-job-o" />
            <span>5.6万</span>
          </div>
        </div>
        <div class="commentitle">
          <span> 2021年第一稿 </span>
        </div>
        <div class="replycontent">
          <commentreply></commentreply>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Commentreply from "./Commentreply.vue";
export default {
  components: { Commentreply },
  methods: {
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      console.log(res);
    },
  },
  created() {
    this.commentData();
  },
};
</script>

<style lang="less" scope>
.commentparent {
  display: flex;
  // justify-content: center;
  .headimg {
    flex: 1;
    margin-left: 10px;
    img {
      width: 7vw;
      height: 7vw;
      background-color: #f4f4f4;
      border-radius: 30px;
    }
  }
  .content {
    flex: 6;
    margin-right: 10px;
    .headinfo {
      display: flex;
      justify-content: space-between;
    }
    .replycontent {
      width: 100%;
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
    }
  }
}
</style>