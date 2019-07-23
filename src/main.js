import Vue from "vue";
import App from "./App";

new Vue({
	el: "#app",
	render: h => h(App)
});

// new Vue({
// 	render: h => h(app)
// }).$mount("#app");

// The above can also be syntaxed as:
// new Vue({
// 	render: function(createElement) {
// 		return createElement(App);
// 	}
// }).$mount("#app");
