---
title: Express에 Sequelize 적용해보기
date: "2018-06-09"
category: node-express
tags: ["javascript", "node.js", "express", "database", "sequelize"]
---

# Express & Sequelize 

## 모듈 설치
~~~
// sequelize 설치
> npm install --save sequelize express
& yarn add sequelize express

// DBMS 모듈 하나 선택
$ npm install --save pg pg-hstore // PostgreSQL
$ npm install --save mysql2 <-- select
$ npm install --save sqlite3
$ npm install --save tedious // MSSQL
~~~

## 프로젝트 구조
~~~
<Project>
- node_modules
- models
 - index.js
 - user.js
 - post.js
- app.js
- package.json
~~~

## Source Code

~~~javascript
// models/index.js

var Sequelize = require('sequelize');
var path = require('path');

// DB 연결정보
var sequelize = new Sequelize(<DB_NAME>, '<DB_USER>', '<DB_PASSWORD>', {
    // npm install --save mysql2
	dialect: 'mysql',
	host: 'localhost'
});

// ORM
var models = {
    // models/user.js, models/post.js 생성
	User: sequelize.import(path.join(__dirname, '/user')),
	Post: sequelize.import(path.join(__dirname, '/post'))
};

// 테이블 간의 관계
Object.keys(models).forEach((modelName) => {
	if ('associate' in models[modelName]) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
~~~

- DB 연결정보 작성
- 모델 모듈 호출 후 저장

~~~javascript
// models/user.js

module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define('user', {
		username: {
			type: DataTypes.STRING,
			unique: true
		},
		password: {
			type: DataTypes.STRING
		}
	});

	User.associate = function(models) {};

	return User;
};
~~~

- sequelize.define으로 모델 생성
- 외래키가 있을 경우 associate 함수 안에 정의

~~~javascript
module.exports = function(sequelize, DataTypes) {
	const Post = sequelize.define('post', {
		title: {
			type: DataTypes.STRING
		},
		content: {
			type: DataTypes.STRING
		}
	});

	Post.associate = function(models) {
		Post.belongsTo(models.User);
	};

	return Post;
};
~~~

- 외래키의 경우 Post.belongsTo 함수

~~~javascript
// app.js

var models = require('./models');
...
models.sequelize.sync(function() {
    app.listen(3000, function() {
        console.log('Server Started..')
    });
})
~~~

- sync시 데이터베이스가 모듈 내용에 따라 싱크를 맞춤.
- 성공시 서버 구동.

## 실행시 테이블 구조 확인

### users 테이블

|Field|Type|Null|Key|Default|Extra|
|:-----|:------|:--------|:---------|:------|:--------|
|id|int(11)|No|PRI|NULL|auto_increment|
|username|varchar(255)|No|UNI|NULL||
|password|varchar(255)|YES||NULL||
|createdAt|datetime|No||NULL||
|updatedAt|datetime|No||NULL||

### posts 테이블

|Field|Type|Null|Key|Default|Extra|
|:-----|:------|:--------|:---------|:------|:--------|
|id|int(11)|No|PRI|NULL|auto_increment|
|title|varchar(255)|YES||NULL||
|content|varchar(255)|YES||NULL||
|createdAt|datetime|No||NULL||
|updatedAt|datetime|No||NULL||
|userId|int(11)|YES|MUL|NULL||