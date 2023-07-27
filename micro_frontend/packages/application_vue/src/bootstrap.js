import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./routers";
import { createWebHistory, createMemoryHistory } from "vue-router";

function mount(
  el,
  { isMemoryHistory, basePath, currentPath, onNavigate, sharedData = {} }
) {
  const app = createApp(App, {
    basePath,
    currentPath,
    isMemoryHistory,
    onNavigate,
    sharedData,
  });
  const history = isMemoryHistory
    ? createMemoryHistory(basePath)
    : createWebHistory();

  setupRouter(app, { history });
  app.mount(el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      history.listen((currentPath) => {
        if (currentPath !== nextPathname) {
          history.push(nextPathname);
        }
      });
    },
  };
}

const devRoot = document.querySelector("#application-vue");

if (devRoot) {
  mount(devRoot, { isMemoryHistory: false });
}

export { mount };
