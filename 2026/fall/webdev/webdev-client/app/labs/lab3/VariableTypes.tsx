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
    return (
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariables = {numberVariable}
            <br />
            yourNumber = {isYourNumber}
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
            <hr />
        </div>
    );
}