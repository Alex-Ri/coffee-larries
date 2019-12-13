<template>
	<navigation-transition>
    <router-view class="app"></router-view>
	</navigation-transition>
</template>

<script>
import NavigationTransition from './components/NavigationTransition.vue'
import ExampleService from './api/ExampleService'

export default {
	components: {
		NavigationTransition
	},
	mounted() {
		ExampleService.getExampleMessage()
		ExampleService.postExampleMessage()
	}
}

</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.soft-slide-left-enter-active,
.soft-slide-left-leave-active,
.soft-slide-right-enter-active,
.soft-slide-right-leave-active {
  transition: all 200ms ease-in-out;
}

.soft-slide-left-enter-active,
.soft-slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.soft-slide-right-leave-active {
  position: relative;
  z-index: 1;
}

.soft-slide-left-leave-to {
  transform: translateX(-20%);
}

.soft-slide-left-enter {
  transform: translateX(100%);
}

.soft-slide-right-leave-to {
  transform: translateX(100%);
}

.soft-slide-right-enter {
  transform: translateX(-20%);
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
