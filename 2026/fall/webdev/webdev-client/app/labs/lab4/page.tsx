"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";

export default function Lab4() {
  function sayHello(message: string) {
    alert(message);
  }
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions message="Hello" theFunction={sayHello} />
      <Counter />
      <BooleanStateVariables /> 
      <StringStateVariables />
      <DateStateVariable /> 
      <ObjectStateVariable />
    </div>
  );
}