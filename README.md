# vue pc 端适配方案

# 方案如下：
## 1.开发时使用px作为单位，然后通过webpack将px转为rem，实现适配  -- 当前 vue2 demo 中采用的这种
比如这里采用 lib-flexible【修改源码以支持pc，为了方便测量改为 1rem = 100px】+ postcss-pxtorem 方案。【注：px转rem的插件有很多，如 px2rem-loader、postcss-adaptive等，原理差不多】  
>缺点：  
1.内联样式中的px不会被转换    
2.1px的不建议转换，若屏幕宽度过小缩放后将看不见，也可通过 minPixelValue 配置，ps：pc 端应该没有这个问题。  
3.开发时因为页面上都是转为rem后的值，不好确定其真实像素。--- 不过可以改为 100 倍数解决  
4.页面换算有抖动。  
5.计算肯定有轻微误差，小数点再多也不可能避免。  

>优点：  
改起来快，对第三方ui库可以处理。  

注意：demo中 1rem = 100px，设计稿只要是1920宽度的就行了，直接量设计稿宽高，是多少就是多少，单位直接用px。

## 2.Viewport 单位，类似方案一，只是将rem 改为了 vw
采用 postcss-px-to-viewport 将px 转 vw，优缺点类似。可参考[再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)。

>加一条缺点：
当审查元素的时候，不好查看该元素的原始像素值，因为显示的是转换后的vw，但方案一可以通过 1rem = 100px 方式快速换算成原始值，也就是 * 100。

## 3.根据特别的分辨率手写媒体查询针对处理，通常单位还是用的rem，当前也可以是Viewport 单位，百分比等
```css

/* 大于 1366px  */
@media screen and (min-width:1367px) {
    .box {
        width: 1000px;
        height: 200px;
        background-color: blue;
    }
}

/* 大于 1680px  */
@media screen and (min-width:1681px) {
    .box {
        width: 1500px;
        height: 200px;
        background-color: blue;
    }
}
```
>缺点  
比较麻烦，对已经完成的项目修改起来成本太高，而且会有大量css代码维护也不方便。

>优点  
因为是针对性适配的，在这几个分辨率下的效果相对其他方案是最好的。

## 4.缩放整个页面
开发时还是使用px，开发时以某个分辨率为基准，然后实时计算不同分辨率下的缩放值，使用transform scale 方式实现缩放，不过注意 transform-origin 通常设置为左上角。
>缺点  
当屏幕分辨率宽高比和基准屏幕宽高比不一致时，有留白。

>优点  
改起来快，影响小


# 扩展：移动端适配方案参考
[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)  
[再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)
