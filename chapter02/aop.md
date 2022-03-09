### AOP：Aspect Oriented Programming with Spring（面向切面编程）

- 是对面向对象编程（OOP）的另一种「面向程序结构编程」的思考与补充
- OOP 面向类，AOP 面向切面
- 切面开启多类型和对象关注点的模块化

#### Spring 使用 AOP 的初衷

- 提供声明式企业级服务
- 允许用户实现自定义切面，用于对 OOP 的补充

#### 使用方式

- 高阶方式
  - 基于 schema 方式
  - 基于 AspectJ 注解方式
- 低阶方式

#### 基本模型

- Aspect（切面）
- Join point（加入点）：在 Spring AOP 中，一个加入点即代表一个方法执行。
- Advice（通知点）：在切面上各个加入点的动作。
- Pointcut（切入点）：匹配加入点的一个切入描述
- Introduction：声明额外的方法或字段
- Target object：一个被一个或多个切面通知
- AOP proxy：一个被 Spring AOP 框架实现切面契约的对象，例如 JDC 动态代理 或 CGLIB 代理
- Weaving

##### advice

- Before advice
- After returning advice
- After throwing advice
- After (finally) advice
- Around advice

### AOP 核心能力和目标（需要提炼）

- 高度抽象
- 仅支持方法拦截（属性拦截未实现）
- 非侵入
- 默认使用 JDK 动态代理，可以选择 CGLIB

### AOP 动态代理方式

#### @AspectJ 模式

##### Pointcut 标志符

- execution
- within
- this: Limits matching to join points (the execution of methods when using Spring AOP) where the bean reference (Spring AOP proxy) is an instance of the given type.
- target: Limits matching to join points (the execution of methods when using Spring AOP) where the target object (application object being proxied) is an instance of the given type.
- args
- @target
- @args
- @within
- @annotation
- other
  ```
  call, get, set, preinitialization, staticinitialization, initialization, handler, adviceexecution, withincode, cflow, cflowbelow, if, @this, and @withincode
  ```

##### 良好的 Pointcut 标志符

- Kinded designators（类型标志符）：execution, get, set, call, 和 handler
- Scoping designators（域标志符）：within 和 withincode
- Contextual designators（上下文标志符）：this, target, 和 @annotation
- 小结
一组良好Pointcut至少要包含前两种类型的标志符。仅仅有类型或者上下文标志符配置，由于要进行额外的处理和分析会带来 [^性能影响]，范围标志符匹配速度是最快的。

### AOP 编写风格选择

#### Spring AOP、Full AspectJ

- 用最简单的方式工作
- AOP 比 AspectJ 更简单，如果你仅需要通知 Spring Bean 的操作的执行，就使用 AOP；如果你需要通知的不仅仅是 Spring 容器管理的对象，就是用 AspectJ

#### @AspectJ、XML 或 Spring AOP
- XML有两个缺点：
  - 无法完全讲需求的实现归集在一处，通俗讲不满足[^DRY]原则；
  - 与@AspectJ风格相比，XML风格在表达内容上稍微有一些限制：仅支持单例aspect实例化；

#### AspectJ Development Tools(AJDT)

#### @AspectJ 编码模式


[^性能影响] 这里作者后续会从源码层面分析为什么会有上述结论？

[^DRY] DRY的原则是“系统中的每一部分，都必须有一个单一的、明确的、权威的代表”，指的是（由人编写而非机器生成的）代码和测试所构成的系统，必须能够表达所应表达的内容，但是不能含有任何重复代码。当DRY原则被成功应用时，一个系统中任何单个元素的修改都不需要与其逻辑无关的其他元素发生改变。
