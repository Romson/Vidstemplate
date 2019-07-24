<template>
    <div>
        <!-- v-on: for $emit event. Shorthand syntax @ -->
        <input @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            // $emit (eventname: termChange) => child to parent
            this.$emit('termChange', event.target.value);
        }
    }
}
</script>

<style>

</style>
