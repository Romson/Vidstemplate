<template>
  <!-- v-on: for $emit event. Shorthand syntax @ -->
  <!-- onVideoSelect will be emitted to parent <VideoList> and will pass on the argument: videoSelect and property: this.video -->
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailURL" />
    <div class="media-body">{{ videoTitle }}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
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
