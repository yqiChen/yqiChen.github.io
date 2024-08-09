import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/数据库/": [
    {
      text: "SQL语句",
      icon: "/img/SQL.svg",
      link: "SQL"
    }, {
      text: "MyBatis",
      icon: "/img/mybatis.svg",
      link: "MyBatis"
    }, {
      text: "MyBatisPlus",
      icon: "/img/mybatisplus.svg",
      link: "MyBatisPlus"
    }, {
      text: "Redis",
      icon: "/img/redis.svg",
      prefix: "Redis",
      children: "structure",
      link: "Redis/"
    }, {
      text: "MySQL",
      icon: "/img/mysql.svg",
      prefix: "MySQL",
      children: "structure",
      link: "MySQL/"
    }
  ],
  "/posts/工具/": [
    {
      text: "Markdown",
      icon: "/img/markdown.svg",
      link: "Markdown"
    },
    {
      text: "Latex公式",
      icon: "/img/latex.svg",
      link: "latexMath"
    },
    {
      text: "Git",
      icon: "/img/git.svg",
      link: "Git"
    },
    {
      text: "Docker",
      icon: "/img/docker.svg",
      link: "Docker"
    },{
      text: "Kubernetes",
      icon: "/img/k8s.svg",
      link: "k8s"
    }
    
    
  ],
  "/posts/后端/": [
    {
      text: "Java",
        icon: "/img/java.svg",
      prefix: "Java",
      children: "structure"
    },
     {
      text: "SpringBoot",
      icon: "/img/SPRINGBOOT.svg",
      prefix: "springboot",
      children: "structure"
    }, {
      text: "SpringCloud",
      icon: "/img/SpringCloud.svg",
      prefix: "springcloud",
      children: "structure"
    },
    {
      text: "ELK",
      icon: "/img/Elastic.svg",
      prefix: "elasticSearch",
      children: "structure"
    }
  ],
  // "/posts/Java/": [
  //   {
  //     text: "JVM",
  //     icon: "/img/JVM.svg",
  //     link: "jvm"
  //   }
  // ],
  "/posts/基础知识/": [
    {
      text: "操作系统",
      icon: "/img/操作系统.svg",
      prefix: "操作系统",
      children: "structure"
    },
    {
      text: "计算机网络",
      icon: "/img/网络计算机.svg",
      prefix: "计算机网络",
      children: "structure"
    },
    {
      text: "数据结构",
      icon: "/img/数据结构.svg",
      prefix: "数据结构/",
      children: "structure"
    },
    {
      text: "算法",
      icon: "/img/算法.svg",
      prefix: "算法",
      children: "structure"
    }
  ],
  "/posts/项目/": [
    {
      text: "项目",
      icon: "/img/项目.svg",
      link: "/posts/项目/"
    },
    {
      text: "苍穹外卖",
      icon: "/img/外卖.svg",
      prefix: "skytakeout",
      children: "structure"
    },
    {
      text: "黑马商城",
      icon: "/img/商城.svg",
      prefix: "hmall",
      children: "structure"
    },
    {
      text: "黑马头条",
      icon: "/img/头条.svg",
      prefix: "heimaLeadnews",
      children: "structure"
    },
    {
      text: "学成在线",
      icon: "/img/教育.svg",
      prefix: "studyOnline",
      children: "structure"
    }
  ],

});
