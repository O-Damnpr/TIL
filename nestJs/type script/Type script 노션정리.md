# Type script

---

![타입스크릡트란.jpg](Type%20script%2086348c32cb1841afa0451428547ad682/%25E1%2584%2590%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25B8%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B4%25E1%2586%25B8%25E1%2584%2590%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A1%25E1%2586%25AB.jpg)

<aside>
🔥

Type script

---

자바 스크립트의 단점을 보완하기 위해 만들어진 **정적 타입 언어(static type language)**

→ 자바 스크립트를 **확장**시킨 언어이기 때문에 기존 js의 기능을 모두 사용할 수 있다.

</aside>

### 타입스크립트를 사용하는 이유

- 클라이언트에서 받아온 데이터가 서버와 다른 타입이라 생기는 **오류등을 사전에 예방** 할 수 있다.
- 개발을 할 때 쓰는 VSC 등이 타입 스크립트 기반이라 자동완성이 편리하다 → **개발의 생산성을 향상**시킨다.

## 타입스크립트의 기본 타입

타입스크립트의 핵심인 타입의 종류는 12가지가 있고, 자바스크립트에 **: 를 이용**하여 타입을 정의하는 방식을 타**입 표기(Type Annotation)**이라고 한다.
타입이 있다는 것을 제외하면 자바스크립트와 크게 다른 점은 없다.

**var, let, const 이후에 <변수명> : <타입> 형식으로 변수를 선언**

```tsx
let count: number = 0;

let str: string = 'hi';

let isSolved: boolean = false;

let person: object = {name: 'Name', age: 29} 
//타입을 object로 정의하면 모든타입의 값을 할당할 수 있기 때문에 타입 검사에 엄격한 타입스크립트를 사용한 목적이 모호해진다.

let arr: number[] = [1,2,3];
let arr: Array<number> = [1,2,3];
//배열 선언 시 배열 안에 들어갈 요소의 타입까지 정해줘야한다.

let arr: [string, number] = ['hi', 10];
//배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식인 튜플의 선언 방법이다.

//java나 c 등에서 자주 사용되는 enum도 사용 가능하다.

let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];
//기존의 Js를 점진적으로 적용할 때 좋은 모든 타입을 할당 가능한 any

let a : void = null;
let b : void = undefined;
//undefined와 null만 할당이 가능한 void

let a : null = null
//null null 하네요

let a : undefined = undefined

// never
// 항상 오류 발생
function invalid(message:string): never {
  throw new Error(message);
}
// 무한 루프
function infiniteAnimate(): never {
  while ( true ) { infiniteAnimate(); }
}
//never는 일반적으로 함수의 리턴 타입으로 사용되는데, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
```