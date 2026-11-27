import React from "react";
import P from "./P";

// key값 설정 - 같은 이름의 컴포넌트가 여러 개일 때 이들을 구분하기 위해 사용
// export default function App() {
//   // 배열의 map 매서드 사용
//   // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
//   // const texts = ["hello", "world"].map((text, index) => (
//   //   <p key={index}>{text}</p>
//   // ));
//   // return <div>{texts}</div>;

//   // children 속성 설정 - 자식요소를 포함할 수 있는 컴포넌트에서 사용
//   const texts = ["hello", "world"].map((text, index) => (
//     <p key={index} children={text} />
//   ));
//   return <div children={texts} />;
// }

// P 컴포넌트 사용
export default function App() {
  const texts = ["hello", "world"].map((text, index) => (
    <P key={index} children={text} />
  ));
  return <div children={texts} />;
}
