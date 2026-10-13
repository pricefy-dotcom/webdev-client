export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;
    let customLet = "Tyler Price";
    const constant1 = functionScoped - blockScoped;
    const yourConstant = "Hello, World!";
    const sampleSum = functionScoped + blockScoped;
    return (
        <div id="wd-variables-and-constants">
            <h4>Variables andd Constants</h4>
            functionScoped = {functionScoped}
            <br />
            blockScoped = {blockScoped}
            <br />
            constant1 = {constant1}
            <br />
            customLet = {customLet}
            <br />
            yourConstant = {yourConstant}
            <br />
            sampleSum = {sampleSum}
            <hr />
        </div>
    );
}