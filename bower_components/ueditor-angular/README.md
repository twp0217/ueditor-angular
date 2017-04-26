# ueditor-angular
> angular directive for UEditor(基于AngularJS的UEditor指令)

## 环境
- **AngularJS >=1.2.0**

## 安装

#### 安装依赖

```
bower install ueditor-angular --save
```

#### 项目引入`angular`、`ueditor`和`ueditor-angular`相关js

```
<script type="text/javascript" src="http://cdn.bootcss.com/angular.js/1.2.0/angular.min.js"></script>
<script type="text/javascript" src="http://ueditor.baidu.com/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="http://ueditor.baidu.com/ueditor/ueditor.all.js"></script>
<script type="text/javascript" src="dist/ueditor-angular.min.js"></script>
```

#### 引入模块`ueditor-angular`

```
var app = angular.module('app', [
    'ueditor-angular'
]);
```


## 文档

### 属性(Attributes)

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| setting | Object | - | [配置项](http://fex.baidu.com/ueditor/#start-config) |

### 事件(Events)

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| onReady | $ueditor : Editor | 编辑器初始化完成 |
| onContentChange | $content : string | 编辑器内容改变 |

# 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。