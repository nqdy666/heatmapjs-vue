import './styles/index.css'
import * as components from './components'
import {
  vueUse
} from './utils/plugins'

const VuePlugin = {
  install: function (Vue) {
    if (Vue._heatmapjs_vue) {
      return
    }
    Vue._heatmapjs_vue = true

    // Register component plugins
    for (let plugin in components) {
      Vue.use(components[plugin])
    }
  }
}

vueUse(VuePlugin)

export default VuePlugin
