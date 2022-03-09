<template>
  <div class="buttom_wrapper">
    <div class="copyright">
      <div class="info_wrapper">
        <a href="" target="_blank">设为首页</a>
        <span>&#169;&nbsp;Judy&nbsp;</span>
        <a href="" target="_blank">ILoveU</a>
        <a href="" target="_blank">意见反馈</a>
        <span>&nbsp;京ICP证0000001号&nbsp;</span>
        <img width="13" height="16"
          src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/copy_rignt_8.png" />
      </div>
      <div class="recordcode">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001"
          target="_blank">&nbsp;&nbsp;&nbsp;京公网安备0000000000001号
        </a>
      </div>
    </div>
    <div class="backTop" v-show="showBackTop" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="iconText" v-if="showText" @click="backTop">
        <span>返回顶部</span>
      </div>
      <div class="iconArrow" v-else>
        <i></i>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        showText: false,
        showBackTop: false
      }
    },
    methods: {
      onMouseEnter() {
        console.info('onMouseEnter', 'onMouseEnter');
        this.showText = true;
      },
      onMouseLeave() {
        console.info('onMouseLeave', 'onMouseLeave');
        setTimeout(() => {
          this.showText = false;
        }, 200);
      },
      backTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      onPageScrolling() {
        console.log('scrolling!');
        let ScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body
          .scrollTop || 0;
        if (ScrollTop > 100) {
          this.showText = false;
          this.showBackTop = true;
        } else {
          this.showBackTop = false;
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onPageScrolling);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buttom_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info_wrapper {
    display: inline-block;
    line-height: 16px;
    width: 100%;
    text-align: center;
  }

  .info_wrapper a {
    color: #999;
  }

  .recordcode {
    width: 100%;
    text-align: center;
  }

  .recordcode a {
    display: inline-block;
    line-height: 16px;
    color: #999;
    background: url(../assets/img/icon_police.png) 0 0 no-repeat;
  }

  .buttom_wrapper .backTop {
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 34px;
    left: 50%;
    margin-left: 457px;
    border: 1px solid #e3e3e3;
    cursor: pointer;
  }

  .buttom_wrapper .backTop .iconArrow {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: #fafafa;
    cursor: pointer;
  }

  .buttom_wrapper .backTop .iconArrow i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    height: 13px;
    width: 33px;
    background: url(../assets/img/topfed.png) no-repeat -1px -10px;
  }

  .buttom_wrapper .backTop .iconText {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 7px;
    width: 40px;
    height: 40px;
    background-color: #eee;
    line-height: 16px;
    font-size: 13px;
    color: #999;
  }
</style>