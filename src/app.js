//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./index.css";
//components
import {
    Timer,
    moreTime,
    lessTime,
    startStopTimer,
    resetTimer,
} from "./componenent/timer";

function refresh() {
    ReactDOM.render(<App />, document.querySelector("#root"));
}

const App = () => {
    function plus() {
        moreTime();
        refresh();
    }
    function minus() {
        lessTime();
        refresh();
    }

    function reset() {
        resetTimer();
        refresh();
    }
    function startStop() {
        startStopTimer();
        refresh();
    }
    return (
        <div>
            <Timer />
            <button type={"button"} onClick={startStop}>
                {"Play"}
            </button>
            <button type={"button"} onClick={plus}>
                {"+"}
            </button>
            <button type={"button"} onClick={minus}>
                {"-"}
            </button>
            <button type={"button"} onClick={reset}>
                {"reset"}
            </button>
        </div>
    );
};
refresh();

export default refresh;
