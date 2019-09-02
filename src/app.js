import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//components
import Bouton from "./componenent/boutons";
import Timer from "./componenent/timer";

const App = () => (
    <div>
        <Timer />
        <Bouton name={"play"} />
        <Bouton name={"+"} />
        <Bouton name={"-"} />
        <Bouton name={"reset"} />
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
