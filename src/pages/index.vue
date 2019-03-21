<template>
  <div id="Index">
    <div class="head clearfix" >
      <img class="head-bg-img" v-if='classInfo' :src="$getUrl(classInfo.head_bg_img)" alt="">
      <div class="input-box">
        <input class="input" type="text" v-model="key" @keyup.enter="updateList">
        <i class="icon fa fa-search"></i>
      </div>
    </div>

    <div class="nav-box">
      <div :class="['nav-item',{'active':i==activeId}]" @click="activeId=i" v-for="(item,i) in list.navList" :key="item.id">{{item.title}}</div>
    </div>

    <div class="book-list">
      <div class="book-item" @click="$router.push(`info/info?id=${item.book_id}`)" v-for="(item) in list.bookList" :key="item.book_id">
        <img :src="$getUrl(item.head_img)" class="book-img" alt="">
        <div class="book-info">
          <div class="book-title">{{item.title}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>