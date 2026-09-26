export default function YourForm() {
    return (
        <form
            id="wd-your-form"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <h5>Text Fields</h5>
            <label htmlFor="wd-your-form-first-name">First name: </label>
            <input
                type="text"
                placeholder="Tyler"
                id="wd-your-form-first-name"
            />
            <br />
            <label htmlFor="wd-your-form-last-name">Last name: </label>
            <input
                type="text"
                placeholder="Price"
                id="wd-your-form-last-name"
            />
            <br />
            <label htmlFor="wd-your-form-username">Username: </label>
            <input
                type="text"
                placeholder="tylerprice"
                id="wd-your-form-username"
            />
            <br />
            <label htmlFor="wd-your-form-password">Password: </label>
            <input
                type="password"
                placeholder="S3cur3P@ssw0rd"
                id="wd-your-form-password"
            />
            <br />

            <h5>Text boxes</h5>
            <label htmlFor="wd-your-form-bio">Bio: </label>
            <br />
            <textarea
                id="wd-your-form-bio"
                cols={30}
                rows={6}
                placeholder="My name is Tyler and I am a Masters CS student at Northeastern. I enjoy playing video games and reading in my free time."
            />

            <h5>Class standing</h5>
            <input type="radio" name="wd-your-form-standing" id="wd-your-form-freshman" />
            <label htmlFor="wd-your-form-freshman">Freshman</label>
            <br />
            <input type="radio" name="wd-your-form-standing" id="wd-your-form-sophomore" />
            <label htmlFor="wd-your-form-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="wd-your-form-standing" id="wd-your-form-junior" />
            <label htmlFor="wd-your-form-junior">Junior</label>
            <br />
            <input type="radio" name="wd-your-form-standing" id="wd-your-form-senior" />
            <label htmlFor="wd-your-form-senior">Senior</label>
            <br />
            <input type="radio" name="wd-your-form-standing" id="wd-your-form-graduate" />
            <label htmlFor="wd-your-form-graduate">Graduate</label>
            <br />

            <h5>Enrollment status</h5>
            <input type="radio" name="wd-your-form-enrollment" id="wd-your-form-full-time" />
            <label htmlFor="wd-your-form-full-time">Full-time</label>
            <br />
            <input type="radio" name="wd-your-form-enrollment" id="wd-your-form-part-time" />
            <label htmlFor="wd-your-form-part-time">Part-time</label>
            <br />

            <h5>Interests</h5>
            <input type="checkbox" name="wd-your-form-interests" id="wd-your-form-frontend" />
            <label htmlFor="wd-your-form-frontend">Front-end development</label>
            <br />
            <input type="checkbox" name="wd-your-form-interests" id="wd-your-form-backend" />
            <label htmlFor="wd-your-form-backend">Back-end development</label>
            <br />
            <input type="checkbox" name="wd-your-form-interests" id="wd-your-form-databases" />
            <label htmlFor="wd-your-form-databases">Databases</label>
            <br />
            <input type="checkbox" name="wd-your-form-interests" id="wd-your-form-ai" />
            <label htmlFor="wd-your-form-ai">AI tools</label>
            <br />

            <h5>Select one</h5>
            <label htmlFor="wd-your-form-major">Major: </label>
            <br />
            <select id="wd-your-form-major" defaultValue="CS">
                <option value="CS">Computer Science</option>
                <option value="IT">Information Technology</option>
                <option value="SE">Software Engineering</option>
                <option value="DS">Data Science</option>
            </select>

            <h5>Select many</h5>
            <label htmlFor="wd-your-form-topics">Topics to learn: </label>
            <br />
            <select
                multiple
                id="wd-your-form-topics"
                defaultValue={["HTML", "CSS"]}
            >
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JavaScript</option>
                <option value="REACT">React</option>
                <option value="NODE">Node.js</option>
            </select>

            <h5>Other field types</h5>
            <label htmlFor="wd-your-form-email">Email: </label>
            <input
                type="email"
                placeholder="price.ty@northeastern.edu"
                id="wd-your-form-email"
            />
            <br />
            <label htmlFor="wd-your-form-grad-year">Graduation year: </label>
            <input
                type="number"
                placeholder="2028"
                min={2026}
                max={2032}
                id="wd-your-form-grad-year"
            />
            <br />
            <label htmlFor="wd-your-form-start-date">Start date: </label>
            <input
                type="date"
                defaultValue="2026-09-01"
                min="2020-01-01"
                max="2030-12-31"
                id="wd-your-form-start-date"
            />
            <br />
            <label htmlFor="wd-your-form-excitement">Excitement (0–10): </label>
            <input
                type="range"
                defaultValue="5"
                min="0"
                max="10"
                id="wd-your-form-excitement"
            />
            <br />

            <button id="wd-your-form-save" type="submit">
                Save
            </button>
            <button id="wd-your-form-cancel" type="button">
                Cancel
            </button>
        </form>
    );
}
