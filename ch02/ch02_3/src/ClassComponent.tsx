import { Component } from "react";

// 클래스 컴포넌트로 분리

// prop 타입 정의
export type ClassComponentProps = {
  href: string;
  text: string;
};

// export default class ClassComponent extends Component<ClassComponentProps> {
//   render() {
//     const { href, text } = this.props;

//     return (
//       <li>
//         {/* <a href="http://www.google.com">
//           <p>go to Google</p>
//         </a> */}
//         <a href={href}>
//           <p>{text}</p>
//         </a>
//       </li>
//     );
//   }
// }

// 함수 컴포넌트로 코드 단순화
export default function ClassComponent(props: ClassComponentProps) {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
}
