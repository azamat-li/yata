<template>
    <div>
        <Navbar></Navbar>
        <slot>  </slot>
        <Foo> </Foo>
    </div>
</template>

<script>
import Navbar from '../Jetstream/Navbar'
import Foo from '../Jetstream/Foo.vue'

    export default {
        components: {
            Foo,
            Navbar
        }
    }
</script>

<style lang="scss" scoped>

</style>
