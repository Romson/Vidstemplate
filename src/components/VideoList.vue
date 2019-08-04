<template>
  <ul class="list-group">
    <!-- v-for -> for every "item" in "videosToShow" array, make 1 video component -->
    <!-- v-bind -> "video", name of the prop we want to show/use inside the child <VideoListItem>  : -->
    <!-- v-bind -> "key", is used whenever our list is updated. Enhances the performance of rerendering our list of items. -->
    <!-- videoSelect emitted from child <VideoListItem> along with the "video" property with it. The clickVideoSelect() is called anythime the videoSelect event is triggered -->
    <VideoListItem
      v-for="item in videosToShow"
      :video="item"
      :key="item.etag"
      @videoSelect="clickVideoSelect"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videosToShow"],
  // Can also be syntaxed with prop validition where key(s) is propname and value is data type, example below.
  // https://vuejs.org/v2/guide/components-props.html#Prop-Validation
  // props: {
  //     videosToShow: Array
  // }

  methods: {
    clickVideoSelect(video) {
      this.$emit("videoSelected", video);
    }
  }
};
</script>

<style>
</style>
