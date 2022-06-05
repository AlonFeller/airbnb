import React from "react";

export function UserMsg({ textMsg, closeMsg }) {

    return (
        <section className="user-msg flex">
            <p>{textMsg}</p>
            <button onClick={() => closeMsg()}>⨯</button>
        </section>
    );
}