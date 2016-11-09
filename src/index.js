export default {
  props: {
    duration: {
      type: Number,
      default: 530
    }
  },
  data() {
    return {
      visible: true,
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.visible = !this.visible
    }, this.duration)
  },
  render(h) {
    const style = {
      visibility: this.visible ? 'visible' : 'hidden'
    }
    return h('span', {style}, this.$slots.default)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
