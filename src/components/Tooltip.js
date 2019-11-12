import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const PLACEMENTS = ['top', 'bottom', 'left', 'right'];
const isPlacement = val => PLACEMENTS.includes(val);

export default {
  name: 'tooltip',
  props: {
    content: { type: String, default: '' },
    display: { type: Boolean, default: false },
    event: { type: String, default: 'mouseenter focus' },
    config: { type: Object, default: () => ({}) }
  },
  data: () => ({ tooltip: null }),
  computed: {
    placement() {
      return Object.keys(this.$attrs).filter(it => isPlacement(it))[0] || PLACEMENTS[0];
    }
  },
  methods: {
    initializeTooltip() {
      if (this.tooltip) this.tooltip.destroy();
      this.tooltip = tippy(this.$slots.default[0].elm, {
        ...this.config,
        content: this.getContent(),
        trigger: this.event,
        placement: this.placement
      });
    },
    /**
     * Lazy fetching tooltip content. computed wont catch slot changes.
     * Use slot value if it exits, otherwise revert to prop content.
     */
    getContent() {
      const contentSlot = this.$slots.content && this.$slots.content[0];
      if (contentSlot && contentSlot.text) return contentSlot.text;
      return this.content;
    },
    setContent() {
      this.tooltip.setContent(this.getContent());
    }
  },
  render() {
    return this.$slots.default;
  },
  watch: {
    content() {
      this.setContent();
    },
    display(val) {
      if (!this.tooltip) return;
      return val ? this.tooltip.show() : this.tooltip.hide();
    }
  },
  updated() {
    // Slot content has potentially changed, update the tooltip content.
    this.setContent();
  },
  mounted() {
    this.initializeTooltip();
  },
  beforeDestroy() {
    if (this.tooltip) this.tooltip.destroy();
  }
};
