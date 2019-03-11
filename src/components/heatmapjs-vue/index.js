import heatmapjsVue from './heatmapjs-vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  heatmapjsVue
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
