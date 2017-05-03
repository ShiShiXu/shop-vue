<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </div>
        <div class="price">￥{{totalPrice}}元</div>
        <div class="desc">另需配送费￥{{deliveryPrice}} 元</div>
      </div>
      <div class="content-right">
        <div class="pay">￥{{minPrice}} 元</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [
            {
              price: 10,
              count: 6
            }
          ];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice: function () {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    .content {
      display: flex;
      background-color: #141d27;
      font-size: 0;
      height: 48px;
      .content-left {
        flex: 1;
        .logo-wrapper {
          display: inline-block;
          vertical-align: top;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          border-radius: 50%;
          background-color: #141d27;
          .logo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #2b343c;
            text-align: center;
            i {
              position: relative;
              top: 2px;
              left: -2px;
              font-size: 24px;
              line-height: 36px;
              color: #80858a;
            }
          }
        }
        .price {
          display: inline-block;
          vertical-align: top;
          text-align: center;
          margin-top: 12px;
          line-height: 24px;
          box-sizing: border-box;
          padding-right: 12px;
          border-right: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.4);
          font-size: 16px;
          font-weight: 700;
        }
        .desc {
          display: inline-block;
          vertical-align: top;
          font-size: 10px;
          line-height: 24px;
          margin: 12px;
          color: rgba(255,255,255,.4);
        }
      }
      .content-right {
        flex: 0 0 105px;
        width: 105px;
        background-color: #fff;
        .pay {
          color: rgba(255,255,255,.4);
          line-height: 48px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background-color: #2b333b;
          .not-enough {
            background: #2b333b;
          }
        }
      }
    }
  }
</style>
