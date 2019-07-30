<template>
  <div class="container">
    <!-- v-on: for $emit event. Shorthand syntax @ -->
    <SearchBar @termChange="onTermChange"></SearchBar>

    <!-- props => parent to child -->
    <!-- v-bind: for rerendering of child component whenever videos is updated. Shorthand syntax : -->
    <!-- (:videosToShow) name of the prop we want to show/use inside the child. -->
    <!-- ("videos") name of the prop inside the parent that we want to share -->
    <VideoList :videosToShow="videos"></VideoList>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyBDmgdtzAL9vEky1W1ojWdXqOPTJ524jPU";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList
  },
  data: function() {
    // data to rerender when prop (videos) is updated
    return { videos: [] };
  },
  methods: {
    onTermChange: function(searchTerm) {
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
