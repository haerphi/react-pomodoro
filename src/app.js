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
import {AlertShow} from "./componenent/alert-show";

//variables
let playButtonValue = "Play";

//refresh render
function refresh() {
    ReactDOM.render(<App />, document.querySelector("#root"));
}

//The app
const App = () => {
    //function for the + button
    function plus() {
        moreTime();
        refresh();
    }

    //function for the - button
    function minus() {
        lessTime();
        refresh();
    }

    //function for the reset button
    function reset() {
        resetTimer();
        refresh();
    }

    //function for the play/pause button
    function startStop() {
        startStopTimer();
        refresh();
        if (playButtonValue === "Play") {
            playButtonValue = "Pause";
        } else {
            playButtonValue = "Play";
        }
    }

    //html structure
    return (
        <div>
            <Timer />
            <button type={"button"} onClick={startStop}>
                {playButtonValue}
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
            <AlertShow />
        </div>
    );
};
refresh();

//export the refresh to use it in timer
export default refresh;
