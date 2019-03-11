<template>
  <div class="heatmapjs-wrapper layout-lr">
    <no-ssr>
      <heatmapjs-vue
        :max="max"
        :min="min"
        :data="data"
        :options="options"
        :move-drawable="moveDrawable"
        :click-drawable="clickDrawable"
        :draw-value="drawValue"
        @change="handleChange" class="hmp-container">
        <div class="hmp-content">
          <p>heatmapjs-vue</p>
        </div>
      </heatmapjs-vue>
    </no-ssr>
    <div class="hmp-prop">
      <label><p>data max(max)：</p>
        <input type="number" v-model="max"/>
      </label>
      <label><p>data min(min)：</p>
        <input type="number" v-model="min"/>
      </label>
      <label><p>move drawable(moveDrawable)：</p>
        <input type="checkbox" v-model="moveDrawable"/></label>
      <label><p>click drawable(clickDrawable)：</p>
        <input type="checkbox" v-model="clickDrawable"/></label>
      <label><p>draw value(drawValue)：</p>
        <input type="number" v-model="drawValue"/></label>
      <label>
        <p>options(options)：<a class="hmp-more" href="https://www.patrick-wied.at/static/heatmapjs/docs.html" target="_blank">read more</a></p>
        <vue-json-editor v-model="options" mode="code" :show-btns="false"></vue-json-editor>
      </label>
      <label><p>heatmap data(data)：</p>
        <vue-json-editor v-model="data" mode="code" :show-btns="false"></vue-json-editor></label>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped src="./index.css"></style>
