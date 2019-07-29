<template>
  <ul>
    <!-- v-for -> for every "item" in "videosToShow" array, make 1 video component -->
    <!-- v-bind -> "video", name of the prop we want to show/use inside the child.  : -->
    <!-- v-bind -> "key", is used whenever our list is updated. Enhances the performance of rerendering our list of items. -->
    <VideoListItem v-for="item in videosToShow" :video="item" :key="item.etag"></VideoListItem>
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
