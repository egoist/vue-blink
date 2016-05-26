export default {
	props: {
		text: {
			type: String
		},
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
  template: `<span :style="{visibility: visible ? 'visible' : 'hidden'}">{{ text }}</span>`,
  ready() {
    this.timer = setInterval(() => {
      this.visible = !this.visible
    }, this.duration)
  }
}
