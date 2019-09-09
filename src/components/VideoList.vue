<template>
  <ul class="list-group col-md-4">
    <!-- v-for -> for every "item" in "videosToShow" array, make 1 video component -->
    <!-- v-bind -> "video", name of the prop we want to show/use inside the child <VideoListItem>  : -->
    <!-- v-bind -> "key", is used whenever our list is updated. Enhances the performance of rerendering our list of items. -->
    <!-- videoSelect emitted from child <VideoListItem> along with the "video" property with it. The clickVideoSelect() is called anytime the videoSelect event is triggered. This method will then pass on the argument: "videoSelected" and property: "video" up to the parent component <App>  -->
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
  // "videosToShow" name of the prop we want to show/use inside the child: <VideoList>
  // "videos" name of the prop inside the parent that we want to share
  props: ["videosToShow"],
  // Can also be syntaxed with prop validition where key(s) is propname and value is data type, example below.
  // https://vuejs.org/v2/guide/components-props.html#Prop-Validation
  // props: {
  //     videosToShow: Array
  // }

  methods: {
    // clickVideoSelect() will $emit an event to parent <App> and will pass on the argument: "videoSelected" and property: "video". This "video" property was initially $emitted as an event ocurring in the child component <VideoListItem> with property value: this.video. We receive this peoperty as a
    clickVideoSelect(video) {
      this.$emit("videoSelected", video);
    }
  }
};
</script>

<style>
</style>
