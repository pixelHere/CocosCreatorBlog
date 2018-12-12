Button点击事件相关
---------------

关于按钮点击事件

cocos中有和unity差不多的拖拽绑定方式。

这里只记录在脚本中绑定的方式

在脚本中绑定按钮点击事件有两种方式，这里记录的是其中一种比较简单的方式

首先是定义按钮：

![](https://github.com/thirdBrother/CocosCreatorBlog/blob/master/READMEIMG/btn1.png)

其中 @property 是相当于序列化，为了能在面板中显示出来，可以让开发者进行拖拽，相当于unity中的public

![](https://github.com/thirdBrother/CocosCreatorBlog/blob/master/READMEIMG/btn3.png)

而(cc.Button)则是其类型，cocos中的元素类型都封装在了cc类中。

那么如何进行绑定事件呢？

![](https://github.com/thirdBrother/CocosCreatorBlog/blob/master/READMEIMG/btn2.png)

在ts中事件的注册是用 on 来进行的

事件的移除是用 off 来进行的

事件的提交是用 emit 来进行的

事件的一次性触发，也就是触发一次后就移除，是用 once 来进行的

cc.systemEvent是cocos的事件系统，注意区分大小写

cc.SystemEvent.EventType.KEY_DOWN是键盘按下事件类型，在EventType中还有别的事件类型

其中回调函数有一个 event 参数，可以用其进行判断是哪个按键被按下

![](https://github.com/thirdBrother/CocosCreatorBlog/blob/master/READMEIMG/btn4.png)

此处注意，cocos版本不同获取按键的方式也不同，这点真蛋疼<br>
如果 cc.KEY 拿不到就试一下 cc.macro.KEY 注意大小写，代码中所有的都是大小写敏感的

至于事件何时注册，像是unity一样，cocos也有一个start函数，工程开始时会执行一遍，可以在这里进行事件的注册

用这种方式注册按钮点击事件，只能处理一些简单的逻辑，如果需要使用节点名字来判断，是不行的，这个是真的蛋疼

参数信息比较少，没办法

还有一种比较复杂的注册方式，可以去[官方文档](https://docs.cocos.com/creator/manual/zh/components/button.html)看看
