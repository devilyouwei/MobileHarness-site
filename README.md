# MobileHarness website

MobileHarness 的独立展示站，面向论文读者、研究者与合作伙伴。使用 Astro、TypeScript 和 CSS 构建，输出纯静态 HTML；无后端或运行时 API，使用 Swiper 与 Motion 提供局部浏览器交互。

## 本地开发

使用 Node.js 24（见 `.nvmrc`）。

```sh
npm ci
npm run dev
```

打开终端显示的地址，页面路径为 `/MobileHarness-site/`。

```sh
npm run check         # Astro 与 TypeScript 检查
npm run format:check  # 格式检查
npm run format        # 统一格式
npm run build         # 输出到 dist/
npm run preview       # 本地预览构建产物
```

## 目录与边界

```text
src/
  pages/          路由入口与页面组合
  layouts/        HTML 文档、SEO 元信息、全局样式入口
  components/     可复用展示组件
  styles/         全局设计变量和基础样式
public/           原样发布的静态资源
.github/workflows/  检查与 GitHub Pages 部署
docs/            实施计划与验证记录
```

页面特有的内容和样式就近放在页面内，组件样式放在组件内；全站基础样式由 `global.css` 维护。页面使用布局，布局加载全局样式，页面组合组件。Astro 在构建时生成 HTML/CSS，浏览器无需应用服务端。

当前首页包括学术项目介绍、3D 精选演示、分类导航、设计原理和软件引用。共享布局负责标题、描述、canonical、Open Graph、favicon 和跳过导航入口。正式论文元信息由后续提供的真实资料更新。

暂不增加 `utils`、`hooks`、`services`、状态管理或深层组件分类。内容出现复用需求后再提取；静态素材按实际需要添加，不预建空目录。

## GitHub Pages

- 网站仓库：`git@github.com:devilyouwei/MobileHarness-site.git`
- 应用源码：<https://github.com/devilyouwei/MobileHarness>
- 站点地址：<https://devilyouwei.github.io/MobileHarness-site/>

首次部署前，在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

工作流在 Pull Request 时执行安装、类型检查、格式检查和构建；推送到 `main` 后，在检查通过时上传 `dist/` 并部署。也可以手动触发。部署失败由 GitHub Actions 报告，不跳过检查。

`astro.config.mjs` 维护域名与 `/MobileHarness-site` 基础路径。本站链接和公共资源使用 `import.meta.env.BASE_URL`，避免使用忽略项目子路径的根绝对路径。更换仓库名或绑定自定义域名时同步修改配置。

站点资源仅包含可公开分发的素材，不放凭据、模型权重或私人媒体。依赖精确版本及 `package-lock.json` 纳入版本控制，`dist/`、`.astro/` 和 `node_modules/` 不提交。

## 文档

- [初始化计划](docs/PLAN.md)
- [初始化验证](docs/VALIDATION.md)

## 展示站设计

首页包含项目标题、维护者、精选 Cover Flow、项目摘要、六个业务入口、三张原理图与软件引用。`src/pages/demos/[slug].astro` 根据 `src/content.ts` 静态生成机器人、语音、摄影、创作、网页和多窗口六页；分类、媒体说明、精选顺序及引用统一在内容文件维护。

`DemoShowcase` 使用 Swiper 必要模块，Motion 负责渐入，均不依赖 React。共享布局提供视频弹窗和互斥播放；分类页不导入展台模块。主题首次跟随系统，太阳／月亮图标按钮切换 Light/Dark；先于绘制应用，手动选择保存在浏览器，存储不可用时仍可当次切换。

首页仅给当前可视卡片挂载视频源，离开展台、隐藏页面、切换卡片或打开弹窗时暂停。分类视频点击才加载；弹窗关闭释放媒体。减少动态效果或 Save-Data 禁止自动预览。浏览器拒绝播放时保留封面，可手动打开带原生控制条的播放器。

素材副本保存在 `public/media/`，来源为 MobileHarness `docs/imgs/`，受原项目许可及素材权利约束。四段 H.264 MP4 从现有 GIF 按原时间顺序转换，包含 fast-start、无音轨；WebP 是静态封面及截图。原理图在两种主题下都放在白色画布上保留可读性。网站构建不依赖相邻仓库。更新素材时可使用 ffmpeg 转码与 Pillow 生成 WebP，这些工具不属于网站运行依赖。

正式论文未提供，目前显示维护者和软件项目 BibTeX。增加论文信息时更新内容及首页，不虚构作者、机构、DOI、会议或实验指标。

首页副标题采用 “A Smartphone-Driven Agent Harness for Robotics”；“A Mobile Harness for Embodied Agents” 保留在首页源码注释。顶部概念标语为 “Perception · Cognition · Action”。精选展台初始选中第二张卡片，两侧显示相邻内容。视频按原比例放在透明舞台上，无装饰边框、背景或盒子阴影。

`Icon.astro` 统一输出 GitHub、太阳和月亮的内联 SVG，使用 currentColor 适配主题，无外部图标请求。Code 导航和首页按钮共享 GitHub 图标。

首页标题区使用紧凑的响应式留白，使精选视频在首屏可见；视频本身的展示高度独立于标题区间距。

首页不重复展示 Demos/Code 按钮；维护者与引用入口组成一行可换行的元信息，配用户和引用图标。

首页主标题最大字号为 5.4rem，副标题最大 1.65rem 并采用斜体；小屏继续按视口缩放。
