"use client";

import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";

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
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <PropDrilling />
            <UrlEncoding />
            <ContextExamples />
            <ZustandExamples />
            <ReduxExamples />
        </div>
    );
}