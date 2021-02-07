<template>
  <div id="nav" class="rounded-full">
		<div class="pl-3 pb-1 flex justify-center items-center">
			<div>
				<button type="button" class="btn inline-block" @click="login">Login</button>
				<button type="button" class="btn inline-block" @click="register">Register</button>
				<button type="button" class="btn inline-block" @click="goToDashboard">Dashboard</button>
				<button type="button" class="logoutButton inline-block btn" @click="logout">Logout</button>
			</div>
		</div>
  </div>
</template>

<script>
import { authComputed } from "../helpers";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    ...authComputed,
    notLoggedIn() {
      return !this.loggedIn;
    },
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    logout() {
      this.$router.push("/");
      this.$store.dispatch("logout");
    },
    register() {
      this.$router.push({ name: "register" });
    },
    goToDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  background: radial-gradient(
    circle farthest-corner at 4.7% 14%,
    rgba(48, 225, 152, 1) 0%,
    rgba(9, 123, 226, 1) 90%
  );
}
.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}
a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
}
.router-lint-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

button,
.btn {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
  @apply rounded-full p-1 m-1 inline-block;

  &.router-link-active {
    color: #2c3e50;
  }
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
