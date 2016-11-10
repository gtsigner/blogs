##JAVA WEB 学习细节总结（1）


####细节
-	字节流和字符流互斥，中只能使用一个
-	response的流用完以后，自己关服务器就不用关，不关服务器自动会关闭


####BeanUtils的使用
-	使用BeanUtils封装后获取表单数据更加方便
-	下载[http://commons.apache.org/proper/commons-beanutils/download_beanutils.cgi](http://commons.apache.org/proper/commons-beanutils/download_beanutils.cgi "下载")
-	案例：
	
	![操作](http://i.imgur.com/9Gl1j7i.png)

-	封装后操作
	
	![](http://i.imgur.com/3WGyMKV.png)
		

####编码问题
-	请求的数据编码
-	获取数据的编码
-	java文件的编码
-	输出的编码
-	浏览器解释的编码	
	
	    @Override
	    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	        //设置post数据获取的编码  1.对post获取的数据编码有效
	        request.setCharacterEncoding("UTF-8");
	
	        //2.如果是GET请求，网站页面的<meta charset='GBK'>，那get的参数是gbk的编码
	
	        byte[] str = request.getParameter("username").getBytes("GBK");
	        String username = new String(str, "UTF-8");
	
	
	        //响应头的contentType
	        response.setContentType("text/html");
	
	
	        //响应的编码格式
	        response.setCharacterEncoding("UTF-8");
	
	
	
	
	        //如果不是管理员登陆就跳转到登陆界面
	        if (Functions.isAdminLogin(request) == false) {
	            //resp.sendRedirect("/admin/public?act=login");
	            //return;
	        }
	        super.service(request, response);
	    }
	

####RequestDispatcher的使用
-	API

	-	void forward(ServletRequest request, ServletResponse response)==转发
 	-	void include(ServletRequest request, ServletResponse response)==包含

-	forward-转发前会清空正文内容

	![](http://i.imgur.com/R46N8R7.png)
	
	前面和后面打印的数据都会被清空，只有设置的头信息会有效

-	include-包含内容只会包含正文输出，不会包含头
      