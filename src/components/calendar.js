// import React from "react";
// import Calendar from "@ericz1803/react-google-calendar";
// import { css } from "@emotion/react";

// const API_KEY = "AIzaSyBe0EChkINb2f2wREJSDDsnE7VV2tY6KdE";

// let calendars = [
//     { calendarId: "nhinds1988@gmail.com" }
// ];

// let styles = {
//     calendar: {
//         borderWidth: "3px"
//     },
    
//     today: css`
//         color: red;
//         border: 1px solid red;
//     `
// };

const Calendar = props => {
    return (
        <div>
            <div className="k-mb-4">
                {/* <div
                    style={{
                        width: "90%",
                        height: "30%",
                        margin: "auto",
                        maxWidth: "1200px"
                    }}
                    >
                    <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
                </div> */}
            </div>
        </div>
    );
};

export default Calendar;