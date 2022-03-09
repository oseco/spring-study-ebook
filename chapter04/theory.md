### 依赖包

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
  <groupId>The groupId of your database</groupId>
  <artifactId>The artifactId of your database</artifactId>
</dependency>
```

### 关键类

### 支持丰富的数据源

- 嵌入式数据库：H2、HSQL、Derby（J2EE 应用很少使用）
- OLTP 数据库：MySQL、MangoDB（J2EE 应用通常使用）
- OLAP 数据库：HBase

### 支持丰富的连接池

- HikariCP（业界良心）
- Tomcat pooling Datasource
- Commons DBCP2（常用）
- Other