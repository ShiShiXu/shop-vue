<template>
  <div>

    <shop-header :seller="seller"></shop-header>

    <div class="tabs border">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div class="">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  // 从别的 .vue 文件引入组件并重命名，import 后面跟着的是重命名后的名字
  import header from './components/header/header.vue';
  // 把组件暴露出去，以便别的文件可以使用
  export default {
    data() {
      return {
        seller: {
          type: Object
        }
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        this.seller = response.data;
        console.log(this.seller);
      });
    },
    // 局部注册一个组件，该组件将只在父模板可用
    components: {
      'shop-header': header
    }
  };
</script>

<style lang="less" type="text/less" >
  @import "common/style/mixin.less";

  * {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif;
    &:before, &:after {
      box-sizing: border-box;
    }
  }

  html, body {
    height: 100%;
  }


  .tabs {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    .border(rgba(7,17,27,0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        font-size: 14px;
        color: #4d555d;
      }
    }
  }

</style>

