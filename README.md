# build-info-vite

打包发布项目后，将提交信息添加到head标签中，便于追踪版本

用法：

```
npm install build-info-vite
```

在vite.config.ts中引用

```
// vite.config.ts

import buildInfoPlugin from 'build-info-vite'

import { defineConfig } from 'vite'
export default defineConfig({
	plugins:[
	  ...
	  buildInfoPlugin()
	]
})
```



完成后，html header中会看到如下信息

```
<meta name="author" content="xxx">
<meta name="email" content="xxx@163.com">
<meta name="commitDate" content="2022-01-12 15:31:16">
<meta name="version" content="master/e6b991b6323ff427f65133f82423124ba18a429f">
<meta name="buildDate" content="2023-04-10 13:08:55">
```



支持配置传参配置

```
buildInfoPlugin(['author','email','commitDate','version','buildDate'])
```

默认不传参，显示所有信息，上面五个信息可以选填

| 参数名称   | 说明         |
| ---------- | ------------ |
| author     | 用户名       |
| email      | 用户邮箱     |
| commitDate | 提交时间     |
| version    | git版本信息  |
| buildDate  | 构建完成时间 |

