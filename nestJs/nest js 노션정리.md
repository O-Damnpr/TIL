# Nest.js

---

<aside>
💡

**Nest.js**

Nest.js는 백엔드 서버를 구축하기 위한 Node.js 프레임 워크이다.
TypeScript를 지원하며, 순수 JavaScript로도 사용가능하다.

</aside>

[Type script](https://www.notion.so/Type-script-86348c32cb1841afa0451428547ad682?pvs=21)

### 장점

- TypeScript의 강력한 정적 타입 검사 → 개발 단계의 버그 사전 방지
- 객체지향 프로그램 기능
- 모듈 기반 구조로 체계적인 방식의 코드 구성
- 아키텍처가 정의되어있음 → 여러 개발자 간 협업하기 좋음

### express VS nest.js

물론 nest.js는 express를 사용해서 만들어진 프레임 워크로 express를 어떻게 사용해야 더 좋을까 고민하고 만들어진 프레임워크이다.

<aside>
🌎

**express**

---

- 구조에 대한 강제 사항이 없이 개발자가 직접 프로젝트 구조를 설계하고, 미들웨어와 라우팅을 직접 관리해야 한다.
- JavaScript 기반으로 설계되어 있으며, TypeScript를 사용하기 위해 별도의 설정 작업이 필요하다.
- 의존성 주입을 내장하고 있지 않으며, 개발자가 필요한 경우 직접 구현을 해야 한다.
- 테스트를 위해 별도의 라이브러리나 프레임워크를 선택해야 한다.
</aside>

<aside>
🔥

**nest.js**

---

- 모듈화된 아키텍처를 강조하여 프로젝트 구조를 일관성 있게 유지한다.
- 기본적으로 TypeScrip를 지원한다.
- 기본적으로 의존성 주입을 제공한다.
- 테스팅을 위한 기능을 내장하고 있으며, 유닛 테스트와 통합 테스트를 쉽게 작성할 수 있다.
- swagger를 자동으로 달 수 있다.
</aside>

→ NestJS는 타입 **안정성과 모듈화**를 강조하며, 대규모 애플리케이션의 유지보수와 확장성을 고려한 설계 때문이다. 반면, **작은 규모의 프로젝트나 빠른 개발 속도를 원하는 경우 Express가 더 적합할 수 있다.**

# nest js - request life cycle

![nest js request life cycle.png](라이프사이클 그림/nest js request life cycle.png)

client에서 request를 보내면 middle ware → guard → pipe 를 거쳐 요청 로직 처리 부분에서 처리가 된 후 

ExceptionFilter→ Interceptor를 거쳐 클라이언트에 반환된다.

*앞에 거쳐가는 부분은 필수는 아니지만 굉장히 유용하고, 요청 로직 처리 부분은 필수이다.
  (나중에 좀 더 자세히 다룰 예정)