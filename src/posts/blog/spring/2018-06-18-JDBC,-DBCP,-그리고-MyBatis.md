---
title: JDBC -> DBCP -> MyBatis
date: 2018-06-17 07:49:00 +0300
category: spring
tags: ["Java", "Spring", "Database", "MyBatis", "JDBC"]
---

## 개요

MyBatis를 이용하는 이유.. 쓰다보니 편리한건 알겠는데 왜 편리한건지 이유에 대한 정리가 안되었다.

그냥 편하게 쓰면 되겠징 룰루

이렇게 생각하다가 막상 이 질문을 받았을 때 대답을 할 수 없었다. 편리하다고만 할 수는 없지 않은가.. 그니까 이게 왜 편리하냐궁ㅋ 

확실히 하고 싶어서 여러 포스트들을 찾아보고 정리하려 한다.



---

<br/>

## JDBC

> Java DataBase Connectivity의 약자로 자바에서 데이터베이스에 접속할 수 있도록 하는 자바 API이다.

데이터베이스 연동관련 자바를 배울 때 처음으로 접하는 것.

~~~java
Connection conn = null;
PrepareStatement pstmt = null;

try{
    Class.forName("com.mysql.jdbc.Driver"); // MySQL JDBC 드라이버

    Connection conn = DriverManager.getConnection(<URL>, <USERNAME>, <PASSWORD>);

    String sql = "insert into member1 values(?,?,?,?)";

    pstmt = conn.prepareStatement(sql);

    pstmt.setString(1,"test");

    pstmt.setString(2,"passwd");

    pstmt.setString(3,"김철수");

    pstmt.setTimestamp(4, new Timestamp(System.currentTimeMillis()));

    pstmt.executeUpdate();
} catch(Exception e) {
    e.printStackTrace();
} finally {
    try {
        if(pstmt != null) try{ pstmt.close(); }catch(SQLException sqle){}

        if(conn != null) try{ conn.close(); }catch(SQLException sqle){}

}
~~~

해당 JDBC코드의 문제점이라고 할 수 있는 것은

#### 하나의 SQL문을 실행할 때마다 커넥션을 열고 닫고를 해야한다.

이게 무슨 말이냐..

서버 통신으로 10개의 SQL을 실행해야한다고 가정하면

JDBC코드의 경우 커넥션 열고 닫기를 10번을 반복해야한다.

웹 서버에서 물리적으로 DB서버에 최초로 연결되어 Connection 객체를 생성하는 부분은 서버의 자원을 많이 소모한다고 한다.

SQL문이 많이 오가는 WAS는 이러한 이유로 JDBC는 대부분 쓰이지 않는다고 한다.

그래서 DB연결의 부담을 줄이기 위해 나온 방법이 DBCP를 이용한 것이다.

## DBCP

Database Connection Pool.

해당 구현체의 역할은 다음과 같다

1. WAS 실행 시 Connection객체를 미리 만들고 Pool 공간에 저장해둔다.
2. HTTP 요청시 Pool의 Connection객체를 가져다 쓰고 반환한다.

미리 만들어진 Connection을 쓰고 반환만 하기 때문에 DB연결 및 해제의 과정이 없어 Connection객체를 생성하는 비용을 줄일 수 있게 된다.

## MyBatis

자바에서의 퍼시스턴스 프레임워크 중 하나.

DBCP을 이용한 프레임워크라 볼 수 있고,

JDBC보다 생산성이 높고 유지보수 측면에서 장점이 있다.

내가 느낀 장점에 대해 얘기하자면...

### SQL명령어를 자바 코드에서 분리하여 XML파일에 따로 관리.

~~~xml
// root-context.xml
...
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource" />
    <property name="configLocation" value="<MyBatis 설정파일 경로>" />
    <property name="mapperLocation" value="<MyBatis Mapper파일 경로>" />
</bean>

// mapper.xml
...
<select id="getTime" resultType="string">
    SELECT SYSDATE FROM dual
</select>
~~~

- SQL문이 자바코드와 뒤엉키는 것을 방지하는 것 같다.
- 확실히 SQL문 보기가 편하다.
- 분리되어 있기 때문에 관리하기가 좀 더 용이하였다.

<br/>

### ResultSet 결과를 객체로 자동 매핑시켜주어 복잡한 매핑코드를 넣지 않아도 되는 것.

~~~xml
...
<select id="list" resultType="org.onezero.domain.BoardVO" parameterType="map">
    SELECT * FROM board
</select>
~~~

- resultType이나 parameterType들을 기본 자료형, Collection, 특정 Value Object등으로 명시할 시 해당 타입으로 자동 매핑을 시켜준다. (객체일시 get, set메소드 필요)
- 이것만 생각해도 소스코드가 확 줄어드는 것을 느낌.

<br/>

### SQL를 동적으로 구성하는 것이 가능하여 중복되는 SQL를 최소화 할 수 있다.

~~~xml
// mapper.xml
<select id="searchList" resultType="org.onezero.domain.BoardVO" parameterType="map">
    SELECT * FROM board
     WHERE bno &gt; 0
       <if test="title != null">
        AND title LIKE #{title}
       </if>
</select>
~~~

- SQL안에 if element를 넣음으로써 문자열 검색기능을 선택적으로 실행할 것이다.

- if, choose(when, otherwise), trim(where, set), foreach등의 element들이 있다.