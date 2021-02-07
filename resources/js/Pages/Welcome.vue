<template>
	<DefaultTemp>
		<div class="text-gray-200">
			<template v-if="notLoggedIn">
				<div class="py-12  m-12  flex justify-center items-center">
					<div>
						Now you may
						<button type="button" class="button inline-block mx-2" @click="login">
							Login
						</button>,
						<button type="button" class="button inline-block mx-2" @click="register">
							Sign up
						</button>
					</div>
				</div>
				<div class="m-12 py-12 flex justify-center items-center">
					<div>
						You may also &nbsp;
						<button type="button" class="button inline-block" @click="dashboard">
							Try 
						</button>
					</div>
				</div>
			</template>
		</div>
	</DefaultTemp>
</template>

<script>
import DefaultTemp from "../Layouts/DefaultTemp";
//import { authComputed } from "../helpers";

export default {
	components: { DefaultTemp },
  computed: {
    notLoggedIn() {
      return !this.loggedIn;
    }
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$router.push({ name: "register" });
    },
    dashboard() {
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>

<style lang="scss" scoped>
.button,
button {
  @apply p-2 m-3;
}
</style>
