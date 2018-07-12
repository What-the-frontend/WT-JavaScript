데이터 타입에 대해서
===============
## 1.기본 타입
  * number  
  숫자를 나타낸다. 64비트 부동소수점 방식으로 Java의 double과 유사하다고 보면된다. if문 내에서는 `0` 은 `false` 를 의미하고 나머지는 `true` 를 의미한다.
    ```javascript
    const num = 1;
    console.log(typeof num) //number
    ```

  * string  
  문자열을 나타낸다. if문 내에서는 빈 문자열(`''`)은 `false` 를 의미하고, 문자열 자체는 `true` 를 의미한다.
    ```javascript
    const str = 'Hello';
    console.log(typeof str); //string
    ```

  * boolean  
  true와 false, 참과 거짓을 나타낸다.
    ```javascript
    const bool = true;
    console.log(typeof bool);  //boolean
    ```

  * undefined  
  값이 정의되지 않았다는 것을 의미한다. if문 내에서는 `false` 를 의미한다.
    ```javascript
    const undef;
    console.log(typeof undef);  //undefined
    ```

  * null  
  아무 것도 없다는 것을 의미한다. `undefined` 는 "정의되지 않았다." 의 의미가 강하고, `null` 은 "정의됐지만, 값이 없다." 의 의미가 강하다. if문 내에서는 `false` 를 의미한다.
    ```javascript
    const Null = null;
    console.log(typeof Null); //object
    ```

## 2.참조 타입  
>하나씩 세부적으로 설명한다.

  * 객체  
    * 배열  
    * 정규 표현식  
    * 함수  
