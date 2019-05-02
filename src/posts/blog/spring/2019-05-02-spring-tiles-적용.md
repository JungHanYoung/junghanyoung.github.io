---
title: Spring Tiles 적용
date: "2019-05-02"
category: spring
tags: ["Spring", "DI", "tiles"]
---

## Tiles 

### 생각 정리

- 컨트롤러가 어떤 뷰네임으로 리턴하는지에따라 갖춰져있는 템플릿대로 바꿀 수 있다.
- JSP에 layout기능 찾아보니 있긴한데 이해하기가 어려웠고, tiles는 확실히 더 간단한 것 같다.
- 리턴되는 뷰네임에 따라 템플릿, body 등을 결정할 수 있어 훨씬 간단히 분리할 수 있고 이에 따라 재사용이 손쉬움.
- 요즘 REST API로 많이 만든다고 생각하니 공부한게 조금 아쉽.
- React.js와 비슷한 면이 있음.

### Tiles란?

> JSP에서 반복적인 부분들을 깔끔하게 관리할 수 있게 해주는 템플릿 프레임워크.

### 요구사항확인.

Tiles는 JSP와 JSTL을 기반으로 만들어져 있어 servlet-api, JSTL가 있어야함.
> JSP말고 다른 템플릿엔진으로도 가능한 것 같음. 일단 JSP로 구동을 할거라 위의 dependency가 필요함.

- JDK 1.7 이상
- servlet 2.5 이상
- jsp 2.1 이상
- spring 3.2 이상

### pom.xml 추가

```xml
<!-- version property -->
<properties>
    <!-- ... -->
    <org.apache.tiles-version>3.0.5</org.apache.tiles-version>
</properties>
<!-- ... -->
<!-- Tiles Dependency -->
<dependency>
    <groupId>org.apache.tiles</groupId>
    <artifactId>tiles-servlet</artifactId>
    <version>${org.apache.tiles-version}</version>
</dependency>
    <dependency>
    <groupId>org.apache.tiles</groupId>
    <artifactId>tiles-api</artifactId>
    <version>${org.apache.tiles-version}</version>
</dependency>
<dependency>
    <groupId>org.apache.tiles</groupId>
    <artifactId>tiles-jsp</artifactId>
    <version>${org.apache.tiles-version}</version>
</dependency>
<dependency>
    <groupId>org.apache.tiles</groupId>
    <artifactId>tiles-core</artifactId>
    <version>${org.apache.tiles-version}</version>
</dependency> 
<dependency>
    <groupId>org.apache.tiles</groupId>
    <artifactId>tiles-template</artifactId>
    <version>${org.apache.tiles-version}</version>
</dependency> 
<!-- ... -->
```

### 빈설정 

해당 빈 설정은 view와 관련되어 있어 servlet-context.xml에 설정해야 된다. 

tiles를 위해 설정해야될 빈은 
- TilesConfigurer
- UrlBasedViewResolver
  - TilesView

#### TilesConfigurer 

- org.springframework.web.servlet.view.tiles3.TilesConfigurer
- spring에서 tiles 설정을 도와주는 helper class 
- 여기에 tiles 설정파일을 등록하는 일을 한다.

```xml
<beans:bean id="tilesConfigurer" class="org.springframework.web.servlet.view.tiles3.TilesConfigurer">
    <beans:property name="definitions">
        <beans:list>
            <beans:value>/WEB-INF/tiles/tiles.xml</beans:value>
        </beans:list>
    </beans:property>
</beans:bean>     
```

[API문서 링크](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/view/tiles3/TilesConfigurer.html)로 가면 다른 설정들도 확인할 수 있던데 어떠한 설정인지는 몰라 패스.

#### ViewResolver

- 를 구현한 UrlBasedViewResolver로 설정. -> internalResourceViewResolver랑 뭔차이..?
> 보니까 UrlBasedViewResolver를 상속한 TilesViewResolver라는 것도 있는데 이걸 ViewResolver로 해도 상관없을듯.
>
> 2차확인: UrlBasedViewResolver는 viewClass가 AbstractUrlBasedView를 기본으로 되어 있음. 그래서 TilesView를 설정하는것.
> 
> TilesViewResolver는 viewClass가 TilesView로 override되어 viewClass설정이 필요없음.
- order를 줘서 Tiles 템플릿을 먼저 스캔하고 없으면 이전 internalViewResolver를 쓰도록함.

```xml
<beans:bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <beans:property name="prefix" value="/WEB-INF/views/" />
    <beans:property name="suffix" value=".jsp" />
    <beans:property name="order" value="2" /><!-- Tiles를 훑고 해당하는 view가 없으면 이쪽으로 -->
</beans:bean>

<!-- 생략 -->

<beans:bean id="tilesViewResolver" class="org.springframework.web.servlet.view.UrlBasedViewResolver">
    <beans:property name="viewClass" value="org.springframework.web.servlet.view.tiles3.TilesView" />
    <beans:property name="order" value="1" />
</beans:bean>
```

### Tiles 설정


- TilesConfigurer에서의 설정파일 (/WEB-INF/tiles/tiles.xml)

```xml
<!DOCTYPE tiles-definitions PUBLIC
  "-//Apache Software Foundation//DTD Tiles Configuration 3.0//EN"
  "http://tiles.apache.org/dtds/tiles-config_3_0.dtd">
 
<tiles-definitions>
 
    <!-- 메뉴 표시 -->
    <definition name="base" template="/WEB-INF/tiles/template.jsp">
        <put-attribute name="left"   value="/WEB-INF/tiles/left.jsp" />
        <put-attribute name="header" value="/WEB-INF/tiles/header.jsp" />
        <put-attribute name="footer" value="/WEB-INF/tiles/footer.jsp" />
    </definition>
 
    <definition name="*.page" extends="base">
        <put-attribute name="body" value="/WEB-INF/views/{1}.jsp" />
    </definition>
 
     <definition name="*/*.page" extends="base">
         <put-attribute name="body" value="/WEB-INF/views/{1}/{2}.jsp" />
     </definition>
    
    <definition name="*/*/*.page" extends="base">
        <put-attribute name="body" value="/WEB-INF/views/{1}/{2}/{3}.jsp" />
    </definition>
    
    
    <!-- 메뉴 미표시 -->
    <definition name="baseEmpty" template="/WEB-INF/tiles/templateEmpty.jsp">
    </definition>
    
    <definition name="*.part" extends="baseEmpty">
        <put-attribute name="body" value="/WEB-INF/views/{1}.jsp" />
    </definition>
 
     <definition name="*/*.part" extends="baseEmpty">
         <put-attribute name="body" value="/WEB-INF/views/{1}/{2}.jsp" />
     </definition>
    
    <definition name="*/*/*.part" extends="baseEmpty">
        <put-attribute name="body" value="/WEB-INF/views/{1}/{2}/{3}.jsp" />
    </definition>        
    
</tiles-definitions>
```

- definition태그의 name따라 view가 포워딩됨.

##### 포워딩되는 과정 정리

- Controller
  - test.page -> name의 *.page에 매칭됨
    - body: /WEB-INF/views/test.jsp -> *이 {1}에 들어감.
    - left: ...
    - header: ...
    - footer: ...
  - test.part -> name의 *.part에 매칭됨
    - body: /WEB-INF/views/test.jsp -> *이 {1}에 들어감.
  - test -> 매칭되는 것이 없음. -> InternalResourceViewResolver
    - /WEB-INF/views/test.jsp 렌더링

- name-template으로된 태그가 name-extends의 extends로 연결됨.
- put-attribute태그와 JSP view에 있는 tiles:insertAttribute와 연결됨.

#### template 예시

```html
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>제목</title>
    <style>
        #header{            
            width:100%;
            height:50px;
            text-align: center;
            background-color: aqua;
        }
        #left{
            float:left;
             width:15%;
            background-color: gray;
        }
        #main{
            float:left;
             width:85%;
            background-color: lime;
        }
        #footer{
            width: 100%;
            height: 50px;            
            text-align: center;
            background-color: orange;
            clear:both;
        }
         #left, #main{ 
               min-height: 600px;
         } 
    </style>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <div style="width:100%; height:100%;">
    <div id="header"><tiles:insertAttribute name="header" /></div>
    <div id="left"><tiles:insertAttribute name="left" /></div>
    <div id="main"><tiles:insertAttribute name="body" /></div>    
    <div id="footer"><tiles:insertAttribute name="footer" /></div>
    </div>
 
    <script type="text/javascript">
        $(function() {
 
        });    
    </script>    
</body>
</html>
```

- <%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %> 추가
- tiles:insertAttribute가 이전 tiles설정파일의 put-attribute와 연결된다.

