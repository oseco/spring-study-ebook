### 自定义启动异常
> 自定义FailureAnalyzer

### 懒加载
> 配置文件设置参数spring.main.lazy-initialization=true
~~~
@Lazy(false)
1. 优点：减少启动时间
2. 缺点：懒加载的类异常感知相对延迟，潜在的堆内存初始化不够问题
~~~

### 事件
> 事件按以下顺序执行
- ApplicationStartingEvent
- ApplicationEnvironmentPreparedEvent
- ApplicationContextInitializedEvent：when the ApplicationContext is prepared and ApplicationContextInitializers have been called but before any bean definitions are loaded.
- ApplicationPreparedEvent
- > WebServerInitializedEvent（WebServer）
  > > > ServletWebServerInitializedEvent、ReactiveWebServerInitializedEvent
- ApplicationStartedEvent
- AvailabilityChangeEvent
- ApplicationReadyEvent：any application and command-line runners have been called
- AvailabilityChangeEvent
- ApplicationFailedEvent

### Web 上下文容器
> SrpingApplication 会根据以下Web类型创建正确的ApplicationContext
- MVC：AnnotationConfigServletWebServerApplicationContext
- WebFlux：AnnotationConfigReactiveWebServerApplicationContext
- 其他：AnnotationConfigApplicationContext
~~~
使用SpringApplication执行的单元测试一般声明setWebApplicationType(WebApplicationType.NONE)
~~~