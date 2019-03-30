---
title: null과 undefined의 차이점
date: "2018-06-16"
category: javascript
tags: ["javascript", "foundation"]
---

# null과 undefined의 차이

## 개요

javascript에 관한 기술면접 중 

"null과 undefined의 차이를 아시면 설명 해주실 수 있을까요?"

라는 질문을 받았었다.

수료 후 javascript만을 공부했던 나인데 전~혀 생각 안해본 개념이라 답변을 못했었다.. ㅠㅠ

"근데 진짜 무슨 차이지? 다른 언어들과는 다르게 왜 그 두 개가 분리되어 있는 거지?" 라는 생각을 하였고 한번 찾아보기로 했다.

stackoverflow와 내 나름대로 여러 문법들을 이용해 차이점을 찾아보았다.

---

## 1. number 계산

두 개의 파라미터를 받아 더한 값을 리턴하는 간단한 함수를 만들었다.

~~~
function add(a, b) {
    return a + b;
}
~~~

파라미터 a에 undefined 또는 null값을 넣어 리턴받은 값을 출력했더니 다른 값이 나왔다.

- undefined를 넣었을 때

~~~
var undefinedResult = add(undefined, 10);
console.log(undefinedResult);
// -> NaN
~~~

- null을 넣었을 때

~~~
var nullResult = add(null, 10);
console.log(nullResult);
// -> 10
~~~

결과

- undefined는 연산을 할 수 없다.
- null연산에 이용시 _0_ 으로 대체하여 연산된다.

---

## 2. 변수 정의 및 typeof

기본적으로 변수 정의 후 값을 넣지 않을 경우 해당 변수는 undefined 상태.

- undefined

~~~
var testVar;
console.log(testVar);
// -> undefined
console.log(typeof testVar);
// -> undefined
~~~

- null

~~~
var testVar2 = null;
console.log(testVar2);
// -> null
console.log(typeof testVar2);
// -> object
~~~

typeof 연산으로 타입 체크시 

- undefined는 "undefined"
- null은 "object"

해당 개념의 연장선으로..

---

## 3. '=='와 '==='

- '=='연산은 타입에 상관없이 값만을 비교 (느슨한 비교)
- '==='연산은 타입과 값을 비교 (엄격한 비교)

그럼 한번 null과 undefined 사이를 비교해보자

~~~
var testVar;    // undefined
var testVar2 = null;

console.log(testVar == testVar2);
// -> true
console.log(testVar === testVar2);
// -> false
~~~

- '==', 값을 비교했을 때는 true
- '===', 값과 타입을 비교했을 때는 false

---

## 4. 조건문 안에서의 동작

바로 코드로 확인해보겠다.

~~~
if(undefined){
    // not working
} else {
    // working
}

if(null) {
    // not working
} else {
    // working
}
~~~

null과 undefined 둘 다 거짓(false)로 변환되는 공통점을 가지고 있다.

---
## 결론

이것말고도 더 많은 차이가 있는지 모르겠지만

찾아보면서 느낀 점은

개발을 하면서 신경을 안써도 상관없을 것 같다.

끝





