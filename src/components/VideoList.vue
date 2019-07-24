<template>
    <ul>
        VideoList
        {{ videosToShow }}
    </ul>
</template>

<script>
export default {
    name: 'VideoList',  
    
    props: ['videosToShow']
    // Can also be syntaxed with prop validition where key(s) is propname and value is data type
    // https://vuejs.org/v2/guide/components-props.html#Prop-Validation
    // props: {
    //     videosToShow: Array
    // }
};
</script>

<style>

</style>
