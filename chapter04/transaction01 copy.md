### 主要特性

- 提供一致性的代码模型来应对不同的事务 API，列如 JTA,JDBC,Hibernate 以及 JPA
- 支持声明式事务管理
- 更易用的可编程事务管理 API（相较于 JTA API）
- 与 Spring 的数据访问的抽象设计集成更佳

### Spring 事务支持模型的优势

- Global Transaction VS Local Transaction
  - Global：程序任务集、多资源访问和跨进程的任务调度都会以一个逻辑单元进行处理
  - Local：特定程序、资源和服务的连接池，例如 jdbc connection/jms pool

### 理解 Spring 事务抽象

1. PlatformTransactionManager：SPI，用于定义标准事务接口
```java
public interface PlatformTransactionManager extends TransactionManager {

    TransactionStatus getTransaction(TransactionDefinition definition) throws TransactionException;

    void commit(TransactionStatus status) throws TransactionException;

    void rollback(TransactionStatus status) throws TransactionException;
}
```
2. TransactionDefinition：用于定义事务级别
  - Propagation
    * PROPAGATION_REQUIRED
  [!PNG](./images/PROPAGATION_REQUIRED.png)
    * PROPAGATION_REQUIRES_NEW
  [!PNG](./images/PROPAGATION_REQUIRES_NEW.png)
    * PROPAGATION_NESTED
  
  - Isolation

  - Timeout

  - Read-only status

3. TransactionStatus：用于查询事务状态
4. 事务类初始化
```java
    @Bean
    public PlatformTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
```

### 理解事务实现原理
- 关键注解
  ```java
  @Transactional、@EnableTransactionManagement
  ```
- 底层逻辑
  * 基于Spring AOP
  * TransactionInterceptor
![PNG](images/tx.png)  

- 使用方式：无所谓好坏，根据项目情况自行选择
  * XML配置
  * 注解配置
### 参考文献

- https://docs.oracle.com/cd/E13203_01/tuxedo/tux71/html/pgglob2.htm
- http://integrationspot.blogspot.com/2011/03/jta-transactions-local-and-global.html
- https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html
