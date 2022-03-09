### 使用简介

- JPA 初始化
- Hibernate 初始化
- SQL 初始化

```yaml
1. 在工程classpath根目录下增加data-${platform}.sql、schema-${platform}.sql文件
2. 在application.yaml中增加如下配置
  spring:
    sql:
      init:
        platform: ${platform}
        username: ""
        password: ""
        mode: always
        encoding: utf-8
        continue-on-error:true
3. platform可以根据情况选填：MySQL/MangoDB
```

- 高阶方案：Flyway（推荐）

```yaml
1. 导入maven依赖包
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
2. 在工程classpath根目录下增加一系列db/migration/V{版本号}__{描述}_{描述}.sql
3. 在application.yaml中增加如下配置
  spring:
    flyway:
      baseline-version: 1
      locations: "classpath:db/migration"
      url: "your database"
      user: "your username"
      password: "your password"
      create-schemas: true
      schemas: "your schema"
      clean-on-validation-error: true
```

### 综合对比

| 方式          | 优点                                         | 缺点                                                       |
| :------------ | :------------------------------------------- | :--------------------------------------------------------- |
| JPA/Hibernate | 未使用                                       | 未使用                                                     |
| SQL 初始化    | 1.简单快捷；<br>2. 适合小微团队对 SQL 的管理 | 1.无版本化管理 <br> 2.工程化（环境隔离、生产联动）管理较弱 |
| Flyway        | 1. 版本化管理；<br> 2.具备完整生态           | 暂未发现                                                   |
