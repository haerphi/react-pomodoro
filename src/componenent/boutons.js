import React from "react";

function activateLasers() {
    console.log("plop");
}

function boutons(param) {
    return (
        <button type={"button"} onClick={activateLasers}>
            {param.name}
        </button>
    );
}

export default boutons;
