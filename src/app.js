import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import helloImg from "./img/hello.jpeg";

const App = () => {
    const hello = "Hello parcel world";
    return (
        <div>
            <img src={helloImg} />
            <h1>{hello}</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
