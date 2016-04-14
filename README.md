switchable document
===================
options
----------------------
### 元素参数：
**contentClass** [`string`]  
    *包裹面板元素：   
   [`default`] "ui-switchable-panel-main"  
   [`mainClass`] 元素的父级  
        
**mainClass** [`string`]  
    面板元素：  
    [`default`] "ui-switchable-panel"
    
**mainSelectedClass** [`string`]  
    选择的面板元素：   
    [`default`] "ui-switchable-panel-selected"
   
**navItem**  [`string`]  
     导航元素：  
     [`default`] "ui-switchable-item"
     
**navSelectedClass** [`string`]  
    导航选择的元素类：  
     [`default`] "ui-switchable-selected"
  
**imgscrollClass** [`string`]  
    [`type:imgscroll`] 改变 src 的 img 元素  
      [`default`] "ui-switchable-imgscroll-img"

**prevClass** [`string`]  
    上一页：  
 [`default`] "ui-switchable-prev"
 
 **nextClass** [`string`]  
     下一页：  
  [`default`] "ui-switchable-prev"
  
**contentPage** [`string`]
    page的包裹元素：  
  [`default`] "ui-switchable-page"

**arrowClass** [`string`]  
    跟随条的class
    [`default`] "ui-switchable-arrow"
 
 
### 类型参数：  
**contentPageIsConceal**  [`Boolean`]  
      判断是否是移入显示 移出消失：  
      [`default`] !1

 **type** [`string`]  
  "focus":  焦点图  
  "slider": 轮播图  
  "tab":    选项卡  
  
**isAutoPlay** [`Boolean`]  
    是否自动播放：  
   [`default`] !1  
   
**mouseenterStopPlay** [`Boolean`]  
    鼠标进入容器元素后是否停止播放：   
     [`default`] !0
     
 **direction** [`string`]  
    和slider 相关的属性  
    [`default`]  "left"  
    "left" ,"top"
    
 **playDirection** [`string`]  
    播放的方向  
    [`default`]  "next"  
    "next" "prev"
    
**event** [`string`]  
    鼠标移入的触发的事件  
    [`default`]  "mouseover"  
    "mouseover" "click"
    
 **speed**  [`number`]  
    切换时所消耗的时间  
   [`default`] 400
   
**delay**  [`number`]  
    触发切换 的延时 时间 ，解决不闪屏  
    [`default`] 150
    
**defaultPanel** [`number`]  
    默认面板 初始索引  
    [`default`] 0
    
**stayTime** [`number`]  
    自动播放循环 的间隔时间  
    [`default`] 5e3
    
**includeMargin** [`Boolean`]  
    计算 元素 宽高的时候 是否包含 margin  
     [`default`] !1
     
**width** [`number`]  
    设置 mainClass 面板的 宽度,如果设置将会 覆盖所获得的 面板宽度  
    [`default`] 0

**height** [`number`]  
 设置 mainClass 面板的 高度,如果设置将会 覆盖所获得的 面板高度  
    [`default`] 0

**step** [`number`]  
    1步 等于 一个面板的宽度 2步 等于2个面板的宽度 依次列推  
    每次 所走的步数 ,步数不能大于 ，所显示的 个数  
    [`default`] 1
    
**visible** [`number`]  
    所能看到的 显示面板的个数  
     影响 [`type: slider`] 显示的个数   
    [`default`] 1

**seamlessLoop** [`Boolean`]  
    是否无缝循环
    [`default`] !1
    
**easing** [`string`]  
    *依赖 jQuery.easing.js 插件*  
    [`default`] "swing"
 
**hasArrow**  [`Boolean`]  
     影响 [`type: tab`]  
      如果选项卡 需要添加一个 跟随条的 样式块  
      [`default`] !1

**navIframe**  [`string`]  
    iframe 的 路径 属性 ，写在 navitem 元素上  
    [`default`] "data-iframe"

**imgscrollDataSrc**  
     [`type:imgscroll`] 获取图的路径的 data参数名  
    [`default`] "data-src"
    
### 回调函数：  
**callback** [`function`]  
    每次执行完切换 回调函数  
    function(a , b, c)  
        a: 当前索引  
        b: 当前 navitem  
        c: 当期 面板元素

**onNext** [`function`]  
    下一页执行完的回调函数
  

**onPrev** [`function`]  
    上一页执行完的回调函数  
    
## 版本

[`注`] ./src 文件下 是通用 压缩  
        ./wksrc 文件下是 webpack 压缩模式
        
### 1.0.0
[`tab`] [`focus`] [`slider`] 
### 1.1.0
[`tab`] [`focus`] [`slider`] [`imgscroll`]
