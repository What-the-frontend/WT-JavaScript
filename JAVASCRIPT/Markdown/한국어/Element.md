#Element
===
Element는 웹페이지의 일부분이다. xml과 html안에서 element는 데이터아이템을 포함하거나 텍스트 또는 이미지의 덩어리고 어쩌면 아무것도 없을수도 있다(태그만 존재). 대표적인 element는 속성을 가진(속성을 갖지 않고 있을수도 있다) 열린태그와 닫힌태그 속에 text content형태로 포함되어있다.
```
<p class="attribute">enclosed text content></p>
<p> => 열린태그
<~ class="attribute"> => 열린태그내에 속성
</p> => 닫힌태그
```
Element와 태그는 엄연히 말해 다르다. 태그는 소스코드내에서 element의 시작과 끝을 나타낸다. 이에 반해 element는 브라우저에 페이지를 표시하기 위한 문서모델인 DOM의 일부이다. 