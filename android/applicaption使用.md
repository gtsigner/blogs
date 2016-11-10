##Android  Application

-	Application和Activity,Service一样是Android框架的一个系统组件，当Android程序启动时系统会创建一个Application对象，用来存储系统的一些信息。

-	Android系统自动会为每个程序运行时创建一个Application类的对象且只创建一个，所以Application可以说是单例（singleton）模式的一个类。通常我们是不需要指定一个Application的，系统会自动帮我们创建，如果需要创建自己的Application，那也很简单！创建一个类继承Application并在AndroidManifest.xml文件中的application标签中进行注册（只需要给application标签增加name属性，并添加自己的 Application的名字即可）。

-	启动Application时，系统会创建一个PID，即进程ID，所有的Activity都会在此进程上运行。那么我们在Application创建的时候初始化全局变量，同一个应用的所有Activity都可以取到这些全局变量的值，换句话说，我们在某一个Activity中改变了这些全局变量的值，那么在同一个应用的其他Activity中值就会改变。

-	Application对象的生命周期是整个程序中最长的，它的生命周期就等于这个程序的生命周期。因为它是全局的单例的，所以在不同的Activity,Service中获得的对象都是同一个对象。所以可以通过Application来进行一些，如：数据传递、数据共享和数据缓存等操作。

###应用场景：

-	在Android中，可以通过继承Application类来实现应用程序级的全局变量，这种全局变量方法相对静态类更有保障，直到应用的所有Activity全部被destory掉之后才会被释放掉。

-	需要初始化一些数据的时候如xutils3的初始化

		/**
		 * Created by zhaojunlike@ on 2016/6/22.
		 * Email: 1716771371@qq.com
		 * Phone：15760079693
		 * Oschina：http://git.oschina.net/zhaojunlike/
		 */
		public class BlogApplication extends Application {	
		    @Override
		    public void onCreate() {
		        super.onCreate();
		        /*初始化utils*/
		        x.Ext.init(this);
		        x.Ext.setDebug(BuildConfig.DEBUG); // 是否输出debug日志, 开启debug会影响性能.
		    }
		}

-	清单文件注册

	 	<application
        	android:name=".BlogApplication"
