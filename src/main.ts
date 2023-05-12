import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add fontawesome icons to the library */
library.add(faGithub);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
