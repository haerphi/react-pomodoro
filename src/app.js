import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import helloImg from "./img/hello.jpeg";

const App = () => (
    <div>
        <img src={helloImg} />
        <h1>{"Hello parcel world"}</h1>
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
