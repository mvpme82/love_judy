<template>
  <div class="container">
    <div class="topbar">首页，我爱孟萱</div>
    <div class="title">

    </div>
    <div class="content">
      <div class="left_content">
        <div class="article_content">

        </div>
        <div class="comments">评论</div>
      </div>
      <div class="right_content">
        <div class="latest_news">最新文章</div>
        <div class="relative_news">相关文章</div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Footer from './Footer.vue'
  export default {
    name: 'ListPage',
    props: {

    },
    components: {
      Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    /* Safari */
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .topbar {
    width: 100%;
    background-color: beige;
    height: 72px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.10);
    border-image: linear-gradient(rgba(255, 255, 255, .95) 0%, rgba(255, 255, 255, .95) 100%);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
  }

  .title {
    width: 100%;
    background-color: #f8f8f9;
  }

  .content {
    width: 100%;
    display: flex;
    /* Safari */
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
  }

  .left_content {
    width: 600px;
    position: relative;
    background-color: #fff;
    padding-right: 50px;
  }

  .left_content .article_content {
    height: 800px;
    padding-top: 40px;
    padding-bottom: 30px;
  }

  .left_content .comments {
    height: 800px;
  }

  .content .right_content {
    width: 200px;
    position: relative;
    background-color: #fff;
    padding-left: 50px;
    margin-left: 1px;
  }

  .footer {
    width: 100%;
    height: 75px;
    display: block;
    background-color: #fff;
    border-top: 1px solid #eee;
    padding: 0 0 12px;
  }
</style>