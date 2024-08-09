import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/笔记/": [
    {
      text: "笔记",
      icon: "/image/笔记.svg",
      // prefix: "",
      children: "structure"
    }
  ]

});
