declare module 'heatmapjs-vue' {
  import Vue, { PluginFunction, PluginObject } from 'vue'

  class HeatmapjsVue implements PluginObject<{}> {
    [key: string]: any
    public install: PluginFunction<{}>
  }

  const VuePlugin: HeatmapjsVue

  export default VuePlugin

  // Interfaces
  export interface HeatmapjsVue extends Vue {
    addData: () => any
    getValueAt: () => any
    getData: () => any
    getDataURL: () => any
    repaint: () => any
  }
}
