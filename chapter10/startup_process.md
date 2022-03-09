# 代码剖析

```java

    StopWatch stopWatch = new StopWatch();
		stopWatch.start();
    // 1. 创建容器上下文
		DefaultBootstrapContext bootstrapContext = createBootstrapContext();
    // 2. Headless模式配置：在系统可能缺少显示设备、键盘或鼠标这些外设的情况下可以使用该模式。
		ConfigurableApplicationContext context = null;
		configureHeadlessProperty();
    // 3. 事件：获取事件对象，并启动和分发事件
		SpringApplicationRunListeners listeners = getRunListeners(args);
		listeners.starting(bootstrapContext, this.mainApplicationClass);
		try {
			ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
      // 4. 准备配置环境
			ConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);
			configureIgnoreBeanInfo(environment);
      // 5. 打印Banner
			Banner printedBanner = printBanner(environment);
      // 6.1 创建应用上下文
			context = createApplicationContext();
			context.setApplicationStartup(this.applicationStartup);
      // 6.2 预备应用上下文
			prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);
      // 6.3 刷新应用上下文
			refreshContext(context);
      // 7. 执行刷新后置逻辑
			afterRefresh(context, applicationArguments);
			stopWatch.stop();
			if (this.logStartupInfo) {
				new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);
			}
      // 8. 分发已启动事件
			listeners.started(context);
			callRunners(context, applicationArguments);
		}
		catch (Throwable ex) {
			handleRunFailure(context, ex, listeners);
			throw new IllegalStateException(ex);
		}

		try {
      // 9. 分发运行中事件
			listeners.running(context);
		}
		catch (Throwable ex) {
			handleRunFailure(context, ex, null);
			throw new IllegalStateException(ex);
		}
		return context;

```
