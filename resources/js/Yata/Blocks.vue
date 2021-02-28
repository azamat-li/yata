<template>
  <div class="top-0  rounded-lg  my-2 mr-3 p-2">
    <div class="flex flex-wrap ">
			<Block>
        v-for="(form, formIndex) of forms"
        :formProp="form"
        :key="formIndex"
        :form="form"
      >
			</Block>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Block from "@/Jetstream/Block"

export default {
  components: {
			Block
  },
  computed: {
    ...mapState(['schoolTimetable']),
    forms() {
      return this.schoolTimetable.forms
    }
  }
}
</script>
<style lang="css" scoped></style>
