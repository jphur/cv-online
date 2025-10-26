import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";

const app = createApp(App);

app.use(Quasar, {
    config: {
        // global Quasar config if needed
    },
});

app.mount("#app");
