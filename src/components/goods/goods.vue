<template>

  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex==index}">
          <span class="text border">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><!--
                  --><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><!--
                  --><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :delivery-pricce="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>

</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcart from '../shopcart/shopcart.vue';
  console.log(BScroll);

  export default {
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0
      };
    },
    props: {
      seller: {
        type: Object
      }
    },
    computed: {
      currentIndex() {
       for (let i = 0; i < this.listHeight.length; i++) {
         let height1 = this.listHeight[i];
         let height2 = this.listHeight[i + 1];
         if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
           return i;
         }
       }
       return 0;
      }
    },
    created() {
      this.classMap = [
        'decrease',
        'discount',
        'guarantee',
        'invoice',
        'sepcial'
      ];
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        this.goods = response.data;
        this.$nextTick(() => {
          // DOM 现在更新了
          // `this` 绑定到当前实例
          this._initScroll();
          this._calculateHeight();
        });
      });
    },
    methods: {
      _initScroll() {
       this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
       this.foodScroll = new BScroll(this.$refs.foodWrapper, {
         probeType: 3
       });
       this.foodScroll.on('scroll', (pos) => {
         this.scrollY = Math.abs(Math.round(pos.y));
       });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      }
    },
    components: {
      shopcart
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
  @import "../../common/style/mixin.less";

  ::-webkit-scrollbar {
    width: 0;
    opacity: 0.6;
  }

  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      font-size: 0;
      background-color: #f3f5f7;
      .menu-item {
        display: table;
        width: 54px;
        height: 54px;
        line-height: 14px;
        padding: 0 12px;
        &.current {
          position: relative;
          background-color: #fff;
          font-weight: 700;
          margin-top: -1px;
          z-index: 10;
          .text {
            .border-none();
          }
        }
        .icon {
          display: inline-block;
          flex: 0;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            background-image: url("decrease_1@3x.png");
          }
          &.discount {
            background-image: url("discount_1@3x.png");
          }
          &.guarantee {
            background-image: url("guarantee_1@3x.png");
          }
          &.invoice {
            background-image: url("invoice_1@3x.png");
          }
          &.sepcial {
            background-image: url("special_1@3x.png");
          }
        }
        .text {
          display: table-cell;
          width: 54px;
          vertical-align: middle;
          font-size: 12px;
          .border(rgba(7,17,27,.1));
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      transition: all .4s ease;/*
      -webkit-overflow-scrolling: touch;
      overflow-y: scroll;*/


      .title {
        padding-left: 14px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147,153,159);
        background-color: #f3f5f7;
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        position: relative;
        .border(rgba(7,17,27,.1));
        &:last-child {
          .border-none();
        }
        .icon {
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content {
          flex: 1;
          .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7,17,27);
          }
          .desc, .extra {
            line-height: 10px;
            font-size: 10px;
            color: rgb(147,153,159);
          }
          .desc {
            margin-bottom: 8px;
            line-height: 12px;
          }
          .extra {
            line-height: 10px;
            .count {
              margin-right: 12px;
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240,20,20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147,153,159);
            }
          }
        }
      }
    }
  }

</style>
