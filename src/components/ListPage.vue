<template>
  <div class="container">
    <div class="topbar">首页，我爱孟萱</div>
    <div class="title">

    </div>
    <div class="content">
      <el-tabs v-model="curTabName" type="card" editable class="demo-tabs" @edit="handleTabsEdit"
        @tab-click="handleTabClicked">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Footer from './Footer.vue'
  import Store from '../store'
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'ListPage',
    props: {

    },
    components: {
      Footer
    },
    data() {
      return {
        editable: true,
        curTabName: "1",
        curTabNameIndex: "1",
        tabIndex: 2,
        editableTabs: Store.state.tabInfo
      }
    },
    methods: {
      handleTabsEdit() {
        let new_tab_name = ++this.tabIndex;
        let new_tab = {
          title: '新建标签',
          name: new_tab_name.toString()
        };
        this.addToTab(new_tab);
        this.curTabName = this.tabIndex.toString();
        this.curTabNameIndex = this.curTabName;
        console.log("curTabName = ", this.curTabName);
        console.log("tabIndex = ", this.tabIndex);
      },
      ...mapActions({
        addToTab: 'addItemToTabs'
      }),
      handleTabClicked(tab, event) {
        console.log(tab.props.name);
        console.log('this.curTabName = ', this.curTabName);
        console.log("tabIndex = ", this.tabIndex);
        console.log(tab.props);
        console.log(event);
        if (this.curTabName === this.curTabNameIndex) {
          console.log("同一个标签的点击，直接返回！");
          return;
        }
        console.log("标签切换，原来的标签名：" + this.curTabNameIndex + ", 新的标签名：" + this.curTabName);
        console.log("在这里做一些刷新逻辑！");
        console.log("原标签名 " + this.curTabNameIndex + " 将被切换为 " + this.curTabName);
        this.curTabNameIndex = this.curTabName;
        console.log("切换后的当前标签名为 this.curTabNameIndex = " + this.curTabNameIndex + " this.curTabName = " + this
          .curTabName);
      }
    },
    computed: {

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