<template>
  <div id="Index">
    <div class="head clearfix">
      <img class="head-bg-img" src="banner.jpg" alt="">
      <div class="input-box">
        <input class="input" type="text">
        <i class="icon fa fa-search"></i>
      </div>
    </div>

    <div class="nav-box">
      <div :class="['nav-item',{'active':i==activeId}]" @click="activeId=i" v-for="(item,i) in list.navList" :key="item.id">{{item.title}}</div>
    </div>

    <div class="book-list">
      <div class="book-item" @click="$router.push(`info/info?id=${item.id}`)" v-for="(item) in list.bookList" :key="item.id">
        <img :src="item.book_head" class="book-img" alt="">
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