### 核心包与类
- 包
  - org.springframework.beans
  - org.springframework.context
- 类
  - BeanFactory
  - ApplicationContext

### 整体逻辑
![PNG](images/container-magic.png)
- 配置数据：元数据、业务对象
- 容器：Spring  Container
- 完整可运行系统

#### 配置数据方式
- XML式配置
- 注解式配置：开始于Spring 2.5
- Java式配置：开始于Spring 3.0
```
上述三种方式，并无绝对优劣之分，开发者可根据工程情况、团队偏好组合使用
```

### Bean
#### Bean属性

- class：初始化
  - 构造函数初始化
  - 工厂函数初始化

- name：命名
  - 标准定义：ID和Name定义，遵循小写开头，驼峰命名规则
  ```
  Bean命名类似于demoController、demoService 和 demoDao
  ```
  - 别名应用：alias

- scope
  - 全局
    - 单例（默认：singleton)
  ![PNG](images/singleton.png)
    - 原型（prototype）
  ![PNG](images/prototype.png)
  - Web
    - 请求（request）
    - 会话（session）
    - 应用（application）
    - WS（websocket）
  - 线程:SimpleThreadScope
  - 自定义scope
``` java
@Configuration
public class CoreConfig {
    public void customizeScope(ConfigurableBeanFactory beanFactory) {
        beanFactory.registerScope("thread", new SimpleThreadScope());
    }
}
```
- constructor arguments：基于DI技术的构造函数入参
  - 基于构造函数
    - 基于入参类型匹配
    - 基于入参位置匹配
    - 基于入参名称匹配
  - 基于Setter函数
- properties
- autowiring mode
- lazy mode
- init mehtod
- destruction method