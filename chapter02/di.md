### 简介

### DI方式
#### 基于构造函数
  - 基于入参类型匹配
  - 基于入参位置匹配
  - 基于入参名称匹配

#### 基于Setter函数

### 依赖解决流程
- ApplicationContext根据配置文件(描述的所有的Bean)创建并初始化上下文。
- 各个Bean的依赖可以以构造函数（包含工厂构造）、Setter函数形式来呈现。
- 在各个类的属性或构造器参数会被实际定义，或者引用容器中其他；Bean。
- 各个类的属性或构造器参数的值，会根据其制定的直接类型进行转换（Spring默认根据Java基本类型进行转换）。

### 经典问题
#### 构造器的循环依赖问题
``` java
构造器的循环依赖问题
异常类型：BeanCurrentlyInCreationException
```
- 如何解决
```
通过Setter函数来解决
```
- 为什么呢
``` 
因为构造器方式new一个bean的时候是必须依赖，而且是立即，缓一下都不行。不依赖这个bean new不出来了，那此时就会出问题。
但字段依赖时或者基于setter注入时并不影响该bean的实例化，后续去拿引用时(之前拿到的是提前引用，是不完整的bean)已经实例化好了
```

- 方案细节
  1. 三级缓存
      1. 一级缓存：singletonObjects，存储的是所有创建好了的单例Bean
      2. 二级缓存：earlySingletonObjects，完成实例化，但是还未进行属性注入及初始化的对象
      3. 三级缓存：singletonFactories，提前暴露的一个单例工厂，二级缓存中存储的就是从这个工厂中获取到的对象

### 参考文献
  > https://hogwartsrico.github.io/2019/10/21/How-Spring-solves-circular-references/
  > https://juejin.cn/post/6859189194837721102#heading-7
