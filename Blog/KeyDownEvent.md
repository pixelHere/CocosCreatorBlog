监听键盘按下事件
-----------------

在cocos中监听键盘按下事件，需要进行注册。

cocos进行事件一些操作方式：

*cc.systemEvent.on*  注册

*cc.systemEvent.off*  移除

*cc.systemEvent.emit*  提交

*cc.systemEvent.once*  一次触发

事件在注册后，可以写一个回调函数，该函数有一个event参数，可以进行一些操作。

如下：
![](https://github.com/Pixel1995/CocosCreatorBlog/edit/master/READMEIMG/keyDown1.png)
