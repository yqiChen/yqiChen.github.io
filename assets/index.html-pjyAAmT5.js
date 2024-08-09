import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as i,b as a,o as n}from"./app-Di6OdOcP.js";const o={},r=a('<h1 id="黑马头条" tabindex="-1"><a class="header-anchor" href="#黑马头条"><span>黑马头条</span></a></h1><p>主要着手于获取最新最热新闻资讯，内容以技术类文章为主，为终端学习用户提供精准的、感兴趣的技术文章，通过大数据分析用户喜好精确推送资讯新闻，主要由JAVA语言开发，采用spirngBoot框架快速开发和springCloud微服务技术架构实现。</p><h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h2><p>Springboot、Springcloud（Nacos、Feign、GateWay）、Redis、xxl-job、MySQL、FastDFS、 ElasticSearch、Kafka、KafkaStream、MyBatis、Seata、SkyWalking、jenkins等。</p><h2 id="实现功能" tabindex="-1"><a class="header-anchor" href="#实现功能"><span>实现功能</span></a></h2><p>以文章为主线的核心业务主要分为如下子模块（目前已经全部实现）：</p><ul><li><p>管理员模块：该模块主要负责管理员登录功能、审核所有可能成为“西电校园头条”文章作者的实名认证功能、文章发布内 容的人工审核功能、用户列表显示功能、文章列表显示功能、文章频道管理功能、敏感词管理等功能。</p></li><li><p>自媒体模块：自媒体用户创建功能、文章发布功能、素材管理功能等功能。</p></li><li><p>app端用户模块：登录功能、文章显示功能、热点文章推荐功能、热搜功能、点赞评论收藏功能、文章推荐功能。</p></li></ul><h2 id="项目亮点" tabindex="-1"><a class="header-anchor" href="#项目亮点"><span>项目亮点</span></a></h2><ul><li>使用springsecurity设计权限认证服务，支持基于账号密码、手机验证码登录，以及整合0auth2.0，支持基于微信扫码、微博三方登录;</li><li>设计并发查询接口时，针对热点数据、读多写少、字典数据均使用Redis进行缓存，优化查询性能，并针对性的设计TTL过期时间，以及一些常 规的缓存问题进行处理;</li><li>针对热点文章，使用Freemarker视图渲染模版引擎，实现页面静态化，将静态化资源部署到nginx服务器，降低对tomcat的压力:</li><li>针对站内信模块，使用redis设计业务场景，将非强一致性的数据缓存到Redis，降低对DB的压力:</li><li>使用Redis的zset进行分值计算，求出某时间段内的热点文章、热点资讯:</li><li>使用MinIo搭建分布式文件存储集群，存储图像、视频、音频等项目资源;</li><li>使用0CR技术，实现图文识别功能，将图片中的文字提取，并进行录入:</li><li>使用RabbitMq死信队列实现延迟队列效果，在审核文章场景、发布文章场景中有所应用:</li><li>为了应对海量数据采集、审核、存储，所以使用kafka作为中间件进行缓冲，填补采集(生产)与审核(消费)速率不协调的问题:</li><li>在分布式检索场景中，使用Elasticsearch实现检索服务设计，基于倒排索引和分词机制，更加精准、高效的实现查询，我独立设计了:文章 用户索引、订单索引Mapping，以及整合EK实现集中式的分布式日志检索平台;</li><li>在定时业务场景中，如:定时发布、定时下架、定时计算热点文章业务场景中，使用xxL-J0B实现分布式定时任务调度;</li></ul>',9);function l(s,p){return n(),t("div",null,[i("more-"),r])}const h=e(o,[["render",l],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/posts/%E9%A1%B9%E7%9B%AE/heimaLeadnews/","title":"黑马头条","lang":"zh-CN","frontmatter":{"title":"黑马头条","date":"2024-06-05T16:24:22.000Z","tags":"项目","category":"黑马头条","icon":"/img/头条.svg","description":"黑马头条 主要着手于获取最新最热新闻资讯，内容以技术类文章为主，为终端学习用户提供精准的、感兴趣的技术文章，通过大数据分析用户喜好精确推送资讯新闻，主要由JAVA语言开发，采用spirngBoot框架快速开发和springCloud微服务技术架构实现。 技术栈 Springboot、Springcloud（Nacos、Feign、GateWay）、Re...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E9%A1%B9%E7%9B%AE/heimaLeadnews/"}],["meta",{"property":"og:site_name","content":"Lance"}],["meta",{"property":"og:title","content":"黑马头条"}],["meta",{"property":"og:description","content":"黑马头条 主要着手于获取最新最热新闻资讯，内容以技术类文章为主，为终端学习用户提供精准的、感兴趣的技术文章，通过大数据分析用户喜好精确推送资讯新闻，主要由JAVA语言开发，采用spirngBoot框架快速开发和springCloud微服务技术架构实现。 技术栈 Springboot、Springcloud（Nacos、Feign、GateWay）、Re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-09T11:07:04.000Z"}],["meta",{"property":"article:author","content":"RuyiWei"}],["meta",{"property":"article:published_time","content":"2024-06-05T16:24:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-09T11:07:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"黑马头条\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-05T16:24:22.000Z\\",\\"dateModified\\":\\"2024-08-09T11:07:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"RuyiWei\\"}]}"]]},"headers":[{"level":2,"title":"技术栈","slug":"技术栈","link":"#技术栈","children":[]},{"level":2,"title":"实现功能","slug":"实现功能","link":"#实现功能","children":[]},{"level":2,"title":"项目亮点","slug":"项目亮点","link":"#项目亮点","children":[]}],"git":{"createdTime":1723201624000,"updatedTime":1723201624000,"contributors":[{"name":"yqiChen","email":"chenyuqi1229@gmail.com","commits":1}]},"readingTime":{"minutes":2.71,"words":813},"filePathRelative":"posts/项目/heimaLeadnews/README.md","localizedDate":"2024年6月5日","excerpt":"<!--more--->\\n<h1>黑马头条</h1>\\n<p>主要着手于获取最新最热新闻资讯，内容以技术类文章为主，为终端学习用户提供精准的、感兴趣的技术文章，通过大数据分析用户喜好精确推送资讯新闻，主要由JAVA语言开发，采用spirngBoot框架快速开发和springCloud微服务技术架构实现。</p>\\n<h2>技术栈</h2>\\n<p>Springboot、Springcloud（Nacos、Feign、GateWay）、Redis、xxl-job、MySQL、FastDFS、 ElasticSearch、Kafka、KafkaStream、MyBatis、Seata、SkyWalking、jenkins等。</p>","autoDesc":true}');export{h as comp,m as data};
