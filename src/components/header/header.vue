<template>

  <div class="header">
    <div class="content-wrapper">
      <div class="avatar" >
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">
            {{seller.supports[0].description}}
          </span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
          <p>asdasdasdasdasd</p>
        </div>
      </div>
      <div class="detail-close">
        <i class="fa fa-close" aria-hidden="true"></i>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        detailShow: false
      };
    },
    props: {
      seller: {
        type: Object
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      }
    },
    created() {
      this.classMap = [
        'decrease',
        'discount',
        'guarantee',
        'invoice',
        'invoice'
       ];
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" >
  @import "../../common/style/base.less";
  @import "../../common/style/mixin.less";
  @import "../../common/style/font-awesome.min.css";

  .header {
    position: relative;
    color: #fff;
    background-color: rgba(7,17,27,.5);
    overflow: hidden;
    .content-wrapper {
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar {
        display: inline-block;
        vertical-align: top;
        img {
          border-radius: 2px;
        }
      }
      .content {
        display: inline-block;
        margin-left: 16px;
        font-size: 0;
        .title {
          margin: 2px 0 8px 0;
          .brand {
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            background-image: url("brand@2x.png");
            background-size: 30px 18px;
            background-repeat: no-repeat;

          }
          .name {
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description {
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support {
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              background-image: url("decrease_1@2x.png");
            }
            &.discount {
              background-image: url("discount_1@2x.png");
            }
            &.guarantee {
              background-image: url("guarantee_1@2x.png");
            }
            &.invoice {
              background-image: url("invoice_1@2x.png");
            }
            &.sep {
              background-image: url("invoice_1@2x.png");
            }
          }
          .text {
            display: inline-block;
            vertical-align: top;
            font-size: 12px;
            line-height: 12px;

          }
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        font-size: 12px;
        line-height: 24px;
        border-radius: 14px;
        background-color: rgba(0,0,0,.2);
        text-align: center;
        .count {
          font-size: 10px;
        }
        .icon-arrow_lift {
          font-size: 10px;
        }
      }
    }
    .bulletin-wrapper {
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: rgba(7,17,27,0.2);

      .bulletin-title {
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        background-image: url('bulletin@2x.png');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text {
        vertical-align: top;
        margin: 0 4px;
        font-size: 10px;
      }
      .fa-angle-right {    position: absolute;
        font-size: 10px;
        top: 8px;
        right: 12px;
        z-index: 10;
      }

    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
    .detail {
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(7,17,27,.8);
      backdrop-filter: blur(10px);
      .detail-wrapper {
        min-height: 100%;
        .detail-main {
          margin-top: 64px;
        }
      }
      .detail-close {
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
        text-align: center;
      }
    }
  }

</style>
