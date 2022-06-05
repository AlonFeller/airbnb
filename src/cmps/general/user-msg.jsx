import React from "react";

export function UserMsg({ setTxtMsg, closeMsg }) {

    console.log(setTxtMsg())

    return (
        <div className={"user-msg"}>
            <p>{setTxtMsg()}</p>
            <button onClick={closeMsg()}>⨯</button>
        </div>
    );
}