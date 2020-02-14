<template>
  <transition :name="transitionName" :css="true">
    <slot />
  </transition>
</template>

<script>
import * as TransitionName from '@/utilities/enums/TransitionName'

export default {
	data () {
		return {
			transitionName: TransitionName.SLIDE_LEFT,
			navigatingBack: false
		}
	},
	watch: {
		'$route' (to, from) {
			if(to && to.meta && to.meta.isChildPage == true) {
				this.transitionName = TransitionName.SLIDE_LEFT
			} else if(from && from.meta && from.meta.isChildPage == true) {
				this.transitionName = TransitionName.SLIDE_RIGHT
			} else {
				this.transitionName = TransitionName.NONE
			}
			this.navigatingBack = false
		}
	},
	created () {
		window.addEventListener('before-vue-router-popstate', this.handleUserNavigatesBack)
	},
	beforeDestroy () {
		window.removeEventListener('before-vue-router-popstate', this.handleUserNavigatesBack)
	},
	methods: {
		handleUserNavigatesBack () {
			this.navigatingBack = true
			this.transitionName = TransitionName.SLIDE_RIGHT
		}
	}
}
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 200ms ease-in-out;
}

.slide-left-enter-active,
.slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}
</style>
