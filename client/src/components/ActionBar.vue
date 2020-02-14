<template>
  <div class="action-bar">
    <back-button v-if="showBackButton" class="action-bar__go-back" />
    <slot />
  </div>
</template>

<script>
import BackButton from '@/elements/BackButton.vue'

export default {
	components: {
		BackButton
	},
	props: {
		showBackButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>
.action-bar {
  flex-shrink: 0;
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid rgb(200, 200, 200);
  padding: 15px 8px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  background-color: rgb(244, 244, 244);
}

.action-bar__go-back {
  align-self: center;
  margin-top: -7px;
  margin-bottom: -7px;
  width: 28px;
  height: 35px;
}
</style>
