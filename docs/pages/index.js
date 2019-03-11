export default {
  data () {
    return {
      options: {
        "backgroundColor": "#ffffff"
      },
      min: 0,
      max: 100,
      moveDrawable: true,
      clickDrawable: false,
      drawValue: 5,
      data: [{ x: 200, y: 100, value: 100}]
    }
  },
  methods: {
    handleChange (val) {
      this.data = val
    }
  }
}
