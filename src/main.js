import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/css/init.css";
import "./utils/setRem";

// 1. 引入你需要的组件
import vant from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";

createApp(App).use(router).use(vant).mount("#app");
