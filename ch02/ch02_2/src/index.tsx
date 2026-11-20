import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as D from "./data";

// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>go to Facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to Twitter</p>
//     </a>
//   </li>,
// ];

// const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>);

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
));

// const rootVirtualDOM = (
//   <ul>
//     <li>
//       <a href="http://wwww.google.com" target="_blank">
//         <p>go to google</p>
//       </a>
//     </li>
//   </ul>
// );

// const rootVirtualDOM = <ul>{children}</ul>;

const rootVirtualDOM = <div>{children}</div>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
root.render(rootVirtualDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
