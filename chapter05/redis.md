### 核心组件和依赖

- spring-data-commons
- spring-boot-starter-redis(-reactive)
- redis 客户端：Jedis、Lettuce

```
<dependency>
            <groupId>org.springframework.data</groupId>
            <artifactId>spring-data-redis</artifactId>
        </dependency>

        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>

        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
        </dependency>

```

### 使用模式

#### 连接工厂
- RedisConnectionFactory
- LettuceConnectionFactory

#### Repository 模式
- 序列化方式（注意：并未调用RedisTemplate对象序列化，如需使用直接使用RedisTemplate对象）
```java
redisOps.execute((RedisCallback<Object>) connection -> {

			byte[] key = toBytes(rdo.getId());
			byte[] objectKey = createKey(rdo.getKeyspace(), rdo.getId());

			boolean isNew = connection.del(objectKey) == 0;

			connection.hMSet(objectKey, rdo.getBucket().rawMap());

			if(isNew) {
				connection.sAdd(toBytes(rdo.getKeyspace()), key);
			}

			if (expires(rdo)) {
				connection.expire(objectKey, rdo.getTimeToLive());
			}

			if (keepShadowCopy()) { // add phantom key so values can be restored

				byte[] phantomKey = ByteUtils.concat(objectKey, BinaryKeyspaceIdentifier.PHANTOM_SUFFIX);

				if (expires(rdo)) {

					connection.del(phantomKey);
					connection.hMSet(phantomKey, rdo.getBucket().rawMap());
					connection.expire(phantomKey, rdo.getTimeToLive() + PHANTOM_KEY_TTL);
				} else if (!isNew) {
					connection.del(phantomKey);
				}
			}

			IndexWriter indexWriter = new IndexWriter(connection, converter);
			if (isNew) {
				indexWriter.createIndexes(key, rdo.getIndexedData());
			} else {
				indexWriter.deleteAndUpdateIndexes(key, rdo.getIndexedData());
			}
			return null;
		});
```

- 配置：一定要初始化 redisTemplate 对象

```java
@SpringBootApplication
@EnableRedisRepositories(basePackages = "com.suning.yourrepository")
public class CacheApplicationBootstrap {
    public static void main(String[] args) {
        SpringApplication.run(CacheApplicationBootstrap.class);
    }

    @Bean
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(factory);
        return redisTemplate;
    }
}
```

- 首次保存：CrudRepository.save(new Human("Frank",21,new Address("JS","NJ","JN")))
```log
1. 判断在Human集合中有无@Id，如有进行删除
1630312045.957595 [0 172.17.0.1:58206] "SISMEMBER" "Human" "e4740083-246e-4288-89a9-c6a824dcdcc3"
1630312045.995606 [0 172.17.0.1:58206] "DEL" "Human:e4740083-246e-4288-89a9-c6a824dcdcc3"
2. 以hash形式保存Human信息，并设置过期时间
1630312046.004067 [0 172.17.0.1:58206] "HMSET" "Human:e4740083-246e-4288-89a9-c6a824dcdcc3" "_class" "com.suning.entity.Human" "address.city" "NJ" "address.direction" "JN" "address.province" "JS" "age" "21" "id" "e4740083-246e-4288-89a9-c6a824dcdcc3" "name" "Frank" "timeToLive" "5000"
3. 加入Human集合
1630312046.010889 [0 172.17.0.1:58206] "SADD" "Human" "e4740083-246e-4288-89a9-c6a824dcdcc3"
4. 设置过期时间
1630312046.022207 [0 172.17.0.1:58206] "EXPIRE" "Human:e4740083-246e-4288-89a9-c6a824dcdcc3" "5"
5. 加入"Human:name:Frank"集合
1630312046.030926 [0 172.17.0.1:58206] "SADD" "Human:name:Frank" "e4740083-246e-4288-89a9-c6a824dcdcc3"
6. 加入二级索引@Index
1630312046.034667 [0 172.17.0.1:58206] "SADD" "Human:e4740083-246e-4288-89a9-c6a824dcdcc3:idx" "Human:name:Frank"
```

- 根据XX查找：CrudRepository.findByXXX

```log
1629968851.290043 [0 172.17.0.1:57140] "SINTER" "Human:name:Frank"
1629968851.412221 [0 172.17.0.1:57140] "HGETALL" "Human:b346e18f-5ab1-4b3d-a3ca-316c80b28af5"
1629968851.420948 [0 172.17.0.1:57140] "HGETALL" "Human:fe5a5549-6efd-40c0-a687-8e775cac2971"
```

- 更新操作：CrudRepository.save(new Human("Frank123",21,new Address("JS","NJ","JN")))

```log
1. 删除旧HashValue
1630313849.336212 [0 172.17.0.1:58152] "DEL" "Human:30e0f8af-f249-45c8-8df8-fdee0445ad6c"
2. 设置新HashValue，并设置过期时间
1630313849.339558 [0 172.17.0.1:58152] "HMSET" "Human:30e0f8af-f249-45c8-8df8-fdee0445ad6c" "_class" "com.suning.entity.Human" "address.city" "NJ" "address.direction" "JN" "address.province" "JS" "age" "21" "id" "30e0f8af-f249-45c8-8df8-fdee0445ad6c" "name" "Frank123" "timeToLive" "5000"
1630313849.343364 [0 172.17.0.1:58152] "EXPIRE" "Human:30e0f8af-f249-45c8-8df8-fdee0445ad6c" "5"
3. 获取二级索引@Index的数据列表，并判断类型，并从二级索引集合中移除数据同时删除@Index的Key
1630313849.349870 [0 172.17.0.1:58152] "SMEMBERS" "Human:30e0f8af-f249-45c8-8df8-fdee0445ad6c:idx"
1630313849.355057 [0 172.17.0.1:58152] "TYPE" "Human:name:Frank"
1630313849.361528 [0 172.17.0.1:58152] "SREM" "Human:name:Frank" "30e0f8af-f249-45c8-8df8-fdee0445ad6c"
1630313849.365631 [0 172.17.0.1:58152] "DEL" "Human:30e0f8af-f249-45c8-8df8-fdee0445ad6c:idx"
4. 更新@Index的Key和Value
1630313849.369126 [0 172.17.0.1:58152] "SADD" "Human:name:Frank123" "30e0f8af-f249-45c8-8df8-fdee0445ad6c"
1630313849.372663 [0 172.17.0.1:58152] "SADD" "Human:30e0f8af-f249-45c8-8df8-fdee0445ad6c:idx" "Human:name:Frank123"
```

- CrudRepository.delete(new Human("Frank123",21))
``` log
1. 获取@Id的Hash Value
1630317777.690986 [0 172.17.0.1:59770] "HGETALL" "Human:dae2f3b2-3b29-4328-9c95-9d00aaaeee4d"
2. 移除@Id的HashValue 和 SetValue
1630317777.705736 [0 172.17.0.1:59770] "DEL" "Human:dae2f3b2-3b29-4328-9c95-9d00aaaeee4d"
1630317777.712630 [0 172.17.0.1:59770] "SREM" "Human" "dae2f3b2-3b29-4328-9c95-9d00aaaeee4d"
3. 移除@Index的SetValue
1630317777.718546 [0 172.17.0.1:59770] "SMEMBERS" "Human:dae2f3b2-3b29-4328-9c95-9d00aaaeee4d:idx"
1630317777.747462 [0 172.17.0.1:59770] "TYPE" "Human:name:Frank"
1630317777.750873 [0 172.17.0.1:59770] "SREM" "Human:name:Frank" "dae2f3b2-3b29-4328-9c95-9d00aaaeee4d"
1630317777.752692 [0 172.17.0.1:59770] "DEL" "Human:dae2f3b2-3b29-4328-9c95-9d00aaaeee4d:idx"
```

#### RedisTemplate 模式

##### 序列化方式
- JdkSerializationRedisSerializer：Byte格式
- OxmSerializer：OXM格式
- GenericJackson2JsonRedisSerializer：JSON格式

#### Cache模式

##### 序列化方式
``` java
@Bean
    public RedisCacheManager redisCacheManager(RedisConnectionFactory redisConnectionFactory) {
        return new RedisCacheManager(RedisCacheWriter.nonLockingRedisCacheWriter(redisConnectionFactory),
                RedisCacheConfiguration
                        .defaultCacheConfig()
                        .serializeValuesWith(new RedisSerializationContext.SerializationPair<Object>() {
                            @Override
                            public RedisElementReader<Object> getReader() {
                                return RedisElementReader.from(new GenericJackson2JsonRedisSerializer());
                            }

                            @Override
                            public RedisElementWriter<Object> getWriter() {
                                return RedisElementWriter.from(new GenericJackson2JsonRedisSerializer());
                            }
                        })
                        .entryTtl(Duration.ofSeconds(20)));
    }
```

#### 小结
```
笔者推荐使用RedisTemplate模式，优点：
1. 根据业务场景，灵活使用
2. 可自定义序列化方式，使用事务
以上恰恰是Repository的缺点，另外其封装了许多命令执行和调度，对于小型项目具有一定的友好性，对于企业级应用并非友好。
```

#### 参考资料
- https://docs.spring.io/spring-data/data-redis/docs/current/reference/html/#get-started