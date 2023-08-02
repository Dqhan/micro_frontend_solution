import { createApp } from "vue";
import App from "./App.vue";

function mount(el, { shared }) {
  const app = createApp(App, {
    shared,
  });

  app.mount(el);
}

const devRoot = document.querySelector("#application-vue");

if (devRoot) {
  mount(devRoot, { isMemoryHistory: false });
}

export { mount };
