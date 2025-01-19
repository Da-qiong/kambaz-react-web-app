export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label> <br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /> <br /><br />
            <textarea id="wd-description">
            The assignment is available online Submit a link to the landing page of your Web 
            application running on Netlify. The landing page should include the following: 
            Your full name and section Links to each of the lab assignments Link to the Kanbas application 
            Links to all relevant source code repositories The Kanbas application should include a link 
            to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-select-one-group"> Assignment Group: </label>
                    </td>
                    <td>
                        <select id="wd-select-one-group">
                            <option value="ASSIGNMENT1">ASSIGNMENT1</option>
                            <option value="ASSIGNMENT2">ASSIGNMENT2</option>
                            <option value="ASSIGNMENT3">ASSIGNMENT3</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-select-one-display"> Display Grade as: </label>
                    </td>
                    <td>
                        <select id="wd-select-one-display">
                            <option value="Percentage">Percentage</option>
                            <option value="Points-based">Points-based</option>
                            <option value="Letter grading">Letter grading</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-select-one-submission-type"> Submission Type: </label>
                    </td>
                    <td>
                        <select id="wd-select-one-submission-type">
                            <option value="Online">Online</option>
                            <option value="Paper">Paper</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top"></td>
                    <td>
                        <label>Online Entry Options:</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-text" />
                        <label htmlFor="wd-chkbox-text">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-web" />
                        <label htmlFor="wd-chkbox-web">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-media" />
                        <label htmlFor="wd-chkbox-media">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-student" />
                        <label htmlFor="wd-chkbox-student">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-file" />
                        <label htmlFor="wd-chkbox-file">File Uploads</label>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">Assign</td>
                    <td>
                        <label>Assign to:</label><br />

                        <input id="wd-assign" value={"Everyone"} /><br /><br />

                        <label>Due</label><br />
                        <input type="date"
                               value="2025-01-22"
                               id="wd-text-fields-dob"/><br/>

                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label> <br />
                                <input type="date" id="wd-available-from" value="2025-01-03" />
                            </td>
                            <td>
                                <label htmlFor="wd-until">Until</label> <br />
                                <input type="date" id="wd-until" value="2025-01-22" />
                            </td>
                        </tr>
                    </td>
                </tr><br />

            </table>

            <hr />

            <table style={{ width: '100%' }}>
                <tr>
                    <td style={{ textAlign: 'right' }}>
                        <button style={{ marginRight: '10px' }}>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>

        </div>
);}