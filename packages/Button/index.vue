<template>
    <button :class="classes"
            @click="handleClick"
            :disabled="disable">
        <i v-if="icon" :class="['iconfont', icon ? icon : '']"></i>
        <span v-if="showSlot"><slot>6</slot></span>
    </button>
</template>
<script>
export default {
  name: 'ni-button',
  data() {
    return {
      showSlot: true,
    };
  },
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    type: {
      type: String,
      default: 'default',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        't-btn',
        `t-btn-${this.type}`,
        `t-btn-${this.size}`,
        {
          [`t-btn-${this.shape}`]: this.shape !== 'default',
        },
      ];
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
  mounted() {
    this.showSlot = this.$slots.default !== undefined;
  },
};
</script>

<style>
	.t-btn-small{
		width: 20%;
		padding: 10px 0;
	}
	.t-btn-large{
		width: 60%;
		padding: 40px 0;
	}
	.t-btn-normal{
		width: 40%;
		padding: 30px 0;
	}
	button{
		display: block;
	}
</style>