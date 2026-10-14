export default function VariableTypes() {
    let numberVariable = 123;
    let yourNumber = 456;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let yourString = "Goodnight Moon!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isYourNumber = typeof yourNumber;
    let isString = typeof stringVariable;
    let isYourString = typeof yourString;
    let isBoolean = typeof booleanVariable;
    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    let isSampleCount = typeof sampleCount;
    let isSampleLabel = typeof sampleLabel;
    return (
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariables = {numberVariable}
            <br />
            yourNumber = {yourNumber}
            <br />
            floatingPointNumber = {floatingPointNumber}
            <br />
            stringVariable = {stringVariable}
            <br />
            yourString = {yourString}
            <br />
            booleanVariable = {booleanVariable + ""}
            <br />
            isNumber = {isNumber}
            <br />
            isYourNumber = {isYourNumber}
            <br />
            isString = {isString}
            <br />
            isYourString = {isYourString}
            <br />
            isBoolean = {isBoolean}
            <br />
            sampleCount = {sampleCount}
            <br />
            sampleLabel = {sampleLabel}
            <br />
            isSampleCount = {isSampleCount}
            <br />
            isSampleLabel = {isSampleLabel}
            <hr />
        </div>
    );
}