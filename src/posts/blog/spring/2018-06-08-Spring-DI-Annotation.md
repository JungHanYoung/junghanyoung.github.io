---
title: Spring DI를 위한 Annotation
date: "2018-06-08"
category: spring
tags: ["Spring", "DI", "Annotation"]
---

# Spring 의존관계 자동 설정

## Spring Bean 등록
- 스프링 컨테이너는 base-package의 클래스를 검색해 자동으로 Bean을 등록
- @Component, @Repository, @Service, @Controller, @RestController
- 해당 Annotation을 이용, 클래스를 Bean으로 등록할 수 있다.
- XML의 Context파일은 component-scan에 해당 어노테이션을 쓰는 클래스들의 패키지를 등록해야함.

## 등록된 Bean을 이용한 의존관계 자동 설정
- Spring은 의존하는 빈 객체의 타입이나 이름을 이용하여 의존 객체를 자동으로 설정 할 수 있는 기능을 제공한다.
- 자동설정에는 다음 네 가지 Annotation이 존재한다.
> @Autowired, @Inject, @Resource, @Qualifier

|          | @Autowired      | @Inject        | @Resource |
|:--------:|:---------------:|:--------------:|:--------:|
| 범용     | Spring          | Java           | Java |
| 방식     | 타입에 맞춰 연결 | 타입에 맞춰 연결 | 이름에 맞춰 연결 |

- @Inject, @Resource는 기존 Java의 Annotation
- @Autowired는 Spring에서 지원하는 Annotation
- 보통은 @Autowired와 @Inject은 거의 같다고 봐도 무방할 듯
- @Resource는 타입이 아닌 이름에 맞춰 연결하는 것이 다름

### 타입에 맞춰 연결 vs 이름에 맞춰 연결
다음과 같은 예시의 Context가 설정되 있다고 해보자.

~~~xml
// root-context.xml
<bean id="dataSourceSpied" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"></property>
		<property name="url" value="jdbc:oracle:thin:@localhost:1521/XE"></property>
		<property name="username" value="ora_user"></property>
		<property name="password" value="jeong"></property>
</bean>

<bean id="dataSource" class="net.sf.log4jdbc.Log4jdbcProxyDataSource">
	<constructor-arg ref="dataSourceSpied" />
	<property name="logFormatter">
		<bean class="net.sf.log4jdbc.tools.Log4JdbcCustomFormatter">
			<property name="loggingType" value="MULTI_LINE" />
			<property name="sqlPrefix" value="SQL         :  " />
		</bean>
	</property>
</bean>
~~~

### 해당 Bean들은 DataSource라는 인터페이스를 구현한 객체이다.
- dataSourceSpied는 DB와 연결하는 객체
- dataSource는 DB와 데이터를 주고받을 때 로그를 찍게 해주는 객체

### 둘다 DataSource타입을 구현한 객체라면 만약에...

~~~java
// 임의의.class
public class 임의의 {
      @Autowired  // @Inject도 가능
      private DataSource ds;
}
~~~

위와 같이 코드를 했을 경우 에러가 발생한다.
### 에러의 핵심 내용을 보자면 

~~~
No qualifying bean of type 'javax.sql.DataSource' available: expected single matching bean but found 2: dataSource,dataSourceSpied
~~~

대충 해석해보면 
> 1개의 Bean을 기대했는데 2개의 Bean을 발견했다. 그 두개는 dataSource, dataSourceSpied.

DataSource를 구현한 객체가 2개이므로 Bean도 2개를 발견하게 되는 것이다.

타입에 맞춰 연결을 하게 되어 에러가 발생.

여기서 @Resource를 사용하여 타입이 아닌 이름으로 설정할 수 있다.

~~~java
// 임의의.class
public class 임의의 {
      @Resource(name= "dataSource")
      private DataSource ds;
      // 또는
      @Resource
      private DataSource dataSource;
}
~~~

- name값을 넣어 맞는 bean의 id를 찾아서 설정하거나,
- 변수명과 같은 bean의 id를 찾아 설정.

# 해결 못한 것들..?

## @Qualifier
- @Autowired, @Inject의 경우에도 @Qualifier를 이용하면 타입 이외에도 다른 연결이 가능하고 하는데...

~~~java
// Bird <- Interface
// Chicken, Penguin <- Bird를 구현한 class
@Autowired
@Qualifier("chicken")
private Bird penguin;
~~~

위와 같이 쓰면 이름에 상관없이 Chicken 타입으로 연결되는 것을 알 수 있습니다.
이렇게 하면 된다는 데...

~~~java
// 임의의.class
public class 임의의 {
      @Autowired
      @Qualifier("log4jdbcProxyDataSource") // 또는 @Qualifier("net.sf.log4jdbc.Log4jdbcProxyDataSource")
      private DataSource ds;
}
~~~

파라미터 맨앞이 소문자가 맞는건지도 모르겠고
소문자면 라이브러리에서 가져오는 건 타입명만 써야되는 건지
경우의 수가 4개 나오는데 다 에러가 뜸...
