"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function Lab4() {
    const sayHello = (text:string) => {
        alert(text);
    };

    return (
        <div id="wd-lab4">
            <h2>Lab4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions 
                theFunction={sayHello}
                theOtherFunction={() => alert("Sample from parent")}
                message="Hello from Lab 4"
                userName="Tyler"
            />
        </div>
    );
}