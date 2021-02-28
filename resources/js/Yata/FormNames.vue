<template>
  <div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schoolTimetable.forms"
      :key="formIndex"
      :form="form"
      :formIndex="formIndex"
      :indent="getIndent(formIndex)"
      :isEditable="true"
    >
    </FormWithTimeRow>
    <AddForm />
    <ToggleEditability
      :editableStateString="true"
      class="text-left"
    ></ToggleEditability>
  </div>
</template>

<script lang="ts">
import FormWithTimeRow from './FormWithTimeRow.vue'
import AddForm from './AddForm.vue'
import ToggleEditability from './ToggleEditability.vue'

export default {
  components: {
    FormWithTimeRow,
    AddForm,
    ToggleEditability
  },
  data() {
    const editableStateString = 'globalTimetableIsEditable'
    return { editableStateString }
  },
  computed: {
//    ...mapState(['globalTimetableIsEditable', 'schoolTimetable'])
  },
  methods: {
    getIndent(formIndex) {
      let indent = 0
      indent = (formIndex % 10) * 9
      return indent
    }
  }
}
</script>

<style scoped>
input {
  @apply rounded-full;
  margin-left: auto;
}
</style>
