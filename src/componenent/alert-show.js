import React from "react";

const alert = <h1>{"L'heure de la pause est arrivée :p"}</h1>;
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
    return <div className={"alert"}> {contain} </div>;
}

export {AlertShow, activeAlert};
