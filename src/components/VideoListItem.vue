<template>
  <li class="list-group-item media">
    <img class="mr-3" :src="thumbnailURL" />
    <div class="media-body">
      {{ videoTitle }}
    </div>
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
      // Refernce this."propname"
      return this.video.snippet.thumbnails.default.url;
    }
  }
};
</script>

<style lang="scss">
  li {
    display: flex;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
</style>

