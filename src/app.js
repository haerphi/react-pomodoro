//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./index.css";
//components
import Bouton from "./componenent/boutons";
import {Timer, moreTime, lessTime} from "./componenent/timer";

function refresh() {
    ReactDOM.render(<App />, document.querySelector("#root"));
}

const App = () => {
    function plus() {
        moreTime();
        refresh();
    }
    function moins() {
        lessTime();
        refresh();
    }
    return (
        <div>
            <Timer />
            <Bouton name={"play"} />
            <button type={"button"} onClick={plus}>
                {"+"}
            </button>
            <button type={"button"} onClick={moins}>
                {"+"}
            </button>
            <Bouton name={"reset"} />
        </div>
    );
};
refresh();
