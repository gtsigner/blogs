#Java Web的3钟编码问题

##1.文件编码
	文件编码也就是说文件保存的编码，文件编码和输出编码最好一致，一般是UTF-8的文件编码，当然Eclipse的默认编码是GBK的

##2.输出的编码
	输出的编码是流输出的内容的编码格式

##3.浏览器meta头的编码
	meta的编码设置后，浏览器会自动去选择用什么编码的方式去解析内容
	
	<meta charset='utf8'>



##问题：
	  String errorMsg = UserDao.getErrorMsg(isLog);
      String str = "<script>alert('" + errorMsg + "');window.history.back();</script>";
	  response.getWriter().write(str);
	
	这样输出,alert弹出的对话框直接是几个？？？
	当我设置好Meta头还是没用，我文件编码，输出编码和meta都是UTF8;

	当我尝试很多次的编码问题后，问题任然得不到解决，最后firebug帮我找到了这个问题。

	原来是它在捣乱。
	如图：

