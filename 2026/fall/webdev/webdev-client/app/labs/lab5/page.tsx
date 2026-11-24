import Environment from "./Environment";
import PathParameters from "./PathParamaters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteArraysAsync from "./WorkingWithRemoteArraysAsync";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <Environment />
            <PathParameters />
            <QueryParameters />
            <WorkingWithRemoteObjects />
            <WorkingWithRemoteArrays />
            <HttpClient />
            <WorkingWithRemoteArraysAsync />
            <WorkingWithRemoteObjectsAsync />
            <HelloRoute />
            <CalculatorNextWebApiClient />

        </div>
    );
}
