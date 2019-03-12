<template>
  <div class="htmp-container"
    @click="_draw($event, 'click')"
    @mousemove="_draw($event, 'mousemove')"
    @touchmove="_draw($event, 'touchmove')">
    <slot></slot>
  </div>
</template>
<script>
// https://www.patrick-wied.at/static/heatmapjs/docs.html
import h337 from 'heatmap.js'
import debounce from 'lodash.debounce'
import { addResizeListener, removeResizeListener } from '../../utils/detect-element-resize'
import './heatmapjs-vue.css'

export default {
  components: {
  },
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    clickDrawable: {
      type: Boolean,
      default: false
    },
    moveDrawable: {
      type: Boolean,
      default: false
    },
    drawValue: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      defaultOptions: {},
    }
  },
  computed: {
    mOptions () {
      return {
        ...this.defaultOptions,
        ...this.options
      }
    }
  },
  mounted () {
    const $heatmapContainer = this.$el
    this.heatmap = h337.create({
      width: this.$el.clientWidth || 1,
      height: this.$el.clientHeight || 1,
      ...this.mOptions,
      container: $heatmapContainer
    })
    this.heatmap.setData({
      max: this.max,
      min: this.min,
      data: this.data
    })
    addResizeListener(this.$el, this._handleResize)
  },
  beforeDestroy () {
    removeResizeListener(this.$el, this._handleResize)
  },
  watch: {
    mOptions (val) {
      this.heatmap && this.heatmap.configure(val)
    },
    min (val) {
      this.heatmap && this.heatmap.setDataMin(val)
    },
    max (val) {
      this.heatmap && this.heatmap.setDataMax(val)
    },
    data (val) {
      this.heatmap && this.heatmap.setData({
        max: this.max,
        min: this.min,
        data: val
      })
    }
  },
  methods: {
    _handleResize () {
      if (!this.$el) return
      this.heatmap.configure({
        width: this.$el.clientWidth || 1,
        height: this.$el.clientHeight || 1,
        ...this.mOptions,
      })
    },
    _draw: debounce(function (e, type) {
      if (type === 'click' && !this.clickDrawable) return
      if ((type === 'mousemove' || type === 'touchmove') && !this.moveDrawable) return
      let x = e.layerX
      let y = e.layerY
      if (e.touches) {
        x = e.touches[0].pageX
        y = e.touches[0].pageY
      }
      const xField = this.mOptions['xField'] || 'x'
      const yField = this.mOptions['yField'] || 'y'
      const valueField = this.mOptions['valueField'] || 'value'
      if (this.heatmap) {
        this.heatmap.addData({ [xField]: x, [yField]: y, [valueField]: this.drawValue })
        this.$emit('change', this.heatmap.getData().data)
      }
    }, 15),
    addData (val) {
      return this.heatmap && this.heatmap.addData(val)
    },
    getValueAt (val) {
      return this.heatmap && this.heatmap.getValueAt(val)
    },
    getData () {
      return this.heatmap && this.heatmap.getData()
    },
    getDataURL () {
      return this.heatmap && this.heatmap.getDataURL()
    },
    repaint () {
      return this.heatmap && this.heatmap.repaint()
    },
  }
}
</script>
