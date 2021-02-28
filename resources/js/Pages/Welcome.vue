<template>
	<default-temp>
		<div class="text-gray-200">
			<template v-if="notLoggedIn">
				<div class="py-12  m-12  flex justify-center items-center">
					<div>
						Now you may
						<button data-cy="login" type="button" class="button inline-block mx-2">
                <inertia-link  :href="route('login')" class="text-sm  nounderline">
                    Login
                </inertia-link>
						</button>,
						<button data-cy="register" type="button" class="button inline-block mx-2">
								<inertia-link :href="route('register')" class=" text-sm  nounderline">Register</inertia-link>
						</button>
					</div>
				</div>
				<div class="m-12 py-12 flex justify-center items-center">
					<div>
						You may also &nbsp;
						<button   type="button" class="button inline-block">
							<inertia-link data-cy="dashboard" href="/dashboard"   class="text-sm  nounderline">Try</inertia-link>
						</button>
					</div>
				</div>
			</template>
		</div>
	</default-temp>
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
		projectUrl() {
				return route('blocks')
		},
	}
}
</script>

<style lang="scss" scoped>
.button,
button {
  @apply p-2 m-3;
}
</style>
