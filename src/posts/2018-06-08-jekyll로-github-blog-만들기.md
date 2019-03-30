---
title: jekyll로 github 블로그 만들기
date: 2018-06-08
tags: ["Ruby", "Jekyll", "github pages"]
---
# jekyll로 github blog 만들기

### 해당 요구를 처리하기 위해선
- Ruby 설치
- Git 설치
- Github 계정 생성

## Ruby 설치
> 맥의 경우
>> brew install ruby
> 윈도우의 경우 
>> 루비 홈페이지에서 설치파일 다운로드

### Git 설치, Github 계정 생성은 생략

---
## jekyll, bundler 설치
Jekyll 은 아주 심플하고 블로그 지향적인 정적 사이트 생성기입니다.

> gem install jekyll bundler

루비 젬인 jekyll과 bundler 설치한다.

## jekyll theme 선택 후 다운로드
<http://jekyllthemes.org/> - jekyll themes
해당 페이지 이동 후 원하는 블로그 테마를 선택.

선택 후에는 2가지 방법으로 나뉜다.

- homepage 접속으로 github의 소스를 fork 하는 경우
- download로 직접 소스들을 받는 경우

## github 저장소에 있는 소스를 fork하는 경우
- 해당 저장소 이름을 <유저이름>.github.io 로 바꾼다.
> 유저이름 : junghanyoung
>> 저장소 이름 바꾸기 - junghanyoung.github.io

## download로 직접 소스를 받는 경우
- 다운받은 폴더에 git init
- github에 <유저이름>.github.io라는 이름의 저장소를 만든다.
- git init한 프로젝트 폴더에
>> git remote add origin <GitHub 저장소 주소> - 원격저장소 추가
>>
~~~
> git pull      -- 원격저장소에 README.md파일을 만들었다면 거쳐야됨
> git add .     -- 스테이징
> git commit -m "커밋 내용" -- 스테이징 내용 커밋
> git push      -- 원격저장소에 푸쉬
~~~

<유저이름>.github.io로 접속

> 푸쉬하고 나서 바로 블로그가 생성되지는 않음.
---
## 블로그 포스팅 하기
보통 마크다운(markdown)파일로 블로그 포스트를 만듬.

프로젝트 파일로 vscode를 연 후

_config.yml 파일을 확인

블로그 관리자 이름, 이미지, 소개 등등을 커스터마이징하고,

> jekyll serve
>> could not find gem Error 시 gem install <>로 루비젬을 추가해준다.

- _posts폴더에 포스팅할 마크다운을 생성
- 파일 생성시 이름은 YYYY-MM-DD-<제목>.md
- 포스팅 마친 후 저장시 자동으로 _site에 html파일 생성
- localhost:4000에서 확인 가능









