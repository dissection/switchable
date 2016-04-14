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
     
**prevClass** [`string`]
    上一页：
 [`default`] "ui-switchable-prev"
 
 **nextClass** [`string`]
     下一页：
  [`default`] "ui-switchable-prev"
  
**contentPage** [`string`]
    page的包裹元素：
  [`default`] "ui-switchable-page"
  
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