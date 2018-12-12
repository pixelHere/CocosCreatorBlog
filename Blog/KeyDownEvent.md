监听键盘按下事件
-----------------

在cocos中监听键盘按下事件，需要进行注册。

cocos进行事件一些操作方式：

* cc.systemEvent.on  注册

* cc.systemEvent.off  移除

* cc.systemEvent.emit  提交

* cc.systemEvent.once  一次触发

事件在注册后，可以写一个回调函数，该函数有一个event参数，可以进行一些操作。

如下：
![](https://github.com/Pixel1995/CocosCreatorBlog/blob/master/READMEIMG/keyDown1.png)

进行注册的时候，只需要注册一次就好。

通常情况下载start的函数中进行注册。

>使用vscode进行ts代码编写时，要注意，有一些情况下是没有代码智能提示的，

>这个时候不代表你需要的属性或者字段等是undefined的，

>而是需要手动写出，还需要注意大小写，这里都是大小写敏感的。
