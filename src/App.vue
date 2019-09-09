<template>
  <div class="container">
    <!-- v-on: for $emit event. Shorthand syntax @ -->
    <SearchBar @termChange="onTermChange"></SearchBar>

    <div class="row">
      <!-- v-bind: for rerendering of child component whenever videos is updated. Shorthand syntax : -->
      <VideoDetail :video="selectedVideo" />

      <!-- props => parent to child -->

      <!-- (:videosToShow) name of the prop we want to show/use inside the child: <VideoList> -->
      <!-- ("videos") name of the prop inside the parent that we want to share -->
      <!-- videoSelected $emit event => Listen for an event being emitted from the VideoList child component. onVideoSelected() is being called anytime this event is triggered. -->
      <VideoList :videosToShow="videos" @videoSelected="onVideoSelected"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyD1rvl87m4jTIIsosFt2TXWkCslZ1UKbHs";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data: function() {
    // data to rerender when prop (videos) is updated
    return { videos: [], selectedVideo: null };
  },
  methods: {
    onVideoSelected(video) {
      this.selectedVideo = video;
      console.log(video);
    },
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
          console.log(response);
        });
    }
  }
};
</script>
