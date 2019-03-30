---
title: Javascript에서의 Prototype은 무엇인가?
date: "2018-07-01"
category: javascript
tags: ["javascript", "foundation"]
---

prototype은 자바스크립트를 객체지향으로 개발할 수 있게 하는 개념이다.

## Prototype과 Class

객체지향 언어로 Java가 대표적이라 할 수 있는데 class를 정의하고 이를 활용하여 객체지향개발을 할 수 있다. 간단한 객체지향적 코드를 다음과 같이 구현.

~~~
// Java 코드
class Obj1 {
    public int id;
    public String username;
}
// 상속
class Obj2 extends Obj1 {
    public String phone;
}
~~~

자바스크립트는 기본적으로 함수 기반의 언어라서 class라는 개념이없다. 그렇다면 객체지향 개발은 어떻게 하는 것일까? 자바스크립트는 class라는 개념 대신에 프로토타입이란 개념이 있다.

자바스크립트의 모든 객체에는 자신을 생성한 객체의 원형이 있다. 그 객체의 원형(prototype)을 프로토타입이라 부른다.

일단 자바스크립트 객체를 정의하는 기본적인 코드부터 살펴본다.

~~~
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}
var minsu = new Person('민수', 18);
~~~

해당코드를 통해 Person이라는 함수를 통해 minsu 객체를 만들 수 있다. 이제 이 객체에 메소드를 추가하려면 두가지의 방법이 있다.

~~~
// 1. 내부 메소드 정의
var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.goRestroom = function() {
        console.log(this.name + ' went to the restroom')
    }
}
// 2. 프로토타입을 통한 메소드 정의
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.goRestroom = function() {
    console.log(this.name + ' went to the restroom');
}
~~~

일반적으로 자바스크립트 객체에 대해 익숙치 않다면 1번과 같은 방법을 생각할 것 같다. 나 또한 그랬다. 여기서 1번은 여러개의 Person객체를 정의했을 때 각각의 객체가 goRestroom이라는 속성을 가지고 있어 메모리를 차지하게 되는 문제점이 있다. 

~~~
console.log(minsu)      // 생성한 객체 정보 출력
// 1. 내부 메소드
Person { name: '민수', age: 18, goRestroom: [Function] }
// 2. 프로토타입을 통한 메소드 정의
Person { name: '민수', age: 18 }
~~~

각각의 객체에 메소드가 속성으로 필요한 경우도 있을 수 있지만 보통 메소드는 객체들이 하나 정의된 메소드를 공유하는 것이 바람직하다.

이는 프로토타입을 이용하면 가능해지게 되는데... 이것은 자바스크립트만의 특성이라고 볼 수 있다.

### Prototype Link와 Prototype Object

자바스크립트에서 함수를 정의할 때에는 2가지가 자동적으로 실행되는데 

1. 해당 함수에 생성자 자격부여
2. 해당 함수에 Prototype Object 생성
- 이렇게 생성된 Prototype Object에 constructor와 __proto__를 연결
- 여기서 __proto__는 Prototype Link를 말한다.

예를 들어 Person이 정의될 때 위의 2가지가 수행되고 해당 함수로 객체 생성 시 __proto__가 Person의 Prototype Object에 연결되어진다.

여기서 Person.prototype에 속성을 넣으면 Prototype Object에 적용되고 이 후에 Person으로 객체 생성시 __proto__에서 방금 적용한 Prototype Object를 볼 수 있다.

자바스크립트의 모든 객체는 prototype으로 숨겨진 연결을 모두 찾아낸다. 만약 minsu객체에 goRestroom 속성이 없으면 __proto__에 연결된 Prototype Object를 탐색하고 또 없으면 그 안에 있는 __proto__에 연결된 Prototype Object를 탐색, 없으면 __proto__탐색 ... 이 과정을 반복하게 된다.

여기서 프로토타입 속성에 메소드로 필요한 함수를 정의하면 Person함수로 만들어진 객체는 __proto__를 통해 객체의 원형에 접근해 메소드를 공유할 수 있게 된다.

## 프로토타입과 상속

위와 같이 __proto__를 연속으로 만들 수 있다. 가령 이렇게

~~~
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.goRestroom = function() {
    console.log(this.name + ' went to the restroom');
}
var Adult = function(name, age, phone) {
    Person.call(this, name, age);
	this.phone = phone;
}
Adult.prototype = new Person();

var minsu = new Adult('민수', 20, '010-0000-0000');

minsu.goRestroom();

// output: 민수 went to the restroom
~~~

minsu객체가 goRestroom을 탐색하는 과정을 따라가면 

> Adult { name: "민수", age: 20, phone: "010-0000-0000"}
>> age: 20
>>
>> name: "민수"
>>
>> phone: "010-0000-0000"
>>
>> __proto\__: Person
>>> age: undefined
>>>
>>> name: undefined
>>>
>>> __proto\__:
>>>> goRestroom: function() ...

1. minsu객체내에 있는지 탐색.
2. minsu에 연결된 prototype(new Person())에서 탐색
3. new Person()에 연결된 prototype 탐색

이렇게 __proto\__, 즉 Prototype Link는 객체와 객체를 연결하는 체인의 역할을 하게 된다. 이러한 관계를 prototype chain이라고 한다. 이를 통해 여러 상속을 구현할 수가 있다.