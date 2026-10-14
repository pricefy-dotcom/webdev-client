import BooleanVariables from "./BooleanVariables";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes"
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalInline from "./ConditionalOutputInline";
import NullUndefined from "./NullUndefined";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunction from "./ArrowFunctions";

export default function Lab3() {
    return (
        <div id="wd-lab3">
            <h2>Lab 3</h2>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalInline />
            <NullUndefined />
            <LegacyFunctions />
            <ArrowFunction />
        </div>
    );
}
