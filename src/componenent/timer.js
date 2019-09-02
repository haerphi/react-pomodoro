import React from "react";
import refresh from "../app";

let time = 25;
let timeMinute = time;
let timeSeconde = 0;
let intervalID = null;
let play = false;

function moreTime() {
    if (play) {
        timeMinute++;
    } else {
        time++;
        timeMinute = time;
    }
    refresh();
}

function lessTime() {
    if (play) {
        if (timeMinute === 0) {
            timeSeconde = 0;
        }
        timeMinute--;
        if (timeMinute <= 0) {
            timeMinute = 0;
        }
    } else {
        time--;
        timeMinute = time;
    }
    refresh();
}

function decrease() {
    timeSeconde--;
    if (timeSeconde < 0) {
        timeSeconde = 59;
        timeMinute--;
    }
    if (timeMinute < 0) {
        console.log("FIN");
        clearInterval(intervalID);
        timeMinute = 0;
        timeSeconde = 0;
        play = false;
    }
    refresh();
}

function startStopTimer() {
    play = true;
    intervalID = setInterval(() => {
        decrease();
    }, 1000);
}

function resetTimer() {
    if (intervalID != null) {
        timeSeconde = 0;
        timeMinute = time;
        play = false;
        clearInterval(intervalID);
    }
}

function Timer() {
    const minute = `0${timeMinute}`.slice(-2);
    const seconde = `0${timeSeconde}`.slice(-2);
    return <h1>{`${minute}:${seconde}`}</h1>;
}

export {Timer, moreTime, lessTime, startStopTimer, resetTimer};
