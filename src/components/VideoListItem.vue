<template>
  <!-- v-on: for $emit event. Shorthand syntax @ -->
  <!-- onVideoSelect() will $emit an event to parent <VideoList> and will pass on the argument: videoSelect and property: this.video. This event will eventually bubbble all the way up to the grandParent App.vue -->
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailURL" />
    <div class="media-body">{{ videoTitle }}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  // prop that has been passed on from the parent <VideoList>
  props: ["video"],
  computed: {
    videoTitle() {
      return this.video.snippet.title;
    },
    thumbnailURL() {
      // Reference this."propname" -> to shorten the reference location
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    // onVideoSelect() will $emit an event to parent <VideoList> and will pass on the argument: videoSelect and property: this.video. This has been passed on as a prop from the parent <VideoList>. See above comment.
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}
</style>
