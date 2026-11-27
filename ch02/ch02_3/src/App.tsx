import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as D from "./data";
import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";

export default class App extends Component {
  render() {
    const isLoading = true;
    // const children = (
    //   <li>
    //     <a href="http://www.google.com">
    //       <p>go to Google</p>
    //     </a>
    //   </li>
    // );
    // if (isLoading) return <p>loading...</p>;

    // 단축평가 형로 구현
    // jsx 구분 분석기는 undefined 나 null인 문장은 무시
    // return (
    //   <div>
    //     {isLoading && <p>loading...</p>}
    //     {!isLoading && <ul>{children}</ul>}
    //   </div>
    // );

    //분기하는 jsx문을 children변수에 할당
    // const children = isLoading ? (
    //   <p>loding...</p>
    // ) : (
    //   <ul>
    //     <li>
    //       <a href="http://www.google.com">
    //         <p>go to Google</p>
    //       </a>
    //     </li>
    //   </ul>
    // );
    // return <div>{children}</div>;

    // 클래스 컴포넌트 사용
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ClassComponent href="https://twitter.com" text="go to Twitter" />
        <ArrowComponent href="https://twitter.com" text="go to Twitter" />
      </ul>
    );
  }
}
