import React from "react";
import refresh from "../app";

//default minute
let time = 25;
//actual minute
let timeMinute = time;
//actual second
let timeSeconde = 0;
//id of the insterval
let intervalID = null;
//is it on play ?
let play = false;

//Add one to the default timer or to the actual timer
function moreTime() {
    if (play) {
        timeMinute++;
    } else {
        time++;
        timeMinute = time;
    }
    refresh();
}

//decrease of one to the default timer or to the actual timer
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

//compte down
function decrease() {
    timeSeconde--;
    if (timeSeconde < 0) {
        timeSeconde = 59;
        timeMinute--;
    }
    if (timeMinute < 0) {
        clearInterval(intervalID);
        timeMinute = 0;
        timeSeconde = 0;
        play = false;
    }
    refresh();
}

//start or pause the timer
function startStopTimer() {
    if (!play) {
        play = true;
        intervalID = setInterval(() => {
            decrease();
        }, 1000);
    } else {
        clearInterval(intervalID);
        play = false;
    }
}

//reset the timer
function resetTimer() {
    if (intervalID != null) {
        timeSeconde = 0;
        timeMinute = time;
    }
}

//render of the timer
function Timer() {
    const minute = `0${timeMinute}`.slice(-2);
    const seconde = `0${timeSeconde}`.slice(-2);
    return <h1>{`${minute}:${seconde}`}</h1>;
}

//exports all needed functions
export {Timer, moreTime, lessTime, startStopTimer, resetTimer};
