该项目是基于webpack4的脚手架，实现以下功能：

- 传统静态页面webpack打包，支持多页面

- 网页文件hash版本管理，解决缓存问题

- JS，CSS，HTML，图片文件压缩处理，缩小网站体积

- 支持CSS，Sass样式文件

- 自适应不同屏幕尺寸，等比例缩放页面，网页实现高度还原设计图

- 网站动态刷新，便于开发

- ESLint检测，提升代码质量

#### 如何使用？

系统：macOS Catalina (10.15.1)

Node: 12.12.0

yarn: 1.19.1


克隆项目
```BASH
git clone https://github.com/abram-lin/multiple-static-html-webpack.git
```

安装依赖
```BASH
yarn install
```

运行项目
```BASH
yarn dev
```

打包项目
```BASH
yarn build
```

创建新页面
```BASH
yarn new
```

创建新页面时，可选择是否为自适应页面。创建页面后需重启项目，请重新执行`yarn dev`。

运行项目时，浏览器自动打开后，如果发现页面空白，或者需要设置默认页面时，请修改webpack.dev.js文件。把devServer中的index属性设为你想要的页面名称。




Thanks:

自适应方案借助[adaptive](https://github.com/finance-sh/adaptive)实现，感谢！
