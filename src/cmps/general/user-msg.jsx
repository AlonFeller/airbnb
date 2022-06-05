import React from "react";

export function UserMsg({ msg, closeMsg }) {

    console.log(msg)

    return (
        <div className={"user-msg"}>
            <p>{msg}</p>
            <button onClick={closeMsg()}>⨯</button>
        </div>
    );
}