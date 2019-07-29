<template>
  <ul>
    <VideoListItem v-for="myVideo in videosToShow" v-bind:video="myVideo"></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videosToShow"]
  // Can also be syntaxed with prop validition where key(s) is propname and value is data type, example below.
  // https://vuejs.org/v2/guide/components-props.html#Prop-Validation
  // props: {
  //     videosToShow: Array
  // }
};
</script>

<style>
</style>
