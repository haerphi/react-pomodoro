import React from "react";
import refresh from "../app";

let time = 25;
let timeMinute = time;
let timeSeconde = 0;
let intervalID = null;
const play = false;

function moreTime() {
    if (play) {
        timeMinute++;
    } else {
        time++;
        timeMinute = time;
    }
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
    }
}

function descrease() {
    timeSeconde--;
    if (timeSeconde < 0) {
        timeSeconde = 59;
        timeMinute--;
    }
    if (timeMinute < 0) {
        clearInterval(intervalID);
        timeMinute = 0;
        timeSeconde = 0;
    }
    refresh();
}

function startStopTimer() {
    intervalID = setInterval(() => {
        descrease();
    }, 1000);
}

function resetTimer() {
    if (intervalID != null) {
        timeSeconde = 0;
        timeMinute = time;
        clearInterval(intervalID);
    }
}

function Timer() {
    const minute = `0${timeMinute}`.slice(-2);
    const seconde = `0${timeSeconde}`.slice(-2);
    return <h1>{`${minute}:${seconde}`}</h1>;
}

export {Timer, moreTime, lessTime, startStopTimer, resetTimer};
