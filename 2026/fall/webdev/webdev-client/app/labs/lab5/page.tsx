import Environment from "./Environment";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <a className = "text-blue-600 underline" id="wd-welcome-link" href={`${HTTP_SERVER}/lab5/welcome`}>
                Welcome
            </a>
            <Environment />
        </div>
    );
}
