<template>
  <div class="heatmapjs-wrapper layout-lr">
    <heatmapjs-vue
      :max="max"
      :min="min"
      :data="data"
      :options="options"
      :move-drawable="moveDrawable"
      :click-drawable="clickDrawable"
      :draw-value="drawValue" class="hmp-container">
      <div class="hmp-content">
        <p>heatmapjs-vue</p>
      </div>
    </heatmapjs-vue>
    <div class="hmp-prop">
      <label><p>最大值（max）：</p>
        <input type="number" v-model="max"/>
      </label>
      <label><p>最小值（min）：</p>
        <input type="number" v-model="min"/>
      </label>
      <label><p>是否鼠标移动过画布绘制热力图（moveDrawable）：</p>
        <input type="checkbox" v-model="moveDrawable"/></label>
      <label><p>是否鼠标点击画布绘制热力图（clickDrawable）：</p>
        <input type="checkbox" v-model="clickDrawable"/></label>
      <label><p>每次鼠标移动或者点击绘制的热力值（drawValue）：</p>
        <input type="number" v-model="drawValue"/></label>
      <label>
        <p>选项（options）：<a class="hmp-more" href="https://www.patrick-wied.at/static/heatmapjs/docs.html" target="_blank">查看更多</a></p>
        <vue-json-editor v-model="options" mode="code" :show-btns="false"></vue-json-editor>
      </label>
      <label><p>热力数据（data）：</p>
        <vue-json-editor v-model="data" mode="code" :show-btns="false"></vue-json-editor></label>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped src="./index.css"></style>
