import React from "react";

const alert = <h1>{"alert !"}</h1>;
const empty = "";

let contain = empty;

function activeAlert() {
    if (contain === "") {
        contain = alert;
    } else {
        contain = "";
    }
}

function AlertShow() {
    return <div> {contain} </div>;
}

export {AlertShow, activeAlert};
