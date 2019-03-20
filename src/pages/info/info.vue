<template>
  <div id="info">
    <div class="head">
      <div class="head-img">
        <img src="http://i0.rongshuxia.com/files/image2/zhangchi/5_.jpg">
      </div>
      <div class="head-info">
        <div class="title">Lorem ipsum</div>
      </div>
    </div>

    <div class="info-tab">
      <div :class="['info-tab-item info-1',{'active':active==1}]" @click="active=1">内容简介</div>
      <div :class="['info-tab-item info-2',{'active':active==2}]" @click="active=2">出版信息</div>
    </div>
    <div class="info-tab-box">
      <div class="info-tab-box-item box-1" v-if="active==1">
        1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore incidunt exercitationem consequuntur minima, ipsum possimus, corporis autem, sed dolore perferendis nemo recusandae necessitatibus illum et iure doloremque! Obcaecati, fuga cupiditate?
      </div>
      <div class="info-tab-box-item box-2" v-if="active==2">
        2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore incidunt exercitationem consequuntur minima, ipsum possimus, corporis autem, sed dolore perferendis nemo recusandae necessitatibus illum et iure doloremque! Obcaecati, fuga cupiditate?
      </div>
    </div>
    <div style="padding:0 0.3rem">
      <h5>内容目录</h5>
    </div>

    <div class="content-list">
      <div class="content-item" @click="show(item,i)" v-for="(item,i) in list" :key="i">
        <div class="content-title">{{item.title}}
          <i class="content-icon fa fa-caret-right"></i>
        </div>
        <div class="content-file" v-if="contentActive==i">
          <audio controls v-if="item.type==2">
            <source :src="$getUrl(item.url)">
          </audio>

          <video controls v-if="item.type==3">
            <source :src="$getUrl(item.url)">
          </video>
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./info.js"></script>
<style lang="scss" scoped>
@import "info.scss";
</style>