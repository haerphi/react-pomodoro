import React from "react";

let timeM = 0;

function moreTime() {
    timeM++;
}
function lessTime() {
    timeM--;
}

function Timer() {
    return <h1>{`${timeM}:00`}</h1>;
}

export {Timer, moreTime, lessTime};
