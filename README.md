# yunxi-tem-pc-cli3

## 基于vue-cli(3.x)开发的前端内部通用模版

## 项目初始化

```bash
运行开发环境：npm run dev

运行测试环境：npm run test

运行生态环境：npm run prod

打包开发环境：npm run dev-build

打包测试环境：npm run build

打包生态环境：npm run pro-build
```

## 开发

```bash
npm run serve
```

### 项目目录简介

> 目录结构保持一致，使得多人合作容易理解与管理，提高工作效率。

简要说明

- main.js主入口，router.js路由划分
- plugins 自己或第三方插件,包括但不限于components、directives、filters、third lib
- views 所有路由页面。原则：views，重component
- components 所有组件。包括原子组件、业务公用组件、页面独有组件
- server api引入入口
- assets sass、图片资源入口，不常修改数据
- utils 工具文件夹
- store 标准vuex格式，非必须
 

## 项目目录结构

```
project
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
|   |   router.js  // 所有路由
│   │
│   |____assets    // css、image、svg等资源
│   |   |____css   // 所有sass资源
|   |   |    |  reset.scss       // 兼容各浏览器
|   |   |    |  global.scss      // 全局css
|   |   |    |  variable.scss    // sass变量和function等
│   |   |____img   // image图标库
|   |   |____svg   // svg图标库
|   |
|   |____components    // 组件
│   |   |____common    // common自注册组件
│   |        |____base // 原子组件(如果是引入第三方，该文件夹可省略)
│   |        |   ...   // 业务公用组件
│   |   |____entity    // entity页面组件
│   |   |____about     // about页面组件
|   |
|   |____views     // UI层(原则：views，重component)
|   |   |____entity
|   |   |    |  list.vue      // 列表页
|   |   |    |  create.vue    // 新增页
|   |   |    |  edit.vue      // 修改页
|   |   | main.vue
|   |
|   |____plugins   // 自己或第三方插件
|   |   | index.js       // 插件入口文件
|   |   | directives.js  // 所有Vue指令
|   |   | filters.js  // 所有Vue过滤
|   |
|   |____server    // 接口层
|   |   | index.js   // 所有接口
|   |   | http.js  // axios二次封装
|   |
|   |____api    // 接口目录
│   |   |____auth    // 接口模块
│   |        |____auth.js // 接口文件
|   |
|   |____store     // vuex数据
|   |   | index.js
|   |
|   |____utils     // 工具层
|   |   | config.js// 配置文件，包括常量配置
|
└───public         // 公用文件，不经过webpack处理
│   │   favicon.ico
│   │   index.html
│   vue.config.js  // vue-cli3主配置
│   babel.config.js// babel配置
│   .eslintrc.js   // eslint配置
│   .env   // 测试环境配置
│   .env.development  // 开发环境配置
│   .env.production   // 生态环境及线上环境配置
│   .prettierrc.js // perttier配置
│   package.json   // npm配置
│   README.md      // 项目说明
```
### 关于路由使用指南和文档

> 这里引用了一个第三方插件，想学习的可以研究一下https://github.com/Qymh/vue-router-invoke-next-webpack-plugin。

优势：路由自动注入概念学习自nuxt,我们不需要在router.js中每次手动输入代码引入模块而是自动根据文件目录格式生成router.js

注意：views目录下的 .invoke/router 是自动生成的

对比一下使用自动注入划分层级后的路由

```
src/views
├── Index.vue
├── menu
    <!-- 第一级 -->
│   ├── index.vue
│   └── menu1     // 菜单1
│       ├── menu1-1
            <!-- 第三级 -->
│       │   └── index.vue
        <!-- 第二级 -->
│       └── index.vue
│   └── menu2     // 菜单2
│       ├── menu2-2
            <!-- 第三级 -->
│       │   └── index.vue
        <!-- 第二级 -->
│       └── menu2.vue
```

结构对比： 目录下的vue文件和目录同名生成 children: [], 目录下的vue文件为index.vue 不生成 children: []
具体规则参照： https://github.com/Qymh/vue-router-invoke-next-webpack-plugin

```
{
      name: 'menu',
      path: '/menu',
      component: () => import('Invoke/menu/menu.vue'),

      children: [

        {
          name: 'menu-menu1',
          path: 'menu1',
          component: () => import('Invoke/menu/menu1/index.vue'),
        },
        {
          name: 'menu-menu1-menu11',
          path: 'menu1/menu11',
          component: () => import('Invoke/menu/menu1/menu1-1/index.vue'),
        },
        {
          name: 'menu-menu2',
          path: 'menu2',
          component: () => import('Invoke/menu/menu2/menu2.vue'),

          children: [

            {
              name: 'menu-menu2-menu22',
              path: 'menu22',
              component: () => import('Invoke/menu/menu2/menu2-2/index.vue'),
            },
          ],
        },
      ],
    },

```
